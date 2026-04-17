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
    'm2.c2.prose.p2': '<strong>Si estás en fase inactiva:</strong> los marcadores biológicos no muestran actividad detectable hoy. Eso no significa que el proceso no vaya a comenzar en algún momento (puede que en cuestión de días, semanas o meses), pero sí que probablemente dispongas de un margen de tiempo amplio hasta el desarrollo de síntomas visibles de enfermedad. Este margen es precisamente lo que hace posible planificar y estar en primera línea cuando lleguen las terapias.',
    'm2.c2.prose.p3': '<strong>Si estás en fase activa silente:</strong> los marcadores muestran señales tempranas de actividad, aunque tu vida cotidiana no lo refleja en absoluto. Lejos de ser solo una mala noticia, ya que podría implicar que los síntomas de la enfermedad podrían aparecer en un horizonte temporal más próximo (aunque aún desconocido), es la información más valiosa que puedes tener hoy — porque te sitúa exactamente en el grupo para el que se están tratando de diseñar los primeros ensayos clínicos preventivos. El momento de actuar es ahora, y el programa está aquí para cada paso.',
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
    'm3.a1.text':   'Nada de lo que ocurra dentro del programa está sujeto a ninguna obligación. Puedes decidir en cualquier momento dejar de participar, sin que eso afecte a tu atención médica ni a tu relación con el equipo. Aquí no debes nada a nadie, y nosotros tampoco te exigimos nada.',
    'm3.a1.btn':    'Entendido, y lo acepto',

    'm3.a2.header': 'Tendrás acceso a la App de seguimiento',
    'm3.a2.text':   'Como participante en el programa, tendrás acceso a una aplicación diseñada específicamente para portadores asintomáticos. Te permitirá ir anotando, a lo largo del tiempo y si así lo deseas, aspectos como la calidad del sueño, el estado de ánimo, la función cognitiva y otros indicadores relevantes — con la posibilidad de que tus familiares o tu pareja de convivencia, si la tienes, colabore también en ese registro, que busca comprender mejor la fase asintomática, el inicio y/o la progresión de la enfermedad.',
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

    /* ---- Sección 05 portadores.html — pasos de seguimiento ---- */
    'seguimiento.sueno.title': 'Estudio del sueño',
    'seguimiento.sueno.text':  'Mediante polisomnografía, registramos lo que ocurre durante el sueño: movimientos, respiración, actividad cerebral y comportamiento. Algunas alteraciones del sueño – en particular las relacionadas con la fase REM – pueden aparecer especialmente en portadores de Insomnio Familiar Fatal, de forma sutil antes de que …',

    /* ---- Botón de transición en portadores.html ---- */
    'transition.title': '¿Quieres dar el siguiente paso?',
    'transition.text':  'Si has leído el programa y quieres explorar tu participación, continúa aquí.',
    'transition.btn':   'Explorar mi participación',

    /* ---- Botón siguientes pasos (portadores-compromiso.html) ---- */
    'btn.siguientes-pasos': '¿Cuáles son los siguientes pasos?',

    /* ---- portadores-reflexion.html — teaser de entrada ---- */
    'reflexion.teaser.text': '¿Te preguntas si vale la pena saber en qué grupo estás?',
    'reflexion.teaser.sub':  'Hemos pensado en situaciones concretas que pueden ayudarte a reflexionarlo.',
    'reflexion.teaser.btn':  'Quiero reflexionar sobre esto',

    /* ---- portadores-reflexion.html — cabecera ---- */
    'reflexion.hero.title': 'El valor de saber',
    'reflexion.hero.sub':   'No hay una respuesta correcta. Pero hay situaciones concretas que pueden ayudarte a decidir si quieres conocer en qué momento estás.',

    /* ---- portadores-reflexion.html — tarjeta 1: Fase Inactiva ---- */
    'reflexion.c1.label': 'Seguimiento estándar',
    'reflexion.c1.title': 'Si el seguimiento te sitúa en fase inactiva',
    'reflexion.c1.sub':   '15 situaciones en las que esta información puede marcar una diferencia real en tu vida cotidiana.',
    'reflexion.c1.s1.h':  'Estás pensando en aceptar un trabajo exigente o un cambio de ciudad.',
    'reflexion.c1.s1.b':  'Saber que no hay actividad detectable puede darte más tranquilidad para aceptar ese proyecto sin sentir que estás comprometiendo una ventana crítica.',
    'reflexion.c1.s2.h':  'Quieres formar una familia o ampliar la que ya tienes.',
    'reflexion.c1.s2.b':  'Puede ayudarte a vivir esa etapa con menos sensación de urgencia y más espacio para decidir con calma.',
    'reflexion.c1.s3.h':  'Llevas años interpretando cualquier olvido o despiste como una señal.',
    'reflexion.c1.s3.b':  'Tener datos objetivos puede rebajar la hipervigilancia y devolverte confianza en tu vida diaria.',
    'reflexion.c1.s4.h':  'Te cuesta hacer planes a medio o largo plazo.',
    'reflexion.c1.s4.b':  'Esta información puede darte permiso emocional para volver a pensar en años, no solo en meses.',
    'reflexion.c1.s5.h':  'Tienes una personalidad muy ansiosa y evitas pensar en el tema.',
    'reflexion.c1.s5.b':  'Saber que estás en una fase sin actividad puede convertir el seguimiento en una fuente de alivio, no de amenaza.',
    'reflexion.c1.s6.h':  'Has pospuesto decisiones económicas importantes.',
    'reflexion.c1.s6.b':  'Comprar una casa, montar un negocio o reorganizar ahorros puede sentirse más viable cuando el escenario no apunta a inmediatez.',
    'reflexion.c1.s7.h':  'Tu familia vive con miedo constante por antecedentes previos.',
    'reflexion.c1.s7.b':  'Esta clasificación puede bajar la tensión colectiva y ayudar a separar tu situación actual de historias familiares pasadas.',
    'reflexion.c1.s8.h':  'Quieres seguir cuidando a otros sin sentirte «al borde».',
    'reflexion.c1.s8.b':  'Si eres cuidador, madre, padre o sostén familiar, puede darte más serenidad para seguir ocupando ese papel.',
    'reflexion.c1.s9.h':  'Te planteas viajar, mudarte fuera o vivir una experiencia larga en el extranjero.',
    'reflexion.c1.s9.b':  'Estar en fase inactiva puede darte más libertad para hacerlo sin la sensación de que te alejas justo cuando no deberías.',
    'reflexion.c1.s10.h': 'Necesitas recuperar una identidad que no gire solo en torno al riesgo genético.',
    'reflexion.c1.s10.b': 'Puede ayudarte a pasar de ser alguien en espera a ser alguien que está viviendo.',
    'reflexion.c1.s11.h': 'Te preocupa entrar en un programa y salir más angustiado.',
    'reflexion.c1.s11.b': 'Para algunas personas, una clasificación de inactividad confirma que el seguimiento no las encierra, sino que las acompaña.',
    'reflexion.c1.s12.h': 'Te cuesta explicar tu situación a la pareja o a los hijos.',
    'reflexion.c1.s12.b': 'Tener una forma concreta y menos alarmante de describir tu momento puede facilitar conversaciones más serenas.',
    'reflexion.c1.s13.h': 'Sientes culpa por pensar en proyectos personales.',
    'reflexion.c1.s13.b': 'Esta información puede ayudarte a permitirte opositar, emprender, estudiar o disfrutar sin sentir que estás mirando hacia otro lado.',
    'reflexion.c1.s14.h': 'Necesitas diferenciar riesgo genético de enfermedad real.',
    'reflexion.c1.s14.b': 'Quedar en fase inactiva refuerza de forma muy tangible esa diferencia.',
    'reflexion.c1.s15.h': 'Quieres estar dentro del sistema, pero sin vivir en alerta máxima.',
    'reflexion.c1.s15.b': 'Esta situación permite sentir que estás protegido, informado y acompañado, sin que todo pase a leerse en clave de urgencia.',

    /* ---- portadores-reflexion.html — tarjeta 2: Fase Activa Silente ---- */
    'reflexion.c2.label': 'Seguimiento de alerta',
    'reflexion.c2.title': 'Si el seguimiento te sitúa en fase activa silente',
    'reflexion.c2.sub':   '18 situaciones en las que esta información puede marcar una diferencia real en tu vida cotidiana.',
    'reflexion.c2.s1.h':  'Prefieres una verdad incómoda a una incertidumbre eterna.',
    'reflexion.c2.s1.b':  'Aunque sea una noticia más difícil, te da un mapa claro desde el que actuar.',
    'reflexion.c2.s2.h':  'Quieres maximizar tus opciones de acceder a ensayos preventivos.',
    'reflexion.c2.s2.b':  'Esta situación puede colocarte precisamente en el grupo con más probabilidad de beneficiarse antes de que aparezcan síntomas.',
    'reflexion.c2.s3.h':  'Te angustia la idea de enterarte tarde.',
    'reflexion.c2.s3.b':  'Saberlo ahora puede ser duro, pero evita llegar a un punto en el que ya se hayan perdido oportunidades.',
    'reflexion.c2.s4.h':  'Necesitas priorizar decisiones familiares importantes.',
    'reflexion.c2.s4.b':  'Puede ayudarte a adelantar conversaciones, organizar apoyos y decidir qué asuntos no quieres dejar pendientes.',
    'reflexion.c2.s5.h':  'Estás bien clínicamente y justamente por eso quieres actuar mientras estás bien.',
    'reflexion.c2.s5.b':  'La parte positiva es poder prepararte desde la fortaleza y no desde el deterioro.',
    'reflexion.c2.s6.h':  'Vives lejos de un centro experto.',
    'reflexion.c2.s6.b':  'Esta información puede justificar acercarte antes, reorganizar visitas o facilitar logística sin esperar a que surjan problemas evidentes.',
    'reflexion.c2.s7.h':  'Tu trabajo exige mucha planificación.',
    'reflexion.c2.s7.b':  'Puedes anticipar proyectos, delegaciones, relevos o cambios de ritmo de forma ordenada y no precipitada.',
    'reflexion.c2.s8.h':  'Te preocupa dejar cargas administrativas o económicas sin resolver.',
    'reflexion.c2.s8.b':  'Tener información más precisa puede ayudarte a ordenar documentos, seguros, patrimonio o decisiones legales con tiempo y claridad.',
    'reflexion.c2.s9.h':  'Tu pareja necesita entender mejor el momento que estáis viviendo.',
    'reflexion.c2.s9.b':  'La clasificación puede dar un lenguaje común para hablar del presente sin entrar todavía en un escenario de síntomas.',
    'reflexion.c2.s10.h': 'Sientes que llevas tiempo viviendo en una niebla de sospechas.',
    'reflexion.c2.s10.b': 'Para algunas personas, poner nombre a la situación reduce el sufrimiento de la ambigüedad, aunque el contenido no sea el deseado.',
    'reflexion.c2.s11.h': 'Quieres participar activamente en investigación con sentido inmediato.',
    'reflexion.c2.s11.b': 'Estar en esta fase puede convertir tu seguimiento en una contribución especialmente valiosa para acelerar terapias preventivas.',
    'reflexion.c2.s12.h': 'Necesitas reorganizar prioridades vitales.',
    'reflexion.c2.s12.b': 'Puede ayudarte a decidir qué quieres hacer ahora: pasar más tiempo con ciertas personas, viajar, cerrar etapas o abrir otras.',
    'reflexion.c2.s13.h': 'Tu familia ha vivido casos previos y teméis repetir la historia de llegar tarde.',
    'reflexion.c2.s13.b': 'La parte positiva es romper ese patrón mediante vigilancia y preparación tempranas.',
    'reflexion.c2.s14.h': 'Te resulta más fácil afrontar lo difícil cuando sabes qué hacer después.',
    'reflexion.c2.s14.b': 'La utilidad de esta información está en que activa pasos concretos: más seguimiento, más foco y más preparación.',
    'reflexion.c2.s15.h': 'Quieres estar en primera línea de las novedades terapéuticas.',
    'reflexion.c2.s15.b': 'El seguimiento es la vía para recibir información personalizada sobre opciones disponibles o próximas.',
    'reflexion.c2.s16.h': 'Temes que no hacer nada sea peor que saber.',
    'reflexion.c2.s16.b': 'En este grupo, conocer tu situación puede transformar la sensación de pasividad en una de acción informada.',
    'reflexion.c2.s17.h': 'Necesitas decidir a quién contárselo y cómo.',
    'reflexion.c2.s17.b': 'Saber dónde estás puede ayudarte a comunicarte de forma más honesta y concreta con quienes formen parte de tu red de apoyo.',
    'reflexion.c2.s18.h': 'Quieres aprovechar el tiempo útil, no reaccionar tarde.',
    'reflexion.c2.s18.b': 'Ese es quizá el valor más positivo de esta situación: todavía estás asintomático, pero ya no estás a ciegas.',

    /* ---- portadores-reflexion.html — cierre y retorno ---- */
    'reflexion.closing': 'Estar en uno u otro grupo no cambia quién eres, pero puede cambiar de forma importante cómo planificas, cómo decides y cómo aprovechas las oportunidades de seguimiento, apoyo y acceso temprano a nuevas terapias.',
    'reflexion.back':    'Volver al programa',

    /* ---- portadores-pildoras.html ---- */
    'pildoras.hero.title':       'Píldoras de<br>información',
    'pildoras.hero.sub':         'Actualizaciones breves y rigurosas sobre lo que importa',
    'pildoras.p1.title':         'Próximamente',
    'pildoras.p1.text':          'Las píldoras de información llegarán pronto. Serán actualizaciones breves y rigurosas sobre los avances más relevantes en enfermedades priónicas, ensayos clínicos y nuevas terapias. Vuelve a visitarnos.',
    'pildoras.p1.btn':           'Leer más',
    'pildoras.subscribe.title':  'Recibe las píldoras en tu email',
    'pildoras.subscribe.text':   'Si formas parte del programa de seguimiento, puedes activar las notificaciones por email para recibir un aviso cada vez que publiquemos una nueva píldora.',
    'pildoras.subscribe.btn':    'Activar mis notificaciones',
    'pildoras.modal.title':      '¿Quién eres?',
    'pildoras.modal.desc':       'Introduce tu DNI para activar las notificaciones. Solo los participantes registrados en el programa pueden activarlas.',
    'pildoras.modal.label':      'DNI',
    'pildoras.modal.btn':        'Activar',
    'pildoras.modal.notfound':   'No hemos encontrado tu DNI en el programa. Si crees que hay un error, contacta con el equipo.',

    /* ---- portadores-baja-pildoras.html ---- */
    'baja.title':       'Hemos registrado tu preferencia',
    'baja.text':        'A partir de ahora no volverás a recibir emails sobre nuevas píldoras de información. Si en algún momento cambias de opinión, puedes volver a activarlas desde la sección de Píldoras de información del programa.',
    'baja.link':        'Ir a las Píldoras de información',
    'baja.error.title': 'Enlace no válido',
    'baja.error.text':  'Este enlace no es válido o ya ha sido utilizado. Si deseas gestionar tus preferencias, contacta con el equipo.',
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

    /* ---- portadores-reflexion.html ---- */
    'reflexion.teaser.text': 'Galdetzen al diozu zeure buruari zein taldetan zauden jakitea merezi ote duen?',
    'reflexion.teaser.sub':  'Hori hausnartzeko lagun ditzaketen egoera zehatzak pentsatu ditugu.',
    'reflexion.teaser.btn':  'Horren inguruan hausnartu nahi dut',
    'reflexion.hero.title':  'Jakitearen balioa',
    'reflexion.hero.sub':    'Ez dago erantzun zuzen bat. Baina egoera zehatz batzuk daude une honetan non zauden jakin nahi duzun erabakitzen lagun diezazuketenak.',
    'reflexion.c1.label':    'Jarraimen estandarra',
    'reflexion.c1.title':    'Jarraipenak fase inaktiboan kokatzen bazaitu',
    'reflexion.c1.sub':      '15 egoera zure eguneroko bizitzan benetako aldea egin dezakeen informazio horena.',
    'reflexion.c1.s1.h':  'Lan eskakizun handiko bat edo hiriz aldatzea onartzea pentsatzen ari zara.',
    'reflexion.c1.s1.b':  'Jarduera detektagarririk ez dagoela jakiteak lasaitasun handiagoa eman diezazuke proiektu hori onartzeko, funtsezko leihoa arriskuan jartzen ari zarela sentitu gabe.',
    'reflexion.c1.s2.h':  'Familia bat sortu edo dagoeneko duzun hori handitu nahi duzu.',
    'reflexion.c1.s2.b':  'Etapa hori presa-sentsazio txikiagoarekin eta lasaitasunez erabakitzeko leku gehiagorekin bizitzen lagundu diezazuke.',
    'reflexion.c1.s3.h':  'Urteak daramatzazu edozein ahanztura edo oharkabetasun seinaletzat interpretatzen.',
    'reflexion.c1.s3.b':  'Datu objektiboak izateak hiperzaintza murriztu eta eguneroko bizitzan konfiantza itzul diezazuke.',
    'reflexion.c1.s4.h':  'Kosta egiten zaizu epe ertaineko edo luzerako planak egitea.',
    'reflexion.c1.s4.b':  'Informazio honek baimen emozionala eman diezazuke berriro urtetan pentsatzeko, hilabetetan bakarrik ez.',
    'reflexion.c1.s5.h':  'Izaera oso antsiotsua duzu eta gaiari buruz pentsatzea saihesten duzu.',
    'reflexion.c1.s5.b':  'Jarduerarik gabeko fasean zaudela jakiteak jarraipena lasaitasun-iturri bihurtu dezake, mehatxu-iturri izan beharrean.',
    'reflexion.c1.s6.h':  'Erabaki ekonomiko garrantzitsuak atzeratu dituzu.',
    'reflexion.c1.s6.b':  'Etxe bat erostea, negozio bat sortzea edo aurrezkiak berrantolatzea bideragarriagoa sentitu daiteke eszenatokiak ez duenean berehalakotasunik adierazten.',
    'reflexion.c1.s7.h':  'Zure familia beldur etengabez bizi da aurreko aurrekarien ondorioz.',
    'reflexion.c1.s7.b':  'Sailkapen honek talde-tentsioa jaitsi dezake eta zure egungo egoera familia-istorio iraganetatik bereizten lagun dezake.',
    'reflexion.c1.s8.h':  'Besteak zaintzen jarraitu nahi duzu "mugan" sentitu gabe.',
    'reflexion.c1.s8.b':  'Zaintzaile, ama, aita edo familiaren euskarri bazara, lasaitasun handiagoa eman diezazuke rol horri eusten jarraitzeko.',
    'reflexion.c1.s9.h':  'Bidaiatzea, kanpora aldatzea edo atzerrian esperientzia luze bat bizitzea planteatzen duzu.',
    'reflexion.c1.s9.b':  'Fase inaktiboan egoteak askatasun handiagoa eman diezazuke hori egiteko, egokia ez denean urruntzen ari zarela sentitu gabe.',
    'reflexion.c1.s10.h': 'Arrisku genetikoaren inguruan soilik bira egiten ez duen identitatea berreskuratu behar duzu.',
    'reflexion.c1.s10.b': 'Itxaroten dagoen norbait izatetik bizitzen ari den norbait izatera pasatzen lagun diezazuke.',
    'reflexion.c1.s11.h': 'Programa batean sartu eta hura utzi ostean larriago irtetea kezkatzen zaitu.',
    'reflexion.c1.s11.b': 'Zenbait pertsonarentzat, inaktibotasun-sailkapenak baieztatzen du jarraipenak ez dituela itxi egiten, laguntzen egiten diela baizik.',
    'reflexion.c1.s12.h': 'Kosta egiten zaizu zure egoera bikotekideari edo seme-alabei azaltzea.',
    'reflexion.c1.s12.b': 'Zure unea deskribatzeko modu zehatz eta ez hain alarmagarri bat izateak elkarrizketa lasaiagoak erraz ditzake.',
    'reflexion.c1.s13.h': 'Proiektu pertsonaletan pentsatzeagatik erruduntasuna sentitzen duzu.',
    'reflexion.c1.s13.b': 'Informazio honek lagun diezazuke zeure buruari oposizioak egiten, ekiten, ikasten edo gozatzen uzteko, beste alderantz begira zaudela sentitu gabe.',
    'reflexion.c1.s14.h': 'Arrisku genetikoa eta benetako gaixotasuna bereizi behar dituzu.',
    'reflexion.c1.s14.b': 'Fase inaktiboan geratzeak oso modu ukigarrian indartzen du bereizketa hori.',
    'reflexion.c1.s15.h': 'Sistemaren barruan egon nahi duzu, baina erabateko alertan bizi gabe.',
    'reflexion.c1.s15.b': 'Egoera honek babestuta, informatuta eta lagunduta zaudela sentitzen uzten du, dena presa-giltzan interpretatzen hasi gabe.',
    'reflexion.c2.label':    'Alerta jarraipena',
    'reflexion.c2.title':    'Jarraipenak fase aktibo isilan kokatzen bazaitu',
    'reflexion.c2.sub':      '18 egoera zure eguneroko bizitzan benetako aldea egin dezakeen informazio horena.',
    'reflexion.c2.s1.h':  'Nahiago duzu egia deserosoa betiereko ziurgabetasuna baino.',
    'reflexion.c2.s1.b':  'Albiste zailagoa izanik ere, jarduteko mapa argia ematen dizu.',
    'reflexion.c2.s2.h':  'Entsegu prebentiboetan sartzeko aukerak maximizatu nahi dituzu.',
    'reflexion.c2.s2.b':  'Egoera honek sintomak agertu aurretik onura jasotzeko probabilitate handieneko taldean koka zaitzake zehazki.',
    'reflexion.c2.s3.h':  'Berandu jakitearen ideiak larritzen zaitu.',
    'reflexion.c2.s3.b':  'Orain jakitea gogorra izan daiteke, baina aukerak galduta dauden unera iristea saihesten du.',
    'reflexion.c2.s4.h':  'Familiako erabaki garrantzitsuak lehenetsi behar dituzu.',
    'reflexion.c2.s4.b':  'Elkarrizketak aurreratzen, laguntzak antolatzen eta zer gai utzi nahi ez dituzun pendiente erabakitzen lagun diezazuke.',
    'reflexion.c2.s5.h':  'Klinikoki ondo zaude eta, hain zuzen ere horregatik, ondo zauden bitartean jardun nahi duzu.',
    'reflexion.c2.s5.b':  'Alderdi positiboa da prestatzeko aukera izatea indarretik eta ez hondatzetik.',
    'reflexion.c2.s6.h':  'Aditu-zentro batetik urrun bizi zara.',
    'reflexion.c2.s6.b':  'Informazio honek justifikatu dezake lehenago hurbiltzea, bisitak berrantolatzea edo logistika erraztea, arazo agerikoak sortu arte itxaron gabe.',
    'reflexion.c2.s7.h':  'Zure lanak planifikazio handia eskatzen du.',
    'reflexion.c2.s7.b':  'Proiektuak, delegazioak, erreleboak edo erritmo-aldaketak modu ordenatuan eta ez presaka aurreikusi ditzakezu.',
    'reflexion.c2.s8.h':  'Karga administratibo edo ekonomikoak konpondu gabe uztea kezkatzen zaitu.',
    'reflexion.c2.s8.b':  'Informazio zehatzagoa izateak dokumentuak, aseguruak, ondarea edo erabaki juridikoak denboraz eta argitasunez antolatzen lagun diezazuke.',
    'reflexion.c2.s9.h':  'Zure bikotekideak hobeto ulertu behar du bizi duzuen unea.',
    'reflexion.c2.s9.b':  'Sailkapenak hizkuntza komuna eman dezake orainaz hitz egiteko, oraindik sintometan sartu gabe.',
    'reflexion.c2.s10.h': 'Susmoen laino batean bizi zarela sentitzen duzu denbora luzez.',
    'reflexion.c2.s10.b': 'Zenbait pertsonarentzat, egoerari izena jartzeak anbiguotasunaren sufrimendua murrizten du, edukia desiratutakoa ez izanik ere.',
    'reflexion.c2.s11.h': 'Ikerketan aktiboki parte hartu nahi duzu berehalako zentzuarekin.',
    'reflexion.c2.s11.b': 'Fase honetan egoteak zure jarraipena bereziki baliotsua bihurtu dezake ekarpen gisa, terapia prebentiboak azkartzeko.',
    'reflexion.c2.s12.h': 'Lehentasun bizitzakoak berrantolatu behar dituzu.',
    'reflexion.c2.s12.b': 'Orain zer egin nahi duzun erabakitzen lagun diezazuke: denbora gehiago ematea pertsona zehatzekin, bidaiatzea, etapak ixtea edo beste batzuk irekitzea.',
    'reflexion.c2.s13.h': 'Zure familiak aurreko kasuak bizi izan ditu eta berandu iristearen istorioa errepikatzearen beldur zarete.',
    'reflexion.c2.s13.b': 'Alderdi positiboa patroi hori apurtzea da zaintza eta prestakuntza goiztiarren bidez.',
    'reflexion.c2.s14.h': 'Errazagoa zaizu gogorra dena aurre egitea ondoren zer egin badakizu.',
    'reflexion.c2.s14.b': 'Informazio honen erabilgarritasuna urrats zehatzak aktibatzean datza: jarraipen gehiago, arreta gehiago eta prestakuntza gehiago.',
    'reflexion.c2.s15.h': 'Berritasun terapeutikoen lehen lerroan egon nahi duzu.',
    'reflexion.c2.s15.b': 'Jarraipena da eskuragarri dauden edo datozen aukerei buruzko informazio pertsonalizatua jasotzeko bidea.',
    'reflexion.c2.s16.h': 'Beldur zara ezer ez egitea okerragoa izan daitekeela jakitea baino.',
    'reflexion.c2.s16.b': 'Talde honetan, zure egoera ezagutzeak pasibotasunaren sentsazioa informaturiko ekintza bihurtu dezake.',
    'reflexion.c2.s17.h': 'Nori eta nola kontatu erabaki behar duzu.',
    'reflexion.c2.s17.b': 'Non zauden jakiteak era zintzoago eta zehatzagoan komunikatzen lagun diezazuke zure laguntza-sareko kideekin.',
    'reflexion.c2.s18.h': 'Denbora baliagarria aprobetxatu nahi duzu, ez berandu erreakzionatu.',
    'reflexion.c2.s18.b': 'Hori da agian egoera honen balio positiboena: oraindik asintomatikoa zara, baina jada ez zaude itsu.',
    'reflexion.closing':     'Talde batean edo bestean egoteak ez du aldatzen nor zaren, baina garrantzizko aldaketa ekar dezake nola planifikatzen duzun, nola erabakitzen duzun eta jarraipenerako, laguntzarako eta terapia berrietan sarbide goiztiarrerako aukerak nola aprobetxatzen dituzun.',
    'reflexion.back':        'Programara itzuli',
    'pildoras.hero.title':      'Informazio<br>pilulak',
    'pildoras.hero.sub':        'Garrantzitsua denaren inguruko eguneratze labur eta zorrotzak',
    'pildoras.p1.title':        'Laster',
    'pildoras.p1.text':         'Informazio pilulak laster iritsiko dira. Gaixotasun prionikoetan, entsegu klinikoetan eta terapia berrietan dauden aurrerapen garrantzitsuenei buruzko eguneratze labur eta zorrotzak izango dira. Bisitatu berriro.',
    'pildoras.p1.btn':          'Gehiago irakurri',
    'pildoras.subscribe.title': 'Jaso pilulak zure emailean',
    'pildoras.subscribe.text':  'Jarraipen programaren parte bazara, email bidezko jakinarazpenak aktibatu ditzakezu píldora berri bat argitaratzen dugunean abisu bat jasotzeko.',
    'pildoras.subscribe.btn':   'Nire jakinarazpenak aktibatu',
    'pildoras.modal.title':     'Nor zara?',
    'pildoras.modal.desc':      'Sartu zure NAN jakinarazpenak aktibatzeko. Programan erregistratutako parte-hartzaileek soilik aktiba ditzakete.',
    'pildoras.modal.label':     'NAN',
    'pildoras.modal.btn':       'Aktibatu',
    'pildoras.modal.notfound':  'Ez dugu zure NAN aurkitu programan. Akatsa dela uste baduzu, jarri harremanetan taldearekin.',
    'm3.a1.text':   'Programaren barruan gertatzen dena ez dago inongo obligaziori lotuta. Nahi duzun unean parte-hartzea uztea erabaki dezakezu, eta horrek ez dio eragingo zure arreta medikoari ez taldearekiko harremanari. Hemen ez diozu inori ezer zor, eta guk ere ez dizugu ezer eskatzen.',
    'm3.a2.text':   'Programako parte-hartzaile gisa, portadore asintomatikoentzat bereziki diseinatutako aplikazio batera sartuko duzu. Denboran zehar eta nahi baduzu, lo-kalitatearen, ongizate emozionalaren, funtzio kognitiboaren eta bestelako adierazle garrantzitsuei buruzko aspektuak apuntatzeko aukera emango dizu — zure bizikideak, baleuka, ere erregistro horretan lagundu ahal izango du. Informazio hau ez da soilik taldeari baliagarria: zurea da, eta denborarekin nola zauden hobeto ulertzen lagundu diezazuke.',
    'seguimiento.sueno.title': 'Lo-azterlana',
    'seguimiento.sueno.text':  'Polisomnografia bidez, loa bitartean gertatzen dena erregistratzen dugu: mugimenduak, arnasketa, garuneko jarduera eta portaera. Lo-asaldaketa batzuk — bereziki REM fasearekin erlazionatutakoak — modu sotilean ager daitezke beste edozein seinale detektatu baino lehen, eta haien denboran zeharreko jarraipena detekzio goiztiarreko protokoloaren parte da.',
    'baja.title':       'Zure lehentasuna erregistratu dugu',
    'baja.text':        'Hemendik aurrera ez duzu informazio píldora berrien inguruko emailik jasoko. Iritzia aldatzen baduzu, programako Informazio Píldorak atalean berriro aktibatu ditzakezu.',
    'baja.link':        'Informazio Píldoretara joan',
    'baja.error.title': 'Esteka ez da baliozkoa',
    'baja.error.text':  'Esteka hau ez da baliozkoa edo jada erabili da. Lehentasunak kudeatu nahi badituzu, jarri harremanetan taldearekin.',
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
    'm1.c.body':   'Abans de prendre cap decisió, m\'agradaria poder parlar amb l\'equip del programa. Tinc preguntes que no sé com respondre\'m sol/a, i necessito escoltar una veu humana abans de continuar.',

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

    /* ---- portadores-reflexion.html ---- */
    'reflexion.teaser.text': 'Et preguntes si val la pena saber en quin grup ets?',
    'reflexion.teaser.sub':  'Hem pensat en situacions concretes que poden ajudar-te a reflexionar-ho.',
    'reflexion.teaser.btn':  'Vull reflexionar sobre això',
    'reflexion.hero.title':  'El valor de saber',
    'reflexion.hero.sub':    'No hi ha una resposta correcta. Però hi ha situacions concretes que poden ajudar-te a decidir si vols conèixer en quin moment ets.',
    'reflexion.c1.label':    'Seguiment estàndard',
    'reflexion.c1.title':    'Si el seguiment et situa en fase inactiva',
    'reflexion.c1.sub':      '15 situacions en les quals aquesta informació pot marcar una diferència real en la teva vida quotidiana.',
    'reflexion.c1.s1.h':  'Estàs pensant a acceptar una feina exigent o un canvi de ciutat.',
    'reflexion.c1.s1.b':  'Saber que no hi ha activitat detectable pot donar-te més tranquil·litat per acceptar aquest projecte sense sentir que estàs comprometent una finestra crítica.',
    'reflexion.c1.s2.h':  'Vols formar una família o ampliar la que ja tens.',
    'reflexion.c1.s2.b':  'Pot ajudar-te a viure aquesta etapa amb menys sensació d\'urgència i més espai per decidir amb calma.',
    'reflexion.c1.s3.h':  'Fa anys que interpretes qualsevol oblit o distracció com un senyal.',
    'reflexion.c1.s3.b':  'Tenir dades objectives pot rebaixar la hipervigilància i tornar-te confiança en la teva vida diària.',
    'reflexion.c1.s4.h':  'Et costa fer plans a mitjà o llarg termini.',
    'reflexion.c1.s4.b':  'Aquesta informació pot donar-te permís emocional per tornar a pensar en anys, no només en mesos.',
    'reflexion.c1.s5.h':  'Tens una personalitat molt ansiosa i evites pensar en el tema.',
    'reflexion.c1.s5.b':  'Saber que estàs en una fase sense activitat pot convertir el seguiment en una font d\'alleujament, no d\'amenaça.',
    'reflexion.c1.s6.h':  'Has posposat decisions econòmiques importants.',
    'reflexion.c1.s6.b':  'Comprar una casa, muntar un negoci o reorganitzar estalvis pot sentir-se més viable quan l\'escenari no apunta a immediatesa.',
    'reflexion.c1.s7.h':  'La teva família viu amb por constant per antecedents previs.',
    'reflexion.c1.s7.b':  'Aquesta classificació pot abaixar la tensió col·lectiva i ajudar a separar la teva situació actual d\'històries familiars passades.',
    'reflexion.c1.s8.h':  'Vols continuar cuidant els altres sense sentir-te "a la vora".',
    'reflexion.c1.s8.b':  'Si ets cuidador, mare, pare o sosteniment familiar, pot donar-te més serenitat per continuar ocupant aquest paper.',
    'reflexion.c1.s9.h':  'Et planteges viatjar, mudar-te fora o viure una experiència llarga a l\'estranger.',
    'reflexion.c1.s9.b':  'Estar en fase inactiva pot donar-te més llibertat per fer-ho sense la sensació que t\'allunyes just quan no ho hauries de fer.',
    'reflexion.c1.s10.h': 'Necessites recuperar una identitat que no giri només al voltant del risc genètic.',
    'reflexion.c1.s10.b': 'Pot ajudar-te a passar de ser algú en espera a ser algú que està vivint.',
    'reflexion.c1.s11.h': 'Et preocupa entrar en un programa i sortir-ne més angoixat.',
    'reflexion.c1.s11.b': 'Per a algunes persones, una classificació d\'inactivitat confirma que el seguiment no les tanca, sinó que les acompanya.',
    'reflexion.c1.s12.h': 'Et costa explicar la teva situació a la parella o als fills.',
    'reflexion.c1.s12.b': 'Tenir una manera concreta i menys alarmant de descriure el teu moment pot facilitar converses més serenes.',
    'reflexion.c1.s13.h': 'Et sents culpable per pensar en projectes personals.',
    'reflexion.c1.s13.b': 'Aquesta informació pot ajudar-te a permetre\'t opositar, emprendre, estudiar o gaudir sense sentir que estàs mirant cap a una altra banda.',
    'reflexion.c1.s14.h': 'Necessites diferenciar risc genètic de malaltia real.',
    'reflexion.c1.s14.b': 'Quedar en fase inactiva reforça de manera molt tangible aquesta diferència.',
    'reflexion.c1.s15.h': 'Vols estar dins del sistema, però sense viure en alerta màxima.',
    'reflexion.c1.s15.b': 'Aquesta situació permet sentir que estàs protegit, informat i acompanyat, sense que tot passi a llegir-se en clau d\'urgència.',
    'reflexion.c2.label':    'Seguiment d\'alerta',
    'reflexion.c2.title':    'Si el seguiment et situa en fase activa silenciosa',
    'reflexion.c2.sub':      '18 situacions en les quals aquesta informació pot marcar una diferència real en la teva vida quotidiana.',
    'reflexion.c2.s1.h':  'Prefereixes una veritat incòmoda a una incertesa eterna.',
    'reflexion.c2.s1.b':  'Encara que sigui una notícia més difícil, et dóna un mapa clar des del qual actuar.',
    'reflexion.c2.s2.h':  'Vols maximitzar les teves opcions d\'accedir a assaigs preventius.',
    'reflexion.c2.s2.b':  'Aquesta situació pot col·locar-te precisament en el grup amb més probabilitats de beneficiar-se abans que apareguin símptomes.',
    'reflexion.c2.s3.h':  'T\'angoixa la idea d\'assabentar-te\'n tard.',
    'reflexion.c2.s3.b':  'Saber-ho ara pot ser dur, però evita arribar a un punt en què ja s\'hagin perdut oportunitats.',
    'reflexion.c2.s4.h':  'Necessites prioritzar decisions familiars importants.',
    'reflexion.c2.s4.b':  'Pot ajudar-te a avançar converses, organitzar suports i decidir quins assumptes no vols deixar pendents.',
    'reflexion.c2.s5.h':  'Estàs bé clínicament i justament per això vols actuar mentre estàs bé.',
    'reflexion.c2.s5.b':  'La part positiva és poder preparar-te des de la fortalesa i no des del deteriorament.',
    'reflexion.c2.s6.h':  'Vius lluny d\'un centre expert.',
    'reflexion.c2.s6.b':  'Aquesta informació pot justificar acostar-te abans, reorganitzar visites o facilitar logística sense esperar que sorgeixin problemes evidents.',
    'reflexion.c2.s7.h':  'La teva feina exigeix molta planificació.',
    'reflexion.c2.s7.b':  'Pots anticipar projectes, delegacions, relleus o canvis de ritme de manera ordenada i no precipitada.',
    'reflexion.c2.s8.h':  'Et preocupa deixar càrregues administratives o econòmiques sense resoldre.',
    'reflexion.c2.s8.b':  'Tenir informació més precisa pot ajudar-te a ordenar documents, assegurances, patrimoni o decisions legals amb temps i claredat.',
    'reflexion.c2.s9.h':  'La teva parella necessita entendre millor el moment que esteu vivint.',
    'reflexion.c2.s9.b':  'La classificació pot donar un llenguatge comú per parlar del present sense entrar encara en un escenari de símptomes.',
    'reflexion.c2.s10.h': 'Sents que fa temps que vius en una boira de sospites.',
    'reflexion.c2.s10.b': 'Per a algunes persones, posar nom a la situació redueix el patiment de l\'ambigüitat, encara que el contingut no sigui el desitjat.',
    'reflexion.c2.s11.h': 'Vols participar activament en investigació amb sentit immediat.',
    'reflexion.c2.s11.b': 'Estar en aquesta fase pot convertir el teu seguiment en una contribució especialment valuosa per accelerar teràpies preventives.',
    'reflexion.c2.s12.h': 'Necessites reorganitzar prioritats vitals.',
    'reflexion.c2.s12.b': 'Pot ajudar-te a decidir què vols fer ara: passar més temps amb certes persones, viatjar, tancar etapes o obrir-ne d\'altres.',
    'reflexion.c2.s13.h': 'La teva família ha viscut casos previs i temeu repetir la història d\'arribar tard.',
    'reflexion.c2.s13.b': 'La part positiva és trencar aquest patró mitjançant vigilància i preparació primerenques.',
    'reflexion.c2.s14.h': 'Et resulta més fàcil afrontar allò difícil quan saps què fer després.',
    'reflexion.c2.s14.b': 'La utilitat d\'aquesta informació rau en el fet que activa passos concrets: més seguiment, més focus i més preparació.',
    'reflexion.c2.s15.h': 'Vols estar en primera línia de les novetats terapèutiques.',
    'reflexion.c2.s15.b': 'El seguiment és la via per rebre informació personalitzada sobre opcions disponibles o properes.',
    'reflexion.c2.s16.h': 'Tems que no fer res sigui pitjor que saber.',
    'reflexion.c2.s16.b': 'En aquest grup, conèixer la teva situació pot transformar la sensació de passivitat en una d\'acció informada.',
    'reflexion.c2.s17.h': 'Necessites decidir a qui explicar-ho i com.',
    'reflexion.c2.s17.b': 'Saber on ets pot ajudar-te a comunicar-te de manera més honesta i concreta amb qui formi part de la teva xarxa de suport.',
    'reflexion.c2.s18.h': 'Vols aprofitar el temps útil, no reaccionar tard.',
    'reflexion.c2.s18.b': 'Aquest és potser el valor més positiu d\'aquesta situació: encara ets asimptomàtic, però ja no vas a cegues.',
    'reflexion.closing':     'Estar en un grup o l\'altre no canvia qui ets, però pot canviar de forma important com planifiques, com decideixes i com aprofites les oportunitats de seguiment, suport i accés primerenc a noves teràpies.',
    'reflexion.back':        'Tornar al programa',
    'pildoras.hero.title':      'Píndoles<br>d\'informació',
    'pildoras.hero.sub':        'Actualitzacions breus i rigoroses sobre el que importa',
    'pildoras.p1.title':        'Properament',
    'pildoras.p1.text':         'Les píndoles d\'informació arribaran aviat. Seran actualitzacions breus i rigoroses sobre els avenços més rellevants en malalties priòniques, assajos clínics i noves teràpies. Torna a visitar-nos.',
    'pildoras.p1.btn':          'Llegir més',
    'pildoras.subscribe.title': 'Rep les píndoles al teu email',
    'pildoras.subscribe.text':  'Si formes part del programa de seguiment, pots activar les notificacions per email per rebre un avís cada vegada que publiquem una nova píndola.',
    'pildoras.subscribe.btn':   'Activar les meves notificacions',
    'pildoras.modal.title':     'Qui ets?',
    'pildoras.modal.desc':      'Introdueix el teu DNI per activar les notificacions. Només els participants registrats al programa les poden activar.',
    'pildoras.modal.label':     'DNI',
    'pildoras.modal.btn':       'Activar',
    'pildoras.modal.notfound':  'No hem trobat el teu DNI al programa. Si creus que hi ha un error, contacta amb l\'equip.',
    'm3.a1.text':   'Res del que passi dins del programa està subjecte a cap obligació. Pots decidir en qualsevol moment deixar de participar, sense que això afecti la teva atenció mèdica ni la teva relació amb l\'equip. Aquí no deus res a ningú, i nosaltres tampoc no t\'exigim res.',
    'm3.a2.text':   'Com a participant en el programa, tindràs accés a una aplicació dissenyada específicament per a portadors asimptomàtics. Et permetrà anar anotant, al llarg del temps i si així ho desitges, aspectes com la qualitat del son, l\'estat d\'ànim, la funció cognitiva i altres indicadors rellevants — amb la possibilitat que la teva parella de convivència, si en tens, col·labori també en aquest registre. Aquesta informació no és només útil per a l\'equip: és teva, i pot ajudar-te a entendre millor com estàs al llarg del temps.',
    'seguimiento.sueno.title': 'Estudi del son',
    'seguimiento.sueno.text':  'Mitjançant polisomnografia, registrem el que passa durant el son: moviments, respiració, activitat cerebral i comportament. Algunes alteracions del son — en particular les relacionades amb la fase REM — poden aparèixer de forma subtil abans que qualsevol altre signe sigui detectable, i el seu seguiment en el temps forma part del protocol de detecció precoç.',
    'baja.title':       'Hem registrat la teva preferència',
    'baja.text':        'A partir d\'ara no tornaràs a rebre emails sobre noves píndoles d\'informació. Si en algun moment canvies d\'opinió, pots tornar a activar-les des de la secció de Píndoles d\'informació del programa.',
    'baja.link':        'Anar a les Píndoles d\'informació',
    'baja.error.title': 'Enllaç no vàlid',
    'baja.error.text':  'Aquest enllaç no és vàlid o ja ha estat utilitzat. Si vols gestionar les teves preferències, contacta amb l\'equip.',
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

    /* ---- portadores-reflexion.html ---- */
    'reflexion.teaser.text': 'Preguntas se vale a pena saber en que grupo estás?',
    'reflexion.teaser.sub':  'Pensamos en situacións concretas que poden axudarte a reflexionalo.',
    'reflexion.teaser.btn':  'Quero reflexionar sobre isto',
    'reflexion.hero.title':  'O valor de saber',
    'reflexion.hero.sub':    'Non hai unha resposta correcta. Pero hai situacións concretas que poden axudarte a decidir se queres coñecer en que momento estás.',
    'reflexion.c1.label':    'Seguimento estándar',
    'reflexion.c1.title':    'Se o seguimento te sitúa en fase inactiva',
    'reflexion.c1.sub':      '15 situacións nas que esta información pode marcar unha diferenza real na túa vida cotiá.',
    'reflexion.c1.s1.h':  'Estás pensando en aceptar un traballo esixente ou un cambio de cidade.',
    'reflexion.c1.s1.b':  'Saber que non hai actividade detectable pode darche máis tranquilidade para aceptar ese proxecto sen sentir que estás comprometendo unha xanela crítica.',
    'reflexion.c1.s2.h':  'Queres formar unha familia ou ampliar a que xa tes.',
    'reflexion.c1.s2.b':  'Pode axudarche a vivir esa etapa con menos sensación de urxencia e máis espazo para decidir con calma.',
    'reflexion.c1.s3.h':  'Levas anos interpretando calquera esquecemento ou despiste coma un sinal.',
    'reflexion.c1.s3.b':  'Ter datos obxectivos pode rebaixar a hipervixilancia e devolverche confianza na túa vida diaria.',
    'reflexion.c1.s4.h':  'Cústache facer plans a medio ou longo prazo.',
    'reflexion.c1.s4.b':  'Esta información pode darche permiso emocional para volver pensar en anos, non só en meses.',
    'reflexion.c1.s5.h':  'Tes unha personalidade moi ansiosa e evitas pensar no tema.',
    'reflexion.c1.s5.b':  'Saber que estás nunha fase sen actividade pode converter o seguimento nunha fonte de alivio, non de ameaza.',
    'reflexion.c1.s6.h':  'Pospuxeches decisións económicas importantes.',
    'reflexion.c1.s6.b':  'Comprar unha casa, montar un negocio ou reorganizar aforros pode sentirse máis viable cando o escenario non apunta a inmediatez.',
    'reflexion.c1.s7.h':  'A túa familia vive con medo constante por antecedentes previos.',
    'reflexion.c1.s7.b':  'Esta clasificación pode baixar a tensión colectiva e axudar a separar a túa situación actual de historias familiares pasadas.',
    'reflexion.c1.s8.h':  'Queres seguir coidando doutros sen sentirte "ao bordo".',
    'reflexion.c1.s8.b':  'Se es coidador, nai, pai ou sostén familiar, pode darche máis serenidade para seguir ocupando ese papel.',
    'reflexion.c1.s9.h':  'Plantéaste viaxar, mudarte fóra ou vivir unha experiencia longa no estranxeiro.',
    'reflexion.c1.s9.b':  'Estar en fase inactiva pode darche máis liberdade para facelo sen a sensación de que te afastas xusto cando non debeses.',
    'reflexion.c1.s10.h': 'Precisas recuperar unha identidade que non xire só arredor do risco xenético.',
    'reflexion.c1.s10.b': 'Pode axudarche a pasar de ser alguén en espera a ser alguén que está vivindo.',
    'reflexion.c1.s11.h': 'Preocúpate entrar nun programa e saír máis angustiado.',
    'reflexion.c1.s11.b': 'Para algunhas persoas, unha clasificación de inactividade confirma que o seguimento non as pecha, senón que as acompaña.',
    'reflexion.c1.s12.h': 'Cústache explicar a túa situación á parella ou aos fillos.',
    'reflexion.c1.s12.b': 'Ter unha forma concreta e menos alarmante de describir o teu momento pode facilitar conversas máis serenas.',
    'reflexion.c1.s13.h': 'Sentes culpa por pensar en proxectos persoais.',
    'reflexion.c1.s13.b': 'Esta información pode axudarche a permitirte opositar, emprender, estudar ou gozar sen sentir que estás mirando para outro lado.',
    'reflexion.c1.s14.h': 'Precisas diferenciar risco xenético de enfermidade real.',
    'reflexion.c1.s14.b': 'Quedar en fase inactiva reforza de forma moi tanxible esa diferenza.',
    'reflexion.c1.s15.h': 'Queres estar dentro do sistema, pero sen vivir en alerta máxima.',
    'reflexion.c1.s15.b': 'Esta situación permite sentir que estás protexido, informado e acompañado, sen que todo pase a lerse en clave de urxencia.',
    'reflexion.c2.label':    'Seguimento de alerta',
    'reflexion.c2.title':    'Se o seguimento te sitúa en fase activa silente',
    'reflexion.c2.sub':      '18 situacións nas que esta información pode marcar unha diferenza real na túa vida cotiá.',
    'reflexion.c2.s1.h':  'Prefires unha verdade incómoda a unha incerteza eterna.',
    'reflexion.c2.s1.b':  'Aínda que sexa unha nova máis difícil, dáche un mapa claro desde o que actuar.',
    'reflexion.c2.s2.h':  'Queres maximizar as túas opcións de acceder a ensaios preventivos.',
    'reflexion.c2.s2.b':  'Esta situación pode colocarte precisamente no grupo con máis probabilidade de beneficiarse antes de que aparezan síntomas.',
    'reflexion.c2.s3.h':  'Angústiate a idea de enterarte tarde.',
    'reflexion.c2.s3.b':  'Sabelo agora pode ser duro, pero evita chegar a un punto no que xa se perderan oportunidades.',
    'reflexion.c2.s4.h':  'Precisas priorizar decisións familiares importantes.',
    'reflexion.c2.s4.b':  'Pode axudarche a adiantar conversas, organizar apoios e decidir que asuntos non queres deixar pendentes.',
    'reflexion.c2.s5.h':  'Estás ben clinicamente e xustamente por iso queres actuar mentres estás ben.',
    'reflexion.c2.s5.b':  'A parte positiva é poder prepararte desde a fortaleza e non desde o deterioro.',
    'reflexion.c2.s6.h':  'Vives lonxe dun centro experto.',
    'reflexion.c2.s6.b':  'Esta información pode xustificar achegarte antes, reorganizar visitas ou facilitar loxística sen esperar a que xurdan problemas evidentes.',
    'reflexion.c2.s7.h':  'O teu traballo esixe moita planificación.',
    'reflexion.c2.s7.b':  'Podes anticipar proxectos, delegacións, relevos ou cambios de ritmo de forma ordenada e non precipitada.',
    'reflexion.c2.s8.h':  'Preocúpache deixar cargas administrativas ou económicas sen resolver.',
    'reflexion.c2.s8.b':  'Ter información máis precisa pode axudarche a ordenar documentos, seguros, patrimonio ou decisións legais con tempo e claridade.',
    'reflexion.c2.s9.h':  'A túa parella precisa entender mellor o momento que estades vivindo.',
    'reflexion.c2.s9.b':  'A clasificación pode dar unha linguaxe común para falar do presente sen entrar aínda nun escenario de síntomas.',
    'reflexion.c2.s10.h': 'Sentes que levas tempo vivindo nunha néboa de sospeitas.',
    'reflexion.c2.s10.b': 'Para algunhas persoas, poñerlle nome á situación reduce o sufrimento da ambigüidade, aínda que o contido non sexa o desexado.',
    'reflexion.c2.s11.h': 'Queres participar activamente en investigación con sentido inmediato.',
    'reflexion.c2.s11.b': 'Estar nesta fase pode converter o teu seguimento nunha contribución especialmente valiosa para acelerar terapias preventivas.',
    'reflexion.c2.s12.h': 'Precisas reorganizar prioridades vitais.',
    'reflexion.c2.s12.b': 'Pode axudarche a decidir que queres facer agora: pasar máis tempo con certas persoas, viaxar, pechar etapas ou abrir outras.',
    'reflexion.closing':     'Estar nun grupo ou noutro non cambia quen es, pero pode cambiar de forma importante como planificas, como decides e como aproveitas as oportunidades de seguimento, apoio e acceso temperán a novas terapias.',
    'reflexion.back':        'Volver ao programa',
    'pildoras.hero.title':      'Píldoras de<br>información',
    'pildoras.hero.sub':        'Actualizacións breves e rigorosas sobre o que importa',
    'pildoras.p1.title':        'Proximamente',
    'pildoras.p1.text':         'As píldoras de información chegarán pronto. Serán actualizacións breves e rigorosas sobre os avances máis relevantes en enfermidades priónicas, ensaios clínicos e novas terapias. Volve a visitarnos.',
    'pildoras.p1.btn':          'Ler máis',
    'pildoras.subscribe.title': 'Recibe as píldoras no teu email',
    'pildoras.subscribe.text':  'Se formas parte do programa de seguimento, podes activar as notificacións por email para recibir un aviso cada vez que publiquemos unha nova píldora.',
    'pildoras.subscribe.btn':   'Activar as miñas notificacións',
    'pildoras.modal.title':     'Quen es?',
    'pildoras.modal.desc':      'Introduce o teu DNI para activar as notificacións. Só os participantes rexistrados no programa poden activalas.',
    'pildoras.modal.label':     'DNI',
    'pildoras.modal.btn':       'Activar',
    'pildoras.modal.notfound':  'Non atopamos o teu DNI no programa. Se cres que hai un erro, contacta co equipo.',
    'm3.a1.text':   'Nada do que ocorra dentro do programa está suxeito a ningunha obrigación. Podes decidir en calquera momento deixar de participar, sen que iso afecte á túa atención médica nin á túa relación co equipo. Aquí non debes nada a ninguén, e nós tampouco che esiximos nada.',
    'm3.a2.text':   'Como participante no programa, terás acceso a unha aplicación deseñada específicamente para portadores asintomáticos. Permitirache ir anotando, ao longo do tempo e se así o desexas, aspectos como a calidade do sono, o estado de ánimo, a función cognitiva e outros indicadores relevantes — coa posibilidade de que a túa parella de convivencia, se a tes, colabore tamén nese rexistro. Esta información non é só útil para o equipo: é túa, e pode axudarche a entender mellor como estás ao longo do tempo.',
    'seguimiento.sueno.title': 'Estudo do sono',
    'seguimiento.sueno.text':  'Mediante polisomnografía, rexistramos o que ocorre durante o sono: movementos, respiración, actividade cerebral e comportamento. Algunhas alteracións do sono — en particular as relacionadas coa fase REM — poden aparecer de forma sutil antes de que calquera outro signo sexa detectable, e o seu seguimento ao longo do tempo forma parte do protocolo de detección precoz.',
    'baja.title':       'Rexistramos a túa preferencia',
    'baja.text':        'A partir de agora non volverás recibir emails sobre novas píldoras de información. Se nalgún momento cambias de opinión, podes volver a activalas desde a sección de Píldoras de información do programa.',
    'baja.link':        'Ir ás Píldoras de información',
    'baja.error.title': 'Ligazón non válida',
    'baja.error.text':  'Esta ligazón non é válida ou xa foi utilizada. Se desexas xestionar as túas preferencias, contacta co equipo.',
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
