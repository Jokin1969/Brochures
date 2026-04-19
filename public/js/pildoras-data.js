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
/* Campo opcional `ilustracion`: objeto con ruta por idioma (usa la clave */
/* `default` como fallback). La ilustración se muestra en la vista       */
/* expandida, entre el resumen y el desarrollo. Ejemplo:                 */
/*                                                                         */
/*   ilustracion: {                                                       */
/*     es:      '/assests/ilustraciones/foo.svg',                        */
/*     default: '/assests/ilustraciones/foo-sin-texto.svg',              */
/*   }                                                                    */
/*                                                                         */
/* Mecanismo de *lazy linking* (ver render en portadores-pildoras.html): */
/* en el texto de `desarrollo`, los términos escritos como               */
/*   <strong>RT-QuIC</strong>  o  <strong>PMCA</strong>                  */
/* se convierten automáticamente en enlaces a las píldoras `rt-quic` /   */
/* `pmca` *si y solo si* esas píldoras existen en el array PILDORAS.    */
/* Mientras no existan, los términos se renderizan como negrita simple.  */
/* Para activar el enlace, basta con añadir la nueva entrada al array.   */
/*                                                                         */
/* Para añadir una píldora nueva:                                         */
/*   1) añade una entrada al array PILDORAS,                              */
/*   2) añade las 5 claves traducidas a los 5 idiomas en translations.js.*/
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
  {
    id:        'puncion-lumbar',
    categoria: 'pruebas',
    fecha:     '2026-04-19',
    destacada: false,
    ilustracion: {
      es:      '/assests/ilustraciones/puncion-lumbar.svg',
      default: '/assests/ilustraciones/puncion-lumbar-sin-texto.svg',
    },
  },
];
