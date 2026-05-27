require('dotenv').config();

const express    = require('express');
const path       = require('path');
const fs         = require('fs').promises;
const crypto     = require('crypto');
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
/* ================================================================== */
/* EMAIL_STRINGS — Cadenas traducibles de los correos a portadores     */
/* ================================================================== */
/* Idiomas soportados: es (canónico), eu, ca, gl, en.                 */
/* Las claves ausentes/vacías en otros idiomas caen a castellano.     */
/* Las firmas de los investigadores (nombres propios, emails,         */
/* teléfonos) NO están aquí: se dejan inline en el builder porque     */
/* son datos invariables.                                             */
/* ================================================================== */
const EMAIL_STRINGS = {
  es: {
    /* ---- Comunes (ambos correos) ---- */
    eyebrow:                  'Programa de seguimiento preclínico',
    h1:                       'Cuidar el presente,<br>preparar el futuro',
    salute_f:                 'Estimada {nombre},',
    salute_m:                 'Estimado {nombre},',
    salute_nb:                'Estimado/a {nombre},',
    fallback_f:               'portadora',
    fallback_m:               'portador',
    fallback_nb:              'portador/a',
    sig_castilla_role:        'Profesor de investigación',
    sig_castilla_role_sub:    'Responsable del laboratorio de priones',
    sig_kortazar_role:        'Jefa de servicio de Neurología',
    sig_kortazar_institution: 'Hospital Universitario Araba',
    footer_ethics:            'Programa aprobado por el Comité de Ética de la Investigación del País Vasco &nbsp;&middot;&nbsp; Código PI2025164',

    /* ---- Correo inicial ---- */
    initial_subject_default:  'Algo está cambiando. Queremos contártelo.',
    initial_doc_title:        'Cuidar el presente, preparar el futuro',
    initial_p1: 'Nos ponemos en contacto contigo porque creemos que hay algo que mereces saber.',
    initial_p2: 'Durante años, ser portador o portadora de una mutación en el gen de la proteína del prion ha significado, para muchas personas, vivir con una incertidumbre difícil de nombrar. Saber sin poder hacer nada. Esperar sin saber cuándo.',
    initial_p3: 'Eso está cambiando.',
    initial_p4: 'No de golpe, no con promesas vacías — sino con ciencia real, con investigación que avanza más rápido que nunca y con ensayos clínicos que, por primera vez, están pensados también para personas como tú: personas que aún no tienen síntomas, pero que quieren estar preparadas cuando llegue el momento de actuar.',
    initial_p5: 'Hemos puesto en marcha un programa de seguimiento preclínico. No es un estudio más. Es un acompañamiento — tuyo, a tu ritmo, con información real y con un equipo que lleva años dedicado a esto y que estará contigo en cada paso.',
    initial_p6: 'No te pedimos nada todavía. Solo que le eches un vistazo.',
    initial_cta: 'Quiero conocer el programa &rarr;',

    /* ---- Correo de píldora ---- */
    pildoras_subject_default: 'Nueva píldora de información disponible',
    pildoras_doc_title:       'Nueva píldora de información disponible',
    pildoras_subtitle:        'Nueva píldora de información disponible',
    pildoras_p1: 'Tenemos una nueva actualización para ti.',
    pildoras_p2: 'En el programa de seguimiento publicamos periódicamente <strong>Píldoras de información</strong> &mdash; actualizaciones breves, claras y rigurosas sobre ensayos clínicos, nuevas terapias y hallazgos científicos relevantes para personas como tú.',
    pildoras_p3: 'Hay una nueva píldora disponible. Entra cuando quieras y léela a tu ritmo.',
    pildoras_cta: 'Ver la nueva píldora &rarr;',
    pildoras_unsub_note: 'Recibes este email porque en su momento solicitaste expresamente ser informado/a cuando hubiera nuevas píldoras de información disponibles. Si ya no deseas recibir este tipo de comunicaciones, puedes indicárnoslo aquí:',
    pildoras_unsub_btn:  'No deseo seguir recibiendo estas notificaciones',
  },
  eu: {
    /* ---- Comunes ---- */
    eyebrow:                  'Aurre-kliniko jarraipen programa',
    h1:                       'Oraina zaindu,<br>etorkizuna prestatu',
    salute_f:                 'Agurgarri {nombre},',
    salute_m:                 'Agurgarri {nombre},',
    salute_nb:                'Agurgarri {nombre},',
    fallback_f:               'eramaile',
    fallback_m:               'eramaile',
    fallback_nb:              'eramaile',
    sig_castilla_role:        'Ikerketa irakaslea',
    sig_castilla_role_sub:    'Prionen laborategiaren arduraduna',
    sig_kortazar_role:        'Neurologiako zerbitzuburua',
    sig_kortazar_institution: 'Arabako Unibertsitate Ospitalea',
    footer_ethics:            'Programa Euskadiko Ikerketa Etika Batzordeak onartuta &nbsp;&middot;&nbsp; PI2025164 kodea',

    /* ---- Correo inicial ---- */
    initial_subject_default:  'Zerbait aldatzen ari da. Kontatu nahi dizugu.',
    initial_doc_title:        'Oraina zaindu, etorkizuna prestatu',
    initial_p1: 'Harremanetan jartzen gara zurekin jakin beharko zenukeela uste dugun zerbait dagoelako.',
    initial_p2: 'Urtetan zehar, prion proteinaren genearen mutazio baten eramaile izateak, pertsona askorentzat, izendatzen zaila den ziurgabetasunarekin bizitzea esan nahi izan du. Jakitea ezer egin ezin. Itxarotea noiz jakin gabe.',
    initial_p3: 'Hori aldatzen ari da.',
    initial_p4: 'Ez kolpez, ez promesa hutsekin — baizik eta benetako zientziarekin, inoiz baino azkarrago aurrera egiten duen ikerketarekin eta, lehen aldiz, zure bezalako pertsonentzat ere pentsatuta dauden entsegu klinikoekin: oraindik sintomarik ez duten pertsonak, baina jarduteko unea iristen denean prest egon nahi duten pertsonak.',
    initial_p5: 'Aurre-kliniko jarraipen programa bat jarri dugu abian. Ez da ikerketa bat gehiago. Laguntza bat da — zurea, zure erritmoan, benetako informazioarekin eta urteak horretan daramatzan eta urrats bakoitzean zurekin egongo den talde batekin.',
    initial_p6: 'Oraindik ez dizugu ezer eskatzen. Begiratu bat eman diezaiozula besterik ez.',
    initial_cta: 'Programa ezagutu nahi dut &rarr;',

    /* ---- Correo de píldora ---- */
    pildoras_subject_default: 'Informazio pilula berria eskuragarri',
    pildoras_doc_title:       'Informazio pilula berria eskuragarri',
    pildoras_subtitle:        'Informazio pilula berria eskuragarri',
    pildoras_p1: 'Zuretzat eguneraketa berri bat dugu.',
    pildoras_p2: 'Jarraipen programan aldiro argitaratzen ditugu <strong>Informazio pilulak</strong> &mdash; entsegu klinikoei, terapia berriei eta zure bezalako pertsonentzat garrantzitsuak diren aurkikuntza zientifikoei buruzko eguneraketa labur, argi eta zorrotzak.',
    pildoras_p3: 'Pilula berri bat eskuragarri dago. Sartu nahi duzunean eta irakurri zure erritmoan.',
    pildoras_cta: 'Pilula berria ikusi &rarr;',
    pildoras_unsub_note: 'Email hau jasotzen duzu bere garaian informazio pilula berriak egotean abisatua izateko berariaz eskatu zenuelako. Mota honetako komunikazioak jaso nahi ez badituzu, hemen adierazi diezagukezu:',
    pildoras_unsub_btn:  'Ez dut jakinarazpen hauek jasotzen jarraitu nahi',
  },
  ca: {
    /* ---- Comunes ---- */
    eyebrow:                  'Programa de seguiment preclínic',
    h1:                       'Cuidar el present,<br>preparar el futur',
    salute_f:                 'Benvolguda {nombre},',
    salute_m:                 'Benvolgut {nombre},',
    salute_nb:                'Benvolgut/da {nombre},',
    fallback_f:               'portadora',
    fallback_m:               'portador',
    fallback_nb:              'portador/a',
    sig_castilla_role:        'Professor d\'investigació',
    sig_castilla_role_sub:    'Responsable del laboratori de prions',
    sig_kortazar_role:        'Cap del servei de Neurologia',
    sig_kortazar_institution: 'Hospital Universitari Araba',
    footer_ethics:            'Programa aprovat pel Comitè d\'Ètica de la Investigació del País Basc &nbsp;&middot;&nbsp; Codi PI2025164',

    /* ---- Correo inicial ---- */
    initial_subject_default:  'Alguna cosa està canviant. Volem explicar-t\'ho.',
    initial_doc_title:        'Cuidar el present, preparar el futur',
    initial_p1: 'Ens posem en contacte amb tu perquè creiem que hi ha quelcom que mereixes saber.',
    initial_p2: 'Durant anys, ser portador o portadora d\'una mutació en el gen de la proteïna del prió ha significat, per a moltes persones, viure amb una incertesa difícil de nomenar. Saber sense poder fer res. Esperar sense saber quan.',
    initial_p3: 'Això està canviant.',
    initial_p4: 'No de cop, no amb promeses buides — sinó amb ciència real, amb investigació que avança més ràpid que mai i amb assaigs clínics que, per primera vegada, estan pensats també per a persones com tu: persones que encara no tenen símptomes, però que volen estar preparades quan arribi el moment d\'actuar.',
    initial_p5: 'Hem posat en marxa un programa de seguiment preclínic. No és un estudi més. És un acompanyament — teu, al teu ritme, amb informació real i amb un equip que porta anys dedicat a això i que estarà amb tu a cada pas.',
    initial_p6: 'Encara no et demanem res. Només que hi donis una ullada.',
    initial_cta: 'Vull conèixer el programa &rarr;',

    /* ---- Correo de píldora ---- */
    pildoras_subject_default: 'Nova píndola d\'informació disponible',
    pildoras_doc_title:       'Nova píndola d\'informació disponible',
    pildoras_subtitle:        'Nova píndola d\'informació disponible',
    pildoras_p1: 'Tenim una nova actualització per a tu.',
    pildoras_p2: 'En el programa de seguiment publiquem periòdicament <strong>Píndoles d\'informació</strong> &mdash; actualitzacions breus, clares i rigoroses sobre assaigs clínics, noves teràpies i descobertes científiques rellevants per a persones com tu.',
    pildoras_p3: 'Hi ha una nova píndola disponible. Entra quan vulguis i llegeix-la al teu ritme.',
    pildoras_cta: 'Veure la nova píndola &rarr;',
    pildoras_unsub_note: 'Reps aquest email perquè en el seu moment vas sol·licitar expressament ser informat/da quan hi hagués noves píndoles d\'informació disponibles. Si ja no vols rebre aquest tipus de comunicacions, pots indicar-nos-ho aquí:',
    pildoras_unsub_btn:  'No vull continuar rebent aquestes notificacions',
  },
  gl: {
    /* ---- Comunes ---- */
    eyebrow:                  'Programa de seguimento preclínico',
    h1:                       'Coidar o presente,<br>preparar o futuro',
    salute_f:                 'Estimada {nombre},',
    salute_m:                 'Estimado {nombre},',
    salute_nb:                'Estimado/a {nombre},',
    fallback_f:               'portadora',
    fallback_m:               'portador',
    fallback_nb:              'portador/a',
    sig_castilla_role:        'Profesor de investigación',
    sig_castilla_role_sub:    'Responsable do laboratorio de prións',
    sig_kortazar_role:        'Xefa de servizo de Neuroloxía',
    sig_kortazar_institution: 'Hospital Universitario Araba',
    footer_ethics:            'Programa aprobado polo Comité de Ética da Investigación do País Vasco &nbsp;&middot;&nbsp; Código PI2025164',

    /* ---- Correo inicial ---- */
    initial_subject_default:  'Algo está cambiando. Queremos contarcho.',
    initial_doc_title:        'Coidar o presente, preparar o futuro',
    initial_p1: 'Poñémonos en contacto contigo porque cremos que hai algo que mereces saber.',
    initial_p2: 'Durante anos, ser portador ou portadora dunha mutación no xene da proteína do prión significou, para moitas persoas, vivir cunha incerteza difícil de nomear. Saber sen poder facer nada. Esperar sen saber cando.',
    initial_p3: 'Iso está cambiando.',
    initial_p4: 'Non de golpe, non con promesas baleiras — senón con ciencia real, con investigación que avanza máis rápido que nunca e con ensaios clínicos que, por primeira vez, están pensados tamén para persoas coma ti: persoas que aínda non teñen síntomas, pero que queren estar preparadas cando chegue o momento de actuar.',
    initial_p5: 'Puxemos en marcha un programa de seguimento preclínico. Non é un estudo máis. É un acompañamento — teu, ao teu ritmo, con información real e cun equipo que leva anos dedicado a isto e que estará contigo en cada paso.',
    initial_p6: 'Aínda non che pedimos nada. Só que lle botes un ollo.',
    initial_cta: 'Quero coñecer o programa &rarr;',

    /* ---- Correo de píldora ---- */
    pildoras_subject_default: 'Nova píldora de información dispoñible',
    pildoras_doc_title:       'Nova píldora de información dispoñible',
    pildoras_subtitle:        'Nova píldora de información dispoñible',
    pildoras_p1: 'Temos unha nova actualización para ti.',
    pildoras_p2: 'No programa de seguimento publicamos periodicamente <strong>Píldoras de información</strong> &mdash; actualizacións breves, claras e rigorosas sobre ensaios clínicos, novas terapias e descubrimentos científicos relevantes para persoas coma ti.',
    pildoras_p3: 'Hai unha nova píldora dispoñible. Entra cando queiras e léea ao teu ritmo.',
    pildoras_cta: 'Ver a nova píldora &rarr;',
    pildoras_unsub_note: 'Recibes este email porque no seu momento solicitaches expresamente ser informado/a cando houbese novas píldoras de información dispoñibles. Se xa non desexas recibir este tipo de comunicacións, podes indicárnolo aquí:',
    pildoras_unsub_btn:  'Non desexo seguir recibindo estas notificacións',
  },
  en: {
    /* ---- Common ---- */
    eyebrow:                  'Preclinical follow-up program',
    h1:                       'Care for today,<br>prepare for tomorrow',
    salute_f:                 'Dear {nombre},',
    salute_m:                 'Dear {nombre},',
    salute_nb:                'Dear {nombre},',
    fallback_f:               'carrier',
    fallback_m:               'carrier',
    fallback_nb:              'carrier',
    sig_castilla_role:        'Research Professor',
    sig_castilla_role_sub:    'Head of the prion laboratory',
    sig_kortazar_role:        'Head of Neurology Service',
    sig_kortazar_institution: 'Hospital Universitario Araba',
    footer_ethics:            'Program approved by the Basque Country Research Ethics Committee &nbsp;&middot;&nbsp; Code PI2025164',

    /* ---- Initial email ---- */
    initial_subject_default:  'Something is changing. We want to tell you.',
    initial_doc_title:        'Care for today, prepare for tomorrow',
    initial_p1: 'We\'re reaching out because we believe there\'s something you deserve to know.',
    initial_p2: 'For years, being a carrier of a mutation in the prion protein gene has meant, for many people, living with an uncertainty that\'s hard to name. Knowing without being able to do anything. Waiting without knowing when.',
    initial_p3: 'That is changing.',
    initial_p4: 'Not all at once, not with empty promises — but with real science, with research advancing faster than ever, and with clinical trials that, for the first time, are also designed for people like you: people who don\'t yet have symptoms, but who want to be prepared when the moment to act arrives.',
    initial_p5: 'We\'ve launched a preclinical follow-up program. It\'s not just another study. It\'s accompaniment — yours, at your own pace, with real information and with a team that has spent years devoted to this and that will be with you at every step.',
    initial_p6: 'We\'re not asking anything of you yet. Just that you take a look.',
    initial_cta: 'I want to learn about the program &rarr;',

    /* ---- Info update email ---- */
    pildoras_subject_default: 'New info update available',
    pildoras_doc_title:       'New info update available',
    pildoras_subtitle:        'New info update available',
    pildoras_p1: 'We have a new update for you.',
    pildoras_p2: 'In the follow-up program we regularly publish <strong>Info updates</strong> &mdash; short, clear, and rigorous updates on clinical trials, new therapies, and scientific findings relevant to people like you.',
    pildoras_p3: 'There\'s a new update available. Come in whenever you want and read it at your own pace.',
    pildoras_cta: 'See the new update &rarr;',
    pildoras_unsub_note: 'You\'re receiving this email because you explicitly asked to be notified whenever new info updates were available. If you no longer wish to receive this type of communication, you can let us know here:',
    pildoras_unsub_btn:  'I no longer wish to receive these notifications',
  },
  pt: {
    /* ---- Comuns ---- */
    eyebrow:                  'Programa de acompanhamento pré-clínico',
    h1:                       'Cuidar o presente,<br>preparar o futuro',
    salute_f:                 'Estimada {nombre},',
    salute_m:                 'Estimado {nombre},',
    salute_nb:                'Estimado/a {nombre},',
    fallback_f:               'portadora',
    fallback_m:               'portador',
    fallback_nb:              'portador/a',
    sig_castilla_role:        'Professor de investigação',
    sig_castilla_role_sub:    'Responsável pelo laboratório de priões',
    sig_kortazar_role:        'Chefe do serviço de Neurologia',
    sig_kortazar_institution: 'Hospital Universitário Araba',
    footer_ethics:            'Programa aprovado pelo Comité de Ética da Investigação do País Basco &nbsp;&middot;&nbsp; Código PI2025164',

    /* ---- Correio inicial ---- */
    initial_subject_default:  'Algo está a mudar. Queremos contar-lhe.',
    initial_doc_title:        'Cuidar o presente, preparar o futuro',
    initial_p1: 'Estamos a contactá-lo/a porque acreditamos que há algo que merece saber.',
    initial_p2: 'Durante anos, ser portador ou portadora de uma mutação no gene da proteína do prião significou, para muitas pessoas, viver com uma incerteza difícil de nomear. Saber sem poder fazer nada. Esperar sem saber quando.',
    initial_p3: 'Isso está a mudar.',
    initial_p4: 'Não de repente, não com promessas vazias — mas com ciência real, com investigação que avança mais rápido do que nunca e com ensaios clínicos que, pela primeira vez, também estão pensados para pessoas como você: pessoas que ainda não têm sintomas, mas que querem estar preparadas quando chegue o momento de agir.',
    initial_p5: 'Lançámos um programa de acompanhamento pré-clínico. Não é mais um estudo. É um acompanhamento — seu, ao seu ritmo, com informação real e com uma equipa que há anos se dedica a isto e que estará consigo em cada passo.',
    initial_p6: 'Ainda não lhe pedimos nada. Apenas que dê uma vista de olhos.',
    initial_cta: 'Quero conhecer o programa &rarr;',

    /* ---- Correio de pílula ---- */
    pildoras_subject_default: 'Nova pílula de informação disponível',
    pildoras_doc_title:       'Nova pílula de informação disponível',
    pildoras_subtitle:        'Nova pílula de informação disponível',
    pildoras_p1: 'Temos uma nova atualização para si.',
    pildoras_p2: 'No programa de acompanhamento publicamos periodicamente <strong>Pílulas de informação</strong> &mdash; atualizações breves, claras e rigorosas sobre ensaios clínicos, novas terapias e descobertas científicas relevantes para pessoas como você.',
    pildoras_p3: 'Há uma nova pílula disponível. Entre quando quiser e leia ao seu ritmo.',
    pildoras_cta: 'Ver a nova pílula &rarr;',
    pildoras_unsub_note: 'Recebe este email porque no seu momento solicitou expressamente ser informado/a quando houvesse novas pílulas de informação disponíveis. Se já não deseja receber este tipo de comunicações, pode indicar-nos aqui:',
    pildoras_unsub_btn:  'Não desejo continuar a receber estas notificações',
  },
};

