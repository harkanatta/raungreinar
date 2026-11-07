/* Kafli 1 – Raunvísindi, tölur og einingar. Transcribed from "Inngangur að raunvisindum - 1. kafli.pdf".
   Answers from "Svör úr kafla 1-1.pdf"; worked steps are written for the app.
   Mistakes in the book text are corrected here and listed in README.md. */
Book.add((() => {
const VK = 'Verkefni 1. kafla';
const rho = '<i>ρ</i>';

/* Mynd 1.3 – three targets: precision (stöðugleiki) and accuracy (réttmæti) */
function targets() {
  const sets = [
    { x: 90, pts: [[28, -26], [34, -20], [24, -18], [31, -31], [38, -25]], t: ['Góður stöðugleiki', 'Lélegt réttmæti'] },
    { x: 290, pts: [[-30, 20], [26, 30], [10, -36], [-34, -14], [36, -6]], t: ['Lélegur stöðugleiki', 'Lélegt réttmæti'] },
    { x: 490, pts: [[-4, 3], [5, -4], [3, 6], [-6, -3], [1, -1]], t: ['Góður stöðugleiki', 'Gott réttmæti'] }];
  let s = '<svg class="fig" viewBox="0 0 580 230" role="img" aria-label="Mynd 1.3: þrjár skífur sem sýna stöðugleika og réttmæti">';
  for (const g of sets) {
    for (const r of [60, 40, 20]) s += `<circle cx="${g.x}" cy="80" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/>`;
    s += `<circle cx="${g.x}" cy="80" r="5" fill="currentColor"/>`;
    for (const [dx, dy] of g.pts) s += `<circle cx="${g.x + dx}" cy="${80 + dy}" r="6" fill="var(--accent)"/>`;
    s += `<text x="${g.x}" y="180" font-size="19" fill="currentColor" text-anchor="middle">${g.t[0]}</text>`;
    s += `<text x="${g.x}" y="206" font-size="19" fill="currentColor" text-anchor="middle">${g.t[1]}</text>`;
  }
  return s + '</svg>';
}

return {
n: 1,
title: 'Raunvísindi, tölur og einingar',
theory: {

adferd: { t: '1.1 Vísindaleg aðferð', h: `
<p>Hvernig vitum við hvað er satt í náttúruvísindum? Til þess notum við <b>vísindalega aðferð</b> – skipulega leið til að setja fram
tilgátur, gera tilraunir og draga ályktanir út frá gögnum. Hún mótaðist á tímum endurreisnarinnar á 16. og 17. öld
(Francis Bacon, Galíleó Galílei, Isaac Newton).</p>
${RULE('Skref vísindalegrar aðferðar', `<ol>
<li><b>Athugun</b> – tekið er eftir fyrirbæri eða mynstri. <i>Af hverju eru sumar plöntur háðar birtu til að vaxa?</i></li>
<li><b>Spurning</b> – spurning eða vandamál sett fram. <i>Hvernig hefur birtustig áhrif á vöxt plantna?</i></li>
<li><b>Tilgáta</b> – fræðileg ágiskun sem þarf að vera <b>prófanleg</b>. <i>Ef planta fær meira ljós vex hún hraðar.</i></li>
<li><b>Tilraunir og gagnasöfnun</b> – tilgátan er prófuð og gögnum safnað.</li>
<li><b>Greining gagna og niðurstöður</b> – stenst tilgátan eða þarf að endurskoða hana?</li>
<li><b>Ályktun og birting</b> – niðurstöður settar fram með rökstuðningi. Ef tilgátan stenst ekki er hún endurskoðuð eða ný sett fram.</li></ol>`)}
${ATH('Rannsóknir þarf að <b>endurtaka</b> til að tryggja áreiðanleika, og aðrir vísindamenn endurmeta niðurstöðurnar.', 'Endurtekning og endurmat')}`},

si: { t: '1.2 SI-einingakerfið og forskeyti', h: `
<p>Í raunvísindum er alþjóðlega <b>SI-einingakerfið</b> (Système International d'Unités) mest notað. Það hefur sjö grunneiningar;
allar aðrar einingar eru <b>afleiddar</b>, t.d. fermetri ${U('', 'm^2')} = ${U('', 'm')} · ${U('', 'm')}.</p>
${TB(['Grunnstærð (tákn)', 'Heiti einingar', 'Tákn'], [
  ['lengd (<i>l</i>)', 'metri', 'm'], ['massi (<i>m</i>)', 'kílógramm', 'kg'], ['tími (<i>t</i>)', 'sekúnda', 's'],
  ['rafstraumur (<i>I</i>)', 'amper', 'A'], ['hitastig (<i>T</i>)', 'kelvin', 'K'], ['ljósmagn', 'kandela', 'cd'], ['efnismagn (<i>n</i>)', 'mól', 'mol']])}
${ATH('Tala án einingar er merkingarlaus. Ritaðu alltaf einingar með stærðum, með einu bili á milli tölu og einingar: 5 m, ekki 5m.', 'Gildi eininga')}
<p><b>Tafla 1.2 · Forskeyti</b></p>
${TB(['Forskeyti', 'Tákn', 'Gildi', 'Dæmi'], [
  ['tera-', 'T', U('10^12', ''), `1 Tm = ${U('1*10^12', 'm')}`], ['gíga-', 'G', U('10^9', ''), `1 Gm = ${U('1*10^9', 'm')}`],
  ['mega-', 'M', U('10^6', ''), `1 Mm = ${U('1*10^6', 'm')}`], ['kíló-', 'k', U('10^3', ''), `1 km = ${U('1*10^3', 'm')}`],
  ['hektó-', 'h', U('10^2', ''), `1 hm = ${U('1*10^2', 'm')}`], ['deka-', 'da', U('10^1', ''), `1 dam = ${U('1*10^1', 'm')}`],
  ['(grunneining)', '–', U('10^0', ''), '1 m'], ['desi-', 'd', U('10^-1', ''), `1 dm = ${U('1*10^-1', 'm')}`],
  ['senti-', 'c', U('10^-2', ''), `1 cm = ${U('1*10^-2', 'm')}`], ['milli-', 'm', U('10^-3', ''), `1 mm = ${U('1*10^-3', 'm')}`],
  ['míkró-', 'µ', U('10^-6', ''), `1 µm = ${U('1*10^-6', 'm')}`], ['nanó-', 'n', U('10^-9', ''), `1 nm = ${U('1*10^-9', 'm')}`],
  ['píkó-', 'p', U('10^-12', ''), `1 pm = ${U('1*10^-12', 'm')}`]])}
${EXMP('Sýnidæmi 1.1 · Forskeyti', `Gefðu stærðunum nafn með réttu forskeyti: a) ${U('1*10^-6', 'g')} b) ${U('1*10^9', 'm')} c) ${U('1*10^-3', 'm')} d) ${U('1*10^-9', 'L')} e) ${U('1*10^-2', 'L')} f) ${U('1*10^-5', 'm')}`,
  STEPS('Finnum forskeytin í töflu 1.2:',
    `a) 1 míkrógramm, ${U('1', 'µg')} &nbsp; b) 1 gígametri, ${U('1', 'Gm')} &nbsp; c) 1 millimetri, ${U('1', 'mm')}`,
    `d) 1 nanólítri, ${U('1', 'nL')} &nbsp; e) 1 sentilítri, ${U('1', 'cL')} &nbsp; f) 10 míkrómetrar, ${U('10', 'µm')}`))}
${EXMP('Sýnidæmi 1.2 · Afleidd eining', `Hvert er rúmmál kassa sem er ${U('2,40', 'cm')} á alla kanta?`,
  STEPS(`${U('2,40', 'cm')} · ${U('2,40', 'cm')} · ${U('2,40', 'cm')} = ${U('13,8', 'cm^3')}`,
    `Einingarnar eru líka margfaldaðar saman: cm · cm · cm = ${U('', 'cm^3')} (rúmsentimetrar).`))}`},

