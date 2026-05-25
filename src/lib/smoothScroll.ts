export function smoothScrollTo(id: string, duration = 750) {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY || window.pageYOffset;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now() - 40;

  function ease(t: number) {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  }

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}
