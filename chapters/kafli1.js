/* Kafli 1 – SÝNIDÆMI. Placeholder chapter that shows every kind of part.
   Replace it with the book's first chapter. */
Book.add({
n: 1,
title: 'Sýnidæmi – eðlisfræði og efnafræði',
draft: true,
theory: {

hradi: { t: 'Hraði', h: `
${DEF('Skilgreining: Meðalhraði', `Meðalhraði er vegalengd deilt með tíma: ${M('v = ' )}${F(I('s'), I('t'))}`)}
<p>Hraði er mældur í ${U('', 'm/s')} eða ${U('', 'km/klst')}. ${U('1', 'm/s')} = ${U('3,6', 'km/klst')}.</p>
${EXMP('Dæmi 1.1', `Bíll ekur ${U('120', 'km')} á ${U('1,5', 'klst')}. Hver er meðalhraðinn?`,
  STEPS(M('v = ') + F(U('120', 'km'), U('1,5', 'klst')), '= <b>' + U('80', 'km/klst') + '</b>'))}`},

efni: { t: 'Efnaformúlur og efnajöfnur', h: `
<p>Vatn er ${CH('H2O')}: tvö vetnisatóm og eitt súrefnisatóm. Talan neðan við línu segir hve mörg atóm eru af hverju frumefni.</p>
${RULE('Efnajafna', `${CH('2H2 + O2 -> 2H2O')}<br>Jafnmörg atóm af hverju frumefni eiga að vera hvorum megin við örina.`)}
<p>Jónir hafa hleðslu: ${CH('Na^+')}, ${CH('Cl^-')}, ${CH('SO4^{2-}')}.</p>
${ATH(`Talan fremst (stuðullinn) í ${CH('2H2O')} segir hve margar sameindir eru – hún er ekki neðan við línu.`)}`}
},
exercises: [
  { n: 1, s: '1.1', th: ['hradi'],
    g: 'Reiknaðu meðalhraðann. Skrifaðu svarið í reitinn og ýttu á <b>Athuga</b>.',
    tip: 'Deildu vegalengdinni með tímanum.',
    p: P([
      num(`Hlaupari fer ${U('400', 'm')} á ${U('50', 's')}.`, 8, 'm/s', STEPS(M('v = ') + F(U('400', 'm'), U('50', 's')) + ' = ' + U('8', 'm/s'))),
      num(`Lest fer ${U('210', 'km')} á ${U('2,5', 'klst')}.`, 84, 'km/klst'),
      { q: `Hvers vegna er gott að skrifa einingu með svarinu?`, a: 'Talan ein og sér segir ekki hvort átt er við m/s eða km/klst.' }
    ]) },
  { n: 2, s: '1.2', th: ['efni'],
    g: 'Veldu rétt svar.',
    p: P([
      mc(`Hve mörg vetnisatóm eru í einni sameind af ${CH('H2SO4')}?`, ['1', '2', '4'], 1, `Talan 2 er neðan við línu á eftir H.`),
      mc(`Hver er hleðsla súlfatjónarinnar ${CH('SO4^{2-}')}?`, ['+2', '−2', '−4'], 1),
      tf(`Efnajafnan ${CH('H2 + O2 -> H2O')} er stillt.`, false, `Það eru 2 súrefnisatóm vinstra megin en 1 hægra megin. Rétt: ${CH('2H2 + O2 -> 2H2O')}`)
    ]) }
]
});
