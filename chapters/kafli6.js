/* Kafli 6 – Bókstafabrot. Transcribed from "Kafli 6.pdf" (pages 51–55 of the book, answers on p. 55).
   Worked steps under the answers are written for the app; the final answers are the book's
   (one mistake in the answer key, 5(h), is corrected – see README.md). */
Book.add((() => {
const FM = (a, b) => F(M(a), M(b));          // fraction with maths on top and bottom
const X = s => `<s>${s}</s>`;                 // crossed out (cancelled)
const A1 = 'Æfing 6.1', A2 = 'Æfing 6.2';

return {
n: 6,
title: 'Bókstafabrot',
theory: {

stytting: { t: '6.1 Stytting, margföldun og deiling bókstafabrota', h: `
<p>Ýmis verkefni krefjast þess að brotareikningi sé beitt þegar stæða inniheldur óþekktar stærðir.
Þáttun er mjög mikilvæg í brotareikningi, þegar stytta á brot eða samnefna þarf brot.</p>
${RULE('Reglur', `Reglur um brotareikning með tölum gilda einnig um brotareikning með bókstöfum. Þá ber að hafa í huga:
<ol><li>Enginn þáttur í nefnara má hafa gildið 0.</li>
<li>Brot má lengja eða stytta með tölu eða tákni sem ekki hefur gildið 0.</li></ol>`)}
${ATH('Aðeins má stytta brot þegar teljari og nefnari hafa verið <b>fullþáttaðir</b>. Það er óheimilt að stytta <b>lið á móti lið</b> – aðeins þátt á móti þætti.')}
${EXMP('Dæmi 6.1 · Stytting brota', `Styttum brotin`, STEPS(
  `1. &nbsp;${FM('x^2 - 1', 'x - 1')} = ${FM('(x + 1)(x - 1)', '(x - 1)')} = ${M('x + 1')}`,
  `2. &nbsp;${FM('5x^2 - 45', '5x + 15')} = ${FM('5(x^2 - 9)', '5(x + 3)')} = ${FM('5(x + 3)(x - 3)', '5(x + 3)')} = ${M('x - 3')}`,
  `3. &nbsp;${FM('4 - a', 'ba - 4b')} = ${FM('4 - a', 'b(a - 4)')} = ${FM('-(a - 4)', 'b(a - 4)')} = −${FM('1', 'b')}`,
  `Í 3. þurfti að víxla formerkjum: við tökum −1 út fyrir sviga í teljaranum, ${M('4 - a = -(a - 4)')}.`))}
${EXMP('Dæmi 6.2 · Deiling algebrubrota', `Einföldum ${FM('x^2 - 3x + 2', 'x^2 - 9')} : ${FM('x^2 - 4', 'x - 3')}`, STEPS(
  `= ${FM('(x - 1)(x - 2)', '(x + 3)(x - 3)')} : ${FM('(x + 2)(x - 2)', '(x - 3)')} &nbsp; <small>þáttum teljara og nefnara</small>`,
  `= ${FM('(x - 1)(x - 2)(x - 3)', '(x + 3)(x - 3)(x + 2)(x - 2)')} &nbsp; <small>breytum deilingu í margföldun með umhverfunni</small>`,
  `= ${FM('x - 1', '(x + 3)(x + 2)')} &nbsp; <small>styttum út sameiginlega þætti</small>`))}`},

samlagning: { t: '6.2 Samlagning og frádráttur bókstafabrota', h: `
<p>Þegar bókstafabrot eru lögð saman eða dregin hvert frá öðru er oft mikilvægt að nota <b>minnsta samnefnara</b>.
Þáttaðu fyrst alla nefnara – minnsti samnefnarinn inniheldur hvern þátt eins oft og hann kemur mest fyrir í einum nefnara.</p>
${EXMP('Dæmi 6.3 · Frádráttur brota', `Einföldum ${FM('x - 1', 'x^2 + x')} − ${FM('2', 'x^2 - 2x')}`, STEPS(
  `= ${FM('x - 1', 'x(x + 1)')} − ${FM('2', 'x(x - 2)')} &nbsp; <small>þáttum nefnara</small>`,
  `= ${FM('(x - 1)(x - 2)', 'x(x + 1)(x - 2)')} − ${FM('2(x + 1)', 'x(x - 2)(x + 1)')} &nbsp; <small>samnefnum</small>`,
  `= ${FM('(x - 1)(x - 2) - 2(x + 1)', 'x(x + 1)(x - 2)')} &nbsp; <small>sameinum brotin</small>`,
  `= ${FM('x^2 - 3x + 2 - 2x - 2', 'x(x + 1)(x - 2)')} &nbsp; <small>einföldum teljara en höldum nefnara þáttuðum</small>`,
  `= ${FM('x^2 - 5x', 'x(x + 1)(x - 2)')} = ${FM('x(x - 5)', 'x(x + 1)(x - 2)')} &nbsp; <small>þáttum teljara</small>`,
  `= ${FM('x - 5', '(x + 1)(x - 2)')} &nbsp; <small>styttum ${M('x')} út – fullstytt brot</small>`))}
${EXMP('Dæmi 6.4 · Brotareikningur', `Einföldum −${FM('a - 2b', '(a - b)^2')} − ${FM('1', 'b - a')} + ${FM('2b', 'b^2 - a^2')}`, STEPS(
  `= −${FM('a - 2b', '(a - b)^2')} + ${FM('1', 'a - b')} − ${FM('2b', 'a^2 - b^2')} &nbsp; <small>víxlum formerkjum</small>`,
  `= −${FM('a - 2b', '(a - b)(a - b)')} + ${FM('1', 'a - b')} − ${FM('2b', '(a + b)(a - b)')} &nbsp; <small>þáttum nefnara</small>`,
  `Minnsti samnefnari er ${M('(a - b)(a - b)(a + b)')}. Lengjum og sameinum:`,
  `= ${FM('-(a - 2b)(a + b) + (a - b)(a + b) - 2b(a - b)', '(a - b)(a - b)(a + b)')}`,
  `= ${FM('-a^2 - ab + 2ab + 2b^2 + a^2 - b^2 - 2ab + 2b^2', '(a - b)(a - b)(a + b)')} &nbsp; <small>einföldum teljara</small>`,
  `= ${FM('3b^2 - ab', '(a - b)(a - b)(a + b)')} = ${FM('b(3b - a)', '(a - b)^2(a + b)')}`,
  `Teljari og nefnari eru ósamþátta, svo brotið er fullstytt.`))}`}
},

exercises: [
  { t: 'Dæmi 1', short: '1', s: A1, th: ['stytting'],
    g: 'Hér að neðan hefur reglum um brotareikning ekki verið fylgt. Finnið mistökin og leiðréttið.',
    p: P([
      { q: `${FM('5x + 5', '5')} = ${F(X('5') + M('x + 5'), X('5'))} = ${M('x + 5')}`,
        a: `Hér er liður styttur á móti lið. Fyrst þarf að þátta teljara og nefnara:
          ${FM('5x + 5', '5')} = ${F(X('5') + M('(x + 1)'), X('5'))} = <b>${M('x + 1')}</b>` },
      { q: `${FM('ax + 1', 'a')} = ${F(X(M('a')) + M('x + 1'), X(M('a')))} = ${M('x + 1')}`,
        a: `Hér er liður styttur á móti lið. Teljari og nefnari eru ósamþátta og brotið er því <b>fullstytt</b>: ${FM('ax + 1', 'a')}` }
    ]) },
  { t: 'Dæmi 2', short: '2', s: A1, th: ['stytting'], g: 'Fullstyttið brotin.',
    p: P([
      { q: FM('9a^3bc^2', '24ab^3c^2'), a: STEPS(`${FM('3 * 3 * a * a^2 * b * c^2', '3 * 8 * a * b * b^2 * c^2')} = <b>${FM('3a^2', '8b^2')}</b>`) },
      { q: FM('x^2 - 4x', 'x^2 - 6x + 8'), a: STEPS(`${FM('x(x - 4)', '(x - 2)(x - 4)')} = <b>${FM('x', 'x - 2')}</b>`) },
      { q: FM('2a^4 + a^3 - 2a - 1', '3a^4 + a^3 - 3a - 1'),
        a: STEPS(`Teljari: ${M('a^3(2a + 1) - (2a + 1) = (2a + 1)(a^3 - 1)')}`,
          `Nefnari: ${M('a^3(3a + 1) - (3a + 1) = (3a + 1)(a^3 - 1)')}`,
          `${FM('(2a + 1)(a^3 - 1)', '(3a + 1)(a^3 - 1)')} = <b>${FM('2a + 1', '3a + 1')}</b>`) },
      { q: FM('(x - y)(x^3 + y^3)', '(x + y)(x^3 - y^3)'),
        a: STEPS(`${M('x^3 + y^3 = (x + y)(x^2 - xy + y^2)')} og ${M('x^3 - y^3 = (x - y)(x^2 + xy + y^2)')}`,
          `${FM('(x - y)(x + y)(x^2 - xy + y^2)', '(x + y)(x - y)(x^2 + xy + y^2)')} = <b>${FM('x^2 - xy + y^2', 'x^2 + xy + y^2')}</b>`) }
    ]) },
  { t: 'Dæmi 3', short: '3', s: A1, th: ['stytting'],
    g: `Einfaldið ${FM('x^2 + 18x + 80', 'x^2 + 5x - 50')} · ${FM('x^2 + 6x - 7', 'x^2 + 15x + 56')} : ${FM('x - 1', 'x - 5')}`,
    tip: 'Þáttaðu alla teljara og nefnara fyrst. Deiling er margföldun með umhverfunni.',
    p: [num('Svarið:', 1, '', STEPS(
      `${FM('(x + 8)(x + 10)', '(x + 10)(x - 5)')} · ${FM('(x + 7)(x - 1)', '(x + 7)(x + 8)')} · ${FM('x - 5', 'x - 1')}`,
      'Allir þættir styttast út og eftir stendur <b>1</b>.'))] },
  { t: 'Dæmi 4', short: '4', s: A2, th: ['samlagning'], g: 'Finnið minnsta samnefnara brotanna.',
    p: P([
      { q: `${FM('x^2', '(x - y)^2')} og ${FM('y^2', 'x^2 - y^2')}`,
        a: STEPS(`${M('x^2 - y^2 = (x + y)(x - y)')}`, `Minnsti samnefnari: <b>${M('(x + y)(x - y)^2')}</b>`) },
      { q: `${FM('1', 'x - 2')}, ${FM('y^2', 'x^4 - 16')} og ${FM('x', 'x + 2')}`,
        a: STEPS(`${M('x^4 - 16 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)')}`, `Minnsti samnefnari: <b>${M('(x^2 + 4)(x + 2)(x - 2)')}</b>`) }
    ]) },
  { t: 'Dæmi 5', short: '5', s: A2, th: ['samlagning'], g: 'Einfaldið.',
    p: P([
      { q: `${FM('a', 'a^2 - b^2')} + ${FM('b', 'a^2 - b^2')}`, a: STEPS(`${FM('a + b', '(a + b)(a - b)')} = <b>${FM('1', 'a - b')}</b>`) },
      { q: `${FM('a', 'a^2 - b^2')} − ${FM('b', 'a^2 - b^2')}`, a: STEPS(`${FM('a - b', '(a + b)(a - b)')} = <b>${FM('1', 'a + b')}</b>`) },
      { q: `${FM('a^2 + b^2', '(a + b)^2')} + ${FM('2ab', '(a + b)^2')}`, a: STEPS(`${FM('a^2 + 2ab + b^2', '(a + b)^2')} = ${FM('(a + b)^2', '(a + b)^2')} = <b>1</b>`) },
      { q: `${FM('1', 'a + b')} − ${FM('3', 'b')}`, a: STEPS(`${FM('b - 3(a + b)', 'b(a + b)')} = <b>${FM('-3a - 2b', 'b(a + b)')}</b>`) },
      { q: `${FM('x^2 + x + 1', 'x + 1')} − ${FM('x^2 - x + 1', 'x - 1')} − ${FM('2', 'x^2 - 1')}`,
        a: STEPS(`Samnefnari ${M('(x + 1)(x - 1)')}:`,
          `${FM('(x^2 + x + 1)(x - 1) - (x^2 - x + 1)(x + 1) - 2', '(x + 1)(x - 1)')} = ${FM('(x^3 - 1) - (x^3 + 1) - 2', '(x + 1)(x - 1)')}`,
          `= <b>−${FM('4', 'x^2 - 1')}</b>`) },
      { q: `${FM('3x + 5', 'x^2 + 2x - 3')} − ${FM('2x + 5', 'x^2 + 5x + 6')}`,
        a: STEPS(`${FM('3x + 5', '(x + 3)(x - 1)')} − ${FM('2x + 5', '(x + 2)(x + 3)')}`,
          `= ${FM('(3x + 5)(x + 2) - (2x + 5)(x - 1)', '(x + 3)(x - 1)(x + 2)')} = ${FM('x^2 + 8x + 15', '(x + 3)(x - 1)(x + 2)')}`,
          `= ${FM('(x + 3)(x + 5)', '(x + 3)(x - 1)(x + 2)')} = <b>${FM('x + 5', '(x - 1)(x + 2)')}</b>`) },
      { q: `${FM('2x - 5', 'x^2 + x - 2')} − ${FM('x - 13', 'x^2 - x - 6')}`,
        a: STEPS(`${FM('2x - 5', '(x + 2)(x - 1)')} − ${FM('x - 13', '(x - 3)(x + 2)')}`,
          `= ${FM('(2x - 5)(x - 3) - (x - 13)(x - 1)', '(x + 2)(x - 1)(x - 3)')} = ${FM('x^2 + 3x + 2', '(x + 2)(x - 1)(x - 3)')}`,
          `= ${FM('(x + 1)(x + 2)', '(x + 2)(x - 1)(x - 3)')} = <b>${FM('x + 1', '(x - 3)(x - 1)')}</b>`) },
      { q: `${FM('1', 'x^2 - 9')} + ${FM('1', 'x^3 - 27')}`,
        a: STEPS(`${M('x^2 - 9 = (x - 3)(x + 3)')} og ${M('x^3 - 27 = (x - 3)(x^2 + 3x + 9)')}`,
          `= ${FM('(x^2 + 3x + 9) + (x + 3)', '(x - 3)(x + 3)(x^2 + 3x + 9)')} = <b>${FM('x^2 + 4x + 12', '(x - 3)(x + 3)(x^2 + 3x + 9)')}</b>`,
          `<small>(Í svörum bókarinnar stendur ${M('x^2 - 3x + 9')} í nefnaranum, en það á að vera ${M('x^2 + 3x + 9')}.)</small>`) }
    ]) },
  { t: 'Dæmi 6', short: '6', s: A2, th: ['samlagning'],
    g: `Einfaldið ${FM('x', '(x - y)(x - z)')} + ${FM('y', '(y - x)(y - z)')} + ${FM('z', '(z - x)(z - y)')}`,
    tip: `Víxlaðu formerkjum svo allir nefnarar noti ${M('(x - y)')}, ${M('(x - z)')} og ${M('(y - z)')}.`,
    p: [num('Svarið:', 0, '', STEPS(
      `Samnefnari ${M('(x - y)(x - z)(y - z)')}. Teljarinn verður`,
      `${M('x(y - z) - y(x - z) + z(x - y) = xy - xz - xy + yz + xz - yz = 0')}`,
      'svo summan er <b>0</b>.'))] }
]
};
})());
