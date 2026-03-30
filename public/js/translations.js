/* translations.js — Cadenas de texto para portadores-programa.html */
/* Idiomas: es (Español), eu (Euskera), ca (Català), gl (Galego) */

const TRANSLATIONS = {
  es: {
    /* ---- Navegación ---- */
    'nav.back': 'Volver',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Programa de seguimiento preclínico',
    'hero.title':   'Tu participación\nempieza aquí',
    'hero.sub':     'Un proceso pensado para ti, a tu ritmo y sin presión.',

    /* ---- Momento 0 ---- */
    'm0.intro': 'Antes de continuar, queremos asegurarnos de que has tenido la oportunidad de leer con calma toda la información del programa. Lo que viene a continuación no es un trámite — es una conversación contigo mismo/a sobre algo importante.',
    'm0.btn':   'He leído el programa y quiero continuar',

    /* ---- Momento 1 ---- */
    'm1.title': 'Una primera pregunta, sin prisa',
    'm1.sub':   'No hay respuesta correcta ni incorrecta. Lo único que te pedimos es que elijas la que mejor refleja cómo te sientes ahora mismo. Puedes cambiar de opinión en cualquier momento.',

    'm1.a.header': 'Sí, quiero explorar mi participación',
    'm1.a.body':   'He leído la información con atención y, aunque puede que todavía tenga preguntas, siento que quiero dar este paso. Entiendo que esto no es un compromiso definitivo — es el comienzo de una conversación más profunda con el equipo y conmigo mismo/a.',

    'm1.b.header': 'Todavía no me siento preparado/a',
    'm1.b.body':   'Necesito más tiempo para asimilar esta información. No es una puerta que se cierre — sé que puedo volver cuando lo sienta. Por ahora, prefiero seguir a mi propio ritmo.',

    'm1.c.header': 'Tengo dudas y prefiero hablar con alguien primero',
    'm1.c.body':   'Antes de tomar cualquier decisión, me gustaría poder hablar con el equipo del programa. Tengo preguntas que no sé cómo responderme solo/a, y necesito escuchar una voz humana antes de continuar.',

    /* ---- Cierres momento 1 ---- */
    'closure.b.title': 'Tu ritmo es el ritmo correcto',
    'closure.b.text':  'No hay ninguna prisa. Lo importante es que sepas que esta información seguirá aquí cuando la necesites, y que el equipo del programa está disponible si en algún momento quieres retomar esta conversación. Cuidarte también significa darte el tiempo que necesitas.',

    'closure.c.title': 'Hablar siempre es un buen primer paso',
    'closure.c.text':  'Tener dudas no significa estar perdido/a — significa que estás tomándote esto en serio. El equipo del programa está aquí precisamente para esto. No dudes en contactar por el canal que te resulte más cómodo.',

    'closure.contacts.label': 'Cómo encontrarnos',

    /* ---- Momento 2 ---- */
    'm2.title': 'Verificación de comprensión',
    'm2.sub':   'Tres preguntas breves para asegurarnos de que partimos del mismo punto.',

    /* Check 2.1 */
    'm2.c1.title':    'Algo importante que queremos confirmar contigo',
    'm2.c1.prose':    'Dentro del grupo de portadores asintomáticos — personas que, como tú, conviven con una mutación genética sin haber desarrollado síntomas — la investigación actual ha permitido identificar dos situaciones claramente distintas. Esto es relativamente reciente y no todo el mundo que llega aquí lo sabe todavía. Por eso queremos preguntarte:',
    'm2.c1.question': '¿Sabías que existen dos tipos de portadores asintomáticos, con situaciones biológicas diferentes aunque ambos estén sin síntomas?',
    'm2.c1.yes':      'Sí, lo sabía o lo he entendido al leer el programa',
    'm2.c1.no':       'No lo sabía o no lo tenía claro',

    'm2.c1.exp.p1': '<strong>Los portadores en fase inactiva:</strong> el proceso biológico asociado a la mutación no muestra señales de actividad detectable hoy. Esto se asocia con un horizonte temporal más amplio. El reloj biológico, por así decirlo, todavía no ha arrancado de forma medible.',
    'm2.c1.exp.p2': '<strong>Los portadores en fase activa silente:</strong> existe una actividad biológica incipiente que las técnicas especializadas pueden comenzar a detectar, aunque la persona no sienta absolutamente nada. El proceso ha comenzado de forma muy silenciosa, y precisamente por eso es tan valioso saberlo: porque este grupo es el que con mayor probabilidad podrá acceder a los primeros ensayos clínicos preventivos.',
    'm2.c1.exp.p3': 'Conocer en cuál de los dos grupos te encuentras es voluntario, posible, y algo que el programa puede ayudarte a descubrir.',
    'm2.c1.exp.retry': 'Vuelve a la pregunta cuando quieras:',

    /* Check 2.2 */
    'm2.c2.title':    'La diferencia entre los dos tipos, y lo que significa para ti',
    'm2.c2.prose.p1': 'Saber que existen dos tipos es un primer paso. Pero queremos asegurarnos de que la diferencia entre ellos tiene sentido real para ti, no solo como concepto abstracto.',
    'm2.c2.prose.p2': '<strong>Si estás en fase inactiva:</strong> los marcadores biológicos no muestran actividad detectable hoy. Eso no significa que el proceso no vaya a comenzar en algún momento, pero sí que probablemente dispongas de un margen de tiempo amplio. Este margen es precisamente lo que hace posible planificar y estar en primera línea cuando lleguen las terapias.',
    'm2.c2.prose.p3': '<strong>Si estás en fase activa silente:</strong> los marcadores muestran señales tempranas de actividad, aunque tu vida cotidiana no lo refleja en absoluto. Lejos de ser solo una mala noticia, es la información más valiosa que puedes tener hoy — porque te sitúa exactamente en el grupo para el que se están diseñando los primeros ensayos clínicos preventivos. El momento de actuar es ahora, y el programa está aquí para cada paso.',
    'm2.c2.question': '¿Comprendes la diferencia entre ambas situaciones y lo que podría implicar para tu caso concreto?',
    'm2.c2.yes':      'Sí, comprendo la diferencia y lo que implica',
    'm2.c2.no':       'Necesito releerlo o no me ha quedado del todo claro',

    'm2.c2.exp.p1':   'No pasa nada. Tómate el tiempo que necesites. Aquí tienes de nuevo los dos perfiles de forma resumida:',
    'm2.c2.exp.p2':   '<strong>Fase inactiva:</strong> marcadores sin actividad detectable hoy. Horizonte temporal amplio. Tiempo para planificar.',
    'm2.c2.exp.p3':   '<strong>Fase activa silente:</strong> señales tempranas de actividad biológica, sin síntomas. El grupo prioritario para los primeros ensayos preventivos.',
    'm2.c2.exp.retry': 'Cuando lo tengas claro:',

    /* Check 2.3 */
    'm2.c3.title':    'Las pruebas que hacen posible saberlo',
    'm2.c3.prose.p1': 'Determinar en cuál de los dos grupos te encuentras no es sencillo. No existe hoy ninguna prueba única, rápida y definitiva que lo responda. Lo que tenemos son herramientas especializadas — algunas de ellas requieren muestras biológicas que no son las habituales, como determinados análisis de líquido cefalorraquídeo u otras que permiten detectar señales de actividad priónica con mayor sensibilidad.',
    'm2.c3.prose.p2': 'Esto significa que el proceso requiere tiempo, visitas, y en algunos casos procedimientos que merecen ser explicados con detalle antes de realizarlos. El equipo del programa te acompañará en cada decisión, y nada se hará sin tu comprensión y tu consentimiento.',
    'm2.c3.question': '¿Entiendes que conocer tu situación requiere pruebas especializadas, que no siempre son sencillas, y que el resultado puede tener implicaciones reales en tu vida?',
    'm2.c3.yes':      'Sí, lo entiendo y quiero continuar',
    'm2.c3.no':       'Necesito pensarlo o entender mejor esto antes de seguir',

    'm2.c3.exp.p1':   'Es una decisión que merece reflexión, y está muy bien reconocerlo. Lo importante es que nadie te va a pedir que hagas ninguna prueba sin haberte explicado antes en detalle en qué consiste, qué información da, y qué puede suponer para ti conocer ese resultado.',
    'm2.c3.exp.p2':   'El consentimiento informado no es un formulario — es una conversación real con el equipo. Cuando sientas que estás listo/a, la pregunta sigue aquí.',
    'm2.c3.exp.retry': 'Cuando estés listo/a:',

    /* ---- Momento 3 ---- */
    'm3.title': 'Lo que esto significa en la práctica',
    'm3.sub':   'Cuatro cosas que queremos que sepas antes de continuar.',

    'm3.a1.header': 'Tu participación es completamente voluntaria',
    'm3.a1.text':   'Nada de lo que ocurra dentro del programa está sujeto a ninguna obligación. Puedes decidir en cualquier momento dejar de participar, sin que eso afecte a tu atención médica ni a tu relación con el equipo. Aquí nadie te debe nada, y nosotros tampoco te exigimos nada.',
    'm3.a1.btn':    'Entendido, y lo acepto',

    'm3.a2.header': 'Tendrás acceso a la App de seguimiento',
    'm3.a2.text':   'Como participante en el programa, tendrás acceso a una aplicación diseñada específicamente para portadores asintomáticos. Te permitirá registrar de forma longitudinal aspectos como la calidad del sueño, el estado de ánimo, la función cognitiva y otros indicadores relevantes — con la posibilidad de que tu pareja de convivencia, si la tienes, colabore también en ese registro. Esta información no es solo útil para el equipo: es tuya, y puede ayudarte a entender mejor cómo estás a lo largo del tiempo.',
    'm3.a2.btn':    'Entendido, y me interesa',

    'm3.a3.header': 'Tu participación te sitúa en una posición favorable',
    'm3.a3.text':   'Las personas que forman parte del programa de seguimiento son las que mejor conocemos, las que tenemos más datos y las que antes podremos contactar cuando se abran nuevos ensayos clínicos. No podemos garantizarte el acceso — los criterios de cada ensayo los define el propio ensayo — pero sí podemos decirte que estar aquí es la mejor forma de estar preparado/a para cuando llegue ese momento.',
    'm3.a3.btn':    'Entendido',

    'm3.a4.header': 'Esta es una relación a largo plazo',
    'm3.a4.text':   'El programa no es una visita puntual ni un cuestionario que se responde una vez. Es un acompañamiento continuado — con visitas periódicas, actualizaciones de información, Píldoras de conocimiento y contacto humano real. Nos comprometemos a estar presentes mientras tú quieras que lo estemos.',
    'm3.a4.btn':    'Entendido, y quiero formar parte',

    'm3.confirmed': '✓ Confirmado',

    /* ---- Bloque final — formulario de aceptación ---- */
    'final.form.eyebrow':         'Siguiente paso',
    'final.form.title':           'Un último paso para que podamos contactarte',
    'final.form.text':            'Si deseas que el equipo del programa se ponga en contacto contigo, indícanos tu DNI. Esto nos permitirá identificarte en nuestro sistema y confirmar tu deseo de participar. Tus datos están protegidos y solo serán accesibles para el equipo investigador.',
    'final.form.label.nombre':    'Nombre',
    'final.form.label.apellidos': 'Apellidos',
    'final.form.label.dni':       'DNI',
    'final.form.dni.hint':        '8 dígitos seguidos de una letra',
    'final.form.btn':             'Confirmar mi deseo de participar',

    /* ---- Bloque final — DNI no encontrado ---- */
    'final.notfound.title': 'No hemos encontrado tu DNI',
    'final.notfound.text':  'No hemos encontrado tu DNI en nuestro sistema. Es posible que aún no hayas sido registrado/a. Por favor, contacta directamente con el equipo para que podamos incorporarte.',

    /* ---- Bloque final — agradecimiento ---- */
    'final.eyebrow': 'Siguiente paso',
    'final.title':   'Gracias por llegar hasta aquí',
    'final.text':    'Has dado un paso importante — no solo hacia el programa, sino hacia ti mismo/a. El equipo se pondrá en contacto contigo en breve para explicarte los siguientes pasos con calma y sin prisa. Si mientras tanto tienes cualquier pregunta, aquí tienes cómo encontrarnos.',
    'final.contacts.label': 'Cómo encontrarnos',

    /* ---- Tarjetas de contacto ---- */
    'contact.email.label': 'Email',
    'contact.phone.label': 'Teléfono',

    /* ---- Footer ---- */
    'footer.text':   '© Joaquín Castilla 2026',
    'footer.ethics': 'Programa aprobado por el Comité de Ética de la Investigación del País Vasco · Código PI2025164',

    /* ---- Botón de transición en portadores.html ---- */
    'transition.title': '¿Quieres dar el siguiente paso?',
    'transition.text':  'Si has leído el programa y quieres explorar tu participación, continúa aquí.',
    'transition.btn':   'Explorar mi participación',

    /* ---- Botón siguientes pasos (portadores-compromiso.html) ---- */
    'btn.siguientes-pasos': '¿Cuáles son los siguientes pasos?',
  },

  eu: {
    /* ---- Navegación ---- */
    'nav.back': 'Itzuli',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Aurre-kliniko jarraipen programa',
    'hero.title':   'Zure parte-hartzea\nhemen hasten da',
    'hero.sub':     'Zuretzat pentsatutako prozesua, zure erritmoan eta presarik gabe.',

    /* ---- Momento 0 ---- */
    'm0.intro': 'Jarraitu aurretik, ziurtatu nahi dugu programako informazio guztia lasai irakurtzeko aukera izan duzula. Datorrena ez da tramite bat — zure buruarekin elkarrizketa bat da, gauza garrantzitsu bati buruz.',
    'm0.btn':   'Programa irakurri dut eta jarraitu nahi dut',

    /* ---- Momento 1 ---- */
    'm1.title': 'Lehen galdera bat, presarik gabe',
    'm1.sub':   'Ez dago erantzun zuzen edo okerrik. Eskatzen dizuguna da une honetan nola sentitzen zaren hobeto islatzen duen aukera hautatzea. Noiznahi aldatu dezakezu iritzia.',

    'm1.a.header': 'Bai, nire parte-hartzea aztertu nahi dut',
    'm1.a.body':   'Informazioa arretaz irakurri dut eta, agian oraindik galderak izan arren, urrats hau eman nahi dudala sentitzen dut. Ulertzen dut hau ez dela behin betiko konpromiso bat — taldearekin eta nire buruarekin elkarrizketa sakonago baten hasiera baizik.',

    'm1.b.header': 'Oraindik ez naiz prest sentitzen',
    'm1.b.body':   'Informazio hau barneratzeko denbora gehiago behar dut. Ez da ixten den ate bat — badakit nahi dudanean itzuli naitekeela. Oraingoz, nire erritmoan jarraitzea nahiago dut.',

    'm1.c.header': 'Zalantzak ditut eta lehenengo norbaitrekin hitz egin nahiago dut',
    'm1.c.body':   'Edozein erabaki hartu aurretik, programako taldearekin hitz egin nahi nuke. Galderak ditut erantzuten ez dakidanak, eta jarraitu aurretik giza ahotsa entzutea behar dut.',

    /* ---- Cierres momento 1 ---- */
    'closure.b.title': 'Zure erritmoa da erritu egokia',
    'closure.b.text':  'Ez dago presarik. Garrantzitsua da jakitea informazio hau hemen egongo dela behar duzunean, eta programako taldea eskuragarri dagoela elkarrizketari berriro heldu nahi diozunean. Zure burua zaintzeak denbora ematea ere esan nahi du.',

    'closure.c.title': 'Hitz egitea beti da lehen urrats ona',
    'closure.c.text':  'Zalantzak izateak ez du esan nahi galduta zaudenik — esan nahi du hau serioski hartzen ari zarela. Programako taldea horrexetarako dago hemen. Ez zalantzatu erosoen iruditzen zaizun bidea erabiliz harremanetan jartzeko.',

    'closure.contacts.label': 'Nola aurkitu gaituzun',

    /* ---- Footer ---- */
    'footer.text':   '© Joaquín Castilla 2026',
    'footer.ethics': 'Programa Euskadiko Ikerketa Etika Batzordeak onartuta · PI2025164 kodea',

    /* ---- Botón siguientes pasos ---- */
    'btn.siguientes-pasos': 'Zeintzuk dira hurrengo urratsak?',
  },

  ca: {
    /* ---- Navegación ---- */
    'nav.back': 'Tornar',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Programa de seguiment preclínic',
    'hero.title':   'La teva participació\ncomença aquí',
    'hero.sub':     'Un procés pensat per a tu, al teu ritme i sense pressa.',

    /* ---- Momento 0 ---- */
    'm0.intro': 'Abans de continuar, volem assegurar-nos que has tingut l\'oportunitat de llegir amb calma tota la informació del programa. El que ve a continuació no és un tràmit — és una conversa amb tu mateix/a sobre alguna cosa important.',
    'm0.btn':   'He llegit el programa i vull continuar',

    /* ---- Momento 1 ---- */
    'm1.title': 'Una primera pregunta, sense pressa',
    'm1.sub':   'No hi ha resposta correcta ni incorrecta. L\'únic que et demanem és que triïs la que millor reflecteix com et sents ara mateix. Pots canviar d\'opinió en qualsevol moment.',

    'm1.a.header': 'Sí, vull explorar la meva participació',
    'm1.a.body':   'He llegit la informació amb atenció i, tot i que potser encara tinc preguntes, sento que vull fer aquest pas. Entenc que això no és un compromís definitiu — és el començament d\'una conversa més profunda amb l\'equip i amb mi mateix/a.',

    'm1.b.header': 'Encara no em sento preparat/da',
    'm1.b.body':   'Necessito més temps per assimilar aquesta informació. No és una porta que es tanci — sé que puc tornar quan ho senti. Per ara, prefereixo seguir al meu propi ritme.',

    'm1.c.header': 'Tinc dubtes i prefereixo parlar amb algú primer',
    'm1.c.body':   'Abans de prendre cap decisió, m\'agradaria poder parlar amb l\'equip del programa. Tinc preguntes que no sé com respondre'm sol/a, i necessito escoltar una veu humana abans de continuar.',

    /* ---- Cierres momento 1 ---- */
    'closure.b.title': 'El teu ritme és el ritme correcte',
    'closure.b.text':  'No hi ha cap pressa. El que importa és que sàpigues que aquesta informació estarà aquí quan la necessitis, i que l\'equip del programa està disponible si en algun moment vols reprendre aquesta conversa. Cuidar-te també significa donar-te el temps que necessites.',

    'closure.c.title': 'Parlar sempre és un bon primer pas',
    'closure.c.text':  'Tenir dubtes no significa estar perdut/da — significa que t\'estàs prenent això seriosament. L\'equip del programa és aquí precisament per a això. No dubtis a contactar pel canal que et sigui més còmode.',

    'closure.contacts.label': 'Com trobar-nos',

    /* ---- Footer ---- */
    'footer.text':   '© Joaquín Castilla 2026',
    'footer.ethics': 'Programa aprovat pel Comitè d\'Ètica de la Investigació del País Basc · Codi PI2025164',

    /* ---- Botón siguientes pasos ---- */
    'btn.siguientes-pasos': 'Quins són els passos següents?',
  },

  gl: {
    /* ---- Navegación ---- */
    'nav.back': 'Volver',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Programa de seguimento preclínico',
    'hero.title':   'A túa participación\ncomeza aquí',
    'hero.sub':     'Un proceso pensado para ti, ao teu ritmo e sen présa.',

    /* ---- Momento 0 ---- */
    'm0.intro': 'Antes de continuar, queremos asegurarnos de que tiveches a oportunidade de ler con calma toda a información do programa. O que vén a continuación non é un trámite — é unha conversa contigo mesmo/a sobre algo importante.',
    'm0.btn':   'Lin o programa e quero continuar',

    /* ---- Momento 1 ---- */
    'm1.title': 'Unha primeira pregunta, sen présa',
    'm1.sub':   'Non hai resposta correcta nin incorrecta. O único que che pedimos é que escollas a que mellor reflicte como te sentes agora mesmo. Podes cambiar de opinión en calquera momento.',

    'm1.a.header': 'Si, quero explorar a miña participación',
    'm1.a.body':   'Lin a información con atención e, aínda que pode que todavía teña preguntas, sinto que quero dar este paso. Entendo que isto non é un compromiso definitivo — é o comezo dunha conversa máis profunda co equipo e comigo mesmo/a.',

    'm1.b.header': 'Aínda non me sinto preparado/a',
    'm1.b.body':   'Necesito máis tempo para asimilar esta información. Non é unha porta que se peche — sei que podo volver cando o sinta. Por agora, prefiro seguir ao meu propio ritmo.',

    'm1.c.header': 'Teño dúbidas e prefiro falar con alguén primeiro',
    'm1.c.body':   'Antes de tomar calquera decisión, gustaríame poder falar co equipo do programa. Teño preguntas que non sei como responderme só/a, e necesito escoitar unha voz humana antes de continuar.',

    /* ---- Cierres momento 1 ---- */
    'closure.b.title': 'O teu ritmo é o ritmo correcto',
    'closure.b.text':  'Non hai ningunha présa. O importante é que saibas que esta información seguirá aquí cando a necesites, e que o equipo do programa está dispoñible se nalgún momento queres retomar esta conversa. Coidarte tamén significa darte o tempo que precisas.',

    'closure.c.title': 'Falar sempre é un bo primeiro paso',
    'closure.c.text':  'Ter dúbidas non significa estar perdido/a — significa que estás tomándote isto en serio. O equipo do programa está aquí precisamente para isto. Non dubides en contactar polo canle que che resulte máis cómodo.',

    'closure.contacts.label': 'Como atoparnos',

    /* ---- Footer ---- */
    'footer.text':   '© Joaquín Castilla 2026',
    'footer.ethics': 'Programa aprobado polo Comité de Ética da Investigación do País Vasco · Código PI2025164',

    /* ---- Botón siguientes pasos ---- */
    'btn.siguientes-pasos': 'Cales son os seguintes pasos?',
  },
};

/* Idioma activo (por defecto español) */
let currentLang = localStorage.getItem('pg-lang') || 'es';

function t(key) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.es;
  return lang[key] !== undefined ? lang[key] : (TRANSLATIONS.es[key] || key);
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = t(key);
    if (val !== undefined) el.innerHTML = val;
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('pg-lang', lang);
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}
