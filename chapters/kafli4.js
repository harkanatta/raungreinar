/* Kafli 4 – Atómið og lotukerfið. Transcribed from "Inngangur að raunvisindum - 4-5. kafli.pdf"
   (only kafli 4 is in that file). Answers from "Svör 4-1.kafli.pdf". Mistakes in the book and the
   answer key are corrected here and listed in README.md. */
Book.add((() => {
const Ar = MS('A', 'r');
const VK = 'Verkefni 4. kafla';

return {
n: 4,
title: 'Atómið og lotukerfið',
theory: {

atomid: { t: '4.1 Atómið', h: `
${DEF('Atóm', '<b>Atóm</b> er minnsta eining frumefnis sem hefur efnafræðilega eiginleika þess – grundvallareining allra efna.')}
<p>Atómið er samsett úr þremur <b>öreindum</b>: <b>róteindum</b> (p⁺), <b>nifteindum</b> (n⁰) og <b>rafeindum</b> (e⁻).</p>
<ul><li>Róteindir og nifteindir mynda <b>kjarnann</b> og kallast <b>kjarneindir</b>.</li>
<li>Rafeindirnar sveima umhverfis kjarnann á miklum hraða.</li></ul>
${TB(['Eind', 'Tákn', 'Massi (g)', 'Massi (u)', 'Hleðsla'], [
  ['Róteind', 'p⁺', up('1,673*10^-24'), '1,007', '+1'],
  ['Nifteind', 'n⁰', up('1,675*10^-24'), '1,008', '0'],
  ['Rafeind', 'e⁻', up('9,109*10^-28'), up('5,486*10^-4'), '−1']])}
<p class="mine">Tafla 4.1: Öreindirnar sem atóm eru samsett úr.</p>
<p>Róteindir eru <b>jákvætt</b> hlaðnar, rafeindir <b>neikvætt</b> og nifteindir <b>óhlaðnar</b>. Nánast allur massinn er í kjarnanum –
rafeindin er aðeins 1/1836 af massa róteindar.</p>
${RULE('Óhlaðið atóm', 'Í óhlöðnu atómi eru <b>jafn margar róteindir og rafeindir</b>, svo hleðslurnar núllast út.')}
<p>Andstæðar hleðslur dragast að hvor annarri en eins hleðslur hrinda hvor annarri frá sér. Róteindirnar í kjarnanum
ættu að hrinda hver annarri frá sér, en sérstakur <b>kjarnakraftur</b> heldur þeim saman.</p>
${ATH(`Kjarninn er örlítill: þvermál hans er um ${U('10^-15', 'm')} en atómið allt um ${U('10^-10', 'm')}. Ef atómið væri íþróttaleikvangur væri kjarninn eins og kaffibaun á miðjum vellinum.`, 'Stærð atómsins')}`},

lotukerfid: { t: '4.2 Lotukerfið', h: `
<p><b>Lotukerfið</b> er skipuleg uppröðun frumefnanna: 92 finnast í náttúrunni og rúmlega 20 hafa verið búin til á rannsóknarstofum.
<b>Frumefni</b> er safn atóma af sömu gerð.</p>
${DEF('Reitur frumefnis', `Í hverjum reit er <b>sætistala</b>, <b>tákn</b>, <b>nafn</b> og <b>atómmassi</b>. Dæmi: kvikasilfur – sætistala 80, tákn Hg, atómmassi ${U('200,59', 'u')}.
<br>Táknið er einn hástafur, eða hástafur og lágstafur – aldrei tveir hástafir.`)}
<p>Lárétt lína kallast <b>lota</b> (1–7) og lóðrétt dálkur <b>flokkur</b> (1–18). Sætistalan hækkar um einn þegar farið er til hægri í lotu.</p>
<h3>Þrír hópar</h3>
${LOTU({ mode: 'hopar', mass: false })}
<ul><li><b>Málmar</b> – vinstra megin við skálínuna. Allir fastir við stofuhita nema kvikasilfur (Hg). Yfirleitt mjúkir, mótanlegir, glansandi og leiða vel varma og rafmagn.</li>
<li><b>Málmleysingjar</b> – hægra megin. 11 eru gös (${CH('H2')}, He, ${CH('N2')}, ${CH('O2')}, ${CH('F2')}, Ne, ${CH('Cl2')}, Ar, Kr, Xe, Rn), 5 föst efni og eitt vökvi: bróm (${CH('Br2')}). Leiða illa eða ekki rafmagn og varma.</li>
<li><b>Málmungar</b> (hálfmálmar) – á mörkunum, með eiginleika beggja: B, Si, Ge, As, Sb, Te og At.</li></ul>
<h3>Flokkar</h3>
${LOTU({ mode: 'flokkar', mass: false })}
<p>Flokkar 1, 2 og 13–18 eru <b>aðalflokkar</b>, 3–12 eru <b>hliðarmálmar</b>. Neðst eru <b>innri hliðarmálmar</b> – þeir tilheyra lotum 6 og 7 en eru teknir út til að þjappa kerfinu saman.</p>
${TB(['Flokkur', 'Heiti'], [['1', 'Alkalímálmar'], ['2', 'Jarðalkalímálmar'], ['3–12', 'Hliðarmálmar'], ['13', 'Bórflokkur'], ['14', 'Kolefnisflokkur'],
  ['15', 'Niturflokkur'], ['16', 'Súrefnisflokkur (kalkógenar)'], ['17', 'Halógenar'], ['18', 'Eðalgös']])}
<p>Frumefni í sama flokki hafa svipaða efnafræðilega eiginleika. Til dæmis eru liþíum (Li), natríum (Na) og kalíum (K) öll mjúkir og mjög hvarfgjarnir málmar.</p>
${EXMP('Sýnidæmi 4.1', 'Í hvaða hópi og flokki eru a) vetni, b) súrefni, c) járn?', STEPS(
  'a) Vetni (nr. 1) er í <b>1. flokki</b> en það er <b>málmleysingi</b> – það telst ekki til alkalímálma þótt það sé í sama dálki.',
  'b) Súrefni (nr. 8) er <b>málmleysingi</b> í <b>16. flokki</b> (súrefnisflokki).',
  'c) Járn (nr. 26) er <b>málmur</b> í flokki <b>hliðarmálma</b> (8. flokki).'))}`},

saetistala: { t: '4.3 Sætistölur, massatölur og samsætur', h: `
${DEF('Sætistala (Z)', 'Fjöldi <b>róteinda</b> í kjarnanum – og jafnframt númer frumefnisins í lotukerfinu. Í óhlöðnu atómi er hún líka fjöldi rafeinda.')}
<p>Fjöldi róteinda ákvarðar hvaða frumefni um ræðir. Súrefni (O) hefur sætistöluna 8: átta róteindir og átta rafeindir.
Fjöldi <b>nifteinda</b> getur hins vegar verið breytilegur.</p>
${RULE('Massatala (A) · Jafna 4.1', `Massatalan er samanlagður fjöldi róteinda og nifteinda: <div class="steps"><b>${M('A = Z + N')}</b></div>`)}
${DEF('Samsætur', '<b>Samsætur</b> eru atóm sama frumefnis (sama fjölda róteinda) með ólíkan fjölda nifteinda.')}
${TB(['', 'Kolefni-12', 'Kolefni-13', 'Kolefni-14'], [
  ['Táknun', ISO(12, 6, 'C'), ISO(13, 6, 'C'), ISO(14, 6, 'C')], ['Róteindir', '6', '6', '6'], ['Nifteindir', '6', '7', '8'], ['Rafeindir', '6', '6', '6']])}
${RULE('Ritháttur samsætu', `${ISO('A', 'Z', 'X')} &nbsp; massatalan uppi, sætistalan niðri, vinstra megin við táknið. Dæmi: ${ISO(12, 6, 'C')}`)}
${EXMP('Sýnidæmi 4.2', `Notum ${M('A = Z + N')}:<br>a) Atóm hefur 28 róteindir og massatöluna 60. Hvert er frumefnið og hve margar eru nifteindirnar?
<br>b) Fosfór hefur ${M('Z')} = 15. Hve margar nifteindir ef massatalan er 31?<br>c) Kóbalt, notað við krabbameinsmeðferð, hefur massatöluna 60. Hve margar róteindir og nifteindir?`, STEPS(
  `a) 28 róteindir ⇒ nr. 28 = nikkel (Ni). ${M('N = A - Z')} = 60 − 28 = <b>32</b> &nbsp; ${ISO(60, 28, 'Ni')}`,
  `b) ${M('N = A - Z')} = 31 − 15 = <b>16</b> &nbsp; ${ISO(31, 15, 'P')}`,
  `c) Kóbalt er nr. 27: <b>27 róteindir</b>, ${M('N')} = 60 − 27 = <b>33</b> nifteindir &nbsp; ${ISO(60, 27, 'Co')}`))}`},

