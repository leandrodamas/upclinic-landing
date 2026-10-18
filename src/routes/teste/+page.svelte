<script lang="ts">
  import { onMount } from 'svelte';
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { appendUtmToUrl, captureFirstTouchUtm, withDefaultUtmContent } from '$lib/utm';
  import WellhubIntegration from '$lib/components/WellhubIntegration.svelte';
  import { trackTrialCta } from '$lib/analytics';
  import { pickHeroVariant, type HeroVariant } from '$lib/heroVariants';
  import { prefersReducedMotion } from '$lib/actions/gsapMotion';

  const CTA_LABEL = 'Começar meus 7 dias grátis';

  function buildCtaHref(params: ReturnType<typeof captureFirstTouchUtm>): string {
    const target = new URL(REGISTER_URL);
    target.searchParams.set('trial', 'true');
    return appendUtmToUrl(target.toString(), withDefaultUtmContent(params));
  }

  let ctaHref = buildCtaHref({ utm_content: 'sem_codigo' });
  let variant: HeroVariant = pickHeroVariant(1);
  let showVideo = true;

  const DDP_START = Date.parse('2026-10-08T00:00:00-03:00');
  const DDP_END = Date.parse('2026-10-16T00:00:00-03:00');
  let showDdp = false;

  onMount(() => {
    const attribution = captureFirstTouchUtm(window.location.search);
    ctaHref = buildCtaHref(attribution);
    variant = pickHeroVariant();
    const now = Date.now();
    const preview = new URLSearchParams(window.location.search).get('preview_ddp') === '1';
    showDdp = preview || (now >= DDP_START && now < DDP_END);
    showVideo = !prefersReducedMotion();
  });

  function onCtaClick() {
    trackTrialCta('CTA /teste — começar 7 dias', '/teste');
  }

  const benefits = [
    {
      title: 'Robô de atendimento no seu WhatsApp',
      text: 'Menu no número da clínica via QR Code. Conversas no painel do UpClinic para a equipe continuar.',
      img: '/media/recepcao.webp'
    },
    {
      title: 'Lembrete automático 24h e 2h',
      text: 'Do seu próprio número. Ajuda a reduzir faltas sem cobrar por mensagem*.',
      img: '/media/fisio-paciente-card.webp'
    },
    {
      title: 'Tudo num lugar só',
      text: 'Agenda, WhatsApp, prontuário com evolução e financeiro (mensalidades e pacotes).',
      img: '/media/studio-pilates-card.webp'
    }
  ];

  const pains = [
    { t: 'Agenda', d: 'Horários ociosos e encaixes sem controle', img: '/media/reformer-card.webp' },
    { t: 'Faltas', d: 'Paciente esquece e a sessão some', img: '/media/bola-suica-card.webp' },
    { t: 'Evolução', d: 'Histórico espalhado em papel', img: '/media/joelho-card.webp' },
    { t: 'Financeiro', d: 'Mensalidades difíceis de acompanhar', img: '/media/theraband-card.webp' }
  ];

  const faqs = [
    { q: 'Preciso de cartão de crédito?', a: 'Não. Você testa 7 dias sem cadastrar nenhuma forma de pagamento.' },
    { q: 'E depois dos 7 dias?', a: 'Você escolhe se quer continuar. Sem multa e sem cobrança automática.' },
    { q: 'Funciona com o meu WhatsApp?', a: 'Sim. Conecte o número da clínica com QR Code, igual ao WhatsApp Web.' },
    { q: 'Vou pagar por mensagem?', a: 'Não. O WhatsApp já vem incluído no plano, sem tarifa por mensagem*.' },
    { q: 'Meus dados ficam seguros?', a: 'Nuvem Google (Firebase), HTTPS e acesso só com login da equipe. Ver Política de Privacidade e LGPD.' }
  ];
</script>

<svelte:head>
  <title>UpClinic: robô do WhatsApp + agenda | Teste 7 dias grátis</title>
  <meta
    name="description"
    content="Lembrete automático no WhatsApp 24h e 2h antes. Para fisioterapia, pilates e RPG. Teste 7 dias grátis, sem cartão."
  />
  <link rel="canonical" href="https://www.clinicupapp.com/teste" />
  <meta name="theme-color" content="#0d9488" />
