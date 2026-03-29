require('dotenv').config();

const express  = require('express');
const path     = require('path');
const fs       = require('fs').promises;
const cron     = require('node-cron');

const app  = express();
const PORT = process.env.PORT || 3000;

const DATA_FILE = path.join(__dirname, 'data', 'portadores.json');

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

/* ------------------------------------------------------------------ */
/* Parsers y archivos estáticos                                         */
/* ------------------------------------------------------------------ */
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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
      'codigoTXPR', 'nombre', 'apellidos', 'dni', 'email',
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

    res.json({ ok: true, id: data.portadores[idx].id });
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
    'ID','TXPR','Nombre','Apellidos','DNI','Email',
    'Email Enviado','Fecha Envío','Aceptado','Fecha Aceptación','Notas','Orden'
  ];
  const rows = portadores.map(p => [
    p.id, p.codigoTXPR, p.nombre, p.apellidos, p.dni, p.email,
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
