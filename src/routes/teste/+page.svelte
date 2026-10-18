<!--
  /teste — landing de objetivo único (anúncios + WhatsApp).
  Um CTA só: "Começar meus 7 dias grátis" → app com trial=true, repassando UTMs.
  Sem depoimentos inventados. Tema claro alinhado à nova marca.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { REGISTER_URL, CONTACT } from '$lib/constants';
  import { appendUtmToUrl, captureFirstTouchUtm, withDefaultUtmContent } from '$lib/utm';
  import WellhubIntegration from '$lib/components/WellhubIntegration.svelte';
  import { trackTrialCta } from '$lib/analytics';

  const CTA_LABEL = 'Começar meus 7 dias grátis';

  /** CTA → app login com trial=true + first-touch UTMs (utm_content default: sem_codigo). */
  function buildCtaHref(params: ReturnType<typeof captureFirstTouchUtm>): string {
    const target = new URL(REGISTER_URL); // já contém ?trial=true
    target.searchParams.set('trial', 'true');
    return appendUtmToUrl(target.toString(), withDefaultUtmContent(params));
  }

  let ctaHref = buildCtaHref({ utm_content: 'sem_codigo' });

  // Faixa do Dia dos Professores: só de 08/10/2026 00:00 até 15/10/2026 23:59 (Brasília, UTC-3).
  const DDP_START = Date.parse('2026-10-08T00:00:00-03:00');
  const DDP_END = Date.parse('2026-10-16T00:00:00-03:00');
  let showDdp = false;

  onMount(() => {
    const attribution = captureFirstTouchUtm(window.location.search);
    ctaHref = buildCtaHref(attribution);
    const now = Date.now();
    const preview = new URLSearchParams(window.location.search).get('preview_ddp') === '1';
    showDdp = preview || (now >= DDP_START && now < DDP_END);
  });

  function onCtaClick() {
    trackTrialCta('CTA /teste — começar 7 dias', '/teste');
  }

  const benefits = [
    {
      title: 'Robô de atendimento no seu WhatsApp',
      text: 'Um robô de menu responde o paciente no número da clínica, conectado por QR Code. As conversas ficam no painel do UpClinic para a sua equipe continuar o atendimento.',
      icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
    },
    {
      title: 'Lembrete automático no WhatsApp',
      text: 'Lembrete automático no WhatsApp do paciente 24h e 2h antes da consulta, do seu próprio número. Lembretes ajudam a reduzir faltas.',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    },
    {
      title: 'Tudo num lugar só',
      text: 'Agenda, WhatsApp, prontuário com evolução e financeiro (mensalidades e pacotes) no mesmo login. WhatsApp incluído, sem pagar por mensagem.*',
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
    }
  ];

  const pains = [
    { t: 'Agenda', d: 'Horários ociosos e encaixes sem controle' },
    { t: 'Faltas', d: 'Paciente esquece e a sessão some' },
    { t: 'Evolução', d: 'Histórico espalhado em papel ou planilha' },
    { t: 'Financeiro', d: 'Mensalidades e pacotes difíceis de acompanhar' }
  ];

  const faqs = [
    {
      q: 'Preciso de cartão de crédito?',
      a: 'Não. Você testa 7 dias sem cadastrar nenhuma forma de pagamento.'
    },
    {
      q: 'E depois dos 7 dias?',
      a: 'Você escolhe se quer continuar e qual plano faz sentido. Se não quiser, não acontece nada: sem multa e sem cobrança automática.'
    },
    {
      q: 'Funciona com o meu número de WhatsApp?',
      a: 'Sim. Você conecta o número da clínica lendo um QR Code dentro do UpClinic, igual ao WhatsApp Web. A partir daí, o robô e os lembretes usam o seu número.'
    },
    {
      q: 'Vou pagar por mensagem no WhatsApp?',
      a: 'Não. O WhatsApp já vem incluído no plano, sem tarifa por mensagem.*'
    },
    {
      q: 'Meus dados ficam seguros?',
      a: 'Os dados ficam na nuvem do Google (Firebase), com conexão criptografada (HTTPS) e acesso só com o login da sua equipe. O tratamento de dados está descrito na nossa Política de Privacidade e na página LGPD (links no rodapé).'
    }
  ];
</script>

<svelte:head>
  <title>UpClinic: robô do WhatsApp + agenda num lugar só | Teste 7 dias grátis</title>
  <meta
    name="description"
    content="Lembrete automático no WhatsApp do paciente 24h e 2h antes, direto da sua agenda. Para fisioterapia, pilates e RPG. Teste 7 dias grátis, sem cartão."
  />
  <link rel="canonical" href="https://www.clinicupapp.com/teste" />
  <meta property="og:title" content="UpClinic: robô do WhatsApp + agenda num lugar só" />
  <meta property="og:description" content="Teste 7 dias grátis, sem cartão." />
  <meta property="og:url" content="https://www.clinicupapp.com/teste" />
  <meta name="theme-color" content="#0d9488" />
