<script lang="ts">
  import { onMount } from 'svelte';
  import { LOGIN_URL, TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';
  import { HERO_AVATARS, pickHeroVariant, type HeroVariant } from '$lib/heroVariants';
  import { playHeroIntro, prefersReducedMotion, tilt3d } from '$lib/actions/gsapMotion';

  let variant: HeroVariant = pickHeroVariant(0);
  let rootEl: HTMLElement;
  let reduceMotion = false;
  let showVideo = true;
  let uiTab: 'agenda' | 'prontuario' = 'agenda';

  /** Contadores só de features reais do produto (não inventamos escala). */
  const featureCounters = [
    { label: 'Agenda', value: '1' },
    { label: 'Prontuário', value: '1' },
    { label: 'WhatsApp', value: '∞*' },
    { label: 'Wellhub', value: '✓' }
  ];

  const floatCards = [
    { title: 'Lembrete 24h', sub: 'WhatsApp', img: '/media/fisio-paciente-card.webp' },
    { title: 'Check-in', sub: 'Wellhub', img: '/media/studio-pilates-card.webp' },
    { title: 'Evolução', sub: 'Prontuário', img: '/media/joelho-card.webp' }
  ];

  onMount(() => {
    variant = pickHeroVariant();
    reduceMotion = prefersReducedMotion();
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) {
      showVideo = false;
    }
    if (window.matchMedia('(max-width: 640px)').matches) {
      showVideo = showVideo && !reduceMotion;
    }
    requestAnimationFrame(() => {
      if (rootEl) playHeroIntro(rootEl);
    });

    if (!reduceMotion) {
      const id = window.setInterval(() => {
        uiTab = uiTab === 'agenda' ? 'prontuario' : 'agenda';
      }, 4200);
      return () => clearInterval(id);
    }
  });
</script>

<section
  bind:this={rootEl}
  id="inicio"
  class="hero"
  style="--accent:{variant.accent}; --accent-soft:{variant.accentSoft};"