atommassi: { t: '4.4 Atómmassi', h: `
<p>Massi öreinda er afar lítill (um ${U('10^-24', 'g')}), svo við notum sérstaka einingu.</p>
${DEF('Atómmassaeining (u)', `${U('1', 'u')} er 1/12 af massa ${ISO(12, '', 'C')}-samsætunnar. <div class="steps"><b>${U('1', 'u')} = ${U('1,66*10^-24', 'g')}</b></div>Kolefni-12 hefur því nákvæmlega massann ${U('12', 'u')}.`)}
<p>Frumefni í náttúrunni eru blanda samsæta sinna. Massinn í lotukerfinu er því <b>vegið meðaltal</b> – <b>hlutfallslegur atómmassi</b>, ${Ar}.</p>
${RULE('Atómmassi · Jafna 4.2', `<div class="steps"><b>${Ar} = Σ [(massi samsætu) · (hlutfall samsætu)]</b></div>Breyttu prósentum í hlutfall fyrst: 60,40 % = 0,6040.`)}
${EXMP('Sýnidæmi 4.3 · Gallíum', `60,40 % gallíumatóma eru ${ISO(69, '', 'Ga')} með massann ${U('68,9257', 'u')} og 39,60 % eru ${ISO(71, '', 'Ga')} með massann ${U('70,9248', 'u')}. Hver er atómmassi Ga?`, STEPS(
  `${Ar} = 68,9257 · 0,6040 + 70,9248 · 0,3960`, `= 41,631 + 28,086 = ${U('69,717', 'u')}`, `Svar: <b>${U('69,72', 'u')}</b>`))}
${EXMP('Sýnidæmi 4.4 · Klór', `${ISO(35, '', 'Cl')} er 75,770 % og hefur massann ${U('34,970', 'u')}; ${ISO(37, '', 'Cl')} er 24,230 % og hefur massann ${U('36,970', 'u')}. Hver er atómmassi klórs?`, STEPS(
  `${Ar} = 34,970 · 0,75770 + 36,970 · 0,24230`, `= 26,497 + 8,958 = <b>${U('35,45', 'u')}</b>`))}`},