ovissa: { t: '1.3 Óvissa í mælingum', h: `
<p>Sumar stærðir eru nákvæmlega þekktar – tölur sem fást við <b>talningu</b> og skilgreiningar (nákvæmlega 1000 g í 1 kg, π).
En öllum <b>mælingum</b> fylgir óvissa: <b>tækjaóvissa</b> (takmörk mælitækisins) og <b>mannleg óvissa</b> (aflestur og verklag).</p>
${DEF('Stöðugleiki og réttmæti', `<b>Stöðugleiki</b> (e. precision): endurteknar mælingar gefa svipað eða sama gildi.<br>
<b>Réttmæti</b> (e. accuracy): mælingin er nálægt <b>réttu</b> gildi. Mæling getur verið stöðug en samt óréttmæt.`)}
${targets()}
<p style="text-align:center"><small>Mynd 1.3 – miðjan er rétta gildið, punktarnir endurteknar mælingar.</small></p>
<p>Óvissan er í <b>síðasta stafnum</b>. Nákvæm vigt sem sýnir 1,256 g: skráð ${U('1,256 ± 0,001', 'g')}. Ónákvæmari vigt sem sýnir 1,2 g: ${U('1,2 ± 0,1', 'g')}.</p>
${ATH(`Skráðu alla örugga stafi <b>og einn</b> sem byggir á mati. Hitamælir með 1 °C millibili, hitinn milli 26 og 27 °C: skráð t.d. ${U('26,4', '°C')} – ekki 26,45 °C, því mælirinn býður ekki upp á þá nákvæmni.`)}`},

markverdir: { t: '1.4 Markverðir stafir', h: `
${RULE('Reglur um markverða stafi', `<ol>
<li>Allir tölustafir aðrir en núll eru markverðir. <i>482,15 hefur fimm.</i></li>
<li>Núll <b>á milli</b> annarra tölustafa er alltaf markvert. <i>97,073 hefur fimm.</i></li>
<li>Núll <b>í upphafi</b> tölu eru ekki markverð – þau staðsetja bara kommuna. <i>0,026 hefur tvo (2 og 6).</i></li>
<li>Núll <b>aftast, aftan við kommu</b>, er markvert. <i>182,200 m hefur sex.</i></li>
<li>Núll aftast <b>án kommu</b> geta verið markverð eða ekki. <i>23.000 kg getur haft tvo til fimm.</i>
Staðalform tekur af vafann: ${U('2,3000*10^4', 'kg')} (fimm) eða ${U('2,3*10^4', 'kg')} (tveir).</li></ol>`)}
${ATH('Talningar (26 nemendur) og skilgreiningar (1 kg = 1000 g) eru <b>fastar stærðir</b> með óendanlega marga markverða stafi. Þær takmarka aldrei fjölda markverðra stafa í svari.', 'Fastar stærðir')}
${EXMP('Sýnidæmi 1.3', `Hve margir markverðir stafir eru í a) ${U('2703,0', 'kg')} b) ${U('0,0082', 'mL')} c) ${U('3400,0', 'L')}?`,
  'a) fimm (regla 4) &nbsp; b) tveir (regla 3) &nbsp; c) fimm (regla 4)')}
${RULE('Margföldun og deiling', 'Sú tala sem hefur <b>fæsta markverða stafi</b> ræður fjölda markverðra stafa í svarinu. <i>3,2 · 4,567: tveir markverðir stafir.</i>')}
${RULE('Samlagning og frádráttur', 'Sú tala sem hefur <b>fæsta aukastafi</b> (aftan við kommu) ræður fjölda aukastafa í svarinu. <i>12,345 + 7,2: einn aukastafur.</i>')}
${ATH('Haltu öllum stöfum í milliútreikningum og námundaðu aðeins lokasvarið. Ef ekki er hægt að sýna réttan fjölda markverðra stafa (25.000 m með þremur) er notað staðalform: ' + U('2,50*10^4', 'm') + '.')}
${EXMP('Sýnidæmi 1.4', `${U('623', 'km')} · ${U('50,0', 'km')} · ${U('2,363', 'km')} = ?`,
  STEPS(`Reiknivélin: ${U('73.607,45', 'km^3')}`, `Fæstir markverðir stafir eru þrír (623 og 50,0): <b>${U('7,36*10^4', 'km^3')}</b>`))}
${EXMP('Sýnidæmi 1.5', `Rúmmál ferstrendings með ${M('l')} = ${U('36,20', 'm')}, ${M('b')} = ${U('2,37', 'm')}, ${M('h')} = ${U('12,01', 'm')}?`,
  STEPS(`Reiknivélin: ${U('1030,38594', 'm^3')}`, `Þrír markverðir stafir (2,37): <b>${U('1,03*10^3', 'm^3')}</b>`))}
${EXMP('Sýnidæmi 1.6', `${U('20,46', 'g')} + ${U('1,326', 'g')} + ${U('83,1', 'g')} = ?`,
  STEPS(`Reiknivélin: ${U('104,886', 'g')}`, `83,1 hefur einn aukastaf: <b>${U('104,9', 'g')}</b>`))}`},

