/* Tímaverkefni 1 – worksheet on hreyfifræði and kraftar. From "Tímaverkefni 1.pdf" (6 pages, no answers).
   Verkefni 1–2 use the teacher's answers to the same questions in kafli 2 ("Svör við spurningum - kafli 2.pdf");
   the other answers are written for the app and marked MINE.
   Verkefni 11–12 are lab tasks (reading a spring scale and a balance in class) and are left out. */
Book.add((() => {
const TV = 'Tímaverkefni 1';
const ms = s => U(s, 'm/s'), ms2 = s => U(s, 'm/s^2');
/* one moving object: parts (b)–(e/f) of verkefni 4–7 */
const obj = (L, v0, a, t1, v1, why, extra) => P([
  num(`Hver er hraði hlutar ${L} í upphafi?`, v0, 'm/s', why.v0 + MINE),
  num(`Hver er ferð hlutar ${L} í upphafi?`, Math.abs(v0), 'm/s', 'Ferðin er stærð hraðans, án formerkis.' + MINE),
  num(`Hver er hröðun hlutar ${L}?`, a, 'm/s^2', why.a + MINE),
  num(`Hver er hraði hlutar ${L} eftir ${U(t1, 's')}?`, v1, 'm/s', `${M('v = at + v_0')} = ${why.v1}` + MINE),
  ...(extra || [])]);

return {
n: 91,
label: 'Tímaverkefni 1',
title: 'Tímaverkefni 1 – hreyfifræði og kraftar',
theory: {},
exercises: [
  { t: 'Verkefni 1', short: '1', s: TV, th: ['2:faersla'], g: 'Hver er munurinn á hugtökunum <b>fjarlægð</b> og <b>færsla</b>?',
    p: [{ q: '', a: 'Færsla frá einum punkti til annars felur í sér upplýsingar um hversu langt er ferðast og í hvaða átt, þ.e. <b>færsla hefur bæði stærð og stefnu</b>. Fjarlægð segir okkur hver vegalengdin milli punktanna er, þ.e. <b>fjarlægð felur eingöngu í sér upplýsingar um stærð</b>.' }] },
  { t: 'Verkefni 2', short: '2', s: TV, th: ['2:hradi'], g: 'Hver er munurinn á hugtökunum <b>hraði</b> og <b>ferð</b>?',
    p: [{ q: '', a: 'Hraði felur í sér upplýsingar um hversu ört staðsetning hlutar breytist og í hvaða átt, þ.e. <b>hraði hefur bæði stærð og stefnu</b>. Ferð er stærð hraðans – <b>ferð felur ekki í sér upplýsingar um stefnu</b>.' }] },
  { t: 'Verkefni 3', short: '3', s: TV, th: ['2:faersla', '2:hradi', '2:hrodun'],
    g: 'Er stærðin <b>hröðun</b>, <b>hraði</b>, <b>ferð</b>, <b>færsla</b> eða <b>fjarlægð</b>? Ef fleiri en eitt svar kemur til greina skal telja þau öll upp.',
    tip: 'Skoðaðu eininguna fyrst. Neikvætt formerki þýðir stefnu – þá getur stærðin ekki verið ferð eða fjarlægð.',
    p: P([
      { q: U('-15', 'm/s'), a: '<b>hraði</b> – eining hraða, og mínusinn segir stefnu.' + MINE },
      { q: U('2', 'km/klst^2'), a: '<b>hröðun</b>' + MINE },
      { q: U('0,5', 'cm/ms'), a: '<b>hraði eða ferð</b> – jákvæð tala með einingu hraða.' + MINE },
      { q: U('-7', 'm/s^2'), a: '<b>hröðun</b>' + MINE },
      { q: U('18', 'm'), a: '<b>færsla eða fjarlægð</b>' + MINE },
      { q: U('-13', 'm'), a: '<b>færsla</b> – fjarlægð er aldrei neikvæð.' + MINE },
      { q: U('1,62', 'Mm/ár^2'), a: '<b>hröðun</b> – lengd deilt með tíma í öðru veldi.' + MINE },
      { q: U('-4', 'dm'), a: '<b>færsla</b>' + MINE }]) },
  { t: 'Verkefni 4', short: '4', s: TV, th: ['2:hrodun', '2:jofnhrodun'],
    g: `Hlutur A er á ferðinni ${ms('20')} <b>í stefnu</b> stöðuássins. Ferðin eykst um ${ms('2')} fyrir hverja sekúndu sem líður.`,
    tip: 'Teiknaðu skýringarmynd: stöðuás, hlutinn og örvar fyrir hraða og hröðun.',
    p: obj('A', 20, 2, '3', 26, { v0: 'Í stefnu ássins, svo jákvæður.', a: 'Ferðin eykst og hraðinn er jákvæður, svo hröðunin er jákvæð.', v1: `${ms2('2')} · ${U('3', 's')} + ${ms('20')} = ${ms('26')}` }) },
  { t: 'Verkefni 5', short: '5', s: TV, th: ['2:hrodun', '2:jofnhrodun'],
    g: `Hlutur B er á ferðinni ${ms('45')} <b>í stefnu</b> stöðuássins. Ferðin minnkar um ${ms('10')} fyrir hverjar <b>tvær</b> sekúndur sem líða.`,
    p: obj('B', 45, -5, '4', 25, { v0: 'Í stefnu ássins, svo jákvæður.', a: `Hraðinn minnkar um ${ms('10')} á ${U('2', 's')}: ${M('a = ')}${F(ms('-10'), U('2', 's'))} = ${ms2('-5')}.`, v1: `${ms2('-5')} · ${U('4', 's')} + ${ms('45')} = ${ms('25')}` },
      [num(`Hver er hraði hlutar B eftir ${U('20', 's')} ef hröðunin helst óbreytt?`, -55, 'm/s',
        `${ms2('-5')} · ${U('20', 's')} + ${ms('45')} = ${ms('-55')} – hluturinn hefur snúið við og fer nú gegn stefnu ássins.` + MINE)]) },
  { t: 'Verkefni 6', short: '6', s: TV, th: ['2:hrodun', '2:jofnhrodun'],
    g: `Hlutur C er á ferðinni ${ms('20')} <b>gegn stefnu</b> stöðuássins. Ferðin eykst um ${ms('2')} fyrir hverja sekúndu sem líður.`,
    tip: 'Ef ferðin eykst hafa hraði og hröðun sömu stefnu.',
    p: obj('C', -20, -2, '3', -26, { v0: 'Gegn stefnu ássins, svo neikvæður.', a: 'Ferðin eykst, svo hröðunin hefur sömu stefnu og hraðinn – neikvæð.', v1: `${ms2('-2')} · ${U('3', 's')} + (${ms('-20')}) = ${ms('-26')}` }) },
  { t: 'Verkefni 7', short: '7', s: TV, th: ['2:hrodun', '2:jofnhrodun'],
    g: `Hlutur D er á ferðinni ${ms('45')} <b>gegn stefnu</b> stöðuássins. Það dregur úr ferðinni sem nemur ${ms('10')} fyrir hverjar <b>tvær</b> sekúndur sem líða.`,
    tip: 'Ef ferðin minnkar hafa hraði og hröðun gagnstæða stefnu.',
    p: obj('D', -45, 5, '4', -25, { v0: 'Gegn stefnu ássins, svo neikvæður.', a: `Ferðin minnkar, svo hröðunin er gagnstæð hraðanum – jákvæð: ${F(ms('10'), U('2', 's'))} = ${ms2('5')}.`, v1: `${ms2('5')} · ${U('4', 's')} + (${ms('-45')}) = ${ms('-25')}` },
      [num(`Hver er hraði hlutar D eftir ${U('12', 's')} ef hröðunin helst óbreytt?`, 15, 'm/s',
        `${ms2('5')} · ${U('12', 's')} + (${ms('-45')}) = ${ms('15')} – hluturinn hefur snúið við og fer nú í stefnu ássins.` + MINE)]) },
  { t: 'Verkefni 8', short: '8', s: TV, th: ['2:hrodun'], g: 'Ef hlutur hefur <b>jákvæða</b> hröðun, eykst þá ferð hans nauðsynlega?',
    p: [tf('', false, `Ef hraðinn er neikvæður hægir jákvæð hröðun á hlutnum – eins og hlutur D í verkefni 7. Ferðin eykst aðeins ef hraði og hröðun hafa sömu stefnu.` + MINE, ['Já', 'Nei'])] },
  { t: 'Verkefni 9', short: '9', s: TV, th: ['2:hrodun'], g: 'Ef hlutur hefur <b>neikvæða</b> hröðun, hægir þá örugglega á hlutnum?',
    p: [tf('', false, `Ef hraðinn er líka neikvæður eykst ferðin – eins og hlutur C í verkefni 6.` + MINE, ['Já', 'Nei'])] },
  { t: 'Verkefni 10', short: '10', s: TV, th: ['3:newton2'], g: 'Getur stefna heildarkrafts sem verkar á hlut verið í öfuga átt við hraða hlutarins?',
    p: [tf('', true, `Heildarkrafturinn hefur sömu stefnu og hröðunin (${MS('F', 'heild')} = ${M('ma')}), ekki endilega hraðinn. Þegar bíll hemlar er heildarkrafturinn gagnstæður hraðanum og bíllinn hægir á sér.` + MINE, ['Já', 'Nei'])] }
]
};
})());
