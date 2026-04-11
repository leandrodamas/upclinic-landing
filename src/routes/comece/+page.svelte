<!--
  /comece — visual tech + conversão: hero escuro, grid, vídeos com chrome de app, CTAs reforçados.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import YoutubeChannelVideoTeaser from '$lib/components/YoutubeChannelVideoTeaser.svelte';
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

  const passos = [
    {
      n: 1,
      titulo: 'Agendamento facilitado',
      texto:
        'Resposta ágil e agendamento online: o paciente marca sem burocracia.',
      up: 'No UpClinic: agenda integrada e links de agendamento — menos tempo perdido e menos faltas.'
    },
    {
      n: 2,
      titulo: 'Agenda organizada e lista de espera',
      texto:
        'Quando alguém desmarca, você repreencha o horário na hora, sem buracos.',
      up: 'No UpClinic: visão da agenda, encaixes e fila de espera para ocupar cancelamentos.'
    },
    {
      n: 3,
      titulo: 'Experiência do paciente',
      texto:
        'Conforto e clareza da marcação ao pós-consulta.',
      up: 'No UpClinic: lembretes e comunicação alinhadas à sua marca.'
    },
    {
      n: 4,
      titulo: 'Formas de pagamento',
      texto:
        'Quanto mais opções na recepção, mais facilidade para fechar o atendimento.',
      up: 'No UpClinic: financeiro para registrar e acompanhar receitas, sem planilha solta.'
    },
    {
      n: 5,
      titulo: 'Peça feedback',
      texto:
        'Saiba como foi a consulta e a jornada — decida com base no que o paciente sentiu.',
      up: 'No UpClinic: prontuário e histórico centralizados para melhorar com consistência.'
    },
    {
      n: 6,
      titulo: 'Marketing para quem já é seu paciente',
      texto:
        'Invista em quem já confia em você: retornos e relacionamento contínuo.',
      up: 'No UpClinic: confirmações e comunicação recorrente para fortalecer vínculos e indicações.'
    }
  ];

  const featureChips = ['Agenda inteligente', 'Prontuário', 'Financeiro', 'Nuvem · sem instalar'];

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
    content="Vídeos do UpClinic com controles; canal @drcarloseurico no YouTube. 6 passos para fidelizar pacientes. Agenda, prontuário e financeiro na nuvem. 30 dias grátis."
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

