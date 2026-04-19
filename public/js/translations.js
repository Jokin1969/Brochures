/* translations.js — Cadenas de texto para portadores-programa.html */
/* Idiomas: es (Español), eu (Euskera), ca (Català), gl (Galego), en (English US) */

const TRANSLATIONS = {
  es: {
    /* ---- Navegación ---- */
    'nav.back':     'Volver',
    'nav.prev':     'Anterior',
    'nav.next':     'Siguiente',
    'nav.continue': 'Continuar',

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
    'm2.c1.ans.yes1':  'Sí, lo sabía',
    'm2.c1.ans.yes2':  'No, no lo sabía pero ahora lo he entendido al leer el programa, y lo tengo claro',
    'm2.c1.ans.no':    'No, no lo sabía y aún no lo tengo claro',

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

    /* Filtros de categoría */
    'pildoras.filters.todas':     'Todas',
    'pildoras.filters.pruebas':   'Pruebas que te harán',
    'pildoras.filters.ciencia':   'La ciencia detrás',
    'pildoras.filters.horizonte': 'En el horizonte',

    /* Acciones de la vista expandida */
    'pildoras.close':            'Cerrar',

    /* Píldora de bienvenida */
    'pildoras.bienvenida.titulo':       'Un espacio para ti, a tu ritmo',
    'pildoras.bienvenida.resumenCorto': 'Bienvenido a las píldoras de información: textos breves sobre las pruebas, la ciencia y las terapias del programa. Léelas a tu ritmo.',
    'pildoras.bienvenida.resumen':      'Esta sección reúne pequeñas explicaciones sobre las pruebas, las técnicas y las terapias que forman parte del programa. Son textos breves, pensados para leerse con calma, cuando tú quieras y hasta donde tú quieras.',
    'pildoras.bienvenida.desarrollo':   '<p>Saber lo que está pasando —lo que te van a hacer, cómo se analiza una muestra, qué terapias se están estudiando— ayuda a sentirse más en casa dentro del programa. Por eso hemos creado estas píldoras de información: textos cortos, claros y sin tecnicismos innecesarios, que puedes leer en el orden que prefieras.</p><p>Hemos organizado las píldoras en tres grupos, cada uno con su color, para que encuentres fácilmente lo que buscas:</p><ul><li><strong>Pruebas que te harán</strong> reúne explicaciones sobre los procedimientos del seguimiento: qué son, cómo son por dentro, qué vas a sentir.</li><li><strong>La ciencia detrás</strong> cuenta lo que ocurre con tus muestras cuando ya no estás en la consulta: las técnicas que permiten mirar lo que antes no se podía ver.</li><li><strong>En el horizonte</strong> habla de los tratamientos que están siendo desarrollados y ensayados en el mundo, y del momento tan especial que vivimos en la investigación de estas enfermedades.</li></ul><p>No hace falta leerlas todas, ni leerlas seguidas, ni leerlas ya. Están aquí para cuando tengas curiosidad, o cuando te surja una duda, o simplemente cuando te apetezca acercarte un poco más a lo que ocurre entre bastidores.</p>',
    'pildoras.bienvenida.conclusion':   'Cada píldora es una pequeña ventana. Ábrelas cuando quieras. Y si después de leer alguna te quedan preguntas, el equipo está siempre al otro lado para hablarlas contigo.',

    /* Píldora RMN (categoría: pruebas) */
    'pildoras.rmn.titulo':       'Una mirada al cerebro, con la máxima nitidez',
    'pildoras.rmn.resumenCorto': 'La resonancia magnética nos permite mirar el cerebro con gran detalle, sin aguja, sin dolor y sin radiación. Te contamos cómo es, qué aporta al seguimiento y cada cuánto se repite.',
    'pildoras.rmn.resumen':      'La resonancia magnética nuclear —RMN— es una de las pruebas más conocidas de la medicina moderna. Consiste en hacer una imagen muy detallada del cerebro desde fuera, sin aguja, sin dolor, sin radiación. En el programa la utilizamos porque es una forma no invasiva y segura de observar cómo está tu cerebro a lo largo del tiempo.',
    'pildoras.rmn.desarrollo':   '<h3>Por qué es importante en un programa de seguimiento</h3><p>En un portador asintomático, el cerebro funciona con total normalidad. La RMN no busca hacer un diagnóstico de nada —porque no hay enfermedad activa que diagnosticar—, sino algo más sutil: establecer una imagen de referencia personal, tu "retrato de partida", y repetirla periódicamente para ver si con el tiempo aparece algún cambio que merezca atención.</p><p>Esta lógica es la que marca la diferencia entre hacerte una RMN porque tienes síntomas y hacértela como parte de un seguimiento preventivo. En el primer caso, se busca una pista clara; en el nuestro, se cultiva una serie temporal de imágenes que permiten comparar cada una con las anteriores. Cuanto más parecidas son entre sí, mejor señal.</p><h3>Por qué usamos equipos de 3 Teslas</h3><p>No todas las resonancias son iguales. Los equipos más extendidos en hospitales son de 1,5 Teslas (la unidad mide la fuerza del imán). En el programa usamos equipos de 3 Teslas, más modernos y con una capacidad de detalle considerablemente superior. En la práctica, esto significa imágenes más nítidas, cortes más finos, y la posibilidad de ver matices que en equipos más básicos pasarían desapercibidos.</p><p>Para un seguimiento de personas asintomáticas, esta nitidez es clave: si lo que buscamos son cambios sutiles a lo largo del tiempo, necesitamos la mejor resolución posible desde la primera imagen. Así, si en algún momento algo cambia, lo detectamos antes y con mayor seguridad.</p><h3>Cómo es la prueba, paso a paso</h3><p>La RMN es una prueba sencilla de describir. Te tumbas en una camilla que se desliza dentro de un tubo abierto por los dos extremos. Durante unos 20–30 minutos, el equipo genera imágenes de tu cerebro. No sentirás nada: la máquina hace ruido —rítmico, un poco como unos golpes metálicos—, y para proteger tus oídos te darán unos tapones o cascos. No hay pinchazos, no hay dolor, no hay radiación.</p><p>En nuestro caso no es necesario el uso de contraste intravenoso, así que tampoco hay vía ni agujas. Puedes venir a la cita con ropa cómoda y desayunado.</p><h3>¿Y si me da apuro el tubo?</h3><p>Es una preocupación común y completamente legítima. El tubo de la RMN puede generar cierta sensación de encierro. Si eres propenso a la claustrofobia o simplemente quieres saber qué opciones hay, coméntalo antes con el equipo: muchos centros disponen de máquinas con tubos más anchos y cortos, o pueden pautar un ansiolítico suave si lo consideras necesario. La idea es que la prueba transcurra con la mayor tranquilidad posible.</p><h3>Qué información nos aporta</h3><p>La RMN nos da tres tipos de información útil:</p><ul><li>Una <strong>imagen de referencia personal</strong> con la que poder comparar las siguientes. Esta imagen inicial es, por sí sola, un regalo al futuro.</li><li>Una <strong>visión general de la salud cerebral</strong>, que nos permite, de paso, descartar otras cuestiones no relacionadas con tu mutación que merezca la pena saber.</li><li>Y, a lo largo del tiempo, una <strong>serie de imágenes comparables</strong> que permiten detectar precozmente cualquier cambio, si llegara a producirse.</li></ul><h3>Cada cuánto se repite</h3><p>La frecuencia se ajusta a la edad media de inicio de la enfermedad asociada a tu mutación, que es distinta en cada caso. Para referencia, la edad media de inicio de los síntomas en el Insomnio Familiar Fatal ronda los 49 años, y en la enfermedad de Creutzfeldt-Jakob genética ronda los 58 años. A partir de ahí, el criterio del programa es este:</p><table><thead><tr><th>Tu situación respecto al inicio medio</th><th>Frecuencia de RMN</th></tr></thead><tbody><tr><td>Más de 20 años antes</td><td>Cada 3 años</td></tr><tr><td>Entre 20 y 10 años antes</td><td>Cada 2 años</td></tr><tr><td>Menos de 10 años antes, o por encima de la edad media</td><td>Cada año</td></tr></tbody></table><p>La lógica es sencilla: cuanto más cerca de la franja en la que estadísticamente podrían aparecer cambios, más valioso es mirar con frecuencia. La cadencia se ajusta de forma natural conforme el tiempo pasa, sin que tengas que hacer nada: es el programa el que lleva la cuenta y te avisa cuando toca.</p>',
    'pildoras.rmn.conclusion':   'La RMN es, de todas las pruebas del programa, probablemente la más sencilla de vivir: te tumbas, esperas, y sales. Su valor no está en lo que te hace sentir durante la prueba, sino en lo que va dejando detrás: una serie de imágenes de tu cerebro a lo largo del tiempo que, si algún día hacen falta, serán oro. Y si no hacen falta, mejor todavía.',

    /* Píldora Punción Lumbar (categoría: pruebas) */
    'pildoras.puncion-lumbar.titulo':       'Escuchar al líquido que baña el cerebro',
    'pildoras.puncion-lumbar.resumenCorto': 'La punción lumbar permite obtener una pequeña muestra del líquido que rodea el cerebro y la médula, una de las fuentes más valiosas de información que existen en neurología. Te contamos cómo es, qué información aporta y por qué merece la pena.',
    'pildoras.puncion-lumbar.resumen':      'El líquido cefalorraquídeo —o LCR— es un fluido transparente que baña el cerebro y la médula espinal. Al estar en contacto directo con el sistema nervioso, lleva disueltas pistas moleculares que en ningún otro lugar del cuerpo se encuentran con tanta claridad. La punción lumbar es el procedimiento que permite obtener una pequeña muestra de ese líquido para analizarlo.',
    'pildoras.puncion-lumbar.desarrollo':   '<h3>Por qué es tan valioso el líquido cefalorraquídeo</h3><p>El cerebro y la médula espinal no flotan en el vacío: están envueltos en un líquido transparente, el LCR, que los protege, los nutre y recoge lo que secretan. Es, en cierto sentido, el espejo más fiel del sistema nervioso.</p><p>En la sangre, las señales moleculares del cerebro llegan muy diluidas —cuando llegan—, porque una barrera biológica (la llamada barrera hematoencefálica) filtra con mucho cuidado lo que pasa de un sitio al otro. El LCR, en cambio, está al otro lado de esa barrera, en contacto directo con lo que queremos observar. Por eso una muestra pequeña de LCR puede contener información que una analítica de sangre, por más completa que sea, nunca podrá darnos.</p><p>En un programa de seguimiento como el nuestro, esta información es especialmente útil: el LCR nos permite detectar, si los hubiera, los primeros indicios de actividad relacionada con tu mutación, mucho antes de que cualquier síntoma pudiera aparecer.</p><h3>Cómo es la prueba, paso a paso</h3><p>La punción lumbar es un procedimiento sencillo, bien conocido en neurología y realizado desde hace más de un siglo. Se hace en consulta o en hospital de día, no requiere ingreso, y suele durar entre 15 y 30 minutos.</p><p>Te tumbarás de lado, encogido, o sentado ligeramente inclinado hacia delante. El profesional limpiará la zona lumbar —la parte baja de la espalda— con antiséptico, y aplicará anestesia local en el punto exacto donde se introducirá la aguja. Esa anestesia es lo primero que sentirás: un pequeño pinchazo superficial, como el de una inyección en el brazo.</p><p>Después, ya con la zona dormida, se introduce una aguja muy fina que atraviesa los tejidos hasta alcanzar el espacio donde está el LCR. Se recogen unos pocos mililitros —una cantidad pequeña, que el cuerpo repone en poco tiempo— y se retira la aguja. Al terminar, se te pedirá que descanses tumbado un rato antes de marcharte a casa.</p><h3>Una duda muy común</h3><p>Mucha gente, al oír "punción lumbar", se imagina que la aguja toca la médula. No es así: la punción se realiza en una zona por debajo de donde termina la médula, en un espacio donde ya solo hay LCR y finas raíces nerviosas que se apartan con facilidad. Por eso el procedimiento es seguro y se realiza rutinariamente en hospitales de todo el mundo.</p><h3>Qué vas a sentir y qué puede ocurrir después</h3><p>Durante la prueba, lo más molesto suele ser la postura y la presión de la aguja; el dolor, si lo hay, es moderado y breve gracias a la anestesia local. Hay personas que no sienten prácticamente nada; otras describen una sensación de presión más marcada. Ambas cosas son normales.</p><p>Después de la prueba, algunas personas —no todas— pueden notar en las horas o días siguientes una cefalea conocida como "cefalea post-punción", que suele aliviarse tumbándose, bebiendo líquidos y tomando paracetamol. Actualmente se utilizan agujas de diseño especial que reducen mucho la probabilidad de que esto ocurra, y cuando aparece suele resolverse en uno o dos días. Se te explicará cómo reconocerla y qué hacer si aparece.</p><p>Más allá de esto, el procedimiento es muy seguro. Las complicaciones serias son extraordinariamente raras, y el equipo que te atiende conoce bien cómo prevenirlas.</p><h3>Qué información nos aporta</h3><p>De una pequeña muestra de LCR se puede extraer información muy rica:</p><ul><li>Una <strong>medición de proteínas específicas</strong> del sistema nervioso que reflejan cómo está funcionando el cerebro, como pequeños indicadores del estado general.</li><li>La <strong>detección directa de actividad relacionada con la proteína priónica</strong>, mediante técnicas muy sensibles capaces de detectar cantidades ínfimas.</li><li>Una <strong>visión de conjunto</strong> que, al repetirse a lo largo del tiempo, permite construir una serie comparable: igual que con la RMN, cada muestra cobra sentido cuando se compara con las anteriores.</li></ul><h3>Las técnicas que analizan el LCR</h3><p>Una vez obtenida la muestra, comienza el trabajo en el laboratorio. Hay varias técnicas que pueden aplicarse, cada una diseñada para responder a una pregunta distinta. Las dos más relevantes en el contexto de las enfermedades priónicas son el <strong>RT-QuIC</strong> y la <strong>PMCA</strong>: son métodos muy modernos, capaces de detectar cantidades minúsculas de proteína priónica mal plegada, incluso años antes de que aparecieran síntomas.</p><p>Hablaremos de ambas en detalle en píldoras dedicadas de la sección <em>La ciencia detrás</em>, porque son lo suficientemente fascinantes como para merecerlas por sí mismas. Por ahora, basta con saber que tu muestra no se queda en un cajón: pasa por manos expertas y por técnicas de última generación.</p><h3>Cada cuánto se repite</h3><p>Como ocurre con el resto de pruebas del programa, la frecuencia de la punción lumbar se ajusta a la edad media de inicio de la enfermedad asociada a tu mutación. Para referencia, la edad media de inicio de los síntomas en el Insomnio Familiar Fatal ronda los 49 años, y en la enfermedad de Creutzfeldt-Jakob genética ronda los 58 años. A partir de ahí, el criterio del programa es este:</p><table><thead><tr><th>Tu situación respecto al inicio medio</th><th>Frecuencia de la punción lumbar</th></tr></thead><tbody><tr><td>Más de 20 años antes</td><td>Cada 3 años</td></tr><tr><td>Entre 20 y 10 años antes</td><td>Cada 2 años</td></tr><tr><td>Menos de 10 años antes, o por encima de la edad media</td><td>Cada año</td></tr></tbody></table><p>La lógica es la misma que en el resto del seguimiento: cuanto más cerca de la franja en la que estadísticamente podrían aparecer cambios, más valioso es mirar con frecuencia. Y, como siempre, no tienes que llevar tú la cuenta: el programa te avisa cuando toca.</p>',
    'pildoras.puncion-lumbar.conclusion':   'La punción lumbar es probablemente la prueba más temida del programa, pero, en la práctica, suele ser mucho menos molesta de lo que la gente imagina. A cambio, ofrece algo único: una ventana directa al sistema nervioso que ninguna otra prueba puede abrir. Cada muestra que nos das es una pieza pequeña pero extraordinariamente valiosa del trabajo conjunto que estamos haciendo, y una forma concreta de cuidarte en el presente y prepararte para lo que venga.',

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
    'nav.back':     'Itzuli',
    'nav.prev':     'Aurrekoa',
    'nav.next':     'Hurrengoa',
    'nav.continue': 'Jarraitu',

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

    /* ---- portadores-paso-1.html (Check 2.1) ---- */
    'm2.c1.title':    'Zurekin baieztatu nahi dugun zerbait garrantzitsua',
    'm2.c1.prose':    'Eramaile asintomatikoen taldean — zuk bezala, sintomak garatu gabe mutazio genetiko batekin bizi diren pertsonetan — egungo ikerketak argi eta garbi bereiz daitezkeen bi egoera identifikatzea ahalbidetu du. Hau nahiko berria da, eta hona iristen den guztiak ez du oraindik jakiten. Horregatik galdetu nahi dizugu:',
    'm2.c1.question': 'Ba al zenekien bi eramaile asintomatiko mota daudela, egoera biologiko desberdinekin, nahiz eta biak sintomarik gabe egon?',
    'm2.c1.exp.p1':   '<strong>Fase inaktiboko eramaileak:</strong> mutazioari lotutako prozesu biologikoak gaur egun ez du jarduera detektagarriaren zantzurik erakusten. Hori denbora-horizonte zabalago batekin lotzen da. Erloju biologikoa, nolabait esateko, oraindik ez da modu neurgarrian abiatu.',
    'm2.c1.exp.p2':   '<strong>Fase aktibo isileko eramaileak:</strong> teknika espezializatuak detektatzen hasi ahal diren jarduera biologiko goiztiar bat dago, nahiz eta pertsonak absolutuki ezer ez sentitu. Prozesua oso isilik hasi da, eta hain zuzen horregatik da hain baliotsua jakitea: talde hau baita probabilitate handienaz lehen entsegu kliniko prebentiboetan sartu ahal izango dena.',
    'm2.c1.exp.p3':   'Bi taldeetatik zeinean zauden jakitea borondatezkoa da, posiblea, eta programak aurkitzen lagun diezazukeen zerbait.',
    'm2.c1.exp.retry': 'Itzuli galderara nahi duzunean:',
    'm2.c1.ans.yes1':  'Bai, banekien',
    'm2.c1.ans.yes2':  'Ez, ez nekien baina orain programa irakurtzean ulertu dut, eta argi daukat',
    'm2.c1.ans.no':    'Ez, ez nekien eta oraindik ez daukat argi',

    /* ---- portadores-paso-2.html (Check 2.2) ---- */
    'm2.c2.title':    'Bi moten arteko aldea, eta zuretzat zer esan nahi duen',
    'm2.c2.prose.p1': 'Bi mota daudela jakitea lehen urrats bat da. Baina haien arteko aldeak zuretzat benetako zentzua duela ziurtatu nahi dugu, kontzeptu abstraktu gisa bakarrik ez.',
    'm2.c2.prose.p2': '<strong>Fase inaktiboan bazaude:</strong> markatzaile biologikoek ez dute gaur egun jarduera detektagarririk erakusten. Horrek ez du esan nahi prozesua ez denik noizbait hasiko (egun, aste edo hilabete batzuetan hasi liteke), baina ziurrenik denbora-tarte zabala izango duzu gaixotasunaren sintoma ikusgarriak garatu arte. Tarte hori da, hain zuzen ere, planifikatzeko eta terapiak iristen direnean lehen lerroan egoteko aukera ematen duena.',
    'm2.c2.prose.p3': '<strong>Fase aktibo isilean bazaude:</strong> markatzaileek jarduera biologikoaren hasierako seinaleak erakusten dituzte, nahiz eta zure eguneroko bizitzak inola ere islatzen ez duen. Berri txar soil bat izatetik urrun —gaixotasunaren sintomak denbora-horizonte hurbilagoan ager litezkeelako (oraindik ezezaguna)—, gaur egun izan dezakezun informaziorik baliotsuena da — zehatz-mehatz lehen entsegu kliniko prebentiboak diseinatzen saiatzen ari diren taldean kokatzen zaitulako. Jarduteko unea orain da, eta programa hemen dago urrats bakoitzerako.',
    'm2.c2.question': 'Ulertzen al duzu bi egoeren arteko aldea eta zure kasu zehatzean zer esan nahi duen?',
    'm2.c2.yes':      'Bai, aldea eta zer esan nahi duen ulertzen ditut',
    'm2.c2.no':       'Berriro irakurri behar dut edo ez zait erabat argi geratu',
    'm2.c2.exp.p1':   'Ez kezkatu. Hartu behar duzun denbora. Hona hemen berriro bi profilak modu laburtuan:',
    'm2.c2.exp.p2':   '<strong>Fase inaktiboa:</strong> gaur egun jarduera detektagarririk gabeko markatzaileak. Denbora-horizonte zabala. Planifikatzeko denbora.',
    'm2.c2.exp.p3':   '<strong>Fase aktibo isila:</strong> jarduera biologikoaren hasierako seinaleak, sintomarik gabe. Lehen entsegu prebentiboetarako lehentasunezko taldea.',
    'm2.c2.exp.retry': 'Argi duzunean:',

    /* ---- portadores-paso-3.html (Check 2.3) ---- */
    'm2.c3.title':    'Jakitea ahalbidetzen duten probak',
    'm2.c3.prose.p1': 'Bi taldeetatik zeinean zauden zehaztea ez da erraza. Gaur egun ez dago proba bakar, azkar eta behin betikorik hori erantzuten duenik. Daukaguna da tresna espezializatuak — horietako batzuek ohikoak ez diren lagin biologikoak behar dituzte, hala nola likido zefalorrakideoaren azterketa jakin batzuk edo prion-jardueraren seinaleak sentikortasun handiagoarekin detektatzeko beste batzuk.',
    'm2.c3.prose.p2': 'Horrek esan nahi du prozesuak denbora, bisitak eta, zenbait kasutan, egin aurretik xehetasunez azaltzea merezi duten prozedurak eskatzen dituela. Programako taldeak erabaki bakoitzean lagunduko dizu, eta ezer ez da egingo zure ulermenik eta zure baimenik gabe.',
    'm2.c3.question': 'Ulertzen al duzu zure egoera ezagutzeak proba espezializatuak eskatzen dituela, beti errazak ez direnak, eta emaitzak zure bizitzan benetako ondorioak izan ditzakeela?',
    'm2.c3.yes':      'Bai, ulertzen dut eta jarraitu nahi dut',
    'm2.c3.no':       'Pentsatu behar dut edo hau hobeto ulertu aurretik jarraitu nahi dut',
    'm2.c3.exp.p1':   'Hausnarketa merezi duen erabakia da, eta oso ondo dago hori aitortzea. Garrantzitsuena da inork ez dizula probarik egiteko eskatuko aurretik xehetasunez azaldu gabe zertan datzan, zer informazio ematen duen, eta emaitza hori ezagutzeak zuretzat zer suposa dezakeen.',
    'm2.c3.exp.p2':   'Baimen informatua ez da inprimaki bat — taldearekin benetako elkarrizketa bat da. Prest zaudela sentitzen duzunean, galdera hemen egongo da.',
    'm2.c3.exp.retry': 'Prest zaudenean:',

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

    /* Filtros de categoría */
    'pildoras.filters.todas':     'Guztiak',
    'pildoras.filters.pruebas':   'Egingo dizkizuten probak',
    'pildoras.filters.ciencia':   'Atzeko zientzia',
    'pildoras.filters.horizonte': 'Zerumugan',

    /* Acciones de la vista expandida */
    'pildoras.close':            'Itxi',

    /* Píldora de bienvenida */
    'pildoras.bienvenida.titulo':       'Zuretzako leku bat, zure erritmora',
    'pildoras.bienvenida.resumenCorto': 'Ongi etorri informazio-pilulen atalera: testu laburrak programako probei, zientziari eta terapiei buruz. Irakurri zure erritmora.',
    'pildoras.bienvenida.resumen':      'Atal honetan azalpen txikiak biltzen ditugu programako probei, teknikei eta terapiei buruz. Testu laburrak dira, lasai irakurtzeko prestatuak, nahi duzunean eta nahi duzun neurrian.',
    'pildoras.bienvenida.desarrollo':   '<p>Zer gertatzen ari den jakiteak —zer egingo dizuten, lagin bat nola aztertzen den, zer terapia ari diren ikertzen— laguntzen du programaren barruan etxean bezala sentitzen. Horregatik sortu ditugu informazio-pilula hauek: testu laburrak, argiak eta beharrik gabeko teknizismorik gabeak, nahi duzun ordenan irakur ditzakezunak.</p><p>Pilulak hiru taldetan antolatu ditugu, bakoitza bere kolorearekin, bilatzen duzuna erraz aurki dezazun:</p><ul><li><strong>Egingo dizkizuten probak</strong> jarraipeneko prozedurei buruzko azalpenak biltzen ditu: zer diren, nolakoak diren barrutik, zer sentituko duzun.</li><li><strong>Atzeko zientzia</strong> kontatzen du zure laginekin zer gertatzen den kontsultan jada ez zaudenean: lehen ikusi ezin zena ikustea ahalbidetzen duten teknikak.</li><li><strong>Zerumugan</strong> munduan garatzen eta entseatzen ari diren tratamenduez hitz egiten du, eta gaixotasun hauen ikerketan bizi dugun une berezi honetaz.</li></ul><p>Ez dago denak irakurri beharrik, ezta jarraian irakurri beharrik, ezta oraintxe bertan irakurri beharrik ere. Hemen daude jakin-mina sortzen zaizunerako, zalantzaren bat agertzen zaizunerako, edo besterik gabe oholtza atzean gertatzen denera hurbildu nahi duzunerako.</p>',
    'pildoras.bienvenida.conclusion':   'Pilula bakoitza leiho txiki bat da. Ireki itzazu nahi duzunean. Eta bakarren bat irakurri ondoren galderaren bat gelditzen bazaizu, taldea beti dago beste aldean zurekin hitz egiteko.',

    /* Píldora RMN (categoría: pruebas) */
    'pildoras.rmn.titulo':       'Burmuinari begirada bat, ahalik eta argitasun handienarekin',
    'pildoras.rmn.resumenCorto': 'Erresonantzia magnetikoak burmuina xehetasun handiz begiratzeko aukera ematen digu, orratzik gabe, minik gabe eta erradiaziorik gabe. Nolakoa den, jarraipenari zer ekartzen dion eta zenbat sarritan errepikatzen den kontatzen dizugu.',
    'pildoras.rmn.resumen':      'Erresonantzia magnetiko nuklearra —EMN— medikuntza modernoko proba ezagunenetako bat da. Kanpoaldetik burmuinaren irudi oso xehea egitean datza, orratzik gabe, minik gabe, erradiaziorik gabe. Programan erabiltzen dugu, zure burmuina denboran zehar nola dagoen behatzeko modu ez-inbaditzailea eta segurua delako.',
    'pildoras.rmn.desarrollo':   '<h3>Zergatik den garrantzitsua jarraipen-programa batean</h3><p>Eramaile asintomatiko batean, burmuinak guztiz normal funtzionatzen du. EMN-ak ez du ezer diagnostikatu nahi —ez baitago gaixotasun aktiborik diagnostikatzeko—, zerbait sotilagoa baizik: erreferentziazko irudi pertsonala ezartzea, zure "abiapuntuko erretratua", eta aldian-aldian errepikatzea, denborarekin kontuan hartzeko moduko aldaketarik agertzen den ikusteko.</p><p>Logika hau da EMN bat sintomak dituzulako egitearen eta jarraipen prebentibo gisa egitearen arteko aldea markatzen duena. Lehen kasuan, arrasto argi bat bilatzen da; gurean, denbora-serieko irudi bilduma bat lantzen da, bakoitza aurrekoekin alderatzeko aukera ematen duena. Elkarren antzekoagoak izan, seinale hobea.</p><h3>Zergatik erabiltzen ditugun 3 Tesla-ko ekipoak</h3><p>Erresonantzia guztiak ez dira berdinak. Ospitaletan hedatuenak 1,5 Tesla-koak dira (unitateak imanaren indarra neurtzen du). Programan 3 Tesla-ko ekipoak erabiltzen ditugu, modernoagoak eta xehetasun-ahalmen nabarmen handiagokoak. Praktikan, horrek esan nahi du irudi argiagoak, ebaki finagoak, eta oinarrizko ekipoetan oharkabean pasako liratekeen ñabardurak ikusteko aukera.</p><p>Pertsona asintomatikoen jarraipen baterako, argitasun hori funtsezkoa da: denboran zehar aldaketa sotilak bilatzen baditugu, lehen iruditik ahalik eta bereizmenik onena behar dugu. Horrela, uneren batean zerbait aldatzen bada, lehenago eta segurtasun handiagoz detektatzen dugu.</p><h3>Nolakoa den proba, urratsez urrats</h3><p>EMN proba erraza da deskribatzeko. Ohantze batean etzaten zara, eta bi muturretatik irekia dagoen hodi baten barruan irristatzen da. 20–30 minutu inguruan, ekipoak zure burmuinaren irudiak sortzen ditu. Ez duzu ezer sentituko: makinak zarata egiten du —erritmikoa, metalezko kolpeen antzekoa—, eta zure belarriak babesteko tapoiak edo kaskoak emango dizkizute. Ez dago ziztadarik, ez dago minik, ez dago erradiaziorik.</p><p>Gure kasuan ez da beharrezkoa kontraste intrabenoso bat erabiltzea, beraz ez dago biderik ez orratzrik. Arropa erosoarekin eta gosalduta etor zaitezke hitzordura.</p><h3>Eta hodiak estutasuna ematen badit?</h3><p>Ohiko kezka bat da, eta erabat legitimoa. EMN-aren hodiak ixtearen sentsazioa sor dezake. Klaustrofobiarako joera baduzu edo zein aukera dauden jakin nahi baduzu, aipatu aurretik taldearekin: zentro askok hodi zabalagoak eta laburragoak dituzten makinak dituzte, edo ansiolitiko arin bat agindu dezakete beharrezkotzat jotzen baduzu. Ideia da proba ahalik eta lasaitasun handienarekin gerta dadila.</p><h3>Zer informazio ematen digun</h3><p>EMN-ak hiru informazio-mota baliagarri ematen dizkigu:</p><ul><li><strong>Erreferentziazko irudi pertsonal</strong> bat, ondorengoekin alderatzeko. Hasierako irudi hori, berez, etorkizunari egindako opari bat da.</li><li><strong>Burmuinaren osasunari buruzko ikuspegi orokor</strong> bat, bide batez, zure mutazioarekin zerikusirik ez duten baina jakiteak merezi duten beste kontu batzuk baztertzeko aukera ematen diguna.</li><li>Eta, denborarekin, <strong>aldera daitezkeen irudi sorta</strong> bat, gertatzen bada, edozein aldaketa goiz detektatzeko aukera ematen duena.</li></ul><h3>Zenbat sarritan errepikatzen den</h3><p>Maiztasuna zure mutazioari lotutako gaixotasunaren hasiera-adin mediara doitzen da, eta kasu bakoitzean desberdina da. Erreferentzia gisa, Familiako Insomnio Hilgarrian sintomen hasierako batez besteko adina 49 urte ingurukoa da, eta Creutzfeldt-Jakob gaixotasun genetikoan 58 urte ingurukoa. Hortik aurrera, programaren irizpidea hau da:</p><table><thead><tr><th>Zure egoera batez besteko hasieraren aldean</th><th>EMN-aren maiztasuna</th></tr></thead><tbody><tr><td>20 urte baino gehiago lehenago</td><td>3 urtean behin</td></tr><tr><td>20 eta 10 urte bitartean lehenago</td><td>2 urtean behin</td></tr><tr><td>10 urte baino gutxiago lehenago, edo batez besteko adinetik gorakoa</td><td>Urtero</td></tr></tbody></table><p>Logika sinplea da: estatistikoki aldaketak ager litezkeen frankjatik gertuago egon, orduan eta baliagarriagoa da maiz begiratzea. Kadentzia modu naturalean doitzen da denbora pasa ahala, ezer egin beharrik gabe: programak eramaten du kontua eta jakinarazten dizu noiz egokitzen den.</p>',
    'pildoras.rmn.conclusion':   'EMN-a da, programako proba guztietatik, seguruenik errazena bizitzeko: etzaten zara, itxaroten duzu, eta ateratzen zara. Bere balioa ez dago probak sentiarazten dizunean, atzean uzten duenean baizik: zure burmuinaren irudi sorta bat denboran zehar, egunen batean behar badira, urrea balio izango dutenak. Eta behar ez badira, are hobeto.',

    /* Punción Lumbar — itzultzear (EU) */
    'pildoras.puncion-lumbar.titulo':       '[Itzultzear] Escuchar al líquido que baña el cerebro',
    'pildoras.puncion-lumbar.resumenCorto': '[Itzultzear — euskarazko itzulpena laster.] La punción lumbar permite obtener una pequeña muestra del líquido que rodea el cerebro y la médula.',
    'pildoras.puncion-lumbar.resumen':      '[Itzultzear — euskarazko itzulpena laster.]',
    'pildoras.puncion-lumbar.desarrollo':   '<p><em>Itzultzear — euskarazko itzulpen osoa laster. Bitartean, gaztelaniazko bertsiora jo dezakezu.</em></p>',
    'pildoras.puncion-lumbar.conclusion':   '[Itzultzear — euskarazko itzulpena laster.]',

    'pildoras.subscribe.title': 'Jaso pilulak zure emailean',
    'pildoras.subscribe.text':  'Jarraipen programaren parte bazara, email bidezko jakinarazpenak aktibatu ditzakezu píldora berri bat argitaratzen dugunean abisu bat jasotzeko.',
    'pildoras.subscribe.btn':   'Nire jakinarazpenak aktibatu',
    'pildoras.modal.title':     'Nor zara?',
    'pildoras.modal.desc':      'Sartu zure NAN jakinarazpenak aktibatzeko. Programan erregistratutako parte-hartzaileek soilik aktiba ditzakete.',
    'pildoras.modal.label':     'NAN',
    'pildoras.modal.btn':       'Aktibatu',
    'pildoras.modal.notfound':  'Ez dugu zure NAN aurkitu programan. Akatsa dela uste baduzu, jarri harremanetan taldearekin.',

    /* ---- portadores-compromiso.html (Momento 3 + final) ---- */
    'm3.title':     'Honek praktikan zer esan nahi duen',
    'm3.sub':       'Jarraitu aurretik jakitea nahi dugun lau gauza.',
    'm3.confirmed': '✓ Baieztatuta',
    'm3.a1.header': 'Zure parte-hartzea erabat borondatezkoa da',
    'm3.a1.btn':    'Ulertu dut, eta onartzen dut',
    'm3.a2.header': 'Jarraipen-aplikaziora sarrera izango duzu',
    'm3.a2.btn':    'Ulertu dut, eta interesgarri zait',
    'm3.a3.header': 'Zure parte-hartzeak posizio faboragarri batean kokatzen zaitu',
    'm3.a3.text':   'Jarraipen-programaren parte diren pertsonak dira hobekien ezagutzen ditugunak, datu gehien ditugunak eta entsegu kliniko berriak irekitzen direnean lehenengo harremanetan jarri ahal izango ditugunak. Ezin dizugu sarbidea bermatu — entsegu bakoitzaren irizpideak entsegu horrek berak definitzen ditu — baina esan dezakegu hemen egotea dela une hori iristen denerako prest egoteko modu onena.',
    'm3.a3.btn':    'Ulertuta',
    'm3.a4.header': 'Hau epe luzeko harremana da',
    'm3.a4.text':   'Programa ez da bisita puntual bat, ezta behin erantzuten den galdetegi bat ere. Laguntza jarraitua da — aldizkako bisitekin, informazio-eguneraketekin, ezagutza-pilulekin eta benetako giza harremanarekin. Konprometitzen gara presente egotera zuk hala nahi duzun bitartean.',
    'm3.a4.btn':    'Ulertu dut, eta parte izan nahi dut',
    'final.eyebrow':           'Hurrengo urratsa',
    'final.text':              'Urrats garrantzitsu bat eman duzu — ez bakarrik programarantz, zuregana ere bai. Taldea laster jarriko da zurekin harremanetan hurrengo urratsak lasaitasunez eta presarik gabe azaltzeko. Bitartean galdera bat baduzu, hona nola aurki gaitzakezun.',
    'final.contacts.label':    'Nola aurkitu gaituzun',
    'final.form.eyebrow':      'Hurrengo urratsa',
    'final.form.title':        'Zurekin harremanetan jarri ahal izateko azken urrats bat',
    'final.form.text':         'Programako taldea zurekin harremanetan jar dadin nahi baduzu, adierazi iezaguzu zure NAN. Horrek gure sisteman identifikatzen eta parte hartzeko zure nahia baieztatzen lagunduko digu. Zure datuak babestuta daude eta ikerketa-taldeak soilik izango du haietara sarbidea.',
    'final.form.label.dni':    'NAN',
    'final.form.dni.hint':     '8 zifra jarraian letra batekin',
    'final.form.btn':          'Parte hartzeko nire nahia baieztatu',
    'final.notfound.title':    'Ez dugu zure NAN aurkitu',
    'final.notfound.text':     'Ez dugu zure NAN gure sisteman aurkitu. Baliteke oraindik erregistratuta ez egotea. Mesedez, jarri zuzenean harremanetan taldearekin zu txertatu ahal izateko.',

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
    'nav.back':     'Tornar',
    'nav.prev':     'Anterior',
    'nav.next':     'Següent',
    'nav.continue': 'Continuar',

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

    /* ---- portadores-paso-1.html (Check 2.1) ---- */
    'm2.c1.title':    'Alguna cosa important que volem confirmar amb tu',
    'm2.c1.prose':    'Dins del grup de portadors asimptomàtics — persones que, com tu, conviuen amb una mutació genètica sense haver desenvolupat símptomes — la investigació actual ha permès identificar dues situacions clarament diferents. Això és relativament recent i no tothom que arriba aquí ho sap encara. Per això volem preguntar-te:',
    'm2.c1.question': 'Sabies que hi ha dos tipus de portadors asimptomàtics, amb situacions biològiques diferents tot i que tots dos estiguin sense símptomes?',
    'm2.c1.exp.p1':   '<strong>Els portadors en fase inactiva:</strong> el procés biològic associat a la mutació no mostra senyals d\'activitat detectable avui. Això s\'associa amb un horitzó temporal més ampli. El rellotge biològic, per dir-ho així, encara no s\'ha posat en marxa de manera mesurable.',
    'm2.c1.exp.p2':   '<strong>Els portadors en fase activa silenciosa:</strong> hi ha una activitat biològica incipient que les tècniques especialitzades poden començar a detectar, tot i que la persona no senti absolutament res. El procés ha començat de manera molt silenciosa, i precisament per això és tan valuós saber-ho: perquè aquest és el grup que amb més probabilitat podrà accedir als primers assaigs clínics preventius.',
    'm2.c1.exp.p3':   'Conèixer en quin dels dos grups et trobes és voluntari, possible, i una cosa que el programa pot ajudar-te a descobrir.',
    'm2.c1.exp.retry': 'Torna a la pregunta quan vulguis:',
    'm2.c1.ans.yes1':  'Sí, ho sabia',
    'm2.c1.ans.yes2':  'No, no ho sabia però ara ho he entès en llegir el programa, i ho tinc clar',
    'm2.c1.ans.no':    'No, no ho sabia i encara no ho tinc clar',

    /* ---- portadores-paso-2.html (Check 2.2) ---- */
    'm2.c2.title':    'La diferència entre els dos tipus, i el que significa per a tu',
    'm2.c2.prose.p1': 'Saber que hi ha dos tipus és un primer pas. Però volem assegurar-nos que la diferència entre ells té un sentit real per a tu, no només com a concepte abstracte.',
    'm2.c2.prose.p2': '<strong>Si estàs en fase inactiva:</strong> els marcadors biològics no mostren activitat detectable avui. Això no significa que el procés no vagi a començar en algun moment (pot ser en qüestió de dies, setmanes o mesos), però sí que probablement disposes d\'un marge de temps ampli fins al desenvolupament de símptomes visibles de malaltia. Aquest marge és precisament el que fa possible planificar i estar en primera línia quan arribin les teràpies.',
    'm2.c2.prose.p3': '<strong>Si estàs en fase activa silenciosa:</strong> els marcadors mostren senyals primerencs d\'activitat, tot i que la teva vida quotidiana no ho reflecteix en absolut. Lluny de ser només una mala notícia, ja que podria implicar que els símptomes de la malaltia podrien aparèixer en un horitzó temporal més proper (tot i que encara desconegut), és la informació més valuosa que pots tenir avui — perquè et situa exactament en el grup per al qual s\'estan intentant dissenyar els primers assaigs clínics preventius. El moment d\'actuar és ara, i el programa és aquí per a cada pas.',
    'm2.c2.question': 'Entens la diferència entre les dues situacions i el que podria implicar per al teu cas concret?',
    'm2.c2.yes':      'Sí, entenc la diferència i el que implica',
    'm2.c2.no':       'Necessito rellegir-ho o no m\'ha quedat del tot clar',
    'm2.c2.exp.p1':   'No passa res. Pren-te el temps que necessitis. Aquí tens de nou els dos perfils de manera resumida:',
    'm2.c2.exp.p2':   '<strong>Fase inactiva:</strong> marcadors sense activitat detectable avui. Horitzó temporal ampli. Temps per planificar.',
    'm2.c2.exp.p3':   '<strong>Fase activa silenciosa:</strong> senyals primerencs d\'activitat biològica, sense símptomes. El grup prioritari per als primers assaigs preventius.',
    'm2.c2.exp.retry': 'Quan ho tinguis clar:',

    /* ---- portadores-paso-3.html (Check 2.3) ---- */
    'm2.c3.title':    'Les proves que fan possible saber-ho',
    'm2.c3.prose.p1': 'Determinar en quin dels dos grups et trobes no és senzill. Avui no existeix cap prova única, ràpida i definitiva que ho respongui. El que tenim són eines especialitzades — algunes requereixen mostres biològiques que no són les habituals, com determinats anàlisis de líquid cefaloraquidi o altres que permeten detectar senyals d\'activitat priònica amb més sensibilitat.',
    'm2.c3.prose.p2': 'Això significa que el procés requereix temps, visites, i en alguns casos procediments que mereixen ser explicats amb detall abans de realitzar-los. L\'equip del programa t\'acompanyarà en cada decisió, i res no es farà sense la teva comprensió i el teu consentiment.',
    'm2.c3.question': 'Entens que conèixer la teva situació requereix proves especialitzades, que no sempre són senzilles, i que el resultat pot tenir implicacions reals en la teva vida?',
    'm2.c3.yes':      'Sí, ho entenc i vull continuar',
    'm2.c3.no':       'Necessito pensar-ho o entendre millor això abans de seguir',
    'm2.c3.exp.p1':   'És una decisió que mereix reflexió, i està molt bé reconèixer-ho. L\'important és que ningú no et demanarà que facis cap prova sense haver-te explicat abans amb detall en què consisteix, quina informació dóna, i què pot suposar per a tu conèixer aquest resultat.',
    'm2.c3.exp.p2':   'El consentiment informat no és un formulari — és una conversa real amb l\'equip. Quan sentis que estàs preparat/da, la pregunta continua aquí.',
    'm2.c3.exp.retry': 'Quan estiguis preparat/da:',

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

    /* Filtros de categoría */
    'pildoras.filters.todas':     'Totes',
    'pildoras.filters.pruebas':   'Proves que et faran',
    'pildoras.filters.ciencia':   'La ciència al darrere',
    'pildoras.filters.horizonte': 'A l\'horitzó',

    /* Acciones de la vista expandida */
    'pildoras.close':            'Tancar',

    /* Píndola de benvinguda */
    'pildoras.bienvenida.titulo':       'Un espai per a tu, al teu ritme',
    'pildoras.bienvenida.resumenCorto': 'Benvingut a les píndoles d\'informació: textos breus sobre les proves, la ciència i les teràpies del programa. Llegeix-les al teu ritme.',
    'pildoras.bienvenida.resumen':      'Aquesta secció reuneix petites explicacions sobre les proves, les tècniques i les teràpies que formen part del programa. Són textos breus, pensats per llegir-se amb calma, quan tu vulguis i fins on tu vulguis.',
    'pildoras.bienvenida.desarrollo':   '<p>Saber què està passant —el que et faran, com s\'analitza una mostra, quines teràpies s\'estan estudiant— ajuda a sentir-se més a casa dins del programa. Per això hem creat aquestes píndoles d\'informació: textos curts, clars i sense tecnicismes innecessaris, que pots llegir en l\'ordre que prefereixis.</p><p>Hem organitzat les píndoles en tres grups, cadascun amb el seu color, perquè trobis fàcilment el que busques:</p><ul><li><strong>Proves que et faran</strong> reuneix explicacions sobre els procediments del seguiment: què són, com són per dins, què sentiràs.</li><li><strong>La ciència al darrere</strong> explica el que passa amb les teves mostres quan ja no ets a la consulta: les tècniques que permeten mirar el que abans no es podia veure.</li><li><strong>A l\'horitzó</strong> parla dels tractaments que s\'estan desenvolupant i assajant al món, i del moment tan especial que vivim en la investigació d\'aquestes malalties.</li></ul><p>No cal llegir-les totes, ni llegir-les seguides, ni llegir-les ja. Són aquí per quan tinguis curiositat, o quan et sorgeixi un dubte, o simplement quan et vingui de gust acostar-te una mica més al que passa entre bastidors.</p>',
    'pildoras.bienvenida.conclusion':   'Cada píndola és una petita finestra. Obre-les quan vulguis. I si després de llegir-ne alguna et queden preguntes, l\'equip sempre és a l\'altra banda per parlar-ne amb tu.',

    /* Píndola RMN (categoria: proves) */
    'pildoras.rmn.titulo':       'Una mirada al cervell, amb la màxima nitidesa',
    'pildoras.rmn.resumenCorto': 'La ressonància magnètica ens permet mirar el cervell amb gran detall, sense agulla, sense dolor i sense radiació. T\'expliquem com és, què aporta al seguiment i cada quant es repeteix.',
    'pildoras.rmn.resumen':      'La ressonància magnètica nuclear —RMN— és una de les proves més conegudes de la medicina moderna. Consisteix a fer una imatge molt detallada del cervell des de fora, sense agulla, sense dolor, sense radiació. Al programa la fem servir perquè és una manera no invasiva i segura d\'observar com està el teu cervell al llarg del temps.',
    'pildoras.rmn.desarrollo':   '<h3>Per què és important en un programa de seguiment</h3><p>En un portador asimptomàtic, el cervell funciona amb total normalitat. La RMN no busca fer cap diagnòstic —perquè no hi ha malaltia activa per diagnosticar—, sinó alguna cosa més subtil: establir una imatge de referència personal, el teu "retrat de partida", i repetir-la periòdicament per veure si amb el temps apareix algun canvi que mereixi atenció.</p><p>Aquesta lògica és la que marca la diferència entre fer-te una RMN perquè tens símptomes i fer-te-la com a part d\'un seguiment preventiu. En el primer cas, es busca una pista clara; en el nostre, es conrea una sèrie temporal d\'imatges que permeten comparar-ne cadascuna amb les anteriors. Com més semblants entre si, millor senyal.</p><h3>Per què fem servir equips de 3 Teslas</h3><p>No totes les ressonàncies són iguals. Els equips més estesos als hospitals són d\'1,5 Teslas (la unitat mesura la força de l\'imant). Al programa fem servir equips de 3 Teslas, més moderns i amb una capacitat de detall considerablement superior. A la pràctica, això significa imatges més nítides, talls més fins, i la possibilitat de veure matisos que en equips més bàsics passarien desapercebuts.</p><p>Per a un seguiment de persones asimptomàtiques, aquesta nitidesa és clau: si el que busquem són canvis subtils al llarg del temps, necessitem la millor resolució possible des de la primera imatge. Així, si en algun moment alguna cosa canvia, ho detectem abans i amb més seguretat.</p><h3>Com és la prova, pas a pas</h3><p>La RMN és una prova senzilla de descriure. T\'estires en una llitera que es llisca dins d\'un tub obert pels dos extrems. Durant uns 20–30 minuts, l\'equip genera imatges del teu cervell. No sentiràs res: la màquina fa soroll —rítmic, una mica com uns cops metàl·lics—, i per protegir-te les orelles et donaran uns taps o cascos. No hi ha punxades, no hi ha dolor, no hi ha radiació.</p><p>En el nostre cas no és necessari fer servir contrast intravenós, així que tampoc hi ha via ni agulles. Pots venir a la cita amb roba còmoda i esmorzat.</p><h3>I si em fa angúnia el tub?</h3><p>És una preocupació comuna i completament legítima. El tub de la RMN pot generar certa sensació de tancament. Si ets propens a la claustrofòbia o simplement vols saber quines opcions hi ha, comenta-ho abans amb l\'equip: molts centres disposen de màquines amb tubs més amples i curts, o poden pautar un ansiolític suau si ho consideres necessari. La idea és que la prova transcorri amb la màxima tranquil·litat possible.</p><h3>Quina informació ens aporta</h3><p>La RMN ens dona tres tipus d\'informació útil:</p><ul><li>Una <strong>imatge de referència personal</strong> amb la qual poder comparar les següents. Aquesta imatge inicial és, per si sola, un regal al futur.</li><li>Una <strong>visió general de la salut cerebral</strong>, que ens permet, de passada, descartar altres qüestions no relacionades amb la teva mutació que val la pena saber.</li><li>I, al llarg del temps, una <strong>sèrie d\'imatges comparables</strong> que permeten detectar precoçment qualsevol canvi, si arribés a produir-se.</li></ul><h3>Cada quant es repeteix</h3><p>La freqüència s\'ajusta a l\'edat mitjana d\'inici de la malaltia associada a la teva mutació, que és diferent en cada cas. Per referència, l\'edat mitjana d\'inici dels símptomes a l\'Insomni Familiar Fatal ronda els 49 anys, i a la malaltia de Creutzfeldt-Jakob genètica ronda els 58 anys. A partir d\'aquí, el criteri del programa és aquest:</p><table><thead><tr><th>La teva situació respecte a l\'inici mitjà</th><th>Freqüència de RMN</th></tr></thead><tbody><tr><td>Més de 20 anys abans</td><td>Cada 3 anys</td></tr><tr><td>Entre 20 i 10 anys abans</td><td>Cada 2 anys</td></tr><tr><td>Menys de 10 anys abans, o per sobre de l\'edat mitjana</td><td>Cada any</td></tr></tbody></table><p>La lògica és senzilla: com més a prop de la franja en què estadísticament podrien aparèixer canvis, més valuós és mirar amb freqüència. La cadència s\'ajusta de manera natural a mesura que passa el temps, sense que hagis de fer res: és el programa el que porta el compte i t\'avisa quan toca.</p>',
    'pildoras.rmn.conclusion':   'La RMN és, de totes les proves del programa, probablement la més senzilla de viure: t\'estires, esperes i surts. El seu valor no està en el que et fa sentir durant la prova, sinó en el que va deixant al darrere: una sèrie d\'imatges del teu cervell al llarg del temps que, si algun dia calen, seran or. I si no calen, millor encara.',

    /* Píndola Punció Lumbar (categoria: proves) */
    'pildoras.puncion-lumbar.titulo':       'Escoltar el líquid que banya el cervell',
    'pildoras.puncion-lumbar.resumenCorto': 'La punció lumbar permet obtenir una petita mostra del líquid que envolta el cervell i la medul·la, una de les fonts d\'informació més valuoses que existeixen en neurologia. T\'expliquem com és, quina informació aporta i per què val la pena.',
    'pildoras.puncion-lumbar.resumen':      'El líquid cefaloraquidi —o LCR— és un fluid transparent que banya el cervell i la medul·la espinal. En estar en contacte directe amb el sistema nerviós, porta dissoltes pistes moleculars que enlloc més del cos es troben amb tanta claredat. La punció lumbar és el procediment que permet obtenir una petita mostra d\'aquest líquid per analitzar-lo.',
    'pildoras.puncion-lumbar.desarrollo':   '<h3>Per què és tan valuós el líquid cefaloraquidi</h3><p>El cervell i la medul·la espinal no floten en el buit: estan embolcallats en un líquid transparent, el LCR, que els protegeix, els nodreix i recull el que secreten. És, en cert sentit, el mirall més fidel del sistema nerviós.</p><p>A la sang, els senyals moleculars del cervell arriben molt diluïts —quan arriben—, perquè una barrera biològica (l\'anomenada barrera hematoencefàlica) filtra amb molta cura el que passa d\'un costat a l\'altre. El LCR, en canvi, és a l\'altre costat d\'aquesta barrera, en contacte directe amb el que volem observar. Per això una mostra petita de LCR pot contenir informació que una analítica de sang, per més completa que sigui, mai no ens podrà donar.</p><p>En un programa de seguiment com el nostre, aquesta informació és especialment útil: el LCR ens permet detectar, si n\'hi hagués, els primers indicis d\'activitat relacionada amb la teva mutació, molt abans que qualsevol símptoma pogués aparèixer.</p><h3>Com és la prova, pas a pas</h3><p>La punció lumbar és un procediment senzill, ben conegut en neurologia i realitzat des de fa més d\'un segle. Es fa a consulta o a hospital de dia, no requereix ingrés, i sol durar entre 15 i 30 minuts.</p><p>T\'estiraràs de costat, arrupit, o assegut lleugerament inclinat endavant. El professional netejarà la zona lumbar —la part baixa de l\'esquena— amb antisèptic, i aplicarà anestèsia local al punt exacte on s\'introduirà l\'agulla. Aquesta anestèsia és el primer que sentiràs: una petita punxada superficial, com la d\'una injecció al braç.</p><p>Després, ja amb la zona adormida, s\'introdueix una agulla molt fina que travessa els teixits fins a arribar a l\'espai on hi ha el LCR. Es recullen uns pocs mil·lilitres —una quantitat petita, que el cos reposa en poc temps— i es retira l\'agulla. En acabar, se\'t demanarà que descansis estirat una estona abans d\'anar-te\'n a casa.</p><h3>Un dubte molt comú</h3><p>Molta gent, en sentir "punció lumbar", s\'imagina que l\'agulla toca la medul·la. No és així: la punció es fa en una zona per sota d\'on acaba la medul·la, en un espai on ja només hi ha LCR i fines arrels nervioses que s\'aparten amb facilitat. Per això el procediment és segur i es fa rutinàriament en hospitals de tot el món.</p><h3>Què sentiràs i què pot passar després</h3><p>Durant la prova, el més molest sol ser la postura i la pressió de l\'agulla; el dolor, si n\'hi ha, és moderat i breu gràcies a l\'anestèsia local. Hi ha persones que no senten pràcticament res; d\'altres descriuen una sensació de pressió més marcada. Totes dues coses són normals.</p><p>Després de la prova, algunes persones —no totes— poden notar en les hores o dies següents una cefalea coneguda com a "cefalea post-punció", que se sol alleujar estirant-se, bevent líquids i prenent paracetamol. Actualment s\'utilitzen agulles de disseny especial que redueixen molt la probabilitat que això passi, i quan apareix se sol resoldre en un o dos dies. Se t\'explicarà com reconèixer-la i què fer si apareix.</p><p>Més enllà d\'això, el procediment és molt segur. Les complicacions serioses són extraordinàriament rares, i l\'equip que t\'atén coneix bé com prevenir-les.</p><h3>Quina informació ens aporta</h3><p>D\'una mostra petita de LCR se\'n pot extreure informació molt rica:</p><ul><li>Un <strong>mesurament de proteïnes específiques</strong> del sistema nerviós que reflecteixen com està funcionant el cervell, com petits indicadors de l\'estat general.</li><li>La <strong>detecció directa d\'activitat relacionada amb la proteïna priònica</strong>, mitjançant tècniques molt sensibles capaces de detectar quantitats ínfimes.</li><li>Una <strong>visió de conjunt</strong> que, en repetir-se al llarg del temps, permet construir una sèrie comparable: igual que amb la RMN, cada mostra cobra sentit quan es compara amb les anteriors.</li></ul><h3>Les tècniques que analitzen el LCR</h3><p>Un cop obtinguda la mostra, comença la feina al laboratori. Hi ha diverses tècniques que poden aplicar-se, cadascuna dissenyada per respondre una pregunta diferent. Les dues més rellevants en el context de les malalties priòniques són el <strong>RT-QuIC</strong> i la <strong>PMCA</strong>: són mètodes molt moderns, capaços de detectar quantitats minúscules de proteïna priònica mal plegada, fins i tot anys abans que apareguessin símptomes.</p><p>Parlarem de totes dues en detall en píndoles dedicades de la secció <em>La ciència al darrere</em>, perquè són prou fascinants per merèixer-les per si mateixes. De moment, n\'hi ha prou amb saber que la teva mostra no es queda en un calaix: passa per mans expertes i per tècniques d\'última generació.</p><h3>Cada quant es repeteix</h3><p>Com passa amb la resta de proves del programa, la freqüència de la punció lumbar s\'ajusta a l\'edat mitjana d\'inici de la malaltia associada a la teva mutació. Per referència, l\'edat mitjana d\'inici dels símptomes a l\'Insomni Familiar Fatal ronda els 49 anys, i a la malaltia de Creutzfeldt-Jakob genètica ronda els 58 anys. A partir d\'aquí, el criteri del programa és aquest:</p><table><thead><tr><th>La teva situació respecte a l\'inici mitjà</th><th>Freqüència de la punció lumbar</th></tr></thead><tbody><tr><td>Més de 20 anys abans</td><td>Cada 3 anys</td></tr><tr><td>Entre 20 i 10 anys abans</td><td>Cada 2 anys</td></tr><tr><td>Menys de 10 anys abans, o per sobre de l\'edat mitjana</td><td>Cada any</td></tr></tbody></table><p>La lògica és la mateixa que en la resta del seguiment: com més a prop de la franja en què estadísticament podrien aparèixer canvis, més valuós és mirar amb freqüència. I, com sempre, no has de portar tu el compte: el programa t\'avisa quan toca.</p>',
    'pildoras.puncion-lumbar.conclusion':   'La punció lumbar és probablement la prova més temuda del programa, però, a la pràctica, sol ser molt menys molesta del que la gent imagina. A canvi, ofereix alguna cosa única: una finestra directa al sistema nerviós que cap altra prova pot obrir. Cada mostra que ens dones és una peça petita però extraordinàriament valuosa de la feina conjunta que estem fent, i una manera concreta de cuidar-te en el present i preparar-te per al que vingui.',

    'pildoras.subscribe.title': 'Rep les píndoles al teu email',
    'pildoras.subscribe.text':  'Si formes part del programa de seguiment, pots activar les notificacions per email per rebre un avís cada vegada que publiquem una nova píndola.',
    'pildoras.subscribe.btn':   'Activar les meves notificacions',
    'pildoras.modal.title':     'Qui ets?',
    'pildoras.modal.desc':      'Introdueix el teu DNI per activar les notificacions. Només els participants registrats al programa les poden activar.',
    'pildoras.modal.label':     'DNI',
    'pildoras.modal.btn':       'Activar',
    'pildoras.modal.notfound':  'No hem trobat el teu DNI al programa. Si creus que hi ha un error, contacta amb l\'equip.',

    /* ---- portadores-compromiso.html (Momento 3 + final) ---- */
    'm3.title':     'El que això significa a la pràctica',
    'm3.sub':       'Quatre coses que volem que sàpigues abans de continuar.',
    'm3.confirmed': '✓ Confirmat',
    'm3.a1.header': 'La teva participació és completament voluntària',
    'm3.a1.btn':    'Entès, i ho accepto',
    'm3.a2.header': 'Tindràs accés a l\'App de seguiment',
    'm3.a2.btn':    'Entès, i m\'interessa',
    'm3.a3.header': 'La teva participació et situa en una posició favorable',
    'm3.a3.text':   'Les persones que formen part del programa de seguiment són les que coneixem millor, les que tenim més dades i les que abans podrem contactar quan s\'obrin nous assaigs clínics. No podem garantir-te l\'accés — els criteris de cada assaig els defineix el mateix assaig — però sí podem dir-te que ser aquí és la millor manera d\'estar preparat/da quan arribi aquest moment.',
    'm3.a3.btn':    'Entès',
    'm3.a4.header': 'Aquesta és una relació a llarg termini',
    'm3.a4.text':   'El programa no és una visita puntual ni un qüestionari que es respon una vegada. És un acompanyament continuat — amb visites periòdiques, actualitzacions d\'informació, Píndoles de coneixement i contacte humà real. Ens comprometem a ser presents mentre tu vulguis que ho estiguem.',
    'm3.a4.btn':    'Entès, i vull formar-ne part',
    'final.eyebrow':           'Següent pas',
    'final.text':              'Has fet un pas important — no només cap al programa, sinó cap a tu mateix/a. L\'equip es posarà en contacte amb tu aviat per explicar-te els següents passos amb calma i sense pressa. Si mentrestant tens qualsevol pregunta, aquí tens com trobar-nos.',
    'final.contacts.label':    'Com trobar-nos',
    'final.form.eyebrow':      'Següent pas',
    'final.form.title':        'Un últim pas perquè puguem contactar-te',
    'final.form.text':         'Si desitges que l\'equip del programa es posi en contacte amb tu, indica\'ns el teu DNI. Això ens permetrà identificar-te al nostre sistema i confirmar el teu desig de participar. Les teves dades estan protegides i només seran accessibles per a l\'equip investigador.',
    'final.form.label.dni':    'DNI',
    'final.form.dni.hint':     '8 dígits seguits d\'una lletra',
    'final.form.btn':          'Confirmar el meu desig de participar',
    'final.notfound.title':    'No hem trobat el teu DNI',
    'final.notfound.text':     'No hem trobat el teu DNI al nostre sistema. És possible que encara no hagis estat registrat/da. Si us plau, contacta directament amb l\'equip perquè puguem incorporar-te.',

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
    'nav.back':     'Volver',
    'nav.prev':     'Anterior',
    'nav.next':     'Seguinte',
    'nav.continue': 'Continuar',

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

    /* ---- portadores-paso-1.html (Check 2.1) ---- */
    'm2.c1.title':    'Algo importante que queremos confirmar contigo',
    'm2.c1.prose':    'Dentro do grupo de portadores asintomáticos — persoas que, coma ti, conviven cunha mutación xenética sen ter desenvolvido síntomas — a investigación actual permitiu identificar dúas situacións claramente distintas. Isto é relativamente recente e non todo o mundo que chega aquí o sabe aínda. Por iso queremos preguntarte:',
    'm2.c1.question': 'Sabías que existen dous tipos de portadores asintomáticos, con situacións biolóxicas diferentes aínda que ambos estean sen síntomas?',
    'm2.c1.exp.p1':   '<strong>Os portadores en fase inactiva:</strong> o proceso biolóxico asociado á mutación non mostra sinais de actividade detectable hoxe. Isto asóciase cun horizonte temporal máis amplo. O reloxo biolóxico, por así dicilo, aínda non arrancou de forma medible.',
    'm2.c1.exp.p2':   '<strong>Os portadores en fase activa silente:</strong> existe unha actividade biolóxica incipiente que as técnicas especializadas poden comezar a detectar, aínda que a persoa non sinta absolutamente nada. O proceso comezou de forma moi silandeira, e precisamente por iso é tan valioso sabelo: porque este é o grupo que con maior probabilidade poderá acceder aos primeiros ensaios clínicos preventivos.',
    'm2.c1.exp.p3':   'Coñecer en cal dos dous grupos te atopas é voluntario, posible, e algo que o programa pode axudarche a descubrir.',
    'm2.c1.exp.retry': 'Volve á pregunta cando queiras:',
    'm2.c1.ans.yes1':  'Si, sabíao',
    'm2.c1.ans.yes2':  'Non, non o sabía pero agora enténdoo ao ler o programa, e téñoo claro',
    'm2.c1.ans.no':    'Non, non o sabía e aínda non o teño claro',

    /* ---- portadores-paso-2.html (Check 2.2) ---- */
    'm2.c2.title':    'A diferenza entre os dous tipos, e o que significa para ti',
    'm2.c2.prose.p1': 'Saber que existen dous tipos é un primeiro paso. Pero queremos asegurarnos de que a diferenza entre eles ten sentido real para ti, non só como concepto abstracto.',
    'm2.c2.prose.p2': '<strong>Se estás en fase inactiva:</strong> os marcadores biolóxicos non mostran actividade detectable hoxe. Iso non significa que o proceso non vaia comezar nalgún momento (pode ser en cuestión de días, semanas ou meses), pero si que probablemente dispoñas dunha marxe de tempo ampla ata o desenvolvemento de síntomas visibles de enfermidade. Esta marxe é precisamente o que fai posible planificar e estar en primeira liña cando cheguen as terapias.',
    'm2.c2.prose.p3': '<strong>Se estás en fase activa silente:</strong> os marcadores mostran sinais temperáns de actividade, aínda que a túa vida cotiá non o reflicte en absoluto. Lonxe de ser só unha mala nova, xa que podería implicar que os síntomas da enfermidade poderían aparecer nun horizonte temporal máis próximo (aínda que aínda descoñecido), é a información máis valiosa que podes ter hoxe — porque te sitúa exactamente no grupo para o que se están tratando de deseñar os primeiros ensaios clínicos preventivos. O momento de actuar é agora, e o programa está aquí para cada paso.',
    'm2.c2.question': 'Comprendes a diferenza entre ambas situacións e o que podería implicar para o teu caso concreto?',
    'm2.c2.yes':      'Si, comprendo a diferenza e o que implica',
    'm2.c2.no':       'Preciso relelo ou non me quedou do todo claro',
    'm2.c2.exp.p1':   'Non pasa nada. Tómate o tempo que precises. Aquí tes de novo os dous perfís de forma resumida:',
    'm2.c2.exp.p2':   '<strong>Fase inactiva:</strong> marcadores sen actividade detectable hoxe. Horizonte temporal amplo. Tempo para planificar.',
    'm2.c2.exp.p3':   '<strong>Fase activa silente:</strong> sinais temperáns de actividade biolóxica, sen síntomas. O grupo prioritario para os primeiros ensaios preventivos.',
    'm2.c2.exp.retry': 'Cando o teñas claro:',

    /* ---- portadores-paso-3.html (Check 2.3) ---- */
    'm2.c3.title':    'As probas que fan posible sabelo',
    'm2.c3.prose.p1': 'Determinar en cal dos dous grupos te atopas non é sinxelo. Non existe hoxe ningunha proba única, rápida e definitiva que o responda. O que temos son ferramentas especializadas — algunhas requiren mostras biolóxicas que non son as habituais, como determinadas análises de líquido cefalorraquídeo ou outras que permiten detectar sinais de actividade priónica con maior sensibilidade.',
    'm2.c3.prose.p2': 'Isto significa que o proceso require tempo, visitas, e nalgúns casos procedementos que merecen ser explicados con detalle antes de realizalos. O equipo do programa acompañarate en cada decisión, e nada se fará sen a túa comprensión e o teu consentimento.',
    'm2.c3.question': 'Entendes que coñecer a túa situación require probas especializadas, que non sempre son sinxelas, e que o resultado pode ter implicacións reais na túa vida?',
    'm2.c3.yes':      'Si, enténdoo e quero continuar',
    'm2.c3.no':       'Preciso pensalo ou entender mellor isto antes de seguir',
    'm2.c3.exp.p1':   'É unha decisión que merece reflexión, e está moi ben recoñecelo. O importante é que ninguén che vai pedir que fagas ningunha proba sen explicarche antes con detalle en que consiste, que información dá, e que pode supoñer para ti coñecer ese resultado.',
    'm2.c3.exp.p2':   'O consentimento informado non é un formulario — é unha conversa real co equipo. Cando sintas que estás listo/a, a pregunta segue aquí.',
    'm2.c3.exp.retry': 'Cando esteas listo/a:',

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
    'reflexion.c2.s13.h': 'A túa familia viviu casos previos e temedes repetir a historia de chegar tarde.',
    'reflexion.c2.s13.b': 'A parte positiva é romper ese patrón mediante vixilancia e preparación temperás.',
    'reflexion.c2.s14.h': 'Resúltache máis fácil afrontar o difícil cando sabes que facer despois.',
    'reflexion.c2.s14.b': 'A utilidade desta información está en que activa pasos concretos: máis seguimento, máis foco e máis preparación.',
    'reflexion.c2.s15.h': 'Queres estar en primeira liña das novidades terapéuticas.',
    'reflexion.c2.s15.b': 'O seguimento é a vía para recibir información personalizada sobre opcións dispoñibles ou próximas.',
    'reflexion.c2.s16.h': 'Temes que non facer nada sexa peor que saber.',
    'reflexion.c2.s16.b': 'Neste grupo, coñecer a túa situación pode transformar a sensación de pasividade nunha de acción informada.',
    'reflexion.c2.s17.h': 'Precisas decidir a quen contalo e como.',
    'reflexion.c2.s17.b': 'Saber onde estás pode axudarche a comunicarte de forma máis honesta e concreta con quen forme parte da túa rede de apoio.',
    'reflexion.c2.s18.h': 'Queres aproveitar o tempo útil, non reaccionar tarde.',
    'reflexion.c2.s18.b': 'Ese é quizais o valor máis positivo desta situación: aínda estás asintomático, pero xa non estás ás cegas.',
    'reflexion.closing':     'Estar nun grupo ou noutro non cambia quen es, pero pode cambiar de forma importante como planificas, como decides e como aproveitas as oportunidades de seguimento, apoio e acceso temperán a novas terapias.',
    'reflexion.back':        'Volver ao programa',
    'pildoras.hero.title':      'Píldoras de<br>información',
    'pildoras.hero.sub':        'Actualizacións breves e rigorosas sobre o que importa',

    /* Filtros de categoría */
    'pildoras.filters.todas':     'Todas',
    'pildoras.filters.pruebas':   'Probas que che farán',
    'pildoras.filters.ciencia':   'A ciencia detrás',
    'pildoras.filters.horizonte': 'No horizonte',

    /* Acciones de la vista expandida */
    'pildoras.close':            'Pechar',

    /* Píldora de benvida */
    'pildoras.bienvenida.titulo':       'Un espazo para ti, ao teu ritmo',
    'pildoras.bienvenida.resumenCorto': 'Benvido ás pílulas de información: textos breves sobre as probas, a ciencia e as terapias do programa. Leas ao teu ritmo.',
    'pildoras.bienvenida.resumen':      'Esta sección reúne pequenas explicacións sobre as probas, as técnicas e as terapias que forman parte do programa. Son textos breves, pensados para lerse con calma, cando ti queiras e ata onde ti queiras.',
    'pildoras.bienvenida.desarrollo':   '<p>Saber o que está a pasar —o que che van facer, como se analiza unha mostra, que terapias se están a estudar— axuda a sentirse máis na casa dentro do programa. Por iso creamos estas pílulas de información: textos curtos, claros e sen tecnicismos innecesarios, que podes ler na orde que prefiras.</p><p>Organizamos as pílulas en tres grupos, cada un coa súa cor, para que atopes facilmente o que buscas:</p><ul><li><strong>Probas que che farán</strong> reúne explicacións sobre os procedementos do seguimento: que son, como son por dentro, que vas sentir.</li><li><strong>A ciencia detrás</strong> conta o que ocorre coas túas mostras cando xa non estás na consulta: as técnicas que permiten mirar o que antes non se podía ver.</li><li><strong>No horizonte</strong> fala dos tratamentos que están a ser desenvolvidos e ensaiados no mundo, e do momento tan especial que vivimos na investigación destas enfermidades.</li></ul><p>Non fai falta leelas todas, nin leelas seguidas, nin leelas xa. Están aquí para cando teñas curiosidade, ou cando che xurda unha dúbida, ou simplemente cando che apeteza achegarte un pouco máis ao que ocorre entre bastidores.</p>',
    'pildoras.bienvenida.conclusion':   'Cada pílula é unha pequena ventá. Ábreas cando queiras. E se despois de ler algunha che quedan preguntas, o equipo sempre está do outro lado para faladas contigo.',

    /* Pílula RMN (categoría: probas) */
    'pildoras.rmn.titulo':       'Unha mirada ao cerebro, coa máxima nitidez',
    'pildoras.rmn.resumenCorto': 'A resonancia magnética permítenos mirar o cerebro con gran detalle, sen agulla, sen dor e sen radiación. Contámosche como é, que achega ao seguimento e cada canto se repite.',
    'pildoras.rmn.resumen':      'A resonancia magnética nuclear —RMN— é unha das probas máis coñecidas da medicina moderna. Consiste en facer unha imaxe moi detallada do cerebro desde fóra, sen agulla, sen dor, sen radiación. No programa utilizámola porque é unha forma non invasiva e segura de observar como está o teu cerebro ao longo do tempo.',
    'pildoras.rmn.desarrollo':   '<h3>Por que é importante nun programa de seguimento</h3><p>Nun portador asintomático, o cerebro funciona con total normalidade. A RMN non busca facer un diagnóstico de nada —porque non hai enfermidade activa que diagnosticar—, senón algo máis sutil: establecer unha imaxe de referencia persoal, o teu "retrato de partida", e repetila periodicamente para ver se co tempo aparece algún cambio que mereza atención.</p><p>Esta lóxica é a que marca a diferenza entre facerche unha RMN porque tes síntomas e facércha como parte dun seguimento preventivo. No primeiro caso, búscase unha pista clara; no noso, cultívase unha serie temporal de imaxes que permiten comparar cada unha coas anteriores. Canto máis parecidas entre si, mellor sinal.</p><h3>Por que usamos equipos de 3 Teslas</h3><p>Non todas as resonancias son iguais. Os equipos máis estendidos nos hospitais son de 1,5 Teslas (a unidade mide a forza do imán). No programa usamos equipos de 3 Teslas, máis modernos e cunha capacidade de detalle considerablemente superior. Na práctica, isto significa imaxes máis nítidas, cortes máis finos, e a posibilidade de ver matices que en equipos máis básicos pasarían desapercibidos.</p><p>Para un seguimento de persoas asintomáticas, esta nitidez é clave: se o que buscamos son cambios sutís ao longo do tempo, necesitamos a mellor resolución posible desde a primeira imaxe. Así, se nalgún momento algo cambia, detectámolo antes e con maior seguridade.</p><h3>Como é a proba, paso a paso</h3><p>A RMN é unha proba sinxela de describir. Déitaste nunha padiola que se desliza dentro dun tubo aberto polos dous extremos. Durante uns 20–30 minutos, o equipo xera imaxes do teu cerebro. Non sentirás nada: a máquina fai ruído —rítmico, un pouco como uns golpes metálicos—, e para protexer os teus oídos daranche uns tapóns ou cascos. Non hai pinchazos, non hai dor, non hai radiación.</p><p>No noso caso non é necesario o uso de contraste intravenoso, así que tampouco hai vía nin agullas. Podes vir á cita con roupa cómoda e almorzado.</p><h3>E se me dá apuro o tubo?</h3><p>É unha preocupación común e completamente lexítima. O tubo da RMN pode xerar certa sensación de peche. Se es propenso á claustrofobia ou simplemente queres saber que opcións hai, coméntao antes co equipo: moitos centros dispoñen de máquinas con tubos máis anchos e curtos, ou poden pautar un ansiolítico suave se o consideras necesario. A idea é que a proba transcorra coa maior tranquilidade posible.</p><h3>Que información nos achega</h3><p>A RMN dános tres tipos de información útil:</p><ul><li>Unha <strong>imaxe de referencia persoal</strong> coa que poder comparar as seguintes. Esta imaxe inicial é, por si soa, un agasallo ao futuro.</li><li>Unha <strong>visión xeral da saúde cerebral</strong>, que nos permite, de paso, descartar outras cuestións non relacionadas coa túa mutación que mereza a pena saber.</li><li>E, ao longo do tempo, unha <strong>serie de imaxes comparables</strong> que permiten detectar precozmente calquera cambio, se chegase a producirse.</li></ul><h3>Cada canto se repite</h3><p>A frecuencia axústase á idade media de inicio da enfermidade asociada á túa mutación, que é distinta en cada caso. Para referencia, a idade media de inicio dos síntomas no Insomnio Familiar Fatal ronda os 49 anos, e na enfermidade de Creutzfeldt-Jakob xenética ronda os 58 anos. A partir de aí, o criterio do programa é este:</p><table><thead><tr><th>A túa situación respecto ao inicio medio</th><th>Frecuencia de RMN</th></tr></thead><tbody><tr><td>Máis de 20 anos antes</td><td>Cada 3 anos</td></tr><tr><td>Entre 20 e 10 anos antes</td><td>Cada 2 anos</td></tr><tr><td>Menos de 10 anos antes, ou por encima da idade media</td><td>Cada ano</td></tr></tbody></table><p>A lóxica é sinxela: canto máis preto da franxa en que estatisticamente poderían aparecer cambios, máis valioso é mirar con frecuencia. A cadencia axústase de forma natural conforme o tempo pasa, sen que teñas que facer nada: é o programa o que leva a conta e avísache cando toca.</p>',
    'pildoras.rmn.conclusion':   'A RMN é, de todas as probas do programa, probablemente a máis sinxela de vivir: déitaste, esperas, e saes. O seu valor non está no que che fai sentir durante a proba, senón no que vai deixando detrás: unha serie de imaxes do teu cerebro ao longo do tempo que, se algún día fan falta, serán ouro. E se non fan falta, mellor aínda.',

    /* Pílula Punción Lumbar (categoría: probas) */
    'pildoras.puncion-lumbar.titulo':       'Escoitar o líquido que baña o cerebro',
    'pildoras.puncion-lumbar.resumenCorto': 'A punción lumbar permite obter unha pequena mostra do líquido que rodea o cerebro e a medula, unha das fontes máis valiosas de información que existen en neuroloxía. Contámosche como é, que información achega e por que paga a pena.',
    'pildoras.puncion-lumbar.resumen':      'O líquido cefalorraquídeo —ou LCR— é un fluído transparente que baña o cerebro e a medula espiñal. Ao estar en contacto directo co sistema nervioso, leva disoltas pistas moleculares que en ningún outro lugar do corpo se atopan con tanta claridade. A punción lumbar é o procedemento que permite obter unha pequena mostra dese líquido para analizalo.',
    'pildoras.puncion-lumbar.desarrollo':   '<h3>Por que é tan valioso o líquido cefalorraquídeo</h3><p>O cerebro e a medula espiñal non flotan no baleiro: están envolveitos nun líquido transparente, o LCR, que os protexe, os nutre e recolle o que secretan. É, en certo sentido, o espello máis fiel do sistema nervioso.</p><p>No sangue, os sinais moleculares do cerebro chegan moi diluídos —cando chegan—, porque unha barreira biolóxica (a chamada barreira hematoencefálica) filtra con moito coidado o que pasa dun sitio ao outro. O LCR, en cambio, está no outro lado desa barreira, en contacto directo co que queremos observar. Por iso unha mostra pequena de LCR pode conter información que unha analítica de sangue, por máis completa que sexa, nunca poderá darnos.</p><p>Nun programa de seguimento coma o noso, esta información é especialmente útil: o LCR permítenos detectar, se os houbese, os primeiros indicios de actividade relacionada coa túa mutación, moito antes de que calquera síntoma puidese aparecer.</p><h3>Como é a proba, paso a paso</h3><p>A punción lumbar é un procedemento sinxelo, ben coñecido en neuroloxía e realizado desde hai máis dun século. Faise en consulta ou en hospital de día, non require ingreso, e adoita durar entre 15 e 30 minutos.</p><p>Deitaráste de lado, encollido, ou sentado lixeiramente inclinado cara a adiante. O profesional limpará a zona lumbar —a parte baixa das costas— con antiséptico, e aplicará anestesia local no punto exacto onde se introducirá a agulla. Esa anestesia é o primeiro que sentirás: un pequeno pinchazo superficial, como o dunha inxección no brazo.</p><p>Despois, xa coa zona durmida, introdúcese unha agulla moi fina que atravesa os tecidos ata alcanzar o espazo onde está o LCR. Recóllense uns poucos mililitros —unha cantidade pequena, que o corpo repón en pouco tempo— e retírase a agulla. Ao rematar, pediránseche que descanses deitado un anaco antes de marchar para a casa.</p><h3>Unha dúbida moi común</h3><p>Moita xente, ao oír "punción lumbar", imaxina que a agulla toca a medula. Non é así: a punción faise nunha zona por debaixo de onde remata a medula, nun espazo onde xa só hai LCR e finas raíces nerviosas que se apartan con facilidade. Por iso o procedemento é seguro e realízase rutineiramente en hospitais de todo o mundo.</p><h3>Que sentirás e que pode ocorrer despois</h3><p>Durante a proba, o máis molesto adoita ser a postura e a presión da agulla; a dor, se a hai, é moderada e breve grazas á anestesia local. Hai persoas que non senten practicamente nada; outras describen unha sensación de presión máis marcada. Ambas as cousas son normais.</p><p>Despois da proba, algunhas persoas —non todas— poden notar nas horas ou días seguintes unha cefalea coñecida como "cefalea post-punción", que adoita aliviarse deitándose, bebendo líquidos e tomando paracetamol. Actualmente utilízanse agullas de deseño especial que reducen moito a probabilidade de que isto ocorra, e cando aparece adoita resolverse nun ou dous días. Explicaráseche como recoñecela e que facer se aparece.</p><p>Máis alá disto, o procedemento é moi seguro. As complicacións serias son extraordinariamente raras, e o equipo que te atende coñece ben como prevenilas.</p><h3>Que información nos achega</h3><p>Dunha pequena mostra de LCR pódese extraer información moi rica:</p><ul><li>Unha <strong>medición de proteínas específicas</strong> do sistema nervioso que reflicten como está funcionando o cerebro, como pequenos indicadores do estado xeral.</li><li>A <strong>detección directa de actividade relacionada coa proteína priónica</strong>, mediante técnicas moi sensibles capaces de detectar cantidades ínfimas.</li><li>Unha <strong>visión de conxunto</strong> que, ao repetirse ao longo do tempo, permite construír unha serie comparable: igual que coa RMN, cada mostra cobra sentido cando se compara coas anteriores.</li></ul><h3>As técnicas que analizan o LCR</h3><p>Unha vez obtida a mostra, comeza o traballo no laboratorio. Hai varias técnicas que poden aplicarse, cada unha deseñada para responder a unha pregunta distinta. As dúas máis relevantes no contexto das enfermidades priónicas son o <strong>RT-QuIC</strong> e a <strong>PMCA</strong>: son métodos moi modernos, capaces de detectar cantidades minúsculas de proteína priónica mal pregada, mesmo anos antes de que aparecesen síntomas.</p><p>Falaremos de ambas en detalle en pílulas dedicadas da sección <em>A ciencia detrás</em>, porque son o suficientemente fascinantes como para merecelas por si mesmas. Polo de agora, abonda con saber que a túa mostra non queda nun caixón: pasa por mans expertas e por técnicas de última xeración.</p><h3>Cada canto se repite</h3><p>Como ocorre co resto de probas do programa, a frecuencia da punción lumbar axústase á idade media de inicio da enfermidade asociada á túa mutación. Para referencia, a idade media de inicio dos síntomas no Insomnio Familiar Fatal ronda os 49 anos, e na enfermidade de Creutzfeldt-Jakob xenética ronda os 58 anos. A partir de aí, o criterio do programa é este:</p><table><thead><tr><th>A túa situación respecto ao inicio medio</th><th>Frecuencia da punción lumbar</th></tr></thead><tbody><tr><td>Máis de 20 anos antes</td><td>Cada 3 anos</td></tr><tr><td>Entre 20 e 10 anos antes</td><td>Cada 2 anos</td></tr><tr><td>Menos de 10 anos antes, ou por encima da idade media</td><td>Cada ano</td></tr></tbody></table><p>A lóxica é a mesma que no resto do seguimento: canto máis preto da franxa en que estatisticamente poderían aparecer cambios, máis valioso é mirar con frecuencia. E, como sempre, non tes que levar ti a conta: o programa avísache cando toca.</p>',
    'pildoras.puncion-lumbar.conclusion':   'A punción lumbar é probablemente a proba máis temida do programa, pero, na práctica, adoita ser moito menos molesta do que a xente imaxina. A cambio, ofrece algo único: unha ventá directa ao sistema nervioso que ningunha outra proba pode abrir. Cada mostra que nos dás é unha peza pequena pero extraordinariamente valiosa do traballo conxunto que estamos facendo, e unha forma concreta de coidarte no presente e prepararte para o que veña.',

    'pildoras.subscribe.title': 'Recibe as píldoras no teu email',
    'pildoras.subscribe.text':  'Se formas parte do programa de seguimento, podes activar as notificacións por email para recibir un aviso cada vez que publiquemos unha nova píldora.',
    'pildoras.subscribe.btn':   'Activar as miñas notificacións',
    'pildoras.modal.title':     'Quen es?',
    'pildoras.modal.desc':      'Introduce o teu DNI para activar as notificacións. Só os participantes rexistrados no programa poden activalas.',
    'pildoras.modal.label':     'DNI',
    'pildoras.modal.btn':       'Activar',
    'pildoras.modal.notfound':  'Non atopamos o teu DNI no programa. Se cres que hai un erro, contacta co equipo.',

    /* ---- portadores-compromiso.html (Momento 3 + final) ---- */
    'm3.title':     'O que isto significa na práctica',
    'm3.sub':       'Catro cousas que queremos que saibas antes de continuar.',
    'm3.confirmed': '✓ Confirmado',
    'm3.a1.header': 'A túa participación é completamente voluntaria',
    'm3.a1.btn':    'Entendido, e acéptoo',
    'm3.a2.header': 'Terás acceso á App de seguimento',
    'm3.a2.btn':    'Entendido, e interésame',
    'm3.a3.header': 'A túa participación sitúate nunha posición favorable',
    'm3.a3.text':   'As persoas que forman parte do programa de seguimento son as que mellor coñecemos, as que temos máis datos e as que antes poderemos contactar cando se abran novos ensaios clínicos. Non podemos garantirche o acceso — os criterios de cada ensaio defínoos o propio ensaio — pero si podemos dicirche que estar aquí é a mellor forma de estar preparado/a para cando chegue ese momento.',
    'm3.a3.btn':    'Entendido',
    'm3.a4.header': 'Esta é unha relación a longo prazo',
    'm3.a4.text':   'O programa non é unha visita puntual nin un cuestionario que se responde unha vez. É un acompañamento continuado — con visitas periódicas, actualizacións de información, Píldoras de coñecemento e contacto humano real. Comprometémonos a estar presentes mentres ti queiras que o esteamos.',
    'm3.a4.btn':    'Entendido, e quero formar parte',
    'final.eyebrow':           'Seguinte paso',
    'final.text':              'Deches un paso importante — non só cara ao programa, senón cara a ti mesmo/a. O equipo porase en contacto contigo en breve para explicarche os seguintes pasos con calma e sen présa. Se mentres tanto tes calquera pregunta, aquí tes como atoparnos.',
    'final.contacts.label':    'Como atoparnos',
    'final.form.eyebrow':      'Seguinte paso',
    'final.form.title':        'Un último paso para que poidamos contactarte',
    'final.form.text':         'Se desexas que o equipo do programa se poña en contacto contigo, indícanos o teu DNI. Isto permitiranos identificarte no noso sistema e confirmar o teu desexo de participar. Os teus datos están protexidos e só serán accesibles para o equipo investigador.',
    'final.form.label.dni':    'DNI',
    'final.form.dni.hint':     '8 díxitos seguidos dunha letra',
    'final.form.btn':          'Confirmar o meu desexo de participar',
    'final.notfound.title':    'Non atopamos o teu DNI',
    'final.notfound.text':     'Non atopamos o teu DNI no noso sistema. É posible que aínda non fose rexistrado/a. Por favor, contacta directamente co equipo para que poidamos incorporarte.',

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

  en: {
    /* ---- Navigation ---- */
    'nav.back':     'Back',
    'nav.prev':     'Previous',
    'nav.next':     'Next',
    'nav.continue': 'Continue',

    /* ---- Hero ---- */
    'hero.eyebrow': 'Preclinical follow-up program',
    'hero.title':   'Your participation\nstarts here',
    'hero.sub':     'A process designed for you, at your own pace and without pressure.',

    /* ---- Moment 0 ---- */
    'm0.intro': 'Before continuing, we want to make sure you\'ve had the chance to read through all the program information at your own pace. What comes next isn\'t a formality — it\'s a conversation with yourself about something important.',
    'm0.btn':   'I\'ve read the program and want to continue',

    /* ---- Moment 1 ---- */
    'm1.title': 'A first question, no rush',
    'm1.sub':   'There\'s no right or wrong answer. All we ask is that you choose the one that best reflects how you feel right now. You can change your mind at any time.',

    'm1.a.header': 'Yes, I want to explore my participation',
    'm1.a.body':   'I\'ve read the information carefully and, although I may still have questions, I feel I want to take this step. I understand this isn\'t a final commitment — it\'s the beginning of a deeper conversation with the team and with myself.',

    'm1.b.header': 'I don\'t feel ready yet',
    'm1.b.body':   'I need more time to take in this information. This isn\'t a door closing — I know I can come back when I feel ready. For now, I\'d rather move at my own pace.',

    'm1.c.header': 'I have questions and would rather talk to someone first',
    'm1.c.body':   'Before making any decision, I\'d like to talk with the program team. I have questions I can\'t answer on my own, and I need to hear a human voice before continuing.',

    /* ---- portadores-paso-1.html (Check 2.1) ---- */
    'm2.c1.title':    'Something important we want to confirm with you',
    'm2.c1.prose':    'Within the group of asymptomatic carriers — people who, like you, live with a genetic mutation without having developed symptoms — current research has made it possible to identify two clearly distinct situations. This is relatively recent, and not everyone who gets here knows about it yet. That\'s why we want to ask you:',
    'm2.c1.question': 'Did you know there are two kinds of asymptomatic carriers, with different biological situations even though both are without symptoms?',
    'm2.c1.exp.p1':   '<strong>Carriers in an inactive phase:</strong> the biological process associated with the mutation shows no signs of detectable activity today. This is linked to a longer time horizon. The biological clock, so to speak, has not yet started ticking in any measurable way.',
    'm2.c1.exp.p2':   '<strong>Carriers in a silent active phase:</strong> there\'s incipient biological activity that specialized techniques can begin to detect, even though the person feels absolutely nothing. The process has started very quietly, and that\'s precisely why it\'s so valuable to know: because this is the group most likely to be able to access the first preventive clinical trials.',
    'm2.c1.exp.p3':   'Finding out which of the two groups you\'re in is voluntary, possible, and something the program can help you discover.',
    'm2.c1.exp.retry': 'Come back to the question whenever you\'d like:',
    'm2.c1.ans.yes1':  'Yes, I knew',
    'm2.c1.ans.yes2':  'No, I didn\'t know, but I\'ve understood it now reading the program, and it\'s clear to me',
    'm2.c1.ans.no':    'No, I didn\'t know and it\'s not yet clear to me',

    /* ---- portadores-paso-2.html (Check 2.2) ---- */
    'm2.c2.title':    'The difference between the two types, and what it means for you',
    'm2.c2.prose.p1': 'Knowing there are two types is a first step. But we want to make sure the difference between them has real meaning for you, not just as an abstract concept.',
    'm2.c2.prose.p2': '<strong>If you\'re in an inactive phase:</strong> the biological markers show no detectable activity today. That doesn\'t mean the process won\'t begin at some point (possibly in a matter of days, weeks, or months), but it does mean you probably have a wide margin of time before visible disease symptoms develop. That margin is precisely what makes it possible to plan ahead and be on the front line when therapies arrive.',
    'm2.c2.prose.p3': '<strong>If you\'re in a silent active phase:</strong> the markers show early signs of activity, even though your everyday life doesn\'t reflect it at all. Far from being just bad news — since it could mean disease symptoms may appear on a closer (though still unknown) time horizon — it is the most valuable information you can have today, because it places you precisely in the group for which the first preventive clinical trials are being designed. The time to act is now, and the program is here for every step.',
    'm2.c2.question': 'Do you understand the difference between the two situations and what it could mean for your specific case?',
    'm2.c2.yes':      'Yes, I understand the difference and what it means',
    'm2.c2.no':       'I need to read it again or it\'s not fully clear to me',
    'm2.c2.exp.p1':   'No problem. Take the time you need. Here are the two profiles summarized again:',
    'm2.c2.exp.p2':   '<strong>Inactive phase:</strong> markers with no detectable activity today. Wide time horizon. Time to plan ahead.',
    'm2.c2.exp.p3':   '<strong>Silent active phase:</strong> early signs of biological activity, no symptoms. The priority group for the first preventive trials.',
    'm2.c2.exp.retry': 'When you have it clear:',

    /* ---- portadores-paso-3.html (Check 2.3) ---- */
    'm2.c3.title':    'The tests that make knowing possible',
    'm2.c3.prose.p1': 'Finding out which of the two groups you\'re in isn\'t simple. There\'s no single, fast, definitive test today that answers it. What we have are specialized tools — some of them require biological samples that aren\'t the usual ones, such as certain cerebrospinal fluid analyses, or others that can detect prion activity signals with greater sensitivity.',
    'm2.c3.prose.p2': 'This means the process takes time, visits, and in some cases procedures that deserve to be explained in detail before being performed. The program team will be with you for every decision, and nothing will be done without your understanding and your consent.',
    'm2.c3.question': 'Do you understand that finding out your situation requires specialized tests, that aren\'t always simple, and that the result can have real implications in your life?',
    'm2.c3.yes':      'Yes, I understand and I want to continue',
    'm2.c3.no':       'I need to think about it or understand this better before moving on',
    'm2.c3.exp.p1':   'This is a decision that deserves reflection, and it\'s good to recognize that. The important thing is that no one will ask you to do any test without first explaining in detail what it involves, what information it provides, and what learning that result may mean for you.',
    'm2.c3.exp.p2':   'Informed consent is not a form — it\'s a real conversation with the team. When you feel you\'re ready, the question will still be here.',
    'm2.c3.exp.retry': 'When you\'re ready:',

    /* ---- Moment 1 closures ---- */
    'closure.b.title': 'Your pace is the right pace',
    'closure.b.text':  'There\'s no rush at all. What matters is knowing that this information will be here when you need it, and that the program team is available whenever you\'d like to pick up the conversation. Taking care of yourself also means giving yourself the time you need.',

    'closure.c.title': 'Talking is always a good first step',
    'closure.c.text':  'Having questions doesn\'t mean you\'re lost — it means you\'re taking this seriously. The program team is here precisely for that. Don\'t hesitate to reach out through whichever channel feels most comfortable for you.',

    'closure.contacts.label': 'How to find us',

    /* ---- Footer ---- */
    'footer.text':   '© Joaquín Castilla 2026',
    'footer.ethics': 'Program approved by the Basque Country Research Ethics Committee · Code PI2025164',

    /* ---- Next steps button ---- */
    'btn.siguientes-pasos': 'What are the next steps?',

    /* ---- pildoras.html (Info updates) ---- */
    'pildoras.hero.title':      'Info<br>updates',
    'pildoras.hero.sub':        'Short, rigorous updates on what matters',

    /* Category filters */
    'pildoras.filters.todas':     'All',
    'pildoras.filters.pruebas':   'Tests you\'ll have',
    'pildoras.filters.ciencia':   'The science behind',
    'pildoras.filters.horizonte': 'On the horizon',

    /* Expanded view actions */
    'pildoras.close':            'Close',

    /* Welcome capsule */
    'pildoras.bienvenida.titulo':       'A space for you, at your own pace',
    'pildoras.bienvenida.resumenCorto': 'Welcome to the information capsules: brief texts about the program\'s tests, science, and therapies. Read them at your own pace.',
    'pildoras.bienvenida.resumen':      'This section brings together short explanations about the tests, techniques, and therapies that are part of the program. They\'re brief texts, meant to be read calmly, whenever you want and as far as you want.',
    'pildoras.bienvenida.desarrollo':   '<p>Knowing what\'s happening —what they\'re going to do, how a sample is analyzed, what therapies are being studied— helps you feel more at home within the program. That\'s why we\'ve created these information capsules: short, clear texts without unnecessary jargon, which you can read in whatever order you prefer.</p><p>We\'ve organized the capsules into three groups, each with its own color, so you can easily find what you\'re looking for:</p><ul><li><strong>Tests you\'ll have</strong> brings together explanations about the procedures of the follow-up: what they are, what they\'re like from the inside, what you\'ll feel.</li><li><strong>The science behind</strong> tells you what happens with your samples once you\'re no longer at the clinic: the techniques that allow us to look at what couldn\'t be seen before.</li><li><strong>On the horizon</strong> talks about the treatments being developed and trialed around the world, and about the very special moment we\'re living through in the research of these diseases.</li></ul><p>You don\'t need to read them all, or read them in a row, or read them right now. They\'re here for when you\'re curious, when a question comes up, or simply when you feel like coming a little closer to what happens behind the scenes.</p>',
    'pildoras.bienvenida.conclusion':   'Each capsule is a small window. Open them whenever you want. And if, after reading one, you\'re left with questions, the team is always on the other side, ready to talk them through with you.',

    /* MRI capsule (category: tests) */
    'pildoras.rmn.titulo':       'A look at the brain, with the greatest clarity',
    'pildoras.rmn.resumenCorto': 'Magnetic resonance imaging lets us look at the brain in great detail, with no needle, no pain, and no radiation. We\'ll tell you what it\'s like, what it adds to the follow-up, and how often it\'s repeated.',
    'pildoras.rmn.resumen':      'Magnetic resonance imaging —MRI— is one of the best-known tests in modern medicine. It involves taking a very detailed image of the brain from the outside, with no needle, no pain, no radiation. In the program we use it because it\'s a non-invasive, safe way to observe how your brain is doing over time.',
    'pildoras.rmn.desarrollo':   '<h3>Why it matters in a follow-up program</h3><p>In an asymptomatic carrier, the brain works completely normally. MRI isn\'t looking to diagnose anything —because there\'s no active disease to diagnose—, but something more subtle: to establish a personal reference image, your "starting portrait," and to repeat it periodically to see whether, over time, any change worth paying attention to appears.</p><p>This logic is what marks the difference between having an MRI because you have symptoms and having one as part of preventive follow-up. In the first case, a clear clue is being sought; in ours, a time series of images is being cultivated that allows each to be compared with the previous ones. The more alike they are to each other, the better the sign.</p><h3>Why we use 3 Tesla scanners</h3><p>Not all MRIs are the same. The most widespread scanners in hospitals are 1.5 Tesla (the unit measures the magnet\'s strength). In the program we use 3 Tesla scanners, more modern and with considerably greater detail capacity. In practice, this means sharper images, finer slices, and the ability to see nuances that would go unnoticed on more basic equipment.</p><p>For follow-up of asymptomatic people, this clarity is key: if what we\'re looking for are subtle changes over time, we need the best possible resolution from the very first image. That way, if something ever changes, we detect it sooner and with more certainty.</p><h3>What the test is like, step by step</h3><p>MRI is a simple test to describe. You lie down on a bed that slides inside a tube open at both ends. For about 20–30 minutes, the machine generates images of your brain. You won\'t feel anything: the machine makes noise —rhythmic, a bit like metallic knocking—, and to protect your ears they\'ll give you plugs or headphones. There are no needle sticks, no pain, no radiation.</p><p>In our case there\'s no need for intravenous contrast, so there\'s no IV line or needles either. You can come to the appointment in comfortable clothes and having had breakfast.</p><h3>What if the tube makes me uneasy?</h3><p>It\'s a common and completely legitimate concern. The MRI tube can create a certain sense of enclosure. If you\'re prone to claustrophobia or just want to know what options are available, mention it to the team beforehand: many centers have machines with wider, shorter tubes, or they can prescribe a mild anxiolytic if you think it necessary. The idea is for the test to go as smoothly as possible.</p><h3>What information it gives us</h3><p>MRI gives us three kinds of useful information:</p><ul><li>A <strong>personal reference image</strong> against which we can compare later ones. This initial image is, by itself, a gift to the future.</li><li>A <strong>general view of brain health</strong>, which lets us, along the way, rule out other matters unrelated to your mutation that are worth knowing about.</li><li>And, over time, a <strong>series of comparable images</strong> that allow any change to be detected early, if one ever occurs.</li></ul><h3>How often it\'s repeated</h3><p>The frequency is adjusted to the average age of onset of the disease associated with your mutation, which is different in each case. For reference, the average age of symptom onset in Fatal Familial Insomnia is around 49, and in genetic Creutzfeldt-Jakob disease around 58. From there, the program\'s criterion is this:</p><table><thead><tr><th>Your situation relative to the average onset</th><th>MRI frequency</th></tr></thead><tbody><tr><td>More than 20 years before</td><td>Every 3 years</td></tr><tr><td>Between 20 and 10 years before</td><td>Every 2 years</td></tr><tr><td>Less than 10 years before, or above the average age</td><td>Every year</td></tr></tbody></table><p>The logic is simple: the closer to the range in which changes could statistically appear, the more valuable it is to look often. The cadence adjusts naturally as time goes by, without you having to do anything: the program keeps track and lets you know when it\'s due.</p>',
    'pildoras.rmn.conclusion':   'MRI is, of all the tests in the program, probably the easiest to go through: you lie down, you wait, and you come out. Its value isn\'t in what it makes you feel during the test, but in what it leaves behind: a series of images of your brain over time that, if they\'re ever needed, will be gold. And if they\'re never needed, all the better.',

    /* Lumbar Puncture capsule (category: tests) */
    'pildoras.puncion-lumbar.titulo':       'Listening to the fluid that bathes the brain',
    'pildoras.puncion-lumbar.resumenCorto': 'A lumbar puncture makes it possible to obtain a small sample of the fluid that surrounds the brain and spinal cord —one of the most valuable sources of information in neurology. We\'ll tell you what it\'s like, what information it gives, and why it\'s worth it.',
    'pildoras.puncion-lumbar.resumen':      'Cerebrospinal fluid —CSF— is a transparent fluid that bathes the brain and spinal cord. Because it\'s in direct contact with the nervous system, it carries dissolved molecular clues that nowhere else in the body can be found with such clarity. A lumbar puncture is the procedure that allows a small sample of this fluid to be obtained for analysis.',
    'pildoras.puncion-lumbar.desarrollo':   '<h3>Why cerebrospinal fluid is so valuable</h3><p>The brain and spinal cord don\'t float in the void: they\'re wrapped in a transparent fluid, the CSF, which protects them, feeds them, and collects what they secrete. It is, in a sense, the most faithful mirror of the nervous system.</p><p>In the blood, the brain\'s molecular signals arrive very diluted —when they arrive at all—, because a biological barrier (the so-called blood-brain barrier) carefully filters what passes from one side to the other. The CSF, on the other hand, is on the other side of that barrier, in direct contact with what we want to observe. That\'s why a small sample of CSF can contain information that a blood test, however complete, can never give us.</p><p>In a follow-up program like ours, this information is especially useful: CSF allows us to detect, if there are any, the first signs of activity related to your mutation, long before any symptom could appear.</p><h3>What the test is like, step by step</h3><p>A lumbar puncture is a simple procedure, well known in neurology and carried out for over a century. It\'s done in the clinic or day hospital, doesn\'t require admission, and usually lasts between 15 and 30 minutes.</p><p>You\'ll lie on your side, curled up, or sit slightly leaning forward. The professional will clean the lumbar area —the lower back— with antiseptic, and apply local anesthesia at the exact point where the needle will be inserted. That anesthesia is the first thing you\'ll feel: a small superficial prick, like that of an injection in the arm.</p><p>Then, with the area already numb, a very fine needle is introduced, passing through the tissues until it reaches the space where the CSF is. A few milliliters are collected —a small amount, which the body replenishes in a short time— and the needle is withdrawn. When it\'s over, you\'ll be asked to rest lying down for a while before heading home.</p><h3>A very common concern</h3><p>Many people, on hearing "lumbar puncture", picture the needle touching the spinal cord. That\'s not the case: the puncture is done in a zone below where the spinal cord ends, in a space where there\'s already only CSF and fine nerve roots that move aside easily. That\'s why the procedure is safe and is performed routinely in hospitals all over the world.</p><h3>What you\'ll feel and what may happen afterwards</h3><p>During the test, the most uncomfortable part is usually the posture and the pressure of the needle; the pain, if any, is moderate and brief thanks to the local anesthesia. Some people feel almost nothing; others describe a more marked sensation of pressure. Both are normal.</p><p>After the test, some people —not all— may notice in the following hours or days a headache known as "post-puncture headache," which usually eases by lying down, drinking fluids, and taking paracetamol. Nowadays, specially designed needles are used that significantly reduce the probability of this happening, and when it does appear, it usually resolves within a day or two. You\'ll be told how to recognize it and what to do if it appears.</p><p>Beyond this, the procedure is very safe. Serious complications are extraordinarily rare, and the team looking after you knows well how to prevent them.</p><h3>What information it gives us</h3><p>From a small sample of CSF, very rich information can be extracted:</p><ul><li>A <strong>measurement of specific proteins</strong> of the nervous system that reflect how the brain is working, like small indicators of the overall state.</li><li>The <strong>direct detection of prion protein-related activity</strong>, through highly sensitive techniques capable of detecting minute amounts.</li><li>An <strong>overall view</strong> which, when repeated over time, allows a comparable series to be built: just as with MRI, each sample takes on meaning when compared with the previous ones.</li></ul><h3>The techniques that analyze CSF</h3><p>Once the sample is obtained, the lab work begins. There are several techniques that can be applied, each designed to answer a different question. The two most relevant in the context of prion diseases are <strong>RT-QuIC</strong> and <strong>PMCA</strong>: these are very modern methods, capable of detecting minute amounts of misfolded prion protein, even years before any symptoms could appear.</p><p>We\'ll talk about both of them in detail in dedicated capsules in <em>The science behind</em> section, because they\'re fascinating enough to deserve capsules of their own. For now, it\'s enough to know that your sample doesn\'t stay in a drawer: it passes through expert hands and state-of-the-art techniques.</p><h3>How often it\'s repeated</h3><p>As with the other tests in the program, the frequency of lumbar puncture is adjusted to the average age of onset of the disease associated with your mutation. For reference, the average age of symptom onset in Fatal Familial Insomnia is around 49, and in genetic Creutzfeldt-Jakob disease around 58. From there, the program\'s criterion is this:</p><table><thead><tr><th>Your situation relative to the average onset</th><th>Lumbar puncture frequency</th></tr></thead><tbody><tr><td>More than 20 years before</td><td>Every 3 years</td></tr><tr><td>Between 20 and 10 years before</td><td>Every 2 years</td></tr><tr><td>Less than 10 years before, or above the average age</td><td>Every year</td></tr></tbody></table><p>The logic is the same as in the rest of the follow-up: the closer to the range in which changes could statistically appear, the more valuable it is to look often. And, as always, you don\'t have to keep track: the program lets you know when it\'s due.</p>',
    'pildoras.puncion-lumbar.conclusion':   'A lumbar puncture is probably the most feared test in the program, but in practice, it\'s usually much less uncomfortable than people imagine. In return, it offers something unique: a direct window into the nervous system that no other test can open. Each sample you give us is a small but extraordinarily valuable piece of the joint work we\'re doing, and a concrete way of looking after yourself in the present and preparing for what\'s to come.',

    'pildoras.subscribe.title': 'Get Info updates in your inbox',
    'pildoras.subscribe.text':  'If you\'re part of the follow-up program, you can enable email notifications to get an alert whenever we publish a new update.',
    'pildoras.subscribe.btn':   'Enable my notifications',
    'pildoras.modal.title':     'Who are you?',
    'pildoras.modal.desc':      'Enter your ID number to enable notifications. Only participants registered in the program can enable them.',
    'pildoras.modal.label':     'ID number',
    'pildoras.modal.btn':       'Enable',
    'pildoras.modal.notfound':  'We couldn\'t find your ID number in the program. If you think this is a mistake, please contact the team.',

    /* ---- portadores-compromiso.html (Moment 3 + final) ---- */
    'm3.title':     'What this means in practice',
    'm3.sub':       'Four things we want you to know before continuing.',
    'm3.confirmed': '✓ Confirmed',
    'm3.a1.header': 'Your participation is entirely voluntary',
    'm3.a1.btn':    'Understood, and I accept',
    'm3.a2.header': 'You\'ll have access to the follow-up App',
    'm3.a2.btn':    'Understood, and I\'m interested',
    'm3.a3.header': 'Your participation places you in a favorable position',
    'm3.a3.text':   'The people who are part of the follow-up program are the ones we know best, the ones we have the most data on, and the ones we can contact first when new clinical trials open. We can\'t guarantee you access — each trial\'s criteria are set by the trial itself — but we can tell you that being here is the best way to be prepared when that moment arrives.',
    'm3.a3.btn':    'Understood',
    'm3.a4.header': 'This is a long-term relationship',
    'm3.a4.text':   'The program isn\'t a one-off visit or a questionnaire you answer once. It\'s ongoing accompaniment — with periodic visits, information updates, Info updates, and real human contact. We commit to being present for as long as you want us to be.',
    'm3.a4.btn':    'Understood, and I want to take part',
    'final.eyebrow':           'Next step',
    'final.text':              'You\'ve taken an important step — not only toward the program, but toward yourself. The team will get in touch with you shortly to explain the next steps calmly and without rush. If in the meantime you have any questions, here is how to find us.',
    'final.contacts.label':    'How to find us',
    'final.form.eyebrow':      'Next step',
    'final.form.title':        'One last step so we can contact you',
    'final.form.text':         'If you\'d like the program team to get in touch with you, please share your ID number. This will allow us to identify you in our system and confirm your wish to participate. Your data is protected and will only be accessible to the research team.',
    'final.form.label.dni':    'ID number',
    'final.form.dni.hint':     '8 digits followed by a letter',
    'final.form.btn':          'Confirm my wish to participate',
    'final.notfound.title':    'We couldn\'t find your ID number',
    'final.notfound.text':     'We couldn\'t find your ID number in our system. You may not have been registered yet. Please contact the team directly so we can add you.',

    /* ---- Moment 3 (participation) ---- */
    'm3.a1.text':   'Nothing that happens within the program is subject to any obligation. You can decide at any time to stop participating, without affecting your medical care or your relationship with the team. You owe nothing to anyone here, and we demand nothing from you either.',
    'm3.a2.text':   'As a participant in the program, you\'ll have access to an application designed specifically for asymptomatic carriers. Over time, and if you wish, it will let you record aspects such as sleep quality, mood, cognitive function, and other relevant indicators — with the option for your live-in partner, if you have one, to contribute to that log as well, which aims to better understand the asymptomatic phase and the onset and/or progression of the disease.',

    /* ---- Sleep follow-up step ---- */
    'seguimiento.sueno.title': 'Sleep study',
    'seguimiento.sueno.text':  'Using polysomnography, we record what happens during sleep: movements, breathing, brain activity, and behavior. Certain sleep alterations — particularly those related to REM phase — can appear subtly before any other sign is detectable, and tracking them over time is part of the early-detection protocol.',

    /* ---- portadores-baja-pildoras.html ---- */
    'baja.title':       'We\'ve recorded your preference',
    'baja.text':        'From now on you won\'t receive any more emails about new Info updates. If at some point you change your mind, you can re-enable them from the Info updates section of the program.',
    'baja.link':        'Go to Info updates',
    'baja.error.title': 'Invalid link',
    'baja.error.text':  'This link is invalid or has already been used. If you\'d like to manage your preferences, please contact the team.',

    /* ---- portadores-reflexion.html — entry teaser ---- */
    'reflexion.teaser.text': 'Wondering whether it\'s worth knowing which group you\'re in?',
    'reflexion.teaser.sub':  'We\'ve thought through specific situations that may help you reflect.',
    'reflexion.teaser.btn':  'I want to reflect on this',

    /* ---- portadores-reflexion.html — header ---- */
    'reflexion.hero.title': 'The value of knowing',
    'reflexion.hero.sub':   'There\'s no right answer. But there are specific situations that can help you decide whether you want to know where you stand right now.',

    /* ---- portadores-reflexion.html — card 1: inactive phase ---- */
    'reflexion.c1.label':    'Standard follow-up',
    'reflexion.c1.title':    'If follow-up places you in an inactive phase',
    'reflexion.c1.sub':      '15 situations in which this information may make a real difference in your everyday life.',
    'reflexion.c1.s1.h':  'You\'re thinking about accepting a demanding job or a move to a new city.',
    'reflexion.c1.s1.b':  'Knowing there\'s no detectable activity can give you more peace of mind to take on that project without feeling like you\'re giving up a critical window.',
    'reflexion.c1.s2.h':  'You want to start a family or expand the one you already have.',
    'reflexion.c1.s2.b':  'It can help you live through that stage with less sense of urgency and more room to decide calmly.',
    'reflexion.c1.s3.h':  'You\'ve spent years reading every slip or lapse of memory as a warning sign.',
    'reflexion.c1.s3.b':  'Having objective data can reduce hypervigilance and restore your confidence in daily life.',
    'reflexion.c1.s4.h':  'You struggle to make medium- or long-term plans.',
    'reflexion.c1.s4.b':  'This information can give you emotional permission to think in years again, not just months.',
    'reflexion.c1.s5.h':  'You have a very anxious personality and avoid thinking about the topic.',
    'reflexion.c1.s5.b':  'Knowing you\'re in a phase with no activity can turn follow-up into a source of relief rather than threat.',
    'reflexion.c1.s6.h':  'You\'ve put off important financial decisions.',
    'reflexion.c1.s6.b':  'Buying a home, starting a business, or reorganizing savings can feel more viable when the scenario doesn\'t point to immediacy.',
    'reflexion.c1.s7.h':  'Your family lives with constant fear because of past history.',
    'reflexion.c1.s7.b':  'This classification can lower the collective tension and help separate your current situation from past family stories.',
    'reflexion.c1.s8.h':  'You want to keep caring for others without feeling "on the edge".',
    'reflexion.c1.s8.b':  'If you\'re a caregiver, mother, father, or family anchor, it can give you more calm to keep filling that role.',
    'reflexion.c1.s9.h':  'You\'re considering traveling, moving abroad, or spending a long stretch overseas.',
    'reflexion.c1.s9.b':  'Being in an inactive phase can give you more freedom to do it without feeling like you\'re stepping away just when you shouldn\'t.',
    'reflexion.c1.s10.h': 'You need to reclaim an identity that doesn\'t revolve only around genetic risk.',
    'reflexion.c1.s10.b': 'It can help you move from being someone in waiting to being someone who is living.',
    'reflexion.c1.s11.h': 'You\'re worried about entering a program and leaving more anxious than you came in.',
    'reflexion.c1.s11.b': 'For some people, an inactivity classification confirms that follow-up doesn\'t box them in — it walks alongside them.',
    'reflexion.c1.s12.h': 'You find it hard to explain your situation to your partner or your children.',
    'reflexion.c1.s12.b': 'Having a concrete and less alarming way to describe where you stand can make calmer conversations possible.',
    'reflexion.c1.s13.h': 'You feel guilty for thinking about personal projects.',
    'reflexion.c1.s13.b': 'This information can help you give yourself permission to pursue a civil-service exam, start something, study, or simply enjoy life without feeling you\'re looking the other way.',
    'reflexion.c1.s14.h': 'You need to tell genetic risk apart from actual disease.',
    'reflexion.c1.s14.b': 'Being placed in an inactive phase reinforces that distinction in a very tangible way.',
    'reflexion.c1.s15.h': 'You want to be inside the system, but without living on maximum alert.',
    'reflexion.c1.s15.b': 'This situation lets you feel protected, informed, and accompanied, without everything getting read as urgency.',

    /* ---- portadores-reflexion.html — card 2: silent active phase ---- */
    'reflexion.c2.label':    'Alert follow-up',
    'reflexion.c2.title':    'If follow-up places you in a silent active phase',
    'reflexion.c2.sub':      '18 situations in which this information may make a real difference in your everyday life.',
    'reflexion.c2.s1.h':  'You prefer an uncomfortable truth to endless uncertainty.',
    'reflexion.c2.s1.b':  'Even though it\'s harder news, it gives you a clear map from which to act.',
    'reflexion.c2.s2.h':  'You want to maximize your chances of accessing preventive trials.',
    'reflexion.c2.s2.b':  'This situation can place you precisely in the group most likely to benefit before symptoms appear.',
    'reflexion.c2.s3.h':  'The thought of finding out too late is distressing.',
    'reflexion.c2.s3.b':  'Knowing now may be hard, but it keeps you from reaching a point where opportunities are already gone.',
    'reflexion.c2.s4.h':  'You need to prioritize important family decisions.',
    'reflexion.c2.s4.b':  'It can help you bring forward conversations, organize support, and decide which matters you don\'t want to leave pending.',
    'reflexion.c2.s5.h':  'You\'re clinically well, and that\'s exactly why you want to act while you still are.',
    'reflexion.c2.s5.b':  'The upside is being able to prepare from a place of strength, not decline.',
    'reflexion.c2.s6.h':  'You live far from an expert center.',
    'reflexion.c2.s6.b':  'This information can justify getting closer sooner, reorganizing visits, or sorting out logistics without waiting for obvious problems to appear.',
    'reflexion.c2.s7.h':  'Your work requires a lot of planning.',
    'reflexion.c2.s7.b':  'You can anticipate projects, delegations, handovers, or changes of pace in an orderly way rather than a hurried one.',
    'reflexion.c2.s8.h':  'You\'re worried about leaving administrative or financial burdens unresolved.',
    'reflexion.c2.s8.b':  'Having more precise information can help you organize documents, insurance, estate matters, or legal decisions with time and clarity.',
    'reflexion.c2.s9.h':  'Your partner needs to better understand the moment you\'re both living through.',
    'reflexion.c2.s9.b':  'The classification can provide shared language for talking about the present without yet entering a symptoms scenario.',
    'reflexion.c2.s10.h': 'You feel you\'ve been living in a fog of suspicions for some time.',
    'reflexion.c2.s10.b': 'For some people, naming the situation reduces the suffering of ambiguity, even when the content isn\'t what they hoped for.',
    'reflexion.c2.s11.h': 'You want to take an active role in research with immediate meaning.',
    'reflexion.c2.s11.b': 'Being in this phase can turn your follow-up into an especially valuable contribution for speeding up preventive therapies.',
    'reflexion.c2.s12.h': 'You need to reorganize life priorities.',
    'reflexion.c2.s12.b': 'It can help you decide what you want to do now: spend more time with certain people, travel, close chapters, or open new ones.',
    'reflexion.c2.s13.h': 'Your family has lived through previous cases and you fear repeating the story of arriving too late.',
    'reflexion.c2.s13.b': 'The upside is breaking that pattern through early vigilance and preparation.',
    'reflexion.c2.s14.h': 'You find it easier to face what\'s hard when you know what to do next.',
    'reflexion.c2.s14.b': 'The usefulness of this information lies in the fact that it activates concrete steps: more follow-up, more focus, and more preparation.',
    'reflexion.c2.s15.h': 'You want to be on the front line of therapeutic news.',
    'reflexion.c2.s15.b': 'Follow-up is the route to receiving personalized information about options that are available or coming soon.',
    'reflexion.c2.s16.h': 'You fear that doing nothing may be worse than knowing.',
    'reflexion.c2.s16.b': 'In this group, knowing your situation can transform the feeling of passivity into one of informed action.',
    'reflexion.c2.s17.h': 'You need to decide who to tell and how.',
    'reflexion.c2.s17.b': 'Knowing where you stand can help you communicate more honestly and concretely with the people in your support network.',
    'reflexion.c2.s18.h': 'You want to make the most of useful time, not react late.',
    'reflexion.c2.s18.b': 'That may be the most positive value of this situation: you\'re still asymptomatic, but you\'re no longer in the dark.',

    /* ---- portadores-reflexion.html — closing & back ---- */
    'reflexion.closing':     'Being in one group or the other doesn\'t change who you are, but it can significantly change how you plan, how you decide, and how you take advantage of the opportunities for follow-up, support, and early access to new therapies.',
    'reflexion.back':        'Back to the program',
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