>
  <div class="hero-media" aria-hidden="true">
    {#if showVideo && !reduceMotion}
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        poster="/media/video/hero-poster.jpg"
      >
        <source src="/media/video/hero-bg.mp4" type="video/mp4" />
      </video>
    {:else}
      <img class="hero-video" src="/media/video/hero-poster.jpg" alt="" width="1280" height="720" />
    {/if}
    <div class="hero-veil"></div>
  </div>

  {#if !reduceMotion}
    <div class="up-particles" aria-hidden="true">
      {#each Array(12) as _, i}
        <span
          class="up-particle"
          style="left:{(i * 8.2) % 100}%; animation-duration:{8 + (i % 5)}s; animation-delay:{-i * 0.7}s;"
        ></span>
      {/each}
    </div>
  {/if}

  <div class="container hero-grid">
    <!-- Coluna esquerda: Z/F — marca → headline → CTA (focal) -->
    <div class="hero-copy">
      <p class="brand" data-hero="brand">UpClinic</p>
      <span class="audience" data-hero="copy" style="background:{variant.accentSoft}; color:{variant.accent};">
        {variant.audience}
      </span>
      <h1 data-hero="copy">
        {variant.headline}
        <span class="accent-line">{variant.headlineAccent}</span>
      </h1>
      <p class="sub" data-hero="copy">{variant.sub}</p>

      <div class="urgency" data-hero="cta">
        <span class="urgency-dot up-pulse-dot"></span>
        Teste grátis 7 dias · sem cartão
      </div>

      <div class="ctas" data-hero="cta">
        <a
          href={TRIAL_PAGE_URL}
          class="up-btn-primary cta-focal"
          on:click={() => trackTrialCta('CTA Testar 7 dias', `Hero:${variant.id}`)}
        >
          Teste grátis 7 dias
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" class="up-btn-ghost">
          Já tenho conta
        </a>
      </div>

      <!-- Pilha de avatares: profissionais usando -->
      <div class="avatar-stack" data-hero="avatar" aria-label="Profissionais de movimento">
        {#each HERO_AVATARS.slice(0, 6) as a, i}
          <img
            src={a.src}
            alt=""
            width="44"
            height="44"
            class="stack-face"
            style="z-index:{6 - i}; margin-left:{i === 0 ? 0 : -10}px;"
            loading="eager"
            decoding="async"
          />
        {/each}
        <span class="stack-label">Profissionais de fisio, pilates e TO</span>
      </div>

      <ul class="trust" data-hero="cta">
        <li>Sem cartão</li>
        <li>Feito por fisioterapeuta</li>
        <li>Configure em minutos</li>
        <li>LGPD</li>
      </ul>

      <div class="feat-row" data-hero="copy" aria-label="Módulos do produto">
        {#each featureCounters as f}
          <div class="feat-chip">
            <strong>{f.value}</strong>
            <span>{f.label}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Coluna direita: mockup + avatares flutuantes (olhar → CTA) -->
    <div class="hero-stage" data-hero="device">
      <!-- Avatares orbitando (fotos recortadas) -->
      {#each HERO_AVATARS as a, i}
        <div
          class="orb orb-{i}"
          data-hero="avatar"
          style="--d:{i * 0.35}s;"
          title={a.role}
        >
          <img src={a.src} alt={a.role} width="72" height="72" loading="lazy" decoding="async" />
          <span class="orb-tag">{a.label}</span>
        </div>
      {/each}

      <!-- Cards flutuantes -->
      {#each floatCards as c, i}
        <div class="bubble bubble-{i}" data-hero="float">
          <img src={c.img} alt="" width="40" height="40" />
          <div>
            <strong>{c.title}</strong>
            <em>{c.sub}</em>
          </div>
        </div>
      {/each}

      <!-- Personagem principal (olhar sugerido à esquerda = CTA) -->
      <div class="persona" data-hero="float">
        <img
          src={variant.photo}
          alt={variant.photoAlt}
          width="720"
          height="900"
          fetchpriority="high"
          decoding="async"
        />
        <span class="persona-tag" style="background:{variant.accent};">Foto real · sessão</span>
        <span class="gaze-hint" aria-hidden="true"></span>
      </div>

      <!-- Mockup notebook com tilt + UI animada -->
      <div class="laptop up-shine" data-hero="float" use:tilt3d={12}>
        <div class="laptop-lid">
          <div class="laptop-screen">
            <div class="ui-top">
              <span class="ui-dot"></span>
              <span class="ui-dot"></span>
              <span class="ui-dot"></span>
              <strong>UpClinic · {uiTab === 'agenda' ? 'Agenda' : 'Prontuário'}</strong>
            </div>
            <div class="ui-tabs">
              <button
                type="button"
                class:on={uiTab === 'agenda'}
                on:click={() => (uiTab = 'agenda')}>Agenda</button
              >
              <button
                type="button"
                class:on={uiTab === 'prontuario'}
                on:click={() => (uiTab = 'prontuario')}>Prontuário</button
              >
            </div>
            <div class="ui-body">
              {#if uiTab === 'agenda'}
                <aside class="ui-side">
                  <div class="ui-nav on">Hoje</div>
                  <div class="ui-nav">Semana</div>
                  <div class="ui-nav">WhatsApp</div>
                  <div class="ui-nav">Financeiro</div>
                </aside>
                <div class="ui-main">
                  {#each [['08:00', 'Maria O.', 'Pilates'], ['09:30', 'João P.', 'Fisio'], ['10:15', 'Ana S.', 'RPG'], ['14:00', 'Carla M.', 'TO']] as [h, n, t], ri}
                    <div class="ui-row" style="animation-delay:{ri * 0.12}s">
                      <span class="ui-time">{h}</span>
                      <span>{n}</span>
                      <em>{t}</em>
                    </div>
                  {/each}
                </div>
              {:else}
                <aside class="ui-side">
                  <div class="ui-nav on">Evolução</div>
                  <div class="ui-nav">Avaliação</div>
                  <div class="ui-nav">Anexos</div>
                </aside>
                <div class="ui-main chart">
                  <p class="chart-title">Sessão · joelho D</p>
                  <div class="bars" aria-hidden="true">
                    <i style="--h:42%"></i>
                    <i style="--h:58%"></i>
                    <i style="--h:70%"></i>
                    <i style="--h:82%"></i>
                  </div>
                  <p class="chart-note">Evolução registrada por sessão</p>
                </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="laptop-base"></div>
      </div>

      <!-- Phone float WhatsApp -->
      <div class="phone" data-hero="float">
        <div class="phone-screen">
          <p class="ph-label">Lembrete automático</p>
          <div class="ph-bubble">Olá Maria! Sua sessão é amanhã às 8h. Te esperamos 🧡</div>
          <p class="ph-meta">24h e 2h antes · R$ 0 / msg*</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    color: #0c1222;
    padding: 6.5rem 0 3.5rem;
  }

  .hero-media {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    filter: saturate(1.05) brightness(1.02);
  }

  .hero-veil {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        105deg,
        rgba(255, 250, 245, 0.96) 0%,
        rgba(255, 250, 245, 0.88) 38%,
        rgba(255, 250, 245, 0.55) 68%,
        rgba(11, 29, 58, 0.28) 100%
      ),
      radial-gradient(ellipse 50% 60% at 78% 38%, rgba(249, 115, 22, 0.22), transparent 60%);
  }

  .hero-grid {
    position: relative;
    z-index: 2;
    display: grid;
    gap: 2.5rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1.02fr 1.08fr;
      gap: 1.5rem;
      min-height: calc(100vh - 7rem);
    }
  }

  .brand {
    margin: 0 0 0.85rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(2.55rem, 5.2vw, 3.85rem);
    font-weight: 800;
    letter-spacing: -0.045em;
    line-height: 0.95;
    color: var(--accent, #f97316);
    text-shadow: 0 2px 24px rgba(249, 115, 22, 0.2);
  }

  .audience {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    margin-bottom: 0.85rem;
  }

  h1 {
    margin: 0 0 1rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.55rem, 3.2vw, 2.35rem);
    font-weight: 700;
    line-height: 1.18;
    letter-spacing: -0.03em;
    color: #0c1222;
  }

  .accent-line {
    display: block;
    background: linear-gradient(100deg, var(--accent, #f97316), #6d28d9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sub {
    margin: 0 0 1rem;
    max-width: 34rem;
    font-size: 1.08rem;
    line-height: 1.65;
    color: #4a5568;
  }

  .urgency {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.85rem;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.28);
    font-size: 0.82rem;
    font-weight: 800;
    color: #c2410c;
  }

  .urgency-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f97316;
    display: inline-block;
  }

  .ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.15rem;
  }

  .cta-focal {
    /* Von Restorff: único elemento saturado/grande */
    font-size: 1.12rem !important;
    padding: 1.15rem 2.1rem !important;
  }

  .avatar-stack {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .stack-face {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 2.5px solid #fff;
    box-shadow: 0 4px 12px rgba(11, 29, 58, 0.18);
  }

  .stack-label {
    font-size: 0.78rem;
    font-weight: 700;
    color: #5c6578;
    margin-left: 0.35rem;
  }

  .trust {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem 1.1rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: #4a5568;
  }

  .trust li::before {
    content: '✓ ';
    color: var(--accent, #f97316);
    font-weight: 800;
  }

  .feat-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .feat-chip {
    display: flex;
    flex-direction: column;
    min-width: 4.5rem;
    padding: 0.45rem 0.7rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(11, 29, 58, 0.08);
    box-shadow: 0 6px 16px rgba(249, 115, 22, 0.08);
  }

  .feat-chip strong {
    font-size: 1rem;
    color: #ea580c;
    line-height: 1.1;
  }

  .feat-chip span {
    font-size: 0.65rem;
    font-weight: 700;
    color: #5c6578;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .hero-stage {
    position: relative;
    min-height: 460px;
    perspective: 1200px;
  }

  @media (min-width: 1024px) {
    .hero-stage {
      min-height: 560px;
    }
  }

  .orb {
    position: absolute;
    z-index: 4;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    overflow: visible;
    animation: floaty 6.5s ease-in-out infinite;
    animation-delay: var(--d, 0s);
  }

  .orb img {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    box-shadow: 0 10px 24px rgba(11, 29, 58, 0.22);
    display: block;
  }

  .orb-tag {
    position: absolute;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%);
    font-size: 0.55rem;
    font-weight: 800;
    white-space: nowrap;
    background: #0b1d3a;
    color: #fff;
    padding: 1px 6px;
    border-radius: 999px;
  }

  /* Posições orbitais — direcionam atenção ao centro/CTA (esquerda) */
  .orb-0 { top: 2%; left: 8%; }
  .orb-1 { top: 8%; right: 2%; width: 64px; height: 64px; }
  .orb-1 img { width: 64px; height: 64px; }
  .orb-2 { top: 38%; left: -2%; }
  .orb-3 { bottom: 28%; left: 4%; width: 52px; height: 52px; }
  .orb-3 img { width: 52px; height: 52px; }
  .orb-4 { top: 22%; right: 18%; }
  .orb-5 { bottom: 8%; left: 28%; }
  .orb-6 { top: 48%; right: -4%; }
  .orb-7 { bottom: 36%; right: 8%; width: 50px; height: 50px; }
  .orb-7 img { width: 50px; height: 50px; }
  .orb-8 { top: -2%; left: 42%; width: 48px; height: 48px; }
  .orb-8 img { width: 48px; height: 48px; }

  .bubble {
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.45rem 0.7rem 0.45rem 0.45rem;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.95);
    border-radius: 1rem;
    box-shadow: 0 14px 32px rgba(11, 29, 58, 0.14);
    backdrop-filter: blur(10px);
    animation: floaty 7s ease-in-out infinite;
  }

  .bubble img {
    width: 36px;
    height: 36px;
    border-radius: 0.65rem;
    object-fit: cover;
  }

  .bubble strong {
    display: block;
    font-size: 0.72rem;
    color: #0c1222;
    line-height: 1.15;
  }

  .bubble em {
    font-style: normal;
    font-size: 0.62rem;
    font-weight: 700;
    color: #ea580c;
  }

  .bubble-0 { top: 12%; left: 18%; }
  .bubble-1 { top: 42%; right: 0; animation-delay: -1.5s; }
  .bubble-2 { bottom: 18%; right: 22%; animation-delay: -3s; }

  .persona {
    position: absolute;
    right: 0;
    top: 4%;
    width: min(46%, 270px);
    border-radius: 1.4rem;
    overflow: hidden;
    box-shadow: 0 28px 60px rgba(11, 29, 58, 0.28);
    border: 3px solid #fff;
    z-index: 1;
    animation: floaty 7s ease-in-out infinite;
  }

  .persona img {
    display: block;
    width: 100%;
    height: 320px;
    object-fit: cover;
    /* Sugere olhar à esquerda (CTA) via enquadramento */
    object-position: 35% center;
  }

  .persona-tag {
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.3rem 0.55rem;
    border-radius: 999px;
  }

  .gaze-hint {
    position: absolute;
    left: -18px;
    top: 42%;
    width: 28px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #f97316);
    border-radius: 2px;
    opacity: 0.7;
  }

  .laptop {
    position: absolute;
    left: 2%;
    bottom: 48px;
    width: min(76%, 430px);
    z-index: 2;
    transform-style: preserve-3d;
    animation: floaty 8s ease-in-out infinite reverse;
  }

  .laptop-lid {
    background: #0b1d3a;
    border-radius: 12px 12px 0 0;
    padding: 10px 10px 0;
    box-shadow: 0 24px 50px rgba(11, 29, 58, 0.35);
  }

  .laptop-screen {
    background: #fffaf5;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    min-height: 230px;
  }

  .laptop-base {
    height: 12px;
    background: linear-gradient(180deg, #cbd5e1, #64748b);
    border-radius: 0 0 10px 10px;
    margin: 0 8%;
  }

  .ui-top {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    background: linear-gradient(90deg, #0b1d3a, #1e1b4b);
    color: #fff;
    font-size: 0.68rem;
  }

  .ui-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
  }

  .ui-tabs {
    display: flex;
    gap: 4px;
    padding: 6px 8px 0;
    background: #fff7ed;
  }

  .ui-tabs button {
    flex: 1;
    border: 0;
    background: transparent;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 6px;
    border-radius: 8px 8px 0 0;
    color: #5c6578;
    cursor: pointer;
  }

  .ui-tabs button.on {
    background: #fff;
    color: #ea580c;
    box-shadow: 0 -1px 0 #fff;
  }

  .ui-body {
    display: grid;
    grid-template-columns: 88px 1fr;
    min-height: 170px;
  }

  .ui-side {
    background: #ffedd5;
    padding: 8px;
    font-size: 0.62rem;
    font-weight: 700;
    color: #5c6578;
  }

  .ui-nav {
    padding: 6px 6px;
    border-radius: 6px;
    margin-bottom: 4px;
  }

  .ui-nav.on {
    background: #f97316;
    color: #fff;
  }

  .ui-main {
    padding: 8px 10px;
    background: #fff;
  }

  .ui-row {
    display: grid;
    grid-template-columns: 44px 1fr auto;
    gap: 6px;
    align-items: center;
    font-size: 0.68rem;
    padding: 6px 0;
    border-bottom: 1px solid rgba(249, 115, 22, 0.12);
    color: #0c1222;
    animation: row-in 0.45s ease both;
  }

  @keyframes row-in {
    from {
      opacity: 0;
      transform: translateX(6px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .ui-time {
    background: var(--accent, #f97316);
    color: #fff;
    font-weight: 800;
    font-size: 0.58rem;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
  }

  .ui-row em {
    font-style: normal;
    color: #5c6578;
    font-size: 0.58rem;
  }

  .chart-title {
    margin: 0 0 8px;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0b1d3a;
  }

  .bars {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    height: 90px;
    padding: 4px 0;
  }

  .bars i {
    flex: 1;
    height: var(--h);
    border-radius: 6px 6px 2px 2px;
    background: linear-gradient(180deg, #fb923c, #ea580c);
    animation: bar-grow 0.8s ease both;
  }

  @keyframes bar-grow {
    from {
      transform: scaleY(0.3);
      transform-origin: bottom;
    }
  }

  .chart-note {
    margin: 8px 0 0;
    font-size: 0.6rem;
    color: #5c6578;
    font-weight: 600;
  }

  .phone {
    position: absolute;
    right: 4%;
    bottom: 0;
    width: 150px;
    z-index: 3;
    animation: floaty 6.5s ease-in-out infinite;
  }

  .phone-screen {
    background: #fff;
    border-radius: 1.25rem;
    border: 3px solid #0b1d3a;
    padding: 12px 10px;
    box-shadow: 0 18px 40px rgba(249, 115, 22, 0.22);
  }

  .ph-label {
    margin: 0 0 6px;
    font-size: 0.62rem;
    font-weight: 800;
    color: #ea580c;
  }

  .ph-bubble {
    background: #ffedd5;
    border-radius: 10px 10px 10px 3px;
    padding: 8px;
    font-size: 0.68rem;
    line-height: 1.35;
    color: #0c1222;
  }

  .ph-meta {
    margin: 6px 0 0;
    font-size: 0.58rem;
    color: #5c6578;
  }

  @keyframes floaty {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 900px) {
    .orb-2,
    .orb-3,
    .orb-6,
    .orb-7,
    .orb-8,
    .bubble-2 {
      display: none;
    }
  }

  @media (max-width: 720px) {
    .persona {
      width: 42%;
      top: auto;
      bottom: 180px;
    }
    .persona img {
      height: 170px;
    }
    .laptop {
      width: 88%;
      bottom: 100px;
    }
    .phone {
      right: 4%;
      width: 118px;
    }
    .hero-stage {
      min-height: 500px;
      margin-top: 0.5rem;
    }
    .orb-0,
    .orb-4 {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .persona,
    .laptop,
    .phone,
    .orb,
    .bubble,
    .ui-row,
    .bars i {
      animation: none !important;
    }
  }
</style>
