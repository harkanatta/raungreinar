/* Shared helpers for writing chapter content.
   Every chapter file in chapters/ can use these. See README.md for examples. */

/* ---------- the book registry ---------- */
const Book = {
  chapters: [],
  formulas: '',   // the formula sheet, set in chapters/formulur.js
  /* exercises without a number n are numbered 1, 2, 3, … in order (used in the address #/2/5) */
  add(ch) {
    ch.exercises.forEach((e, i) => { if (e.n === undefined) e.n = i + 1; });
    this.chapters.push(ch); this.chapters.sort((a, b) => a.n - b.n);
  }
};

/* Exercise named after the book's own numbering: SP(3, {...}) = 'Spurning 3', AE(3, {...}) = 'Æfing 3' */
const SP = (k, e) => ({ t: `Spurning ${k}`, short: `S${k}`, ...e });
const AE = (k, e) => ({ t: `Æfing ${k}`, short: `Æ${k}`, ...e });

/* ---------- math formatting ---------- */

/* M('3x^2 - 2ab^{-3}')  → nicely formatted math.
   Letters become italic, - becomes a real minus sign, * becomes ·,
   ^x or ^{...} is a superscript, _x or _{...} is a subscript. */
function M(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // HTML tags like <b>…</b> and entities like &nbsp; are copied unchanged
    const tag = (c === '<' || c === '&') && s.slice(i).match(/^(<\/?(b|i|u|br|small|sup|sub|span)\b[^>]*>|&[a-z]+;)/);
    if (tag) { out += tag[0]; i += tag[0].length - 1; continue; }
    if (c === '^' || c === '_') {
      let exp = '';
      if (s[i + 1] === '{') {
        const end = s.indexOf('}', i + 2);
        exp = s.slice(i + 2, end); i = end;
      } else {
        let j = i + 1;
        if (s[j] === '-') j++;
        if (/[0-9]/.test(s[j])) { while (/[0-9]/.test(s[j] || '')) j++; }
        else j++;
        exp = s.slice(i + 1, j); i = j - 1;
      }
      const tag = c === '^' ? 'sup' : 'sub';
      out += `<${tag}>${M(exp)}</${tag}>`;
    } else if (/[a-zA-Z]/.test(c)) out += `<i>${c}</i>`;
    else if (c === '-') out += '−';
    else if (c === '*') out += '·';
    else if (c === '<') out += '&lt;';
    else if (c === '>') out += '&gt;';
    else out += c;
  }
  return `<span class="m">${out}</span>`;
}

/* Fraction: F(1, 2) shows ½ as a stacked fraction. Both parts may contain HTML. */
const F = (a, b) => `<span class="frac"><span class="n">${a}</span><span class="d">${b}</span></span>`;
/* Mixed number: MX(2, 1, 3) shows 2⅓ */
const MX = (w, a, b) => `<span class="nowrap">${w}${F(a, b)}</span>`;
/* Overline (complement of a set): OV('A') */
const OV = s => `<span class="ov">${s}</span>`;
/* Root: RT('x') = √x, RT('8', 3) = ∛8 */
const RT = (x, n) => `<span class="rt">${n ? `<sup class="ri">${n}</sup>` : ''}√<span class="rad">${x}</span></span>`;
/* Plain math span (no automatic formatting) */
const S = s => `<span class="m">${s}</span>`;
/* Italic variable */
const I = s => `<i>${s}</i>`;
const N = 'ℕ', Z = 'ℤ', Q = 'ℚ', R = 'ℝ';

/* A list of calculation steps, one per line: STEPS('a = b', '= c') */
const STEPS = (...lines) => `<div class="steps">${lines.map(l => `<div>${l}</div>`).join('')}</div>`;