formulumassi: { t: '4.5 Formúlumassi', h: `
<p>Efnasambönd eru táknuð með <b>efnaformúlum</b>. Talan neðan við línu á eftir tákni (vísirinn) segir hve mörg atóm eru af því frumefni.
Borðsalt er ${CH('NaCl')}, magnesíumflúoríð er ${CH('MgF2')}.</p>
${ATH(`Talan 1 er aldrei skrifuð: ${CH('Mg1F2')} er rangt, ${CH('MgF2')} er rétt.`)}
${DEF('Formúlumassi', 'Formúlumassi er <b>samanlagður massi allra atómanna</b> í efnasambandinu. Atómmassana finnum við í lotukerfinu.')}
<p>${CH('NaCl')}: ${U('22,989', 'u')} + ${U('35,453', 'u')} = <b>${U('58,442', 'u')}</b></p>
<p><b>Svigar:</b> það sem er inni í sviga er heild. Vísirinn á eftir sviganum segir hve margar slíkar heildir eru. Í ${CH('Ca(NO3)2')} eru 1 Ca, 2 N og 6 O.</p>
${TB(['Fjöldi atóma', 'Atómmassi (u)', 'Samtals (u)'], [['1 × Ca', '40,078', '40,078'], ['2 × N', '14,006', '28,012'], ['6 × O', '15,999', '95,994'], ['<b>Formúlumassi</b>', '', '<b>164,084</b>']])}
<p class="mine">Tafla 4.3: Formúlumassi ${CH('Ca(NO3)2')}.</p>
${EXMP('Sýnidæmi 4.5', `Finndu formúlumassa a) ${CH('MgO')}, b) ${CH('H2O')}, c) ${CH('Fe(NO3)2')}.`, STEPS(
  `a) 24,305 + 15,999 = <b>${U('40,304', 'u')}</b>`,
  `b) 2 · 1,008 + 15,999 = <b>${U('18,015', 'u')}</b>`,
  `c) 55,845 + 2 · 14,006 + 6 · 15,999 = <b>${U('179,851', 'u')}</b>`))}`},

rafeindaskipan: { t: '4.6 Rafeindaskipan', h: `
<p>Rafeindirnar raðast ekki af handahófi kringum kjarnann heldur eftir ákveðinni <b>rafeindaskipan</b>.</p>
${DEF('Hvolf og undirhvolf', `<b>Aðalskammtatalan</b> ${M('n')} segir hvaða <b>hvolf</b> rafeindin er á – hærra ${M('n')} þýðir lengra frá kjarna og meiri orka.
Hvert hvolf hefur <b>undirhvolf</b> s, p, d og f. Orkuröðin er <div class="steps"><b>s &lt; p &lt; d &lt; f</b></div>`)}
${RULE('Reglur', '1. Rafeindir fylla fyrst það undirhvolf sem hefur <b>lægsta orku</b>.<br>2. Í hverju <b>svigrúmi</b> komast að hámarki <b>tvær rafeindir</b> (með gagnstæðan spuna).')}
${TB(['Undirhvolf', 'Svigrúm', 'Mest rafeindir'], [['s', '1', '2'], ['p', '3', '6'], ['d', '5', '10'], ['f', '7', '14']])}
<p>Röðin sem undirhvolfin fyllast í: ${EK('1s')} → ${EK('2s')} → ${EK('2p')} → ${EK('3s')} → ${EK('3p')} → ${EK('4s')} → ${EK('3d')} → ${EK('4p')} …
Athugaðu að ${EK('4s')} fyllist <b>á undan</b> ${EK('3d')}.</p>
<p>Dæmi: H (Z = 1): ${EK('1s1')} · He: ${EK('1s2')} · Li: ${EK('1s2 2s1')} · C: ${EK('1s2 2s2 2p2')} · Na: ${EK('1s2 2s2 2p6 3s1')}</p>
<h3>Blokkir lotukerfisins</h3>
${LOTU({ mode: 'blokkir', mass: false })}
<p>Flokkar 1–2 eru <b>s-blokk</b>, 3–12 <b>d-blokk</b>, 13–18 <b>p-blokk</b> og innri hliðarmálmar <b>f-blokk</b>. Blokkin segir hvaða undirhvolf
er verið að fylla þegar farið er í gegnum lotuna. (Undantekningar: Cr er ${EK('4s1 3d5')} og Cu er ${EK('4s1 3d10')}.)</p>
${DEF('Þéttur ritháttur', `Byrjað er á tákni <b>eðalgassins</b> á undan, í hornklofa. Nitur: ${EK('1s2 2s2 2p3')} = ${EK('[He]2s2 2p3')}`)}
${TB(['', 'Rafeindaskipan', 'Þétt'], [
  ['H', EK('1s1'), '–'], ['He', EK('1s2'), '–'],
  ['Li', EK('1s2 2s1'), EK('[He]2s1')], ['Be', EK('1s2 2s2'), EK('[He]2s2')], ['B', EK('1s2 2s2 2p1'), EK('[He]2s2 2p1')], ['C', EK('1s2 2s2 2p2'), EK('[He]2s2 2p2')],
  ['N', EK('1s2 2s2 2p3'), EK('[He]2s2 2p3')], ['O', EK('1s2 2s2 2p4'), EK('[He]2s2 2p4')], ['F', EK('1s2 2s2 2p5'), EK('[He]2s2 2p5')], ['Ne', EK('1s2 2s2 2p6'), EK('[He]2s2 2p6')],
  ['Na', EK('1s2 2s2 2p6 3s1'), EK('[Ne]3s1')], ['Mg', EK('1s2 2s2 2p6 3s2'), EK('[Ne]3s2')], ['Al', EK('1s2 2s2 2p6 3s2 3p1'), EK('[Ne]3s2 3p1')], ['Si', EK('1s2 2s2 2p6 3s2 3p2'), EK('[Ne]3s2 3p2')],
  ['P', EK('1s2 2s2 2p6 3s2 3p3'), EK('[Ne]3s2 3p3')], ['S', EK('1s2 2s2 2p6 3s2 3p4'), EK('[Ne]3s2 3p4')], ['Cl', EK('1s2 2s2 2p6 3s2 3p5'), EK('[Ne]3s2 3p5')], ['Ar', EK('1s2 2s2 2p6 3s2 3p6'), EK('[Ne]3s2 3p6')]])}
<p class="mine">Tafla 4.4: Fyrstu þrjár loturnar.</p>
${DEF('Spunaritháttur', `Hvert svigrúm er teiknað sem kassi og hver rafeind sem ör. Tvær rafeindir í sama svigrúmi hafa gagnstæðan spuna: ↑↓. Kolefni:
${ORB([['1s', [2]], ['2s', [2]], ['2p', [1, 1, 0]]])}`)}
${EXMP('Sýnidæmi 4.7', 'Ritaðu rafeindaskipan a) O, b) Be, c) Ca.', STEPS(`a) ${EK('1s2 2s2 2p4')}`, `b) ${EK('1s2 2s2')}`, `c) ${EK('1s2 2s2 2p6 3s2 3p6 4s2')}`))}`},

