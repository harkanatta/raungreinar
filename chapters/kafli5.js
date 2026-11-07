/* Kafli 5 – Jónir og jónaefni. Transcribed from "4-5. kafli nýtt.pdf" (pages 23–43).
   The book has no answer key for kafli 5: all answers are written for the app and marked MINE.
   Mistakes in the book text are corrected here and listed in README.md. */
Book.add((() => {
const VK = 'Verkefni 5. kafla';
/* ion table used in the explanations */
const IONS = TB(['Flokkur', 'Jónir', 'Hleðsla'], [
  ['1. flokkur', `${CH('Li^+')}, ${CH('Na^+')}, ${CH('K^+')}, ${CH('Rb^+')}, ${CH('Cs^+')}`, 'alltaf 1+'],
  ['2. flokkur', `${CH('Be^{2+}')}, ${CH('Mg^{2+}')}, ${CH('Ca^{2+}')}, ${CH('Sr^{2+}')}, ${CH('Ba^{2+}')}`, 'alltaf 2+'],
  ['13. flokkur', `${CH('Al^{3+}')} (bór myndar ekki jónir, gallíum ${CH('Ga^+')} / ${CH('Ga^{3+}')})`, 'aðeins ál er fast: 3+'],
  ['14. flokkur', `${CH('C^{4-}')} (sjaldgæf), ${CH('Sn^{2+}')} / ${CH('Sn^{4+}')}, ${CH('Pb^{2+}')} / ${CH('Pb^{4+}')}`, 'breytileg'],
  ['15. flokkur', `${CH('N^{3-}')}, ${CH('P^{3-}')} (Sb og Bi: 3+ eða 5+)`, '3− hjá N og P'],
  ['16. flokkur', `${CH('O^{2-}')}, ${CH('S^{2-}')}`, '2−'],
  ['17. flokkur', `${CH('F^-')}, ${CH('Cl^-')}, ${CH('Br^-')}, ${CH('I^-')}`, '1−'],
  ['18. flokkur', 'eðalgös mynda ekki jónir', '–']]);

return {
n: 5,
title: 'Jónir og jónaefni',
theory: {

jonir: { t: '5.1 Jónir', h: `
<p>Þegar atóm gefur frá sér eða tekur til sín rafeindir breytist það í <b>jón</b> – hlaðna eind. Óhlaðið atóm hefur jafnmargar róteindir (+) og rafeindir (−).</p>
${DEF('Katjónir og anjónir', `<b>Katjón</b> (+): atóm sem hefur <b>misst</b> eina eða fleiri rafeindir. ${CH('Na')} → ${CH('Na^+')}, ${CH('Mg')} → ${CH('Mg^{2+}')}.<br>
<b>Anjón</b> (−): atóm sem hefur <b>tekið upp</b> eina eða fleiri rafeindir. Ein rafeind: ${CH('X^-')}, tvær: ${CH('X^{2-}')}.`)}
${ATH(`Hleðslan er rituð í háskrift aftan við táknið, <b>talan á undan formerkinu</b>: ${CH('X^{2-}')} og ${CH('Y^{2+}')}, ekki X<sup>−2</sup> eða Y<sup>+2</sup>.`, 'Ritháttur')}
<p>Rafeindaskipan eðalgasa er mjög stöðug. Atóm sækjast því eftir að öðlast rafeindaskipan <b>næsta eðalgass</b> – fullskipuð s- og p-svigrúm á ysta hvolfi (áttureglan).</p>
${DEF('Jónunarorka og rafeindasækni', `<b>Jónunarorka</b>: orkan sem þarf til að fjarlægja rafeind. Því lægri, því auðveldara að missa rafeind.<br>
<b>Rafeindasækni</b>: tilhneiging atóms til að taka við rafeind. Því hærri, því sterkari er sá eiginleiki.`)}
${EXMP('Natríum verður að natríumjón', `${CH('Na')}: 11 róteindir, 11 rafeindir, ${EK('1s2 2s2 2p6 3s1')}`,
  STEPS(`Natríum missir ystu rafeindina (3s): ${CH('Na -> Na^+ + e^-')}`,
    `${CH('Na^+')}: 11 róteindir, 10 rafeindir, ${EK('1s2 2s2 2p6')} – sama rafeindaskipan og neon. Nettóhleðsla 11+ og 10− = <b>1+</b>.`))}
${EXMP('Klór verður að klóríðjón', `${CH('Cl')}: 17 róteindir, 17 rafeindir, ${EK('[Ne]3s2 3p5')}`,
  STEPS(`Klór tekur upp eina rafeind: ${CH('Cl + e^- -> Cl^-')}`,
    `${CH('Cl^-')}: 17 róteindir, 18 rafeindir, ${EK('[Ne]3s2 3p6')} – sama og argon. Nettóhleðsla <b>1−</b>.`))}`},

flokkar: { t: 'Jónir aðalflokkanna', h: `
<p>Í aðalflokkunum ræður fjöldi gildisrafeinda hvaða jón myndast:</p>
<ul><li><b>1. flokkur</b>: ein gildisrafeind og lág jónunarorka → missa hana og mynda <b>1+</b>.</li>
<li><b>2. flokkur</b>: tvær gildisrafeindir → mynda <b>2+</b>. Magnesíum fær rafeindaskipan neons.</li>
<li><b>13. flokkur</b>: aðeins <b>ál</b> hefur fasta hleðslu, ${CH('Al^{3+}')}. Bór myndar samgild tengi en ekki jónir; gallíum getur verið ${CH('Ga^+')} eða ${CH('Ga^{3+}')}.</li>
<li><b>14. flokkur</b>: kolefni og kísill mynda yfirleitt ekki jónir (${CH('C^{4-}')} aðeins við sérstakar aðstæður). Málmarnir tin og blý mynda katjónir með breytilegri hleðslu: ${CH('Sn^{2+}')}/${CH('Sn^{4+}')}, ${CH('Pb^{2+}')}/${CH('Pb^{4+}')}.</li>
<li><b>15. flokkur</b>: nitur og fosfór taka upp þrjár rafeindir → ${CH('N^{3-}')}, ${CH('P^{3-}')}. Málmarnir Sb og Bi mynda katjónir (3+ eða 5+).</li>
<li><b>16. flokkur</b>: sex gildisrafeindir, vantar tvær → ${CH('O^{2-}')}, ${CH('S^{2-}')}.</li>
<li><b>17. flokkur</b> (halógenar): sjö gildisrafeindir, vantar eina → <b>1−</b>: ${CH('F^-')}, ${CH('Cl^-')}, ${CH('Br^-')}, ${CH('I^-')}. Astatín er undantekning.</li>
<li><b>18. flokkur</b> (eðalgös): fullskipað ysta hvolf – mynda ekki jónir.</li></ul>
${IONS}
${EXMP('Sýnidæmi 5.1', `Hvaða hleðslu taka a) K b) Sr c) Li þegar þau mynda jónir?`,
  `a) 1. flokkur: ${CH('K^+')} &nbsp; b) 2. flokkur: ${CH('Sr^{2+}')} &nbsp; c) 1. flokkur: ${CH('Li^+')}`)}
${EXMP('Sýnidæmi 5.2', `Hvaða hleðslu taka a) Al b) C?`,
  `a) Ál er í 13. flokki, missir 3 gildisrafeindir: ${CH('Al^{3+}')}. &nbsp; b) Kolefni (14. flokkur) myndar venjulega ekki jónir, en ef það gerist tekur það til sín rafeindir: ${CH('C^{4-}')}.`)}
${EXMP('Sýnidæmi 5.3', `Hvaða hleðslu taka a) P b) F c) Ne?`,
  `a) 15. flokkur: ${CH('P^{3-}')} &nbsp; b) 17. flokkur: ${CH('F^-')} &nbsp; c) Neon er eðalgas með stöðuga rafeindaskipan og myndar ekki jónir.`)}`},

