/* The app: home screen, one exercise at a time, explanation tab, settings.
   Content lives in chapters/*.js. Addresses look like #/3/5 (chapter 3, exercise 5)
   and #/3/5/u (the explanation tab for it). */
(function () {
  const store = {
    get(k, d) { try { const v = localStorage.getItem('rg_' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('rg_' + k, JSON.stringify(v)); } catch (e) {} }
  };
  const $ = id => document.getElementById(id);
  const main = $('main');
  const chapters = Book.chapters;

  let font = store.get('font', 24);
  let theme = store.get('theme', 'auto');
  let state = { ch: null, idx: 0, view: 'ex' };   // ch = chapter object, idx = exercise index

  const chByN = n => chapters.find(c => c.n === n);
  /* names shown on screen: a chapter may have its own label (e.g. 'Upprifjun'),
     an exercise its own title (e.g. 'Æfing 3') and a short name for the menu grid */
  const cname = c => c.label || `Kafli ${c.n}`;
  const ename = e => e.t || `Verkefni ${e.n}`;

  /* theory key "lidun" = this chapter, "1:lidun" = chapter 1 */
  function theoryFor(key, ch) {
    if (key.includes(':')) {
      const [n, k] = key.split(':');
      const other = chByN(+n);
      const t = other && other.theory[k];
      return t ? { ...t, t: `${t.t} (${cname(other).toLowerCase()})` } : null;
    }
    return ch.theory[key] || null;
  }

  /* ---------- settings ---------- */
  function applySettings() {
    document.documentElement.style.fontSize = font + 'px';
    $('fVal').textContent = font + ' px';
    if (theme === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('#themes button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t === theme));
    store.set('font', font); store.set('theme', theme);
  }

  /* ---------- routing ---------- */
  function parseHash() {
    if (location.hash === '#/f') return { ch: null, formulas: true };
    const m = location.hash.match(/^#\/(\d+)(?:\/(\d+))?(?:\/(u))?/);
    if (!m) return { ch: null };
    const ch = chByN(+m[1]);
    if (!ch) return { ch: null };
    let idx = 0;
    if (m[2]) { const i = ch.exercises.findIndex(e => e.n === +m[2]); idx = i < 0 ? 0 : i; }
    else idx = Math.min(store.get('last_' + ch.n, 0), ch.exercises.length - 1);
    return { ch, idx, view: m[3] ? 'th' : 'ex' };
  }
  function go(ch, idx, view = 'ex') {
    location.hash = `#/${ch.n}/${ch.exercises[idx].n}${view === 'th' ? '/u' : ''}`;
  }
  function goHome() { location.hash = '#/'; }

  window.addEventListener('hashchange', () => { state = parseHash(); render(true); });

  /* ---------- rendering ---------- */
  function render(scrollTop) {
    if (state.formulas) renderFormulas(); else if (!state.ch) renderHome(); else renderExercise();
    renderJump();
    if (scrollTop) { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
  }

  function renderHome() {
    document.title = 'Raungreinar – verkefni';
    $('where').innerHTML = 'Raungreinar <small>Veldu kafla</small>';
    $('tabs').hidden = true; $('bottomNav').hidden = true;
    const lastCh = store.get('lastCh', null);
    let h = `<h1>Veldu kafla</h1><ul class="chlist">`;
    for (const c of chapters) {
      h += `<li><button data-ch="${c.n}"><span class="num">${cname(c)}${c.n === lastCh ? ' · síðast opnað' : ''}</span>
        <span class="ttl">${c.title}</span><span class="cnt">${c.exercises.length} verkefni${c.draft ? ' · drög' : ''}</span></button></li>`;
    }
    h += '</ul>';
    if (Book.formulas) h += `<p><button class="btn wide" id="goF">📋 Formúlublað</button></p>`;
    main.innerHTML = h;
    if (Book.formulas) $('goF').onclick = () => { location.hash = '#/f'; };
  }

  function renderFormulas() {
    document.title = 'Formúlublað';
    $('where').innerHTML = 'Formúlublað <small>Allar formúlur á einum stað</small>';
    $('tabs').hidden = true; $('bottomNav').hidden = true;
    main.innerHTML = `<h1>Formúlublað</h1>${Book.formulas}<p><button class="btn wide" id="back">◀ Til baka</button></p>`;
    $('back').onclick = () => history.length > 1 ? history.back() : goHome();
  }

  function renderExercise() {
    const ch = state.ch, e = ch.exercises[state.idx], last = state.idx === ch.exercises.length - 1;
    const nextCh = chapters[chapters.indexOf(ch) + 1], prevCh = chapters[chapters.indexOf(ch) - 1];
    store.set('last_' + ch.n, state.idx); store.set('lastCh', ch.n);
    document.title = `${cname(ch)}, ${ename(e).toLowerCase()}`;
    $('where').innerHTML = `${cname(ch)} · ${ename(e)} <small>${state.idx + 1} af ${ch.exercises.length}${e.s ? ' · ' + e.s : ''}</small>`;
    $('tabs').hidden = false; $('bottomNav').hidden = false;
    $('tabEx').setAttribute('aria-selected', state.view === 'ex');
    $('tabTh').setAttribute('aria-selected', state.view === 'th');
    $('prev').disabled = state.idx === 0 && !prevCh;
    $('prev').textContent = state.idx === 0 && prevCh ? '◀ Fyrri kafli' : '◀ Fyrra';
    $('next').disabled = last && !nextCh;
    $('next').textContent = last && nextCh ? 'Næsti kafli ▶' : 'Næsta ▶';

    if (state.view === 'ex') {
      let h = `<h1>${ename(e)}</h1><div class="given">${e.g}</div>`;
      if (e.tip) h += `<div class="tip"><b>Ábending:</b> ${e.tip}</div>`;
      h += '<ol class="parts">' + e.p.map((p, i) => {
        const show = `<button class="btn show" data-i="${i}">Sýna svar</button>`;
        let btns;
        if (p.tf !== undefined)
          btns = `<div class="row"><button class="btn tf" data-i="${i}" data-v="1">${p.labels[0]}</button><button class="btn tf" data-i="${i}" data-v="0">${p.labels[1]}</button>${show}</div>`;
        else if (p.mc)
          btns = `<div class="mclist">${p.mc.map((o, k) => `<button class="btn mc" data-i="${i}" data-k="${k}"><span class="k">${LETTERS[k].toUpperCase()}</span>${o}</button>`).join('')}</div><div class="row">${show}</div>`;
        else if (p.num !== undefined)
          btns = `<div class="numrow"><input id="in${i}" inputmode="decimal" autocomplete="off" aria-label="Svar${p.unit ? ' í ' + p.unit : ''}">${p.unit ? `<span class="unit">${up(p.unit)}</span>` : ''}
            <button class="btn check" data-i="${i}">Athuga</button>${show}<span class="fb" id="fb${i}" aria-live="polite"></span></div>`;
        else btns = `<div class="row">${show}</div>`;
        return `<li>${p.l ? `<span class="plabel">(${p.l})</span>` : ''}<span class="q">${p.q}</span>
          ${btns}<div class="ans" id="ans${i}" hidden>${p.a}</div></li>`;
      }).join('') + '</ol>';
      h += `<p><button class="btn wide" id="goTh">📖 Lesa útskýringu fyrir þetta verkefni</button></p>`;
      main.innerHTML = h;
      $('goTh').onclick = () => go(ch, state.idx, 'th');
    } else {
      const linked = (e.th || []).map(k => theoryFor(k, ch)).filter(Boolean);
      const linkedKeys = new Set((e.th || []).filter(k => !k.includes(':')));
      const others = Object.keys(ch.theory).filter(k => !linkedKeys.has(k)).map(k => ch.theory[k]);
      let h = `<h1>Útskýring fyrir ${ename(e).toLowerCase()}</h1>`;
      h += linked.map((t, i) => `<details ${i === 0 ? 'open' : ''}><summary>${t.t}</summary><div>${t.h}</div></details>`).join('');
      if (others.length) {
        h += `<h2 class="sub-h">Annað efni í ${ch.label ? ch.label.toLowerCase() : 'kafla ' + ch.n}</h2>`;
        h += others.map(t => `<details><summary>${t.t}</summary><div>${t.h}</div></details>`).join('');
      }
      h += `<p><button class="btn wide" id="goEx">✏️ Aftur í verkefnið</button></p>`;
      main.innerHTML = h;
      $('goEx').onclick = () => go(ch, state.idx, 'ex');
    }
  }

  function renderJump() {
    $('jumpWrap').hidden = !state.ch;
    if (!state.ch) return;
    $('jumpTitle').textContent = `Verkefni · ${cname(state.ch)}`;
    $('jump').innerHTML = state.ch.exercises.map((e, i) =>
      `<button data-j="${i}" class="${i === state.idx ? 'cur' : ''}" aria-label="${ename(e)}">${e.short || e.n}</button>`).join('');
  }

  /* ---------- events ---------- */
  main.addEventListener('click', ev => {
    const chBtn = ev.target.closest('button[data-ch]');
    if (chBtn) { const ch = chByN(+chBtn.dataset.ch); go(ch, Math.min(store.get('last_' + ch.n, 0), ch.exercises.length - 1)); return; }
    const b = ev.target.closest('button[data-i]'); if (!b) return;
    const i = +b.dataset.i, p = state.ch.exercises[state.idx].p[i], box = $('ans' + i);
    if (b.classList.contains('show')) {
      box.hidden = !box.hidden; b.textContent = box.hidden ? 'Sýna svar' : 'Fela svar';
    } else if (b.classList.contains('tf')) {
      const guess = b.dataset.v === '1', ok = guess === p.tf;
      const group = b.parentElement.querySelectorAll('.tf');
      group.forEach(x => { x.classList.remove('right', 'wrong'); x.textContent = p.labels[x.dataset.v === '1' ? 0 : 1]; });
      b.classList.add(ok ? 'right' : 'wrong');
      b.textContent = p.labels[guess ? 0 : 1] + (ok ? ' ✓ Rétt!' : ' ✗ Reyndu aftur');
      if (ok) { box.hidden = false; b.parentElement.querySelector('.show').textContent = 'Fela svar'; }
    } else if (b.classList.contains('mc')) {
      const k = +b.dataset.k, ok = k === p.c;
      b.parentElement.querySelectorAll('.mc').forEach(x => {
        x.classList.remove('right', 'wrong');
        const m = x.querySelector('.mark'); if (m) m.remove();
      });
      b.classList.add(ok ? 'right' : 'wrong');
      b.insertAdjacentHTML('beforeend', `<span class="mark"> ${ok ? '✓ Rétt!' : '✗ Reyndu aftur'}</span>`);
      if (ok) { box.hidden = false; b.closest('li').querySelector('.show').textContent = 'Fela svar'; }
    } else if (b.classList.contains('check')) checkNum(i, p, box);
  });

  /* Number answers: accept comma or point, spaces, and a rounding tolerance */
  function checkNum(i, p, box) {
    const raw = $('in' + i).value.trim().replace(/\s/g, '').replace(',', '.').replace(/[−–]/g, '-')
      .replace(/[·*x×]10\^/i, 'e');
    const fb = $('fb' + i);
    if (!raw) { fb.className = 'fb'; fb.textContent = 'Skrifaðu tölu fyrst.'; return; }
    const v = Number(raw);
    if (!isFinite(v)) { fb.className = 'fb wrong'; fb.textContent = 'Þetta er ekki tala.'; return; }
    const close = w => p.num === 0 ? Math.abs(w) < 1e-9
      : Math.abs(w - p.num) <= Math.max(Math.abs(p.num) * p.tol, p.half * 1.0001);
    const ok = close(v) || (!p.sign && close(-v));
    const flipped = p.sign && !ok && close(-v);
    fb.className = 'fb ' + (ok ? 'right' : 'wrong');
    fb.textContent = ok ? '✓ Rétt!' : flipped ? '✗ Rétt stærð en rangt formerki – athugaðu stefnuna.' : '✗ Ekki alveg. Reyndu aftur.';
    if (ok) { box.hidden = false; box.closest('li').querySelector('.show').textContent = 'Fela svar'; }
  }
  main.addEventListener('keydown', ev => {
    if (ev.key !== 'Enter' || !ev.target.id.startsWith('in')) return;
    const i = +ev.target.id.slice(2);
    checkNum(i, state.ch.exercises[state.idx].p[i], $('ans' + i));
  });

  function step(d) {
    if (!state.ch) return;
    const ch = state.ch, i = state.idx + d, pos = chapters.indexOf(ch);
    if (i >= 0 && i < ch.exercises.length) return go(ch, i);
    const other = chapters[pos + d];
    if (other) go(other, d > 0 ? 0 : other.exercises.length - 1);
  }
  $('prev').onclick = () => step(-1);
  $('next').onclick = () => step(1);
  $('tabEx').onclick = () => state.ch && go(state.ch, state.idx, 'ex');
  $('tabTh').onclick = () => state.ch && go(state.ch, state.idx, 'th');

  function openMenu() { $('menu').hidden = false; $('closeMenu').focus(); }
  function closeMenu() { $('menu').hidden = true; $('openMenu').focus(); }
  $('openMenu').onclick = openMenu; $('closeMenu').onclick = closeMenu;
  $('goHome').onclick = () => { closeMenu(); goHome(); };
  $('goForm').hidden = !Book.formulas;
  $('goForm').onclick = () => { closeMenu(); location.hash = '#/f'; };
  $('jump').onclick = ev => { const b = ev.target.closest('button'); if (!b) return; closeMenu(); go(state.ch, +b.dataset.j); };
  $('fMinus').onclick = () => { font = Math.max(16, font - 2); applySettings(); };
  $('fPlus').onclick = () => { font = Math.min(44, font + 2); applySettings(); };
  $('themes').onclick = ev => { const b = ev.target.closest('button'); if (!b) return; theme = b.dataset.t; applySettings(); };
  document.addEventListener('keydown', e => {
    if (!$('menu').hidden) { if (e.key === 'Escape') closeMenu(); return; }
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  applySettings();
  state = parseHash();
  render(false);
})();