<main class="comece-page min-h-screen overflow-x-hidden bg-slate-50 pb-28 text-slate-900 md:pb-24">
  <!-- Faixa de urgência -->
  <div
    class="relative z-10 border-b border-emerald-500/30 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-emerald-900/20"
  >
    <span class="inline-flex items-center justify-center gap-2">
      <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40"></span>
        <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
      </span>
      30 dias grátis · sem cartão — organize agenda, prontuário e finanças hoje
    </span>
  </div>

  <!-- Hero tech -->
  <section
    class="relative border-b border-white/5 bg-slate-950 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:rounded-b-[2.5rem] lg:pb-24 lg:pt-32"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/25 blur-[100px]"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[110px]"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[min(100%,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[80px]"
      aria-hidden="true"
    ></div>

    <div class="relative z-[1] mx-auto max-w-4xl px-4 text-center sm:px-6">
      {#if mounted}
        <div in:fade={{ duration: 320 }}>
          <p
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/95 backdrop-blur-md"
            style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          >
            <svg class="h-3.5 w-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
              />
            </svg>
            Plataforma em nuvem para clínicas
          </p>

          <h1
            class="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1]"
            style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
            in:fly={{ y: 14, duration: 420, delay: 40 }}
          >
            Agenda,
            <span
              class="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent"
              >prontuário</span
            >
            e pacientes — um sistema que roda seu consultório
          </h1>

          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            in:fly={{ y: 12, duration: 420, delay: 80 }}
          >
            Veja o <strong class="font-semibold text-slate-200">UpClinic em ação</strong> nos vídeos abaixo (com som e
            controles). O link pequeno no canto abre o canal no YouTube. Em seguida, os
            <strong class="font-semibold text-slate-200">6 passos</strong> para fidelizar quem já confia em você — com o que o
            sistema faz em cada etapa.
          </p>

          <div
            class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
            in:fly={{ y: 12, duration: 420, delay: 120 }}
          >
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              class="comece-cta-shimmer group relative inline-flex h-14 min-w-[240px] items-center justify-center gap-2 overflow-hidden rounded-xl px-8 text-base font-bold text-white shadow-xl shadow-emerald-600/35 ring-2 ring-white/20 transition hover:ring-white/35"
              style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
              on:click|preventDefault={() => {
                trackLead('CTA Teste grátis', '/comece hero');
                window.open(REGISTER_URL, '_blank');
              }}
            >
              <span class="relative z-[1]">Começar grátis agora</span>
              <svg
                class="relative z-[1] h-5 w-5 transition group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#demo-sistema"
              on:click={(e) => scrollToId(e, 'demo-sistema')}
              class="inline-flex h-14 min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.07] px-8 text-base font-bold text-white backdrop-blur-sm transition hover:border-emerald-400/50 hover:bg-white/[0.12]"
              style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
            >
              <svg class="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Ver vídeos
            </a>
          </div>

          <ul
            class="mx-auto mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
            in:fly={{ y: 10, duration: 420, delay: 150 }}
          >
            {#each featureChips as chip}
              <li
                class="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm sm:text-sm"
              >
                {chip}
              </li>
            {/each}
          </ul>

          <p
            class="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm"
            in:fade={{ duration: 400, delay: 180 }}
          >
            <span class="flex items-center gap-1.5 text-emerald-400/90">
              <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Sem cartão de crédito
            </span>
            <span class="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline" aria-hidden="true"></span>
            <span class="flex items-center gap-1.5 text-emerald-400/90">
              <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Cancele quando quiser
            </span>
          </p>
        </div>
      {/if}
    </div>
  </section>

  <div class="relative mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:space-y-20 lg:py-20">
    <!-- Fluxo em 3 passos -->
    <nav
      class="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-200/50 sm:grid-cols-3 sm:gap-3 sm:p-6"
      aria-label="Como conhecer o UpClinic"
    >
      <div class="flex gap-3 rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-black text-white shadow-md"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          >1</span
        >
        <div>
          <p class="text-sm font-bold text-slate-900" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            Vídeo na página
          </p>
          <p class="mt-0.5 text-xs text-slate-600">Play e volume nos controles; canto → canal no YouTube.</p>
        </div>
      </div>
      <div class="flex gap-3 rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sm font-black text-white shadow-md"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          >2</span
        >
        <div>
          <p class="text-sm font-bold text-slate-900" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            6 passos + conteúdo
          </p>
          <p class="mt-0.5 text-xs text-slate-600">Cards e vídeo sobre fidelização.</p>
        </div>
      </div>
      <div class="flex gap-3 rounded-xl bg-slate-50/80 p-4 ring-1 ring-slate-100">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-black text-white shadow-md"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          >3</span
        >
        <div>
          <p class="text-sm font-bold text-slate-900" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            Teste grátis
          </p>
          <p class="mt-0.5 text-xs text-slate-600">Abra a conta e use na prática.</p>
        </div>
      </div>
    </nav>

    <!-- Vídeo 1: demo sistema -->
    <section id="demo-sistema" class="scroll-mt-24">
      <div class="flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
        <span
          class="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 sm:mb-0"
        >
          <span class="h-1.5 w-1.5 animate-comece-pulse rounded-full bg-emerald-500"></span>
          Tour do produto
        </span>
      </div>
      <h2
        class="mt-3 text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
        style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
      >
        Veja o UpClinic por dentro
      </h2>
      <p class="mx-auto mt-2 max-w-xl text-center text-slate-600">
        Agenda, pacientes e fluxo do dia a dia — assista abaixo; link discreto no canto inferior para o canal no YouTube.
      </p>

      <div class="mx-auto mt-8 max-w-4xl" in:fade={{ duration: 450 }}>
        <div
          class="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/5"
        >
          <div
            class="flex items-center gap-3 border-b border-white/10 bg-slate-800/95 px-4 py-3 sm:px-5"
            aria-hidden="true"
          >
            <span class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-amber-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400/90"></span>
            </span>
            <div
              class="mx-auto flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-slate-400 sm:text-xs"
            >
              <svg class="h-3.5 w-3.5 shrink-0 text-emerald-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
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
        <p class="mt-3 text-center text-xs text-slate-500 sm:text-sm">
          Use <strong class="font-semibold text-slate-700">play, pausa e o volume</strong> nos controles do vídeo. No canto
          inferior esquerdo, o link pequeno abre o canal <strong class="font-semibold text-slate-700">@drcarloseurico</strong>.
        </p>
      </div>

      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="comece-cta-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8 text-base font-bold text-white shadow-lg shadow-emerald-600/30 ring-1 ring-white/20"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          on:click|preventDefault={() => {
            trackLead('CTA Teste grátis', '/comece após vídeo sistema');
            window.open(REGISTER_URL, '_blank');
          }}
        >
          Quero testar grátis
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a
          href="#passos-heading"
          on:click={(e) => scrollToId(e, 'passos-heading')}
          class="text-sm font-bold text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-emerald-700 hover:decoration-emerald-400"
        >
          Ver os 6 passos abaixo
        </a>
      </div>
    </section>

    <!-- Insight -->
    <section
      class="relative overflow-hidden rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 text-center shadow-lg shadow-amber-900/5 sm:p-8"
    >
      <div
        class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-400/20 blur-3xl"
        aria-hidden="true"
      ></div>
      <p
        class="relative text-lg font-bold text-slate-900 sm:text-xl"
        style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
      >
        Atrair paciente novo pode custar até <span class="text-orange-600">7 vezes mais</span> do que fortalecer quem já
        passa por você.
      </p>
      <p class="relative mx-auto mt-2 max-w-2xl text-sm text-slate-700 sm:text-base">
        O UpClinic organiza a operação. Abaixo: os 6 passos da fidelização — e o que o sistema faz em cada etapa.
      </p>
    </section>

    <!-- Cards passos -->
    <section aria-labelledby="passos-heading">
      <h2
        id="passos-heading"
        class="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
        style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
      >
        Os 6 passos — e o UpClinic em cada um
      </h2>
      <p class="mx-auto mt-2 text-center text-sm font-semibold text-emerald-700">30 dias grátis · sem cartão</p>
      <ol class="mt-10 grid gap-5 sm:grid-cols-2">
        {#each passos as p}
          <li
            class="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md shadow-slate-200/40 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-200/80 hover:shadow-xl hover:shadow-emerald-900/10"
          >
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-sm font-black text-white shadow-lg transition group-hover:from-emerald-600 group-hover:to-teal-700"
              style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
              >{p.n}</span
            >
            <h3
              class="mt-3 text-lg font-bold text-slate-900"
              style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
            >
              {p.titulo}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.texto}</p>
            <p
              class="mt-4 border-t border-slate-100 pt-3 text-sm font-semibold leading-snug text-emerald-800"
            >
              {p.up}
            </p>
          </li>
        {/each}
      </ol>
    </section>

    <!-- Vídeo 2 -->
    <section
      id="video-fidelizacao"
      class="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-xl shadow-slate-300/40 sm:p-8"
    >
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-900"
        >
          Conteúdo completo
        </span>
        <h2
          class="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
        >
          Assista aos 6 passos no vídeo
        </h2>
        <p class="mt-2 text-sm text-slate-600 sm:text-base">
          Fidelização, reputação e indicações — prévia abaixo; clique para assistir no canal @drcarloseurico.
        </p>
      </div>
      <div class="mx-auto mt-6 max-w-4xl" in:fade={{ duration: 450 }}>
        <div
          class="overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-2xl ring-1 ring-orange-500/20"
        >
          <div class="flex items-center gap-3 border-b border-white/10 bg-slate-800/95 px-4 py-3 sm:px-5" aria-hidden="true">
            <span class="flex gap-2">
              <span class="h-3 w-3 rounded-full bg-red-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-amber-400/90"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400/90"></span>
            </span>
            <div
              class="mx-auto flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-slate-950/80 px-3 py-2 font-mono text-[11px] text-slate-400 sm:text-xs"
            >
              <svg class="h-3.5 w-3.5 shrink-0 text-orange-400/90" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                />
              </svg>
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
        <p class="mt-3 text-center text-xs text-slate-500 sm:text-sm">
          Controles para <strong class="font-semibold text-slate-700">play, pausa e som</strong>. Link minúsculo no canto
          inferior esquerdo → canal <strong class="font-semibold text-slate-700">@drcarloseurico</strong>.
        </p>
      </div>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="comece-cta-shimmer inline-flex h-12 w-full max-w-xs items-center justify-center rounded-xl px-8 text-base font-bold text-white shadow-lg sm:w-auto"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          on:click|preventDefault={() => {
            trackLead('CTA Teste grátis', '/comece após vídeo 6 passos');
            window.open(REGISTER_URL, '_blank');
          }}
        >
          Começar grátis
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700"
          on:click={() => trackLead('WhatsApp', '/comece após vídeo 6 passos')}
        >
          <svg class="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>

    <!-- Métricas -->
    <section aria-labelledby="metricas-heading">
      <h2
        id="metricas-heading"
        class="text-center text-xl font-extrabold text-slate-900 sm:text-2xl"
        style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
      >
        Números que importam para a sua agenda
      </h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div
          class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100"
        >
          <p class="text-3xl font-black text-orange-600" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            7×
          </p>
          <p class="mt-1 text-sm font-bold text-slate-900">custo de aquisição</p>
          <p class="mt-2 text-xs leading-relaxed text-slate-600">
            Atrair novo paciente costuma ser bem mais caro do que reter quem já confia em você.
          </p>
        </div>
        <div
          class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-lg shadow-slate-200/50 ring-1 ring-emerald-100"
        >
          <p class="text-3xl font-black text-emerald-600" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            +37%
          </p>
          <p class="mt-1 text-sm font-bold text-slate-900">faturamento médio</p>
          <p class="mt-2 text-xs leading-relaxed text-slate-600">
            Relatado em operações com agenda ativa. Resultados variam.
          </p>
        </div>
        <div
          class="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-lg shadow-slate-200/50 ring-1 ring-emerald-100"
        >
          <p class="text-3xl font-black text-emerald-600" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
            −42%
          </p>
          <p class="mt-1 text-sm font-bold text-slate-900">faltas</p>
          <p class="mt-2 text-xs leading-relaxed text-slate-600">Com confirmação e lista de espera organizadas.</p>
        </div>
      </div>
    </section>

    <!-- FAQ + CTA -->
    <section class="grid gap-8 lg:grid-cols-5 lg:gap-10">
      <div
        class="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-200/40 lg:col-span-2"
      >
        <h2 class="font-bold text-slate-900" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">Dúvidas</h2>
        <dl class="mt-4 space-y-4 text-sm text-slate-600">
          <div>
            <dt class="font-semibold text-slate-900">O UpClinic substitui minha estratégia?</dt>
            <dd class="mt-1">
              Não. Ele organiza agenda, comunicação, prontuário e finanças para você colocar a estratégia em prática.
            </dd>
          </div>
          <div>
            <dt class="font-semibold text-slate-900">Preciso instalar?</dt>
            <dd class="mt-1">Não. Tudo pelo navegador, na nuvem.</dd>
          </div>
          <div>
            <dt class="font-semibold text-slate-900">E se eu não gostar?</dt>
            <dd class="mt-1">Teste sem cartão. Cancele quando quiser.</dd>
          </div>
        </dl>
      </div>
      <div
        class="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 p-8 text-center text-white shadow-2xl shadow-emerald-950/40 lg:col-span-3"
      >
        <div
          class="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden="true"
        ></div>
        <p
          class="relative text-xs font-bold uppercase tracking-[0.2em] text-emerald-400/90"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
        >
          Próximo passo
        </p>
        <p
          class="relative mt-2 text-2xl font-extrabold leading-snug sm:text-[1.65rem]"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
        >
          Abra sua conta em poucos minutos e teste na prática.
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="comece-cta-shimmer relative mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-xl px-8 text-base font-bold text-white shadow-xl ring-2 ring-white/25"
          style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
          on:click|preventDefault={() => {
            trackLead('CTA Teste grátis', '/comece card final');
            window.open(REGISTER_URL, '_blank');
          }}
        >
          Começar teste grátis
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          class="relative mt-4 text-sm font-semibold text-slate-300 underline decoration-slate-500 underline-offset-4 hover:text-white"
          on:click={() => trackLead('WhatsApp', '/comece card final')}
        >
          WhatsApp
        </a>
      </div>
    </section>
  </div>
</main>

<div
  class="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200/80 bg-white/90 p-3 shadow-[0_-12px_40px_rgba(15,23,42,0.12)] backdrop-blur-lg md:hidden"
  style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom, 0px));"
  role="region"
  aria-label="Ação principal"
>
  <a
    href={REGISTER_URL}
    target="_blank"
    rel="noopener noreferrer"
    class="comece-cta-shimmer flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold text-white shadow-lg"
    style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;"
    on:click|preventDefault={() => {
      trackLead('CTA Teste grátis', '/comece barra mobile');
      window.open(REGISTER_URL, '_blank');
    }}
  >
    Começar grátis agora
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </a>
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    class="mt-2 flex w-full items-center justify-center gap-1.5 py-2 text-sm font-bold text-slate-700"
    on:click={() => trackLead('WhatsApp', '/comece barra mobile')}
  >
    <svg class="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
    WhatsApp
  </a>
</div>

<Footer />

<style>
  :global(.comece-page) {
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
  }
</style>