/* Simple table: TB(['s','p','s + p'], [[1,6,7],[2,3,'5 ✓']]) */
const TB = (head, rows) =>
  `<div class="tblwrap"><table class="tbl"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>` +
  `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/* Blank to fill in, and a squared blank: SQ(BL) */
const BL = '<span class="blank" aria-label="eyða"></span>';
const SQ = s => `${s}<sup>2</sup>`;

/* ---------- boxes used in explanations ---------- */
const DEF  = (tag, body) => `<div class="def"><div class="tag">${tag}</div>${body}</div>`;
const RULE = (tag, body) => `<div class="rule"><div class="tag">${tag}</div>${body}</div>`;
const ATH  = (body, tag = 'Ath!') => `<div class="ath"><div class="tag">${tag}</div>${body}</div>`;
/* Worked example. lausn is optional. */
const EXMP = (tag, body, lausn) =>
  `<div class="ex"><div class="tag">${tag}</div>${body}${lausn ? `<div class="lausn"><b>Lausn:</b> ${lausn}</div>` : ''}</div>`;

/* ---------- exercise parts ---------- */
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
/* P([{q, a}, ...]) gives each part its letter (a), (b), ... */
const P = arr => arr.map((p, i) => ({ l: LETTERS[i], ...p }));
/* True/false part: tf(question, true|false, optional explanation, optional button labels) */
const tf = (q, v, why, labels) => {
  const L = labels || ['Satt', 'Ósatt'];
  return { q, tf: v, labels: L, a: `<b>${v ? L[0] : L[1]}</b>` + (why ? ' — ' + why : '') };
};

/* ---------- figures ---------- */

/* Number line. segs = [[from, to, fromClosed, toClosed], ...]; from/to may be ±Infinity */
function nl(min, max, ticks, segs) {
  const W = 400, y = 40, x0 = 30, x1 = 356;
  const X = v => v === -Infinity ? 6 : v === Infinity ? 378 : x0 + (v - min) / (max - min) * (x1 - x0);
  const fmt = v => String(v).replace('-', '−');
  let s = `<svg class="fig" viewBox="0 0 ${W} 92" role="img" aria-label="Talnalína">`;
  s += `<line x1="4" y1="${y}" x2="380" y2="${y}" stroke="currentColor" stroke-width="2.5"/>`;
  s += `<polygon points="394,${y} 378,${y - 8} 378,${y + 8}" fill="currentColor"/>`;
  s += `<text x="388" y="${y + 42}" font-size="28" font-style="italic" fill="currentColor" text-anchor="middle">x</text>`;
  for (const t of ticks) {
    const xx = X(t);
    s += `<line x1="${xx}" y1="${y - 9}" x2="${xx}" y2="${y + 9}" stroke="currentColor" stroke-width="2"/>`;
    s += `<text x="${xx}" y="${y + 42}" font-size="28" font-weight="600" fill="currentColor" text-anchor="middle">${fmt(t)}</text>`;
  }
  for (const [a, b, ac, bc] of segs) {
    s += `<line x1="${X(a)}" y1="${y}" x2="${X(b)}" y2="${y}" stroke="currentColor" stroke-width="7"/>`;
    for (const [v, c] of [[a, ac], [b, bc]]) {
      if (!isFinite(v)) continue;
      s += `<circle cx="${X(v)}" cy="${y}" r="9" stroke="currentColor" stroke-width="3" fill="${c ? 'currentColor' : 'var(--card)'}"/>`;
    }
  }
  return s + '</svg>';
}

/* Two-set Venn diagram. mode = comp | union | inter | diff */
function venn2(mode) {
  const id = 'v' + mode + Math.random().toString(36).slice(2, 7);
  let s = `<svg class="fig" viewBox="0 0 320 200" role="img" aria-label="Venn mynd" style="max-width:18rem">
  <defs><clipPath id="${id}"><circle cx="125" cy="105" r="65"/></clipPath></defs>`;
  const A = `<circle cx="125" cy="105" r="65"`, B = `<circle cx="195" cy="105" r="65"`;
  if (mode === 'comp') s += `<rect x="2" y="2" width="316" height="196" fill="var(--shade)"/>${A} fill="var(--card)"/>`;
  else s += `<rect x="2" y="2" width="316" height="196" fill="var(--card)"/>`;
  if (mode === 'union') s += `${A} fill="var(--shade)"/>${B} fill="var(--shade)"/>`;
  if (mode === 'inter') s += `${B} fill="var(--shade)" clip-path="url(#${id})"/>`;
  if (mode === 'diff') s += `${A} fill="var(--shade)"/>${B} fill="var(--card)"/>`;
  s += `<rect x="2" y="2" width="316" height="196" fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  s += `${A} fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  if (mode !== 'comp') s += `${B} fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  s += `<text x="16" y="30" font-size="24" font-style="italic" fill="currentColor">U</text>`;
  s += `<text x="115" y="114" font-size="26" font-style="italic" fill="currentColor">A</text>`;
  if (mode !== 'comp') s += `<text x="198" y="114" font-size="26" font-style="italic" fill="currentColor">B</text>`;
  else s += `<text x="240" y="114" font-size="26" font-style="italic" fill="currentColor" text-decoration="overline">A</text>`;
  return s + '</svg>';
}

