/* ===================================================================== */
/* Píldoras de información — datos                                         */
/* ===================================================================== */
/*                                                                         */
/* Cada píldora declara aquí únicamente sus metadatos (id, categoría,     */
/* fecha, destacada). El contenido traducible (título, resúmenes,         */
/* desarrollo, conclusión) vive en translations.js bajo las claves:      */
/*                                                                         */
/*   pildoras.<id>.titulo                                                 */
/*   pildoras.<id>.resumenCorto                                           */
/*   pildoras.<id>.resumen                                                */
/*   pildoras.<id>.desarrollo      (acepta HTML básico: <p>, <ul>, etc.) */
/*   pildoras.<id>.conclusion                                             */
/*                                                                         */
/* Para añadir una píldora nueva:                                         */
/*   1) añade una entrada al array PILDORAS,                              */
/*   2) añade las 5 claves traducidas a los 5 idiomas en translations.js.*/
/*                                                                         */
/* Plantilla:                                                              */
/*                                                                         */
/*   {                                                                     */
/*     id:        'biopsia-piel',                                         */
/*     categoria: 'pruebas',         // pruebas | ciencia | horizonte    */
/*     fecha:     '2026-05-10',      // ISO YYYY-MM-DD                   */
/*     destacada: false,             // true = ancho completo, arriba    */
/*   }                                                                    */
/*                                                                         */
/* CATEGORÍAS                                                              */
/*   pruebas     — procedimientos del seguimiento                         */
/*   ciencia     — técnicas de análisis de las muestras                   */
/*   horizonte   — terapias en desarrollo                                 */
/*   bienvenida  — especial, introductoria, siempre visible y destacada   */
/*                                                                         */
/* ===================================================================== */

const PILDORAS = [
  {
    id:        'bienvenida',
    categoria: 'bienvenida',
    fecha:     '2026-04-19',
    destacada: true,
  },
  {
    id:        'rmn',
    categoria: 'pruebas',
    fecha:     '2026-04-19',
    destacada: false,
  },
];
