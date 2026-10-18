/* Kafli 3 – Aflfræði: Kraftar. Transcribed from "03 Aflfræði - Kraftar.pdf" (13 pages, answers on p. 13).
   Figures are redrawn as SVG (vecfig) so they follow the colour theme. Worked solutions for Æfing
   are written for the app; the final answers are the book's. */
Book.add((() => {
const Fh = MS('F', 'heild'), Fg = MS('F', 'g'), Fp = MS('F', '⊥'), T = M('T');
const bodyFig = (arrows, alt) => vecfig({ cols: 10, rows: 10, box: [3, 3.5, 4, 3], dot: [5, 5], arrows, alt, max: '15rem' });

return {
n: 3,
title: 'Aflfræði – Kraftar',
theory: {

kraftar: { t: '3.1–3.2 Kraftar', h: `
<p>Þegar togað er í hlut eða ýtt á hann segjum við að <b>kraftur verki á hlutinn</b>. Margir kraftar geta verkað á sama hlutinn í einu,
og hreyfingin fer eftir <b>samanlögðum áhrifum</b> allra kraftanna.</p>
${DEF('Kraftur', `Kraftar hafa bæði <b>stærð og stefnu</b>. Eining krafts er <b>newton</b>, táknuð með ${U('', 'N')}.`)}
${ATH(`Kraftur, hraði, hröðun og færsla hafa öll stærð og stefnu. Þær kallast <b>vigurstærðir</b>. Vigur er ör: stefna örvarinnar
er stefna kraftsins og lengdin segir hve stór hann er. Vigra táknum við með striki yfir, t.d. ${VL('F')}.`, 'Vigurstærðir')}
<p>Krafta táknum við oftast með ${M('F')} og merkjum þá frekar, t.d. ${Fh}, ${Fg} eða ${MS('F', 'tog')}. Stundum notum við ${T} fyrir togkraft.</p>
${RULE('Heildarkraftur', `Heildarkrafturinn á hlut er summa allra kraftanna sem á hann verka:
<div class="steps"><b>${MS('F', 'heild')} = ${MS('F', '1')} + ${MS('F', '2')} + … + ${MS('F', 'n')}</b></div>`)}
<p>Vigra leggjum við saman með því að teikna þá <b>hvern á eftir öðrum</b>: hver byrjar þar sem sá á undan endar.
Summan er örin frá upphafi þess fyrsta að enda þess síðasta.</p>
${vecfig({ cols: 12, rows: 8, alt: 'Þrír kraftar lagðir saman, hver á eftir öðrum. Heildarkrafturinn er örin frá upphafi að enda.', max: '20rem',
  arrows: [
    { from: [1, 6], to: [5, 4], l: 'F', s: '1', at: [2.6, 4.4] },
    { from: [5, 4], to: [7, 1], l: 'F', s: '2', at: [5.2, 2.2] },
    { from: [7, 1], to: [11, 2], l: 'F', s: '3', at: [9, 1] },
    { from: [1, 6], to: [11, 2], l: 'F', s: 'heild', ans: true, at: [7.8, 5.2] }] })}
<p class="mine">Mynd 3.2: Heildarkrafturinn (strikalína) er summa allra kraftanna.</p>
<p>Í hreyfingu eftir beinni línu getum við oft sleppt vigurtákninu og látið <b>formerkið</b> segja í hvora áttina krafturinn verkar.</p>`},

newton1: { t: '1. lögmál Newton – Tregðulögmálið', h: `
${RULE('1. lögmál Newton | Tregðulögmálið', `Hlutur heldur áfram að vera í kyrrstöðu eða að hreyfast með jöfnum hraða eftir beinni línu
<b>þá og því aðeins að</b> heildarkrafturinn á hann sé enginn, þ.e. ${Fh} = ${U('0', 'N')}.`)}
<p>Hlutur er í <b>jafnvægi</b> ef heildarkrafturinn á hann er ${U('0', 'N')}. Það getur verið á tvo vegu:</p>
<ul><li><b>Stöðujafnvægi</b> – hluturinn er kyrrstæður.</li>
<li><b>Hreyfijafnvægi</b> – hluturinn hreyfist með jöfnum hraða eftir beinni línu.</li></ul>`},

newton2: { t: '2. lögmál Newton – heildarkraftur og hröðun', h: `
<p>Erfiðara er að hafa áhrif á hreyfingu hluta með mikinn massa, og stærri kraftur veldur meiri hröðun.</p>
${RULE('2. lögmál Newton', `Ef heildarkrafturinn ${Fh} verkar á hlut með massa ${M('m')} fær hann hröðunina ${M('a')}:
<div class="steps"><b>${Fh} = ${M('ma')}</b></div>Heildarkrafturinn og hröðunin stefna í <b>sömu átt</b>.`)}
${DEF('Samband eininga', `${U('1', 'N')} = ${U('1', 'kg*m/s^2')}`)}
${EXMP('Sýnidæmi 3.1 · Stærð heildarkrafts', `Steinn með massa ${U('10,0', 'kg')} fellur með hröðuninni ${U('9,80', 'm/s^2')}. Hve stór er heildarkrafturinn á hann?`,
  STEPS(`Ásinn niður, þá er hröðunin jákvæð.`, `${Fh} = ${M('ma')} = ${U('10,0', 'kg')} · ${U('9,80', 'm/s^2')} = <b>${U('98,0', 'N')}</b> (niður)`))}
${EXMP('Sýnidæmi 3.2 · Hröðun fundin með heildarkrafti', `Hlutur með massa ${U('5,0', 'kg')} fer á ${U('15,6', 'm/s')} til hægri en verður fyrir heildarkraftinum ${U('7,2', 'N')} í gagnstæða stefnu. Hver er hröðunin?`,
  STEPS(`Ásinn til hægri. Krafturinn stefnir til vinstri: ${Fh} = ${U('-7,2', 'N')}.`,
  `${M('a = ')}${F(Fh, M('m'))} = ${F(U('-7,2', 'N'), U('5,0', 'kg'))} = ${U('-1,4', 'm/s^2')}`,
  `Hröðunin er <b>${U('1,4', 'm/s^2')} til vinstri</b>.`))}
${ATH(`Tvær leiðir eru til að finna heildarkraftinn: <b>summa allra kraftanna</b>, eða <b>2. lögmál Newton</b> ${Fh} = ${M('ma')}. Oft þarf báðar.`, 'Heildarkraftur')}`},

newton3: { t: '3. lögmál Newton – Gagnkraftalögmálið', h: `
${RULE('3. lögmál Newton | Gagnkraftalögmálið', `Verki hlutur A á hlut B með krafti ${VL('F')}, þá verkar B á A með <b>jafn stórum krafti í gagnstæða stefnu</b> (${M('-')}${VL('F')}).`)}
<p>Þegar við spyrnum í sundlaugarbakka ýtir bakkinn jafn fast á okkur á móti. Jörðin togar í okkur með þyngdarkraftinum – og við togum jafn fast í jörðina, bara í gagnstæða átt.</p>`},

thyngd: { t: '3.4 Þyngdarkrafturinn og togkraftur', h: `
<p>Galileo Galilei sýndi í lok 16. aldar að allir hlutir í frjálsu falli nálægt jörðinni falla með <b>sömu hröðun</b> ef loftmótstaða er lítil.
Hana táknum við með ${M('g')} = ${U('9,80', 'm/s^2')}. Árið 1687 skýrði Isaac Newton hvaða kraftur veldur henni: <b>þyngdarkrafturinn</b> (þyngd).</p>
${RULE('Þyngdarkraftur', `Stærð þyngdarkraftsins á hlut með massa ${M('m')} er <div class="steps"><b>${Fg} = ${M('mg')}</b></div>og hann stefnir <b>beint niður</b>.`)}
${ATH('Þyngdarkrafturinn verkar á alla hluti nálægt jörðinni, hvort sem þeir falla eða ekki. Oft vinna aðrir kraftar á móti – band togar upp, borð ýtir upp.')}
${EXMP('Sýnidæmi 3.3 · Þyngdarkraftur', `Hve stór er þyngdarkrafturinn á ${U('75', 'kg')} manneskju við yfirborð jarðar?`,
  `${Fg} = ${M('mg')} = ${U('75', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('735', 'N')} ≈ <b>${U('7,4*10^2', 'N')}</b>`)}
${DEF('Togkraftur í böndum', 'Þegar togað er í band strekkist jafnt á því öllu – togkrafturinn er alls staðar jafn stór. Við skoðum oft hve fast bandið togar í einhvern hlut.')}
${bodyFig([{ from: [5, 3.5], to: [5, 0.6], l: 'T', at: [5.8, 1.2] }, { from: [5, 6.5], to: [5, 9.4], l: 'F', s: 'g', at: [5.9, 9.2] }], 'Ofurhugi hangir í bandi: togkraftur upp, þyngdarkraftur niður')}
${EXMP('Sýnidæmi 3.4 · Togkraftur í bandi', `Ofurhugi, ${U('80,0', 'kg')}, hangir í bandi neðan í loftbelg. Reiknum togkraftinn þegar hann
<br>a) er kyrrstæður, b) fer með jafna hraðanum ${U('3,0', 'm/s')} niður, c) fær jafna hröðun ${U('0,90', 'm/s^2')} niður.`,
  STEPS(`Jákvæð stefna niður. ${Fh} = ${Fg} + ${T}.`,
  `a) ${Fh} = ${U('0', 'N')} (kyrr): ${T} = ${Fh} − ${Fg} = 0 − ${U('80,0', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('-784', 'N')} → <b>${U('7,8*10^2', 'N')} upp</b>`,
  `b) Jafn hraði: líka ${Fh} = ${U('0', 'N')} (hreyfijafnvægi) – <b>sama svar</b>.`,
  `c) ${Fh} = ${M('ma')} = ${U('80,0', 'kg')} · ${U('0,90', 'm/s^2')} = ${U('72', 'N')}`,
  `${T} = ${U('72', 'N')} − ${U('784', 'N')} = ${U('-712', 'N')} → <b>${U('7,1*10^2', 'N')} upp</b>`))}`},

thverkraftur: { t: '3.5 Þverkraftur og vigtir', h: `
<p>Þegar hlutur þrýstist að öðrum verka <b>snertikraftar</b> á milli þeirra. Sá hluti sem er hornréttur á snertiflötinn kallast
<b>þverkraftur</b>, ${Fp}.</p>
<p>Hlutur sem situr kyrr á borði: heildarkrafturinn er ${U('0', 'N')}. Hluturinn ýtir á borðið og samkvæmt 3. lögmáli Newton ýtir borðið
jafn fast á móti – með þverkraftinum, sem er jafn stór og þyngdarkrafturinn en í gagnstæða stefnu.</p>
${bodyFig([{ from: [5, 3.5], to: [5, 0.6], l: 'F', s: '⊥', at: [5.9, 1.2] }, { from: [5, 6.5], to: [5, 9.4], l: 'F', s: 'g', at: [5.9, 9.2] }], 'Kassi á borði: þverkraftur upp, þyngdarkraftur niður, jafn stórir')}
${EXMP('Sýnidæmi 3.5 · Lóð hvílir á vigt', `Lóð með massa ${U('5,0', 'kg')} situr á vigt. Hve stór er þverkrafturinn á lóðið?`,
  STEPS(`Heildarkrafturinn er ${U('0', 'N')}, svo ${Fp} og ${Fg} eru jafn stórir í gagnstæðar áttir.`,
  `${Fp} = ${M('mg')} = ${U('5,0', 'kg')} · ${U('9,80', 'm/s^2')} = <b>${U('49', 'N')}</b> beint upp`))}
${RULE('Vigt sýnir massa út frá þverkrafti', `Vigt mælir þverkraftinn sem hún beitir og reiknar <div class="steps"><b>${MS('m', 'vigt')} = ${F(Fp, M('g'))}</b></div>
Ef ${Fp} og ${Fg} eru jafn stórir sýnir vigtin réttan massa. Annars ekki: ${MS('m', 'vigt')} ≠ ${M('m')}.`)}
${EXMP('Sýnidæmi 3.6 · Lóð hvílir ekki af fullum þunga', `Lóð, ${U('5,0', 'kg')}, situr á vigt en Tryggvi togar í það með ${U('7,0', 'N')} beint upp. Hve stór er þverkrafturinn? Hvað sýnir vigtin?`,
  STEPS(`Ásinn upp. ${Fh} = ${T} + ${Fg} + ${Fp} = ${U('0', 'N')}.`,
  `${T} = ${U('7,0', 'N')}, &nbsp; ${Fg} = ${U('-49', 'N')}`,
  `${Fp} = 0 − ${U('7,0', 'N')} − (${U('-49', 'N')}) = <b>${U('42', 'N')}</b> upp`,
  `Vigtin sýnir ${F(U('42', 'N'), U('9,80', 'm/s^2'))} = <b>${U('4,3', 'kg')}</b> en ekki ${U('5,0', 'kg')}.`))}
${EXMP('Sýnidæmi 3.7 · Lóð á vigt í lyftu', `Lóð, ${U('5,0', 'kg')}, er á vigt í lyftu sem fær hröðunina ${U('2,4', 'm/s^2')} upp. Hve stór er þverkrafturinn? Hvað sýnir vigtin?`,
  STEPS(`Ásinn upp. ${Fh} = ${M('ma')} = ${U('5,0', 'kg')} · ${U('2,4', 'm/s^2')} = ${U('12', 'N')}`,
  `${Fg} = ${U('-49', 'N')}, &nbsp; ${Fp} = ${Fh} − ${Fg} = ${U('12', 'N')} − (${U('-49', 'N')}) = <b>${U('61', 'N')}</b> upp`,
  `Vigtin sýnir ${F(U('61', 'N'), U('9,80', 'm/s^2'))} = <b>${U('6,2', 'kg')}</b>`))}`}
},

