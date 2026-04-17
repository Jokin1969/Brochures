/* portadores-compromiso.js — Lógica del paso de compromisos y aceptación */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Afirmaciones                                                         */
  /* ------------------------------------------------------------------ */
  function initAffirmations() {
    var cards   = document.querySelectorAll('.affirmation-card');
    var btnNext = document.getElementById('btn-next-m3');
    var confirmed = 0;

    cards.forEach(function (card, i) {
      var btn = card.querySelector('.btn-confirm');
      if (!btn) return;
      btn.addEventListener('click', function () {
        if (card.classList.contains('affirmation-card--confirmed')) return;
        card.classList.add('affirmation-card--confirmed');
        confirmed++;

        if (confirmed < cards.length) {
          var next = cards[confirmed];
          if (next) {
            next.classList.add('affirmation-card--unlocked');
            setTimeout(function () {
              next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 200);
          }
        } else {
          /* Todas confirmadas → habilitar Continuar */
          if (btnNext) {
            btnNext.disabled = false;
            setTimeout(function () {
              btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
          }
        }
      });
    });

    if (btnNext) {
      btnNext.addEventListener('click', function () {
        showFormStep();
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Mostrar paso del formulario                                          */
  /* ------------------------------------------------------------------ */
  function showFormStep() {
    var stepAffirmations = document.getElementById('step-affirmations');
    var stepForm         = document.getElementById('step-form');
    if (stepAffirmations) stepAffirmations.style.display = 'none';
    if (stepForm) {
      stepForm.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    initAceptarForm();
  }

  /* ------------------------------------------------------------------ */
  /* Formulario de aceptación                                             */
  /* ------------------------------------------------------------------ */
  function initAceptarForm() {
    var form = document.getElementById('form-aceptar');
    if (!form || form.dataset.initialized) return;
    form.dataset.initialized = 'true';

    var dniInput = document.getElementById('aceptar-dni');
    if (dniInput) {
      dniInput.addEventListener('input', function () {
        var pos = this.selectionStart;
        this.value = this.value.toUpperCase();
        this.setSelectionRange(pos, pos);
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      handleAceptar();
    });

    var prevBtn = document.getElementById('btn-prev-m4');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        sessionStorage.clear();
        var stepForm         = document.getElementById('step-form');
        var stepAffirmations = document.getElementById('step-affirmations');
        if (stepForm)         stepForm.style.display         = 'none';
        if (stepAffirmations) stepAffirmations.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function handleAceptar() {
    var dni = (document.getElementById('aceptar-dni').value || '').trim().toUpperCase();
    var btn = document.getElementById('btn-aceptar');

    if (!dni) {
      showAceptarError('Por favor, introduce tu DNI antes de continuar.');
      return;
    }
    if (!/^\d{8}[A-Z]$/.test(dni)) {
      showAceptarError('El DNI debe tener 8 dígitos seguidos de una letra (por ejemplo: 12345678A).');
      return;
    }

    hideAceptarError();
    btn.disabled = true;
    var btnSpan = btn.querySelector('span[data-i18n]');
    if (btnSpan) btnSpan.textContent = 'Enviando…';

    fetch('/api/portadores/aceptar', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ dni: dni })
    })
    .then(function (r) {
      if (r.ok) return r.json().then(function (data) { showWelcome(data); });
      if (r.status === 404) { showNotFoundStep(); return; }
      throw new Error('server-error');
    })
    .catch(function () {
      showAceptarError('Ha ocurrido un error de conexión. Por favor, contacta directamente con el equipo.');
      btn.disabled = false;
      if (btnSpan) btnSpan.textContent = 'Confirmar mi deseo de participar';
    });
  }

  function showAceptarError(msg) {
    var el = document.getElementById('aceptar-error');
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function hideAceptarError() {
    var el = document.getElementById('aceptar-error');
    if (el) el.style.display = 'none';
  }

  /* ------------------------------------------------------------------ */
  /* Bienvenida personalizada                                             */
  /* ------------------------------------------------------------------ */
  function showWelcome(data) {
    var stepForm    = document.getElementById('step-form');
    var stepWelcome = document.getElementById('step-welcome');
    var titleEl     = document.getElementById('welcome-title');

    if (stepForm)    stepForm.style.display    = 'none';
    if (!stepWelcome) return;

    /* Texto de bienvenida según género */
    var nombre = data.nombre || '';
    var genero = data.genero || '';
    var greeting;
    if (genero === 'masculino') {
      greeting = nombre ? 'Bienvenido, ' + nombre : 'Bienvenido';
    } else if (genero === 'femenino') {
      greeting = nombre ? 'Bienvenida, ' + nombre : 'Bienvenida';
    } else {
      greeting = nombre ? 'Bienvenido/a, ' + nombre : 'Bienvenido/a';
    }
    if (titleEl) titleEl.textContent = greeting;

    stepWelcome.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------------------------------------------------------ */
  /* DNI no encontrado                                                    */
  /* ------------------------------------------------------------------ */
  function showNotFoundStep() {
    var stepForm     = document.getElementById('step-form');
    var stepNotFound = document.getElementById('step-notfound');
    if (stepForm)     stepForm.style.display     = 'none';
    if (!stepNotFound) return;
    stepNotFound.style.display = 'block';
    setTimeout(function () {
      stepNotFound.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* Inicialización                                                       */
  /* ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(function () { document.body.classList.add('loaded'); });
    if (typeof applyTranslations === 'function') applyTranslations();

    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === (localStorage.getItem('pg-lang') || 'es'));
      btn.addEventListener('click', function () {
        if (typeof setLang === 'function') setLang(this.dataset.lang);
      });
    });

    /* Scroll center */
    setTimeout(function () {
      var main = document.querySelector('.pg-main');
      if (main) main.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);

    initAffirmations();
  });
})();
