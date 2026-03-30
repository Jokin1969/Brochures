require('dotenv').config();

const express    = require('express');
const path       = require('path');
const fs         = require('fs').promises;
const cron       = require('node-cron');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR  = '/app/data';
const DATA_FILE = path.join(DATA_DIR, 'portadores.json');

/* Crear directorio de datos al arrancar si no existe */
const fsSync = require('fs');
if (!fsSync.existsSync(DATA_DIR)) {
  fsSync.mkdirSync(DATA_DIR, { recursive: true });
}

/* ------------------------------------------------------------------ */
/* Helpers de datos                                                     */
/* ------------------------------------------------------------------ */
async function readData() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return { contador: 0, portadores: [] };
  }
}

async function writeData(data) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

/* ------------------------------------------------------------------ */
/* Middleware de autenticación admin                                    */
/* ------------------------------------------------------------------ */
function requireAdmin(req, res, next) {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) {
    return res.status(500).json({ error: 'ADMIN_PASSWORD no configurado en el servidor' });
  }
  const auth      = req.headers['authorization'] || '';
  const fromBearer = auth.startsWith('Bearer ') ? auth.slice(7) : null;
  const fromQuery  = req.query.password || null;
  const provided   = fromBearer || fromQuery;

  if (provided !== secret) {
    return res.status(401).json({ error: 'No autorizado' });
  }
  next();
}

/* ================================================================== */
/* NODEMAILER — transporte SMTP                                         */
/* ================================================================== */

let _transporter = null;

function getTransporter() {
  if (_transporter) return _transporter;
  _transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return _transporter;
}

function fmtDateEmail(iso) {
  if (!iso) return '';
  const d   = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} `
       + `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

async function sendMail(options) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('Credenciales SMTP no configuradas (SMTP_USER / SMTP_PASS)');
  }
  return getTransporter().sendMail({
    from: `"Programa Portadores" <${process.env.SMTP_USER}>`,
    ...options,
  });
}

/* Email 1: notificación interna al investigador */
function buildNotificationHTML(p) {
  const fecha = fmtDateEmail(p.fechaAceptacion);
  return `<!DOCTYPE html><html lang="es"><body style="font-family:Arial,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;">
<h2 style="color:#7c3aed;">Nuevo portador ha confirmado su participación</h2>
<p>Un portador ha completado el programa de seguimiento y ha confirmado su deseo de participar.</p>
<table style="width:100%;border-collapse:collapse;margin:20px 0;">
  <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:40%;">Nombre</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${p.nombre}</td></tr>
  <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;">Apellidos</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${p.apellidos}</td></tr>
  <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;">DNI</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;">${p.dni}</td></tr>
  <tr><td style="padding:8px 12px;background:#f8fafc;font-weight:600;">Confirmación</td><td style="padding:8px 12px;">${fecha}</td></tr>
</table>
<p>Este portador ha sido registrado automáticamente en el panel de administración con estado: <strong>Aceptado ✓</strong></p>
<p style="color:#64748b;font-size:0.875em;">Puedes consultar su ficha completa en el panel de administración.</p>
</body></html>`;
}

/* Email 2: email inicial al portador — HTML para el envío desde el servidor */
function buildPortadorEmailHTML(bodyText) {
  /* Convierte texto plano a HTML respetando saltos de línea */
  const html = bodyText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .split('\n')
    .map(line => line.trim() === '' ? '<br>' : `<p style="margin:0 0 6px;">${line}</p>`)
    .join('\n');
  return `<!DOCTYPE html><html lang="es"><body style="font-family:Arial,sans-serif;color:#0f172a;max-width:560px;margin:0 auto;padding:24px;">${html}</body></html>`;
}

/* ------------------------------------------------------------------ */
/* Parsers y archivos estáticos                                         */
/* ------------------------------------------------------------------ */
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* Ruta para la página de composición de correo */
app.get('/admin/correo/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'correo.html'));
});

