# Raungreinar – eitt verkefni í einu

Sister site of `staerdfraedibok`, built the same way, for a science textbook. Each exercise is shown
on its own, with large text (16–44 px), light / dark / yellow-on-black themes and big buttons.

Each exercise part can be:

- plain: a question with a **Sýna svar** button
- true/false: **Satt / Ósatt** buttons that say right away if the answer is right
- **multiple choice**: options A, B, C… that say right away if the answer is right
- **number answer**: the student types a number (comma or point both work) and presses **Athuga**
  or Enter; small rounding differences count as right

The **Útskýring** tab holds the definitions and worked examples from the book that go with the exercise.

No build step, no framework, no dependencies – plain HTML, CSS and JavaScript.

## Structure

```
index.html          page shell; loads the files below in order
css/app.css         look and themes
js/lib.js           helpers for writing maths, units and chemistry
js/app.js           the app itself (navigation, tabs, settings)
chapters/kafliN.js  one file per chapter – all the content lives here
img/                pictures used in chapters (IMG helper)
tools/check.mjs     checks the chapter files for mistakes (needs Node.js)
netlify.toml        Netlify settings (runs the check before each deploy)
```

`chapters/kafli1.js` is an **example chapter** (marked *drög*) that uses every kind of part.
Replace it with the book's first chapter.

## Try it locally

Open `index.html` in a browser, or run `python -m http.server` here and go to http://localhost:8000.

## Deploy

Same as `staerdfraedibok`: push to a **private** GitHub repository (unless you may publish the book),
then on Netlify choose **Add new site → Import an existing project → GitHub**.

Addresses can be bookmarked: `#/3/5` is chapter 3, exercise 5; `#/3/5/u` is its explanation.

## Adding a chapter

1. Create `chapters/kafli2.js` (copy `kafli1.js`).
2. Add `<script src="chapters/kafli2.js"></script>` to `index.html` next to the other chapters.
3. Run `node tools/check.mjs`, then commit and push.

### Exercise parts

```js
exercises: [
  { n: 1, s: '1.1', th: ['hradi'], g: 'Task text', tip: 'Optional hint',
    p: P([
      { q: 'Plain question', a: 'Answer shown on Sýna svar' },
      tf('Statement', true, 'optional explanation'),
      mc('Question', ['option A', 'option B', 'option C'], 1, 'optional explanation'),  // 1 = B is right
      num('Question', 9.8, 'm/s^2', 'optional explanation'),       // value with a point, not a comma
      num('Question', 0.25, 'mol', '', 0.05)                       // own tolerance: 5 %
    ]) }
]
```

### Helpers in `js/lib.js`

Everything from the maths site (`M`, `F`, `RT`, `STEPS`, `TB`, `DEF`, `RULE`, `ATH`, `EXMP`, …), plus:

| Write | Shows |
|---|---|
| `U('9,8', 'm/s^2')` | 9,8 m/s² – number and unit kept together, unit upright |
| `U('3,0*10^8', 'm/s')` | 3,0·10⁸ m/s |
| `CH('H2SO4')` | H₂SO₄ |
| `CH('2H2 + O2 -> 2H2O')` | 2H₂ + O₂ → 2H₂O (coefficients stay full size) |
| `CH('SO4^{2-}')`, `CH('Na^+')` | SO₄²⁻, Na⁺ |
| `CH('N2 + 3H2 <=> 2NH3')` | equilibrium arrow ⇌ |
| `IMG('fruma.png', 'Teikning af frumu', 'Mynd 2.1')` | picture from `img/` with caption |

`M('…')` makes letters italic (for variables); use `U` for units and `CH` for formulas so they stay upright.