exercises: [
  /* ---------- 3.6 Spurningar (the book has no answers to these) ---------- */
  SP(1, { s: '3.6 Spurningar', th: ['kraftar'],
    g: `Á myndinni verka þrír kraftar á hlut. Hvert stefnir <b>heildarkrafturinn</b>, teiknaður frá punktinum? Teldu reitina.
    ${vecfig({ cols: 16, rows: 14, box: [6, 5, 4, 4], dot: [8, 7], alt: 'Þrír kraftar: T tvo reiti til hægri og tvo upp, F ýta þrjá reiti til hægri, F g fjóra reiti niður',
      arrows: [{ from: [8, 5], to: [10, 3], l: 'T', at: [10.8, 3] }, { from: [6, 6], to: [9, 6], l: 'F', s: 'ýta', at: [10.6, 5.8] }, { from: [8, 9], to: [8, 13], l: 'F', s: 'g', at: [9, 13.4] }] })}`,
    tip: 'Leggðu saman reitina: hve marga til hægri/vinstri og hve marga upp/niður fer hver kraftur?',
    p: [{ q: '', a: `${STEPS(`${T}: 2 til hægri, 2 upp`, `${MS('F', 'ýta')}: 3 til hægri`, `${Fg}: 4 niður`,
      `Samtals: <b>5 reiti til hægri og 2 reiti niður</b>`)}
      ${vecfig({ cols: 16, rows: 14, box: [6, 5, 4, 4], dot: [8, 7], alt: 'Svar: heildarkrafturinn fer 5 reiti til hægri og 2 niður frá punktinum',
        arrows: [{ from: [8, 5], to: [10, 3], l: 'T', at: [10.8, 3] }, { from: [6, 6], to: [9, 6], l: 'F', s: 'ýta', at: [10.6, 5.8] }, { from: [8, 9], to: [8, 13], l: 'F', s: 'g', at: [9, 13.4] },
          { from: [8, 7], to: [13, 9], l: 'F', s: 'heild', ans: true, at: [13.2, 10.4] }] })}` + MINE }] }),
  SP(2, { s: '3.6 Spurningar', th: ['kraftar'],
    g: `Á myndinni eru tveir af þremur kröftum sem verka á hlut, ásamt heildarkraftinum. Hvert stefnir krafturinn sem vantar, ${VL('F', '2')}?
    ${vecfig({ cols: 16, rows: 14, box: [6, 5, 4, 4], alt: 'F heild 4 reiti til vinstri og 5 upp, F 1 2 til hægri og 2 upp, F 3 3 til vinstri og 1 upp',
      arrows: [{ from: [8, 7], to: [4, 2], l: 'F', s: 'heild', at: [4, 1.5] }, { from: [10, 7], to: [12, 5], l: 'F', s: '1', at: [12.8, 4.6] }, { from: [6, 7], to: [3, 6], l: 'F', s: '3', at: [2, 6.3] }] })}`,
    tip: `${VL('F', '2')} = ${VL('F', 'heild')} − ${VL('F', '1')} − ${VL('F', '3')}. Teldu reitina fyrir hvern kraft.`,
    p: [{ q: '', a: `${STEPS('Teljum reiti: til hægri og upp er plús, til vinstri og niður er mínus.', `${Fh}: (−4, +5)`, `${MS('F', '1')}: (+2, +2)`, `${MS('F', '3')}: (−3, +1)`,
      `${MS('F', '2')} = ${Fh} − ${MS('F', '1')} − ${MS('F', '3')}: (−4 − 2 + 3, 5 − 2 − 1) = (−3, +2)`, `<b>${MS('F', '2')} fer 3 reiti til vinstri og 2 reiti upp</b>`)}
      ${vecfig({ cols: 16, rows: 14, box: [6, 5, 4, 4], alt: 'Svar: F 2 fer 3 reiti til vinstri og 2 upp',
        arrows: [{ from: [8, 7], to: [4, 2], l: 'F', s: 'heild', at: [4, 1.5] }, { from: [10, 7], to: [12, 5], l: 'F', s: '1', at: [12.8, 4.6] }, { from: [6, 7], to: [3, 6], l: 'F', s: '3', at: [2, 6.3] },
          { from: [8, 7], to: [5, 5], l: 'F', s: '2', ans: true, at: [5.6, 4.4] }] })}` + MINE }] }),
  SP(3, { s: '3.6 Spurningar', th: ['newton1'],
    g: `Ingvar togar kassa upp með bandi með ${U('100', 'N')} krafti. Þyngdarkrafturinn á kassann er líka ${U('100', 'N')}. Getur kassinn verið á hreyfingu, eða er hann örugglega kyrr?`,
    p: [mc('', ['Hann er örugglega kyrr', 'Hann getur verið á hreyfingu'], 1,
      `Heildarkrafturinn er ${U('0', 'N')}, svo samkvæmt 1. lögmáli Newton er kassinn annaðhvort kyrr <b>eða hreyfist með jöfnum hraða</b> (hreyfijafnvægi).` + MINE)] }),
  SP(4, { s: '3.6 Spurningar', th: ['newton2', 'kraftar'],
    g: `Þrír kraftar verka á hlut: ${VL('F', '1')} upp, ${VL('F', '2')} (stuttur) til vinstri og ${VL('F', '3')} niður. ${VL('F', '1')} og ${VL('F', '3')} eru jafn langir.
    ${vecfig({ cols: 10, rows: 10, box: [4, 4, 2, 2], alt: 'F 1 upp, F 2 stuttur til vinstri, F 3 niður, jafn langur F 1', max: '13rem',
      arrows: [{ from: [5, 4], to: [5, 0.6], l: 'F', s: '1', at: [6, 1.2] }, { from: [4, 5], to: [2.2, 5], l: 'F', s: '2', at: [1.2, 4.4] }, { from: [5, 6], to: [5, 9.4], l: 'F', s: '3', at: [6, 9.2] }] })}
    Hver örin lýsir <b>hröðuninni</b> best?`,
    p: [mc('', [AR(90, 'upp') + ' upp', AR(180, 'vinstri') + ' til vinstri', AR(270, 'niður') + ' niður', AR(210, 'niður til vinstri') + ' niður til vinstri', AR(150, 'upp til vinstri') + ' upp til vinstri'], 1,
      `${VL('F', '1')} og ${VL('F', '3')} eyða hvor öðrum. Eftir stendur ${VL('F', '2')} til vinstri, og hröðunin stefnir eins og heildarkrafturinn.` + MINE)] }),
  SP(5, { s: '3.6 Spurningar', th: ['thverkraftur', 'newton2'],
    g: `${U('10', 'kg')} lóð er á vigt í lyftu sem fær <b>hröðun niður á við</b>. Hvað má fullyrða um …`,
    p: P([
      mc('stefnu heildarkraftsins á lóðið?', ['Upp', 'Niður', 'Heildarkrafturinn er núll'], 1, 'Heildarkrafturinn stefnir eins og hröðunin.' + MINE),
      mc('stærðir þyngdarkraftsins og þverkraftsins?', [`${Fg} er stærri en ${Fp}`, `${Fp} er stærri en ${Fg}`, 'Þeir eru jafn stórir'], 0, 'Heildarkrafturinn stefnir niður, svo krafturinn niður (þyngdin) hlýtur að vera stærri.' + MINE),
      mc('massa lóðsins?', ['Hann minnkar', `Hann er áfram ${U('10', 'kg')}`, 'Hann eykst'], 1, 'Massinn breytist ekki þótt lyftan hreyfist.' + MINE),
      mc('massann sem vigtin sýnir?', [`Minna en ${U('10', 'kg')}`, `Nákvæmlega ${U('10', 'kg')}`, `Meira en ${U('10', 'kg')}`], 0, `Vigtin sýnir ${F(Fp, M('g'))} og ${Fp} er minni en ${Fg}.` + MINE)
    ]) }),
  SP(6, { s: '3.6 Spurningar', th: ['newton3'],
    g: `Hokkíleikmaður sem er ${U('120', 'kg')} tæklar annan sem er aðeins ${U('82', 'kg')}. Sá þungi verkar á þann léttari með ${U('4500', 'N')} krafti. Hvað má fullyrða um kraftinn sem verkar á þann <b>þyngri</b>?`,
    p: [mc('', [`Hann er meiri en ${U('4500', 'N')}`, `Hann er minni en ${U('4500', 'N')}`, `Hann er ${U('4500', 'N')}`], 2,
      '3. lögmál Newton: kraftarnir eru jafn stórir en í gagnstæða stefnu – massinn skiptir ekki máli.' + MINE)] }),

  /* ---------- 3.7 Æfing (answers from 3.8 Svör) ---------- */
  AE(1, { s: '3.7 Æfing', th: ['newton2'],
    g: `Valdís ýtir á kerru þannig að heildarkrafturinn á hana er ${U('17,4', 'N')}. Kerran er ${U('7,3', 'kg')}. Hver verður hröðunin?`,
    p: [num('Hröðunin:', 2.4, 'm/s^2', STEPS(`${M('a = ')}${F(Fh, M('m'))} = ${F(U('17,4', 'N'), U('7,3', 'kg'))} = ${U('2,38', 'm/s^2')} ≈ ${U('2,4', 'm/s^2')}`, 'í sömu stefnu og heildarkrafturinn.'))] }),
  AE(2, { s: '3.7 Æfing', th: ['newton2', 'kraftar'],
    g: `Pétur togar í kassa á gólfi með ${U('302', 'N')} til hægri en Þórhildur með ${U('352', 'N')} til vinstri. Kassinn er ${U('45,0', 'kg')}. Hver verður hröðunin og í hvaða átt? (Enginn núningur.)`,
    p: P([
      num('Stærð hröðunarinnar:', 1.11, 'm/s^2', STEPS(`Ás til hægri: ${Fh} = ${U('302', 'N')} − ${U('352', 'N')} = ${U('-50', 'N')}`, `${M('a = ')}${F(U('-50', 'N'), U('45,0', 'kg'))} = ${U('-1,11', 'm/s^2')}`), { sign: false }),
      mc('Í hvaða átt?', ['Til hægri', 'Til vinstri'], 1, 'Þórhildur togar fastar.')
    ]) }),
  AE(3, { s: '3.7 Æfing', th: ['newton2', '2:jofnhrodun'],
    g: `Ingvar, ${U('96,0', 'kg')}, hleypur af stað úr kyrrstöðu. Heildarkrafturinn á hann er ${U('112', 'N')} lárétt í ${U('6,30', 's')}. Á hvaða hraða er hann þá?`,
    tip: `Finndu hröðunina með ${Fh} = ${M('ma')}, svo hraðann með ${M('v = at + v_0')}.`,
    p: [num('Hraðinn:', 7.35, 'm/s', STEPS(`${M('a = ')}${F(U('112', 'N'), U('96,0', 'kg'))} = ${U('1,167', 'm/s^2')}`, `${M('v')} = ${U('1,167', 'm/s^2')} · ${U('6,30', 's')} + 0 = ${U('7,35', 'm/s')}`, 'í sömu átt og hröðunin.'))] }),
  AE(4, { s: '3.7 Æfing', th: ['newton1', 'thyngd'],
    g: `Jói og Raggi hífa píanó upp á 2. hæð. Hvor togar með ${U('762', 'N')} beint upp og píanóið fer upp með <b>jöfnum hraða</b>. Hver er massi píanósins?`,
    tip: 'Jafn hraði þýðir að heildarkrafturinn er núll.',
    p: [num('Massinn:', 156, 'kg', STEPS(`${Fh} = 0, svo ${Fg} = 2 · ${U('762', 'N')} = ${U('1524', 'N')}`, `${M('m = ')}${F(Fg, M('g'))} = ${F(U('1524', 'N'), U('9,80', 'm/s^2'))} = ${U('155,5', 'kg')} ≈ ${U('156', 'kg')}`))] }),
  AE(5, { s: '3.7 Æfing', th: ['newton2', '2:jofnhrodun'],
    g: `Boeing 737 þota sem vegur ${U('41', 'tonn')} eykur hraðann úr ${U('40,0', 'm/s')} í ${U('80,0', 'm/s')} á ${U('500,0', 'm')} kafla með jafnri hröðun. Hve stór er heildarkrafturinn á þotuna?`,
    tip: `Hreyfijafna III gefur hröðunina. 1 tonn = ${U('1000', 'kg')}.`,
    p: [num('Heildarkrafturinn:', 2.0e5, 'N', STEPS(`${M('a = ')}${F(M('v^2 - v_0^2'), M('2Δx'))} = ${F('(' + U('80,0', 'm/s') + ')² − (' + U('40,0', 'm/s') + ')²', '2 · ' + U('500,0', 'm'))} = ${U('4,80', 'm/s^2')}`,
      `${Fh} = ${U('41000', 'kg')} · ${U('4,80', 'm/s^2')} = ${U('1,97*10^5', 'N')} ≈ ${U('2,0*10^5', 'N')}`), { tol: 0.03, shown: '2,0·10^5' })] }),
  AE(6, { s: '3.7 Æfing', th: ['newton2', '2:hrodun'],
    g: `Bíll eykur hraðann jafnt úr ${U('56,0', 'km/klst')} í ${U('94,0', 'km/klst')} á ${U('35,0', 's')}. Bíllinn vegur ${U('1240', 'kg')}. Hve mikill er heildarkrafturinn á hann?`,
    p: [num('Heildarkrafturinn:', 374, 'N', STEPS(`${M('Δv')} = ${U('38,0', 'km/klst')} = ${U('10,56', 'm/s')}`, `${M('a = ')}${F(U('10,56', 'm/s'), U('35,0', 's'))} = ${U('0,3016', 'm/s^2')}`, `${Fh} = ${U('1240', 'kg')} · ${U('0,3016', 'm/s^2')} = ${U('374', 'N')}`))] }),
  AE(7, { s: '3.7 Æfing', th: ['newton1', 'thyngd'],
    g: `Lóð sem vegur ${U('53', 'g')} hangir í helíumblöðru og svífur upp með jafna hraðanum ${U('0,27', 'm/s')}. Hver er togkrafturinn í bandinu?`,
    tip: `Jafn hraði ⇒ ${Fh} = 0. Breyttu grömmum í kílógrömm.`,
    p: [num('Togkrafturinn:', 0.52, 'N', STEPS(`${T} = ${Fg} = ${U('0,053', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('0,519', 'N')} ≈ ${U('0,52', 'N')}`, 'beint upp.'))] }),
  AE(8, { s: '3.7 Æfing', th: ['newton2', '2:jofnhrodun'],
    g: `Tryggvi hjólar á ${U('45,0', 'km/klst')} og hægir jafnt á sér þar til hann stöðvast á ${U('32,0', 'm')} kafla. Hann er ${U('76,0', 'kg')}. Hver er heildarkrafturinn á hann?`,
    p: [num('Stærð heildarkraftsins:', 186, 'N', STEPS(`${M('v_0')} = ${U('45,0', 'km/klst')} = ${U('12,5', 'm/s')}`,
      `${M('a = ')}${F('0 − (' + U('12,5', 'm/s') + ')²', '2 · ' + U('32,0', 'm'))} = ${U('-2,441', 'm/s^2')}`,
      `${Fh} = ${U('76,0', 'kg')} · ${U('-2,441', 'm/s^2')} = ${U('-186', 'N')}`, `${U('186', 'N')} gegn hreyfistefnunni.`), { sign: false })] }),
  AE(9, { s: '3.7 Æfing', th: ['thyngd', 'newton2'],
    g: `Andri slakar ${U('10,0', 'kg')} kassa niður í bandi. Þegar kassinn nálgast jörðina hægir Andri á honum sem nemur hröðuninni ${U('2,30', 'm/s^2')}. Hver er togkrafturinn í bandinu þá?`,
    tip: 'Kassinn fer niður en hægir á sér – þá stefnir hröðunin upp.',
    p: P([
      num('Togkrafturinn:', 121, 'N', STEPS(`Ás upp: ${M('a')} = ${U('2,30', 'm/s^2')}, ${Fg} = ${U('-98,0', 'N')}`,
        `${Fh} = ${M('ma')} = ${U('23,0', 'N')}`, `${T} = ${Fh} − ${Fg} = ${U('23,0', 'N')} + ${U('98,0', 'N')} = ${U('121', 'N')}`), { sign: false }),
      mc('Í hvaða stefnu togar bandið?', ['Upp', 'Niður'], 0, 'Band getur bara togað – hér beint upp.')
    ]) }),
  AE(10, { s: '3.7 Æfing', th: ['thverkraftur'],
    g: `Kalli stendur á vigt í lyftu. Hann er ${U('78,0', 'kg')}.`,
    p: P([
      num('Hver er þverkrafturinn á Kalla ef lyftan er kyrr?', 764, 'N', `${Fp} = ${M('mg')} = ${U('78,0', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('764', 'N')} beint upp.`),
      num(`Lyftan fer af stað með hröðuninni ${U('1,25', 'm/s^2')} upp. Hver er nú þverkrafturinn?`, 862, 'N',
        STEPS(`${Fp} = ${Fh} − ${Fg} = ${M('ma + mg')} = ${U('78,0', 'kg')} · (${U('1,25', 'm/s^2')} + ${U('9,80', 'm/s^2')})`, `= ${U('862', 'N')} beint upp.`)),
      num('Hvað sýnir vigtin í b-lið?', 87.9, 'kg', `${MS('m', 'vigt')} = ${F(U('862', 'N'), U('9,80', 'm/s^2'))} = ${U('87,9', 'kg')}`)
    ]) }),
  AE(11, { s: '3.7 Æfing', th: ['newton2', 'thyngd'],
    g: `Kúlu sem er ${U('1,40', 'kg')} er kastað beint upp með jafnri hröðun ${U('14,8', 'm/s^2')} (í mjög stuttan tíma) þar til henni er sleppt.`,
    tip: 'Á kúluna verka tveir kraftar: kastkrafturinn upp og þyngdarkrafturinn niður.',
    p: P([
      num('Hve stór er heildarkrafturinn á kúluna í kastinu?', 20.7, 'N', `${Fh} = ${M('ma')} = ${U('1,40', 'kg')} · ${U('14,8', 'm/s^2')} = ${U('20,7', 'N')}`),
      num('Hve stór er kastkrafturinn?', 34.4, 'N', STEPS(`${MS('F', 'kast')} = ${Fh} + ${M('mg')} = ${U('20,7', 'N')} + ${U('1,40', 'kg')} · ${U('9,80', 'm/s^2')}`, `= ${U('20,7', 'N')} + ${U('13,7', 'N')} = ${U('34,4', 'N')}`))
    ]) })
]
};
})());
