/**
 * Movimiento del sitio. Todo lo visual vive en CSS; aquí sólo se
 * decide CUÁNDO ocurre. Nada corre si el usuario pidió menos
 * movimiento, salvo la barra de progreso, que es información.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ── reveals al entrar en pantalla ─────────────────────────── */
const seen = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      seen.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
);

document
  .querySelectorAll('[data-reveal], [data-draw], .mask-line, .kicker')
  .forEach((el) => seen.observe(el));

/* ── cinta de progreso ─────────────────────────────────────── */
const bar = document.getElementById('progress');
if (bar) {
  const paint = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  addEventListener('scroll', paint, { passive: true });
  addEventListener('resize', paint, { passive: true });
  paint();
}

/* ── sección activa en la navegación ───────────────────────── */
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-navlink]')];
if (links.length) {
  const current = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        for (const link of links) {
          link.classList.toggle('on', link.getAttribute('href') === `#${id}`);
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  document.querySelectorAll('main section[id]').forEach((s) => current.observe(s));
}

/* ── cabecera compacta al bajar ────────────────────────────── */
const header = document.getElementById('site-header');
if (header) {
  const check = () => header.classList.toggle('stuck', window.scrollY > 24);
  addEventListener('scroll', check, { passive: true });
  check();
}

/* ── inclinación + foco radial ─────────────────────────────── */
if (finePointer && !reduced) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
      el.style.setProperty('--rx', `${(0.5 - py) * 9}deg`);
      el.style.setProperty('--ry', `${(px - 0.5) * 11}deg`);
    }, { passive: true });

    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}