</svelte:head>

<div class="tp">
  {#if showDdp}
    <div class="tp-ddp" role="note">
      <strong>15 de outubro: Dia do Professor.</strong> Uma homenagem a quem ensina movimento todos os dias, professores de pilates e de RPG.
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
      <div class="tp-hero-visual" aria-hidden="true">
        <img src="/media/hero-pilates.webp" alt="" width="800" height="533" fetchpriority="high" decoding="async" />
      </div>
      <p class="tp-kicker">Para fisioterapia, pilates, RPG e reabilitação</p>
      <h1>Menos faltas. Agenda no automático. <span>Teste grátis 7 dias.</span></h1>
      <p class="tp-sub">
        Robô do WhatsApp, agenda, prontuário e financeiro num lugar só. Lembretes 24h e 2h antes ajudam a reduzir faltas.
        Sem cartão de crédito.
      </p>
      <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
      <ul class="tp-checks" aria-label="Condições do teste">
        <li>✓ Sem cartão</li>
        <li>✓ Cancela quando quiser</li>
        <li>✓ Ajuda pelo WhatsApp</li>
      </ul>
    </section>

    <section class="tp-pains" aria-labelledby="dores-teste">
      <h2 id="dores-teste">O que trava a rotina da clínica</h2>
      <div class="tp-pains-grid">
        {#each pains as p}
          <div class="tp-pain">
            <strong>{p.t}</strong>
            <span>{p.d}</span>
          </div>
        {/each}
      </div>
    </section>

    <section class="tp-demo" aria-label="Exemplo de lembrete automático no WhatsApp">
      <div class="tp-chat">
        <div class="tp-bubble out">Olá, Maria! Lembrete: sua consulta é amanhã às 10:00 com a Dra. Ana.</div>
        <div class="tp-bubble out">Oi, Maria! Sua consulta é hoje às 10:00, daqui a 2 horas. Até já!</div>
        <div class="tp-chip">Enviado sozinho, 24h e 2h antes</div>
      </div>
      <p class="tp-note">Exemplo ilustrativo, com nomes fictícios.</p>
    </section>

    <section class="tp-benefits" aria-labelledby="beneficios">
      <h2 id="beneficios">O que muda na sua rotina</h2>
      <div class="tp-grid">
        {#each benefits as b}
          <article class="tp-card">
            <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d={b.icon} />
            </svg>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="tp-mid">
      <p><strong>7 dias grátis, sem cartão.</strong> Conecte o WhatsApp com um QR Code e veja os lembretes saindo do seu próprio número.</p>
      <a href={ctaHref} class="tp-cta" rel="noopener" on:click={onCtaClick}>{CTA_LABEL}</a>
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
    <p>*Uso justo, conforme as políticas do WhatsApp/Meta, a partir do seu próprio número.</p>
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
    background: linear-gradient(180deg, #f7fbfa 0%, #eef8f6 40%, #ffffff 100%);
    color: #0f1f1c;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    padding-bottom: 88px;
  }
  .tp-ddp {
    background: linear-gradient(90deg, #0d9488, #14b8a6);
    color: #fff;
    text-align: center;
    font-size: 0.85rem;
    line-height: 1.4;
    padding: 9px 14px;
  }
  .tp-header {
    max-width: 960px;
    margin: 0 auto;
    padding: 14px 18px;
  }
  .tp-logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #0f766e;
    font-weight: 800;
    text-decoration: none;
    font-size: 1.15rem;
    font-family: 'Outfit', system-ui, sans-serif;
  }
  .tp-logo img { border-radius: 8px; }
  main { max-width: 960px; margin: 0 auto; padding: 0 18px; }

  .tp-hero {
    position: relative;
    padding: 10px 0 28px;
    text-align: center;
    overflow: hidden;
  }
  .tp-hero-visual {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.18;
  }
  .tp-hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(180deg, #000 20%, transparent 95%);
    -webkit-mask-image: linear-gradient(180deg, #000 20%, transparent 95%);
  }
  .tp-hero > *:not(.tp-hero-visual) { position: relative; z-index: 1; }

  .tp-kicker {
    display: inline-block;
    color: #0d9488;
    background: rgba(13, 148, 136, 0.1);
    border: 1px solid rgba(13, 148, 136, 0.22);
    border-radius: 999px;
    padding: 5px 12px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  h1 {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.75rem, 6vw, 2.85rem);
    line-height: 1.12;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f1f1c;
    margin: 0 0 14px;
  }
  h1 span { color: #0d9488; }
  .tp-sub {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #5b6f6a;
    max-width: 620px;
    margin: 0 auto 22px;
  }
  .tp-cta {
    display: inline-block;
    background: linear-gradient(135deg, #0d9488, #14b8a6);
    color: #fff;
    font-weight: 800;
    font-size: 1.05rem;
    text-decoration: none;
    padding: 16px 26px;
    border-radius: 14px;
    box-shadow: 0 12px 28px rgba(13, 148, 136, 0.28);
    transition: transform 0.15s ease;
  }
  .tp-cta:hover, .tp-cta:focus-visible { transform: translateY(-2px); }
  .tp-cta:focus-visible { outline: 3px solid #99f6e4; outline-offset: 3px; }
  .tp-checks {
    list-style: none;
    padding: 0;
    margin: 14px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 16px;
    font-size: 0.9rem;
    color: #0f766e;
    font-weight: 600;
  }

  .tp-pains { margin: 8px 0 28px; }
  .tp-pains h2, .tp-benefits h2, .tp-faq h2, .tp-final h2 {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: 1.45rem;
    font-weight: 800;
    color: #0f1f1c;
    text-align: center;
    margin: 0 0 18px;
  }
  .tp-pains-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (min-width: 760px) {
    .tp-pains-grid { grid-template-columns: repeat(4, 1fr); }
  }
  .tp-pain {
    background: #fff;
    border: 1px solid rgba(13, 148, 136, 0.12);
    border-radius: 14px;
    padding: 14px;
    text-align: center;
  }
  .tp-pain strong {
    display: block;
    color: #0d9488;
    font-size: 0.95rem;
    margin-bottom: 4px;
  }
  .tp-pain span {
    font-size: 0.82rem;
    color: #5b6f6a;
    line-height: 1.4;
  }

  .tp-demo { margin: 6px auto 34px; max-width: 420px; }
  .tp-chat {
    background: #fff;
    border: 1px solid rgba(13, 148, 136, 0.12);
    border-radius: 20px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 16px 40px rgba(15, 118, 110, 0.08);
  }
  .tp-bubble {
    max-width: 85%;
    padding: 9px 12px;
    border-radius: 12px;
    font-size: 0.88rem;
    line-height: 1.4;
  }
  .tp-bubble.out {
    align-self: flex-start;
    background: #e7f7f4;
    color: #0f1f1c;
    border-top-left-radius: 3px;
  }
  .tp-chip {
    align-self: center;
    background: rgba(13, 148, 136, 0.1);
    color: #0d9488;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
  }
  .tp-note { text-align: center; font-size: 0.7rem; color: #7a908a; margin-top: 6px; }

  .tp-benefits { padding: 10px 0 30px; }
  .tp-grid { display: grid; gap: 14px; }
  @media (min-width: 760px) { .tp-grid { grid-template-columns: repeat(3, 1fr); } }
  .tp-card {
    background: #fff;
    border: 1px solid rgba(13, 148, 136, 0.12);
    border-radius: 16px;
    padding: 18px;
    color: #0d9488;
    box-shadow: 0 10px 28px rgba(15, 118, 110, 0.05);
  }
  .tp-card h3 { color: #0f1f1c; font-size: 1.05rem; font-weight: 800; margin: 10px 0 6px; }
  .tp-card p { color: #5b6f6a; font-size: 0.95rem; line-height: 1.55; margin: 0; }

  .tp-mid, .tp-final {
    text-align: center;
    background: linear-gradient(135deg, rgba(13, 148, 136, 0.08), rgba(240, 121, 106, 0.06));
    border: 1px solid rgba(13, 148, 136, 0.18);
    border-radius: 18px;
    padding: 22px 16px;
    margin: 0 0 30px;
  }
  .tp-mid p { margin: 0 0 14px; line-height: 1.55; color: #3d524d; }
  .tp-faq { margin: 0 auto 30px; max-width: 680px; }
  .tp-faq details {
    border-bottom: 1px solid rgba(13, 148, 136, 0.12);
    padding: 14px 4px;
  }
  .tp-faq summary { cursor: pointer; font-weight: 700; color: #0f1f1c; list-style-position: outside; }
  .tp-faq p { margin: 8px 0 0; color: #5b6f6a; line-height: 1.55; }
  .tp-small { font-size: 0.8rem; color: #0f766e; margin: 12px 0 0; }
  .tp-footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 10px 18px 24px;
    font-size: 0.75rem;
    color: #7a908a;
    text-align: center;
    line-height: 1.6;
  }
  .tp-footer a { color: #0d9488; }
  .tp-sticky {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    background: rgba(247, 251, 250, 0.94);
    border-top: 1px solid rgba(13, 148, 136, 0.12);
    backdrop-filter: blur(10px);
    z-index: 50;
  }
  .tp-sticky .tp-cta { display: block; text-align: center; padding: 14px 18px; }
  @media (min-width: 760px) {
    .tp { padding-bottom: 0; }
    .tp-sticky { display: none; }
  }
  @media (prefers-reduced-motion: reduce) { .tp-cta { transition: none; } }
</style>