hlidarmalmar: { t: 'Jónir hliðarmálma', h: `
<p>Hliðarmálmarnir (flokkar 3–12) fylla d-svigrúm og missa rafeindir ýmist úr s- eða d-svigrúmum. Því geta þeir oft myndað
<b>fleiri en eina hleðslu</b> – en þeir mynda <b>alltaf katjónir</b>.</p>
${TB(['Málmur', 'Algengar jónir'], [
  ['járn', `${CH('Fe^{2+}')}, ${CH('Fe^{3+}')}`], ['kopar', `${CH('Cu^+')}, ${CH('Cu^{2+}')}`], ['mangan', `${CH('Mn^{2+}')} … ${CH('Mn^{7+}')}`],
  ['kóbalt', `${CH('Co^{2+}')}, ${CH('Co^{3+}')}`], ['gull', `${CH('Au^+')}, ${CH('Au^{3+}')}`], ['kvikasilfur', CH('Hg^{2+}')]])}
${RULE('Föst hleðsla', `Tveir hliðarmálmar hafa alltaf sömu hleðslu: <b>sink</b> ${CH('Zn^{2+}')} og <b>silfur</b> ${CH('Ag^+')}.`)}
${EXMP('Sýnidæmi 5.4', 'Hvaða tveir hliðarmálmar taka aðeins eitt hleðslustig, og hvert er það?', `Sink, ${CH('Zn^{2+}')}, og silfur, ${CH('Ag^+')}.`)}`},