/* Three-set Venn diagram with numbers. r = {a, b, c, ab, ac, bc, abc, out1, out2}, each an array of text lines */
function venn3(r) {
  const T = (x, y, t, sz = 21, it = false) =>
    `<text x="${x}" y="${y}" font-size="${sz}" ${it ? 'font-style="italic"' : ''} fill="currentColor" text-anchor="middle">${t}</text>`;
  const c = (x, y) => `<circle cx="${x}" cy="${y}" r="90" fill="none" stroke="currentColor" stroke-width="2.5"/>`;
  let s = `<svg class="fig" viewBox="0 0 380 340" role="img" aria-label="Venn mynd með þremur mengjum">
   <rect x="2" y="2" width="376" height="336" fill="var(--card)" stroke="currentColor" stroke-width="2.5"/>
   ${c(150, 130)}${c(230, 130)}${c(190, 225)}
   ${T(22, 30, 'U', 24, true)}${T(82, 152, 'A', 26, true)}${T(298, 152, 'B', 26, true)}${T(128, 272, 'C', 26, true)}`;
  const put = (x, y, lines) => (lines || []).forEach((l, i) => s += T(x, y + i * 23, l, 21));
  put(100, 110, r.a); put(280, 110, r.b); put(190, 78, r.ab); put(150, 215, r.ac);
  put(236, 212, r.bc); put(190, 178, r.abc); put(208, 288, r.c);
  put(45, 326, r.out1); put(330, 326, r.out2);
  return s + '</svg>';
}

/* ---------- science ---------- */

/* Upright text with ^ superscripts and _ subscripts (for units and numbers).
   * becomes ·, - becomes a real minus sign. */
function up(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '^' || c === '_') {
      let exp = '';
      if (s[i + 1] === '{') { const end = s.indexOf('}', i + 2); exp = s.slice(i + 2, end); i = end; }
      else { let j = i + 1; if (s[j] === '-') j++; while (/[0-9]/.test(s[j] || '')) j++; if (j === i + 1) j++; exp = s.slice(i + 1, j); i = j - 1; }
      out += `<${c === '^' ? 'sup' : 'sub'}>${up(exp)}</${c === '^' ? 'sup' : 'sub'}>`;
    } else if (c === '*') out += '·';
    else if (c === '-') out += '−';
    else if (c === '<') out += '&lt;';
    else out += c;
  }
  return out;
}

/* Value with unit: U('9,8', 'm/s^2') → 9,8 m/s²   U('3,0*10^8', 'm/s') → 3,0·10⁸ m/s
   The unit stays upright and never wraps away from the number. */
const U = (v, unit) => `<span class="qty">${up(String(v))}${unit ? '&nbsp;' + `<span class="unit">${up(unit)}</span>` : ''}</span>`;

/* Chemical formula: CH('H2O') → H₂O,  CH('2H2 + O2 -> 2H2O'),  CH('SO4^{2-}'),  CH('Na^+'),
   CH('CuSO4*5H2O'). Digits right after a letter or ) ] become subscripts; digits at the start
   of a formula (coefficients) stay normal. -> → ,  <=> ⇌ ,  ^ is a charge. */
function CH(s) {
  s = s.replace(/<=>/g, ' ⇌ ').replace(/->/g, ' → ').replace(/\s+/g, ' ');
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i], prev = s[i - 1] || ' ';
    if (c === '^') {
      let ch;
      if (s[i + 1] === '{') { const end = s.indexOf('}', i + 2); ch = s.slice(i + 2, end); i = end; }
      else { let j = i + 1; while (/[0-9]/.test(s[j] || '')) j++; if (/[+-]/.test(s[j] || '')) j++; ch = s.slice(i + 1, j); i = j - 1; }
      out += `<sup>${ch.replace('-', '−')}</sup>`;
    } else if (/[0-9]/.test(c) && /[A-Za-z)\]]/.test(prev)) {
      let j = i; while (/[0-9]/.test(s[j] || '')) j++;
      out += `<sub>${s.slice(i, j)}</sub>`; i = j - 1;
    } else if (c === '*') out += '·';
    else out += c;
  }
  return `<span class="chem">${out}</span>`;
}

