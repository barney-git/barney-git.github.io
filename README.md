# Barnaby Crossman — Portfolio

## Structure

```
index.html    the page
style.css     all styling
script.js     one small script: measures the border for the load-in animation
assets/       put gimbal-demo.mp4 (and any future media) here
```

## Design notes

The page is framed as a technical drawing sheet — a nod to actual
engineering drawing conventions:

- Each project is numbered like a drawing sheet (`SHEET 01/03`) with
  a short tag code, rather than a generic card.
- The footer is a title block, the way a real drawing sheet records
  who drew it and at what scale.
- The border animates in once on load, like a plotter drawing the
  sheet edge — no per-section scroll animations.

Everything is plain HTML/CSS/JS, so it's easy to extend: duplicate a
`<section class="sheet">` block to add a fourth project.