umbreyting: { t: '1.5 Umbreytingarstuðlar', h: `
<p>Til að breyta einni einingu í aðra margföldum við með <b>umbreytingarstuðli</b> – hlutfalli tveggja jafnstórra stærða.
Af ${U('1', 'in')} = ${U('2,54', 'cm')} fást tveir stuðlar: ${F(U('1', 'in'), U('2,54', 'cm'))} og ${F(U('2,54', 'cm'), U('1', 'in'))}.</p>
${RULE('Notkun', `Upphafseining · umbreytingarstuðull = ný eining. Veldu stuðulinn sem <b>styttir út</b> eininguna sem á að hverfa:
<div class="steps">${U('1,26', 'in')} · ${F(U('2,54', 'cm'), U('1', 'in'))} = ${U('3,20', 'cm')}</div>
Með hinum stuðlinum yrði einingin in²/cm – röng eining bendir á rangan stuðul.`)}
${EXMP('Dæmi', `Breytum ${U('5,0', 'km')} í metra.`, `${U('5,0', 'km')} · ${F(U('1000', 'm'), U('1', 'km'))} = ${U('5,0*10^3', 'm')}`)}
${ATH('Samræmdu einingar áður en þú reiknar: ef tvær hliðar tenings eru í cm og ein í m þarf að breyta fyrst, annars verður einingin cm²·m.')}
${EXMP('Sýnidæmi 1.7 · Fleiri stuðlar', `Meðalhraði nitursameindar við 25,0 °C er ${U('515', 'm/s')}. Hver er hraðinn í mílum á klukkustund?`,
  STEPS(`${U('515', 'm/s')} · ${F(U('1', 'km'), U('1000', 'm'))} · ${F(U('1', 'mi'), U('1,609', 'km'))} · ${F(U('3600', 's'), U('1', 'klst'))} = ${U('1152,3', 'mi/klst')}`,
    `Þrír markverðir stafir: <b>${U('1,15*10^3', 'mi/klst')}</b>`))}`},

lengdmassi: { t: '1.6 Mælistærðir – lengd, massi og þyngd', h: `
<p><b>Lengd:</b> SI-grunneiningin er <b>metri</b> – sú vegalengd sem ljós fer í tómarúmi á 1/299.792.458 úr sekúndu.
Algengar eru líka dm, cm, mm, og utan SI tommur (in), fet (ft) og mílur (mi).</p>
${TB(['Eining', 'Jafngildi'], [
  ['1 km', '1000 m'], ['1 m', '100 cm'], ['1 cm', '10 mm = 0,01 m = 0,3937 in'], ['1 mm', '0,001 m = 0,1 cm'],
  ['1 mi', '1,609 km = 1609 m'], ['1 ft', '0,3048 m = 30,48 cm'], ['1 in', '2,54 cm = 25,4 mm']])}
${EXMP('Sýnidæmi 1.8', `Hvað eru ${U('24,6', 'in')} margir sentimetrar?`, `${U('24,6', 'in')} · ${F(U('2,54', 'cm'), U('1', 'in'))} = <b>${U('62,5', 'cm')}</b>`)}
${DEF('Massi og þyngd', `<b>Massi</b> (${M('m')}) er mælikvarði á magn efnis og er óháður staðsetningu. SI-eining: ${U('', 'kg')}.<br>
<b>Þyngd</b> (${M('W')}) er krafturinn sem verkar á hlut vegna þyngdarsviðs: <div class="steps">${M('W = m * g')}</div>
mæld í newtonum, ${U('1', 'N')} = ${U('1', 'kg*m/s^2')}. Á jörðinni er ${M('g')} ≈ ${U('9,81', 'm/s^2')}, á tunglinu ≈ ${U('1,62', 'm/s^2')}.`)}
${TB(['Eining', 'Jafngildi'], [
  ['1 kg', '1000 g = 2,205 lb'], ['1 g', '0,001 kg = 1000 mg = 0,0353 oz'], ['1 mg', '0,001 g = 1000 µg'], ['1 µg', '0,000001 g = 0,001 mg'],
  ['1 tonn', '1000 kg'], ['1 lb (pund)', '0,454 kg = 454 g = 16 oz'], ['1 oz (únsa)', '28,35 g']])}
${EXMP('Sýnidæmi 1.9', `Meðalmaður er ${U('83,4', 'kg')}. Hvað er það í grömmum?`,
  STEPS(`${U('83,4', 'kg')} · ${F(U('1000', 'g'), U('1', 'kg'))} = ${U('83.400', 'g')}`, `Þrír markverðir stafir: <b>${U('8,34*10^4', 'g')}</b>`))}
${EXMP('Sýnidæmi 1.10', `Hvað er ${U('83,4', 'kg')} í pundum?`,
  STEPS(`${U('83,4', 'kg')} · ${F(U('2,205', 'lb'), U('1', 'kg'))} = ${U('183,897', 'lb')}`, `Þrír markverðir stafir: <b>${U('184', 'lb')}</b>`))}`},

