/* ===================================================================== */
/* Píldoras de información — datos                                         */
/* ===================================================================== */
/*                                                                         */
/* Para añadir una nueva píldora, mete un objeto nuevo al principio del   */
/* array PILDORAS (las más recientes primero, las más antiguas al final). */
/*                                                                         */
/* Plantilla:                                                              */
/*                                                                         */
/*   {                                                                     */
/*     id:    'p2',                     // identificador único            */
/*     date:  '2026-02-15',             // fecha en formato YYYY-MM-DD    */
/*     titles: {                                                           */
/*       es: 'Título en castellano',                                      */
/*       eu: '',   // deja vacío mientras traduces                        */
/*       ca: '',                                                           */
/*       gl: '',                                                           */
/*       en: '',                                                           */
/*     },                                                                  */
/*     bodies: {                                                           */
/*       es: 'Cuerpo de la píldora. Puede ser un párrafo o varios…',      */
/*       eu: '',                                                           */
/*       ca: '',                                                           */
/*       gl: '',                                                           */
/*       en: '',                                                           */
/*     },                                                                  */
/*   },                                                                    */
/*                                                                         */
/* NOTAS:                                                                  */
/*   • Los idiomas vacíos ('') caen automáticamente a castellano al       */
/*     renderizar la página, así puedes publicar una píldora nueva en    */
/*     castellano y traducirla al resto de idiomas cuando quieras.       */
/*   • Si cambias el texto castellano después de haber traducido a otros */
/*     idiomas, recuerda actualizar también las traducciones — si no     */
/*     quedarán desactualizadas pero no se romperá nada.                 */
/*   • En el cuerpo (bodies) puedes usar HTML básico: <strong>, <em>,    */
/*     <br>, <a href="…">…</a>. Evita etiquetas complejas.               */
/*                                                                         */
/* ===================================================================== */

const PILDORAS = [
  /* Añade aquí la primera píldora cuando la escribas, por ejemplo:

  {
    id:    'p1',
    date:  '2026-02-01',
    titles: {
      es: 'Primer resultado del ensayo clínico con ASOs',
      eu: '',
      ca: '',
      gl: '',
      en: '',
    },
    bodies: {
      es: 'En diciembre de 2025, el equipo internacional ha publicado los primeros datos sobre…',
      eu: '',
      ca: '',
      gl: '',
      en: '',
    },
  },

  */
];
