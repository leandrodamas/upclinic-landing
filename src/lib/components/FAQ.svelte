<script>
  import { reveal } from '$lib/actions/motion';
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { t } from '$lib/i18n';

  let openIndex = 0;

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

  const trust = [
    { icon: 'shield', key: 't1' },
    { icon: 'cloud', key: 't2' },
    { icon: 'card', key: 't3' },
    { icon: 'wa', key: 't4' }
  ];

  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }

  function trackWa() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'botao_whatsapp_faq'
      });
    }
  }

  $: waHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent($t('faq.waText'))}`;
</script>

<section
  id="duvidas-frequentes"
  class="faq-pro relative overflow-hidden"
  style="background:#050b23; padding-top:5.5rem; padding-bottom:6rem;"
  role="region"
  aria-label="FAQ"
>
  <div class="up-aurora" style="opacity:0.5;"></div>
  <div class="up-grid-overlay" style="opacity:0.3;"></div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

      <!-- LEFT: FAQ accordion -->
      <div class="lg:col-span-7" use:reveal>
        <span
          class="inline-flex items-center gap-2 mb-5"
          style="background:rgba(96,165,250,0.12); border:1px solid rgba(96,165,250,0.35); padding:6px 14px; border-radius:999px;"
        >
          <span class="up-pulse-dot" style="width:7px;height:7px;background:#60a5fa;border-radius:50%;"></span>
          <span style="color:#93c5fd; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em;">
            {$t('faq.badge')}
          </span>
        </span>

        <h2 style="font-size:clamp(1.85rem,4vw,2.75rem); font-weight:900; color:#fff; line-height:1.1; letter-spacing:-0.02em; margin-bottom:0.75rem;">
          {$t('faq.titleA')}
          <span class="up-gradient-text">{$t('faq.titleHi')}</span>
        </h2>
        <p class="mb-8 max-w-xl" style="color:rgba(191,219,254,0.78); font-size:1.02rem; line-height:1.6;">
          {$t('faq.sub')}
        </p>

        <div class="space-y-3">
          {#each faqKeys as key, index}
            {@const isOpen = openIndex === index}
            <div
              class="faq-item up-glass"
              class:faq-item-open={isOpen}
              style="border-radius:1rem; overflow:hidden;"
            >
              <button
                type="button"
                class="faq-btn w-full text-left flex items-start gap-3 px-4 py-4 sm:px-5"
                on:click={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls="faq-a-{index}"
              >
                <span
                  class="faq-num shrink-0 mt-0.5"
                  style={isOpen ? 'background:linear-gradient(135deg,#34d399,#0d9488); color:#fff;' : ''}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span class="flex-1 font-bold text-sm sm:text-base" style="color:{isOpen ? '#fff' : 'rgba(226,232,240,0.92)'};">
                  {$t(`faq.items.${key}.q`)}
                </span>
                <span class="faq-chevron shrink-0" class:faq-chevron-open={isOpen} aria-hidden="true">
                  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {#if isOpen}
                <div
                  id="faq-a-{index}"
                  class="faq-answer px-4 pb-4 sm:px-5 sm:pb-5"
                  style="padding-left:calc(1rem + 2.5rem + 0.75rem);"
                >
                  <p class="text-sm leading-relaxed" style="color:rgba(191,219,254,0.85);">
                    {$t(`faq.items.${key}.a`)}
                  </p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>

      <!-- RIGHT: conversion console (no stock/AI photo) -->
      <div class="lg:col-span-5 lg:sticky lg:top-28" use:reveal={{ delay: 100 }}>
        <div class="up-glow-border" style="padding:0;">
          <div
            class="relative overflow-hidden"
            style="border-radius:1.5rem; background:linear-gradient(165deg,#071233 0%,#0a1a44 50%,#064e3b 140%);"
          >
            <div class="up-aurora" style="opacity:0.35;"></div>

            <!-- Terminal header -->
            <div
              class="relative z-[1] flex items-center gap-3 px-4 py-3 sm:px-5"
              style="border-bottom:1px solid rgba(255,255,255,0.08); background:rgba(0,0,0,0.2);"
            >
              <span class="flex gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
              </span>
              <span class="font-mono text-[11px] truncate" style="color:rgba(147,197,253,0.65);">
                upclinic://support/ready
              </span>
              <span
                class="ml-auto text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                style="background:rgba(52,211,153,0.15); color:#6ee7b7; border:1px solid rgba(52,211,153,0.35);"
              >
                {$t('faq.online')}
              </span>
            </div>

            <div class="relative z-[1] p-5 sm:p-6">
              <p class="text-xs font-bold uppercase tracking-[0.18em] mb-2" style="color:#6ee7b7;">
                {$t('faq.panelBadge')}
              </p>
              <h3 class="text-xl sm:text-2xl font-extrabold text-white mb-2" style="letter-spacing:-0.02em; line-height:1.2;">
                {$t('faq.panelTitle')}
              </h3>
              <p class="text-sm mb-6" style="color:rgba(191,219,254,0.8); line-height:1.55;">
                {$t('faq.panelSub')}
              </p>

              <!-- Trust grid -->
              <div class="grid grid-cols-2 gap-2.5 mb-6">
                {#each trust as item}
                  <div
                    class="rounded-xl px-3 py-3"
                    style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1);"
                  >
                    <div class="flex items-center gap-2 mb-1.5">
                      {#if item.icon === 'shield'}
                        <svg width="16" height="16" fill="none" stroke="#34d399" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                      {:else if item.icon === 'cloud'}
                        <svg width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                      {:else if item.icon === 'card'}
                        <svg width="16" height="16" fill="none" stroke="#fbbf24" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                      {:else}
                        <svg width="16" height="16" fill="#25d366" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.683-1.448L.057 24z"/></svg>
                      {/if}
                      <span class="text-[11px] font-bold text-white">{$t(`faq.trust.${item.key}.t`)}</span>
                    </div>
                    <p class="text-[11px] leading-snug" style="color:rgba(191,219,254,0.7);">
                      {$t(`faq.trust.${item.key}.d`)}
                    </p>
                  </div>
                {/each}
              </div>

              <!-- Live reply strip -->
              <div
                class="flex items-center gap-3 rounded-xl px-3.5 py-3 mb-6"
                style="background:rgba(37,211,102,0.08); border:1px solid rgba(37,211,102,0.28);"
              >
                <span class="relative flex h-2.5 w-2.5 shrink-0">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                  <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <div class="min-w-0">
                  <div class="text-xs font-bold text-white">{$t('faq.replyTitle')}</div>
                  <div class="text-[11px]" style="color:rgba(167,243,208,0.9);">{$t('faq.replySub')}</div>
                </div>
              </div>

              <!-- CTAs -->
              <div class="flex flex-col gap-3">
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary" style="width:100%; justify-content:center;">
                  {$t('faq.ctaTrial')}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="up-btn-ghost"
                  style="width:100%; justify-content:center;"
                  on:click={trackWa}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.683-1.448L.057 24z"/></svg>
                  {$t('faq.ctaWa')}
                </a>
              </div>

              <p class="mt-4 text-center text-[11px]" style="color:rgba(147,197,253,0.55);">
                {$t('faq.footnote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .faq-num {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 800;
    font-variant-numeric: tabular-nums;
    color: rgba(147, 197, 253, 0.85);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.25s ease;
  }

  .faq-item {
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .faq-item-open {
    border-color: rgba(52, 211, 153, 0.35) !important;
    box-shadow: 0 0 0 1px rgba(52, 211, 153, 0.12), 0 12px 32px rgba(0, 0, 0, 0.25);
  }

  .faq-btn {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .faq-chevron {
    color: rgba(147, 197, 253, 0.6);
    transition: transform 0.25s ease, color 0.25s ease;
    margin-top: 0.35rem;
  }
  .faq-chevron-open {
    transform: rotate(180deg);
    color: #6ee7b7;
  }

  .faq-answer {
    animation: faq-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes faq-in {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .faq-answer {
      animation: none;
    }
  }
</style>
