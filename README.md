# Barnaby Crossman — Portfolio

Static site, ready for GitHub Pages. No build step.

## Before you push

1. **Video file.** Rename your video (no spaces — spaces break URLs on
   the web) and drop it in `assets/`:

   ```
   Articulated Gimbal Assembly Smooth with Pauses.mp4  →  assets/gimbal-demo.mp4
   ```

   If you'd rather keep a different name, just update the `<source>`
   path in `index.html`.

2. **Placeholder copy.** Search `index.html` for the bracketed
   `[Replace ...]`-style paragraphs under each project and swap in
   your real write-ups.

3. **Links.** In the footer, update:
   - `mailto:your.email@example.com`
   - the GitHub URL
   - the LinkedIn URL

## Publish with GitHub Pages

1. Push this folder to a repo (e.g. `barnaby-crossman/portfolio`).
2. In the repo: **Settings → Pages → Source → Deploy from a branch**,
   pick `main` and `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo>/`
   after a minute or two. If you want it at the bare
   `https://<username>.github.io`, name the repo exactly
   `<username>.github.io`.

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
