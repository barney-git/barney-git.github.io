// Measures the sheet-border rect so the "plotted line" animation
// (defined in style.css) always draws its exact perimeter, then
// starts the animation. Skips straight to the finished state if the
// visitor has reduced motion enabled.

(function () {
  var rect = document.querySelector(".frame-rect");
  if (!rect) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  var length = rect.getTotalLength();
  rect.style.strokeDasharray = length;
  rect.style.setProperty("--frame-length", length);
})();

function openSheetFromHash() {
  const hash = window.location.hash;
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target && target.tagName === 'DETAILS') {
    target.open = true;
  }
}

// Handle direct links/reloads with a hash already in the URL
openSheetFromHash();

// Handle nav clicks and back/forward navigation
window.addEventListener('hashchange', openSheetFromHash);

document.querySelectorAll('.sheet-index a').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
    }
  });
});