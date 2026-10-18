# Raungreinar – eitt verkefni í einu

Sister site of `staerdfraedibok`, built the same way, for the science course RAUN1IN05 (MA). Each exercise
is shown on its own, with large text (16–44 px), light / dark / yellow-on-black themes and big buttons.

## Content

| On the site | Source (in `heimildir/`, not pushed – PDFs are in `.gitignore`) |
|---|---|
| Kafli 2 · Hreyfifræði – 7 explanations, 9 Spurningar, 16 Æfingar | `02 Hreyfifræði.pdf` |
| Kafli 3 · Aflfræði – Kraftar – 6 explanations, 6 Spurningar, 11 Æfingar | `03 Aflfræði - Kraftar.pdf` |
| Upprifjun – 13 revision exercises (uses the explanations from kafli 2 and 3) | `Upprifjunarverkefni.pdf` |
| Formúlublað – formulas, prefixes, polyatomic ions (button on the home screen and in the menu) | `Formúlublað_h26.pdf` |

Not yet on the site: `Svör úr kafla 1-1.pdf` and `Svör 4-1.kafli.pdf` (answer keys only – the chapters are missing).

**What is not from the book:**

- The book has **no answers to Spurningar** (2.6 and 3.6). The app's answers to them are written for the app
  and marked *(Svarið er ekki í bókinni.)* – the teacher may want to check them.
- The book's Æfing answers are **final answers only**. The worked steps under each answer are written for the app.
  Every final answer was recalculated and agrees with the book.
- Figures are redrawn (not copied) so they follow the colour theme. Only figures needed for a question,
  plus a few that explain the theory, are included.

Small things fixed silently while transcribing: typos (*staðsetnigu*, *huturinn*, *Tákum*, *hraðnum*, …), and the
table of contents of kafli 3 numbers its sections 2.1–2.8 instead of 3.1–3.8.

## How the student answers

Each exercise part can be:

- plain: a question with a **Sýna svar** button
- true/false (or Já/Nei, …): two buttons that say right away if the answer is right
- **multiple choice**: options A, B, C… that say right away if the answer is right
- **number answer**: the student types a number and presses **Athuga** or Enter. Accepted: `9,8` or `9.8`,
  `2,0·10^5` or `2e5`, and anything that rounds to the book's answer or is within 2 %. If only the sign is
  wrong the app says so ("athugaðu stefnuna").

The **Útskýring** tab holds the definitions and worked examples from the book that go with the exercise.

No build step, no framework, no dependencies – plain HTML, CSS and JavaScript.

## Structure

```
index.html            page shell; loads the files below in order
css/app.css           look and themes
js/lib.js             helpers for writing maths, units, chemistry and figures
js/app.js             the app itself (navigation, tabs, settings, answer checking)
chapters/formulur.js  the formula sheet
chapters/kafliN.js    one file per chapter – all the content lives here
chapters/upprifjun.js the revision exercises
img/                  pictures used in chapters (IMG helper)
heimildir/            the source PDFs (local only, not in git)
tools/check.mjs       checks the chapter files for mistakes (needs Node.js)
netlify.toml          Netlify settings (runs the check before each deploy)
```

## Try it locally

Run `python -m http.server` in this folder and go to http://localhost:8000.

## Deploy

Same as `staerdfraedibok`: push to a **private** GitHub repository (unless you may publish the book),
then on Netlify choose **Add new site → Import an existing project → GitHub**.

Addresses can be bookmarked: `#/3/5` is chapter 3, item 5 in the list; `#/3/5/u` is its explanation;
`#/f` is the formula sheet.

## Adding a chapter

1. Create `chapters/kafli4.js` (copy `kafli3.js`).
2. Add `<script src="chapters/kafli4.js"></script>` to `index.html` next to the other chapters.
3. Run `node tools/check.mjs`, then commit and push.

A chapter can have its own name instead of "Kafli N": `label: 'Upprifjun'` (give it a number like 90 so it
sorts last). Each chapter file is wrapped in `Book.add((() => { … return { … }; })())` so it can define
its own short names (`const Fh = MS('F', 'heild')`) without clashing with other files.

### Exercises

```js
exercises: [
  SP(1, { s: '2.6 Spurningar', th: ['hradi'], g: 'Question text', p: [...] }),   // shown as "Spurning 1"
  AE(1, { s: '2.7 Æfing', th: ['jafnhradi', '3:kraftar'], g: 'Task text', tip: 'Optional hint',
    p: P([                                                                         // P gives (a), (b), …
      { q: 'Plain question', a: 'Answer shown on Sýna svar' },
      tf('Statement', true, 'optional explanation'),
      tf('Statement', false, '', ['Já', 'Nei']),                                 // own button labels
      mc('Question', ['option A', 'option B', 'option C'], 1, 'explanation'),    // 1 = B is right
      num('Question', 9.8, 'm/s^2', 'explanation'),                              // value with a point
      num('Question', -1.9, 'm/s^2', '', { sign: false, shown: '−1,9' }),        // either sign is OK
      num('Question', 2.0e5, 'N', '', { tol: 0.03, shown: '2,0·10^5' })          // own tolerance
    ]) })
]
```

Exercises are numbered 1, 2, 3, … automatically (for the address). `th` lists the explanations to show;
`'3:kraftar'` means the explanation `kraftar` in chapter 3. Add `+ MINE` to an answer that is not from the book.

### Helpers in `js/lib.js`

Everything from the maths site (`M`, `F`, `RT`, `STEPS`, `TB`, `DEF`, `RULE`, `ATH`, `EXMP`, …), plus:

| Write | Shows |
|---|---|
| `U('9,8', 'm/s^2')` | 9,8 m/s² – number and unit kept together, unit upright |
| `U('3,0*10^8', 'm/s')` | 3,0·10⁸ m/s |
| `MS('v', 'meðal')` | *v* with an upright subscript "meðal" |
| `VL('F', 'heild')` | vector *F* with a bar, subscript "heild" |
| `CH('H2SO4')`, `CH('SO4^{2-}')` | H₂SO₄, SO₄²⁻ |
| `CH('2H2 + O2 -> 2H2O')` | 2H₂ + O₂ → 2H₂O (coefficients stay full size) |
| `vecfig({ cols, rows, box, dot, arrows })` | force diagram on squared paper (see the comment in `lib.js`) |
| `axisfig({ min, max, name, pts, arrows })` | position axis with points and displacement arrows |
| `AR(90)` | small arrow pointing up (degrees: 0 right, 90 up, 180 left) – for multiple-choice options |
| `IMG('mynd.png', 'alt text', 'Mynd 2.1')` | picture from `img/` with caption |

`M('…')` makes letters italic (for variables); use `U` for units and `CH` for formulas so they stay upright.