fjolatoma: { t: 'Fjölatóma jónir', h: `
${DEF('Fjölatóma jón', 'Jón úr tveimur eða fleiri atómum (oftast málmleysingjum) sem eru tengd saman með samgildum tengjum. Hún virkar sem <b>ein heild</b> og ber sameiginlega hleðslu.')}
<p>Langflestar fjölatóma jónir eru anjónir. Algengasta katjónin er ammóníum, ${CH('NH4^+')}.</p>
<p><b>Tafla 5.1 · Katjónir</b></p>
${TB(['Formúla', 'Heiti'], [[CH('NH4^+'), 'ammóníum'], [CH('H3O^+'), 'hýdróníum'], [CH('PH4^+'), 'fosfóníum']])}
<p><b>Anjónir</b></p>
${TB(['Formúla', 'Heiti', 'Formúla', 'Heiti'], [
  [CH('CH3COO^-'), 'asetat', CH('OH^-'), 'hýdroxíð'], [CH('CO3^{2-}'), 'karbónat', CH('NO3^-'), 'nítrat'],
  [CH('HCO3^-'), 'vetniskarbónat', CH('NO2^-'), 'nítrít'], [CH('Cr2O7^{2-}'), 'díkrómat', CH('MnO4^-'), 'permanganat'],
  [CH('CrO4^{2-}'), 'krómat', CH('CN^-'), 'sýaníð'], [CH('PO4^{3-}'), 'fosfat', CH('SCN^-'), 'þíósýaníð'],
  [CH('SO4^{2-}'), 'súlfat', CH('ClO2^-'), 'klórít'], [CH('C2O4^{2-}'), 'oxalat', CH('ClO3^-'), 'klórat'], ['', '', CH('ClO4^-'), 'perklórat']])}
<p><small>Taflan er líka á Formúlublaðinu.</small></p>`},

