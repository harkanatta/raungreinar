/* Kafli 2 – Hreyfifræði. Transcribed from "02 Hreyfifræði.pdf" (15 pages, answers on p. 15).
   Answers to Spurningar 2.6 from "Svör við spurningum - kafli 2.pdf".
   Worked solutions for Æfing are written for the app; the final answers are the book's. */
Book.add((() => {
const vm = MS('v', 'meðal'), am = MS('a', 'meðal');
return {
n: 2,
title: 'Hreyfifræði',
theory: {

inngangur: { t: '2.1–2.2 Inngangur og líkön', h: `
<p>Hreyfing er allt í kringum okkur og hún kemur við sögu í nær öllum undirgreinum eðlisfræðinnar.
Í þessum kafla skoðum við fyrst og fremst hreyfingu eftir <b>beinni línu</b> – kallað <b>einvíð hreyfing</b> eða línuleg hreyfing.</p>
${DEF('Líkanagerð', `Við búum til einföld, oft stærðfræðileg, <b>líkön</b> af flóknum fyrirbærum. Líkan felur oft í sér
<b>skýringarmynd</b>, <b>hnitakerfi</b>, <b>tákn</b> og <b>jöfnur</b>.`)}
<p>Þegar hlutur hreyfist eftir beinni línu teiknum við talnalínu samsíða hreyfingunni, kvörðum hana, áttum hana og sýnum eininguna.
Þessa talnalínu köllum við <b>stöðuás</b>.</p>
${ATH('Í <b>eindalíkaninu</b> lítum við á hlutinn (manneskju, bíl, …) sem lítinn punkt sem hefur nákvæma staðsetningu á ásnum.', 'Eindalíkanið')}`},

faersla: { t: '2.3 Staðsetning, færsla og vegalengd', h: `
<p>Staðsetningu á stöðuás táknum við með ${M('x')} (eða ${M('y')} ef ásinn er lóðréttur). Ef staðsetningin breytist merkjum við hana
${M('x_0')} (í upphafi), ${M('x_1')}, ${M('x_2')} o.s.frv.</p>
${DEF('Færsla', `Færslan frá ${M('x_0')} til ${M('x')} er <div class="steps">${M('Δx = x - x_0')}</div>
<b>Formerkið</b> segir í hvora áttina er farið eftir stöðuásnum. Færslan getur verið neikvæð.`)}
${ATH(`Gríski stafurinn Δ (stórt delta) táknar <b>breytingu</b>. ${M('Δx')} er breyting á staðsetningu.`, 'Breyting á …')}
${axisfig({ min: 0, max: 9, name: 'x (m)', pts: [[2, 'x₁ = 2 m'], [7, 'x₂ = 7 m']], arrows: [[2, 7, 'Δx = 5 m']], alt: 'Færsla frá 2 m til 7 m er 5 m' })}
<p>Færslan frá ${M('x_1')} = ${U('2', 'm')} til ${M('x_2')} = ${U('7', 'm')} er ${M('Δx = x_2 - x_1')} = ${U('7', 'm')} − ${U('2', 'm')} = <b>${U('5', 'm')}</b> (í stefnu ássins).</p>
${axisfig({ min: 0, max: 9, name: 'x (m)', pts: [[2, 'x₁ = 2 m'], [7, 'x₂ = 7 m']], arrows: [[7, 2, 'Δx = −5 m']], alt: 'Færsla frá 7 m til 2 m er −5 m' })}
<p>Færslan frá ${M('x_2')} til ${M('x_1')} er ${M('Δx = x_1 - x_2')} = ${U('2', 'm')} − ${U('7', 'm')} = <b>${U('-5', 'm')}</b> (gegn stefnu ássins).</p>
${DEF('Fjarlægð (vegalengd)', `Fjarlægðin milli ${M('x_0')} og ${M('x')} er <b>stærð</b> (lengd) færslunnar:
<div class="steps">${M('d = |Δx| = |x - x_0|')}</div>Fjarlægð er aldrei neikvæð.`)}
${EXMP('Sýnidæmi 2.1 · Færsla og fjarlægð', `${M('x_0')} = ${U('1,50', 'm')}, ${M('x_1')} = ${U('12,0', 'm')} og ${M('x_2')} = ${U('-7,50', 'm')}. Finnum
<br>a) færsluna frá ${M('x_1')} til ${M('x_2')}, b) vegalengdina milli ${M('x_1')} og ${M('x_2')},
<br>c) færsluna frá ${M('x_2')} til ${M('x_0')}, d) stærð færslunnar frá ${M('x_2')} til ${M('x_0')}.`, STEPS(
  `a) ${M('Δx = x_2 - x_1')} = ${U('-7,50', 'm')} − ${U('12,0', 'm')} = <b>${U('-19,5', 'm')}</b>`,
  `b) ${M('d = |x_2 - x_1|')} = |${U('-19,5', 'm')}| = <b>${U('19,5', 'm')}</b>`,
  `c) ${M('Δx = x_0 - x_2')} = ${U('1,50', 'm')} − (${U('-7,50', 'm')}) = <b>${U('9,00', 'm')}</b>`,
  `d) ${M('d = |Δx|')} = <b>${U('9,00', 'm')}</b>`))}`},