/* Accede a una cadena con fallback a castellano si falta/está vacía */
function emailStr(lang, key) {
  const block    = EMAIL_STRINGS[lang] || {};
  const esBlock  = EMAIL_STRINGS.es;
  const val      = block[key];
  if (val !== undefined && val !== '') return val;
  return esBlock[key] || '';
}

/* Construye el saludo según género del portador y idioma */
function buildSaludo(p, lang) {
  const key      = p.genero === 'femenino'  ? 'salute_f'
                 : p.genero === 'masculino' ? 'salute_m'
                 : 'salute_nb';
  const fbKey    = p.genero === 'femenino'  ? 'fallback_f'
                 : p.genero === 'masculino' ? 'fallback_m'
                 : 'fallback_nb';
  const template = emailStr(lang, key);
  const fallback = emailStr(lang, fbKey);
  return template.replace('{nombre}', p.nombre || fallback);
}

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
function buildInitialEmailHTML(p, lang = 'es') {
  const SITE_URL = (process.env.SITE_URL || 'https://brochures-production-5c8c.up.railway.app').replace(/\/$/, '');
  const ctaUrl   = `${SITE_URL}/portadores.html?ref=email&id=${encodeURIComponent(p.id)}&lang=${encodeURIComponent(lang)}`;
  const saludo   = buildSaludo(p, lang);
  const S        = (k) => emailStr(lang, k);

  return `<!DOCTYPE html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${S('initial_doc_title')}</title>
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
          ${S('eyebrow')}
        </p>
        <h1 style="margin:0;font-family:Lora,Georgia,'Times New Roman',serif;font-size:28px;
                   font-weight:600;color:#ffffff;line-height:1.30;">
          ${S('h1')}
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
          ${S('initial_p1')}
        </p>

        <!-- Párrafo 2 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('initial_p2')}
        </p>

        <!-- Párrafo 3 — destacado -->
        <p style="margin:0 0 18px;font-family:Lora,Georgia,'Times New Roman',serif;
                  font-size:17px;font-weight:600;font-style:italic;color:#7c3aed;line-height:1.5;">
          ${S('initial_p3')}
        </p>

        <!-- Párrafo 4 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('initial_p4')}
        </p>

        <!-- Párrafo 5 -->
        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('initial_p5')}
        </p>

        <!-- Párrafo 6 -->
        <p style="margin:0 0 36px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('initial_p6')}
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
                ${S('initial_cta')}
              </a>
            </td>
          </tr>
        </table>

        <!-- Separador -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
          <tr><td style="border-top:1px solid #e2e8f0;font-size:0;line-height:0;">&nbsp;</td></tr>
        </table>

        <!-- Firma con fotos -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr valign="top">

            <!-- Columna 1: Dr. Joaquín Castilla -->
            <td width="48%" style="padding-right:16px;">
              <img src="${SITE_URL}/assests/foto_Joaquin.png" alt="Dr. Joaquín Castilla" width="80" height="80"
                   style="display:block;width:80px;height:80px;border-radius:50%;
                          object-fit:cover;border:2px solid #e2e8f0;margin-bottom:12px;"
                   onerror="this.style.display='none'">
              <p style="margin:0 0 2px;font-family:Lora,Georgia,serif;font-size:14px;
                        font-weight:600;color:#0f172a;">Dr. Joaquín Castilla</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:12px;
                        font-weight:600;color:#7c3aed;">${S('sig_castilla_role')}</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;">
                ${S('sig_castilla_role_sub')}</p>
              <p style="margin:0 0 12px;font-family:Inter,Arial,sans-serif;font-size:11px;
                        color:#94a3b8;font-style:italic;">CIC bioGUNE</p>
              <p style="margin:0 0 4px;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ✉&nbsp;
                <a href="mailto:jcastilla@cicbiogune.es"
                   style="color:#7c3aed;text-decoration:none;">jcastilla@cicbiogune.es</a>
              </p>
              <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ☎&nbsp;
                <a href="tel:+34618682920"
                   style="color:#64748b;text-decoration:none;">+34 618 68 29 20</a>
              </p>
            </td>

            <!-- Separador vertical -->
            <td width="4%" style="border-left:1px solid #e2e8f0;">&nbsp;</td>

            <!-- Columna 2: Dra. Izaro Kortazar -->
            <td width="48%" style="padding-left:16px;">
              <img src="${SITE_URL}/assests/foto_Izaro.png" alt="Dra. Izaro Kortazar" width="80" height="80"
                   style="display:block;width:80px;height:80px;border-radius:50%;
                          object-fit:cover;border:2px solid #e2e8f0;margin-bottom:12px;"
                   onerror="this.style.display='none'">
              <p style="margin:0 0 2px;font-family:Lora,Georgia,serif;font-size:14px;
                        font-weight:600;color:#0f172a;">Dra. Izaro Kortazar</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:12px;
                        font-weight:600;color:#7c3aed;">${S('sig_kortazar_role')}</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;">
                ${S('sig_kortazar_institution')}</p>
              <p style="margin:0 0 12px;font-family:Inter,Arial,sans-serif;font-size:11px;
                        color:#94a3b8;font-style:italic;">(Txagorritxu)</p>
              <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ✉&nbsp;
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
          ${S('footer_ethics')}
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
/* Token de baja de píldoras (hash HMAC-SHA256 truncado a 16 hex)      */
/* ------------------------------------------------------------------ */
function generateUnsubToken(id) {
  const secret = process.env.UNSUB_SECRET || 'default-unsub-secret';
  return crypto.createHmac('sha256', secret).update(String(id)).digest('hex').substring(0, 16);
}

/* Email 3: nueva píldora disponible — plantilla HTML */
function buildPildorasEmailHTML(p, lang = 'es') {
  const SITE_URL  = (process.env.SITE_URL || 'https://brochures-production-5c8c.up.railway.app').replace(/\/$/, '');
  const ctaUrl    = `${SITE_URL}/portadores-pildoras.html?ref=email&id=${encodeURIComponent(p.id)}&lang=${encodeURIComponent(lang)}`;
  const unsubUrl  = `${SITE_URL}/api/pildoras/desactivar?id=${encodeURIComponent(p.id)}&token=${generateUnsubToken(p.id)}`;
  const saludo    = buildSaludo(p, lang);
  const S         = (k) => emailStr(lang, k);

  return `<!DOCTYPE html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${S('pildoras_doc_title')}</title>
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

    <!-- HEADER -->
    <tr>
      <td class="email-header" align="center"
          style="background:#7c3aed;background-image:linear-gradient(135deg,#7c3aed 0%,#3b82f6 100%);
                 padding:52px 48px 48px;text-align:center;">
        <p style="margin:0 0 14px;font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:600;
                  letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.70);">
          ${S('eyebrow')}
        </p>
        <h1 style="margin:0 0 10px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:28px;
                   font-weight:600;color:#ffffff;line-height:1.30;">
          ${S('h1')}
        </h1>
        <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:13px;
                  color:rgba(255,255,255,0.80);letter-spacing:0.04em;">
          ${S('pildoras_subtitle')}
        </p>
      </td>
    </tr>

    <!-- BODY -->
    <tr>
      <td class="email-body"
          style="background:#ffffff;padding:48px 48px 44px;color:#0f172a;">

        <!-- Saludo -->
        <p style="margin:0 0 28px;font-family:Lora,Georgia,'Times New Roman',serif;
                  font-size:19px;font-weight:400;color:#0f172a;line-height:1.4;">
          ${saludo}
        </p>

        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('pildoras_p1')}
        </p>

        <p style="margin:0 0 18px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('pildoras_p2')}
        </p>

        <p style="margin:0 0 36px;font-family:Inter,Arial,sans-serif;font-size:15px;
                  color:#334155;line-height:1.78;">
          ${S('pildoras_p3')}
        </p>

        <!-- CTA -->
        <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto 44px;">
          <tr>
            <td align="center"
                style="background:#7c3aed;background-image:linear-gradient(135deg,#7c3aed,#3b82f6);
                       border-radius:100px;">
              <a href="${ctaUrl}" class="cta-btn"
                 style="display:inline-block;padding:16px 36px;font-family:Inter,Arial,sans-serif;
                        font-size:16px;font-weight:600;color:#ffffff;text-decoration:none;
                        border-radius:100px;letter-spacing:0.01em;">
                ${S('pildoras_cta')}
              </a>
            </td>
          </tr>
        </table>

        <!-- Separador -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
          <tr><td style="border-top:1px solid #e2e8f0;font-size:0;line-height:0;">&nbsp;</td></tr>
        </table>

        <!-- Nota de privacidad -->
        <p style="margin:0 0 10px;font-family:Inter,Arial,sans-serif;font-size:12px;
                  color:#94a3b8;line-height:1.65;">
          ${S('pildoras_unsub_note')}
        </p>
        <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:36px;">
          <tr>
            <td style="border:1px solid #e2e8f0;border-radius:100px;">
              <a href="${unsubUrl}"
                 style="display:inline-block;padding:7px 16px;font-family:Inter,Arial,sans-serif;
                        font-size:11px;color:#94a3b8;text-decoration:none;border-radius:100px;">
                ${S('pildoras_unsub_btn')}
              </a>
            </td>
          </tr>
        </table>

        <!-- Separador firma -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
          <tr><td style="border-top:1px solid #e2e8f0;font-size:0;line-height:0;">&nbsp;</td></tr>
        </table>

        <!-- Firma con fotos -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr valign="top">
            <td width="48%" style="padding-right:16px;">
              <img src="${SITE_URL}/assests/foto_Joaquin.png" alt="Dr. Joaquín Castilla" width="80" height="80"
                   style="display:block;width:80px;height:80px;border-radius:50%;
                          object-fit:cover;border:2px solid #e2e8f0;margin-bottom:12px;"
                   onerror="this.style.display='none'">
              <p style="margin:0 0 2px;font-family:Lora,Georgia,serif;font-size:14px;font-weight:600;color:#0f172a;">Dr. Joaquín Castilla</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:12px;font-weight:600;color:#7c3aed;">${S('sig_castilla_role')}</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;">${S('sig_castilla_role_sub')}</p>
              <p style="margin:0 0 12px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;font-style:italic;">CIC bioGUNE</p>
              <p style="margin:0 0 4px;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ✉&nbsp;<a href="mailto:jcastilla@cicbiogune.es" style="color:#7c3aed;text-decoration:none;">jcastilla@cicbiogune.es</a>
              </p>
              <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ☎&nbsp;<a href="tel:+34618682920" style="color:#64748b;text-decoration:none;">+34 618 68 29 20</a>
              </p>
            </td>
            <td width="4%" style="border-left:1px solid #e2e8f0;">&nbsp;</td>
            <td width="48%" style="padding-left:16px;">
              <img src="${SITE_URL}/assests/foto_Izaro.png" alt="Dra. Izaro Kortazar" width="80" height="80"
                   style="display:block;width:80px;height:80px;border-radius:50%;
                          object-fit:cover;border:2px solid #e2e8f0;margin-bottom:12px;"
                   onerror="this.style.display='none'">
              <p style="margin:0 0 2px;font-family:Lora,Georgia,serif;font-size:14px;font-weight:600;color:#0f172a;">Dra. Izaro Kortazar</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:12px;font-weight:600;color:#7c3aed;">${S('sig_kortazar_role')}</p>
              <p style="margin:0 0 1px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;">${S('sig_kortazar_institution')}</p>
              <p style="margin:0 0 12px;font-family:Inter,Arial,sans-serif;font-size:11px;color:#94a3b8;font-style:italic;">(Txagorritxu)</p>
              <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:12px;color:#64748b;">
                ✉&nbsp;<a href="mailto:izaro.kortazarzubizarreta@osakidetza.eus" style="color:#7c3aed;text-decoration:none;">izaro.kortazarzubizarreta@osakidetza.eus</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>

    <!-- FOOTER -->
    <tr>
      <td class="email-footer" align="center"
          style="background:#1e293b;padding:24px 48px;text-align:center;">
        <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:11px;
                  color:#94a3b8;line-height:1.6;">
          ${S('footer_ethics')}
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

