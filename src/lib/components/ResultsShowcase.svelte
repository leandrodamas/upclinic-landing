<script>
  import { onMount } from 'svelte';
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { t } from '$lib/i18n';

  $: metrics = [
    { metric: $t('showcase.m1'), title: $t('showcase.m1t'), desc: $t('showcase.m1d'), accent: '#2563eb' },
    { metric: $t('showcase.m2'), title: $t('showcase.m2t'), desc: $t('showcase.m2d'), accent: '#059669' },
    { metric: $t('showcase.m3'), title: $t('showcase.m3t'), desc: $t('showcase.m3d'), accent: '#7c3aed' },
    { metric: $t('showcase.m4'), title: $t('showcase.m4t'), desc: $t('showcase.m4d'), accent: '#ea580c' },
  ];

  $: quotes = [
    {
      name: $t('showcase.q1name'),
      role: $t('showcase.q1role'),
      quote: $t('showcase.q1quote'),
      result: $t('showcase.q1result'),
      avatar: '/avatar-1.png',
      initials: 'CM',
    },
    {
      name: $t('showcase.q2name'),
      role: $t('showcase.q2role'),
      quote: $t('showcase.q2quote'),
      result: $t('showcase.q2result'),
      avatar: '/avatar-2.png',
      initials: 'AL',
    },
    {
      name: $t('showcase.q3name'),
      role: $t('showcase.q3role'),
      quote: $t('showcase.q3quote'),
      result: $t('showcase.q3result'),
      avatar: '/retrato-de-homem.png',
      initials: 'RS',
    },
  ];

  let current = 0;
  let paused = false;
  let timer;

  function next() {
    current = (current + 1) % quotes.length;
  }
  function prev() {
    current = (current - 1 + quotes.length) % quotes.length;
  }
  function goTo(i) {
    current = i;
  }

  onMount(() => {
    timer = setInterval(() => {
      if (!paused) next();
    }, 6000);
    return () => clearInterval(timer);
  });

  function trackWa() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'botao_whatsapp_results_showcase',
      });
    }
  }

  const waHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre os resultados do UpClinic'
  )}`;
</script>

<section class="showcase relative overflow-hidden bg-slate-50">
  <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
    <!-- Header -->
    <div class="mx-auto max-w-2xl text-center mb-8 md:mb-12">
      <span class="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-100">
        {$t('showcase.badge')}
      </span>
      <h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
        {$t('showcase.title')}<span class="text-blue-600">{$t('showcase.titleHi')}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
        {$t('showcase.sub')}
      </p>
    </div>

    <!-- Metrics: 2x2 mobile, 4 cols desktop — sem cards pesados -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 md:mb-14">
      {#each metrics as m}
        <div
          class="metric-card rounded-2xl bg-white px-4 py-5 sm:px-5 sm:py-6 ring-1 ring-slate-200/80 shadow-sm"
          style="--accent: {m.accent}"
        >
          <div class="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight" style="color: var(--accent)">
            {m.metric}
          </div>
          <div class="mt-1.5 text-sm sm:text-[15px] font-bold text-slate-900 leading-snug">{m.title}</div>
          <p class="mt-1 text-[11px] sm:text-xs text-slate-500 leading-snug">{m.desc}</p>
        </div>
      {/each}
    </div>

    <!-- Testimonials -->
    <div class="mx-auto max-w-3xl">
      <div class="text-center mb-5 md:mb-6">
        <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          {$t('showcase.quotesBadge')}
        </span>
        <h3 class="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
          {$t('showcase.quotesTitle')}
        </h3>
        <p class="mt-1 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          {$t('showcase.quotesSub')}
        </p>
      </div>

      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="quote-panel relative rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm overflow-hidden"
        on:mouseenter={() => (paused = true)}
        on:mouseleave={() => (paused = false)}
        on:focusin={() => (paused = true)}
        on:focusout={() => (paused = false)}
      >
        {#key current}
          <div class="quote-anim p-5 sm:p-7 md:p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white shadow shrink-0">
                <img
                  src={quotes[current].avatar}
                  alt=""
                  class="h-full w-full object-cover"
                  loading="lazy"
                  on:error={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('fallback-initials');
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.dataset.initials = quotes[current].initials;
                    }
                  }}
                />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-0.5 mb-0.5" aria-hidden="true">
                  {#each Array(5) as _}
                    <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
                <p class="text-sm font-bold text-slate-900 truncate">{quotes[current].name}</p>
                <p class="text-xs text-slate-500 truncate">{quotes[current].role}</p>
              </div>
              <span class="hidden sm:inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100 shrink-0">
                {quotes[current].result}
              </span>
            </div>

            <blockquote class="text-[15px] sm:text-base text-slate-700 leading-relaxed">
              “{quotes[current].quote}”
            </blockquote>

            <span class="mt-4 inline-flex sm:hidden items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
              {quotes[current].result}
            </span>
          </div>
        {/key}

        <div class="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-t border-slate-100 bg-slate-50/80">
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 transition"
            on:click={prev}
            aria-label="Anterior"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div class="flex items-center gap-1.5">
            {#each quotes as _, i}
              <button
                type="button"
                class="h-1.5 rounded-full transition-all {i === current ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}"
                on:click={() => goTo(i)}
                aria-label="Depoimento {i + 1}"
                aria-current={i === current ? 'true' : undefined}
              ></button>
            {/each}
          </div>

          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 transition"
            on:click={next}
            aria-label="Próximo"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- CTA compacto -->
    <div class="mt-8 md:mt-10 mx-auto max-w-3xl">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-slate-900 px-5 py-5 sm:px-6 sm:py-5 text-center sm:text-left">
        <div class="flex-1 min-w-0">
          <p class="text-base font-bold text-white">{$t('showcase.ctaTitle')}</p>
          <p class="mt-0.5 text-xs text-slate-300">{$t('showcase.ctaSub')}</p>
        </div>
        <div class="flex flex-col xs:flex-row sm:flex-row gap-2 w-full sm:w-auto shrink-0">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center h-10 px-4 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition"
          >
            {$t('showcase.ctaStart')}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center h-10 px-4 text-sm font-semibold text-white/90 ring-1 ring-white/25 hover:bg-white/10 rounded-xl transition"
            on:click={trackWa}
          >
            {$t('showcase.ctaWa')}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .metric-card {
    position: relative;
  }
  .metric-card::before {
    content: '';
    position: absolute;
    left: 0;
    top: 14px;
    bottom: 14px;
    width: 3px;
    border-radius: 999px;
    background: var(--accent);
    opacity: 0.85;
  }

  .quote-anim {
    animation: quote-in 0.35s ease;
  }

  @keyframes quote-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fallback-initials::after {
    content: attr(data-initials);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    font-weight: 700;
    color: #1e3a8a;
    background: #dbeafe;
  }
</style>