hradi: { t: '2.4 Hraði og ferð', h: `
<p>Í eðlisfræði hafa orðin <b>hraði</b> og <b>ferð</b> ekki sömu merkingu, þó þau séu notuð um sama hlutinn í daglegu tali.</p>
<p><b>Tímabil</b> frá ${M('t_0')} til ${M('t')} er ${M('Δt = t - t_0')}. Ef ${M('t_0 = 0')} er einfaldlega ${M('Δt = t')}.</p>
${DEF('Meðalhraði', `Ef færsla hlutar á tímabilinu ${M('Δt')} er ${M('Δx')}, er meðalhraðinn
<div class="steps">${vm} = ${F(M('Δx'), M('Δt'))}</div>SI-eining hraða er ${U('', 'm/s')}.
Hraði hefur bæði <b>stærð og stefnu</b> – formerkið segir stefnuna eftir stöðuásnum.`)}
${EXMP('Sýnidæmi 2.2 · Meðalhraði hlaupara', `Þegar Usain Bolt sló heimsmet í ${U('100', 'm')} hlaupi var meðalhraði hans ${U('10,44', 'm/s')}. Hver var tíminn?`,
  STEPS(`${M('Δt = ')}${F(M('Δx'), vm)} = ${F(U('100', 'm'), U('10,44', 'm/s'))} = ${U('9,57854', 's')}`,
  `Með þremur markverðum tölustöfum: <b>${U('9,58', 's')}</b>`))}
${EXMP('Sýnidæmi 2.3 · Meðalhraði', `Hver er meðalhraði hlutar sem fer frá ${M('y_A')} = ${U('15', 'm')} í ${M('y_B')} = ${U('8,0', 'm')} á ${U('2,0', 's')}?`,
  STEPS(`${vm} = ${F(M('y_B - y_A'), M('Δt'))} = ${F(U('8,0', 'm') + ' − ' + U('15', 'm'), U('2,0', 's'))} = <b>${U('-3,5', 'm/s')}</b>`,
  'Mínusinn segir að hluturinn hreyfist <b>gegn</b> stefnu stöðuássins.'))}
${DEF('Ferð', `<b>Ferð</b> er stærð hraðans – án stefnu (án formerkis). Ef meðalhraðinn er ${U('-3,5', 'm/s')} er meðalferðin ${U('3,5', 'm/s')}.
<br>Við notum sama táknið, ${M('v')}, fyrir hraða og ferð. Samhengið ræður.`)}
${EXMP('Sýnidæmi 2.4 · Hraði og ferð', `Pétur hleypur á hraðanum ${U('7', 'm/s')} en Jói á hraðanum ${U('-7', 'm/s')}. Þeir eru ekki á sama hraða en hafa sömu ferð. Hvernig má það vera?`,
  'Þeir hlaupa hvor í sína áttina. Stefnan er ólík og því hraðinn ólíkur, en báðir hafa <b>ferðina</b> ' + U('7', 'm/s') + '.')}`},

jafnhradi: { t: 'Jafn hraði', h: `
<p>Ef meðalhraðinn helst óbreyttur, sama hvaða hluti ferðarinnar er skoðaður, hreyfist hluturinn með <b>jöfnum hraða</b>.</p>
${RULE('Jafn hraði | Hreyfijafna', `Hlutur sem fer frá ${M('x_0')} með jafna hraðanum ${M('v')} er í punktinum ${M('x')} eftir tímann ${M('t')}:
<div class="steps"><b>${M('x = vt + x_0')}</b></div>`)}
${EXMP('Sýnidæmi 2.5 · Jafn hraði', `Dróni flýgur á jöfnu ferðinni ${U('5,6', 'm/s')} beint upp. Í hvaða hæð er hann eftir ${U('6,0', 's')} ef hann byrjar á jörðinni?`,
  STEPS(`Látum ásinn stefna upp: ${M('v')} = ${U('5,6', 'm/s')}, ${M('t')} = ${U('6,0', 's')}, ${M('y_0')} = ${U('0,0', 'm')}.`,
  `${M('y_1 = vt + y_0')} = ${U('5,6', 'm/s')} · ${U('6,0', 's')} + ${U('0,0', 'm')} = ${U('33,6', 'm')}`,
  `Með tveimur markverðum tölustöfum: <b>${U('34', 'm')}</b>`))}
${ATH(`Þegar tveir hlutir hreyfast merkjum við stærðirnar með niðurskrift, t.d. ${M('v_A')} og ${M('v_B')}.`, 'Merkjum breytur skynsamlega')}
${EXMP('Sýnidæmi 2.6 · Tveir á jöfnum hraða', `Jói og Tryggvi hjóla í sömu átt. Jói hjólar á ${U('11,1', 'm/s')} og er með ${U('50,0', 'm')} forskot á Tryggva sem hjólar á ${U('12,5', 'm/s')}. Eftir hve langan tíma nær Tryggvi Jóa?`,
  STEPS(`Tryggvi byrjar í ${M('x_T')} = ${U('0', 'm')}, Jói í ${M('x_J')} = ${U('50,0', 'm')}. Þeir mætast í ${M('x_S')} eftir tímann ${M('t')}.`,
  `Tryggvi: ${M('x_S')} = ${U('12,5', 'm/s')} · ${M('t')} + ${U('0', 'm')}`,
  `Jói: ${M('x_S')} = ${U('11,1', 'm/s')} · ${M('t')} + ${U('50', 'm')}`,
  `Báðar jafngilda ${M('x_S')}: ${U('12,5', 'm/s')} · ${M('t')} = ${U('11,1', 'm/s')} · ${M('t')} + ${U('50', 'm')}`,
  `${U('1,4', 'm/s')} · ${M('t')} = ${U('50', 'm')} &nbsp;⇒&nbsp; ${M('t = ')}${F(U('50', 'm'), U('1,4', 'm/s'))} = ${U('35,7143', 's')}`,
  `Tryggvi nær Jóa eftir <b>${U('35,7', 's')}</b>`))}`},

