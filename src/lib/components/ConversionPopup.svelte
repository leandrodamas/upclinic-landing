<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { trackTrialCta, trackWhatsAppClick } from '$lib/analytics';
  import { t } from '$lib/i18n';

  const STORAGE_KEY = 'upclinic_exit_popup_seen';
  const INACTIVITY_MS = 28000;

  let open = false;
  let dialogEl: HTMLDivElement | undefined;
  let lastScrollY = 0;
  let inactivityTimer: ReturnType<typeof setTimeout> | undefined;
  let shown = false;

  function alreadySeen(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  }

  function markSeen() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  }

  function show() {
    if (!browser || shown || alreadySeen()) return;
    shown = true;
    open = true;
    markSeen();
    // Focus close button for a11y after paint
    requestAnimationFrame(() => {
      const closeBtn = dialogEl?.querySelector<HTMLButtonElement>('[data-popup-close]');
      closeBtn?.focus();
    });
  }

  function dismiss() {
    open = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      e.preventDefault();
      dismiss();
    }
  }

  function resetInactivity() {
    if (inactivityTimer) clearTimeout(inactivityTimer);
    if (shown || alreadySeen()) return;
    inactivityTimer = setTimeout(() => {
      // Mobile / tablet: inactivity OR we already handle scroll-up below
      if (window.matchMedia('(max-width: 1023px)').matches) {
        show();
      }
    }, INACTIVITY_MS);
  }

  function onMouseOut(e: MouseEvent) {
    if (shown || alreadySeen()) return;
    // Exit intent (desktop): cursor leaves toward top of viewport
    const leavingTop = e.clientY <= 0;
    const leftDocument = e.target === document.documentElement || e.relatedTarget == null;
    if (leavingTop && leftDocument) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        show();
      }
    }
  }

  function onScroll() {
    if (shown || alreadySeen()) return;
    const y = window.scrollY;
    // Mobile scroll-up intent after user has scrolled down a bit
    if (window.matchMedia('(max-width: 1023px)').matches) {
      if (y > 320 && y < lastScrollY - 80) {
        show();
      }
    }
    lastScrollY = y;
    resetInactivity();
  }

  onMount(() => {
    if (alreadySeen()) return;
    lastScrollY = window.scrollY;
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointerdown', resetInactivity, { passive: true });
    window.addEventListener('keydown', resetInactivity, { passive: true });
    resetInactivity();
  });

  onDestroy(() => {
    if (!browser) return;
    document.removeEventListener('mouseout', onMouseOut);
    document.removeEventListener('keydown', onKeydown);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('pointerdown', resetInactivity);
    window.removeEventListener('keydown', resetInactivity);
    if (inactivityTimer) clearTimeout(inactivityTimer);
  });

  $: waHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent('Olá! Quero testar o UpClinic')}`;
</script>

{#if open}
  <div class="popup-root" role="presentation">
    <button
      type="button"
      class="popup-backdrop"
      aria-label={$t('popup.close')}
      on:click={dismiss}
    ></button>

    <div
      bind:this={dialogEl}
      class="popup-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="conv-popup-title"
      aria-describedby="conv-popup-desc"
    >
      <button
        type="button"
        class="popup-close"
        data-popup-close
        aria-label={$t('popup.close')}
        on:click={dismiss}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <p class="popup-badge">{$t('popup.badge')}</p>
      <h2 id="conv-popup-title" class="popup-title">{$t('popup.title')}</h2>
      <p id="conv-popup-desc" class="popup-desc">{$t('popup.desc')}</p>

      <div class="popup-actions">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="up-btn-primary popup-cta"
          on:click={() => {
            trackTrialCta('Popup Teste Grátis', 'Conversion Popup');
            dismiss();
          }}
        >
          {$t('popup.ctaTrial')}
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          class="up-btn-ghost popup-cta"
          on:click={() => {
            trackWhatsAppClick('popup_whatsapp');
            dismiss();
          }}
        >
          {$t('popup.ctaWa')}
        </a>
      </div>
      <p class="popup-note">{$t('popup.note')}</p>
    </div>
  </div>
{/if}

<style>
  .popup-root {
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
    padding-bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
  }
  @media (min-width: 640px) {
    .popup-root {
      align-items: center;
    }
  }
  .popup-backdrop {
    position: absolute;
    inset: 0;
    border: none;
    background: rgba(2, 6, 23, 0.55);
    cursor: pointer;
  }
  .popup-dialog {
    position: relative;
    z-index: 1;
    width: min(100%, 26rem);
    background: linear-gradient(165deg, #071233 0%, #0a1a44 55%, #062a1a 140%);
    border: 1px solid rgba(148, 163, 184, 0.25);
    border-radius: 1.25rem;
    padding: 1.5rem 1.35rem 1.35rem;
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
    color: #e5eefb;
    animation: popup-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes popup-in {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  .popup-close {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    width: 2.5rem;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    border: none;
    background: rgba(255, 255, 255, 0.08);
    color: #e2e8f0;
    cursor: pointer;
  }
  .popup-close:hover,
  .popup-close:focus-visible {
    background: rgba(255, 255, 255, 0.16);
    outline: none;
  }
  .popup-badge {
    display: inline-flex;
    align-items: center;
    margin: 0 0 0.75rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #6ee7b7;
    background: rgba(52, 211, 153, 0.12);
    border: 1px solid rgba(52, 211, 153, 0.35);
  }
  .popup-title {
    margin: 0 2rem 0.65rem 0;
    font-size: clamp(1.35rem, 4vw, 1.65rem);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #fff;
  }
  .popup-desc {
    margin: 0 0 1.25rem;
    font-size: 0.95rem;
    line-height: 1.55;
    color: rgba(191, 219, 254, 0.88);
  }
  .popup-actions {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .popup-cta {
    width: 100%;
    justify-content: center;
    min-height: 2.75rem;
  }
  .popup-note {
    margin: 0.85rem 0 0;
    text-align: center;
    font-size: 0.72rem;
    color: rgba(147, 197, 253, 0.65);
  }
</style>
