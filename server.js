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

/* Email 2: email inicial al portador — plantilla HTML completa */
function buildInitialEmailHTML(p) {
  const SITE_URL = (process.env.SITE_URL || 'https://brochures-production-5c8c.up.railway.app').replace(/\/$/, '');
  const ctaUrl   = `${SITE_URL}/portadores.html?ref=email&id=${encodeURIComponent(p.id)}`;

  let saludo;
  if (p.genero === 'femenino')       saludo = `Estimada ${p.nombre || 'portadora'},`;
  else if (p.genero === 'masculino') saludo = `Estimado ${p.nombre || 'portador'},`;
  else                               saludo = `Estimado/a ${p.nombre || 'portador/a'},`;

  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Cuidar el presente, preparar el futuro</title>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  body,table,td,p,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}
  img{-ms-interpolation-mode:bicubic;border:0;outline:none;text-decoration:none}
  body{margin:0;padding:0;background:#f5f3ff}
  @media only screen and (max-width:620px){
    .email-container{width:100%!important}
    .email-body{padding:32px 24px!important}
    .email-header{padding:36px 24px 32px!important}
    .email-footer{padding:20px 24px!important}
    .cta-btn{padding:14px 28px!important;font-size:15px!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:#f5f3ff;font-family:Inter,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f3ff;">
<tr><td align="center" style="padding:40px 16px 48px;">

  <table class="email-container" width="600" cellpadding="0" cellspacing="0" border="0"
         style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(124,58,237,0.10);">

    <!-- ═══════════════ HEADER ═══════════════ -->
    <tr>
      <td class="email-header" align="center"
          style="background:#7c3aed;background-image:linear-gradient(135deg,#7c3aed 0%,#3b82f6 100%);
                 padding:52px 48px 48px;text-align:center;">
        <p style="margin:0 0 14px;font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:600;
                  letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.70);">
          Programa de seguimiento preclínico
        </p>
        <h1 style="margin:0;font-family:Lora,Georgia,'Times New Roman',serif;font-size:28px;
                   font-weight:600;color:#ffffff;line-height:1.30;">
          Cuidar el presente,<br>preparar el futuro
        </h1>
      </td>
    </tr>

    <!-- ═══════════════ BODY ═══════════════ -->
    <tr>
      <td class="email-body"
          style="background:#ffffff;padding:48px 48px 44px;color:#0f172a;">

        <!-- Saludo -->
        <p style="margin:0 0 28px;font-family:Lora,Georgia,'Times New Roman',serif;
                  font-size:19px;font-weight:400;color:#0f172a;line-height:1.4;">
          ${saludo}
        </p>

        <!-- Párrafo 1 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          Nos ponemos en contacto contigo porque creemos que hay algo que mereces saber.
        </p>

        <!-- Párrafo 2 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          Durante años, ser portador o portadora de una mutación en el gen de la proteína del prion
          ha significado, para muchas personas, vivir con una incertidumbre difícil de nombrar.
          Saber sin poder hacer nada. Esperar sin saber cuándo.
        </p>

        <!-- Párrafo 3 — destacado -->
        <p style="margin:0 0 18px;font-family:Lora,Georgia,'Times New Roman',serif;
                  font-size:17px;font-weight:600;font-style:italic;color:#7c3aed;line-height:1.5;">
          Eso está cambiando.
        </p>

        <!-- Párrafo 4 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          No de golpe, no con promesas vacías — sino con ciencia real, con investigación que avanza
          más rápido que nunca y con ensayos clínicos que, por primera vez, están pensados también
          para personas como tú: personas que aún no tienen síntomas, pero que quieren estar
          preparadas cuando llegue el momento de actuar.
        </p>

        <!-- Párrafo 5 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          Hemos puesto en marcha un programa de seguimiento preclínico. No es un estudio más.
          Es un acompañamiento — tuyo, a tu ritmo, con información real y con un equipo que lleva
          años dedicado a esto y que estará contigo en cada paso.
        </p>

        <!-- Párrafo 6 -->
        <p style="margin:0 0 36px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          No te pedimos nada todavía. Solo que le eches un vistazo.
        </p>

        <!-- CTA button — tabla para Outlook -->
        <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 44px;">
          <tr>
            <td align="center"
                style="background:#7c3aed;background-image:linear-gradient(135deg,#7c3aed,#3b82f6);
                       border-radius:100px;">
              <a href="${ctaUrl}" class="cta-btn"
                 style="display:inline-block;padding:16px 36px;font-family:Inter,Arial,sans-serif;
                        font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;
                        border-radius:100px;letter-spacing:0.01em;">
                Quiero conocer el programa &rarr;
              </a>
            </td>
          </tr>
        </table>

        <!-- Separador -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
          <tr><td style="border-top:1px solid #e2e8f0;font-size:0;line-height:0;">&nbsp;</td></tr>
        </table>

        <!-- Firma -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <p style="margin:0 0 3px;font-family:Inter,Arial,sans-serif;font-size:14px;
                        font-weight:600;color:#0f172a;">Dr. Joaquín Castilla</p>
              <p style="margin:0 0 20px;font-family:Inter,Arial,sans-serif;font-size:13px;color:#64748b;">
                <a href="mailto:jcastilla@cicbiogune.es"
                   style="color:#7c3aed;text-decoration:none;">jcastilla@cicbiogune.es</a>
                &nbsp;&middot;&nbsp;
                <a href="tel:+34618682920" style="color:#64748b;text-decoration:none;">+34 618 68 29 20</a>
              </p>
              <p style="margin:0 0 3px;font-family:Inter,Arial,sans-serif;font-size:14px;
                        font-weight:600;color:#0f172a;">Dra. Izaro Kortazar</p>
              <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:13px;color:#64748b;">
                <a href="mailto:izaro.kortazarzubizarreta@osakidetza.eus"
                   style="color:#7c3aed;text-decoration:none;">izaro.kortazarzubizarreta@osakidetza.eus</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- ═══════════════ FOOTER ═══════════════ -->
    <tr>
      <td class="email-footer" align="center"
          style="background:#1e293b;padding:24px 48px;text-align:center;">
        <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:11px;
                  color:#94a3b8;line-height:1.6;">
          Programa aprobado por el Comité de Ética de la Investigación del País Vasco
          &nbsp;&middot;&nbsp; Código PI2025164
        </p>
      </td>
    </tr>

  </table>

</td></tr>
</table>
</body>
</html>`;
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
      emailLeido:       false,
      fechaLectura:     null,
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
      'emailLeido', 'fechaLectura',
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
/* GET /api/admin/correo-preview/:id  — HTML del email para preview   */
/* ------------------------------------------------------------------ */
app.get('/api/admin/correo-preview/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const p    = data.portadores.find(p => p.id === req.params.id);
    if (!p) return res.status(404).send('<p style="font-family:sans-serif;color:#dc2626;">Portador no encontrado</p>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(buildInitialEmailHTML(p));
  } catch (err) {
    res.status(500).send('<p style="font-family:sans-serif;color:#dc2626;">Error: ' + err.message + '</p>');
  }
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

    if (!p.email)  return res.status(400).json({ error: 'El portador no tiene email registrado' });
    if (!subject)  return res.status(400).json({ error: 'El asunto no puede estar vacío' });

    await sendMail({
      to:      p.email,
      subject,
      html:    buildInitialEmailHTML(p),
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

/* ------------------------------------------------------------------ */
/* GET /api/portadores/leido/:id  — tracking de lectura (público)     */
/* ------------------------------------------------------------------ */
app.get('/api/portadores/leido/:id', async (req, res) => {
  try {
    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ ok: false });

    if (!data.portadores[idx].emailLeido) {
      data.portadores[idx].emailLeido   = true;
      data.portadores[idx].fechaLectura = new Date().toISOString();
      await writeData(data);
    }
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false });
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
    'Email Enviado','Fecha Envío','Email Leído','Fecha Lectura',
    'Aceptado','Fecha Aceptación','Notas','Orden'
  ];
  const rows = portadores.map(p => [
    p.id, p.codigoTXPR, p.nombre, p.apellidos, p.dni, p.email,
    p.genero || '',
    p.emailEnviado ? 'Sí' : 'No',
    fmtDate(p.fechaEnvioEmail),
    p.emailLeido ? 'Sí' : 'No',
    fmtDate(p.fechaLectura),
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