hrodun: { t: '2.5 Hraðabreyting og meðalhröðun', h: `
${DEF('Hraðabreyting', `Ef upphafshraðinn er ${M('v_0')} og lokahraðinn ${M('v')} er hraðabreytingin <div class="steps">${M('Δv = v - v_0')}</div>`)}
${EXMP('Sýnidæmi 2.7', `Hraði breytist úr ${U('2,0', 'm/s')} í ${U('7,0', 'm/s')}. Hver er hraðabreytingin?`,
  `${M('Δv')} = ${U('7,0', 'm/s')} − ${U('2,0', 'm/s')} = <b>${U('5,0', 'm/s')}</b>`)}
${EXMP('Sýnidæmi 2.8', `Hraði breytist úr ${U('2,5', 'm/s')} í ${U('-4,5', 'm/s')}. Hver er hraðabreytingin?`,
  `${M('Δv')} = ${U('-4,5', 'm/s')} − ${U('2,5', 'm/s')} = <b>${U('-7,0', 'm/s')}</b>`)}
${DEF('Meðalhröðun', `Ef hraðabreyting hlutar er ${M('Δv')} á tímabilinu ${M('Δt')} er meðalhröðunin
<div class="steps">${am} = ${F(M('Δv'), M('Δt'))}</div>Eining hröðunar er ${U('', 'm/s^2')}. Hröðun segir <b>hversu ört hraðinn breytist</b>, og hún hefur stefnu (formerki).`)}
${EXMP('Sýnidæmi 2.9 · Meðalhröðun', `Kyrrstæður sportbíll nær ${U('100,0', 'km/klst')} á ${U('3,8', 's')}. Hver er meðalhröðunin í ${U('', 'm/s^2')}?`,
  STEPS(`${M('v')} = ${U('100,0', 'km/klst')} · ${F(U('1000', 'm'), U('1', 'km'))} · ${F(U('1', 'klst'), U('3600', 's'))} = ${U('27,7778', 'm/s')}`,
  `${am} = ${F(M('v - v_0'), M('Δt'))} = ${F(U('27,7778', 'm/s') + ' − ' + U('0', 'm/s'), U('3,8', 's'))} = ${U('7,3099', 'm/s^2')}`,
  `Svar: <b>${U('7,3', 'm/s^2')}</b>`))}
${ATH(`Til að breyta ${U('', 'km/klst')} í ${U('', 'm/s')} er deilt með 3,6. Til baka er margfaldað með 3,6.`, 'Gott að muna')}`},

