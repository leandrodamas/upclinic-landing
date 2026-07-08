/**
 * Ações de movimento sem dependências externas.
 * Usadas para dar vida à landing page (reveal on scroll, tilt magnético, count-up).
 */

type RevealOptions = {
  /** Atraso em ms antes de revelar (útil para stagger). */
  delay?: number;
  /** Distância inicial em px (padrão 28). */
  y?: number;
  /** Só anima uma vez (padrão true). */
  once?: boolean;
};

/** Revela o elemento quando entra na viewport, com fade + slide up. */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { delay = 0, y = 28, once = true } = options;

  // Respeita preferência de redução de movimento
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    node.style.opacity = '1';
    node.style.transform = 'none';
    return {};
  }

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)';
  node.style.transitionDelay = `${delay}ms`;
  node.style.willChange = 'opacity, transform';

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0)';
          if (once) io.unobserve(node);
        } else if (!once) {
          node.style.opacity = '0';
          node.style.transform = `translateY(${y}px)`;
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  io.observe(node);
  return {
    destroy() {
      io.disconnect();
    },
  };
}

/** Efeito de inclinação 3D suave seguindo o mouse (desktop). */
export function tilt(node: HTMLElement, strength = 8) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const isTouch = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;
  if (prefersReduced || isTouch) return {};

  let raf = 0;

  function onMove(e: MouseEvent) {
    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      node.style.transform = `perspective(900px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg) translateZ(0)`;
    });
  }

  function onLeave() {
    cancelAnimationFrame(raf);
    node.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
  }

  node.style.transition = 'transform 0.25s cubic-bezier(0.16,1,0.3,1)';
  node.addEventListener('mousemove', onMove);
  node.addEventListener('mouseleave', onLeave);

  return {
    destroy() {
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    },
  };
}

type CountUpOptions = {
  /** Valor final numérico. */
  to: number;
  /** Duração em ms (padrão 1600). */
  duration?: number;
  /** Casas decimais (padrão 0). */
  decimals?: number;
  /** Prefixo (ex.: "R$ "). */
  prefix?: string;
  /** Sufixo (ex.: "%", "K+"). */
  suffix?: string;
};

/** Anima um número de 0 até `to` quando entra na viewport. */
export function countUp(node: HTMLElement, options: CountUpOptions) {
  const { to, duration = 1600, decimals = 0, prefix = '', suffix = '' } = options;

  const format = (v: number) =>
    `${prefix}${v.toLocaleString('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    node.textContent = format(to);
    return {};
  }

  node.textContent = format(0);
  let started = false;

  const run = () => {
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      node.textContent = format(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !started) {
          started = true;
          run();
          io.unobserve(node);
        }
      }
    },
    { threshold: 0.6 }
  );

  io.observe(node);
  return {
    destroy() {
      io.disconnect();
    },
  };
}
