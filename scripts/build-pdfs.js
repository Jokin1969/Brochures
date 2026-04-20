/* ============================================================
   Generador de PDFs estáticos para la web Brochures.
   ------------------------------------------------------------
   Arranca un servidor Express local sobre /public, lanza Chromium
   en modo headless con Puppeteer, navega a las páginas "imprimir"
   de cada idioma y guarda el PDF resultante en /public/assets/pdfs/.

   Ejecutar con: node scripts/build-pdfs.js
   (requiere devDependency puppeteer; se instala bajo demanda,
    no se necesita para el despliegue normal en Railway.)
   ============================================================ */

const path    = require('path');
const fs      = require('fs');
const express = require('express');

const PDF_TARGETS = [
  {
    source: 'portadores-imprimir.html',
    output: 'programa-es.pdf',
    title:  'Programa de seguimiento preclínico (ES)',
  },
  /* Cuando se traduzcan, añadir aquí:
     { source: 'eu/portadores-imprimir.html', output: 'programa-eu.pdf', … },
     { source: 'ca/portadores-imprimir.html', output: 'programa-ca.pdf', … },
     { source: 'gl/portadores-imprimir.html', output: 'programa-gl.pdf', … },
     { source: 'en/portadores-imprimir.html', output: 'programa-en.pdf', … },
  */
];

const PDF_OPTIONS = {
  format:          'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin:          { top: '0', bottom: '0', left: '0', right: '0' },
};

async function main() {
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (e) {
    console.error('puppeteer no está instalado. Instala con:');
    console.error('  npm install --no-save puppeteer');
    process.exit(1);
  }

  const publicDir = path.join(__dirname, '..', 'public');
  const outDir    = path.join(publicDir, 'assets', 'pdfs');
  fs.mkdirSync(outDir, { recursive: true });

  /* Servidor local */
  const app = express();
  app.use(express.static(publicDir));
  const server = app.listen(0);
  const port = server.address().port;
  console.log(`Servidor local en http://localhost:${port}`);

  /* Navegador */
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const target of PDF_TARGETS) {
      const url     = `http://localhost:${port}/${target.source}`;
      const outPath = path.join(outDir, target.output);

      console.log(`\n> ${target.title}`);
      console.log(`  fuente: ${url}`);
      console.log(`  salida: ${outPath}`);

      const page = await browser.newPage();
      await page.emulateMediaType('print');
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.pdf({ ...PDF_OPTIONS, path: outPath });
      await page.close();

      const bytes = fs.statSync(outPath).size;
      console.log(`  ${(bytes / 1024).toFixed(1)} KB`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log('\nPDFs generados correctamente.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