jofnhrodun: { t: 'Jöfn hröðun – hreyfijöfnur I, II og III', h: `
<p>Ef meðalhröðunin helst óbreytt hreyfist hluturinn með <b>jafnri hröðun</b>. Þá gilda þrjár jöfnur.</p>
${RULE('Jöfn hröðun | Hreyfijafna I', `Hlutur með hraðann ${M('v_0')} sem fær jöfnu hröðunina ${M('a')} hefur eftir tímann ${M('t')} hraðann
<div class="steps"><b>${M('v = at + v_0')}</b></div>`)}
${EXMP('Sýnidæmi 2.10', `Kyrrstæður hlutur fær jafna hröðun ${U('4,0', 'm/s^2')} í ${U('1,0', 'mín')}. Hver verður hraðinn?`,
  STEPS(`${M('v_0')} = ${U('0', 'm/s')}, ${M('a')} = ${U('4,0', 'm/s^2')}, ${M('t')} = ${U('60', 's')}`,
  `${M('v = at + v_0')} = ${U('4,0', 'm/s^2')} · ${U('60', 's')} + 0 = <b>${U('2,4*10^2', 'm/s')}</b>`))}
${EXMP('Sýnidæmi 2.11', `Hjólreiðakona á ${U('22', 'm/s')} hægir á sér niður í ${U('5,0', 'm/s')} á ${U('3,0', 's')} með jafnri hröðun. Hver er hröðunin?`,
  STEPS(`${M('a = ')}${F(M('v - v_0'), M('t'))} = ${F(U('5,0', 'm/s') + ' − ' + U('22', 'm/s'), U('3,0', 's'))} = ${U('-5,66667', 'm/s^2')}`,
  `Hröðunin er <b>${U('-5,7', 'm/s^2')}</b>`))}
${RULE('Jöfn hröðun | Hreyfijafna II', `Hlutur í ${M('x_0')} með hraða ${M('v_0')} og jafna hröðun ${M('a')} er eftir tímann ${M('t')} í
<div class="steps"><b>${M('x = ')}${F(1, 2)}${M('at^2 + v_0t + x_0')}</b></div>`)}
${EXMP('Sýnidæmi 2.12', `Tommi situr kyrr í skíðabrekku og sér Tinnu leggja af stað ${U('25', 'm')} ofar. Hún rennur beint fram hjá honum með jafnri hröðun ${U('1,2', 'm/s^2')}. Hvar er hún miðað við Tomma eftir ${U('12', 's')}?`,
  STEPS(`Tommi er í ${U('0', 'm')}, Tinna byrjar í ${M('x_0')} = ${U('-25', 'm')} með ${M('v_0')} = ${U('0', 'm/s')}.`,
  `${M('x = ')}${F(1, 2)} · ${U('1,2', 'm/s^2')} · (${U('12', 's')})² + 0 − ${U('25', 'm')} = ${U('61,4', 'm')}`,
  `Tinna er <b>${U('61', 'm')}</b> neðan við Tomma.`))}
${ATH(`Hlutir í frjálsu falli nálægt jörðinni hafa hröðunina ${U('9,80', 'm/s^2')} <b>beint niður</b> (ef loftmótstaða er lítil). Formerkið fer eftir því hvernig við áttum ásinn. Á tunglinu er þyngdarhröðunin ${U('1,62', 'm/s^2')}.`, 'Þyngdarhröðun')}
${EXMP('Sýnidæmi 2.13 · Kasthreyfing', `Einar sparkar bolta beint upp og grípur hann í sömu hæð. Boltinn er á lofti í ${U('3,20', 's')}. Hver er upphafshraðinn?`,
  STEPS(`Ásinn upp: ${M('y_0 = y_1 = 0')}, ${M('a')} = ${U('-9,80', 'm/s^2')}, ${M('t')} = ${U('3,20', 's')}.`,
  `Einöngrum ${M('v_0')} í ${M('y = ')}${F(1, 2)}${M('at^2 + v_0t + y_0')}:`,
  `${M('v_0 = ')}${F(M('y - y_0 - ') + F(1, 2) + M('at^2'), M('t'))}`,
  `= ${F('0 − 0 − ' + F(1, 2) + ' · (' + U('-9,80', 'm/s^2') + ') · (' + U('3,20', 's') + ')²', U('3,20', 's'))} = ${U('15,68', 'm/s')}`,
  `Upphafshraðinn er <b>${U('15,7', 'm/s')}</b> beint upp.`))}
${RULE('Jöfn hröðun | Hreyfijafna III', `Samband lokahraða, upphafshraða, færslu og hröðunar: <div class="steps"><b>${M('v^2 = 2aΔx + v_0^2')}</b></div>`)}
${EXMP('Sýnidæmi 2.14', `Flugvél fer ${U('1,5', 'km')} með jafnri hröðun ${U('2,5', 'm/s^2')} í flugtaki. Hver er ferðin þegar hún fer á loft?`,
  STEPS(`${M('v_0')} = ${U('0', 'm/s')}, ${M('Δx')} = ${U('1500', 'm')}, ${M('a')} = ${U('2,5', 'm/s^2')}`,
  `${M('v = ')}${RT(M('2aΔx + v_0^2'))} = ${RT('2 · ' + U('2,5', 'm/s^2') + ' · ' + U('1500', 'm') + ' + 0')} = ${U('86,6025', 'm/s')}`,
  `Ferðin er <b>${U('87', 'm/s')}</b>`))}
${EXMP('Sýnidæmi 2.15', `Steinn fellur úr kyrrstöðu ofan í brunn með hröðun ${U('9,80', 'm/s^2')} niður og lendir í vatninu á ferðinni ${U('35,0', 'm/s')}. Hve langt er niður að vatni?`,
  STEPS(`Ásinn niður, þá er hröðunin jákvæð. Einöngrum ${M('Δy')} í ${M('v_1^2 = 2aΔy + v_0^2')}:`,
  `${M('Δy = ')}${F(M('v_1^2 - v_0^2'), M('2a'))} = ${F('(' + U('35,0', 'm/s') + ')² − 0', '2 · ' + U('9,80', 'm/s^2'))} = <b>${U('62,5', 'm')}</b>`))}`},