/* ------------------------------------------------------------------ */
/* GET /api/admin/portadores  — lista completa (requiere auth)          */
/* ------------------------------------------------------------------ */
app.get('/api/admin/portadores', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    res.json({ contador: data.contador, portadores: data.portadores });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* POST /api/admin/portadores  — crear nuevo portador                  */
/* ------------------------------------------------------------------ */
app.post('/api/admin/portadores', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    data.contador = (data.contador || 0) + 1;

    const id = String(data.contador).padStart(3, '0');
    const nuevo = {
      id,
      codigoTXPR:       req.body.codigoTXPR       || '',
      nombre:           req.body.nombre            || '',
      apellidos:        req.body.apellidos         || '',
      dni:              req.body.dni               || '',
      email:            req.body.email             || '',
      genero:           req.body.genero            || '',
      emailEnviado:     false,
      fechaEnvioEmail:  null,
      aceptado:         false,
      fechaAceptacion:  null,
      notas:            req.body.notas             || '',
      orden:            data.portadores.length,
    };

    data.portadores.push(nuevo);
    await writeData(data);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* PUT /api/admin/portadores/:id  — actualizar portador                */
/* ------------------------------------------------------------------ */
app.put('/api/admin/portadores/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    /* Campos editables; id y contadores de fecha se gestionan internamente */
    const allowed = [
      'codigoTXPR', 'nombre', 'apellidos', 'dni', 'email', 'genero',
      'emailEnviado', 'fechaEnvioEmail',
      'aceptado', 'fechaAceptacion',
      'notas', 'orden'
    ];
    allowed.forEach(k => {
      if (req.body[k] !== undefined) data.portadores[idx][k] = req.body[k];
    });

    await writeData(data);
    res.json(data.portadores[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* DELETE /api/admin/portadores/:id  — eliminar portador               */
/* ------------------------------------------------------------------ */
app.delete('/api/admin/portadores/:id', requireAdmin, async (req, res) => {
  try {
    const data  = await readData();
    const before = data.portadores.length;
    data.portadores = data.portadores.filter(p => p.id !== req.params.id);
    if (data.portadores.length === before) {
      return res.status(404).json({ error: 'Portador no encontrado' });
    }
    await writeData(data);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* POST /api/portadores/aceptar  — endpoint público (portadores-programa) */
/* ------------------------------------------------------------------ */
app.post('/api/portadores/aceptar', async (req, res) => {
  try {
    const { dni } = req.body;
    if (!dni) return res.status(400).json({ error: 'Falta el campo dni' });

    const data = await readData();
    const idx  = data.portadores.findIndex(
      p => p.dni.trim().toUpperCase() === dni.trim().toUpperCase()
    );
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    data.portadores[idx].aceptado        = true;
    data.portadores[idx].fechaAceptacion = new Date().toISOString();
    await writeData(data);

    const p = data.portadores[idx];
    res.json({ ok: true, id: p.id, nombre: p.nombre || '', genero: p.genero || '' });

    /* Notificación interna al investigador (no bloquea la respuesta) */
    if (process.env.CONTACT_EMAIL) {
      const nombre = [p.nombre, p.apellidos].filter(Boolean).join(' ') || p.id;
      sendMail({
        to:      process.env.CONTACT_EMAIL,
        subject: `Nuevo portador ha confirmado su participación — ${nombre}`,
        html:    buildNotificationHTML(p),
      }).catch(err => {
        console.error(`[email ${nowISO()}] Error notificación aceptación: ${err.message}`);
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* Ruta raíz                                                            */
/* ------------------------------------------------------------------ */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* ------------------------------------------------------------------ */
/* POST /api/admin/correo/:id  — enviar email inicial al portador      */
/* ------------------------------------------------------------------ */
app.post('/api/admin/correo/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    const p       = data.portadores[idx];
    const subject = req.body.subject || '';
    const body    = req.body.body    || '';

    if (!p.email) return res.status(400).json({ error: 'El portador no tiene email registrado' });
    if (!subject) return res.status(400).json({ error: 'El asunto no puede estar vacío' });
    if (!body)    return res.status(400).json({ error: 'El cuerpo del mensaje no puede estar vacío' });

    await sendMail({
      to:      p.email,
      subject,
      text:    body,
      html:    buildPortadorEmailHTML(body),
    });

    /* Registrar envío solo si el SMTP no lanzó error */
    data.portadores[idx].emailEnviado    = true;
    data.portadores[idx].fechaEnvioEmail = new Date().toISOString();
    await writeData(data);

    res.json({ ok: true, fechaEnvioEmail: data.portadores[idx].fechaEnvioEmail });
  } catch (err) {
    console.error(`[email ${nowISO()}] Error envío portador ${req.params.id}: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

/* ================================================================== */
/* BACKUP EN DROPBOX                                                    */
/* ================================================================== */

/* Formato de fecha para nombre de archivo y logs */
function fmtBackupDate(d) {
  const pad = n => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())}`
       + `_${pad(d.getUTCHours())}-${pad(d.getUTCMinutes())}`;
}

/* Fecha ISO legible para logs */
function nowISO() { return new Date().toISOString(); }

/* Generar CSV (mismo formato que el botón del panel de admin) */
function generateCSV(portadores) {
  const fmtDate = iso => {
    if (!iso) return '';
    const d   = new Date(iso);
    const pad = n => String(n).padStart(2, '0');
    return `${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} `
         + `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  const headers = [
    'ID','TXPR','Nombre','Apellidos','DNI','Email','Género',
    'Email Enviado','Fecha Envío','Aceptado','Fecha Aceptación','Notas','Orden'
  ];
  const rows = portadores.map(p => [
    p.id, p.codigoTXPR, p.nombre, p.apellidos, p.dni, p.email,
    p.genero || '',
    p.emailEnviado ? 'Sí' : 'No',
    fmtDate(p.fechaEnvioEmail),
    p.aceptado ? 'Sí' : 'No',
    fmtDate(p.fechaAceptacion),
    (p.notas || '').replace(/"/g, '""'),
    p.orden
  ].map(v => `"${v != null ? String(v) : ''}"`).join(','));

  /* BOM UTF-8 para compatibilidad con Excel */
  return '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
}

/* Obtener access token desde refresh token (nunca se guarda) */
async function getDropboxAccessToken() {
  const { DROPBOX_REFRESH_TOKEN, DROPBOX_APP_KEY, DROPBOX_APP_SECRET } = process.env;
  if (!DROPBOX_REFRESH_TOKEN || !DROPBOX_APP_KEY || !DROPBOX_APP_SECRET) {
    throw new Error('Faltan variables de entorno DROPBOX_* en el servidor');
  }
  const body = new URLSearchParams({
    grant_type:    'refresh_token',
    refresh_token: DROPBOX_REFRESH_TOKEN,
    client_id:     DROPBOX_APP_KEY,
    client_secret: DROPBOX_APP_SECRET,
  });
  const r = await fetch('https://api.dropboxapi.com/oauth2/token', {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Dropbox token error ${r.status}: ${text}`);
  }
  const json = await r.json();
  return json.access_token;
}

/* Subir CSV a Dropbox */
async function uploadToDropbox(csvContent, filename) {
  const accessToken = await getDropboxAccessToken();
  const basePath    = (process.env.DROPBOX_BACKUP_PATH || '/Backups').replace(/\/$/, '');
  const dropboxPath = `${basePath}/${filename}`;

  const apiArg = JSON.stringify({
    path:       dropboxPath,
    mode:       'add',       /* nunca sobreescribe */
    autorename: false,
    mute:       true,
  });

  const r = await fetch('https://content.dropboxapi.com/2/files/upload', {
    method:  'POST',
    headers: {
      'Authorization':   `Bearer ${accessToken}`,
      'Dropbox-API-Arg': apiArg,
      'Content-Type':    'application/octet-stream',
    },
    body: csvContent,
  });

  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Dropbox upload error ${r.status}: ${text}`);
  }
  return await r.json();   /* metadatos del archivo subido */
}

/* Función principal de backup — llama readData, genera CSV, sube */
async function runBackup() {
  const ts  = new Date();
  const tag = `[backup ${nowISO()}]`;
  try {
    const data     = await readData();
    const csv      = generateCSV(data.portadores);
    const filename = `portadores_${fmtBackupDate(ts)}.csv`;
    const meta     = await uploadToDropbox(csv, filename);
    console.log(`${tag} OK — ${meta.path_display} (${data.portadores.length} portadores)`);
    return { ok: true, filename, portadores: data.portadores.length };
  } catch (err) {
    console.error(`${tag} ERROR — ${err.message}`);
    throw err;
  }
}

/* ------------------------------------------------------------------ */
/* POST /api/admin/backup  — backup manual desde el panel (auth)       */
/* ------------------------------------------------------------------ */
app.post('/api/admin/backup', requireAdmin, async (req, res) => {
  try {
    const result = await runBackup();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* Cron: backup automático cada lunes a las 03:00 UTC                  */
/* ------------------------------------------------------------------ */
if (process.env.DROPBOX_REFRESH_TOKEN) {
  cron.schedule('0 3 * * 1', () => {
    console.log(`[cron] Iniciando backup semanal — ${nowISO()}`);
    runBackup().catch(() => { /* error ya logueado en runBackup */ });
  }, { timezone: 'UTC' });
  console.log('[cron] Backup semanal programado: lunes 03:00 UTC');
} else {
  console.log('[cron] DROPBOX_REFRESH_TOKEN no configurado — backup automático desactivado');
}

app.listen(PORT, () => {
  console.log(`Brochures running on port ${PORT}`);
});