nafnakerfi: { t: '5.2 Nafnakerfi jóna', h: `
<p>Nafnakerfið er sett saman af IUPAC. Allar jónir fá nafn og orðið <b>jón</b> bætist aftan við.</p>
${RULE('Katjónir', `<ul><li>Föst hleðsla: sama nafn og frumefnið + jón. ${CH('K^+')} kalíum jón, ${CH('Ca^{2+}')} kalsíum jón, ${CH('Al^{3+}')} ál jón.</li>
<li>Breytileg hleðsla (hliðarmálmar): hleðslan með <b>rómverskri tölu</b> innan sviga. ${CH('Cu^+')} kopar(I) jón, ${CH('Cu^{2+}')} kopar(II) jón, ${CH('Fe^{3+}')} járn(III) jón.</li>
<li>Fjölatóma katjónir: oftast sérnöfn (tafla 5.1). ${CH('NH4^+')} ammóníum jón, ${CH('H3O^+')} hýdróníum jón.</li></ul>
Silfur og sink hafa fasta hleðslu, svo rómversk tala er óþörf.`)}
${RULE('Anjónir', `<ul><li>Einatóma anjónir fá endinguna <b>-íð</b>: ${CH('Cl^-')} klóríð, ${CH('Br^-')} brómíð, ${CH('I^-')} joðíð, ${CH('F^-')} flúoríð.</li>
<li>Sérstök nöfn: ${CH('O^{2-}')} oxíð, ${CH('N^{3-}')} nítríð, ${CH('H^-')} hýdríð, ${CH('S^{2-}')} súlfíð.</li>
<li>Sumar fjölatóma anjónir fá líka -íð: ${CH('OH^-')} hýdroxíð, ${CH('CN^-')} sýaníð, ${CH('HS^-')} vetnissúlfíð.</li>
<li>Súrefnisanjónir (oxy-anjónir): <b>-at</b> fyrir algengasta formið, <b>-ít</b> fyrir færri súrefnisatóm.
${CH('NO3^-')} nítrat / ${CH('NO2^-')} nítrít, ${CH('SO4^{2-}')} súlfat / ${CH('SO3^{2-}')} súlfít.</li></ul>`)}
${EXMP('Sýnidæmi 5.5', `Gefðu katjónunum nafn: a) ${CH('Cs^+')} b) ${CH('NH4^+')} c) ${CH('Cu^{2+}')} d) ${CH('Al^{3+}')}`,
  'a) sesíum jón (1. flokkur, föst hleðsla) &nbsp; b) ammóníum jón &nbsp; c) kopar(II) jón (hliðarmálmur) &nbsp; d) ál jón')}
${EXMP('Sýnidæmi 5.6', `Gefðu nafn: a) ${CH('NO3^-')} b) ${CH('HNO3')} c) ${CH('Cl^-')} d) ${CH('HCl')}`,
  'a) nítrat (tafla 5.1) &nbsp; b) með H bætist forskeytið vetnis- við: vetnisnítrat &nbsp; c) klóríð &nbsp; d) vetnisklóríð')}`},

myndun: { t: '5.3 Myndun jónaefna og formúlueiningar', h: `
${DEF('Jónaefni', 'Efni úr katjónum og anjónum sem dragast saman vegna gagnstæðra hleðslna og mynda fast efni (kristal). Einnig kölluð <b>sölt</b> eða jónísk efnasambönd. Aðdráttarkrafturinn er <b>jónatengi</b>.')}
<p>Málmar mynda katjónir og málmleysingjar anjónir. Efnasamband úr <b>málmi og málmleysingja</b> er því jónaefni.
Rafeindin flyst beint frá einu atómi til annars, svo katjón og anjón myndast samtímis:</p>
<div class="steps">${CH('Na^+(aq) + Cl^-(aq) -> NaCl(s)')}</div>
<p>Jónaefni hafa sterk tengi, hátt bræðslu- og suðumark og leiða rafstraum þegar þau eru leyst upp í vatni. Í NaCl-kristalli er hver jón umlukin sex jónum með gagnstæða hleðslu.</p>
${RULE('Formúlueining', `Jónaefni er <b>rafhlutlaust</b>: plús- og mínushleðslur jafnast út. Ef jón A hefur hleðsluna x+ og jón B hleðsluna y−:
<div class="steps">${M('y')} A<sup>${M('x')}+</sup> + ${M('x')} B<sup>${M('y')}−</sup> → A<sub>${M('y')}</sub>B<sub>${M('x')}</sub></div>
Vísir hjá A er hleðsla B og vísir hjá B er hleðsla A (styttu ef hægt er). Talan 1 er ekki rituð. <b>Katjónin er rituð fyrst.</b>
Fleiri en ein fjölatóma jón fær sviga: ${CH('Ca(NO3)2')}.`)}
${EXMP('Magnesíumklóríð', `${CH('Mg^{2+}')} og ${CH('Cl^-')}`, `Tvær ${CH('Cl^-')} jafna út eina ${CH('Mg^{2+}')}: ${CH('Mg^{2+} + 2Cl^- -> MgCl2')}`)}
${EXMP('Sýnidæmi 5.7', `Kalsíum (${CH('Ca^{2+}')}) og nítrat (${CH('NO3^-')})`, `${CH('Ca^{2+} + 2NO3^- -> Ca(NO3)2')}`)}
${EXMP('Sýnidæmi 5.8', `Ammóníum (${CH('NH4^+')}) og fosfat (${CH('PO4^{3-}')})`, `Þrjár katjónir á móti einni anjón: ${CH('3NH4^+ + PO4^{3-} -> (NH4)3PO4')}`)}`},