/* Picture from the img/ folder: IMG('fruma.png', 'Teikning af frumu', 'Mynd 2.1') */
const IMG = (file, alt, caption) =>
  `<figure class="pic"><img src="img/${file}" alt="${alt}" loading="lazy">${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;

/* Multiple choice part: mc(question, ['option 1', 'option 2', ...], index of the right one (0 = first), explanation) */
const mc = (q, options, right, why) =>
  ({ q, mc: options, c: right, a: `<b>${options[right]}</b>` + (why ? ' — ' + why : '') });

/* Number answer the student types in: num(question, right value, unit, explanation, options)
   options: { tol: 0.02 } relative tolerance (default 2 %, so rounding differences count as right),
            { sign: false } accept the answer with either sign (when the direction is asked separately),
            { shown: '2,0·10^5' } how the answer is written in the answer box (default: the value).
   Students may type 9,8 or 9.8, and 2,0·10^5 or 2e5. */
const num = (q, value, unit, why, o = {}) => {
  const shown = o.shown || String(value).replace('.', ',');
  // an answer that rounds to the book's answer also counts: 1,85 is right when the book says 1,9
  const m = shown.replace(',', '.').replace('−', '-').match(/^-?\d+(?:\.(\d+))?(?:·10\^\{?(-?\d+)\}?)?$/);
  const half = m ? 0.5 * Math.pow(10, -(m[1] || '').length + (+m[2] || 0)) : 0;
  return { q, num: value, unit: unit || '', tol: o.tol ?? 0.02, half, sign: o.sign ?? true,
    a: `<b>${U(shown, unit)}</b>` + (why ? ' — ' + why : '') };
};

/* ---------- physics figures (they follow the colour theme) ---------- */

/* Vector label with a bar over the letter, as in the book: VL('F', 'heild') */
const VL = (letter, sub) => `<span class="vec">${letter}</span>${sub ? `<sub>${sub}</sub>` : ''}`;

/* Arrow head + line for SVG figures */
function svgArrow(x1, y1, x2, y2, opt = {}) {
  const ang = Math.atan2(y2 - y1, x2 - x1), L = opt.head || 16, W = L * 0.55;
  const bx = x2 - L * Math.cos(ang), by = y2 - L * Math.sin(ang);
  const p = (a, d) => `${(bx + d * Math.cos(a)).toFixed(1)},${(by + d * Math.sin(a)).toFixed(1)}`;
  const col = opt.color || 'var(--accent)';
  return `<line x1="${x1}" y1="${y1}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${col}" stroke-width="${opt.w || 4}"${opt.dash ? ' stroke-dasharray="9 6"' : ''}/>` +
    `<polygon points="${x2},${y2} ${p(ang + Math.PI / 2, W)} ${p(ang - Math.PI / 2, W)}" fill="${col}"/>`;
}
/* SVG text label for a vector: letter with a bar, optional subscript */
function svgVecLabel(x, y, letter, sub, opt = {}) {
  const sz = opt.size || 26, anchor = opt.anchor || 'middle';
  return `<text x="${x}" y="${y}" font-size="${sz}" fill="currentColor" text-anchor="${anchor}" font-family="Georgia, serif">` +
    `<tspan font-style="italic" text-decoration="overline">${letter}</tspan>` +
    (sub ? `<tspan font-size="${sz * 0.65}" dy="6" font-family="inherit">${sub}</tspan>` : '') + `</text>`;
}

/* Force diagram on squared paper. Coordinates are grid squares, (0,0) top left, y downwards.
   vecfig({ cols: 16, rows: 14, box: [6,5,4,4], dot: [8,7],
            arrows: [{ from: [8,5], to: [10,3], l: 'T', at: [10.6,2.8] },
                     { from: [8,7], to: [13,9], l: 'F', s: 'heild', ans: true }] })
   ans: true draws the arrow dashed in the "right answer" colour. */
function vecfig(o) {
  const C = 30, W = o.cols * C, H = o.rows * C, X = v => v * C;
  let s = `<svg class="fig" viewBox="-2 -2 ${W + 4} ${H + 4}" role="img" aria-label="${o.alt || 'Kraftamynd'}" style="max-width:${o.max || '26rem'}">`;
  s += `<rect x="0" y="0" width="${W}" height="${H}" fill="var(--card)"/>`;
  for (let i = 0; i <= o.cols; i++) s += `<line x1="${X(i)}" y1="0" x2="${X(i)}" y2="${H}" stroke="var(--grid)" stroke-width="1"/>`;
  for (let j = 0; j <= o.rows; j++) s += `<line x1="0" y1="${X(j)}" x2="${W}" y2="${X(j)}" stroke="var(--grid)" stroke-width="1"/>`;
  if (o.box) { const [x, y, w, h] = o.box; s += `<rect x="${X(x)}" y="${X(y)}" width="${X(w)}" height="${X(h)}" fill="var(--box)" stroke="currentColor" stroke-width="2"/>`; }
  if (o.dot) s += `<circle cx="${X(o.dot[0])}" cy="${X(o.dot[1])}" r="5" fill="currentColor"/>`;
  for (const a of o.arrows || []) {
    s += svgArrow(X(a.from[0]), X(a.from[1]), X(a.to[0]), X(a.to[1]), a.ans ? { color: 'var(--good)', dash: true, w: 5 } : {});
    if (a.l) { const [lx, ly] = a.at || [a.to[0] + 0.6, a.to[1] - 0.3]; s += svgVecLabel(X(lx), X(ly), a.l, a.s); }
  }
  return s + '</svg>';
}

/* Position axis with marked points and displacement arrows (like Mynd 2.2).
   axisfig({ min: 0, max: 9, name: 'x (m)', pts: [[2, 'x₁ = 2 m'], [7, 'x₂ = 7 m']],
             arrows: [[2, 7, 'Δx = 5 m']] }) */
function axisfig(o) {
  const W = 420, x0 = 20, x1 = 370, y = 70, X = v => x0 + (v - o.min) / (o.max - o.min) * (x1 - x0);
  let s = `<svg class="fig" viewBox="0 0 ${W} 130" role="img" aria-label="${o.alt || 'Stöðuás'}">`;
  s += svgArrow(4, y, 410, y, { color: 'currentColor', w: 2.5, head: 14 });
  s += `<text x="410" y="${y - 14}" font-size="20" font-style="italic" fill="currentColor" text-anchor="end">${o.name}</text>`;
  for (const [v, l] of o.pts || []) {
    s += `<line x1="${X(v)}" y1="${y - 9}" x2="${X(v)}" y2="${y + 9}" stroke="currentColor" stroke-width="2.5"/>`;
    s += `<text x="${X(v)}" y="${y + 34}" font-size="20" fill="currentColor" text-anchor="middle">${l}</text>`;
  }
  for (const [a, b, l] of o.arrows || []) {
    s += svgArrow(X(a), y - 26, X(b), y - 26, { w: 4 });
    s += `<text x="${(X(a) + X(b)) / 2}" y="${y - 38}" font-size="20" font-weight="700" fill="currentColor" text-anchor="middle">${l}</text>`;
  }
  return s + '</svg>';
}

/* Small arrow pointing in a direction, for multiple-choice options: AR(90) = up, AR(180) = left */
const AR = (deg, label) => {
  const r = deg * Math.PI / 180, cx = 30, cy = 30, d = 22;
  const x1 = cx - d * Math.cos(r), y1 = cy + d * Math.sin(r), x2 = cx + d * Math.cos(r), y2 = cy - d * Math.sin(r);
  return `<svg class="icon" viewBox="0 0 60 60" role="img" aria-label="${label || 'ör'}">${svgArrow(x1.toFixed(1), y1.toFixed(1), x2.toFixed(1), y2.toFixed(1), { color: 'currentColor', w: 5, head: 15 })}</svg>`;
};

/* Symbol with an upright word as subscript: MS('v', 'meðal') → v with "meðal" below, MS('F', 'g') */
const MS = (base, sub) => `${M(base)}<sub>${sub}</sub>`;

/* Marks an answer that is not in the book (written for the app – the teacher may want to check it) */
const MINE = ' <span class="mine">(Svarið er ekki í bókinni.)</span>';