rummal: { t: 'Rúmmál og eðlismassi', h: `
<p><b>Rúmmál</b> (${M('V')}) hefur afleiddu SI-eininguna rúmmetra, ${U('', 'm*m*m')} = ${U('', 'm^3')}. Í efnafræði eru lítrar algengari:</p>
${TB(['Eining', 'Jafngildi'], [
  ['1 L', '1 dm³ (teningur, 1 dm á hlið)'], ['1 mL', '1 cm³ (teningur, 1 cm á hlið)'], ['1 L', '1000 mL = 1000 cm³'],
  ['1 m³', '1000 L = 1000 dm³'], ['1 cm³', '0,000001 m³ = 1000 mm³']])}
${EXMP('Sýnidæmi 1.11', `Hvað er ${U('1,63', 'm^3')} margir ${U('', 'dm^3')}?`,
  STEPS(`${U('1,63', 'm^3')} · ${F(U('1000', 'dm^3'), U('1', 'm^3'))} = ${U('1630', 'dm^3')}`, `Þrír markverðir stafir: <b>${U('1,63*10^3', 'dm^3')}</b>`))}
${DEF('Eðlismassi', `Eðlismassi (${rho}, gríski stafurinn rho) er massi á rúmmálseiningu:
<div class="steps">${rho} = ${F(M('m'), M('V'))}</div>
SI-eining: ${U('', 'kg/m^3')}. Í efnafræði er algengara ${U('', 'g/cm^3')} = ${U('', 'g/mL')}; ${U('1', 'g/cm^3')} = ${U('1000', 'kg/m^3')}.`)}
${TB(['Efni', `Eðlismassi (${U('', 'g/mL')})`], [
  ['vetnisgas', '0,000089'], ['koldíoxíðgas', '0,0019'], ['andrúmsloft', '0,00129'], ['etanól', '0,79'], ['vatn', '1,0'],
  ['borðsykur', '1,59'], ['borðsalt', '2,16'], ['járn', '7,86'], ['blý', '11,34'], ['gull', '19,30']])}
<p><small>Tafla 1.5 – eðlismassi við 25 °C. (Í bókinni stendur 1,16 fyrir borðsalt; rétt er 2,16.)</small></p>
${ATH('Með því að vigta efni og mæla rúmmál þess má reikna eðlismassann og bera hann saman við töflugildi til að finna líklegasta efnið.', 'Hagnýting')}
${EXMP('Sýnidæmi 1.12', `Hver er massi silfurmola með eðlismassann ${U('10,49', 'g/mL')} ef rúmmálið er ${U('34,2', 'cm^3')}?`,
  STEPS(`${U('', 'cm^3')} = ${U('', 'mL')} og ${M('m')} = ${rho} · ${M('V')}`, `${M('m')} = ${U('10,49', 'g/mL')} · ${U('34,2', 'mL')} = <b>${U('359', 'g')}</b>`))}`},

hiti: { t: 'Hitastig og varmi', h: `
${DEF('Hitastig og varmi', `<b>Hitastig</b> er mælikvarði á meðalhreyfiorku eindanna í efninu.<br>
<b>Varmi</b> er orka sem flyst milli hluta vegna hitamunar – alltaf frá heitari hlut til kaldari þar til jafnvægi næst.`)}
<p>Selsíuskvarðinn byggir á vatni: 0 °C er frostmark og 100 °C suðumark við eðlilegan loftþrýsting.
SI-eining hitastigs er <b>kelvin</b> (K). Kelvinkvarðinn byrjar við <b>alkul</b>, 0 K = −273,15 °C, og 1 K er jafnstórt og 1 °C.</p>
${RULE('Umbreyting', `<div class="steps">${M('T')}(K) = ${M('T')}(°C) + 273,15<br>${M('T')}(°C) = ${M('T')}(K) − 273,15</div>`)}
${EXMP('Sýnidæmi 1.13', `Borðsalt bráðnar við ${U('1074,15', 'K')}. Hvað er það í °C?`, `1074,15 − 273,15 = <b>${U('801', '°C')}</b>`)}
${EXMP('Sýnidæmi 1.14', `Herbergishiti er ${U('20,00', '°C')}. Hvað er það í kelvin?`, `20,00 + 273,15 = <b>${U('293,15', 'K')}</b>`)}`},

hlutfoll: { t: 'Hlutfallsstærðir – prósentur, ppm og ppb', h: `
<p>Prósenta segir hve stór hluti eitthvað er af 100: 3 % = 3/100 af heildinni. Í efnafræði eru þrjár gerðir algengar:</p>
${TB(['Gerð', 'Formúla', 'Dæmi um notkun'], [
  ['Massaprósenta (%w/w)', `${F('massi efnis (g)', 'massi heildar (g)')} · 100 %`, 'matvæli, lyfjalausnir'],
  ['Massa/rúmmálsprósenta (%w/v)', `${F('massi efnis (g)', 'heildarrúmmál (mL)')} · 100 %`, 'töflur leystar upp í vökva'],
  ['Rúmmálsprósenta (%v/v)', `${F('rúmmál efnis (mL)', 'heildarrúmmál (mL)')} · 100 %`, 'áfengi, t.d. 40 % v/v í vodka'],
  ['ppm (hlutar af milljón)', `${F('massi efnis (g)', 'massi heildar (g)')} · ${U('10^6', '')}`, 'snefilefni, loftmengun; 1 ppm ≈ 1 mg í 1 L af vatni'],
  ['ppb (hlutar af milljarði)', `${F('massi efnis (g)', 'massi heildar (g)')} · ${U('10^9', '')}`, 'eiturefni í umhverfi; 1 ppb ≈ 1 µg í 1 L af vatni']])}
${EXMP('Sýnidæmi 1.15 · ppm', `Vatnssýni sem vegur ${U('2,50', 'g')} inniheldur ${U('4,7', 'µg')} af magnesíumjónum. Hver er styrkurinn í ppm?`,
  STEPS(`${U('4,7', 'µg')} · ${F(U('1', 'g'), U('10^6', 'µg'))} = ${U('4,7*10^-6', 'g')}`,
    `ppm = ${F(U('4,7*10^-6', 'g'), U('2,50', 'g'))} · ${U('10^6', '')} = 1,88`, 'Tveir markverðir stafir: <b>1,9 ppm</b>'))}
${EXMP('Sýnidæmi 1.16 · %w/w', `${U('123,0', 'g')} sýni inniheldur ${U('45,9', 'g')} af natríumklóríði. Hver er massaprósentan?`,
  `${F(U('45,9', 'g'), U('123,0', 'g'))} · 100 % = 37,317 % → <b>37,3 %w/w</b>`)}
${EXMP('Sýnidæmi 1.17 · %v/v', `${U('23,5', 'mL')} af etanóli eru í ${U('422', 'mL')} af bjór. Hver er rúmmálsprósentan?`,
  `${F(U('23,5', 'mL'), U('422', 'mL'))} · 100 % = 5,5687 % → <b>5,57 %v/v</b>`)}`}
},

