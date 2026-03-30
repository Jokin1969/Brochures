/* admin.js — Panel de administración Brochures */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Estado global                                                        */
  /* ------------------------------------------------------------------ */
  var pwd         = '';
  var portadores  = [];
  var filterMode  = 'all';   // 'all' | 'pendingEmail' | 'pendingResponse'
  var sortKey     = 'orden';
  var sortDir     = 'asc';
  var dragSrcIdx  = null;
  var nextIdPreview = '???';

  var API = '/api/admin/portadores';

  /* ------------------------------------------------------------------ */
  /* Utilidades de fecha                                                  */
  /* ------------------------------------------------------------------ */
  function fmtDate(iso) {
    if (!iso) return '';
    var d = new Date(iso);
    var pad = function (n) { return String(n).padStart(2, '0'); };
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear()
         + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /* ------------------------------------------------------------------ */
  /* Toast                                                                */
  /* ------------------------------------------------------------------ */
  function toast(msg, type) {
    var container = document.getElementById('toast');
    var el = document.createElement('div');
    el.className = 'toast-item' + (type ? ' toast-item--' + type : '');
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(function () {
      el.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(function () { el.remove(); }, 300);
    }, 2800);
  }

  /* ------------------------------------------------------------------ */
  /* Auth                                                                 */
  /* ------------------------------------------------------------------ */
  function getHeaders() {
    return { 'Authorization': 'Bearer ' + pwd, 'Content-Type': 'application/json' };
  }

  function showLogin() {
    document.getElementById('view-login').style.display = 'flex';
    document.getElementById('view-panel').classList.remove('active');
    setTimeout(function () {
      document.getElementById('input-password').focus();
    }, 50);
  }

  function tryLogin(candidate) {
    fetch(API, { headers: { 'Authorization': 'Bearer ' + candidate } })
      .then(function (r) {
        if (!r.ok) throw new Error('401');
        return r.json();
      })
      .then(function (data) {
        pwd = candidate;
        sessionStorage.setItem('admin-pwd', pwd);
        document.getElementById('view-login').style.display = 'none';
        document.getElementById('view-panel').classList.add('active');
        portadores = data.portadores || [];
        nextIdPreview = String((data.contador || 0) + 1).padStart(3, '0');
        renderTable();
        updateCount();
      })
      .catch(function () {
        var errEl = document.getElementById('login-error');
        errEl.classList.add('login-error--show');
        document.getElementById('input-password').select();
      });
  }

  /* ------------------------------------------------------------------ */
  /* Cargar / refrescar lista                                             */
  /* ------------------------------------------------------------------ */
  function loadPortadores(cb) {
    fetch(API, { headers: getHeaders() })
      .then(function (r) {
        if (r.status === 401) { sessionStorage.removeItem('admin-pwd'); showLogin(); return null; }
        return r.json();
      })
      .then(function (data) {
        if (!data) return;
        portadores = data.portadores || [];
        nextIdPreview = String((data.contador || 0) + 1).padStart(3, '0');
        renderTable();
        updateCount();
        if (cb) cb();
      })
      .catch(function (e) { toast('Error al cargar datos: ' + e.message, 'error'); });
  }

  /* ------------------------------------------------------------------ */
  /* Contador en header                                                   */
  /* ------------------------------------------------------------------ */
  function updateCount() {
    document.getElementById('count-badge').textContent =
      portadores.length + ' ' + (portadores.length === 1 ? 'portador registrado' : 'portadores registrados');
  }

  /* ------------------------------------------------------------------ */
  /* Ordenación                                                           */
  /* ------------------------------------------------------------------ */
  function sortedFiltered() {
    var list = portadores.slice();

    if (filterMode === 'pendingEmail') {
      list = list.filter(function (p) { return !p.emailEnviado; });
    } else if (filterMode === 'pendingResponse') {
      list = list.filter(function (p) { return p.emailEnviado && !p.aceptado; });
    }

    if (sortKey) {
      list.sort(function (a, b) {
        var va = a[sortKey] != null ? String(a[sortKey]) : '';
        var vb = b[sortKey] != null ? String(b[sortKey]) : '';
        var cmp = va.localeCompare(vb, 'es', { numeric: true });
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return list;
  }

  function setSort(key) {
    if (sortKey === key) {
      sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortDir = 'asc';
    }
    document.querySelectorAll('thead th.sortable').forEach(function (th) {
      th.classList.remove('sort-asc', 'sort-desc');
      if (th.dataset.sort === key) th.classList.add('sort-' + sortDir);
    });
    renderTable();
  }

  /* ------------------------------------------------------------------ */
  /* Render tabla                                                         */
  /* ------------------------------------------------------------------ */
  function renderTable() {
    var tbody = document.getElementById('portadores-tbody');
    tbody.innerHTML = '';
    var list = sortedFiltered();

    if (list.length === 0) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.colSpan = 12;
      td.className = 'table-empty';
      td.textContent = filterMode === 'all'
        ? 'No hay portadores registrados todavía. Usa "Nuevo portador" para añadir el primero.'
        : 'No hay portadores que coincidan con este filtro.';
      tr.appendChild(td);
      tbody.appendChild(tr);
      return;
    }

    list.forEach(function (p) {
      tbody.appendChild(buildRow(p));
    });

    initDragDrop();
  }

  /* ------------------------------------------------------------------ */
  /* Construir fila                                                       */
  /* ------------------------------------------------------------------ */
  function buildRow(p) {
    var tr = document.createElement('tr');
    tr.dataset.id = p.id;

    /* ---- Drag handle ---- */
    var tdDrag = document.createElement('td');
    tdDrag.className = 'col-drag';
    var handle = document.createElement('span');
    handle.className = 'drag-handle';
    handle.innerHTML = '&#8942;&#8942;'; // ⠿ approximation
    handle.title = 'Arrastrar para reordenar';
    tdDrag.appendChild(handle);
    tr.appendChild(tdDrag);

    /* ---- ID ---- */
    var tdId = document.createElement('td');
    tdId.className = 'col-id id-cell';
    tdId.textContent = p.id;
    tr.appendChild(tdId);

    /* ---- TXPR (editable) ---- */
    tr.appendChild(editableCell('col-txpr', p, 'codigoTXPR'));

    /* ---- Nombre (editable) ---- */
    tr.appendChild(editableCell('col-nombre', p, 'nombre'));

    /* ---- Apellidos (editable) ---- */
    tr.appendChild(editableCell('col-apellidos', p, 'apellidos'));

    /* ---- DNI (editable + revelar) ---- */
    tr.appendChild(dniCell(p));

    /* ---- Email (editable) ---- */
    tr.appendChild(editableCell('col-email', p, 'email'));

    /* ---- Género (editable select) ---- */
    tr.appendChild(generoCell(p));

    /* ---- Email status ---- */
    tr.appendChild(mailStatusCell(p));

    /* ---- Acceptance status ---- */
    tr.appendChild(acceptStatusCell(p));

    /* ---- Notas (click to edit) ---- */
    tr.appendChild(notasCell(p));

    /* ---- Eliminar ---- */
    var tdDel = document.createElement('td');
    tdDel.className = 'col-delete';
    var btnDel = document.createElement('button');
    btnDel.className = 'btn-delete-row';
    btnDel.innerHTML = '&#128465;';
    btnDel.title = 'Eliminar portador';
    btnDel.addEventListener('click', function () { confirmDelete(p); });
    tdDel.appendChild(btnDel);
    tr.appendChild(tdDel);

    return tr;
  }

  /* ---- Celda editable (doble clic) ---- */
  function editableCell(colClass, p, field) {
    var td = document.createElement('td');
    td.className = colClass + ' cell-editable';
    td.textContent = p[field] || '—';

    td.addEventListener('dblclick', function () {
      if (td.querySelector('input')) return;
      var prev = p[field] || '';
      td.textContent = '';
      var inp = document.createElement('input');
      inp.type  = field === 'email' ? 'email' : 'text';
      inp.value = prev;
      inp.className = 'cell-input';
      td.appendChild(inp);
      inp.focus();
      inp.select();

      function save() {
        var val = inp.value.trim();
        if (val === prev) { td.textContent = val || '—'; return; }
        var patch = {};
        patch[field] = val;
        fetch(API + '/' + p.id, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify(patch)
        })
        .then(function (r) { return r.json(); })
        .then(function (updated) {
          p[field] = updated[field];
          td.textContent = updated[field] || '—';
          td.classList.add('cell-saved');
          setTimeout(function () { td.classList.remove('cell-saved'); }, 700);
        })
        .catch(function () {
          td.textContent = prev || '—';
          toast('Error al guardar', 'error');
        });
      }

      inp.addEventListener('blur', save);
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); inp.blur(); }
        if (e.key === 'Escape') { td.textContent = prev || '—'; }
      });
    });
    return td;
  }

  /* ---- Celda DNI (click para revelar + doble clic para editar) ---- */
  function dniCell(p) {
    var td = document.createElement('td');
    td.className = 'col-dni';
    var revealed = false;

    var span = document.createElement('span');
    span.className = 'dni-masked';
    span.title = 'Clic para revelar';
    span.textContent = p.dni ? '•••••••••' : '—';

    span.addEventListener('click', function (e) {
      if (td.querySelector('input')) return;
      revealed = !revealed;
      span.textContent = revealed ? (p.dni || '—') : (p.dni ? '•••••••••' : '—');
      span.title = revealed ? 'Clic para ocultar' : 'Clic para revelar';
      e.stopPropagation();
    });

    td.appendChild(span);

    td.addEventListener('dblclick', function () {
      if (td.querySelector('input')) return;
      var prev = p.dni || '';
      td.innerHTML = '';
      var inp = document.createElement('input');
      inp.type  = 'text';
      inp.value = prev;
      inp.className = 'cell-input';
      td.appendChild(inp);
      inp.focus(); inp.select();

      function save() {
        var val = inp.value.trim();
        if (val === prev) {
          td.innerHTML = '';
          td.appendChild(span);
          span.textContent = revealed ? (p.dni || '—') : (p.dni ? '•••••••••' : '—');
          return;
        }
        fetch(API + '/' + p.id, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify({ dni: val })
        })
        .then(function (r) { return r.json(); })
        .then(function (updated) {
          p.dni = updated.dni;
          td.innerHTML = '';
          span.textContent = revealed ? (p.dni || '—') : (p.dni ? '•••••••••' : '—');
          td.appendChild(span);
          td.classList.add('cell-saved');
          setTimeout(function () { td.classList.remove('cell-saved'); }, 700);
        })
        .catch(function () {
          td.innerHTML = '';
          td.appendChild(span);
          toast('Error al guardar', 'error');
        });
      }

      inp.addEventListener('blur', save);
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); inp.blur(); }
        if (e.key === 'Escape') { td.innerHTML = ''; td.appendChild(span); }
      });
    });

    return td;
  }

  /* ---- Celda Género (doble clic → select) ---- */
  function generoCell(p) {
    var td = document.createElement('td');
    td.className = 'col-genero cell-editable';

    function generoLabel(val) {
      if (val === 'masculino') return 'Masculino';
      if (val === 'femenino')  return 'Femenino';
      return '—';
    }

    td.textContent = generoLabel(p.genero);

    td.addEventListener('dblclick', function () {
      if (td.querySelector('select')) return;
      var prev = p.genero || '';
      td.textContent = '';
      var sel = document.createElement('select');
      sel.className = 'cell-input';
      [['', '— Sin especificar —'], ['masculino', 'Masculino'], ['femenino', 'Femenino']].forEach(function (opt) {
        var o = document.createElement('option');
        o.value = opt[0];
        o.textContent = opt[1];
        if (opt[0] === prev) o.selected = true;
        sel.appendChild(o);
      });
      td.appendChild(sel);
      sel.focus();

      function save() {
        var val = sel.value;
        if (val === prev) { td.textContent = generoLabel(prev); return; }
        fetch(API + '/' + p.id, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify({ genero: val })
        })
        .then(function (r) { return r.json(); })
        .then(function (updated) {
          p.genero = updated.genero;
          td.textContent = generoLabel(p.genero);
          td.classList.add('cell-saved');
          setTimeout(function () { td.classList.remove('cell-saved'); }, 700);
        })
        .catch(function () {
          td.textContent = generoLabel(prev);
          toast('Error al guardar', 'error');
        });
      }

      sel.addEventListener('change', function () { sel.blur(); });
      sel.addEventListener('blur', save);
      sel.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); sel.blur(); }
        if (e.key === 'Escape') { td.textContent = generoLabel(prev); }
      });
    });

    return td;
  }

  /* ---- Celda estado correo ---- */
  function mailStatusCell(p) {
    var td = document.createElement('td');
    td.className = 'col-mail';
    var wrap = document.createElement('div');
    wrap.className = 'mail-status';

    var missing = [];
    if (!p.nombre)    missing.push('nombre');
    if (!p.apellidos) missing.push('apellidos');
    if (!p.dni)       missing.push('DNI');
    if (!p.email)     missing.push('email');
    var canSend = missing.length === 0;

    var icon = document.createElement('div');
    icon.className = 'mail-icon ' + (p.emailEnviado ? 'mail-icon--sent' : 'mail-icon--pending');

    if (!canSend && !p.emailEnviado) {
      icon.classList.add('mail-icon--disabled');
      icon.setAttribute('data-tooltip', 'Falta: ' + missing.join(', '));
    }

    if (p.emailEnviado) {
      icon.setAttribute('data-tooltip', 'Correo enviado el ' + fmtDate(p.fechaEnvioEmail));
      icon.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
        '<polyline points="22,6 12,13 2,6"/>' +
        '<polyline points="9 11 4 16 9 21" style="stroke:#10b981"/>' +
        '</svg>';
      var dateEl = document.createElement('div');
      dateEl.className = 'mail-date';
      dateEl.textContent = fmtDate(p.fechaEnvioEmail);
      wrap.appendChild(icon);
      wrap.appendChild(dateEl);
    } else {
      icon.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>' +
        '<polyline points="22,6 12,13 2,6"/>' +
        '</svg>';
      if (!p.emailEnviado) icon.setAttribute('data-tooltip', canSend ? 'Enviar correo inicial' : 'Falta: ' + missing.join(', '));
      if (canSend) {
        icon.addEventListener('click', function () {
          window.location.href = '/admin/correo/' + p.id;
        });
      }
      wrap.appendChild(icon);
    }

    td.appendChild(wrap);
    return td;
  }

  /* ---- Celda estado aceptación ---- */
  function acceptStatusCell(p) {
    var td = document.createElement('td');
    td.className = 'col-accept';
    var wrap = document.createElement('div');
    wrap.className = 'accept-status';

    var hasDni = !!p.dni;
    var dot = document.createElement('div');
    dot.className = 'accept-dot ' + (p.aceptado ? 'accept-dot--yes' : 'accept-dot--no');
    if (!hasDni) {
      dot.classList.add('accept-dot--disabled');
      dot.setAttribute('data-tooltip', 'Falta el DNI para gestionar el estado de aceptación');
    } else {
      dot.setAttribute('data-tooltip', p.aceptado ? 'Ha aceptado — clic para revertir' : 'No ha aceptado — clic para marcar como aceptado');
      dot.addEventListener('click', function () { confirmToggleAceptado(p); });
    }

    wrap.appendChild(dot);

    if (p.aceptado && p.fechaAceptacion) {
      var dateEl = document.createElement('div');
      dateEl.className = 'accept-date';
      dateEl.textContent = fmtDate(p.fechaAceptacion);
      wrap.appendChild(dateEl);
    }

    td.appendChild(wrap);
    return td;
  }

  /* ---- Celda Notas (doble clic para editar) ---- */
  function notasCell(p) {
    var td = document.createElement('td');
    td.className = 'col-notas notas-cell cell-editable';
    td.textContent = p.notas || '';

    td.addEventListener('dblclick', function () {
      if (td.querySelector('textarea')) return;
      var prev = p.notas || '';
      td.textContent = '';
      var inp = document.createElement('textarea');
      inp.className = 'notas-input';
      inp.value = prev;
      inp.rows = 2;
      td.appendChild(inp);
      inp.focus();

      function save() {
        var val = inp.value.trim();
        fetch(API + '/' + p.id, {
          method: 'PUT',
          headers: getHeaders(),
          body: JSON.stringify({ notas: val })
        })
        .then(function (r) { return r.json(); })
        .then(function (updated) {
          p.notas = updated.notas;
          td.textContent = updated.notas || '';
          if (val !== prev) {
            td.classList.add('cell-saved');
            setTimeout(function () { td.classList.remove('cell-saved'); }, 700);
          }
        })
        .catch(function () {
          td.textContent = prev;
          toast('Error al guardar', 'error');
        });
      }

      inp.addEventListener('blur', save);
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { td.textContent = prev; }
      });
    });
    return td;
  }

  /* ------------------------------------------------------------------ */
  /* Modal — Nuevo portador                                              */
  /* ------------------------------------------------------------------ */
  function openNewModal() {
    loadPortadores(function () {
      document.getElementById('new-id-preview').textContent = nextIdPreview;
      document.getElementById('new-txpr').value     = 'TCPR' + nextIdPreview;
      document.getElementById('new-nombre').value   = '';
      document.getElementById('new-apellidos').value = '';
      document.getElementById('new-dni').value       = '';
      document.getElementById('new-email').value     = '';
      document.getElementById('new-genero').value    = '';
      document.getElementById('modal-nuevo').style.display = 'flex';
      document.getElementById('new-txpr').focus();
    });
  }

  function closeNewModal() {
    document.getElementById('modal-nuevo').style.display = 'none';
  }

  function saveNewPortador() {
    var body = {
      codigoTXPR: document.getElementById('new-txpr').value.trim(),
      nombre:     document.getElementById('new-nombre').value.trim(),
      apellidos:  document.getElementById('new-apellidos').value.trim(),
      dni:        document.getElementById('new-dni').value.trim(),
      email:      document.getElementById('new-email').value.trim(),
      genero:     document.getElementById('new-genero').value,
    };

    fetch(API, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body)
    })
    .then(function (r) {
      if (!r.ok) throw new Error('Error ' + r.status);
      return r.json();
    })
    .then(function (nuevo) {
      closeNewModal();
      portadores.push(nuevo);
      nextIdPreview = String(parseInt(nuevo.id, 10) + 1).padStart(3, '0');
      renderTable();
      updateCount();
      /* Animar fila nueva */
      var newTr = document.querySelector('tr[data-id="' + nuevo.id + '"]');
      if (newTr) newTr.classList.add('row-new-anim');
      toast('Portador creado', 'success');
    })
    .catch(function (e) { toast('Error al crear portador: ' + e.message, 'error'); });
  }

  /* ------------------------------------------------------------------ */
  /* Modal — Confirmar eliminar                                           */
  /* ------------------------------------------------------------------ */
  function confirmDelete(p) {
    var name = [p.nombre, p.apellidos].filter(Boolean).join(' ') || 'ID ' + p.id;
    document.getElementById('delete-name').textContent = name;
    document.getElementById('modal-delete').style.display = 'flex';
    document.getElementById('btn-confirm-delete').onclick = function () {
      doDelete(p.id);
    };
  }

  function doDelete(id) {
    fetch(API + '/' + id, { method: 'DELETE', headers: getHeaders() })
      .then(function (r) {
        if (!r.ok) throw new Error('Error ' + r.status);
        portadores = portadores.filter(function (p) { return p.id !== id; });
        document.getElementById('modal-delete').style.display = 'none';
        renderTable();
        updateCount();
        toast('Portador eliminado', 'success');
      })
      .catch(function (e) { toast('Error al eliminar: ' + e.message, 'error'); });
  }

  /* ------------------------------------------------------------------ */
  /* Modal — Toggle aceptado                                              */
  /* ------------------------------------------------------------------ */
  function confirmToggleAceptado(p) {
    var name = [p.nombre, p.apellidos].filter(Boolean).join(' ') || 'ID ' + p.id;
    document.getElementById('toggle-name').textContent  = name;
    document.getElementById('toggle-state').textContent = p.aceptado ? 'aceptado → no aceptado' : 'no aceptado → aceptado';
    document.getElementById('modal-toggle').style.display = 'flex';
    document.getElementById('btn-confirm-toggle').onclick = function () {
      doToggle(p);
    };
  }

  function doToggle(p) {
    var newVal      = !p.aceptado;
    var newFecha    = newVal ? new Date().toISOString() : null;
    fetch(API + '/' + p.id, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ aceptado: newVal, fechaAceptacion: newFecha })
    })
    .then(function (r) { return r.json(); })
    .then(function (updated) {
      var idx = portadores.findIndex(function (x) { return x.id === p.id; });
      if (idx !== -1) portadores[idx] = updated;
      document.getElementById('modal-toggle').style.display = 'none';
      renderTable();
      toast('Estado actualizado', 'success');
    })
    .catch(function (e) { toast('Error: ' + e.message, 'error'); });
  }

  /* ------------------------------------------------------------------ */
  /* Drag & drop para reordenación                                        */
  /* ------------------------------------------------------------------ */
  function initDragDrop() {
    var rows = document.querySelectorAll('#portadores-tbody tr[data-id]');
    rows.forEach(function (tr, idx) {
      var handle = tr.querySelector('.drag-handle');
      if (!handle) return;

      handle.setAttribute('draggable', 'true');

      handle.addEventListener('dragstart', function (e) {
        dragSrcIdx = idx;
        tr.style.opacity = '0.5';
        e.dataTransfer.effectAllowed = 'move';
      });
      handle.addEventListener('dragend', function () {
        tr.style.opacity = '';
        document.querySelectorAll('#portadores-tbody tr').forEach(function (r) {
          r.classList.remove('drag-over');
        });
      });

      tr.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        document.querySelectorAll('#portadores-tbody tr').forEach(function (r) {
          r.classList.remove('drag-over');
        });
        tr.classList.add('drag-over');
      });

      tr.addEventListener('drop', function (e) {
        e.preventDefault();
        if (dragSrcIdx === null || dragSrcIdx === idx) return;
        var list = sortedFiltered();
        var srcId  = list[dragSrcIdx] && list[dragSrcIdx].id;
        var dstId  = list[idx] && list[idx].id;
        if (!srcId || !dstId) return;

        /* Reordenar en memoria */
        var srcItem = portadores.find(function (p) { return p.id === srcId; });
        var dstItem = portadores.find(function (p) { return p.id === dstId; });
        if (!srcItem || !dstItem) return;

        var tmp = srcItem.orden;
        srcItem.orden = dstItem.orden;
        dstItem.orden = tmp;

        /* Persistir ambos */
        Promise.all([
          fetch(API + '/' + srcId, { method: 'PUT', headers: getHeaders(), body: JSON.stringify({ orden: srcItem.orden }) }),
          fetch(API + '/' + dstId, { method: 'PUT', headers: getHeaders(), body: JSON.stringify({ orden: dstItem.orden }) })
        ])
        .then(function () { renderTable(); })
        .catch(function (e) { toast('Error al reordenar: ' + e.message, 'error'); });

        dragSrcIdx = null;
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Filtros                                                              */
  /* ------------------------------------------------------------------ */
  function setFilter(mode) {
    filterMode = filterMode === mode ? 'all' : mode;
    document.getElementById('btn-filter-email').classList.toggle('active', filterMode === 'pendingEmail');
    document.getElementById('btn-filter-response').classList.toggle('active', filterMode === 'pendingResponse');
    renderTable();
  }

  /* ------------------------------------------------------------------ */
  /* Backup en Dropbox (manual desde el panel)                           */
  /* ------------------------------------------------------------------ */
  function triggerBackup() {
    var btn     = document.getElementById('btn-backup');
    var origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>' +
      ' Subiendo…';

    fetch('/api/admin/backup', { method: 'POST', headers: getHeaders() })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (res) {
        if (res.ok) {
          btn.innerHTML =
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' +
            ' Backup realizado';
          btn.style.color = 'var(--green)';
          toast('Backup en Dropbox completado — ' + (res.data.filename || ''), 'success');
          setTimeout(function () {
            btn.innerHTML    = origHTML;
            btn.style.color  = '';
            btn.disabled     = false;
          }, 4000);
        } else {
          throw new Error(res.data.error || 'Error desconocido');
        }
      })
      .catch(function (err) {
        btn.innerHTML = origHTML;
        btn.disabled  = false;
        toast('Error en backup: ' + err.message, 'error');
      });
  }

  /* ------------------------------------------------------------------ */
  /* Exportar CSV                                                         */
  /* ------------------------------------------------------------------ */
  function exportCSV() {
    var headers = ['ID','TXPR','Nombre','Apellidos','DNI','Email','Género',
                   'Email Enviado','Fecha Envío','Aceptado','Fecha Aceptación','Notas','Orden'];
    var rows = portadores.map(function (p) {
      return [
        p.id, p.codigoTXPR, p.nombre, p.apellidos, p.dni, p.email,
        p.genero || '',
        p.emailEnviado ? 'Sí' : 'No',
        fmtDate(p.fechaEnvioEmail),
        p.aceptado ? 'Sí' : 'No',
        fmtDate(p.fechaAceptacion),
        (p.notas || '').replace(/"/g, '""'),
        p.orden
      ].map(function (v) { return '"' + (v != null ? String(v) : '') + '"'; }).join(',');
    });
    var csv = [headers.join(',')].concat(rows).join('\r\n');
    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href     = url;
    a.download = 'portadores_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
    toast('CSV descargado', 'success');
  }

  /* ------------------------------------------------------------------ */
  /* Inicialización                                                       */
  /* ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {

    /* ---- Login ---- */
    document.getElementById('form-login').addEventListener('submit', function (e) {
      e.preventDefault();
      var candidate = document.getElementById('input-password').value;
      if (!candidate) return;
      tryLogin(candidate);
    });

    /* ---- Botones de acción ---- */
    document.getElementById('btn-nuevo').addEventListener('click', openNewModal);
    document.getElementById('btn-filter-email').addEventListener('click', function () { setFilter('pendingEmail'); });
    document.getElementById('btn-filter-response').addEventListener('click', function () { setFilter('pendingResponse'); });
    document.getElementById('btn-export').addEventListener('click', exportCSV);
    document.getElementById('btn-backup').addEventListener('click', triggerBackup);

    /* ---- Cabeceras ordenables ---- */
    document.querySelectorAll('thead th.sortable').forEach(function (th) {
      th.addEventListener('click', function () { setSort(th.dataset.sort); });
    });

    /* ---- Modal nuevo portador ---- */
    document.getElementById('btn-cancel-nuevo').addEventListener('click', closeNewModal);
    document.getElementById('btn-save-nuevo').addEventListener('click', saveNewPortador);
    document.getElementById('modal-nuevo').addEventListener('click', function (e) {
      if (e.target === this) closeNewModal();
    });
    document.getElementById('form-nuevo').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); saveNewPortador(); }
    });

    /* ---- Modal eliminar ---- */
    document.getElementById('btn-cancel-delete').addEventListener('click', function () {
      document.getElementById('modal-delete').style.display = 'none';
    });
    document.getElementById('modal-delete').addEventListener('click', function (e) {
      if (e.target === this) this.style.display = 'none';
    });

    /* ---- Modal toggle ---- */
    document.getElementById('btn-cancel-toggle').addEventListener('click', function () {
      document.getElementById('modal-toggle').style.display = 'none';
    });
    document.getElementById('modal-toggle').addEventListener('click', function (e) {
      if (e.target === this) this.style.display = 'none';
    });

    /* ---- Cerrar sesión ---- */
    document.getElementById('btn-logout').addEventListener('click', function () {
      sessionStorage.removeItem('admin-pwd');
      pwd = '';
      showLogin();
    });

    /* ---- Restaurar sesión ---- */
    var saved = sessionStorage.getItem('admin-pwd');
    if (saved) {
      tryLogin(saved);
    } else {
      showLogin();
    }
  });
})();
