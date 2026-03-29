/* portadores-programa.js — Lógica interactiva del flujo de participación */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Estado en sessionStorage                                             */
  /* ------------------------------------------------------------------ */
  var STATE_KEY = 'pg-state';

  function getState() {
    try {
      var s = sessionStorage.getItem(STATE_KEY);
      return s ? JSON.parse(s) : defaultState();
    } catch (e) {
      return defaultState();
    }
  }

  function defaultState() {
    return {
      momento: 0,
      m1choice: null,
      m2checks: [false, false, false],
      m3confirmed: [false, false, false, false]
    };
  }

  function saveState(state) {
    try { sessionStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ------------------------------------------------------------------ */
  /* Progress dots                                                        */
  /* ------------------------------------------------------------------ */
  function updateProgress(active) {
    var dots = document.querySelectorAll('.pg-dot');
    dots.forEach(function (dot, i) {
      dot.classList.remove('pg-dot--active', 'pg-dot--done');
      if (i < active)      dot.classList.add('pg-dot--done');
      else if (i === active) dot.classList.add('pg-dot--active');
    });
  }

  /* ------------------------------------------------------------------ */
  /* Reveal un momento                                                    */
  /* ------------------------------------------------------------------ */
  function revealMomento(n) {
    var el = document.getElementById('momento-' + n);
    if (!el) return;
    el.classList.add('momento--active');
    setTimeout(function () {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* Reveal un elemento oculto con animación                             */
  /* ------------------------------------------------------------------ */
  function revealEl(el) {
    if (!el) return;
    el.style.display = 'block';
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = 'momentoReveal 0.5s ease forwards';
    setTimeout(function () {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 0 — Confirmación de lectura                                 */
  /* ------------------------------------------------------------------ */
  function initMomento0() {
    var btn = document.getElementById('btn-m0-continuar');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var state = getState();
      state.momento = 1;
      saveState(state);
      revealMomento(1);
      updateProgress(1);
    });
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 1 — ¿Quieres participar?                                    */
  /* ------------------------------------------------------------------ */
  function initMomento1() {
    document.querySelectorAll('#momento-1 .choice-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var choice = this.dataset.choice;
        handleM1Choice(choice);
      });
    });
  }

  function handleM1Choice(choice) {
    var state = getState();
    state.m1choice = choice;
    saveState(state);

    /* Marcar seleccionada */
    document.querySelectorAll('#momento-1 .choice-card').forEach(function (c) {
      c.classList.toggle('choice-card--selected', c.dataset.choice === choice);
    });

    if (choice === 'A') {
      setTimeout(function () {
        state.momento = 2;
        saveState(state);
        revealMomento(2);
        updateProgress(2);
      }, 380);
    } else {
      /* B o C → mostrar cierre correspondiente */
      setTimeout(function () {
        showClosure(choice);
      }, 380);
    }
  }

  function showClosure(type) {
    var block = document.getElementById('closure-' + type);
    if (!block) return;
    block.classList.add('closure-block--show');
    setTimeout(function () {
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 2 — Verificación de comprensión                             */
  /* Usa data-check y data-answer para evitar IDs duplicados en el bucle */
  /* ------------------------------------------------------------------ */
  function initMomento2() {
    var m2 = document.getElementById('momento-2');
    if (!m2) return;
    m2.addEventListener('click', function (e) {
      var btn = e.target.closest('.check-btn[data-check]');
      if (!btn) return;
      var checkN = parseInt(btn.dataset.check, 10);
      var answer = btn.dataset.answer === 'yes';
      handleCheck(checkN, answer);
    });
  }

  function handleCheck(checkN, answer) {
    if (answer) {
      /* Ocultar explicación si estaba visible */
      var exp = document.getElementById('exp-2' + checkN);
      if (exp) exp.classList.remove('explanation-block--show');

      var state = getState();
      state.m2checks[checkN - 1] = true;
      saveState(state);

      if (checkN < 3) {
        /* Revelar siguiente check */
        var nextEl = document.getElementById('check-2' + (checkN + 1));
        if (nextEl) revealEl(nextEl);
      } else {
        /* Todos los checks OK → Momento 3 */
        setTimeout(function () {
          state.momento = 3;
          saveState(state);
          revealMomento(3);
          updateProgress(3);
        }, 300);
      }
    } else {
      /* Mostrar explicación y bucle */
      var expBlock = document.getElementById('exp-2' + checkN);
      if (expBlock) {
        expBlock.classList.add('explanation-block--show');
        setTimeout(function () {
          expBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 3 — Afirmaciones                                            */
  /* ------------------------------------------------------------------ */
  function initMomento3() {
    var cards = document.querySelectorAll('#momento-3 .affirmation-card');

    cards.forEach(function (card, i) {
      var btn = card.querySelector('.btn-confirm');
      if (!btn) return;
      btn.addEventListener('click', function () {
        confirmAffirmation(cards, i);
      });
    });
  }

  function confirmAffirmation(cards, i) {
    cards[i].classList.add('affirmation-card--confirmed');

    var state = getState();
    state.m3confirmed[i] = true;
    saveState(state);

    var confirmed = state.m3confirmed.filter(Boolean).length;

    if (confirmed < cards.length) {
      /* Desbloquear siguiente tarjeta */
      var next = cards[confirmed];
      if (next) {
        next.classList.add('affirmation-card--unlocked');
        setTimeout(function () {
          next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    } else {
      /* Todas confirmadas → bloque final */
      setTimeout(showFinalBlock, 400);
    }
  }

  function showFinalBlock() {
    var fb = document.getElementById('final-block');
    if (!fb) return;
    fb.classList.add('final-block--show');
    setTimeout(function () {
      fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    initAceptarForm();
  }

  /* ------------------------------------------------------------------ */
  /* Formulario de aceptación (paso previo al bloque de gracias)         */
  /* ------------------------------------------------------------------ */
  function initAceptarForm() {
    var form = document.getElementById('form-aceptar');
    if (!form || form.dataset.initialized) return;
    form.dataset.initialized = 'true';

    /* Forzar mayúsculas en DNI al escribir */
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
  }

  function handleAceptar() {
    var nombre    = (document.getElementById('aceptar-nombre').value    || '').trim();
    var apellidos = (document.getElementById('aceptar-apellidos').value || '').trim();
    var dni       = (document.getElementById('aceptar-dni').value       || '').trim().toUpperCase();
    var btn       = document.getElementById('btn-aceptar');

    /* Validación */
    if (!nombre || !apellidos || !dni) {
      showAceptarError('Por favor, completa todos los campos antes de continuar.');
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
      if (r.ok)             return r.json().then(function () { showThanksStep(); });
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

  function showThanksStep() {
    var formStep   = document.getElementById('final-form-step');
    var thanksStep = document.getElementById('final-thanks-step');
    if (formStep)   formStep.style.display = 'none';
    if (!thanksStep) return;
    thanksStep.style.display   = 'block';
    thanksStep.style.animation = 'momentoReveal 0.55s ease';
    setTimeout(function () {
      thanksStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function showNotFoundStep() {
    var formStep     = document.getElementById('final-form-step');
    var notFoundStep = document.getElementById('final-notfound-step');
    if (formStep)     formStep.style.display = 'none';
    if (!notFoundStep) return;
    notFoundStep.style.display   = 'block';
    notFoundStep.style.animation = 'momentoReveal 0.55s ease';
    setTimeout(function () {
      notFoundStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* Restaurar estado de sesión                                           */
  /* ------------------------------------------------------------------ */
  function restoreState() {
    var state = getState();

    /* Revelar hasta el momento guardado */
    for (var m = 0; m <= state.momento; m++) {
      var el = document.getElementById('momento-' + m);
      if (el) el.classList.add('momento--active');
    }
    updateProgress(state.momento);

    /* Momento 1: restaurar selección si existe */
    if (state.m1choice) {
      var selected = document.querySelector('[data-choice="' + state.m1choice + '"]');
      if (selected) selected.classList.add('choice-card--selected');
      if (state.m1choice === 'B' || state.m1choice === 'C') showClosure(state.m1choice);
    }

    /* Momento 2: restaurar checks */
    state.m2checks.forEach(function (done, idx) {
      if (!done) return;
      var checkEl = document.getElementById('check-2' + (idx + 2));
      if (checkEl) checkEl.style.display = 'block';
    });

    /* Momento 3: restaurar afirmaciones */
    var cards = document.querySelectorAll('#momento-3 .affirmation-card');
    var firstUnconfirmed = -1;
    state.m3confirmed.forEach(function (done, idx) {
      if (done && cards[idx]) cards[idx].classList.add('affirmation-card--confirmed');
      if (!done && firstUnconfirmed === -1) firstUnconfirmed = idx;
    });
    var confirmed = state.m3confirmed.filter(Boolean).length;
    if (confirmed === cards.length && cards.length > 0) {
      showFinalBlock();
    } else if (cards[confirmed]) {
      cards[confirmed].classList.add('affirmation-card--unlocked');
    } else if (cards[0]) {
      cards[0].classList.add('affirmation-card--unlocked');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Inicialización                                                       */
  /* ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    /* Fade-in de la página (viene de portadores.html con fade-out) */
    requestAnimationFrame(function () {
      document.body.classList.add('loaded');
    });

    /* Aplicar traducciones */
    if (typeof applyTranslations === 'function') applyTranslations();

    /* Selector de idioma */
    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (typeof setLang === 'function') setLang(this.dataset.lang);
      });
    });

    /* Desbloquear primera tarjeta de momento 3 por defecto */
    var firstCard = document.querySelector('#momento-3 .affirmation-card');
    if (firstCard) firstCard.classList.add('affirmation-card--unlocked');

    /* Restaurar estado guardado */
    restoreState();

    /* Iniciar handlers de cada momento */
    initMomento0();
    initMomento1();
    initMomento2();
    initMomento3();
  });
})();