nofn: { t: '5.4 Nöfn jónískra efnasambanda', h: `
${RULE('Nafn jónaefnis', 'Fyrst nafn katjónarinnar, síðan nafn anjónarinnar, með bili á milli – orðinu <b>jón</b> er sleppt. Ef hleðsla katjónarinnar er breytileg er hún rituð með rómverskri tölu.')}
<p>${CH('NaCl')}: natríum klóríð. ${CH('CuBr2')}: kopar(II) brómíð, því ${CH('Cu^{2+} + 2Br^- -> CuBr2')}.
${CH('FeCl2')} er járn(II) klóríð en ${CH('FeCl3')} járn(III) klóríð – án rómversku tölunnar héti hvort tveggja járn klóríð.</p>
${EXMP('Sýnidæmi 5.9', `Nefndu a) ${CH('Cu(ClO3)2')} b) ${CH('CuClO3')}`,
  STEPS(`a) Tvær klóratjónir (${CH('ClO3^-')}) = 2−, svo koparinn er 2+: <b>kopar(II) klórat</b>`, `b) Ein klóratjón = 1−, svo koparinn er 1+: <b>kopar(I) klórat</b>`))}
${EXMP('Sýnidæmi 5.10', `Nefndu ${CH('K3PO4')}`, `K er í 1. flokki (1+) og ${CH('PO4^{3-}')} er fosfat: <b>kalíum fosfat</b>`)}
${EXMP('Sýnidæmi 5.11', 'Ritaðu formúlur: a) ammóníum klóríð b) kopar(III) nítrat',
  `a) ${CH('NH4^+')} og ${CH('Cl^-')}: <b>${CH('NH4Cl')}</b> &nbsp; b) ${CH('Cu^{3+}')} þarf þrjár ${CH('NO3^-')}: <b>${CH('Cu(NO3)3')}</b>`)}
${EXMP('Sýnidæmi 5.12', 'Ritaðu formúlur: a) kalíum joðíð b) blý(II) súlfíð c) sesíum flúoríð',
  `a) ${CH('K^+')} og ${CH('I^-')}: <b>${CH('KI')}</b> &nbsp; b) ${CH('Pb^{2+}')} og ${CH('S^{2-}')}: <b>${CH('PbS')}</b> &nbsp; c) ${CH('Cs^+')} og ${CH('F^-')}: <b>${CH('CsF')}</b>
  <br><small>(Í bókinni stendur KF í c-lið, en það er kalíum flúoríð.)</small>`)}`}
},

