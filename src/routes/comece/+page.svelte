<!--
  /comece — experiência premium imersiva: hero aurora, glass, reveal no scroll,
  count-up, vídeos com chrome de app e narrativa de fidelização em 6 passos.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import YoutubeChannelVideoTeaser from '$lib/components/YoutubeChannelVideoTeaser.svelte';
  import { reveal, countUp } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import {
    REGISTER_URL,
    CONTACT,
    COMECE_DEMO_VIDEO_URL,
    COMECE_FIDELIZACAO_VIDEO_URL
  } from '$lib/constants';

  const waText = encodeURIComponent(
    'Olá! Quero conhecer o UpClinic e começar o teste grátis.'
  );
  const whatsappHref = `${CONTACT.whatsappLink}?text=${waText}`;

  // Ícones dos 6 passos (a ordem casa com comece.steps no i18n). Textos vêm do dicionário.
  const stepIcons = [
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    'M4 6h16M4 10h16M4 14h10M4 18h6',
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  ];

  function trackLead(name: string, source: string) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: name, content_category: 'SaaS', source }, { eventID: eventId });
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          event_id: eventId,
          event_data: { content_name: name, content_category: 'SaaS', source }
        })
      }).catch(() => {});
    }
    if (window.gtag) {
      window.gtag('event', 'sign_up', { event_category: 'engagement', event_label: `${source}: ${name}` });
    }
  }

  function scrollToId(e: Event, id: string) {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>UpClinic — Agenda, prontuário e pacientes em um só sistema | Teste grátis</title>
  <meta
    name="description"
    content="Vídeos do UpClinic com controles; canal @drcarloseurico no YouTube. 6 passos para fidelizar pacientes. Agenda, prontuário e financeiro na nuvem. 7 dias grátis."
  />
  <link rel="canonical" href="https://www.clinicupapp.com/comece" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Navbar />

<main class="comece-page min-h-screen overflow-x-hidden pb-28 md:pb-0" style="background:#050b23; color:#e5eefb;">
  <!-- Faixa de urgência -->
  <div class="relative z-10 px-4 py-2.5 text-center text-sm font-bold text-white"
       style="background:linear-gradient(90deg,#059669,#0d9488,#0891b2);">
    <span class="inline-flex items-center justify-center gap-2">
      <span class="up-pulse-dot" style="width:8px;height:8px;background:#fff;border-radius:50%;"></span>
      {$t('comece.urgency')}
    </span>
  </div>

  <!-- ══════════ HERO ══════════ -->
  <section class="relative overflow-hidden" style="padding-top:7rem; padding-bottom:5rem;">
    <div class="up-aurora"></div>
    <div class="up-grid-overlay"></div>

    <div class="relative z-[2] mx-auto max-w-4xl px-4 text-center sm:px-6">
      <div class:up-in={mounted} class="up-fadein">
        <p class="mb-5 inline-flex items-center gap-2 up-glass"
           style="padding:7px 16px; border-radius:999px; font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
          <span class="up-pulse-dot" style="width:8px;height:8px;background:#34d399;border-radius:50%;"></span>
          <span style="color:#6ee7b7; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.18em;">
            {$t('comece.badge')}
          </span>
        </p>

        <h1 style="font-family:'Plus Jakarta Sans',system-ui,sans-serif; font-size:clamp(2rem,4.6vw,3.1rem); font-weight:800; line-height:1.1; letter-spacing:-0.02em; color:#fff;">
          {$t('comece.titlePre')}<span class="up-gradient-text">{$t('comece.titleHi')}</span>{$t('comece.titleMid')}<br class="hidden sm:block">
          {$t('comece.titleEnd')}
        </h1>

        <p class="mx-auto mt-5 max-w-2xl" style="font-size:1.08rem; line-height:1.7; color:rgba(191,219,254,0.85);">
          {$t('comece.subA')}<strong style="color:#fff;">{$t('comece.subUpclinic')}</strong>{$t('comece.subB')}<strong style="color:#fff;">{$t('comece.sub6')}</strong>{$t('comece.subC')}<strong style="color:#6ee7b7;">{$t('comece.subWa')}</strong>{$t('comece.subD')}
        </p>

        <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary"
             on:click|preventDefault={() => { trackLead('CTA Teste grátis', '/comece hero'); window.open(REGISTER_URL, '_blank'); }}>
            {$t('comece.ctaStart')}
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
          <a href="#demo-sistema" on:click={(e) => scrollToId(e, 'demo-sistema')} class="up-btn-ghost cursor-pointer">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/></svg>
            {$t('comece.ctaVideos')}
          </a>
        </div>

        <ul class="mx-auto mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {#each $t('comece.chips') as chip}
            <li class="up-glass" style="padding:7px 14px; border-radius:10px; font-size:0.8rem; font-weight:600; color:#dbeafe;">{chip}</li>
          {/each}
        </ul>

        <p class="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2" style="font-size:0.82rem; color:rgba(167,210,255,0.75);">
          <span class="flex items-center gap-1.5">
            <svg width="16" height="16" fill="#34d399" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {$t('comece.trustNoCard')}
          </span>
          <span class="flex items-center gap-1.5">
            <svg width="16" height="16" fill="#34d399" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            {$t('comece.trustCancel')}
          </span>
        </p>
      </div>
    </div>
  </section>

  <div class="relative z-[2] mx-auto max-w-5xl space-y-16 px-4 pb-16 sm:px-6 lg:space-y-24 lg:pb-24">

    <!-- Fluxo em 3 passos -->
    <nav class="grid gap-4 sm:grid-cols-3" aria-label="UpClinic">
      {#each [
        { n: '1', c: 'linear-gradient(135deg,#34d399,#0d9488)', t: $t('comece.flow1t'), d: $t('comece.flow1d') },
        { n: '2', c: 'linear-gradient(135deg,#60a5fa,#2563eb)', t: $t('comece.flow2t'), d: $t('comece.flow2d') },
        { n: '3', c: 'linear-gradient(135deg,#fbbf24,#f59e0b)', t: $t('comece.flow3t'), d: $t('comece.flow3d') }
      ] as s, i}
        <div use:reveal={{ delay: i * 80 }} class="up-glass flex gap-3" style="padding:18px; border-radius:18px;">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                style="background:{s.c}; font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{s.n}</span>
          <div>
            <p class="font-bold text-white" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{s.t}</p>
            <p class="mt-0.5 text-xs" style="color:rgba(191,219,254,0.75);">{s.d}</p>
          </div>
        </div>
      {/each}
    </nav>

    <!-- Vídeo 1: demo sistema -->
    <section id="demo-sistema" class="scroll-mt-24" use:reveal>
      <div class="text-center">
        <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style="background:rgba(52,211,153,0.12); border:1px solid rgba(52,211,153,0.35); color:#6ee7b7;">
          <span class="up-pulse-dot" style="width:6px;height:6px;background:#34d399;border-radius:50%;"></span>
          {$t('comece.tourBadge')}
        </span>
        <h2 class="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
          {$t('comece.tourTitle')}
        </h2>
        <p class="mx-auto mt-2 max-w-xl" style="color:rgba(191,219,254,0.8);">
          {$t('comece.tourSub')}
        </p>
      </div>

      <div class="mx-auto mt-8 max-w-4xl up-glow-border" style="padding:0;">
        <div class="overflow-hidden" style="border-radius:1.5rem; background:#0b1020;">
          <div class="flex items-center gap-3 px-4 py-3 sm:px-5" style="background:rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.08);" aria-hidden="true">
            <span class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-amber-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400/90"></span>
            </span>
            <div class="mx-auto flex min-w-0 flex-1 items-center gap-2 rounded-lg px-3 py-2 font-mono text-[11px] sm:text-xs"
                 style="background:rgba(2,8,40,0.6); color:rgba(147,197,253,0.7);">
              <svg class="h-3.5 w-3.5 shrink-0" style="color:#34d399;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <span class="truncate">app.clinicupapp.com</span>
            </div>
          </div>
          <YoutubeChannelVideoTeaser
            videoSrc={COMECE_DEMO_VIDEO_URL}
            videoAriaLabel="Demonstração do sistema UpClinic: agenda e prontuário"
            ariaLabel="Abrir o canal @drcarloseurico no YouTube"
            teaserLine="@drcarloseurico · YouTube"
          />
        </div>
      </div>
      <p class="mt-3 text-center text-xs sm:text-sm" style="color:rgba(147,197,253,0.65);">
        Use <strong style="color:#dbeafe;">play, pausa e o volume</strong> nos controles do vídeo. No canto inferior direito, o link abre o canal <strong style="color:#dbeafe;">@drcarloseurico</strong>.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary"
           on:click|preventDefault={() => { trackLead('CTA Teste grátis', '/comece após vídeo sistema'); window.open(REGISTER_URL, '_blank'); }}>
          {$t('comece.ctaTest')}
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        <a href="#passos-heading" on:click={(e) => scrollToId(e, 'passos-heading')}
           class="text-sm font-bold underline decoration-white/30 underline-offset-4 hover:decoration-emerald-400" style="color:rgba(191,219,254,0.85);">
          {$t('comece.see6')}
        </a>
      </div>
    </section>

    <!-- Insight -->
    <section use:reveal class="relative overflow-hidden up-glass text-center" style="border-radius:1.5rem; padding:2rem 1.5rem; border-color:rgba(251,191,36,0.3);">
      <div class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full" style="background:rgba(251,146,60,0.25); filter:blur(60px);" aria-hidden="true"></div>
      <p class="relative text-lg font-bold sm:text-xl" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif; color:#fff;">
        {$t('comece.insightPre')}<span style="color:#fbbf24;">{$t('comece.insightHi')}</span>{$t('comece.insightPost')}
      </p>
      <p class="relative mx-auto mt-2 max-w-2xl text-sm sm:text-base" style="color:rgba(191,219,254,0.8);">
        {$t('comece.insightSub')}
      </p>
    </section>

    <!-- Cards passos -->
    <section aria-labelledby="passos-heading">
      <div use:reveal class="text-center">
        <h2 id="passos-heading" class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
          {$t('comece.stepsTitlePre')}<span class="up-gradient-text">{$t('comece.stepsTitleHi')}</span>
        </h2>
        <p class="mx-auto mt-2 text-center text-sm font-semibold" style="color:#6ee7b7;">{$t('comece.stepsSub')}</p>
      </div>
      <ol class="mt-10 grid gap-5 sm:grid-cols-2">
        {#each $t('comece.steps') as p, i}
          <li use:reveal={{ delay: (i % 2) * 90 }} class="up-bento-card up-glass flex flex-col" role="presentation"
              on:mousemove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`); }}
              style="border-radius:1.25rem; padding:1.35rem;">
            <div class="flex items-center gap-3">
              <span class="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black text-white shadow-lg"
                    style="background:linear-gradient(135deg,#34d399,#0d9488); font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{i + 1}</span>
              <svg class="h-6 w-6" style="color:#7dd3fc;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d={stepIcons[i]}/></svg>
            </div>
            <h3 class="mt-3 text-lg font-bold text-white" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{p.titulo}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed" style="color:rgba(191,219,254,0.78);">{p.texto}</p>
            <p class="mt-4 pt-3 text-sm font-semibold leading-snug" style="border-top:1px solid rgba(255,255,255,0.1); color:#6ee7b7;">{p.up}</p>
          </li>
        {/each}
      </ol>
    </section>

    <!-- Vídeo 2 -->
    <section id="video-fidelizacao" use:reveal class="scroll-mt-24 up-glass overflow-hidden" style="border-radius:1.5rem; padding:1.75rem;">
      <div class="mx-auto max-w-3xl text-center">
        <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style="background:rgba(251,146,60,0.12); border:1px solid rgba(251,146,60,0.35); color:#fdba74;">
          {$t('comece.video2Badge')}
        </span>
        <h2 class="mt-3 text-xl font-extrabold text-white sm:text-2xl" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
          {$t('comece.video2Title')}
        </h2>
        <p class="mt-2 text-sm sm:text-base" style="color:rgba(191,219,254,0.8);">
          {$t('comece.video2Sub')}
        </p>
      </div>
      <div class="mx-auto mt-6 max-w-4xl">
        <div class="overflow-hidden" style="border-radius:1.25rem; background:#0b1020; border:1px solid rgba(251,146,60,0.2);">
          <div class="flex items-center gap-3 px-4 py-3 sm:px-5" style="background:rgba(255,255,255,0.04); border-bottom:1px solid rgba(255,255,255,0.08);" aria-hidden="true">
            <span class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-amber-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400/90"></span>
            </span>
            <div class="mx-auto flex min-w-0 flex-1 items-center gap-2 rounded-lg px-3 py-2 font-mono text-[11px] sm:text-xs"
                 style="background:rgba(2,8,40,0.6); color:rgba(147,197,253,0.7);">
              <svg class="h-3.5 w-3.5 shrink-0" style="color:#fdba74;" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
              <span class="truncate">upclinic · vídeo educativo</span>
            </div>
          </div>
          <YoutubeChannelVideoTeaser
            videoSrc={COMECE_FIDELIZACAO_VIDEO_URL}
            videoAriaLabel="Vídeo: seis passos para fidelizar pacientes"
            ariaLabel="Abrir o canal @drcarloseurico no YouTube"
            teaserLine="@drcarloseurico · YouTube"
          />
        </div>
      </div>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary"
           on:click|preventDefault={() => { trackLead('CTA Teste grátis', '/comece após vídeo 6 passos'); window.open(REGISTER_URL, '_blank'); }}>
          {$t('comece.ctaStart2')}
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 text-sm font-bold hover:text-white" style="color:rgba(191,219,254,0.85);"
           on:click={() => trackLead('WhatsApp', '/comece após vídeo 6 passos')}>
          <svg class="h-5 w-5" style="color:#34d399;" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          {$t('comece.ctaTalk')}
        </a>
      </div>
    </section>

    <!-- Métricas com count-up -->
    <section aria-labelledby="metricas-heading">
      <h2 id="metricas-heading" use:reveal class="text-center text-xl font-extrabold text-white sm:text-2xl" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
        {$t('comece.metricsTitlePre')}<span class="up-gradient-text">{$t('comece.metricsTitleHi')}</span>
      </h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div use:reveal class="up-glass" style="padding:1.4rem; border-radius:1.25rem;">
          <p class="text-4xl font-black" style="color:#fbbf24; font-family:'Plus Jakarta Sans',system-ui,sans-serif;"><span use:countUp={{ to: 7, suffix: '×' }}>0</span></p>
          <p class="mt-1 text-sm font-bold text-white">{$t('comece.m1label')}</p>
          <p class="mt-2 text-xs leading-relaxed" style="color:rgba(191,219,254,0.72);">{$t('comece.m1desc')}</p>
        </div>
        <div use:reveal={{ delay: 80 }} class="up-glass" style="padding:1.4rem; border-radius:1.25rem;">
          <p class="text-4xl font-black" style="color:#34d399; font-family:'Plus Jakarta Sans',system-ui,sans-serif;"><span use:countUp={{ to: 37, prefix: '+', suffix: '%' }}>0</span></p>
          <p class="mt-1 text-sm font-bold text-white">{$t('comece.m2label')}</p>
          <p class="mt-2 text-xs leading-relaxed" style="color:rgba(191,219,254,0.72);">{$t('comece.m2desc')}</p>
        </div>
        <div use:reveal={{ delay: 160 }} class="up-glass" style="padding:1.4rem; border-radius:1.25rem;">
          <p class="text-4xl font-black" style="color:#34d399; font-family:'Plus Jakarta Sans',system-ui,sans-serif;"><span use:countUp={{ to: 42, prefix: '−', suffix: '%' }}>0</span></p>
          <p class="mt-1 text-sm font-bold text-white">{$t('comece.m3label')}</p>
          <p class="mt-2 text-xs leading-relaxed" style="color:rgba(191,219,254,0.72);">{$t('comece.m3desc')}</p>
        </div>
      </div>
    </section>

    <!-- FAQ + CTA -->
    <section class="grid gap-8 lg:grid-cols-5 lg:gap-10">
      <div use:reveal class="up-glass lg:col-span-2" style="padding:1.5rem; border-radius:1.25rem;">
        <h2 class="font-bold text-white" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{$t('comece.faqTitle')}</h2>
        <dl class="mt-4 space-y-4 text-sm" style="color:rgba(191,219,254,0.8);">
          <div>
            <dt class="font-semibold text-white">{$t('comece.faqQ1')}</dt>
            <dd class="mt-1">{$t('comece.faqA1')}</dd>
          </div>
          <div>
            <dt class="font-semibold text-white">{$t('comece.faqQ2')}</dt>
            <dd class="mt-1">{$t('comece.faqA2')}</dd>
          </div>
          <div>
            <dt class="font-semibold text-white">{$t('comece.faqQ3')}</dt>
            <dd class="mt-1">{$t('comece.faqA3')}</dd>
          </div>
        </dl>
      </div>
      <div use:reveal={{ delay: 100 }} class="up-glow-border lg:col-span-3">
        <div class="relative flex h-full flex-col justify-center overflow-hidden text-center text-white" style="border-radius:1.5rem; background:linear-gradient(135deg,#071233,#0a1a44 55%,#064e3b); padding:2rem;">
          <div class="up-aurora" style="opacity:0.5;"></div>
          <div class="relative z-[1]">
            <p class="text-xs font-bold uppercase tracking-[0.2em]" style="color:#6ee7b7; font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{$t('comece.nextStep')}</p>
            <p class="mt-2 text-2xl font-extrabold leading-snug sm:text-[1.65rem]" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
              {$t('comece.finalTitle')}
            </p>
            <div class="mt-6 flex flex-col items-center gap-4">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary"
                 on:click|preventDefault={() => { trackLead('CTA Teste grátis', '/comece card final'); window.open(REGISTER_URL, '_blank'); }}>
                {$t('comece.ctaFinal')}
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                 class="text-sm font-semibold underline decoration-white/30 underline-offset-4 hover:text-white" style="color:rgba(191,219,254,0.85);"
                 on:click={() => trackLead('WhatsApp', '/comece card final')}>
                {$t('comece.waShort')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

<!-- Barra mobile fixa -->
<div class="fixed bottom-0 left-0 right-0 z-[60] p-3 md:hidden"
     style="background:rgba(5,11,35,0.92); border-top:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(14px); padding-bottom:max(0.75rem, env(safe-area-inset-bottom, 0px));"
     role="region" aria-label="Ação principal">
  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary" style="width:100%; justify-content:center;"
     on:click|preventDefault={() => { trackLead('CTA Teste grátis', '/comece barra mobile'); window.open(REGISTER_URL, '_blank'); }}>
    {$t('comece.ctaStart')}
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
  </a>
  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
     class="mt-2 flex w-full items-center justify-center gap-1.5 py-2 text-sm font-bold" style="color:rgba(191,219,254,0.85);"
     on:click={() => trackLead('WhatsApp', '/comece barra mobile')}>
    <svg class="h-4 w-4" style="color:#34d399;" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {$t('comece.waShort')}
  </a>
</div>

<Footer />

<style>
  :global(.comece-page) {
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }
  .up-fadein { opacity: 0; transform: translateY(24px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
  .up-in { opacity: 1 !important; transform: none !important; }
</style>
