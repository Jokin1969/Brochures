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
  /* Progress dots  (5 dots → momentos 0-4, momento-5 es terminal)       */
  /* ------------------------------------------------------------------ */
  function updateProgress(active) {
    var dots = document.querySelectorAll('.pg-dot');
    dots.forEach(function (dot, i) {
      dot.classList.remove('pg-dot--active', 'pg-dot--done');
      if (i < active)       dot.classList.add('pg-dot--done');
      else if (i === active) dot.classList.add('pg-dot--active');
    });
  }

  /* ------------------------------------------------------------------ */
  /* showMomento — muestra un único paso ocultando los demás             */
  /* ------------------------------------------------------------------ */
  window.showMomento = function (n) {
    document.querySelectorAll('.momento').forEach(function (el) {
      el.classList.remove('momento--active');
    });

    var el = document.getElementById('momento-' + n);
    if (!el) return;
    el.classList.add('momento--active');
    setTimeout(function () {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);

    var state = getState();
    state.momento = n;
    saveState(state);

    /* Actualizar dots: 0→0, 1→1, 2→2, 3→3, 4→3, 5→all done */
    var dotIndex = Math.min(n, 3);
    if (n === 5) {
      updateProgress(99); /* todos done */
    } else {
      updateProgress(dotIndex);
    }

    /* Sincronizar estado de botones Siguiente */
    syncNextButtons(state);

    /* Restaurar cierre si volvemos a momento-1 */
    if (n === 1 && state.m1choice) {
      document.querySelectorAll('#momento-1 .choice-card').forEach(function (c) {
        c.classList.toggle('choice-card--selected', c.dataset.choice === state.m1choice);
      });
      if (state.m1choice === 'B' || state.m1choice === 'C') {
        showClosure(state.m1choice);
      }
    }
  };

  function syncNextButtons(state) {
    var btn2 = document.getElementById('btn-next-m2');
    if (btn2) btn2.disabled = !state.m2checks.every(Boolean);

    var btn3 = document.getElementById('btn-next-m3');
    if (btn3) btn3.disabled = !state.m3confirmed.every(Boolean);
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 0 — Confirmación de lectura                                 */
  /* ------------------------------------------------------------------ */
  function initMomento0() {
    var btn = document.getElementById('btn-m0-continuar');
    if (!btn) return;
    btn.addEventListener('click', function () {
      showMomento(1);
    });
  }

  /* ------------------------------------------------------------------ */
  /* MOMENTO 1 — ¿Quieres participar?                                    */
  /* ------------------------------------------------------------------ */
  function initMomento1() {
    document.querySelectorAll('#momento-1 .choice-card').forEach(function (card) {
      card.addEventListener('click', function () {
        handleM1Choice(this.dataset.choice);
      });
    });

    var prevBtn = document.getElementById('btn-m1-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        sessionStorage.clear();
        showMomento(0);
      });
    }
  }

  function handleM1Choice(choice) {
    var state = getState();
    state.m1choice = choice;
    saveState(state);

    document.querySelectorAll('#momento-1 .choice-card').forEach(function (c) {
      c.classList.toggle('choice-card--selected', c.dataset.choice === choice);
    });

    if (choice === 'A') {
      setTimeout(function () { window.location.href = '/portadores-paso-1.html'; }, 380);
    } else if (choice === 'B') {
      setTimeout(function () { window.location.href = '/portadores-no-preparado.html'; }, 380);
    } else if (choice === 'C') {
      setTimeout(function () { window.location.href = '/portadores-dudas.html'; }, 380);
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
      var exp = document.getElementById('exp-2' + checkN);
      if (exp) exp.classList.remove('explanation-block--show');

      var state = getState();
      state.m2checks[checkN - 1] = true;
      saveState(state);

      if (checkN < 3) {
        var nextEl = document.getElementById('check-2' + (checkN + 1));
        if (nextEl) revealEl(nextEl);
      } else {
        /* Todos los checks OK → habilitar Siguiente */
        var btn = document.getElementById('btn-next-m2');
        if (btn) {
          btn.disabled = false;
          setTimeout(function () {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 200);
        }
      }
    } else {
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
      var next = cards[confirmed];
      if (next) {
        next.classList.add('affirmation-card--unlocked');
        setTimeout(function () {
          next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    } else {
      /* Todas confirmadas → habilitar Siguiente */
      var btn = document.getElementById('btn-next-m3');
      if (btn) {
        btn.disabled = false;
        setTimeout(function () {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
      }
    }
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
  /* MOMENTO 4 — Formulario de aceptación (solo DNI)                     */
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
      if (r.ok)             return r.json().then(function () { showMomento(5); });
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

  function showNotFoundStep() {
    var formStep     = document.getElementById('final-form-step');
    var notFoundStep = document.getElementById('final-notfound-step');
    var prevBtn      = document.getElementById('btn-prev-m4');
    if (formStep)     formStep.style.display   = 'none';
    if (prevBtn)      prevBtn.style.display    = 'none';
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

    /* Mostrar solo el paso guardado */
    showMomento(state.momento);

    /* Momento 2: restaurar checks */
    state.m2checks.forEach(function (done, idx) {
      if (!done) return;
      var checkEl = document.getElementById('check-2' + (idx + 2));
      if (checkEl) checkEl.style.display = 'block';
    });

    /* Momento 3: restaurar afirmaciones */
    var cards = document.querySelectorAll('#momento-3 .affirmation-card');
    state.m3confirmed.forEach(function (done, idx) {
      if (done && cards[idx]) cards[idx].classList.add('affirmation-card--confirmed');
    });
    var confirmed = state.m3confirmed.filter(Boolean).length;
    if (confirmed < cards.length && cards[confirmed]) {
      cards[confirmed].classList.add('affirmation-card--unlocked');
    } else if (cards[0] && confirmed === 0) {
      cards[0].classList.add('affirmation-card--unlocked');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Inicialización                                                       */
  /* ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    requestAnimationFrame(function () {
      document.body.classList.add('loaded');
    });

    if (typeof applyTranslations === 'function') applyTranslations();

    document.querySelectorAll('.lang-btn[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (typeof setLang === 'function') setLang(this.dataset.lang);
      });
    });

    /* Desbloquear primera tarjeta del momento 3 */
    var firstCard = document.querySelector('#momento-3 .affirmation-card');
    if (firstCard) firstCard.classList.add('affirmation-card--unlocked');

    restoreState();

    initMomento0();
    initMomento1();
    initMomento2();
    initMomento3();
    initAceptarForm();
  });
})();