exercises: [
  { t: 'Verkefni 1', short: '1', s: VK, th: ['adferd'],
    g: `Í vísindalegri aðferð eru 6 skref. Raðaðu eftirfarandi í rétta röð:
<ol style="list-style:lower-roman">
<li>Ég tek 12 eins plöntur og nota áburð A á 4 plöntur, áburð B á 4 og áburð C á 4, á sama tíma á allar plönturnar.</li>
<li>Plöntur virðast vaxa betur með áburði.</li>
<li>Ætli það séu til mismunandi tegundir af áburði og hafa þeir mismunandi áhrif á vaxtahraða plantna?</li>
<li>Plöntur sem fengu áburð B uxu bæði hraðast og urðu stærstar.</li>
<li>Ef ég prófa þrjár gerðir af áburði, A, B og C, þá tel ég að áburður A virki best.</li>
<li>Ég birti grein í vísindatímariti um að áburður B sé bestur á þessa gerð af plöntu.</li></ol>`,
    p: [{ q: '', a: '<b>ii, iii, v, i, iv, vi</b> – athugun, spurning, tilgáta, tilraun, niðurstöður, birting.' }] },
  { t: 'Verkefni 2', short: '2', s: VK, th: ['si'], g: 'Hver er munurinn á <b>tölu</b> og <b>eðlisfræðilegri stærð</b>?',
    p: [{ q: '', a: 'Tala ein og sér segir lítið. Ef tölu fylgir <b>eining</b> segjum við að um eðlisfræðilega stærð sé að ræða, sem hefur skýra merkingu.' }] },
  { t: 'Verkefni 3', short: '3', s: VK, th: ['markverdir'], g: 'Ritaðu eftirfarandi stærðir á staðalformi.',
    p: P([
      { q: U('650', 'm'), a: `<b>${U('6,50*10^2', 'm')}</b>` },
      { q: '8.600', a: `<b>${U('8,600*10^3', '')}</b>` },
      { q: '0,00023', a: `<b>${U('2,3*10^-4', '')}</b>` },
      { q: '1.000.234', a: `<b>${U('1,000234*10^6', '')}</b>` },
      { q: U('0,00239', 'g'), a: `<b>${U('2,39*10^-3', 'g')}</b>` }]) },
  { t: 'Verkefni 4', short: '4', s: VK, th: ['si'], g: 'Notaðu rétt forskeyti til að rita eftirfarandi tölur, og ritaðu rétta einingu fyrir nafnið.',
    p: P([
      { q: U('1,26*10^-6', 'm'), a: `<b>${U('1,26', 'µm')}</b> (míkrómetrar)` },
      { q: U('3,68*10^-7', 'g'), a: `<b>${U('0,368', 'µg')}</b> (míkrógrömm) – eða ${U('368', 'ng')}` },
      { q: U('4,26*10^-3', 'kg'), a: `<b>${U('4,26', 'g')}</b> (grömm)` },
      { q: U('2,76*10^6', 's'), a: `<b>${U('2,76', 'Ms')}</b> (megasekúndur)` }]) },
  { t: 'Verkefni 5', short: '5', s: VK, th: ['si', 'umbreyting'], g: 'Ritaðu stærðirnar á staðalformi í <b>SI-grunneiningum</b>. Upplagt er að nota umbreytingarstuðla.',
    p: P([
      { q: '420 míkrómetrar', a: `<b>${U('4,20*10^-4', 'm')}</b>` },
      { q: '265 nanógrömm', a: `<b>${U('2,65*10^-10', 'kg')}</b> – grunneining massa er kg, ekki g: ${U('265*10^-9', 'g')} = ${U('2,65*10^-7', 'g')} = ${U('2,65*10^-10', 'kg')}` },
      { q: U('1,24*10^6', 'kg'), a: `<b>${U('1,24*10^6', 'kg')}</b> – er þegar í grunneiningu.` },
      { q: '737 desímól', a: `<b>${U('7,37*10^1', 'mol')}</b>` }]) },
  { t: 'Verkefni 6', short: '6', s: VK, th: ['si'], g: 'Hvað eru margir píkómetrar í einum metra?',
    p: [{ q: '', a: `${U('1', 'm')} = <b>${U('1*10^12', 'pm')}</b> – píkó er ${U('10^-12', '')}.` }] },
  { t: 'Verkefni 7', short: '7', s: VK, th: ['ovissa'], g: 'Hvaða tölur fela <b>ekki</b> í sér óvissu?',
    p: P([
      tf('Fjöldi nemenda í efnafræðitíma', false, 'talning.', ['Hefur óvissu', 'Engin óvissa']),
      tf('Massi krónupenings', true, 'mæling.', ['Hefur óvissu', 'Engin óvissa']),
      tf('Fjöldi gramma í einu kílógrammi', false, 'skilgreining.', ['Hefur óvissu', 'Engin óvissa']),
      tf('Fjöldi súkkulaðikúla í 100 grömmum', true, 'kúlurnar eru misþungar, svo fjöldinn í 100 g er ekki alltaf sá sami.', ['Hefur óvissu', 'Engin óvissa'])]) },
  { t: 'Verkefni 8', short: '8', s: VK, th: ['ovissa', 'markverdir'], g: `Hver er munurinn á mælingunum ${U('4,0', 'g')} og ${U('4,00', 'g')}?`,
    p: [{ q: '', a: 'Óvissan liggur í <b>fyrsta</b> aukastaf á 4,0 g en í <b>öðrum</b> aukastaf á 4,00 g. Seinni mælingin er nákvæmari.' }] },
  { t: 'Verkefni 9', short: '9', s: VK, th: ['ovissa', 'markverdir'],
    g: `Sýni sem er um ${U('25', 'g')} var vigtað á vigt með nákvæmni upp á ${U('0,001', 'g')}. Hvernig skal rita töluna og með hve mörgum markverðum stöfum?`,
    p: [{ q: '', a: `<b>${U('25,000', 'g')}</b> – fimm markverðir stafir.` }] },
  { t: 'Verkefni 10', short: '10', s: VK, th: ['markverdir'], g: 'Hvað eru margir markverðir stafir í eftirtöldum stærðum?',
    p: P([
      num(U('6,022*10^-23', ''), 4, '', 'Fjórir – veldið skiptir ekki máli.', { tol: 0 }),
      { q: '5000', a: '<b>Einn, tveir, þrír eða fjórir</b> – núll aftast án kommu (regla 5).' },
      num('2,84', 3, '', 'Þrír.', { tol: 0 }),
      num('0,0340', 3, '', 'Þrír – núllin fremst telja ekki, en núllið aftast aftan við kommu telur.', { tol: 0 }),
      num('0,034', 2, '', 'Tveir.', { tol: 0 })]) },
  { t: 'Verkefni 11', short: '11', s: VK, th: ['markverdir'], g: 'Ritaðu töluna 5.768 með þremur markverðum stöfum.',
    p: [{ q: '', a: `<b>${U('5,77*10^3', '')}</b>` }] },
  { t: 'Verkefni 12', short: '12', s: VK, th: ['markverdir'], g: 'Hvert er rétt svar m.t.t. markverðra stafa?',
    p: P([
      num(`${U('24,3', 'm')} + ${U('43,01', 'm')} + ${U('2343,2', 'm')} + ${U('3,2693', 'm')}`, 2413.8, 'm',
        `Reiknivélin: ${U('2413,7793', 'm')}. Fæstir aukastafir: einn (24,3 og 2343,2).`, { tol: 0.00002 }),
      num(`${U('23,0', 'm')} · ${U('3,204', 'm')} · ${U('23,40', 'm')}`, 1.72e3, 'm^3',
        `Reiknivélin: ${U('1724,4', 'm^3')}. Fæstir markverðir stafir: þrír (23,0).`, { shown: '1,72·10^3', tol: 0.002 })]) },
  { t: 'Verkefni 13', short: '13', s: VK, th: ['markverdir', 'si'],
    g: `Kassi hefur hliðarlengdirnar ${U('2,35', 'cm')}, ${U('4,86', 'cm')} og ${U('1,0', 'cm')}. Hvert er rúmmál hans? Settu rétta einingu á svarið.`,
    p: [num('Rúmmálið:', 11, 'cm^3', `${U('2,35', 'cm')} · ${U('4,86', 'cm')} · ${U('1,0', 'cm')} = ${U('11,421', 'cm^3')}. Tveir markverðir stafir (1,0): ${U('11', 'cm^3')}, eða ${U('1,1*10^-5', 'm^3')}.`, { tol: 0.03 })] },
  { t: 'Verkefni 14', short: '14', s: VK, th: ['umbreyting'], g: `Einn kílómetri er 0,6214 mílur. Settu saman þá tvo umbreytingarstuðla sem fást af þessu.`,
    p: [{ q: '', a: `<b>${F(U('1', 'km'), U('0,6214', 'mi'))}</b> &nbsp; og &nbsp; <b>${F(U('0,6214', 'mi'), U('1', 'km'))}</b>` }] },
  { t: 'Verkefni 15', short: '15', s: VK, th: ['umbreyting'], g: 'Það eru 60 sekúndur í einni mínútu. Settu saman þá tvo umbreytingarstuðla sem fást af þessu.',
    p: [{ q: '', a: `<b>${F(U('60', 's'), U('1', 'mín'))}</b> &nbsp; og &nbsp; <b>${F(U('1', 'mín'), U('60', 's'))}</b>` }] },
  { t: 'Verkefni 16', short: '16', s: VK, th: ['umbreyting'], g: `Hvaða umbreytingarstuðul þarf að nota til að breyta ${U('235', 'm')} í mm?`,
    p: [{ q: '', a: `<b>${F(U('1000', 'mm'), U('1', 'm'))}</b> – svo metrarnir styttist út: ${U('235', 'm')} · ${F(U('1000', 'mm'), U('1', 'm'))} = ${U('2,35*10^5', 'mm')}.
      <br><small>Upplagt er líka að nota forskeyti beint þegar það er hægt.</small>` }] },
  { t: 'Verkefni 17', short: '17', s: VK, th: ['umbreyting'], g: `Hvað eru margir metrar í ${U('235', 'mm')}?`,
    p: [num('Svar:', 0.235, 'm', `${U('235', 'mm')} · ${F(U('1', 'm'), U('1000', 'mm'))} = ${U('0,235', 'm')} (eða ${U('2,35*10^-1', 'm')})`, { tol: 0.002 })] },
  { t: 'Verkefni 18', short: '18', s: VK, th: ['umbreyting', 'lengdmassi'], g: `Hvað eru ${U('6,5', 'in')} (tommur) margir millimetrar?`,
    p: [num('Svar:', 1.7e2, 'mm', `${U('6,5', 'in')} · ${F(U('25,4', 'mm'), U('1', 'in'))} = ${U('165,1', 'mm')}. Tveir markverðir stafir: ${U('1,7*10^2', 'mm')}`, { shown: '1,7·10^2' })] },
  { t: 'Verkefni 19', short: '19', s: VK, th: ['umbreyting'], g: `Fjarlægðin milli Akureyrar og Reykjavíkur er ${U('393', 'km')}. Hvað er það í metrum?`,
    p: [num('Svar:', 3.93e5, 'm', `${U('393', 'km')} · ${F(U('1000', 'm'), U('1', 'km'))} = ${U('3,93*10^5', 'm')}`, { shown: '3,93·10^5', tol: 0.002 })] },
  { t: 'Verkefni 20', short: '20', s: VK, th: ['umbreyting', 'lengdmassi'], g: 'Umreiknaðu stærðirnar með umbreytingarstuðlum.',
    p: P([
      num(`Humla flýgur á ${U('15,2', 'm/s')}. Hver er hraðinn í km/klst?`, 54.7, 'km/klst',
        `${U('15,2', 'm/s')} · ${F(U('1', 'km'), U('1000', 'm'))} · ${F(U('3600', 's'), U('1', 'klst'))} = ${U('54,72', 'km/klst')} → ${U('54,7', 'km/klst')}`, { tol: 0.002 }),
      num(`Hraði ljóssins er ${U('2,998*10^8', 'm/s')}. Hver er hann í tommum á klukkustund?`, 4.249e13, 'in/klst',
        `${U('2,998*10^8', 'm/s')} · ${F(U('100', 'cm'), U('1', 'm'))} · ${F(U('1', 'in'), U('2,54', 'cm'))} · ${F(U('3600', 's'), U('1', 'klst'))} = ${U('4,249*10^13', 'in/klst')}`, { shown: '4,249·10^13', tol: 0.001 }),
      num(`Frelsisstyttan er 305 fet á hæð. Hver er hæðin í metrum (1 fet = ${U('0,3048', 'm')})?`, 93.0, 'm',
        `${U('305', 'ft')} · ${F(U('0,3048', 'm'), U('1', 'ft'))} = ${U('92,96', 'm')} → ${U('93,0', 'm')}`, { tol: 0.002 }),
      num(`Bambus vex allt að ${U('60,0', 'cm')} á dag. Hve mikið er það í tommum á dag?`, 23.6, 'in/dag',
        `${U('60,0', 'cm')} · ${F(U('1', 'in'), U('2,54', 'cm'))} = ${U('23,62', 'in')} → ${U('23,6', 'in/dag')}`, { tol: 0.003 })]) },
  { t: 'Verkefni 21', short: '21', s: VK, th: ['umbreyting', 'lengdmassi', 'rummal'], g: 'Umreiknaðu stærðirnar með umbreytingarstuðlum.',
    p: P([
      num(`Meðalmaður er ${U('85,3', 'kg')}. Astmalyf: ${U('6,00', 'mg')} á hvert kíló líkamsmassa á dag. Hve mörg grömm þarf hann á dag?`, 0.512, 'g/dag',
        `${U('85,3', 'kg')} · ${F(U('6,00', 'mg'), U('1', 'kg'))} · ${F(U('1', 'g'), U('1000', 'mg'))} = ${U('0,5118', 'g')} → ${U('0,512', 'g/dag')}`, { tol: 0.003 }),
      num(`Hvað eru margir millilítrar í ${U('634', 'L')} bensíntanki?`, 6.34e5, 'mL', `${U('634', 'L')} · ${F(U('1000', 'mL'), U('1', 'L'))} = ${U('6,34*10^5', 'mL')}`, { shown: '6,34·10^5', tol: 0.002 }),
      num(`Hvað eru margir millilítrar í ${U('4,3', 'L')}?`, 4.3e3, 'mL', `${U('4,3', 'L')} · ${F(U('1000', 'mL'), U('1', 'L'))} = ${U('4,3*10^3', 'mL')}`, { shown: '4,3·10^3', tol: 0.005 }),
      num(`Sýni af lungnavökva reyndist ${U('128', 'nL')}. Hvað eru það margir lítrar?`, 1.28e-7, 'L', `${U('128', 'nL')} · ${F(U('10^-9', 'L'), U('1', 'nL'))} = ${U('1,28*10^-7', 'L')}`, { shown: '1,28·10^-7', tol: 0.002 })]) },
  { t: 'Verkefni 22', short: '22', s: VK, th: ['lengdmassi'], g: 'Hver er munurinn á <b>massa</b> og <b>þyngd</b>?',
    p: [{ q: '', a: 'Massi er mælikvarði á magn af efni, eða á hversu erfitt er að hafa áhrif á hreyfingu hlutar. Þyngd er annað orð yfir <b>þyngdarkraft</b> sem verkar á hlut vegna þyngdarsviðsins sem hann er staddur í.' }] },
  { t: 'Verkefni 23', short: '23', s: VK, th: ['lengdmassi', 'umbreyting'], g: `Hver er massi ${U('72,3', 'kg')} manneskju í pundum (1 pund = ${U('456', 'g')})?`,
    p: [num('Svar:', 159, 'lb', `${U('72,3', 'kg')} · ${F(U('1000', 'g'), U('1', 'kg'))} · ${F(U('1', 'lb'), U('456', 'g'))} = ${U('158,6', 'lb')} → ${U('159', 'lb')}
      <br><small>(Rétt gildi er 1 pund ≈ 454 g, sjá töflu – þá fæst ${U('159', 'lb')} líka.)</small>`, { tol: 0.004 })] },
  { t: 'Verkefni 24', short: '24', s: VK, th: ['lengdmassi'], g: `Köttur hefur þyngdina ${U('12,3', 'N')} á jörðinni. Hver er þyngd hans á tunglinu?`,
    tip: `Massinn er sá sami. ${M('g')} er ${U('9,81', 'm/s^2')} á jörðinni og ${U('1,62', 'm/s^2')} á tunglinu.`,
    p: [num('Þyngdin á tunglinu:', 2.03, 'N', STEPS(`${M('m')} = ${F(M('W'), M('g'))} = ${F(U('12,3', 'N'), U('9,81', 'm/s^2'))} = ${U('1,254', 'kg')}`,
      `${MS('W', 'tungl')} = ${U('1,254', 'kg')} · ${U('1,62', 'm/s^2')} = ${U('2,03', 'N')}`), { tol: 0.006 })] },
  { t: 'Verkefni 25', short: '25', s: VK, th: ['rummal'], g: `Hvað er eðlismassi (${rho}) og hver er afleidd SI-eining hans?`,
    p: [{ q: '', a: `Eðlismassi hlutar segir okkur hver massi hans er á <b>rúmmálseiningu</b>, ${rho} = ${F(M('m'), M('V'))}. SI-eining: <b>${U('', 'kg/m^3')}</b>.` }] },
  { t: 'Verkefni 26', short: '26', s: VK, th: ['rummal'],
    g: `Eðlismassi gulls er ${U('19,3', 'g/mL')}. Moli sem er ${U('2,5', 'cm^3')} vegur ${U('48,25', 'g')}. Sýndu fram á með jöfnunni fyrir eðlismassa að þessar stærðir passi saman.`,
    p: [{ q: '', a: `${rho} = ${F(U('48,25', 'g'), U('2,5', 'cm^3'))} = ${F(U('48,25', 'g'), U('2,5', 'mL'))} = <b>${U('19,3', 'g/mL')}</b>, sem er einmitt eðlismassi gulls.` }] },
  { t: 'Verkefni 27', short: '27', s: VK, th: ['rummal'], g: `Hvaða eðlismassa þarf hlutur að hafa til að fljóta í vatni, ef eðlismassi vatns er ${U('1,0', 'g/mL')}?`,
    p: [{ q: '', a: `Eðlismassinn þarf að vera <b>minni en ${U('1,0', 'g/mL')}</b>.` }] },
  { t: 'Verkefni 28', short: '28', s: VK, th: ['rummal'], g: `${U('47,3', 'mL')} sýni af etanóli hefur massann ${U('37,32', 'g')}. Hver er eðlismassi etanóls?`,
    p: [num('Eðlismassinn:', 0.789, 'g/mL', `${rho} = ${F(U('37,32', 'g'), U('47,3', 'mL'))} = ${U('0,7890', 'g/mL')} → ${U('0,789', 'g/mL')} (þrír markverðir stafir)`, { tol: 0.003 })] },
  { t: 'Verkefni 29', short: '29', s: VK, th: ['rummal', 'markverdir'], g: `Hvert er rúmmál kassa í mL ef hann er ${U('12,0', 'm')} á lengd, ${U('5,00', 'm')} á breidd og ${U('2,3', 'm')} á hæð?`,
    p: [num('Rúmmálið:', 1.4e8, 'mL', STEPS(`${U('12,0', 'm')} · ${U('5,00', 'm')} · ${U('2,3', 'm')} = ${U('138', 'm^3')}`,
      `${U('138', 'm^3')} · ${F(U('1000', 'L'), U('1', 'm^3'))} · ${F(U('1000', 'mL'), U('1', 'L'))} = ${U('1,38*10^8', 'mL')}`,
      `2,3 m hefur aðeins tvo markverða stafi, svo strangt til tekið ${U('1,4*10^8', 'mL')}. <small>(Í svörunum stendur ${U('1,38*10^8', 'mL')}.)</small>`), { shown: '1,4·10^8', tol: 0.02 })] },
  { t: 'Verkefni 30', short: '30', s: VK, th: ['rummal', 'si'], g: `Hvað eru margir lítrar í einum ${U('', 'mm^3')}?`,
    p: [{ q: '', a: `${U('1', 'mm^3')} = ${U('10^-3', 'cm^3')} = ${U('10^-3', 'mL')} = <b>${U('1*10^-6', 'L')}</b>, eða ${U('1', 'µL')}` }] },
  { t: 'Verkefni 31', short: '31', s: VK, th: ['rummal'], g: `Hvað eru margir ${U('', 'cm^3')} í ${U('1,200', 'm^3')}?`,
    p: [num('Svar:', 1.2e6, 'cm^3', `${U('1,200', 'm^3')} · ${F(U('10^6', 'cm^3'), U('1', 'm^3'))} = ${U('1,200*10^6', 'cm^3')}`, { shown: '1,200·10^6', tol: 0.001 })] },
  { t: 'Verkefni 32', short: '32', s: VK, th: ['rummal'], g: `Venjuleg gosdós er ${U('330,0', 'cm^3')}. Hvað eru það margir lítrar?`,
    p: [num('Svar:', 0.33, 'L', `${U('330,0', 'cm^3')} = ${U('330,0', 'mL')} = ${U('0,3300', 'L')}`, { shown: '0,3300', tol: 0.001 })] },
  { t: 'Verkefni 33', short: '33', s: VK, th: ['rummal', 'umbreyting'], g: `Sturta notar að meðaltali ${U('65,1', 'L')} af vatni. Hvað eru það mörg gallon (1 gallon = ${U('3,785', 'L')})?`,
    p: [num('Svar:', 17.2, 'gallon', `${U('65,1', 'L')} · ${F('1 gallon', U('3,785', 'L'))} = 17,20 gallon → 17,2 gallon`, { tol: 0.003 })] },
  { t: 'Verkefni 34', short: '34', s: VK, th: ['hiti'], g: 'Hver er venjulegur líkamshiti manns á kelvinkvarða?',
    tip: 'Venjulegur líkamshiti er um 37 °C.',
    p: [num('Svar:', 310.15, 'K', `37 + 273,15 = ${U('310,15', 'K')}`, { tol: 0.002 })] },
  { t: 'Verkefni 35', short: '35', s: VK, th: ['hiti'], g: `Hitastig við efnahvarf mælist ${U('659', 'K')}. Hvert er hitastigið í °C?`,
    p: [num('Svar:', 386, '°C', `659 − 273,15 = 385,85 → ${U('386', '°C')}`, { tol: 0.002 })] },
  { t: 'Verkefni 36', short: '36', s: VK, th: ['hiti'], g: `Hvort hitastigið er hærra, ${U('20', '°C')} eða ${U('298', 'K')}? Rökstyddu með útreikningum.`,
    p: [mc('', [U('20', '°C'), U('298', 'K')], 1, `${U('298', 'K')} = 298 − 273,15 = ${U('24,9', '°C')} &gt; ${U('20', '°C')}`)] },
  { t: 'Verkefni 37', short: '37', s: VK, th: ['hiti'], g: `NaCl bráðnar við ${U('800,7', '°C')}. Hvert er bræðslumarkið á kelvinkvarða?`,
    p: [num('Svar:', 1073.9, 'K', `800,7 + 273,15 = 1073,85 → ${U('1073,9', 'K')}`, { tol: 0.0001 })] },
  { t: 'Verkefni 38', short: '38', s: VK, th: ['hlutfoll'], g: `${U('25,0', 'g')} af NaCl eru leyst í vatni og lokarúmmál lausnarinnar er ${U('265', 'mL')}. Hver er massa/rúmmálsprósentan?`,
    p: [num('Svar:', 9.43, '%w/v', `${F(U('25,0', 'g'), U('265', 'mL'))} · 100 % = 9,434 % → 9,43 %w/v`, { tol: 0.003 })] },
  { t: 'Verkefni 39', short: '39', s: VK, th: ['hlutfoll'], g: `Styrkur Hg í ${U('100,0', 'g')} jarðvegssýni við sorpbrennslustöðina Glym mældist 200 ppm. Hve mörg grömm af kvikasilfri voru í sýninu?`,
    p: [num('Svar:', 0.02, 'g', `massi efnis = ${F('200', U('10^6', ''))} · ${U('100,0', 'g')} = ${U('0,0200', 'g')}`, { shown: '0,0200', tol: 0.003 })] },
  { t: 'Verkefni 40', short: '40', s: VK, th: ['hlutfoll'], g: `PCB er eiturefni sem var m.a. notað í rafspenna. ${U('2,40', 'kg')} vatnssýni við ruslahauga innihélt 20 ppb af PCB. Hver var massi efnisins í grömmum?`,
    p: [num('Svar:', 4.8e-5, 'g', `massi efnis = ${F('20', U('10^9', ''))} · ${U('2400', 'g')} = ${U('4,8*10^-5', 'g')}`, { shown: '4,8·10^-5', tol: 0.005 })] }
]
};
})());