</svelte:head>

<div class="tp" style="--accent:{variant.accent};">
  {#if showDdp}
    <div class="tp-ddp" role="note">
      <strong>15 de outubro: Dia do Professor.</strong> Homenagem a quem ensina movimento todos os dias.
    </div>
  {/if}

  <header class="tp-header">
    <a href="/" class="tp-logo">
      <img src="/brand-mark-64.png" alt="" width="32" height="32" />
      <span>UpClinic</span>
    </a>
  </header>

  <main>
    <section class="tp-hero">
      <div class="tp-bg" aria-hidden="true">
        {#if showVideo}
          <video autoplay muted loop playsinline poster="/media/video/hero-poster.jpg" preload="metadata">
            <source src="/media/video/hero-bg.mp4" type="video/mp4" />
          </video>
        {:else}
          <img src={variant.photo} alt="" />
        {/if}
        <div class="tp-veil"></div>
      </div>

      <div class="tp-hero-inner">
        <div class="tp-copy">
          <p class="tp-kicker">{variant.audience}</p>
          <h1>
            Menos faltas. Agenda no automático.
            <span>Teste grátis 7 dias.</span>
          </h1>
          <p class="tp-sub">
            Robô do WhatsApp, agenda, prontuário e financeiro num lugar só. Sem cartão de crédito.
          </p>
          <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
          <ul class="tp-checks">
            <li>✓ Sem cartão</li>
            <li>✓ Cancela quando quiser</li>
            <li>✓ Ajuda pelo WhatsApp</li>
          </ul>
        </div>
        <div class="tp-persona">
          <img src={variant.photo} alt={variant.photoAlt} width="640" height="800" fetchpriority="high" />
        </div>
      </div>
    </section>

    <section class="tp-pains" aria-labelledby="dores-teste">
      <h2 id="dores-teste">O que trava a rotina da clínica</h2>
      <div class="tp-pains-grid">
        {#each pains as p}
          <div class="tp-pain">
            <img src={p.img} alt="" loading="lazy" />
            <strong>{p.t}</strong>
            <span>{p.d}</span>
          </div>
        {/each}
      </div>
    </section>

    <section class="tp-demo" aria-label="Exemplo de lembrete">
      <div class="tp-chat">
        <div class="tp-bubble">Olá, Maria! Lembrete: sua consulta é amanhã às 10:00.</div>
        <div class="tp-bubble">Oi, Maria! Sua consulta é hoje às 10:00, daqui a 2 horas.</div>
        <div class="tp-chip">Enviado sozinho, 24h e 2h antes</div>
      </div>
      <p class="tp-note">Exemplo ilustrativo, nomes fictícios.</p>
    </section>

    <section class="tp-benefits" aria-labelledby="beneficios">
      <h2 id="beneficios">O que muda na sua rotina</h2>
      <div class="tp-grid">
        {#each benefits as b}
          <article class="tp-card">
            <img src={b.img} alt="" loading="lazy" />
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="tp-mid">
      <div class="tp-mid-media" aria-hidden="true">
        {#if showVideo}
          <video autoplay muted loop playsinline preload="none" poster="/media/reformer-card.webp">
            <source src="/media/video/loop-pilates.mp4" type="video/mp4" />
          </video>
        {:else}
          <img src="/media/reformer-card.webp" alt="" />
        {/if}
      </div>
      <div>
        <p><strong>7 dias grátis, sem cartão.</strong> Conecte o WhatsApp com QR Code e veja os lembretes saindo do seu número.</p>
        <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
      </div>
    </section>

    <WellhubIntegration compact />

    <section class="tp-faq" aria-labelledby="duvidas">
      <h2 id="duvidas">Dúvidas rápidas</h2>
      {#each faqs as f}
        <details>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      {/each}
    </section>

    <section class="tp-final">
      <h2>Pronto para testar?</h2>
      <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
      <p class="tp-small">Sem cartão · sem taxa de setup · cancele quando quiser</p>
    </section>
  </main>

  <footer class="tp-footer">
    <p>*Uso justo, conforme políticas do WhatsApp/Meta, a partir do seu próprio número.</p>
    <p>
      UpClinic · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·
      <a href="/politica-privacidade">Privacidade</a> · <a href="/lgpd">LGPD</a>
    </p>
    <p>Wellhub é marca de seu titular.</p>
  </footer>

  <div class="tp-sticky">
    <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
  </div>
</div>

<style>
  .tp {
    min-height: 100vh;
    background: #f7fbfa;
    color: #0f1f1c;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    padding-bottom: 88px;
  }
  .tp-ddp {
    background: linear-gradient(90deg, #0d9488, #14b8a6);
    color: #fff;
    text-align: center;
    font-size: 0.85rem;
    padding: 9px 14px;
  }
  .tp-header { max-width: 1040px; margin: 0 auto; padding: 14px 18px; }
  .tp-logo {
    display: inline-flex; align-items: center; gap: 8px;
    color: #0f766e; font-weight: 800; text-decoration: none;
    font-size: 1.15rem; font-family: 'Outfit', system-ui, sans-serif;
  }
  main { max-width: 1040px; margin: 0 auto; padding: 0 18px; }

  .tp-hero { position: relative; border-radius: 1.5rem; overflow: hidden; margin-bottom: 2rem; }
  .tp-bg { position: absolute; inset: 0; }
  .tp-bg video, .tp-bg img { width: 100%; height: 100%; object-fit: cover; }
  .tp-veil {
    position: absolute; inset: 0;
    background: linear-gradient(100deg, rgba(247,251,250,0.96) 0%, rgba(247,251,250,0.78) 55%, rgba(13,148,136,0.25) 100%);
  }
  .tp-hero-inner {
    position: relative; z-index: 1;
    display: grid; gap: 1.25rem; padding: 1.75rem 1.25rem 2rem;
    align-items: center;
  }
  @media (min-width: 800px) {
    .tp-hero-inner { grid-template-columns: 1.2fr 0.9fr; padding: 2.5rem; }
  }
  .tp-kicker {
    display: inline-block; color: var(--accent, #0d9488);
    background: rgba(13,148,136,0.1); border: 1px solid rgba(13,148,136,0.22);
    border-radius: 999px; padding: 5px 12px; font-size: 0.72rem; font-weight: 800;
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 12px;
  }
  h1 {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.7rem, 5vw, 2.7rem); line-height: 1.12; font-weight: 800;
    letter-spacing: -0.03em; margin: 0 0 12px; color: #0f1f1c;
  }
  h1 span { color: var(--accent, #0d9488); display: block; }
  .tp-sub { font-size: 1.05rem; line-height: 1.6; color: #5b6f6a; margin: 0 0 18px; max-width: 36rem; }
  .tp-cta {
    display: inline-block; background: linear-gradient(135deg, #0d9488, #14b8a6); color: #fff;
    font-weight: 800; font-size: 1.05rem; text-decoration: none; padding: 16px 26px;
    border-radius: 14px; box-shadow: 0 12px 28px rgba(13,148,136,0.28);
  }
  .tp-checks {
    list-style: none; padding: 0; margin: 14px 0 0; display: flex; flex-wrap: wrap;
    gap: 6px 16px; font-size: 0.9rem; color: #0f766e; font-weight: 600;
  }
  .tp-persona img {
    width: 100%; max-height: 360px; object-fit: cover; border-radius: 1.25rem;
    border: 4px solid #fff; box-shadow: 0 20px 48px rgba(15,118,110,0.2);
  }

  .tp-pains { margin: 0 0 2rem; }
  h2 {
    font-family: 'Outfit', system-ui, sans-serif; font-size: 1.45rem; font-weight: 800;
    color: #0f1f1c; text-align: center; margin: 0 0 18px;
  }
  .tp-pains-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  @media (min-width: 760px) { .tp-pains-grid { grid-template-columns: repeat(4, 1fr); } }
  .tp-pain {
    background: #fff; border: 1px solid rgba(13,148,136,0.12); border-radius: 14px;
    overflow: hidden; text-align: center; box-shadow: 0 10px 28px rgba(15,118,110,0.06);
  }
  .tp-pain img { width: 100%; height: 90px; object-fit: cover; display: block; }
  .tp-pain strong { display: block; color: #0d9488; font-size: 0.95rem; margin: 8px 8px 2px; }
  .tp-pain span { display: block; font-size: 0.8rem; color: #5b6f6a; padding: 0 8px 12px; line-height: 1.35; }

  .tp-demo { margin: 0 auto 2rem; max-width: 420px; }
  .tp-chat {
    background: #fff; border: 1px solid rgba(13,148,136,0.12); border-radius: 20px;
    padding: 16px 12px; display: flex; flex-direction: column; gap: 8px;
    box-shadow: 0 16px 40px rgba(15,118,110,0.08);
  }
  .tp-bubble {
    max-width: 85%; padding: 9px 12px; border-radius: 12px 12px 12px 3px;
    font-size: 0.88rem; line-height: 1.4; background: #e7f7f4; color: #0f1f1c;
  }
  .tp-chip {
    align-self: center; background: rgba(13,148,136,0.1); color: #0d9488;
    font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 999px;
  }
  .tp-note { text-align: center; font-size: 0.7rem; color: #7a908a; margin-top: 6px; }

  .tp-benefits { padding: 0 0 2rem; }
  .tp-grid { display: grid; gap: 14px; }
  @media (min-width: 760px) { .tp-grid { grid-template-columns: repeat(3, 1fr); } }
  .tp-card {
    background: #fff; border: 1px solid rgba(13,148,136,0.12); border-radius: 16px;
    overflow: hidden; box-shadow: 0 10px 28px rgba(15,118,110,0.05);
  }
  .tp-card img { width: 100%; height: 140px; object-fit: cover; display: block; }
  .tp-card h3 { color: #0f1f1c; font-size: 1.05rem; font-weight: 800; margin: 12px 14px 6px; }
  .tp-card p { color: #5b6f6a; font-size: 0.95rem; line-height: 1.55; margin: 0 14px 16px; }

  .tp-mid {
    display: grid; gap: 1rem; align-items: center;
    background: linear-gradient(135deg, rgba(13,148,136,0.08), rgba(240,121,106,0.06));
    border: 1px solid rgba(13,148,136,0.18); border-radius: 18px; padding: 1rem;
    margin: 0 0 2rem; text-align: center;
  }
  @media (min-width: 720px) {
    .tp-mid { grid-template-columns: 1fr 1.2fr; text-align: left; padding: 1.25rem; }
  }
  .tp-mid-media { border-radius: 14px; overflow: hidden; min-height: 160px; }
  .tp-mid-media video, .tp-mid-media img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .tp-mid p { margin: 0 0 14px; line-height: 1.55; color: #3d524d; }

  .tp-faq { margin: 0 auto 2rem; max-width: 680px; }
  .tp-faq details { border-bottom: 1px solid rgba(13,148,136,0.12); padding: 14px 4px; }
  .tp-faq summary { cursor: pointer; font-weight: 700; color: #0f1f1c; }
  .tp-faq p { margin: 8px 0 0; color: #5b6f6a; line-height: 1.55; }

  .tp-final {
    text-align: center;
    background: linear-gradient(135deg, rgba(13,148,136,0.1), rgba(240,121,106,0.08));
    border: 1px solid rgba(13,148,136,0.18); border-radius: 18px; padding: 22px 16px; margin: 0 0 30px;
  }
  .tp-small { font-size: 0.8rem; color: #0f766e; margin: 12px 0 0; }
  .tp-footer {
    max-width: 1040px; margin: 0 auto; padding: 10px 18px 24px; font-size: 0.75rem;
    color: #7a908a; text-align: center; line-height: 1.6;
  }
  .tp-footer a { color: #0d9488; }
  .tp-sticky {
    position: fixed; left: 0; right: 0; bottom: 0;
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    background: rgba(247,251,250,0.94); border-top: 1px solid rgba(13,148,136,0.12);
    backdrop-filter: blur(10px); z-index: 50;
  }
  .tp-sticky .tp-cta { display: block; text-align: center; padding: 14px 18px; }
  @media (min-width: 760px) { .tp { padding-bottom: 0; } .tp-sticky { display: none; } }
</style>
