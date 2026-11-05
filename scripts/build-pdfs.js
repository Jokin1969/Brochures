/* ============================================================
   Generador de PDFs estáticos por idioma para la web Brochures.
   ------------------------------------------------------------
   Arranca un servidor Express local sobre /public, abre cada
   página de idioma (/{lang}/portadores.html) en Chromium headless
   y guarda el PDF resultante en /public/assets/pdfs/programa-{lang}.pdf.

   El contenido se toma directamente de las páginas web ya traducidas
   (con los estilos @media print de portadores.css), de modo que el PDF
   siempre refleja la última versión publicada, sin duplicar traducción.

   Ejecutar con:  npm run build:pdfs
   Requiere Chromium vía Playwright (preinstalado en el entorno de build)
   o, como alternativa, Puppeteer. No se necesita para arrancar el
   servidor en producción; los PDFs generados se sirven como ficheros
   estáticos.
   ============================================================ */

const path    = require('path');
const fs      = require('fs');
const express = require('express');

/* Idiomas: 'es' se sirve en la raíz; el resto bajo /{lang}/ */
const LANGS = ['es', 'eu', 'ca', 'gl', 'en', 'pt', 'de', 'it', 'fr', 'sk', 'he'];

function sourcePath(lang) {
  return lang === 'es' ? 'portadores.html' : `${lang}/portadores.html`;
}

const PDF_OPTIONS = {
  format:            'A4',
  printBackground:   true,
  preferCSSPageSize: true,
  margin:            { top: '0', bottom: '0', left: '0', right: '0' },
};

/* Carga Chromium desde Playwright o, si no está, desde Puppeteer. */
async function launchBrowser() {
  try {
    const { chromium } = require('playwright');
    const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    return { browser, engine: 'playwright' };
  } catch (e) { /* intentamos puppeteer */ }
  try {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    return { browser, engine: 'puppeteer' };
  } catch (e) {
    console.error('No se encontró Playwright ni Puppeteer. Instala uno:');
    console.error('  npm install --no-save playwright  (y: npx playwright install chromium)');
    console.error('  o bien:  npm install --no-save puppeteer');
    process.exit(1);
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outDir    = path.join(publicDir, 'assets', 'pdfs');
  fs.mkdirSync(outDir, { recursive: true });

  const app = express();
  app.use(express.static(publicDir));
  const server = app.listen(0);
  const port   = server.address().port;
  console.log(`Servidor local en http://localhost:${port}`);

  const { browser, engine } = await launchBrowser();
  console.log(`Motor: ${engine}`);

  let ok = 0;
  try {
    for (const lang of LANGS) {
      const src     = sourcePath(lang);
      const url     = `http://localhost:${port}/${src}`;
      const outName = `programa-${lang}.pdf`;
      const outPath = path.join(outDir, outName);

      const page = await browser.newPage();
      await page.emulateMedia ? await page.emulateMedia({ media: 'print' })
                              : await page.emulateMediaType('print');
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(async () => {
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
      });
      await page.pdf({ ...PDF_OPTIONS, path: outPath });
      await page.close();

      const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(`  ${outName.padEnd(18)} <- ${src.padEnd(22)} (${kb} KB)`);
      ok++;
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`\n${ok}/${LANGS.length} PDFs generados en public/assets/pdfs/.`);
}

main().catch(err => { console.error(err); process.exit(1); });
