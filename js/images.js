/** Fallback JPG → SVG si une capture manque */
document.querySelectorAll('img[data-fallback]').forEach((img) => {
  const fallback = img.getAttribute('data-fallback');
  if (!fallback) return;
  img.addEventListener('error', function onErr() {
    if (img.src.includes(fallback)) return;
    img.removeEventListener('error', onErr);
    img.src = fallback;
  }, { once: false });
});
