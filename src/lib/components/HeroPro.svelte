<script lang="ts">
  import { onMount } from 'svelte';
  import { LOGIN_URL, TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';
  import { pickHeroVariant, type HeroVariant } from '$lib/heroVariants';
  import { playHeroIntro, prefersReducedMotion } from '$lib/actions/gsapMotion';

  let variant: HeroVariant = pickHeroVariant(0);
  let rootEl: HTMLElement;
  let reduceMotion = false;
  let showVideo = true;

  onMount(() => {
    variant = pickHeroVariant();
    reduceMotion = prefersReducedMotion();
    // Em mobile economiza dados: vídeo só se conexão razoável
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) {
      showVideo = false;
    }
    if (window.matchMedia('(max-width: 640px)').matches) {
      // Mobile: poster + foto do personagem; vídeo opcional leve se não save-data
      showVideo = showVideo && !reduceMotion;
    }
    requestAnimationFrame(() => {
      if (rootEl) playHeroIntro(rootEl);
    });
  });
</script>

<section
  bind:this={rootEl}
  id="inicio"
  class="hero"
  style="--accent:{variant.accent}; --accent-soft:{variant.accentSoft};"
>
  <!-- Vídeo de fundo em loop (Pexels) + poster -->
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

  <div class="container hero-grid">
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

      <div class="ctas" data-hero="cta">
        <a
          href={TRIAL_PAGE_URL}
          class="up-btn-primary"
          on:click={() => trackTrialCta('CTA Testar 7 dias', `Hero:${variant.id}`)}
        >
          Teste grátis 7 dias
        </a>
        <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" class="up-btn-ghost">
          Já tenho conta
        </a>
      </div>

      <ul class="trust" data-hero="cta">
        <li>Sem cartão</li>
        <li>Feito por fisioterapeuta</li>
        <li>Configure em minutos</li>
        <li>LGPD</li>
      </ul>
    </div>

    <div class="hero-stage" data-hero="device">
      <!-- Personagem / foto real do público -->
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
      </div>

      <!-- Mockup notebook com UI UpClinic -->
      <div class="laptop" data-hero="float">
        <div class="laptop-lid">
          <div class="laptop-screen">
            <div class="ui-top">
              <span class="ui-dot"></span>
              <span class="ui-dot"></span>
              <span class="ui-dot"></span>
              <strong>UpClinic · Agenda</strong>
            </div>
            <div class="ui-body">
              <aside class="ui-side">
                <div class="ui-nav on">Agenda</div>
                <div class="ui-nav">Prontuário</div>
                <div class="ui-nav">Financeiro</div>
                <div class="ui-nav">WhatsApp</div>
              </aside>
              <div class="ui-main">
                {#each [['08:00', 'Maria O.', 'Pilates'], ['09:30', 'João P.', 'Fisio'], ['10:15', 'Ana S.', 'RPG'], ['14:00', 'Carla M.', 'TO']] as [h, n, t]}
                  <div class="ui-row">
                    <span class="ui-time">{h}</span>
                    <span>{n}</span>
                    <em>{t}</em>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
        <div class="laptop-base"></div>
      </div>

      <!-- Phone float WhatsApp -->
      <div class="phone" data-hero="float">
        <div class="phone-screen">
          <p class="ph-label">Lembrete automático</p>
          <div class="ph-bubble">Olá Maria! Sua sessão é amanhã às 8h. Te esperamos 💚</div>
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
    color: #0f1f1c;
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
    filter: saturate(0.92) brightness(1.05);
  }

  .hero-veil {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(105deg, rgba(247, 251, 250, 0.94) 0%, rgba(247, 251, 250, 0.82) 42%, rgba(247, 251, 250, 0.55) 70%, rgba(13, 148, 136, 0.18) 100%),
      radial-gradient(ellipse 50% 60% at 80% 40%, rgba(240, 121, 106, 0.12), transparent 60%);
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
      grid-template-columns: 1.05fr 1fr;
      gap: 2rem;
      min-height: calc(100vh - 7rem);
    }
  }

  .brand {
    margin: 0 0 0.85rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    font-weight: 800;
    letter-spacing: -0.045em;
    line-height: 0.95;
    color: var(--accent, #0d9488);
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
    color: #0f1f1c;
  }

  .accent-line {
    display: block;
    background: linear-gradient(100deg, var(--accent, #0d9488), #f0796a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sub {
    margin: 0 0 1.5rem;
    max-width: 34rem;
    font-size: 1.08rem;
    line-height: 1.65;
    color: #3d524d;
  }

  .ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .trust {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem 1.1rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: #4a625c;
  }

  .trust li::before {
    content: '✓ ';
    color: var(--accent, #0d9488);
    font-weight: 800;
  }

  .hero-stage {
    position: relative;
    min-height: 420px;
    perspective: 1200px;
  }

  @media (min-width: 1024px) {
    .hero-stage {
      min-height: 520px;
    }
  }

  .persona {
    position: absolute;
    right: 0;
    top: 0;
    width: min(48%, 280px);
    border-radius: 1.4rem;
    overflow: hidden;
    box-shadow: 0 28px 60px rgba(15, 118, 110, 0.22);
    border: 3px solid #fff;
    z-index: 1;
    animation: floaty 7s ease-in-out infinite;
  }

  .persona img {
    display: block;
    width: 100%;
    height: 340px;
    object-fit: cover;
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

  .laptop {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: min(78%, 420px);
    z-index: 2;
    transform: rotateY(-6deg) rotateX(4deg);
    animation: floaty 8s ease-in-out infinite reverse;
  }

  .laptop-lid {
    background: #1a2332;
    border-radius: 12px 12px 0 0;
    padding: 10px 10px 0;
    box-shadow: 0 24px 50px rgba(15, 23, 42, 0.28);
  }

  .laptop-screen {
    background: #f7fbfa;
    border-radius: 6px 6px 0 0;
    overflow: hidden;
    min-height: 220px;
  }

  .laptop-base {
    height: 12px;
    background: linear-gradient(180deg, #cbd5e1, #94a3b8);
    border-radius: 0 0 10px 10px;
    margin: 0 8%;
  }

  .ui-top {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 10px;
    background: #0f766e;
    color: #fff;
    font-size: 0.68rem;
  }

  .ui-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.45);
  }

  .ui-body {
    display: grid;
    grid-template-columns: 88px 1fr;
    min-height: 180px;
  }

  .ui-side {
    background: #e7f7f4;
    padding: 8px;
    font-size: 0.62rem;
    font-weight: 700;
    color: #5b6f6a;
  }

  .ui-nav {
    padding: 6px 6px;
    border-radius: 6px;
    margin-bottom: 4px;
  }

  .ui-nav.on {
    background: #0d9488;
    color: #fff;
  }

  .ui-main {
    padding: 8px 10px;
  }

  .ui-row {
    display: grid;
    grid-template-columns: 44px 1fr auto;
    gap: 6px;
    align-items: center;
    font-size: 0.68rem;
    padding: 6px 0;
    border-bottom: 1px solid rgba(13, 148, 136, 0.1);
    color: #0f1f1c;
  }

  .ui-time {
    background: var(--accent, #0d9488);
    color: #fff;
    font-weight: 800;
    font-size: 0.58rem;
    padding: 2px 4px;
    border-radius: 4px;
    text-align: center;
  }

  .ui-row em {
    font-style: normal;
    color: #5b6f6a;
    font-size: 0.58rem;
  }

  .phone {
    position: absolute;
    right: 6%;
    bottom: 0;
    width: 150px;
    z-index: 3;
    animation: floaty 6.5s ease-in-out infinite;
  }

  .phone-screen {
    background: #fff;
    border-radius: 1.25rem;
    border: 3px solid #0f1f1c;
    padding: 12px 10px;
    box-shadow: 0 18px 40px rgba(15, 118, 110, 0.2);
  }

  .ph-label {
    margin: 0 0 6px;
    font-size: 0.62rem;
    font-weight: 800;
    color: #0d9488;
  }

  .ph-bubble {
    background: #e7f7f4;
    border-radius: 10px 10px 10px 3px;
    padding: 8px;
    font-size: 0.68rem;
    line-height: 1.35;
    color: #0f1f1c;
  }

  .ph-meta {
    margin: 6px 0 0;
    font-size: 0.58rem;
    color: #5b6f6a;
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

  @media (max-width: 720px) {
    .persona {
      width: 42%;
      top: auto;
      bottom: 180px;
    }
    .persona img {
      height: 180px;
    }
    .laptop {
      width: 88%;
      bottom: 100px;
    }
    .phone {
      right: 4%;
      width: 120px;
    }
    .hero-stage {
      min-height: 480px;
      margin-top: 0.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .persona,
    .laptop,
    .phone {
      animation: none !important;
    }
  }
</style>
