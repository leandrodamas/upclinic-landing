<script>
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { t } from '$lib/i18n';
  import { trackWhatsAppClick } from '$lib/analytics';

  $: metrics = [
    { metric: $t('showcase.m1'), title: $t('showcase.m1t'), desc: $t('showcase.m1d'), accent: '#2563eb' },
    { metric: $t('showcase.m2'), title: $t('showcase.m2t'), desc: $t('showcase.m2d'), accent: '#059669' },
    { metric: $t('showcase.m3'), title: $t('showcase.m3t'), desc: $t('showcase.m3d'), accent: '#7c3aed' },
    { metric: $t('showcase.m4'), title: $t('showcase.m4t'), desc: $t('showcase.m4d'), accent: '#ea580c' },
  ];

  $: proofs = [
    {
      name: $t('showcase.q1name'),
      role: $t('showcase.q1role'),
      quote: $t('showcase.q1quote'),
      result: $t('showcase.q1result'),
    },
    {
      name: $t('showcase.q2name'),
      role: $t('showcase.q2role'),
      quote: $t('showcase.q2quote'),
      result: $t('showcase.q2result'),
    },
    {
      name: $t('showcase.q3name'),
      role: $t('showcase.q3role'),
      quote: $t('showcase.q3quote'),
      result: $t('showcase.q3result'),
    },
  ];

  function trackWa() {
    trackWhatsAppClick('botao_whatsapp_results_showcase');
  }

  const waHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent('Olá! Quero testar o UpClinic')}`;
</script>

<section class="showcase relative overflow-hidden bg-slate-50">
  <div class="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
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

    <div class="mx-auto max-w-5xl">
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

      <div class="grid gap-4 md:grid-cols-3">
        {#each proofs as p}
          <article class="rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm p-5 sm:p-6 flex flex-col">
            <span class="inline-flex self-start items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
              {p.result}
            </span>
            <h4 class="mt-3 text-base font-bold text-slate-900">{p.name}</h4>
            <p class="mt-0.5 text-xs text-slate-500">{p.role}</p>
            <p class="mt-3 text-sm text-slate-700 leading-relaxed flex-1">{p.quote}</p>
          </article>
        {/each}
      </div>
    </div>

    <div class="mt-8 md:mt-10 mx-auto max-w-3xl">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl bg-slate-900 px-5 py-5 sm:px-6 sm:py-5 text-center sm:text-left">
        <div class="flex-1 min-w-0">
          <p class="text-base font-bold text-white">{$t('showcase.ctaTitle')}</p>
          <p class="mt-0.5 text-xs text-slate-300">{$t('showcase.ctaSub')}</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center min-h-[2.75rem] px-4 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition"
          >
            {$t('showcase.ctaStart')}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center min-h-[2.75rem] px-4 text-sm font-semibold text-white/90 ring-1 ring-white/25 hover:bg-white/10 rounded-xl transition"
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
</style>
