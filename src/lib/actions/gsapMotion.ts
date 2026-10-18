import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

function ensure() {
  if (typeof window === 'undefined') return false;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return true;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );
}

function nearViewport(node: HTMLElement, margin = 1.25) {
  const r = node.getBoundingClientRect();
  return r.top < window.innerHeight * margin && r.bottom > -80;
}

/** Reveal em stagger ao entrar na viewport (GSAP) — com fallbacks para não ficar invisível. */
export function gsapReveal(
  node: HTMLElement,
  opts: { y?: number; delay?: number; stagger?: number } = {}
) {
  if (!ensure()) return {};
  const { y = 36, delay = 0, stagger = 0.07 } = opts;
  const children = node.querySelectorAll('[data-reveal]');
  const targets = (children.length ? [...children] : [node]) as HTMLElement[];

  if (prefersReducedMotion()) {
    gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0 });
    return {};
  }

  gsap.set(targets, { opacity: 0, y });

  const show = () => {
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay,
      stagger,
      ease: 'power3.out',
      overwrite: true
    });
  };

  let st: ScrollTrigger | undefined;
  st = ScrollTrigger.create({
    trigger: node,
    start: 'top 92%',
    once: true,
    onEnter: show
  });

  // Se já está perto da viewport (ou full-page/crawler), revela logo
  const raf = requestAnimationFrame(() => {
    ScrollTrigger.refresh();
    if (nearViewport(node)) show();
  });

  // Failsafe absoluto — nunca deixar conteúdo invisível
  const failsafe = window.setTimeout(() => {
    gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' });
  }, 1800);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      st?.kill();
    }
  };
}

/** Parallax suave em elemento (desktop). */
export function gsapParallax(node: HTMLElement, speed = 0.25) {
  if (!ensure() || prefersReducedMotion()) return {};
  if (window.matchMedia('(pointer: coarse)').matches) return {};

  const tween = gsap.to(node, {
    y: () => window.innerHeight * speed * 0.12,
    ease: 'none',
    scrollTrigger: {
      trigger: node.parentElement || node,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  return {
    destroy() {
      tween.kill();
    }
  };
}

/** Entrada do hero (timeline). */
export function playHeroIntro(root: HTMLElement) {
  if (!ensure() || prefersReducedMotion()) {
    gsap.set(root.querySelectorAll('[data-hero]'), { clearProps: 'all', opacity: 1, y: 0 });
    return;
  }
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from(root.querySelectorAll('[data-hero="brand"]'), { opacity: 0, y: 24, duration: 0.7 })
    .from(root.querySelectorAll('[data-hero="copy"]'), { opacity: 0, y: 32, duration: 0.75 }, '-=0.35')
    .from(root.querySelectorAll('[data-hero="cta"]'), { opacity: 0, y: 20, duration: 0.55 }, '-=0.4')
    .from(
      root.querySelectorAll('[data-hero="device"]'),
      { opacity: 0, y: 48, scale: 0.94, duration: 0.95 },
      '-=0.5'
    )
    .from(
      root.querySelectorAll('[data-hero="float"]'),
      { opacity: 0, y: 16, duration: 0.45, stagger: 0.1 },
      '-=0.45'
    );
}
