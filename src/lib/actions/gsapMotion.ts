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

/** Reveal em stagger ao entrar na viewport (GSAP). */
export function gsapReveal(node: HTMLElement, opts: { y?: number; delay?: number; stagger?: number } = {}) {
  if (!ensure()) return {};
  if (prefersReducedMotion()) {
    gsap.set(node, { clearProps: 'all', opacity: 1 });
    return {};
  }
  const { y = 40, delay = 0, stagger = 0.08 } = opts;
  const children = node.querySelectorAll('[data-reveal]');
  const targets = children.length ? children : [node];

  gsap.set(targets, { opacity: 0, y });
  const tween = gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.85,
    delay,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: node,
      start: 'top 85%',
      once: true
    }
  });

  return {
    destroy() {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === node) st.kill();
      });
    }
  };
}

/** Parallax suave em elemento (desktop). */
export function gsapParallax(node: HTMLElement, speed = 0.25) {
  if (!ensure() || prefersReducedMotion()) return {};
  if (window.matchMedia('(pointer: coarse)').matches) return {};

  const tween = gsap.to(node, {
    y: () => window.innerHeight * speed * 0.15,
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
    .from(root.querySelectorAll('[data-hero="copy"]'), { opacity: 0, y: 32, duration: 0.8 }, '-=0.35')
    .from(root.querySelectorAll('[data-hero="cta"]'), { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from(root.querySelectorAll('[data-hero="device"]'), { opacity: 0, y: 48, scale: 0.94, duration: 1 }, '-=0.55')
    .from(root.querySelectorAll('[data-hero="float"]'), { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 }, '-=0.5');
}
