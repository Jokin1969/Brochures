require('dotenv').config();

const express = require('express');
const path    = require('path');
const fs      = require('fs').promises;

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

app.listen(PORT, () => {
  console.log(`Brochures running on port ${PORT}`);
});