/* Rutas para páginas de composición de correo */
app.get('/admin/correo/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'correo.html'));
});
app.get('/admin/pildora-email/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'pildora-email.html'));
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
      idioma:           req.body.idioma            || 'es',
      emailEnviado:          false,
      fechaEnvioEmail:       null,
      emailLeido:            false,
      fechaLectura:          null,
      aceptado:              false,
      fechaAceptacion:       null,
      pildorasActivo:        false,
      fechaUltimasPildoras:  null,
      pildorasEmailEnviado:  false,
      notas:                 req.body.notas             || '',
      orden:                 data.portadores.length,
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
      'codigoTXPR', 'nombre', 'apellidos', 'dni', 'email', 'genero', 'idioma',
      'emailEnviado', 'fechaEnvioEmail',
      'emailLeido', 'fechaLectura',
      'aceptado', 'fechaAceptacion',
      'pildorasActivo', 'fechaUltimasPildoras', 'pildorasEmailEnviado',
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
/* Health check — Railway lo usa para verificar que el servicio vive   */
/* ------------------------------------------------------------------ */
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

/* ------------------------------------------------------------------ */
/* Ruta raíz                                                            */
/* ------------------------------------------------------------------ */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* ------------------------------------------------------------------ */
/* GET /api/admin/email-defaults  — asuntos por defecto según idioma  */
/* ------------------------------------------------------------------ */
app.get('/api/admin/email-defaults', requireAdmin, (req, res) => {
  const lang = (req.query.lang || 'es').toString().toLowerCase();
  res.json({
    lang,
    initial:  emailStr(lang, 'initial_subject_default'),
    pildoras: emailStr(lang, 'pildoras_subject_default'),
  });
});

/* ------------------------------------------------------------------ */
/* GET /api/admin/correo-preview/:id  — HTML del email para preview   */
/* ------------------------------------------------------------------ */
app.get('/api/admin/correo-preview/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const p    = data.portadores.find(p => p.id === req.params.id);
    if (!p) return res.status(404).send('<p style="font-family:sans-serif;color:#dc2626;">Portador no encontrado</p>');
    const lang = (req.query.lang || p.idioma || 'es').toString().toLowerCase();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(buildInitialEmailHTML(p, lang));
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
    const lang    = (req.body.idioma || p.idioma || 'es').toString().toLowerCase();

    if (!p.email)  return res.status(400).json({ error: 'El portador no tiene email registrado' });
    if (!subject)  return res.status(400).json({ error: 'El asunto no puede estar vacío' });

    await sendMail({
      to:      p.email,
      subject,
      html:    buildInitialEmailHTML(p, lang),
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

/* ------------------------------------------------------------------ */
/* POST /api/admin/portadores/:id/pildoras-toggle  — toggle pildoras  */
/* ------------------------------------------------------------------ */
app.post('/api/admin/portadores/:id/pildoras-toggle', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    data.portadores[idx].pildorasActivo = !data.portadores[idx].pildorasActivo;
    await writeData(data);
    res.json({ ok: true, pildorasActivo: data.portadores[idx].pildorasActivo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* GET /api/admin/pildora-preview/:id  — HTML del email para preview  */
/* ------------------------------------------------------------------ */
app.get('/api/admin/pildora-preview/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const p    = data.portadores.find(p => p.id === req.params.id);
    if (!p) return res.status(404).send('<p style="font-family:sans-serif;color:#dc2626;">Portador no encontrado</p>');
    const lang = (req.query.lang || p.idioma || 'es').toString().toLowerCase();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(buildPildorasEmailHTML(p, lang));
  } catch (err) {
    res.status(500).send('<p style="font-family:sans-serif;color:#dc2626;">Error: ' + err.message + '</p>');
  }
});

/* ------------------------------------------------------------------ */
/* POST /api/admin/pildora-email/:id  — enviar email de píldora       */
/* ------------------------------------------------------------------ */
app.post('/api/admin/pildora-email/:id', requireAdmin, async (req, res) => {
  try {
    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    const p       = data.portadores[idx];
    const subject = req.body.subject || '';
    const lang    = (req.body.idioma || p.idioma || 'es').toString().toLowerCase();

    if (!p.email)  return res.status(400).json({ error: 'El portador no tiene email registrado' });
    if (!subject)  return res.status(400).json({ error: 'El asunto no puede estar vacío' });

    await sendMail({
      to:      p.email,
      subject,
      html:    buildPildorasEmailHTML(p, lang),
    });

    data.portadores[idx].pildorasEmailEnviado = true;
    data.portadores[idx].fechaUltimasPildoras = new Date().toISOString();
    await writeData(data);

    res.json({ ok: true, fechaUltimasPildoras: data.portadores[idx].fechaUltimasPildoras });
  } catch (err) {
    console.error(`[email ${nowISO()}] Error envío píldora ${req.params.id}: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* POST /api/pildoras/activar  — activar notificaciones por DNI (público) */
/* ------------------------------------------------------------------ */
app.post('/api/pildoras/activar', async (req, res) => {
  try {
    const { dni } = req.body;
    if (!dni) return res.status(400).json({ error: 'Falta el campo dni' });

    const data = await readData();
    const idx  = data.portadores.findIndex(
      p => p.dni.trim().toUpperCase() === dni.trim().toUpperCase()
    );
    if (idx === -1) return res.status(404).json({ error: 'Portador no encontrado' });

    data.portadores[idx].pildorasActivo = true;
    await writeData(data);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------------------------------------------------------ */
/* GET /api/pildoras/desactivar  — baja por link del email (público)  */
/* ------------------------------------------------------------------ */
app.get('/api/pildoras/desactivar', async (req, res) => {
  try {
    const { id, token } = req.query;
    if (!id || !token) {
      return res.redirect('/portadores-baja-pildoras.html?error=1');
    }

    /* Verificar token */
    if (token !== generateUnsubToken(id)) {
      return res.redirect('/portadores-baja-pildoras.html?error=1');
    }

    const data = await readData();
    const idx  = data.portadores.findIndex(p => p.id === id);
    if (idx === -1) return res.redirect('/portadores-baja-pildoras.html?error=1');

    data.portadores[idx].pildorasActivo = false;
    await writeData(data);
    res.redirect('/portadores-baja-pildoras.html');
  } catch (err) {
    res.redirect('/portadores-baja-pildoras.html?error=1');
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
    'Aceptado','Fecha Aceptación',
    'Píldoras Activo','Fecha Últimas Píldoras',
    'Notas','Orden'
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
    p.pildorasActivo ? 'Sí' : 'No',
    fmtDate(p.fechaUltimasPildoras),
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

/* ------------------------------------------------------------------ */
/* Capturar errores fatales para que Railway los registre en el log    */
/* ------------------------------------------------------------------ */
process.on('uncaughtException', (err) => {
  console.error(`[fatal] uncaughtException: ${err.message}`);
  console.error(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[fatal] unhandledRejection: ${reason instanceof Error ? reason.message : reason}`);
  if (reason instanceof Error) console.error(reason.stack);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('[signal] SIGTERM recibido — Railway está deteniendo el contenedor');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('[signal] SIGINT recibido');
  process.exit(0);
});