exercises: [
  { t: 'Verkefni 1', short: '1', s: VK, th: ['jonir'], g: 'Hvaða hleðslu fær atóm sem <b>tekur upp</b> eina rafeind?',
    p: [mc('', ['1+', '1−', '2+', '2−'], 1, 'Rafeindin er neikvæð, svo atómið verður einhlaðin anjón.' + MINE)] },
  { t: 'Verkefni 2', short: '2', s: VK, th: ['jonir'], g: 'Hvaða hleðslu fær atóm sem <b>missir</b> tvær rafeindir?',
    p: [mc('', ['1+', '2+', '1−', '2−'], 1, 'Það missir tvær neikvæðar hleðslur og verður tvíhlaðin katjón.' + MINE)] },
  { t: 'Verkefni 3', short: '3', s: VK, th: ['flokkar'], g: 'Hvaða hleðslu taka jónir frumefnanna í <b>16. flokki</b> lotukerfisins?',
    p: [mc('', ['2+', '6+', '2−', '6−'], 2, `Þau hafa sex gildisrafeindir og taka upp tvær til að fá rafeindaskipan eðalgass, t.d. ${CH('O^{2-}')} og ${CH('S^{2-}')}.` + MINE)] },
  { t: 'Verkefni 4', short: '4', s: VK, th: ['flokkar'], g: 'Hvaða hleðslu taka jónir frumefnanna í <b>1. flokki</b> lotukerfisins?',
    p: [mc('', ['1+', '1−', '2+', 'mynda ekki jónir'], 0, `Ein gildisrafeind sem auðvelt er að missa, t.d. ${CH('Na^+')} og ${CH('K^+')}.` + MINE)] },
  { t: 'Verkefni 5', short: '5', s: VK, th: ['flokkar'], g: 'Hvaða hleðslu taka jónir frumefnanna í <b>14. flokki</b> lotukerfisins?',
    p: [{ q: '', a: `Hún er <b>breytileg</b>. Kolefni og kísill mynda yfirleitt ekki jónir (kolefni getur við sérstakar aðstæður myndað ${CH('C^{4-}')}).
      Málmarnir mynda katjónir: tin ${CH('Sn^{2+}')} eða ${CH('Sn^{4+}')} og blý ${CH('Pb^{2+}')} eða ${CH('Pb^{4+}')}.` + MINE }] },
  { t: 'Verkefni 6', short: '6', s: VK, th: ['hlidarmalmar'], g: 'Hvaða hliðarmálmar mynda venjulega aðeins eina gerð jóna og hver er hleðsla þeirra?',
    p: [{ q: '', a: `<b>Sink</b>, ${CH('Zn^{2+}')}, og <b>silfur</b>, ${CH('Ag^+')}.` + MINE }] },
  { t: 'Verkefni 7', short: '7', s: VK, th: ['flokkar'], g: 'Halógenar mynda anjónir. Hver er hleðsla anjónanna og hvers vegna?',
    p: [{ q: '', a: `<b>1−</b>. Halógenar hafa sjö gildisrafeindir og mikla rafeindasækni. Þá vantar aðeins eina rafeind til að fá rafeindaskipan næsta eðalgass (áttureglan), t.d. ${CH('Cl^-')}.` + MINE }] },
  { t: 'Verkefni 8', short: '8', s: VK, th: ['nafnakerfi'], g: 'Hver er helsti munurinn á því þegar við gefum <b>anjónum</b> og <b>katjónum</b> nafn?',
    p: [{ q: '', a: `Katjón heldur nafni frumefnisins (kalíum jón; hjá hliðarmálmum með rómverskri tölu fyrir hleðsluna, járn(III) jón).
      Nafn anjónar <b>breytist</b>: hún fær endinguna <b>-íð</b> (klóríð, oxíð) eða, ef hún inniheldur súrefni, <b>-at</b> / <b>-ít</b> (súlfat, nítrít).` + MINE }] },
  { t: 'Verkefni 9', short: '9', s: VK, th: ['fjolatoma'], g: 'Hvað heita eftirtaldar jónir og hver er hleðsla þeirra?',
    p: P([
      { q: CH('NH4^+'), a: '<b>ammóníum</b>, 1+' + MINE }, { q: CH('MnO4^-'), a: '<b>permanganat</b>, 1−' + MINE },
      { q: CH('NO3^-'), a: '<b>nítrat</b>, 1−' + MINE }, { q: CH('PO4^{3-}'), a: '<b>fosfat</b>, 3−' + MINE }]) },
  { t: 'Verkefni 10', short: '10', s: VK, th: ['nafnakerfi'], g: 'Hvað heita eftirfarandi katjónir?',
    p: P([
      [CH('Na^+'), 'natríum jón'], [CH('Mg^{2+}'), 'magnesíum jón'], [CH('Ba^{2+}'), 'baríum jón'], [CH('Cu^+'), 'kopar(I) jón'],
      [CH('Cs^+'), 'sesíum jón'], [CH('Fe^{3+}'), 'járn(III) jón'], [CH('Al^{3+}'), 'ál jón'], [CH('Fe^{2+}'), 'járn(II) jón']
    ].map(([q, a]) => ({ q, a: `<b>${a}</b>` + MINE }))) },
  { t: 'Verkefni 11', short: '11', s: VK, th: ['nafnakerfi'], g: 'Hvað heita eftirfarandi anjónir?',
    p: P([
      [CH('F^-'), 'flúoríð jón'], [CH('S^{2-}'), 'súlfíð jón'], [CH('Br^-'), 'brómíð jón'], [CH('N^{3-}'), 'nítríð jón'],
      [CH('OH^-'), 'hýdroxíð jón'], [CH('O^{2-}'), 'oxíð jón'], [CH('NO3^-'), 'nítrat jón'], [CH('CO3^{2-}'), 'karbónat jón']
    ].map(([q, a]) => ({ q, a: `<b>${a}</b>` + MINE }))) },
  { t: 'Verkefni 12', short: '12', s: VK, th: ['myndun', 'fjolatoma'], g: 'Hver er hleðsla jónanna sem mynda þessi sölt? Ritaðu efnajöfnuna fyrir myndun saltsins úr jónunum.',
    p: P([
      { q: CH('NaCl'), a: `${CH('Na^+')} og ${CH('Cl^-')}: <b>${CH('Na^+ + Cl^- -> NaCl')}</b>` + MINE },
      { q: CH('(NH4)3PO4'), a: `${CH('NH4^+')} og ${CH('PO4^{3-}')}: <b>${CH('3NH4^+ + PO4^{3-} -> (NH4)3PO4')}</b>` + MINE },
      { q: CH('CaBr2'), a: `${CH('Ca^{2+}')} og ${CH('Br^-')}: <b>${CH('Ca^{2+} + 2Br^- -> CaBr2')}</b>` + MINE },
      { q: CH('Li2S'), a: `${CH('Li^+')} og ${CH('S^{2-}')}: <b>${CH('2Li^+ + S^{2-} -> Li2S')}</b>` + MINE }]) },
  { t: 'Verkefni 13', short: '13', s: VK, th: ['nofn'], g: 'Hvað heita eftirfarandi jónaefni?',
    p: P([
      ['MgCl2', 'magnesíum klóríð'], ['Ca3(PO4)2', 'kalsíum fosfat'], ['CaO', 'kalsíum oxíð'], ['Al2O3', 'ál oxíð'],
      ['AgCl', 'silfur klóríð'], ['NaBr', 'natríum brómíð'], ['LiF', 'liþíum flúoríð'], ['MgS', 'magnesíum súlfíð']
    ].map(([f, a]) => ({ q: CH(f), a: `<b>${a}</b>` + MINE }))) },
  { t: 'Verkefni 14', short: '14', s: VK, th: ['myndun'], g: 'Settu fram formúlueiningar saltanna.',
    p: P([
      { q: `${CH('Ca^{2+}')} og ${CH('O^{2-}')}`, a: `<b>${CH('CaO')}</b> – hleðslurnar 2+ og 2− jafnast út einn á móti einum.` + MINE },
      { q: `${CH('NO3^-')} og ${CH('Sr^{2+}')}`, a: `<b>${CH('Sr(NO3)2')}</b> – katjónin fyrst, tvær nítratjónir í sviga.` + MINE },
      { q: `${CH('NH4^+')} og ${CH('Cl^-')}`, a: `<b>${CH('NH4Cl')}</b>` + MINE },
      { q: `${CH('F^-')} og ${CH('Al^{3+}')}`, a: `<b>${CH('AlF3')}</b> – þrjár flúoríðjónir á móti einni áljón.` + MINE }]) },
  { t: 'Verkefni 15', short: '15', s: VK, th: ['nofn', 'myndun'], g: 'Ritaðu formúlueiningar eftirfarandi jónaefna.',
    p: P([
      { q: 'kalsíum hýdroxíð', a: `<b>${CH('Ca(OH)2')}</b> – ${CH('Ca^{2+}')} og tvær ${CH('OH^-')}` + MINE },
      { q: 'natríum klóríð', a: `<b>${CH('NaCl')}</b>` + MINE },
      { q: 'sink klóríð', a: `<b>${CH('ZnCl2')}</b> – ${CH('Zn^{2+}')} og tvær ${CH('Cl^-')}` + MINE },
      { q: 'silfur nítrat', a: `<b>${CH('AgNO3')}</b> – ${CH('Ag^+')} og ${CH('NO3^-')}` + MINE },
      { q: 'liþíum flúoríð', a: `<b>${CH('LiF')}</b>` + MINE }]) }
]
};
})());