gildisrafeindir: { t: '4.7 Gildisrafeindir og Lewis-myndir', h: `
${DEF('Gildisrafeindir', 'Rafeindirnar í s- og p-svigrúmum <b>ysta hvolfsins</b> kallast <b>gildisrafeindir</b>, og hvolfið <b>gildishvolf</b>. Þær ráða efnatengjum og hvarfgirni.')}
${RULE('Fjöldi gildisrafeinda', 'Í aðalflokkunum: flokkur 1 → 1, flokkur 2 → 2, flokkur 13 → 3, 14 → 4, 15 → 5, 16 → 6, 17 → 7, 18 → 8 (síðasti tölustafur flokksnúmersins). Undantekning: helíum hefur 2.')}
<p>Frumefni með svipaða gildisrafeindaskipan hafa svipaða eiginleika og eru í sama flokki.</p>
${DEF('Lewis-myndir', 'Gilbert N. Lewis setti fram einfaldan rithátt snemma á 20. öld: hver gildisrafeind er <b>punktur</b> kringum táknið. Fyrst einn punktur á hverja hlið, svo annar á hverja hlið, mest átta.')}
${TB(['Flokkur', '2. lota', '3. lota'], [
  ['1', LEWIS('Li', 1), LEWIS('Na', 1)], ['2', LEWIS('Be', 2), LEWIS('Mg', 2)], ['13', LEWIS('B', 3), LEWIS('Al', 3)], ['14', LEWIS('C', 4), LEWIS('Si', 4)],
  ['15', LEWIS('N', 5), LEWIS('P', 5)], ['16', LEWIS('O', 6), LEWIS('S', 6)], ['17', LEWIS('F', 7), LEWIS('Cl', 7)], ['18', LEWIS('Ne', 8), LEWIS('Ar', 8)]])}
<p class="mine">Tafla 4.5: Lewis-myndir aðalflokkanna í 2. og 3. lotu.</p>
${EXMP('Sýnidæmi 4.6', 'Hve margar gildisrafeindir hafa a) Be, b) N, c) S, d) F?', STEPS(
  'a) Be er í 2. flokki: <b>2</b>', 'b) N er í 15. flokki: <b>5</b>', 'c) S er í 16. flokki: <b>6</b>', 'd) F er í 17. flokki: <b>7</b>'))}`},

atturegla: { t: '4.8 Áttureglan', h: `
<p><b>Eðalgös</b> eru einstaklega stöðug: s- og p-svigrúm gildishvolfsins eru full. Önnur atóm leitast við að fá sömu skipan og eðalgas, á tvo vegu:</p>
<ol><li>Með því að <b>gefa frá sér eða taka upp rafeindir</b>. Þá myndast <b>jónir</b>: færri rafeindir en róteindir → jákvæð jón (<b>katjón</b>); fleiri → neikvæð jón (<b>anjón</b>).</li>
<li>Með því að <b>deila rafeindum</b> með öðrum atómum (samgild tengi).</li></ol>
${RULE('Áttureglan', 'Atóm aðalflokkanna leitast við að fylla ysta hvolfið svo þar verði <b>átta rafeindir</b> (s og p) – fylltur <b>oktett</b>.')}
${EXMP('Sýnidæmi 4.8', 'Hve mörgum rafeindum þurfa eftirfarandi að tapa eða bæta við sig til að fá fylltan oktett? a) Na, b) Mg, c) N, d) S, e) F', STEPS(
  `a) Na: 1 gildisrafeind → <b>tapar 1</b> (verður ${CH('Na^+')})`,
  `b) Mg: 2 gildisrafeindir → <b>tapar 2</b> (${CH('Mg^{2+}')})`,
  `c) N: 5 gildisrafeindir → 8 − 5 = <b>bætir við sig 3</b> (${CH('N^{3-}')})`,
  `d) S: 6 gildisrafeindir → 8 − 6 = <b>bætir við sig 2</b> (${CH('S^{2-}')})`,
  `e) F: 7 gildisrafeindir → 8 − 7 = <b>bætir við sig 1</b> (${CH('F^-')})`))}`}
},

