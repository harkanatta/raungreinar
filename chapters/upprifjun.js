/* Upprifjunarverkefni – Hreyfifræði og kraftar. From "Upprifjunarverkefni.pdf" (answers "Meint svör" on p. 3).
   All answers agree with the teacher's worked solutions in "Upprifjun_lausn.pdf".
   Uses the explanations from kafli 2 and 3. Worked solutions are written for the app. */
Book.add((() => {
const Fh = MS('F', 'heild'), Fg = MS('F', 'g');
return {
n: 90,
label: 'Upprifjun',
title: 'Upprifjunarverkefni – hreyfifræði og kraftar',
theory: {},
exercises: [
  { t: 'Verkefni 1', th: ['2:faersla', '2:hradi', '3:kraftar'],
    g: 'Nefndu nokkur hugtök úr áfanganum sem fela í sér bæði <b>stærð og stefnu</b>.',
    p: [{ q: '', a: 'Hraði, hröðun, færsla og kraftur.' }] },
  { t: 'Verkefni 2', th: ['2:faersla'],
    g: 'Með hvaða hætti tilgreinum við gjarnan <b>stefnu</b> í útreikningum þegar viðfangsefnið er hreyfing eftir beinni línu?',
    p: [{ q: '', a: 'Við notum stöðuás samsíða hreyfingunni og <b>formerki</b> (+ eða −) til að segja í hvora áttina eftir ásnum stefnan er.' }] },
  { t: 'Verkefni 3', th: ['2:hrodun'],
    g: 'Hvað er <b>hröðun</b>?',
    p: [{ q: '', a: 'Hröðun er hraðabreyting á tíma – hún segir hversu ört hraðinn breytist.' }] },
  { t: 'Verkefni 4', th: ['2:jafnhradi'],
    g: `Bíll keyrir fram hjá þér (þú ert kyrr) á jöfnum hraða. Eftir ${U('5,00', 's')} er hann í ${U('187', 'm')} fjarlægð. Á hvaða hraða er bíllinn?`,
    p: [num('Hraðinn:', 37.4, 'm/s', `${M('v = ')}${F(U('187', 'm'), U('5,00', 's'))} = ${U('37,4', 'm/s')}`)] },
  { t: 'Verkefni 5', th: ['2:hradi'],
    g: `Þú flýgur dróna úr ${U('155', 'm')} fjarlægð beint í áttina að þér. Eftir ${U('4,00', 's')} er hann í ${U('38,0', 'm')} fjarlægð. Hver er meðalhraði drónans?`,
    tip: 'Láttu ásinn byrja hjá þér og stefna að drónanum. Hvaða formerki fær hraðinn þá?',
    p: [num('Meðalhraðinn:', -29.3, 'm/s', STEPS(`${MS('v', 'meðal')} = ${F(U('38,0', 'm') + ' − ' + U('155', 'm'), U('4,00', 's'))} = ${U('-29,3', 'm/s')}`, `eða ${U('29,3', 'm/s')} í áttina að þér.`), { sign: false, shown: '−29,3' })] },
  { t: 'Verkefni 6', th: ['2:jafnhradi'],
    g: `Þú fælir rjúpu sem flýgur á jafna hraðanum ${U('22,0', 'km/klst')} beint frá þér. Eftir ${U('5,00', 's')} er hún í ${U('59,0', 'm')} fjarlægð. Hversu nálægt var hún þegar þú fældir hana?`,
    tip: `Einangraðu ${M('x_0')} í ${M('x = vt + x_0')}.`,
    p: [num('Fjarlægðin í upphafi:', 28.4, 'm', STEPS(`${U('22,0', 'km/klst')} = ${U('6,111', 'm/s')}`, `${M('x_0 = x - vt')} = ${U('59,0', 'm')} − ${U('6,111', 'm/s')} · ${U('5,00', 's')} = ${U('28,4', 'm')}`))] },
  { t: 'Verkefni 7', th: ['2:jafnhradi'],
    g: `Þú stendur kyrr og heyrir í Pétri á hlaupum ${U('17', 'm')} aftan við þig. Eftir hve langan tíma er hann ${U('45', 'm')} framan við þig ef hann hleypur á jöfnu ferðinni ${U('12', 'km/klst')}?`,
    p: [num('Tíminn:', 19, 's', STEPS(`Hann fer ${U('17', 'm')} + ${U('45', 'm')} = ${U('62', 'm')}. &nbsp; ${U('12', 'km/klst')} = ${U('3,333', 'm/s')}`, `${M('t = ')}${F(U('62', 'm'), U('3,333', 'm/s'))} = ${U('18,6', 's')} ≈ ${U('19', 's')}`), { tol: 0.03 })] },
  { t: 'Verkefni 8', th: ['2:jofnhrodun'],
    g: `Þú sleppir steini fram af bjargbrún og sérð hann lenda ${U('3,50', 's')} síðar. Hversu hátt er bjargið?`,
    p: [num('Hæðin:', 60.0, 'm', `${M('Δy = ')}${F(1, 2)} · ${U('9,80', 'm/s^2')} · (${U('3,50', 's')})² = ${U('60,0', 'm')}`)] },
  { t: 'Verkefni 9', th: ['2:hrodun', '2:jofnhrodun'],
    g: `Blettatígur getur náð hraðanum ${U('20,0', 'm/s')} á ${U('2,00', 's')}.`,
    p: P([
      num('Hver er meðalhröðunin?', 10.0, 'm/s^2', `${MS('a', 'meðal')} = ${F(U('20,0', 'm/s'), U('2,00', 's'))} = ${U('10,0', 'm/s^2')}`),
      num('Hve langt fer hann á þessum 2,00 s ef hröðunin er jöfn?', 20.0, 'm', `${M('x = ')}${F(1, 2)} · ${U('10,0', 'm/s^2')} · (${U('2,00', 's')})² = ${U('20,0', 'm')}`)
    ]) },
  { t: 'Verkefni 10', th: ['2:jofnhrodun', '3:newton2'],
    g: `Hokkíleikmaður skautar á ${U('10,0', 'm/s')} og stoppar á ${U('85,0', 'cm')} kafla. Massi hans er ${U('82,0', 'kg')}.`,
    p: P([
      num('Hver er hröðunin þegar hann stoppar (jöfn hröðun)?', -58.8, 'm/s^2', STEPS(`${M('a = ')}${F(M('v^2 - v_0^2'), M('2Δx'))} = ${F('0 − (' + U('10,0', 'm/s') + ')²', '2 · ' + U('0,850', 'm'))} = ${U('-58,8', 'm/s^2')}`), { sign: false, shown: '−58,8' }),
      num('Hver er heildarkrafturinn á hann þegar hann stoppar?', -4.82e3, 'N', `${Fh} = ${M('ma')} = ${U('82,0', 'kg')} · ${U('-58,8', 'm/s^2')} = ${U('-4,82*10^3', 'N')}`, { sign: false, shown: '−4,82·10^3' })
    ]) },
  { t: 'Verkefni 11', th: ['3:newton2', '3:thyngd'],
    g: `Kraftlyftingakona lyftir þungum steini beint upp með hröðuninni ${U('0,350', 'm/s^2')}. Heildarkrafturinn á steininn er ${U('53,9', 'N')} upp.`,
    p: P([
      num('Hver er massi steinsins?', 154, 'kg', `${M('m = ')}${F(Fh, M('a'))} = ${F(U('53,9', 'N'), U('0,350', 'm/s^2'))} = ${U('154', 'kg')}`),
      num('Hver er þyngdarkrafturinn á steininn?', 1.51e3, 'N', `${Fg} = ${M('mg')} = ${U('154', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('1,51*10^3', 'N')} niður.`, { sign: false, shown: '1,51·10^3' }),
      num('Hversu stórum krafti beitir konan á steininn?', 1.56e3, 'N', `${M('F')} = ${Fh} + ${M('mg')} = ${U('53,9', 'N')} + ${U('1509', 'N')} = ${U('1,56*10^3', 'N')}`, { shown: '1,56·10^3' })
    ]) },
  { t: 'Verkefni 12', th: ['3:newton1', '3:thyngd'],
    g: `Krani lætur ${U('4,60*10^3', 'kg')} gám síga með <b>jöfnum hraða</b>. Hversu stór er togkrafturinn í vír kranans?`,
    p: [num('Togkrafturinn:', 4.51e4, 'N', `Jafn hraði ⇒ ${Fh} = 0, svo ${M('T')} = ${M('mg')} = ${U('4,60*10^3', 'kg')} · ${U('9,80', 'm/s^2')} = ${U('4,51*10^4', 'N')}`, { shown: '4,51·10^4' })] },
  { t: 'Verkefni 13', th: ['3:newton2', '2:jofnhrodun'],
    g: `Hlutur er á hraðanum ${U('18,0', 'm/s')} til hægri og massi hans er ${U('3,45', 'kg')}. Hann verður fyrir heildarkraftinum ${U('24,15', 'N')} í gagnstæða átt í ${U('5,00', 's')}. Hver verður hraðinn eftir þennan tíma?`,
    tip: 'Ás til hægri. Hvaða formerki fær krafturinn?',
    p: [num('Hraðinn:', -17.0, 'm/s', STEPS(`${M('a = ')}${F(U('-24,15', 'N'), U('3,45', 'kg'))} = ${U('-7,00', 'm/s^2')}`, `${M('v = at + v_0')} = ${U('-7,00', 'm/s^2')} · ${U('5,00', 's')} + ${U('18,0', 'm/s')} = ${U('-17,0', 'm/s')}`, `eða ${U('17,0', 'm/s')} til vinstri.`), { sign: false, shown: '−17,0' })] }
]
};
})());