samantekt: { t: 'Samantekt á jöfnum', h: `
${TB(['', 'Jafna'], [
  ['Meðalhraði', `${vm} = ${F(M('Δx'), M('Δt'))}`],
  ['Meðalhröðun', `${am} = ${F(M('Δv'), M('Δt'))}`],
  ['Jafn hraði', M('x = vt + x_0')],
  ['Jöfn hröðun I', M('v = at + v_0')],
  ['Jöfn hröðun II', `${M('x = ')}${F(1, 2)}${M('at^2 + v_0t + x_0')}`],
  ['Jöfn hröðun III', M('v^2 = 2aΔx + v_0^2')]
])}
${ATH(`Ef hraðinn er fastur er hann jafn meðalhraðanum, og ef hröðunin er föst er hún jöfn meðalhröðuninni.`, 'Jafn hraði og jöfn hröðun')}`}
},

exercises: [
  /* ---------- 2.6 Spurningar (the book has no answers to these) ---------- */
  SP(1, { s: '2.6 Spurningar', th: ['faersla'],
    g: 'Hver er munurinn á hugtökunum <b>færsla</b> og <b>fjarlægð</b> milli tveggja punkta?',
    p: [{ q: '', a: `Færsla frá einum punkti til annars felur í sér upplýsingar um hversu langt er ferðast og í hvaða átt, þ.e. <b>færsla hefur bæði stærð og stefnu</b> (${M('Δx = x - x_0')}). Fjarlægð milli tveggja punkta segir okkur hver vegalengdin á milli þeirra er, þ.e. <b>fjarlægð felur eingöngu í sér upplýsingar um stærð</b> (${M('d = |Δx|')}).` }] }),
  SP(2, { s: '2.6 Spurningar', th: ['hradi'],
    g: 'Hver er munurinn á hugtökunum <b>hraði</b> og <b>ferð</b>?',
    p: [{ q: '', a: 'Hraði felur í sér upplýsingar um hversu ört staðsetning hlutar breytist og í hvaða átt, þ.e. <b>hraði hefur bæði stærð og stefnu</b>. Ferð er annað orð yfir stærð hraðans – <b>ferð felur ekki í sér upplýsingar um stefnu</b>.' }] }),
  SP(3, { s: '2.6 Spurningar', th: ['hradi'],
    g: 'Orðið <b>hraðamælir</b> er ekki lýsandi fyrir bíla, a.m.k. ekki að mati eðlisfræðinga. Hvað ætti mælirinn frekar að heita?',
    p: [{ q: '', a: 'Hraði felur í sér stærð (ferðina) og stefnu. Hraðamælir sýnir aðeins ferð en ekki stefnu. Kannski væri <b>ferðamælir</b> heppilegra orð.' }] }),
  SP(4, { s: '2.6 Spurningar', th: ['hradi'],
    g: `Ingvar keyrir ${U('100', 'km')} á ferðinni ${U('50', 'km/klst')} og aðra ${U('100', 'km')} á ferðinni ${U('100', 'km/klst')}. Ingvar heldur að meðalferðin hafi verið ${U('75', 'km/klst')} en svo er ekki. Útskýrðu hvers vegna – án þess að reikna.`,
    p: [{ q: '', a: `Ingvar eyðir <b>meiri tíma</b> á ferðinni ${U('50', 'km/klst')} heldur en á ferðinni ${U('100', 'km/klst')} og meðalferðin er því nær ${U('50', 'km/klst')} heldur en ${U('100', 'km/klst')}. Við getum reiknað meðalferðina nákvæmlega: Ingvar fer ${U('200', 'km')} á ${U('3', 'klst')}, svo meðalferðin er um ${U('67', 'km/klst')}.` }] }),
  SP(5, { s: '2.6 Spurningar', th: ['hrodun'],
    g: 'Hvað má fullyrða um <b>ferð</b> hlutar ef hraði og hröðun hans hafa <b>sömu stefnu</b>?',
    p: [mc('', ['Ferðin eykst', 'Ferðin minnkar', 'Ferðin er óbreytt'], 0, 'Ef hraði og hröðun hafa sömu stefnu eykst ferðin.')] }),
  SP(6, { s: '2.6 Spurningar', th: ['jofnhrodun'],
    g: 'Bolta er sleppt fram af svölum á sama tíma og öðrum bolta er kastað beint upp í garðinum fyrir neðan. Hvaða fullyrðing lýsir hröðun boltanna best þegar þeir mætast?',
    p: [mc('', [
      'Hröðun boltans sem var sleppt er meiri.',
      'Hröðun boltans sem var kastað er meiri.',
      'Hröðun beggja er jafn stór en hefur mismunandi stefnu.',
      'Hröðun beggja bolta er nákvæmlega eins.',
      'Við höfum ekki nægar upplýsingar.'], 3, `Báðir boltarnir hafa hröðunina ${U('9,80', 'm/s^2')} niður á við, þ.e. hröðun beggja boltanna er nákvæmlega eins.`)] }),
  SP(7, { s: '2.6 Spurningar', th: ['jofnhrodun', 'hradi'],
    g: 'Bolta er kastað beint upp með ákveðnum hraða og hann fellur svo aftur til jarðar.',
    p: P([
      tf('Mun boltinn hafa sama <b>hraðann</b> á tveimur mismunandi tímapunktum?', false, `Hröðun boltans er allan tímann ${U('9,80', 'm/s^2')} niður á við. Hraði boltans er sífellt að breytast í sömu átt og mun því aldrei verða sá sami á tveimur ólíkum tímapunktum.`, ['Já', 'Nei']),
      tf('Mun boltinn hafa sömu <b>ferðina</b> á tveimur mismunandi tímapunktum?', true, 'Ferð boltans minnkar á leið upp en eykst svo aftur á leið niður. Boltinn mun því vera á sömu ferð aftur á ólíkum tímapunktum.', ['Já', 'Nei']),
      { q: 'Hver verður minnsta ferð boltans í þessu ferli?', a: `<b>${U('0', 'km/klst')}</b> – í efstu stöðu, einmitt þegar hann hættir að fara upp og byrjar að fara niður.` }
    ]) }),
  SP(8, { s: '2.6 Spurningar', th: ['jofnhrodun'],
    g: `Hlutur með jafna hröðun er í punktinum ${M('x_0')} á tilteknu augnabliki. Hvað má fullyrða um stefnu hraðans á þessu augnabliki ef hluturinn mun snúa aftur í sama punkt síðar?`,
    p: [{ q: '', a: 'Hraði hlutarins og hröðunin hafa <b>gagnstæðar stefnur</b>. (Hluturinn hægir á sér, snýr við og kemur til baka – eins og bolti sem kastað er upp.)' }] }),
  SP(9, { s: '2.6 Spurningar', th: ['faersla', 'hradi', 'hrodun'],
    g: 'Hvert þessara hugtaka felur í sér <b>stefnu</b>?',
    p: P([
      tf('Færsla', true, '', ['Hefur stefnu', 'Engin stefna']),
      tf('Ferð', false, 'Ferð er aðeins stærð.', ['Hefur stefnu', 'Engin stefna']),
      tf('Fjarlægð', false, 'Fjarlægð er aðeins stærð.', ['Hefur stefnu', 'Engin stefna']),
      tf('Hraði', true, '', ['Hefur stefnu', 'Engin stefna']),
      tf('Hröðun', true, '', ['Hefur stefnu', 'Engin stefna'])
    ]) }),

  /* ---------- 2.7 Æfing (answers from 2.8 Svör) ---------- */
  AE(1, { s: '2.7 Æfing', th: ['jafnhradi'],
    g: `Í flugtaki flýgur þyrla beint upp með jafna hraðanum ${U('4,3', 'm/s')} í ${U('14,7', 's')}. Í hvaða hæð er þyrlan að flugtaki loknu?`,
    tip: `Jafn hraði: ${M('y = vt + y_0')}`,
    p: [num('Hæðin:', 63, 'm', STEPS(`${M('y')} = ${U('4,3', 'm/s')} · ${U('14,7', 's')} + 0 = ${U('63,2', 'm')} ≈ ${U('63', 'm')}`))] }),
  AE(2, { s: '2.7 Æfing', th: ['jafnhradi'],
    g: `Bolti rúllar í beina stefnu með jafna hraðanum ${U('2,3', 'm/s')} og fer samtals ${U('11,7', 'm')}. Hve lengi er hann að rúlla þessa vegalengd?`,
    tip: `Einangraðu ${M('t')} í ${M('Δx = vt')}.`,
    p: [num('Tíminn:', 5.1, 's', STEPS(`${M('t = ')}${F(M('Δx'), M('v'))} = ${F(U('11,7', 'm'), U('2,3', 'm/s'))} = ${U('5,09', 's')} ≈ ${U('5,1', 's')}`))] }),
  AE(3, { s: '2.7 Æfing', th: ['hradi', 'jafnhradi'],
    g: `Pétur hleypur ${U('100,0', 'm')} með jöfnum hraða á beinni braut og það tekur ${U('13,6', 's')}. Hver er hraði Péturs?`,
    p: [num('Hraðinn:', 7.35, 'm/s', STEPS(`${M('v = ')}${F(M('Δx'), M('Δt'))} = ${F(U('100,0', 'm'), U('13,6', 's'))} = ${U('7,35', 'm/s')}`))] }),
  AE(4, { s: '2.7 Æfing', th: ['hradi'],
    g: `Þórhildur keyrir í ${U('30', 's')} á jafna hraðanum ${U('90', 'km/klst')} og beint á eftir í ${U('60', 's')} á ${U('60', 'km/klst')}. Hver er meðalhraði hennar yfir tímabilið? Svaraðu í ${U('', 'km/klst')}.`,
    tip: 'Finndu heildarvegalengdina og deildu með heildartímanum.',
    p: [num('Meðalhraðinn:', 70, 'km/klst', STEPS(
      `${U('90', 'km/klst')} = ${U('25', 'm/s')} og ${U('60', 'km/klst')} = ${U('16,67', 'm/s')}`,
      `${M('Δx')} = ${U('25', 'm/s')} · ${U('30', 's')} + ${U('16,67', 'm/s')} · ${U('60', 's')} = ${U('750', 'm')} + ${U('1000', 'm')} = ${U('1750', 'm')}`,
      `${vm} = ${F(U('1750', 'm'), U('90', 's'))} = ${U('19,4', 'm/s')} = ${U('70', 'km/klst')}`))] }),
  AE(5, { s: '2.7 Æfing', th: ['jafnhradi'],
    g: `Kalli skokkar með jafna hraðanum ${U('10,5', 'km/klst')} en Sigurlaug er ${U('220', 'm')} fyrir aftan hann og skokkar á ${U('11,7', 'km/klst')}. Hvað er Sigurlaug lengi að ná Kalla? Svaraðu í mínútum.`,
    tip: 'Sjá Sýnidæmi 2.6 – settu upp hreyfijöfnu fyrir hvort þeirra.',
    p: [num('Tíminn:', 11, 'mín', STEPS(
      `Munur á hraða: ${U('11,7', 'km/klst')} − ${U('10,5', 'km/klst')} = ${U('1,2', 'km/klst')} = ${U('0,333', 'm/s')}`,
      `${M('t = ')}${F(U('220', 'm'), U('0,333', 'm/s'))} = ${U('660', 's')} = ${U('11', 'mín')}`), { tol: 0.05 })] }),
  AE(6, { s: '2.7 Æfing', th: ['hradi'],
    g: `Hólmfríður skokkar ${U('400', 'm')} á ${U('8,2', 'km/klst')} og sprettir svo ${U('100', 'm')} á ${U('18,7', 'km/klst')}. Hver var meðalhraði hennar? Svaraðu í ${U('', 'km/klst')}.`,
    tip: 'Finndu tímann fyrir hvorn hluta fyrst.',
    p: [num('Meðalhraðinn:', 9.2, 'km/klst', STEPS(
      `${U('8,2', 'km/klst')} = ${U('2,278', 'm/s')} og ${U('18,7', 'km/klst')} = ${U('5,194', 'm/s')}`,
      `${M('t_1 = ')}${F(U('400', 'm'), U('2,278', 'm/s'))} = ${U('175,6', 's')}, &nbsp; ${M('t_2 = ')}${F(U('100', 'm'), U('5,194', 'm/s'))} = ${U('19,3', 's')}`,
      `${vm} = ${F(U('500', 'm'), U('194,9', 's'))} = ${U('2,566', 'm/s')} = ${U('9,2', 'km/klst')}`))] }),
  AE(7, { s: '2.7 Æfing', th: ['hradi', 'faersla'],
    g: 'Ingvar situr í hægindastólnum sínum, röltir út í búð að kaupa popp og hlammar sér svo aftur í stólinn. Hver var meðalhraði Ingvars á ferðalaginu?',
    tip: 'Meðalhraði notar færsluna, ekki vegalengdina.',
    p: [num('Meðalhraðinn:', 0, 'm/s', `fyrst hann endar þar sem hann byrjaði er færslan ${M('Δx')} = ${U('0', 'm')}.`)] }),
  AE(8, { s: '2.7 Æfing', th: ['hrodun'],
    g: `Kolbrún keyrir á ${U('42', 'km/klst')} en mínútu síðar er hraðinn orðinn ${U('85', 'km/klst')}. Hver var meðalhröðunin í ${U('', 'm/s^2')}?`,
    tip: `Breyttu ${U('', 'km/klst')} í ${U('', 'm/s')} (deila með 3,6) og 1 mínútu í sekúndur.`,
    p: [num('Meðalhröðunin:', 0.20, 'm/s^2', STEPS(
      `${M('Δv')} = ${U('85', 'km/klst')} − ${U('42', 'km/klst')} = ${U('43', 'km/klst')} = ${U('11,94', 'm/s')}`,
      `${am} = ${F(U('11,94', 'm/s'), U('60', 's'))} = ${U('0,199', 'm/s^2')} ≈ ${U('0,20', 'm/s^2')}`), { tol: 0.03 })] }),
  AE(9, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Bolti rúllar niður brekku með jöfnu hröðuninni ${U('3,4', 'm/s^2')}. Ef hann byrjar kyrr, á hvaða hraða er hann eftir ${U('5,2', 's')}?`,
    tip: `Hreyfijafna I: ${M('v = at + v_0')}`,
    p: [num('Hraðinn:', 18, 'm/s', STEPS(`${M('v')} = ${U('3,4', 'm/s^2')} · ${U('5,2', 's')} + 0 = ${U('17,7', 'm/s')} ≈ ${U('18', 'm/s')}`))] }),
  AE(10, { s: '2.7 Æfing', th: ['jofnhrodun', 'hrodun'],
    g: `Einar keyrir af stað úr kyrrstöðu og hraðinn eykst jafnt. Eftir ${U('13,2', 's')} er hann á ${U('85', 'km/klst')}. Hver var hröðunin í ${U('', 'm/s^2')}?`,
    p: [num('Hröðunin:', 1.8, 'm/s^2', STEPS(`${U('85', 'km/klst')} = ${U('23,61', 'm/s')}`, `${M('a = ')}${F(U('23,61', 'm/s'), U('13,2', 's'))} = ${U('1,79', 'm/s^2')} ≈ ${U('1,8', 'm/s^2')}`))] }),
  AE(11, { s: '2.7 Æfing', th: ['jofnhrodun', 'hrodun'],
    g: `Jói keyrir á ${U('92', 'km/klst')} þegar hann sér rautt ljós. Hann hemlar með jafnri hröðun og stöðvast ${U('13,8', 's')} síðar. Hver var hröðun Jóa?`,
    tip: 'Hann hægir á sér, svo hröðunin er gegn hreyfistefnunni.',
    p: [num('Hröðunin:', -1.9, 'm/s^2', STEPS(`${U('92', 'km/klst')} = ${U('25,56', 'm/s')}`,
      `${M('a = ')}${F(U('0', 'm/s') + ' − ' + U('25,56', 'm/s'), U('13,8', 's'))} = ${U('-1,85', 'm/s^2')} ≈ ${U('-1,9', 'm/s^2')}`,
      `Eða ${U('1,9', 'm/s^2')} gegn upphaflegri hreyfistefnu.`), { sign: false, shown: '−1,9' })] }),
  AE(12, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Flugvél fer af stað úr kyrrstöðu og eykur hraðann jafnt. Á ${U('10', 's')} hefur hún farið ${U('200', 'm')}. Hver er hröðunin?`,
    tip: `Hreyfijafna II með ${M('v_0 = 0')} og ${M('x_0 = 0')}.`,
    p: [num('Hröðunin:', 4.0, 'm/s^2', STEPS(`${M('x = ')}${F(1, 2)}${M('at^2')} &nbsp;⇒&nbsp; ${M('a = ')}${F(M('2x'), M('t^2'))} = ${F('2 · ' + U('200', 'm'), '(' + U('10', 's') + ')²')} = ${U('4,0', 'm/s^2')}`))] }),
  AE(13, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Geir keyrir á ${U('63', 'km/klst')} þegar köttur stekkur út á veginn. Hann hemlar með jafnri hröðun og fer samtals ${U('42', 'm')} þar til hann stöðvast. Hve langan tíma tók að stöðva bílinn?`,
    tip: 'Finndu fyrst hröðunina með hreyfijöfnu III, svo tímann með hreyfijöfnu I.',
    p: [num('Tíminn:', 4.8, 's', STEPS(`${M('v_0')} = ${U('63', 'km/klst')} = ${U('17,5', 'm/s')}`,
      `III: ${M('a = ')}${F(M('v^2 - v_0^2'), M('2Δx'))} = ${F('0 − (' + U('17,5', 'm/s') + ')²', '2 · ' + U('42', 'm'))} = ${U('-3,646', 'm/s^2')}`,
      `I: ${M('t = ')}${F(M('v - v_0'), M('a'))} = ${F(U('-17,5', 'm/s'), U('-3,646', 'm/s^2'))} = ${U('4,8', 's')}`))] }),
  AE(14, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Steini er sleppt úr kyrrstöðu í ${U('72', 'm')} hæð. Hve lengi er hann að falla til jarðar?`,
    tip: `Hreyfijafna II með ${M('v_0 = 0')} og ${M('a')} = ${U('9,80', 'm/s^2')} (ás niður).`,
    p: [num('Tíminn:', 3.8, 's', STEPS(`${M('t = ')}${RT(F(M('2Δy'), M('a')))} = ${RT(F('2 · ' + U('72', 'm'), U('9,80', 'm/s^2')))} = ${U('3,83', 's')} ≈ ${U('3,8', 's')}`))] }),
  AE(15, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Einar hleypur á ${U('3,7', 'm/s')} og eykur hraðann jafnt. Þegar hann hefur hlaupið ${U('100', 'm')} er hraðinn ${U('5,5', 'm/s')}. Hver var hröðunin?`,
    tip: 'Enginn tími er gefinn – notaðu hreyfijöfnu III.',
    p: [num('Hröðunin:', 0.083, 'm/s^2', STEPS(`${M('a = ')}${F(M('v^2 - v_0^2'), M('2Δx'))} = ${F('(' + U('5,5', 'm/s') + ')² − (' + U('3,7', 'm/s') + ')²', '2 · ' + U('100', 'm'))} = ${U('0,0828', 'm/s^2')} ≈ ${U('0,083', 'm/s^2')}`))] }),
  AE(16, { s: '2.7 Æfing', th: ['jofnhrodun'],
    g: `Bolta er skotið beint upp frá jörðinni með upphafshraðanum ${U('23,2', 'm/s')}.`,
    tip: `Í efstu stöðu er hraðinn ${U('0', 'm/s')}. Ás upp: ${M('a')} = ${U('-9,80', 'm/s^2')}.`,
    p: P([
      num('Hvenær er boltinn í efstu stöðu?', 2.37, 's', STEPS(`${M('t = ')}${F(M('v - v_0'), M('a'))} = ${F(U('0', 'm/s') + ' − ' + U('23,2', 'm/s'), U('-9,80', 'm/s^2'))} = ${U('2,37', 's')}`)),
      num('Hversu lengi er hann á lofti þar til hann lendir?', 4.73, 's', 'tvöfalt lengur en á leiðinni upp, því ferðin niður tekur jafn langan tíma: 2 · ' + U('2,367', 's') + ' = ' + U('4,73', 's') + '.')
    ]) })
]
};
})());