exercises: [
  { t: 'Verkefni 1', short: '1', s: VK, th: ['atomid'],
    g: 'Hverjar eru byggingareiningar (öreindir) allra atóma?',
    p: [{ q: '', a: 'Róteindir og nifteindir, sem eru í kjarnanum, og rafeindir sem svífa umhverfis kjarnann.' }] },
  { t: 'Verkefni 2', short: '2', s: VK, th: ['atomid'],
    g: 'Lýstu því hvað það þýðir þegar atóm er <b>óhlaðið</b>.',
    p: [{ q: '', a: 'Fjöldi róteinda (+) og rafeinda (−) er sá sami, svo nettóhleðslan er 0.' }] },
  { t: 'Verkefni 3', short: '3', s: VK, th: ['atomid'],
    g: 'Í kjarna atóms eru 6 róteindir. Hve margar rafeindir eru í atóminu óhlöðnu?',
    p: [num('Fjöldi rafeinda:', 6, '', 'Sex plúshleðslur kalla á sex rafeindir svo atómið verði óhlaðið.')] },
  { t: 'Verkefni 4', short: '4', s: VK, th: ['atomid'],
    g: 'Í kjarna atóms eru 8 róteindir og 7 nifteindir. Hve margar <b>plúshleðslur</b> eru í kjarnanum?',
    tip: 'Hvaða öreindir eru hlaðnar?',
    p: [num('Plúshleðslur:', 8, '', 'Aðeins róteindirnar eru plúshlaðnar – nifteindir eru óhlaðnar.')] },
  { t: 'Verkefni 5', short: '5', s: VK, th: ['atomid'],
    g: 'Hver er massi 100 róteinda í grömmum?',
    tip: `Massi einnar róteindar er ${U('1,673*10^-24', 'g')} (tafla 4.1).`,
    p: [num('Massinn:', 1.673e-22, 'g', `100 · ${U('1,673*10^-24', 'g')} = ${U('1,673*10^-22', 'g')}`, { shown: '1,673·10^-22' })] },
  { t: 'Verkefni 6', short: '6', s: VK, th: ['atomid'],
    g: 'Hver er nettóhleðsla atóms sem hefur 4 nifteindir, 4 róteindir og 5 rafeindir?',
    p: [num('Nettóhleðslan:', -1, '', '4 róteindir = +4, nifteindir óhlaðnar, 5 rafeindir = −5. Samtals <b>−1</b> (ein mínushleðsla).', { shown: '−1' })] },
  { t: 'Verkefni 7', short: '7', s: VK, th: ['lotukerfid'],
    g: `Í hvaða flokki og lotu eru eftirfarandi frumefni? ${LOTU({ mass: false })}`,
    p: P([
      { q: 'natríum', a: 'Na: <b>1. flokkur</b> (alkalímálmar), <b>3. lota</b>' },
      { q: 'strontíum', a: 'Sr: <b>2. flokkur</b> (jarðalkalímálmar), <b>5. lota</b>' },
      { q: 'ál', a: 'Al: <b>13. flokkur</b> (bórflokkur), <b>3. lota</b>' },
      { q: 'fosfór', a: 'P: <b>15. flokkur</b> (niturflokkur), <b>3. lota</b>' },
      { q: 'kísill', a: 'Si: <b>14. flokkur</b> (kolefnisflokkur), <b>3. lota</b> <span class="mine">(Í svörunum stendur „annarri lotu“ – það er villa.)</span>' },
      { q: 'bróm', a: 'Br: <b>17. flokkur</b> (halógenar), <b>4. lota</b>' },
      { q: 'neon', a: 'Ne: <b>18. flokkur</b> (eðalgös), <b>2. lota</b>' }
    ]) },
  { t: 'Verkefni 8', short: '8', s: VK, th: ['lotukerfid'],
    g: 'Hverjir eru þrír helstu hópar lotukerfisins?',
    p: [{ q: '', a: 'Málmar, málmungar (hálfmálmar) og málmleysingjar.' }] },
  { t: 'Verkefni 9', short: '9', s: VK, th: ['lotukerfid'],
    g: `Hvaða hópi tilheyra eftirfarandi frumefni? (Táknið kemur í svarinu.) ${LOTU({ mode: 'hopar', mass: false })}`,
    p: P([
      mc('gull', ['Málmur', 'Málmungur', 'Málmleysingi'], 0, 'Au'),
      mc('arsen', ['Málmur', 'Málmungur', 'Málmleysingi'], 1, 'As'),
      mc('kolefni', ['Málmur', 'Málmungur', 'Málmleysingi'], 2, 'C'),
      mc('kalsíum', ['Málmur', 'Málmungur', 'Málmleysingi'], 0, 'Ca'),
      mc('úran', ['Málmur', 'Málmungur', 'Málmleysingi'], 0, 'U')
    ]) },
  { t: 'Verkefni 10', short: '10', s: VK, th: ['lotukerfid'],
    g: 'Flokkar 3–12 í lotukerfinu eiga sér sérstöðu. Hvað kallast þessir flokkar?',
    p: [{ q: '', a: '<b>Hliðarmálmar</b>.' }] },
  { t: 'Verkefni 11', short: '11', s: VK, th: ['lotukerfid'],
    g: 'Hvaða frumefni eru í flokki 14 og hvað heitir flokkurinn?',
    p: [{ q: '', a: 'C, Si, Ge, Sn, Pb og Fl (flerovíum, áður kallað Uuq) – <b>kolefnisflokkur</b>.' }] },
  { t: 'Verkefni 12', short: '12', s: VK, th: ['saetistala'],
    g: 'Hvað ræður sætistölu frumefnanna í lotukerfinu?',
    p: [{ q: '', a: 'Fjöldi <b>róteinda</b> í kjarnanum.' }] },
  { t: 'Verkefni 13', short: '13', s: VK, th: ['saetistala'],
    g: 'Samsæta hefur 26 róteindir og 30 nifteindir í kjarna. Hvaða frumefni er þetta og hvernig er ritháttur samsætunnar?',
    p: P([
      num('Massatalan A:', 56, '', `${M('A = Z + N')} = 26 + 30 = 56`),
      mc('Frumefnið:', ['Kóbalt (Co)', 'Járn (Fe)', 'Mangan (Mn)'], 1, `Sætistala 26 er járn: ${ISO(56, 26, 'Fe')}`)
    ]) },
  { t: 'Verkefni 14', short: '14', s: VK, th: ['saetistala'],
    g: `Hvaða upplýsingar má lesa úr þessari táknun fyrir kolefnisatómið? <div style="font-size:2rem;margin:.4rem 0">${ISO(13, 6, 'C')}</div>`,
    p: P([
      num('Massatalan A:', 13, ''),
      num('Sætistalan Z (fjöldi róteinda):', 6, ''),
      num('Fjöldi nifteinda N:', 7, '', `${M('N = A - Z')} = 13 − 6 = 7`)
    ]) },
  { t: 'Verkefni 15', short: '15', s: VK, th: ['saetistala'],
    g: 'Hve margar rafeindir og róteindir hefur óhlaðið atóm með sætistöluna 16?',
    p: P([num('Róteindir:', 16, ''), num('Rafeindir:', 16, '', 'Óhlaðið atóm hefur jafn margar rafeindir og róteindir. (Þetta er brennisteinn, S.)')]) },
  { t: 'Verkefni 16', short: '16', s: VK, th: ['saetistala'],
    g: `Hverjar þessara samsæta eru samsætur sama frumefnis? Rökstyddu svarið. <div style="font-size:1.6rem;margin:.4rem 0">${ISO(31, 16, 'X')} &nbsp; ${ISO(31, 15, 'X')} &nbsp; ${ISO(32, 16, 'X')}</div>`,
    p: [mc('', [`${ISO(31, 16, 'X')} og ${ISO(31, 15, 'X')}`, `${ISO(31, 16, 'X')} og ${ISO(32, 16, 'X')}`, `${ISO(31, 15, 'X')} og ${ISO(32, 16, 'X')}`], 1,
      'Sætistalan segir hvaða frumefni um ræðir. Þær tvær sem hafa sætistöluna 16 eru sama frumefnið (brennisteinn) – samsætur hvor annarrar.')] },
  { t: 'Verkefni 17', short: '17', s: VK, th: ['saetistala'],
    g: 'Samsæta járnatóms hefur massatöluna 60. Hve margar róteindir og nifteindir eru í henni?',
    p: P([num('Róteindir:', 26, '', 'Járn hefur sætistöluna 26.'), num('Nifteindir:', 34, '', `${M('N = A - Z')} = 60 − 26 = 34`)]) },
  { t: 'Verkefni 18', short: '18', s: VK, th: ['saetistala'],
    g: 'Fylltu inn í töfluna. Gerðu ráð fyrir óhlöðnum atómum.',
    tip: `${M('A = Z + N')}, og í óhlöðnu atómi eru rafeindir jafn margar og róteindir.`,
    p: P([
      { q: `Massatala 7, nifteindir 3`, a: `${ISO(7, 4, 'Be')}: massatala 7, <b>4</b> róteindir, 3 nifteindir, <b>4</b> rafeindir` },
      { q: `Róteindir 13, nifteindir 13, rafeindir 13`, a: `${ISO(26, 13, 'Al')}: massatala <b>26</b>, 13 róteindir, 13 nifteindir, 13 rafeindir` },
      { q: ISO(16, 8, 'O'), a: `massatala <b>16</b>, <b>8</b> róteindir, <b>8</b> nifteindir, <b>8</b> rafeindir` },
      { q: `Róteindir 79, nifteindir 50`, a: `${ISO(129, 79, 'Au')}: massatala <b>129</b>, 79 róteindir, 50 nifteindir, <b>79</b> rafeindir` },
      { q: `${ISO(23, 12, 'Mg')}, massatala 23`, a: `<b>12</b> róteindir, <b>11</b> nifteindir, <b>12</b> rafeindir` },
      { q: `Massatala 30, rafeindir 18`, a: `${ISO(30, 18, 'Ar')}: <b>18</b> róteindir, <b>12</b> nifteindir, 18 rafeindir <span class="mine">(Í svörunum stendur Al – en sætistala 18 er argon, Ar.)</span>` }
    ]) },
  { t: 'Verkefni 19', short: '19', s: VK, th: ['atommassi'],
    g: `Hver er atómmassi natríumatóms? ${LOTU({ mark: ['Na'] })}`,
    p: [num('Atómmassinn:', 22.989, 'u', 'Lesið úr lotukerfinu.', { tol: 0.002 })] },
  { t: 'Verkefni 20', short: '20', s: VK, th: ['atommassi'],
    g: `Hver er atómmassi járnatóms? ${LOTU({ mark: ['Fe'] })}`,
    p: [num('Atómmassinn:', 55.85, 'u', 'Lesið úr lotukerfinu (55,847 á formúlublaðinu).', { tol: 0.002 })] },
  { t: 'Verkefni 21', short: '21', s: VK, th: ['atommassi'],
    g: `Gallíum hefur tvær samsætur: Ga-69 með massann ${U('68,9257', 'u')} er 60,4 % af öllu gallíum og Ga-71 með massann ${U('70,9248', 'u')} er 39,6 %. Hver er hlutfallslegur atómmassi gallíums?`,
    tip: `Jafna 4.2: ${Ar} = Σ [(massi samsætu) · (hlutfall samsætu)]`,
    p: [num('Atómmassinn:', 69.7, 'u', STEPS(`68,9257 · 0,604 + 70,9248 · 0,396 = 41,631 + 28,086 = ${U('69,7', 'u')}`), { tol: 0.002 })] },
  { t: 'Verkefni 22', short: '22', s: VK, th: ['atommassi'],
    g: `Hver er massi eins natríumatóms í grömmum ef atómmassi natríums er ${U('22,989', 'u')}?`,
    tip: `${U('1', 'u')} = ${U('1,66*10^-24', 'g')}`,
    p: [num('Massinn:', 3.82e-23, 'g', `22,989 · ${U('1,66*10^-24', 'g')} = ${U('3,82*10^-23', 'g')}`, { shown: '3,82·10^-23' })] },
  { t: 'Verkefni 23', short: '23', s: VK, th: ['atommassi'],
    g: `Hver er massi ${up('6,022*10^23')} natríumatóma í grömmum? (Atómmassi natríums er ${U('22,989', 'u')}.)`,
    p: [num('Massinn:', 22.98, 'g', STEPS(`${up('6,022*10^23')} · ${U('3,816*10^-23', 'g')} = ${U('22,98', 'g')}`, 'Takið eftir: næstum sama tala og atómmassinn – en í grömmum!'), { tol: 0.005 })] },
  { t: 'Verkefni 24', short: '24', s: VK, th: ['formulumassi'],
    g: 'Hver er efnaformúla og sameindarmassi glúkósa, sem er gerður úr 6 kolefnisatómum, 12 vetnisatómum og 6 súrefnisatómum?',
    p: P([
      { q: 'Efnaformúlan:', a: `<b>${CH('C6H12O6')}</b>` },
      num('Sameindarmassinn:', 180.15, 'u', `6 · 12,011 + 12 · 1,008 + 6 · 15,999 = ${U('180,15', 'u')}`, { tol: 0.002 })
    ]) },
  { t: 'Verkefni 25', short: '25', s: VK, th: ['formulumassi'],
    g: 'Hver er efnaformúla og formúlumassi salts sem er gert úr einu magnesíumatómi og tveimur klóratómum?',
    p: P([
      { q: 'Efnaformúlan:', a: `<b>${CH('MgCl2')}</b>` },
      num('Formúlumassinn:', 95.211, 'u', `24,305 + 2 · 35,453 = ${U('95,211', 'u')}`, { tol: 0.002 })
    ]) },
  { t: 'Verkefni 26', short: '26', s: VK, th: ['formulumassi'],
    g: `Hver er formúlumassi ${CH('Be(NO3)2')}?`,
    tip: 'Hve mörg N og O eru þegar svigarnir eru tveir?',
    p: [num('Formúlumassinn:', 133.02, 'u', `9,012 + 2 · 14,006 + 6 · 15,999 = ${U('133,02', 'u')}`, { tol: 0.002 })] },
  { t: 'Verkefni 27', short: '27', s: VK, th: ['rafeindaskipan'],
    g: 'Hve mörg svigrúm eru í p-undirhvolfi?',
    p: [num('Svigrúm:', 3, '')] },
  { t: 'Verkefni 28', short: '28', s: VK, th: ['rafeindaskipan'],
    g: 'Hve margar rafeindir komast inn á hvert svigrúm?',
    p: [num('Rafeindir:', 2, '', 'Mest tvær, með gagnstæðan spuna.')] },
  { t: 'Verkefni 29', short: '29', s: VK, th: ['rafeindaskipan'],
    g: 'Ritaðu rafeindaskipan, þétta rafeindaskipan og spunarithátt fyrir beryllíum (Be).',
    p: P([
      { q: 'Rafeindaskipan:', a: EK('1s2 2s2') },
      { q: 'Þétt rafeindaskipan:', a: EK('[He]2s2') },
      { q: 'Spunaritháttur:', a: ORB([['1s', [2]], ['2s', [2]]]) + MINE }
    ]) },
  { t: 'Verkefni 30', short: '30', s: VK, th: ['rafeindaskipan'],
    g: 'Ritaðu rafeindaskipan og þétta rafeindaskipan fyrir natríumatómið (Na).',
    p: P([{ q: 'Rafeindaskipan:', a: EK('1s2 2s2 2p6 3s1') }, { q: 'Þétt:', a: EK('[Ne]3s1') }]) },
  { t: 'Verkefni 31', short: '31', s: VK, th: ['rafeindaskipan'],
    g: 'Ritaðu rafeindaskipan og þétta rafeindaskipan fyrir kolefnisatómið (C).',
    p: P([{ q: 'Rafeindaskipan:', a: EK('1s2 2s2 2p2') }, { q: 'Þétt:', a: EK('[He]2s2 2p2') }]) },
  { t: 'Verkefni 32', short: '32', s: VK, th: ['rafeindaskipan', 'atturegla'],
    g: `Ritaðu rafeindaskipan og þétta rafeindaskipan fyrir natríumatóm sem hefur misst eina rafeind (${CH('Na^+')}).`,
    p: P([{ q: 'Rafeindaskipan:', a: EK('1s2 2s2 2p6') }, { q: 'Þétt:', a: `${EK('[Ne]')} – sama skipan og neon` }]) },
  { t: 'Verkefni 33', short: '33', s: VK, th: ['rafeindaskipan'],
    g: 'Hvað heita flokkarnir sem mynda s-blokkina?',
    p: [{ q: '', a: '<b>Alkalímálmar</b> (1. flokkur) og <b>jarðalkalímálmar</b> (2. flokkur).' }] },
  { t: 'Verkefni 34', short: '34', s: VK, th: ['rafeindaskipan'],
    g: 'Hvaða frumefni hefur p-blokkina í lotu 2 fyllta af rafeindum?',
    p: [mc('', ['Flúor (F)', 'Neon (Ne)', 'Argon (Ar)'], 1, `Ne: ${EK('1s2 2s2 2p6')}`)] },
  { t: 'Verkefni 35', short: '35', s: VK, th: ['rafeindaskipan'],
    g: 'Hve margir flokkar eru í p-blokkinni og hve margar rafeindir komast inn í hana í hverri lotu?',
    p: P([num('Flokkar:', 6, '', 'Flokkar 13–18.'), num('Rafeindir:', 6, '', 'Ein rafeind bætist við í hverjum flokki: þrjú p-svigrúm × 2.')]) },
  { t: 'Verkefni 36', short: '36', s: VK, th: ['rafeindaskipan'],
    g: 'Hvaða frumefni hefur s-blokkina fyllta af rafeindum í lotu 4?',
    p: [mc('', ['Kalíum (K)', 'Kalsíum (Ca)', 'Magnesíum (Mg)'], 1, `Ca: ${EK('[Ar]4s2')}`)] },
  { t: 'Verkefni 37', short: '37', s: VK, th: ['gildisrafeindir'],
    g: 'Hvað eru gildisrafeindir?',
    p: [{ q: '', a: 'Rafeindirnar á ysta hvolfinu, í s- og p-svigrúmum – mest átta.' }] },
  { t: 'Verkefni 38', short: '38', s: VK, th: ['gildisrafeindir'],
    g: 'Í hvaða flokki eru frumefni sem hafa tvær gildisrafeindir?',
    p: [num('Flokkur nr.', 2, '', '2. flokkur – jarðalkalímálmar.')] },
  { t: 'Verkefni 39', short: '39', s: VK, th: ['gildisrafeindir'],
    g: 'Hver er fjöldi gildisrafeinda í eðalgösum (18. flokki)?',
    p: [num('Gildisrafeindir:', 8, '', '8 – fylltur oktett. (Helíum er undantekning með 2.)')] },
  { t: 'Verkefni 40', short: '40', s: VK, th: ['gildisrafeindir'],
    g: 'Ritaðu Lewis-myndir fyrir eftirtalin frumefni. Hugsaðu fyrst: hve margar gildisrafeindir?',
    p: P([
      { q: 'kolefni', a: LEWIS('C', 4) + ' 4 gildisrafeindir (14. flokkur)' + MINE },
      { q: 'ál', a: LEWIS('Al', 3) + ' 3 gildisrafeindir (13. flokkur)' + MINE },
      { q: 'magnesíum', a: LEWIS('Mg', 2) + ' 2 gildisrafeindir (2. flokkur)' + MINE },
      { q: 'bróm', a: LEWIS('Br', 7) + ' 7 gildisrafeindir (17. flokkur)' + MINE },
      { q: 'argon', a: LEWIS('Ar', 8) + ' 8 gildisrafeindir (18. flokkur)' + MINE }
    ]) },
  { t: 'Verkefni 41', short: '41', s: VK, th: ['atturegla'],
    g: 'Hvað felur áttureglan í sér varðandi fjölda rafeinda?',
    p: [{ q: '', a: 'Atóm leitast við að hafa <b>átta rafeindir</b> á ysta hvolfi (í s- og p-svigrúmum) – eins og eðalgas. Hvert svigrúm tekur tvær, svo mest átta.' }] },
  { t: 'Verkefni 42', short: '42', s: VK, th: ['atturegla', 'gildisrafeindir'],
    g: 'Hve margar rafeindir þarf nituratómið að taka upp til að fylla oktettinn, og hver væri nettóhleðsla þess þá?',
    p: P([
      num('Rafeindir sem það tekur upp:', 3, '', 'N er í 15. flokki með 5 gildisrafeindir: 8 − 5 = 3.'),
      mc('Nettóhleðslan:', ['3+', '3−', '5−'], 1, 'Þá eru rafeindirnar 10 en róteindirnar 7.')
    ]) },
  { t: 'Verkefni 43', short: '43', s: VK, th: ['atturegla', 'gildisrafeindir'],
    g: 'Kalíumatómið er í 1. flokki. Hve margar rafeindir missir það til að fá fylltan oktett, og hver væri nettóhleðslan þá?',
    p: P([
      num('Rafeindir sem það missir:', 1, ''),
      mc('Nettóhleðslan:', ['1+', '1−', '0'], 0, `${CH('K^+')}`)
    ]) }
]
};
})());
