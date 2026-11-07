/* Kafli 7 – Jöfnur og ójöfnur. Transcribed from "Kafli 7.pdf" (pages 56–74 of the book, answers on p. 73–74).
   Worked steps under the answers are written for the app; the final answers are the book's.
   Dæmi 7.1 in the book ends with x = 1; the right answer is x = −1 (see README.md). */
Book.add((() => {
const FM = (a, b) => F(M(a), M(b));
const fr = (a, b) => F(a, b);
const neg = (a, b) => `−${F(a, b)}`;
const L = M('L');
const A1 = 'Æfing 7.1', A2 = 'Æfing 7.2', A3 = 'Æfing 7.3', A4 = 'Æfing 7.4', A5 = 'Æfing 7.5';
/* exact answer typed as a number or a fraction, e.g. 5/12 */
const xq = (v, html, why) => num(`${M('x')} =`, v, '', why, { frac: true, html: `${M('x')} = ${html}`, tol: 0.005 });
/* a system of two equations, numbered (1) and (2) */
const SYS = (...eqs) => `<div class="steps">${eqs.map((e, i) => `<div>(${i + 1}) &nbsp; ${e}</div>`).join('')}</div>`;
const BR = (...xs) => xs.join(' &nbsp;eða&nbsp; ');

return {
n: 7,
title: 'Jöfnur og ójöfnur',
theory: {

linulegar: { t: '7.1 Línulegar jöfnur með einni óþekktri stærð', h: `
${ATH(`Rifjum upp að heimilt er að:
<ol><li>leggja sömu stærð við báðum megin jafnaðarmerkis,</li>
<li>draga sömu stærð frá báðum megin jafnaðarmerkis,</li>
<li>margfalda báðum megin jafnaðarmerkis með sömu stærð sem ekki er 0,</li>
<li>deila báðum megin jafnaðarmerkis með sömu stærð sem ekki er 0.</li></ol>`)}
<p>Þegar brot eru í jöfnunni margföldum við í gegnum jöfnuna með <b>samnefnaranum</b> svo brotin hverfi.
Mundu að ${M('x')} má ekki taka gildi sem gerir einhvern nefnara 0.</p>
${EXMP('Dæmi 7.1 · Lausn jöfnu', `Leysum jöfnuna ${FM('x', 'x + 2')} = 1 − ${FM('4', 'x + 3')}.`, STEPS(
  `Margföldum með samnefnaranum ${M('(x + 2)(x + 3)')} í gegnum jöfnuna:`,
  M('x(x + 3) = (x + 2)(x + 3) - 4(x + 2)'),
  M('x^2 + 3x = x^2 + 2x + 3x + 6 - 4x - 8'),
  M('x^2 + 3x = x^2 + x - 2'),
  M('x^2 - x^2 + 3x - x = -2'),
  `${M('2x = -2')} &nbsp;⇒&nbsp; <b>${M('x = -1')}</b>`,
  `<small>(Í bókinni stendur ${M('x = 1')} í lokin, en ${M('-2/2 = -1')}. Prófun: ${FM('-1', '1')} = −1 og 1 − ${FM('4', '2')} = −1 ✓)</small>`))}
${EXMP('Dæmi 7.2 · Lausn jöfnu', `Leysum jöfnuna ${F(M('2x - ') + FM('1 - x', '2'), '3')} = 2 + ${FM('x', '2')}.`, STEPS(
  `Margföldum með ${M('2 * 3')} í gegnum jöfnuna og styttum nefnara út:`,
  `${M('2')} · (${M('2x - ')}${FM('1 - x', '2')}) = ${M('12 + 3x')}`,
  `${M('4x - (1 - x) = 12 + 3x')}`,
  `${M('4x - 1 + x = 12 + 3x')}`,
  `${M('5x - 3x = 12 + 1')}`,
  `${M('2x = 13')} &nbsp;⇒&nbsp; <b>${M('x = ')}${fr(13, 2)}</b>`))}`},

ojofnur: { t: '7.2 Línulegar ójöfnur', h: `
<p>Einfaldar línulegar ójöfnur má leysa eins og einfaldar línulegar jöfnur nema:</p>
${RULE('Tvennt að varast', `<ol><li>Þegar margfaldað eða deilt er með <b>neikvæðri tölu</b> báðum megin ójöfnumerkis þá <b>snýst ójöfnumerkið við</b>.
Athugum að ${M('-2 > -5')} en ${M('2 < 5')}.</li>
<li><b>Röðin skiptir máli.</b> ${M('2 < 5')} er sama ójafna og ${M('5 > 2')}, svo ef við skrifum hægri hliðina vinstra megin og öfugt þarf að snúa ójöfnumerkinu við.</li></ol>`)}
${DEF('Bil', `Lausnarmengi ójöfnu ritum við sem <b>bil</b>. Hornklofi sem snýr <b>að</b> tölunni þýðir að hún er með, sem snýr <b>frá</b> henni að hún er ekki með:
<div class="steps">${M('[a, b]')} : ${M('a ≤ x ≤ b')} &nbsp;&nbsp; ${M(']a, b[')} : ${M('a < x < b')} &nbsp;&nbsp; ${M('[a, ∞[')} : ${M('x ≥ a')}</div>
Við ∞ og −∞ snýr hornklofinn alltaf frá. ∅ er tóma mengið (engin lausn).`)}
${EXMP('Dæmi 7.3 · Lausn ójöfnu', `Leysum ójöfnuna ${M('3 - 5x < 2x + 17')} og ritum lausnarmengið sem bil.`, STEPS(
  M('-5x - 2x < 17 - 3'),
  M('-7x < 14'),
  `${FM('-7x', '-7')} &gt; ${FM('14', '-7')} &nbsp; <small>deilum með −7, merkið snýst við</small>`,
  `${M('x > -2')} og lausnarmengið er því <b>${L} = ]−2, ∞[</b>`,
  `<small>(Í bókinni stendur [−2, ∞[, en −2 er ekki með því ójafnan er ströng.)</small>`))}
${EXMP('Dæmi 7.4 · Lausn samsettra ójafna', `Leysum samsettu ójöfnuna ${M('2x - 3 < 5x - 6 ≤ 15 - x')} og ritum lausnarmengið sem bil.`, STEPS(
  `Fyrst ${M('2x - 3 < 5x - 6')}: ${M('2x - 5x < -6 + 3')}, ${M('-3x < -3')}, svo ${M('x > 1')} og ${MS('L', '1')} = ]1, ∞[.`,
  `Síðan ${M('5x - 6 ≤ 15 - x')}: ${M('5x + x ≤ 15 + 6')}, ${M('6x ≤ 21')}, svo ${M('x ≤ 3,5')} og ${MS('L', '2')} = ]−∞; 3,5].`,
  `Talan ${M('x')} fullnægir báðum ójöfnunum þá og því aðeins að ${M('x')} ∈ ${MS('L', '1')} ∩ ${MS('L', '2')}.`,
  `<b>${L} = ${MS('L', '1')} ∩ ${MS('L', '2')} = ]1; 3,5]</b>`))}
${ATH('Tugabrot eru táknuð með kommu, og þá skiljum við á milli talnanna í bilinu með <b>semikommu</b>: ]1; 3,5].')}`},

einangrun: { t: '7.3 Einangrun breytistærða', h: `
<p>Að <b>einangra</b> breytistærð þýðir að leysa jöfnuna með tilliti til hennar – hún á að standa ein öðrum megin.
Safnaðu öllum liðum með breytunni öðrum megin, taktu hana út fyrir sviga og deildu. Gættu þess að deila ekki með 0.</p>
${EXMP('Dæmi 7.5 · Einangrun breytistærða', `Leysum jöfnuna ${M('av - 2k = 4v + 5')} með tilliti til ${M('v')}.`, STEPS(
  M('av - 4v = 2k + 5'),
  `${M('v(a - 4) = 2k + 5')} &nbsp; <small>ef ${M('a ≠ 4')} má deila með ${M('(a - 4)')}</small>`,
  `<b>${M('v = ')}${FM('2k + 5', 'a - 4')}</b> þegar ${M('a ≠ 4')}.`))}
${EXMP('Dæmi 7.6 · Einangrun breytistærða', `Leysum jöfnuna ${M('a - ')}${FM('b - 1', 'b - 3')} = 2 með tilliti til ${M('b')}.`, STEPS(
  `${M('a - 2 = ')}${FM('b - 1', 'b - 3')}`,
  M('(a - 2)(b - 3) = b - 1'),
  M('ab - 3a - 2b + 6 = b - 1'),
  M('ab - 2b - b = 3a - 6 - 1'),
  M('b(a - 3) = 3a - 7'),
  `<b>${M('b = ')}${FM('3a - 7', 'a - 3')}</b> þegar ${M('a ≠ 3')}.`))}`},

hneppi: { t: '7.4 Jöfnuhneppi', h: `
<p>Jöfnuhneppi tveggja línulegra jafna með tveimur óþekktum stærðum er almennt af gerðinni</p>
<div class="steps">${M('Ax + By = C')}<br>${M('Dx + Ey = F')}</div>
<p>þar sem ${M('A')}, ${M('B')}, ${M('C')}, ${M('D')}, ${M('E')} og ${M('F')} eru rauntölur. Að leysa hneppið er að finna öll gildi á
${M('x')} og ${M('y')} þannig að <b>báðar jöfnurnar gildi samtímis</b>. Dæmi:</p>
${SYS(M('2x - 4y = 10'), M('-x + 5y = -2'))}
<p>Hér er ${M('x = 7')}, ${M('y = 1')} lausn, því báðar jöfnurnar eru þá uppfylltar.</p>
${RULE('I) Eyðingaraðferðin', `Margföldum aðra (eða báðar) jöfnurnar svo <b>stuðullinn</b> fyrir framan aðra breytuna verði sá sami en með
<b>gagnstæðu formerki</b>. Leggjum svo jöfnurnar saman – þá eyðist sú breyta út.
<div class="steps">Margföldum (2) með 2: ${M('-2x + 10y = -4')}<br>
Leggjum saman: ${M('2x - 4y - 2x + 10y = 10 - 4')}, svo ${M('6y = 6')} og ${M('y = 1')}.<br>
Setjum ${M('y = 1')} inn í (1): ${M('2x - 4 = 10')}, svo ${M('x = 7')}.</div>`)}
${RULE('II) Innsetningaraðferðin', `Einangrum aðra breytuna í annarri jöfnunni og setjum hana inn í hina.
<div class="steps">Úr (1): ${M('x = 5 + 2y')}<br>
Inn í (2): ${M('-(5 + 2y) + 5y = -2')}, svo ${M('-5 + 3y = -2')}, ${M('3y = 3')} og ${M('y = 1')}.<br>
Þá ${M('x = 5 + 2 * 1 = 7')}.</div>`)}
<p>Báðar aðferðirnar eru mikilvægar. Eyðingaraðferðin er gagnlegri þegar hneppi verða stærri (fleiri jöfnur og óþekktar stærðir),
en innsetningaraðferðin nýtist t.d. þegar jöfnurnar eru ekki línulegar.</p>
${EXMP('Dæmi 7.7 · Jöfnuhneppi', `Leysum hneppið með báðum aðferðum. ${SYS(M('3x - 5y = 10'), M('x - 2y = 4'))}`, STEPS(
  `<b>Eyðing:</b> margföldum (2) með −3: ${M('-3x + 6y = -12')}. Leggjum saman: ${M('y = -2')}.`,
  `Inn í (1): ${M('3x - 5 * (-2) = 10')}, svo ${M('x = 0')}.`,
  `<b>Innsetning:</b> úr (2) fæst ${M('x = 2y + 4')}. Inn í (1): ${M('3(2y + 4) - 5y = 10')}, ${M('6y + 12 - 5y = 10')}, svo ${M('y = -2')} og ${M('x = 0')}.`))}
${EXMP('Dæmi 7.8 · Jöfnuhneppi', `Leysum hneppið með eyðingaraðferðinni. ${SYS(M('-2x + 4y = 2'), M('3x - 7y = -5'))}`, STEPS(
  `Margföldum (1) með 3 og (2) með 2: ${M('-6x + 12y = 6')} og ${M('6x - 14y = -10')}.`,
  `Leggjum saman: ${M('-2y = -4')}, svo ${M('y = 2')}.`,
  `Inn í (1): ${M('-2x + 4 * 2 = 2')}, svo ${M('x = 3')}.`))}
${RULE('Fjöldi lausna', `Almennt gildir eitt af þrennu:
<ul><li>hneppið hefur nákvæmlega <b>eina</b> lausn,</li><li>hneppið hefur <b>enga</b> lausn,</li><li>hneppið hefur <b>óendanlega margar</b> lausnir.</li></ul>`)}
${EXMP('Dæmi 7.9 · Engin lausn', SYS(M('2x - 6y = 3'), M('-x + 3y = -1')), STEPS(
  `Margföldum (2) með 2 og leggjum saman: ${M('2x - 6y - 2x + 6y = 3 - 2')}, eða ${M('0 = 1')}.`,
  `Sú jafna er alltaf ósönn, sama hver ${M('x')} og ${M('y')} eru, svo hneppið hefur <b>enga lausn</b>.`))}
${EXMP('Dæmi 7.10 · Óendanlega margar lausnir', SYS(M('3x - 2y = -2'), M('6x - 4y = -4')), STEPS(
  'Ef við margföldum (1) með 2 fæst (2). Hneppið inniheldur því tvö eintök af sömu jöfnunni!',
  `Einangrum ${M('y')} í (1): ${M('y = ')}${fr(3, 2)}${M('x + 1')}.`,
  `Lausnirnar eru <b>óendanlega margar</b>: ${M('x')} má vera hvað sem er, en ${M('y')} verður að uppfylla jöfnuna hér að ofan.`))}`},

annars: { t: '7.5 Annars stigs jöfnur – þáttun', h: `
<p>Annars stigs jafna er jafna sem skrifa má á forminu</p>
<div class="steps"><b>${M('Ax^2 + Bx + C = 0')}</b></div>
<p>þar sem ${M('A')}, ${M('B')} og ${M('C')} eru rauntölur og ${M('A ≠ 0')}. Í ${M('x^2 + x - 6 = 0')} er ${M('A = 1')}, ${M('B = 1')}, ${M('C = -6')};
í ${M('-2x^2 + 8x = 0')} er ${M('A = -2')}, ${M('B = 8')}, ${M('C = 0')}.</p>
${ATH(`Ef ${M('a * b = 0')} þá er ${M('a = 0')} eða ${M('b = 0')}.`)}
<p>Ein leið er því að <b>þátta</b>: ${M('x^2 + x - 6 = (x - 2)(x + 3) = 0')} gefur ${M('x - 2 = 0')} eða ${M('x + 3 = 0')}, þ.e. ${M('x = 2')} og ${M('x = -3')}.
Eins gefur ${M('-2x(x - 4) = 0')} lausnirnar ${M('x = 0')} og ${M('x = 4')}.</p>
${EXMP('Dæmi 7.11 · Lausn annars stigs jöfnu', `Finnum allar lausnir jöfnunnar ${M('x^2 + 4x - 12 = 0')}.`, STEPS(
  `Þáttum: ${M('(x - 2)(x + 6) = 0')}`,
  `${M('x - 2 = 0')} eða ${M('x + 6 = 0')}, sem gefur <b>${M('x = 2')}</b> og <b>${M('x = -6')}</b>.`))}
${EXMP('Dæmi 7.12 · Fyllt í ferninginn', `Finnum lausnir jöfnunnar ${M('x^2 + 2x - 6 = 0')}.`, STEPS(
  `${M('x^2 + 2x - 6 = (x + 1)^2 - 1 - 6')}`,
  `${M('= (x + 1)^2 - ')}(${RT('7')})²`,
  `= (${M('x + 1 - ')}${RT('7')})(${M('x + 1 + ')}${RT('7')})`,
  `svo lausnirnar eru <b>${M('x = -1 + ')}${RT('7')}</b> og <b>${M('x = -1 - ')}${RT('7')}</b>.`))}
<p>Einfaldasta gerðin er þegar ${M('B = 0')}; þá má umrita jöfnuna á formið ${M('x^2 - K = 0')}. Þrjú tilfelli:</p>
<ol><li>${M('K > 0')}: ${M('(x - ')}${RT(M('K'))})(${M('x + ')}${RT(M('K'))}) = 0, lausnirnar eru ${M('x = ')}${RT(M('K'))} og ${M('x = -')}${RT(M('K'))}.</li>
<li>${M('K = 0')}: ${M('x^2 = 0')}, aðeins lausnin ${M('x = 0')}.</li>
<li>${M('K < 0')}: ${M('x^2 - K')} er alltaf jákvæð, svo jafnan hefur <b>engar lausnir</b>.</li></ol>`},

formula: { t: 'Lausnaformúlan (Imbareglan)', h: `
<p>Það getur verið þreytandi að fylla í ferninginn í hvert sinn, en aðferðina má nota til að sanna reglu sem einfaldar lífið.
MA-ingar kalla hana <b>Imbaregluna</b>; aðrir kalla hana lausnaformúluna fyrir 2. stigs jöfnur.</p>
${DEF('Skilgreining 7.1 · Aðgreinir', `Ef ${M('Ax^2 + Bx + C = 0')} er 2. stigs jafna kallast stærðin
<div class="steps"><b>${M('D = B^2 - 4AC')}</b></div><b>aðgreinir</b> hennar.`)}
${RULE('Regla 7.2 · Lausnaformúla 2. stigs jöfnu', `Höfum ${M('Ax^2 + Bx + C = 0')} með ${M('A ≠ 0')} og aðgreini ${M('D')}.
<ol><li>Ef ${M('D > 0')} eru tvær lausnir: <div class="steps">${MS('x', '1')} = ${F(M('-B + ') + RT(M('D')), M('2A'))} &nbsp; og &nbsp; ${MS('x', '2')} = ${F(M('-B - ') + RT(M('D')), M('2A'))}</div></li>
<li>Ef ${M('D = 0')} er ein lausn: ${M('x = -')}${FM('B', '2A')}</li>
<li>Ef ${M('D < 0')} eru engar rauntalnalausnir.</li></ol>`)}
<details><summary><b>Sönnun</b></summary>
${STEPS(`Deilum með ${M('A')}: ${M('x^2 + ')}${FM('B', 'A')}${M('x + ')}${FM('C', 'A')} = 0`,
  `Fyllum í ferninginn, því (${M('x + ')}${FM('B', '2A')})² = ${M('x^2 + ')}${FM('B', 'A')}${M('x + ')}${FM('B^2', '4A^2')}:`,
  `(${M('x + ')}${FM('B', '2A')})² − ${FM('B^2 - 4AC', '4A^2')} = 0, &nbsp; þ.e. &nbsp; (${M('x + ')}${FM('B', '2A')})² − ${FM('D', '4A^2')} = 0`,
  `Þetta er jafna af gerðinni ${M('X^2 - K = 0')} með ${M('K = ')}${FM('D', '4A^2')}, sem hefur sama formerki og ${M('D')}.`,
  `Ef ${M('D > 0')}: ${M('x + ')}${FM('B', '2A')} = ±${FM('√D', '2A')}, svo ${M('x = ')}${F(M('-B ± ') + RT(M('D')), M('2A'))}.`,
  `Ef ${M('D = 0')}: ${M('x = -')}${FM('B', '2A')}. &nbsp; Ef ${M('D < 0')}: vinstri hliðin er alltaf jákvæð, engin lausn. ■`)}
</details>
${EXMP('Dæmi 7.13', `Finnum lausnir jöfnunnar ${M('2x^2 - 6x - 3 = 0')}.`, STEPS(
  `${M('A = 2')}, ${M('B = -6')}, ${M('C = -3')}: &nbsp; ${M('D = (-6)^2 - 4 * 2 * (-3) = 60 > 0')}`,
  `${M('x = ')}${F(M('6 ± ') + RT('60'), M('2 * 2'))} = <b>${F(M('3 ± ') + RT('15'), '2')}</b>`))}
${EXMP('Dæmi 7.14', `Finnum lausnir jöfnunnar ${M('3x^2 - 5x + 13 = 0')}.`, STEPS(
  `${M('D = (-5)^2 - 4 * 3 * 13 = -131 < 0')}`,
  'Aðgreinirinn er neikvæður, svo jafnan hefur <b>engar rauntalnalausnir</b>.'))}
${EXMP('Dæmi 7.15', `Finnum lausnir jöfnunnar ${M('6x^2 + x - 2 = 0')}.`, STEPS(
  `${M('A = 6')}, ${M('B = 1')}, ${M('C = -2')}: &nbsp; ${M('D = 1^2 - 4 * 6 * (-2) = 49 > 0')}`,
  `${M('x = ')}${F(M('-1 ± ') + RT('49'), M('2 * 6'))} = ${FM('-1 ± 7', '12')}, &nbsp; svo <b>${M('x = ')}${fr(1, 2)}</b> eða <b>${M('x = ')}${neg(2, 3)}</b>`))}`},

umritun: { t: 'Jöfnur sem má umrita', h: `
<p>Stundum þarf að umrita jöfnu áður en hægt er að beita lausnaformúlunni.</p>
${EXMP('Dæmi 7.16 · Þriðja stigs jafna', `Finnum lausnir jöfnunnar ${M('x^3 + 2x^2 + 5x + 2 = 4x^2 + 7x + 2')}.`, STEPS(
  `Drögum alla liði hægra megin frá báðum megin: ${M('x^3 - 2x^2 - 2x = 0')}`,
  `Tökum ${M('x')} út fyrir sviga: ${M('x(x^2 - 2x - 2) = 0')}`,
  `${M('x = 0')} eða ${M('x^2 - 2x - 2 = 0')}: &nbsp; ${M('D = (-2)^2 - 4 * 1 * (-2) = 12')}, &nbsp; ${M('x = ')}${F(M('2 ± ') + RT('12'), '2')} = ${M('1 ± ')}${RT('3')}`,
  `Lausnirnar eru <b>${M('x = 0')}</b>, <b>${M('x = 1 + ')}${RT('3')}</b> og <b>${M('x = 1 - ')}${RT('3')}</b>.`))}
${EXMP('Dæmi 7.17 · Fjórða stigs jafna', `Finnum lausnir jöfnunnar ${M('x^4 - x^2 - 2 = 0')}.`, STEPS(
  `Umritum: ${M('(x^2)^2 - x^2 - 2 = 0')}. Setjum ${M('t = x^2')}: ${M('t^2 - t - 2 = 0')}`,
  `${M('(t + 1)(t - 2) = 0')}, svo ${M('t = -1')} eða ${M('t = 2')}`,
  `${M('x^2 = -1')}: engin lausn. &nbsp; ${M('x^2 = 2')}: ${M('x = ±')}${RT('2')}`,
  `Lausnirnar eru <b>${M('x = ±')}${RT('2')}</b>.`))}`}
},

exercises: [
  { t: 'Dæmi 1', short: '1', s: A1, th: ['linulegar'], g: 'Leysið jöfnurnar.',
    tip: 'Margfaldaðu í gegn með samnefnaranum. Svarið má skrifa sem brot, t.d. 5/12.',
    p: P([
      { ...xq(5 / 12, fr(5, 12), STEPS(M('5 = 12x'))), q: `${FM('5', 'x')} = 12` },
      { ...xq(-4 / 3, neg(4, 3), STEPS(M('2 = 3(x + 2)'), M('3x = -4'))), q: `${FM('2', 'x + 2')} = 3` },
      { ...xq(1 / 8, fr(1, 8), STEPS(`${FM('3', 'x + 1')} = ${fr(8, 3)}`, M('9 = 8(x + 1)'), M('8x = 1'))), q: `${FM('3', 'x + 1')} − 2 = ${fr(2, 3)}` },
      { ...xq(3 / 2, fr(3, 2), STEPS(M('3x = x + 3'), M('2x = 3'))), q: `${FM('3', 'x + 3')} = ${FM('1', 'x')}` },
      { ...xq(-9 / 10, neg(9, 10), STEPS(`Margföldum með ${M('x(x + 3)')}:`, M('x(2x - 1) - 2x(x + 3) = 3(x + 3)'), M('-7x = 3x + 9'), M('-10x = 9'))),
        q: `${FM('2x - 1', 'x + 3')} − 2 = ${FM('3', 'x')}` },
      { ...xq(6 / 7, fr(6, 7), STEPS(`Margföldum með ${M('(x + 2)(x - 3)')}:`, M('2x(x - 3) - 3(x + 2) = 2(x + 2)(x - 3)'), M('2x^2 - 9x - 6 = 2x^2 - 2x - 12'), M('-7x = -6'))),
        q: `${FM('2x', 'x + 2')} − ${FM('3', 'x - 3')} = 2` }
    ]) },
  { t: 'Dæmi 2', short: '2', s: A1, th: ['linulegar'], g: 'Leysið jöfnurnar.',
    tip: 'Leystu upp svigana fyrst, eða margfaldaðu í gegn með samnefnara allra brotanna.',
    p: P([
      { ...xq(4, '4', STEPS(`${M('1 + ')}${FM('x - 4', '5')}${M(' + x = 5')}`, M('x - 4 + 5x = 20'), M('6x = 24'))),
        q: `${M('3 - ')}(${M('2 - ')}${FM('x - 4', '5')}${M(' - x')}) = 5` },
      { ...xq(7, '7', STEPS(`${M('x - 1 + ')}${FM('1 - x', '2')} = 3`, M('2x - 2 + 1 - x = 6'))),
        q: `${M('x - ')}(${M('1 - ')}${FM('1 - x', '2')}) = 3` },
      { ...xq(3 / 5, fr(3, 5), STEPS('Margföldum með 60:', M('10(x - 3) - 5(3 - 2x) = 3(1 - 20x)'), M('20x - 45 = 3 - 60x'), M('80x = 48'))),
        q: `${F(FM('x - 3', '2') + ' − ' + FM('3 - 2x', '4'), '3')} = ${FM('1 - 20x', '20')}` },
      { ...xq(2, '2', STEPS('Margföldum með 12:', M('3(3x + 2) = 24 - 4x - 2(x - 6)'), M('9x + 6 = 36 - 6x'), M('15x = 30'))),
        q: `${FM('3x + 2', '4')} = 2 − ${F(M('x + ') + FM('x - 6', '2'), '3')}` },
      { ...xq(-1 / 7, neg(1, 7), STEPS('Margföldum með 24:', M('12 - 3(x + 3) = 8(4x + 1)'), M('3 - 3x = 32x + 8'), M('-35x = 5'))),
        q: `${F('1 − ' + FM('x + 3', '4'), '2')} = ${FM('4x + 1', '3')}` },
      { ...xq(-14 / 3, neg(14, 3), STEPS('Margföldum með 100:', M('25(x - 2) = 30x - 4(2 - x)'), M('25x - 50 = 34x - 8'), M('-9x = 42'))),
        q: `${FM('x - 2', '4')} = ${F(FM('3x', '2') + ' − ' + FM('2 - x', '5'), '5')}` },
      { ...xq(31 / 10, fr(31, 10), STEPS('Margföldum með 18:', M('2(2x + 1) - 3(x - 1) = 9(4 - x)'), M('x + 5 = 36 - 9x'), M('10x = 31'))),
        q: `${F(FM('2x + 1', '3') + ' − ' + FM('x - 1', '2'), '3')} = ${FM('4 - x', '2')}` },
      { ...xq(26 / 15, fr(26, 15), STEPS('Margföldum með 24:', M('2x - (x - 2) = 8(2x - 3)'), M('x + 2 = 16x - 24'), M('15x = 26'))),
        q: `${F(FM('x', '2') + ' − ' + FM('x - 2', '4'), '6')} = ${FM('2x - 3', '3')}` }
    ]) },
  { t: 'Dæmi 3', short: '3', s: A2, th: ['ojofnur'], g: 'Leysið ójöfnurnar og ritið lausnarmengið sem bil.',
    p: P([
      { q: M('5x + 6 < 7x - 5'), a: STEPS(M('-2x < -11'), `${M('x > ')}${fr(11, 2)}`, `<b>${L} = ]${fr(11, 2)}, ∞[</b>`) },
      { q: M('2 - 4(2x - 3) ≤ 2x - 4'), a: STEPS(M('14 - 8x ≤ 2x - 4'), M('-10x ≤ -18'), `${M('x ≥ ')}${fr(9, 5)}`, `<b>${L} = [${fr(9, 5)}, ∞[</b>`) },
      { q: `${FM('x', '2')} − 2 &lt; ${FM('4x', '5')} + 8`, a: STEPS('Margföldum með 10:', M('5x - 20 < 8x + 80'), M('-3x < 100'), `${M('x > ')}${neg(100, 3)}`, `<b>${L} = ]${neg(100, 3)}, ∞[</b>`) },
      { q: `${M('4x - ')}${FM('3x + 8', '4')} ≤ ${M('3x - ')}${FM('4x + 8', '3')}`, a: STEPS('Margföldum með 12:', M('48x - 9x - 24 ≤ 36x - 16x - 32'), M('19x ≤ -8'), `${M('x ≤ ')}${neg(8, 19)}`, `<b>${L} = ]−∞, ${neg(8, 19)}]</b>`) }
    ]) },
  { t: 'Dæmi 4', short: '4', s: A2, th: ['ojofnur'], g: 'Leysið ójöfnurnar og ritið lausnarmengið sem bil eða sammengi bila.',
    tip: 'Leystu vinstri og hægri ójöfnuna hvora fyrir sig og finndu sniðmengi lausnanna.',
    p: P([
      { q: M('x + 1 < 3x - 3 < x + 7'), a: STEPS(`${M('x + 1 < 3x - 3')} ⇒ ${M('x > 2')}`, `${M('3x - 3 < x + 7')} ⇒ ${M('x < 5')}`, `<b>${L} = ]2, 5[</b>`) },
      { q: M('2x - 3 ≤ x - 1 ≤ 8 - 2x'), a: STEPS(`${M('2x - 3 ≤ x - 1')} ⇒ ${M('x ≤ 2')}`, `${M('x - 1 ≤ 8 - 2x')} ⇒ ${M('x ≤ 3')}`, `<b>${L} = ]−∞, 2]</b>`) },
      { q: M('x + 7 ≤ 4x - 2 ≤ 8 - 2x'), a: STEPS(`${M('x + 7 ≤ 4x - 2')} ⇒ ${M('x ≥ 3')}`, `${M('4x - 2 ≤ 8 - 2x')} ⇒ ${M('x ≤ ')}${fr(5, 3)}`, `Engin tala er bæði ≥ 3 og ≤ ${fr(5, 3)}: <b>${L} = ∅</b>`) },
      { q: `${FM('x', '2')} − 3 ≤ 1 − ${FM('3x + 1', '4')} &lt; ${M('2 + x')}`,
        a: STEPS(`Vinstri (×4): ${M('2x - 12 ≤ 3 - 3x')} ⇒ ${M('x ≤ 3')}`, `Hægri (×4): ${M('3 - 3x < 8 + 4x')} ⇒ ${M('x > ')}${neg(5, 7)}`, `<b>${L} = ]${neg(5, 7)}, 3]</b>`) },
      { q: `${M('3x - ')}${FM('x', '6')} &lt; 1 − ${FM('x - 3', '4')} ≤ ${M('-x')}`,
        a: STEPS(`Vinstri (×12): ${M('34x < 21 - 3x')} ⇒ ${M('x < ')}${fr(21, 37)}`, `Hægri (×4): ${M('7 - x ≤ -4x')} ⇒ ${M('x ≤ ')}${neg(7, 3)}`, `<b>${L} = ]−∞, ${neg(7, 3)}]</b>`) },
      { q: `5 − ${FM('1 - 5x', '2')} ≤ ${M('x + ')}${FM('x - 3', '2')} &lt; ${M('x + 2')}`,
        a: STEPS(`Vinstri (×2): ${M('9 + 5x ≤ 3x - 3')} ⇒ ${M('x ≤ -6')}`, `Hægri: ${FM('x - 3', '2')} &lt; 2 ⇒ ${M('x < 7')}`, `<b>${L} = ]−∞, −6]</b>`) }
    ]) },
  { t: 'Dæmi 5', short: '5', s: A3, th: ['einangrun'], g: 'Einangrið breytistærðina.',
    p: P([
      { q: `${M('y')} úr jöfnunni ${M('xy - 3y = 2x + 5')}`, a: STEPS(M('y(x - 3) = 2x + 5'), `<b>${M('y = ')}${FM('2x + 5', 'x - 3')}</b> (með ${M('x ≠ 3')})`) },
      { q: `${M('x')} úr jöfnunni ${M('xy - 3y = 2x + 5')}`, a: STEPS(M('xy - 2x = 3y + 5'), M('x(y - 2) = 3y + 5'), `<b>${M('x = ')}${FM('3y + 5', 'y - 2')}</b> (með ${M('y ≠ 2')})`) },
      { q: `${M('x')} úr jöfnunni ${M('y = ')}${FM('2x - 1', '3x + 2')}`, a: STEPS(M('3xy + 2y = 2x - 1'), M('3xy - 2x = -2y - 1'), M('x(3y - 2) = -(2y + 1)'), `<b>${M('x = ')}${FM('2y + 1', '2 - 3y')}</b> (með ${M('y ≠ ')}${fr(2, 3)})`) },
      { q: `${M('t')} úr jöfnunni ${M('x = ')}${FM('t + 3', '2t - 1')}`, a: STEPS(M('2xt - x = t + 3'), M('t(2x - 1) = x + 3'), `<b>${M('t = ')}${FM('x + 3', '2x - 1')}</b> (með ${M('x ≠ ')}${fr(1, 2)})`) },
      { q: `${M('x')} úr jöfnunni ${M('y = ')}${FM('2x + 1', 'x - 2')} + 3`, a: STEPS(M('(y - 3)(x - 2) = 2x + 1'), M('xy - 2y - 3x + 6 = 2x + 1'), M('x(y - 5) = 2y - 5'), `<b>${M('x = ')}${FM('2y - 5', 'y - 5')}</b> (með ${M('y ≠ 5')})`) },
      { q: `${M('a')} úr jöfnunni ${M('st = ')}${FM('x + y', 'a + b')}`, a: STEPS(M('st(a + b) = x + y'), M('ast = x + y - bst'), `<b>${M('a = ')}${FM('x + y - bst', 'st')}</b> (með ${M('st ≠ 0')})`) },
      { q: `${M('a')} úr jöfnunni ${M('t = ')}${FM('a + c', 'a + b')}`, a: STEPS(M('at + bt = a + c'), M('a(t - 1) = c - bt'), `<b>${M('a = ')}${FM('c - bt', 't - 1')}</b> (með ${M('t ≠ 1')})`) },
      { q: `${M('a')} úr jöfnunni ${M('t = ')}${FM('1', 'a')} + ${FM('1', 'b')}`, a: STEPS(`${FM('1', 'a')} = ${M('t - ')}${FM('1', 'b')} = ${FM('bt - 1', 'b')}`, `<b>${M('a = ')}${FM('b', 'bt - 1')}</b> (með ${M('bt ≠ 1')})`) }
    ]) },
  { t: 'Dæmi 6', short: '6', s: A4, th: ['hneppi'], g: 'Leysið jöfnuhneppin.',
    tip: 'Notaðu eyðingaraðferðina eða innsetningaraðferðina. Prófaðu svo lausnina í báðum jöfnunum.',
    p: P([
      [M('3x - y = 11'), M('-x + 2y = 3'), `${M('x = 5')} og ${M('y = 4')}`],
      [M('3x + y = 3'), M('x + 2y = -4'), `${M('x = 2')} og ${M('y = -3')}`],
      [M('3x + 2y = 12'), M('-x + 5y = 7'), `${M('x = ')}${fr(46, 17)} og ${M('y = ')}${fr(33, 17)}`],
      [M('2x - y = 3'), M('6x + 4y = 18'), `${M('x = ')}${fr(15, 7)} og ${M('y = ')}${fr(9, 7)}`],
      [M('2x + 3y = 5'), M('4x - 2y = 8'), `${M('x = ')}${fr(17, 8)} og ${M('y = ')}${fr(1, 4)}`],
      [M('-2x + 6y = 10'), M('5x - 3y = 9'), `${M('x = ')}${fr(7, 2)} og ${M('y = ')}${fr(17, 6)}`],
      [M('4x + 2y = 16'), M('3x + 7y = 21'), `${M('x = ')}${fr(35, 11)} og ${M('y = ')}${fr(18, 11)}`],
      [M('8x + 3y = 10'), M('6x - 4y = 3'), `${M('x = ')}${fr(49, 50)} og ${M('y = ')}${fr(18, 25)}`],
      [M('x = 2y - 3'), M('3x + 5y = 2'), `${M('x = -1')} og ${M('y = 1')}`],
      [M('3y + 4 = 2x + 5'), M('4x + 2y + 5 = 2 - 3y'), `${M('x = ')}${neg(7, 11)} og ${M('y = ')}${neg(1, 11)}`],
      [`${fr(3, 5)}${M('x + ')}${fr(1, 2)}${M('y')} = ${fr(7, 10)}`, `${fr(2, 3)}${M('x - ')}${fr(3, 4)}${M('y')} = ${fr(1, 3)}`, `${M('x = ')}${fr(83, 94)} og ${M('y = ')}${fr(16, 47)}`],
      [`${FM('x', '2')} + ${FM('2y', '3')} = ${fr(1, 6)}`, `${FM('2x', '3')} − ${FM('y', '4')} = ${fr(1, 3)}`, `${M('x = ')}${fr(19, 41)} og ${M('y = ')}${neg(4, 41)}`]
    ].map(([e1, e2, ans]) => ({ q: SYS(e1, e2), a: `<b>${ans}</b>` }))) },
  { t: 'Dæmi 7 *', short: '7*', s: A4, th: ['hneppi'], g: `Leysið jöfnuhneppið. ${SYS(M('x + y - z = -2'), M('-x - y - 2z = -4'), M('2x - y + z = 5'))}`,
    tip: `Leggðu (1) og (2) saman – þá hverfa bæði ${M('x')} og ${M('y')}.`,
    p: [{ q: '', a: STEPS(`(1) + (2): ${M('-3z = -6')}, svo ${M('z = 2')}.`,
      `Þá gefur (1): ${M('x + y = 0')}, svo ${M('y = -x')}.`,
      `Inn í (3): ${M('2x + x + 2 = 5')}, svo ${M('x = 1')}.`,
      `<b>${M('x = 1')}, ${M('y = -1')} og ${M('z = 2')}</b>`) }] },
  { t: 'Dæmi 8', short: '8', s: A5, th: ['annars', 'formula'], g: 'Finnið lausnir jafnanna.',
    tip: `Reiknaðu aðgreininn ${M('D = B^2 - 4AC')} fyrst. Sumar má líka þátta beint.`,
    p: P([
      { q: M('x^2 + 3x + 2 = 0'), a: STEPS(M('(x + 1)(x + 2) = 0'), `<b>${BR(M('x = -1'), M('x = -2'))}</b>`) },
      { q: M('2x^2 - 3x - 1 = 0'), a: STEPS(M('D = 9 + 8 = 17'), `<b>${M('x = ')}${F(M('3 ± ') + RT('17'), '4')}</b>`) },
      { q: M('3x^2 + x + 10 = 0'), a: STEPS(M('D = 1 - 120 = -119 < 0'), '<b>Engin lausn</b>') },
      { q: M('-2x^2 + x + 5 = 0'), a: STEPS(M('D = 1 + 40 = 41'), `${M('x = ')}${F(M('-1 ± ') + RT('41'), '−4')}`, `<b>${M('x = ')}${F(M('1 ± ') + RT('41'), '4')}</b>`) },
      { q: M('-x^2 - 2x - 2 = 0'), a: STEPS(M('D = 4 - 8 = -4 < 0'), '<b>Engin lausn</b>') },
      { q: M('4x^2 - 48 = 0'), a: STEPS(M('x^2 = 12'), `<b>${M('x = ±2')}${RT('3')}</b>`) },
      { q: M('15x - 3 = 0'), a: STEPS(`Þetta er 1. stigs jafna: <b>${M('x = ')}${fr(1, 5)}</b>`) },
      { q: M('7x^2 + 5x = 0'), a: STEPS(M('x(7x + 5) = 0'), `<b>${BR(M('x = 0'), M('x = ') + neg(5, 7))}</b>`) },
      { q: M('-3x^2 + 5x + 1 = 0'), a: STEPS(M('D = 25 + 12 = 37'), `<b>${M('x = ')}${F(M('5 ± ') + RT('37'), '6')}</b>`) },
      { q: M('-5x^2 + 3x - 5 = 0'), a: STEPS(M('D = 9 - 100 = -91 < 0'), '<b>Engin lausn</b>') }
    ]) },
  { t: 'Dæmi 9', short: '9', s: A5, th: ['umritun', 'formula'], g: 'Finnið lausnir jafnanna.',
    p: P([
      { q: M('x^3 + 2x^2 - 3x = 0'), a: STEPS(M('x(x^2 + 2x - 3) = x(x + 3)(x - 1) = 0'), `<b>${M('x = -3')}, ${M('x = 0')} eða ${M('x = 1')}</b>`) },
      { q: M('2x^2 + x - 4 = 3x^2 - 6'), a: STEPS(M('0 = x^2 - x - 2 = (x - 2)(x + 1)'), `<b>${BR(M('x = -1'), M('x = 2'))}</b>`) },
      { q: M('2x^4 + 5x^2 - 7 = 0'), a: STEPS(`${M('t = x^2')}: ${M('2t^2 + 5t - 7 = (2t + 7)(t - 1) = 0')}`, `${M('t = 1')} gefur ${M('x = ±1')}; ${M('t = -')}${fr(7, 2)} gefur enga lausn.`, `<b>${M('x = ±1')}</b>`) },
      { q: M('(x^2 - x - 2)(x^2 + x - 2) = 0'), a: STEPS(M('(x - 2)(x + 1)(x + 2)(x - 1) = 0'), `<b>${M('x = ±1')} eða ${M('x = ±2')}</b>`) },
      { q: M('(x^2 + 1)(x^2 + 2)(x^2 + 3) = 0'), a: STEPS('Allir þættirnir eru alltaf jákvæðir.', '<b>Engin lausn</b>') },
      { q: M('x^2(x^2 - 4)(x + 3) = 0'), a: STEPS(M('x^2(x - 2)(x + 2)(x + 3) = 0'), `<b>${M('x = -3')}, ${M('x = ±2')} eða ${M('x = 0')}</b>`) }
    ]) },
  { t: 'Dæmi 10 *', short: '10*', s: A5, th: ['formula'],
    g: 'Skiptið tölunni 46 upp í tvo jákvæða liði (þ.e. skrifið töluna sem summu tveggja jákvæðra talna) þannig að margfeldi liðanna sé 513.',
    tip: `Kallaðu aðra töluna ${M('x')}. Þá er hin ${M('46 - x')}.`,
    p: [{ q: '', a: STEPS(M('x(46 - x) = 513'), M('x^2 - 46x + 513 = 0'), `${M('D = 2116 - 2052 = 64')}, ${M('x = ')}${FM('46 ± 8', '2')}`, '<b>Tölurnar eru 19 og 27.</b>') }] },
  { t: 'Dæmi 11 *', short: '11*', s: A5, th: ['annars'],
    g: `Í textanum er fullyrt að ef ${M('B = 0')} í jöfnunni ${M('Ax^2 + Bx + C = 0')} megi umrita jöfnuna á formið ${M('x^2 - K = 0')}.
      Sýnið að þetta sé rétt með því að tilgreina gildi stærðarinnar ${M('K')} út frá ${M('A')}, ${M('B')} og ${M('C')}.`,
    p: [{ q: '', a: STEPS(`${M('Ax^2 + C = 0')}. Deilum með ${M('A ≠ 0')}: ${M('x^2 + ')}${FM('C', 'A')} = 0, þ.e. ${M('x^2 - ')}(−${FM('C', 'A')}) = 0`,
      `<b>${M('K = -')}${FM('C', 'A')}</b>`) }] },
  { t: 'Dæmi 12 *', short: '12*', s: A5, th: ['formula'],
    g: `Gerum ráð fyrir að aðgreinir jöfnunnar ${M('Ax^2 + Bx + C = 0')} sé jákvæður og að ${MS('x', '1')} og ${MS('x', '2')} séu lausnir hennar.
      Notið lausnaformúluna til að sýna að <div class="steps">${MS('x', '1')} + ${MS('x', '2')} = −${FM('B', 'A')} &nbsp; og &nbsp; ${MS('x', '1')} · ${MS('x', '2')} = ${FM('C', 'A')}</div>`,
    p: [{ q: '', a: STEPS(
      `${MS('x', '1')} + ${MS('x', '2')} = ${F(M('-B + ') + RT(M('D')) + M(' - B - ') + RT(M('D')), M('2A'))} = ${FM('-2B', '2A')} = −${FM('B', 'A')}`,
      `${MS('x', '1')} · ${MS('x', '2')} = ${F(`(${M('-B + ')}${RT(M('D'))})(${M('-B - ')}${RT(M('D'))})`, M('4A^2'))} = ${FM('B^2 - D', '4A^2')} = ${FM('B^2 - B^2 + 4AC', '4A^2')} = ${FM('C', 'A')}`) + MINE }] },
  { t: 'Dæmi 13 *', short: '13*', s: A5, th: ['formula'],
    g: `Fyrir hvaða gildi á ${M('B')} hefur jafnan ${M('x^2 + Bx + 6 = 0')} einungis eina lausn?`,
    tip: `Ein lausn þýðir að ${M('D = 0')}.`,
    p: [{ q: '', a: STEPS(M('D = B^2 - 4 * 1 * 6 = B^2 - 24 = 0'), `<b>${M('B = -2')}${RT('6')} og ${M('B = 2')}${RT('6')}</b>`) }] }
]
};
})());
