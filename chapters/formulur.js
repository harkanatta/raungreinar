/* Formúlublað – from Formúlublað_h26.pdf (MA, RAUN1IN05). Shown from the menu and the home screen. */
Book.formulas = `
<details open><summary>Hreyfifræði</summary><div>
${TB(['Hvað', 'Formúla'], [
  ['Meðalhraði', `${MS('v', 'meðal')} = ${F(M('Δx'), M('Δt'))}`],
  ['Meðalhröðun', `${MS('a', 'meðal')} = ${F(M('Δv'), M('Δt'))}`],
  ['Jafn hraði', M('x = vt + x_0')],
  ['Jöfn hröðun I', M('v = at + v_0')],
  ['Jöfn hröðun II', `${M('x = ')}${F(1, 2)}${M('at^2 + v_0t + x_0')}`],
  ['Jöfn hröðun III', M('v^2 = 2aΔx + v_0^2')]
])}</div></details>

<details open><summary>Kraftar</summary><div>
${TB(['Hvað', 'Formúla'], [
  ['2. lögmál Newton', `${MS('F', 'heild')} = ${M('ma')}`],
  ['Heildarkraftur', `${MS('F', 'heild')} = ${MS('F', '1')} + ${MS('F', '2')} + … + ${MS('F', 'n')}`],
  ['Þyngdarkraftur', `${MS('F', 'g')} = ${M('mg')}`],
  ['Þyngdarhröðun', `${M('g')} = ${U('9,80', 'm/s^2')}`],
  ['Eining krafts', `${U('1', 'N')} = ${U('1', 'kg*m/s^2')}`]
])}</div></details>

<details><summary>Hitastig</summary><div>
${TB(['Hvað', 'Formúla'], [
  ['Celsíus → kelvin', `${M('T')}(K) = ${M('T')}(°C) + 273,15`],
  ['Kelvin → celsíus', `${M('T')}(°C) = ${M('T')}(K) − 273,15`]
])}</div></details>

<details><summary>Atóm</summary><div>
${TB(['Hvað', 'Formúla'], [
  ['Atómmassaeining', `${U('1', 'u')} = ${U('1,66*10^{-24}', 'g')}`],
  ['Meðalatómmassi', `${MS('A', 'r')} = Σ [(massi samsætu) · (hlutfall samsætu)]`]
])}</div></details>

<details><summary>Forskeyti</summary><div>
${TB(['Forskeyti', 'Tákn', 'Tugveldi'], [
  ['Tera', 'T', up('10^12')], ['Gíga', 'G', up('10^9')], ['Mega', 'M', up('10^6')], ['Kíló', 'k', up('10^3')],
  ['Hektó', 'h', up('10^2')], ['Deka', 'da', up('10^1')], ['–', '–', up('10^0') + ' = 1'], ['Desí', 'd', up('10^-1')],
  ['Sentí', 'c', up('10^-2')], ['Millí', 'm', up('10^-3')], ['Míkró', 'µ', up('10^-6')], ['Nanó', 'n', up('10^-9')],
  ['Píkó', 'p', up('10^-12')]
])}</div></details>

<details><summary>Fjölatóma jónir</summary><div>
<p><b>Katjónir (plúshlaðnar)</b></p>
${TB(['Formúla', 'Heiti'], [[CH('NH4^+'), 'Ammóníum'], [CH('H3O^+'), 'Hýdróníum'], [CH('PH4^+'), 'Fosfóníum']])}
<p><b>Anjónir (mínushlaðnar)</b></p>
${TB(['Formúla', 'Heiti'], [
  [CH('CH3COO^-'), 'Asetat'], [CH('CO3^{2-}'), 'Karbónat'], [CH('HCO3^-'), 'Vetniskarbónat'],
  [CH('Cr2O7^{2-}'), 'Díkrómat'], [CH('CrO4^{2-}'), 'Krómat'], [CH('PO4^{3-}'), 'Fosfat'],
  [CH('OH^-'), 'Hýdroxíð'], [CH('NO3^-'), 'Nítrat'], [CH('NO2^-'), 'Nítrít'], [CH('MnO4^-'), 'Permanganat'],
  [CH('CN^-'), 'Sýaníð'], [CH('SCN^-'), 'Þíósýaníð'], [CH('ClO2^-'), 'Klórít'], [CH('ClO3^-'), 'Klórat'],
  [CH('ClO4^-'), 'Perklórat'], [CH('SO4^{2-}'), 'Súlfat'], [CH('C2O4^{2-}'), 'Oxalat']
])}</div></details>
<p class="mine">Lotukerfið er á formúlublaðinu en ekki hér – það er of stórt fyrir lítinn skjá.</p>`;
