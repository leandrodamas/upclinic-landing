<!--
  /teste — landing de objetivo único (anúncios + WhatsApp).
  Um CTA só: "Começar meus 7 dias grátis" → app com trial=true, repassando UTMs.
  Sem depoimentos (só entram depoimentos reais e autorizados).
  Leve: sem Navbar/Footer pesados, sem imagens grandes, sem fontes externas.
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import { REGISTER_URL, CONTACT } from '$lib/constants';

  const CTA_LABEL = 'Começar meus 7 dias grátis';
  const PASS_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
  const DEFAULT_UTMS: Record<string, string> = {
    utm_source: 'site',
    utm_medium: 'landing',
    utm_campaign: 'teste'
  };

  /** Monta o link do teste repassando UTMs (e gclid/fbclid) da URL atual. */
  function buildCtaHref(search: string): string {
    const target = new URL(REGISTER_URL); // já contém ?trial=true
    target.searchParams.set('trial', 'true');
    const incoming = new URLSearchParams(search);
    let hasUtm = false;
    for (const key of PASS_KEYS) {
      const value = incoming.get(key);
      if (value) {
        target.searchParams.set(key, value.slice(0, 200));
        if (key.startsWith('utm_')) hasUtm = true;
      }
    }
    if (!hasUtm) {
      for (const [k, v] of Object.entries(DEFAULT_UTMS)) target.searchParams.set(k, v);
    }
    return target.toString();
  }

  let ctaHref = buildCtaHref('');

  // Faixa do Dia dos Professores: só de 08/10/2026 00:00 até 15/10/2026 23:59 (Brasília, UTC-3).
  const DDP_START = Date.parse('2026-10-08T00:00:00-03:00');
  const DDP_END = Date.parse('2026-10-16T00:00:00-03:00');
  let showDdp = false;

  onMount(() => {
    ctaHref = buildCtaHref(window.location.search);
    const now = Date.now();
    const preview = new URLSearchParams(window.location.search).get('preview_ddp') === '1';
    showDdp = preview || (now >= DDP_START && now < DDP_END);
  });

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
</svelte:head>

<div class="tp">
  {#if showDdp}
    <div class="tp-ddp" role="note">
      🍎 <strong>15 de outubro: Dia do Professor.</strong> Uma homenagem a quem ensina movimento todos os dias, professores de pilates e de RPG.
    </div>
  {/if}

  <header class="tp-header">
    <div class="tp-logo">
      <img src="/brand-mark-64.png" alt="" width="32" height="32" />
      <span>UpClinic</span>
    </div>
  </header>

  <main>
    <section class="tp-hero">
      <p class="tp-kicker">Para fisioterapia, pilates e RPG</p>
      <h1>Seu WhatsApp lembra o paciente da consulta sozinho. <span>Direto da sua agenda.</span></h1>
      <p class="tp-sub">
        Robô do WhatsApp, agenda, prontuário e financeiro num lugar só. Lembretes 24h e 2h antes ajudam a reduzir faltas.
        Teste 7 dias grátis, sem cartão.
      </p>
      <a href={ctaHref} class="tp-cta" rel="noopener">{CTA_LABEL}</a>
      <ul class="tp-checks" aria-label="Condições do teste">
        <li>✓ Sem cartão</li>
        <li>✓ Cancela quando quiser</li>
        <li>✓ Ajuda pelo WhatsApp</li>
      </ul>
    </section>

    <section class="tp-demo" aria-label="Exemplo de lembrete automático no WhatsApp">
      <div class="tp-chat">
        <div class="tp-bubble out">Olá, Maria! 👋 Lembrete: sua consulta é amanhã às 10:00 com a Dra. Ana.</div>
        <div class="tp-bubble out">Oi, Maria! Sua consulta é hoje às 10:00, daqui a 2 horas. Até já! 💙</div>
        <div class="tp-chip">⏰ Enviado sozinho, 24h e 2h antes</div>
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
      <a href={ctaHref} class="tp-cta" rel="noopener">{CTA_LABEL}</a>
    </section>

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
      <a href={ctaHref} class="tp-cta" rel="noopener">{CTA_LABEL}</a>
      <p class="tp-small">Sem cartão · sem taxa de setup · cancele quando quiser</p>
    </section>
  </main>

  <footer class="tp-footer">
    <p>*Uso justo, conforme as políticas do WhatsApp/Meta, a partir do seu próprio número.</p>
    <p>
      UpClinic · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·
      <a href="/politica-privacidade">Privacidade</a> · <a href="/lgpd">LGPD</a>
    </p>
  </footer>

  <div class="tp-sticky">
    <a href={ctaHref} class="tp-cta" rel="noopener">{CTA_LABEL}</a>
  </div>
</div>

<style>
  .tp {
    min-height: 100vh;
    background: #050b23;
    color: #e5eefb;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    padding-bottom: 88px; /* espaço do botão fixo no mobile */
  }
  .tp-ddp {
    background: linear-gradient(90deg, #b91c1c, #dc2626);
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
    color: #fff;
    font-weight: 800;
    text-decoration: none;
    font-size: 1.05rem;
  }
  .tp-logo img { border-radius: 8px; }
  main { max-width: 960px; margin: 0 auto; padding: 0 18px; }
  .tp-hero { padding: 18px 0 28px; text-align: center; }
  .tp-kicker {
    display: inline-block;
    color: #6ee7b7;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.35);
    border-radius: 999px;
    padding: 5px 12px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  h1 {
    font-size: clamp(1.75rem, 6vw, 2.9rem);
    line-height: 1.12;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #fff;
    margin: 0 0 14px;
  }
  h1 span { color: #34d399; }
  .tp-sub {
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(219, 234, 254, 0.9);
    max-width: 620px;
    margin: 0 auto 22px;
  }
  .tp-cta {
    display: inline-block;
    background: linear-gradient(135deg, #10b981, #059669);
    color: #fff;
    font-weight: 800;
    font-size: 1.05rem;
    text-decoration: none;
    padding: 16px 26px;
    border-radius: 14px;
    box-shadow: 0 10px 28px rgba(16, 185, 129, 0.4);
    transition: transform 0.15s ease;
  }
  .tp-cta:hover, .tp-cta:focus-visible { transform: translateY(-2px); }
  .tp-cta:focus-visible { outline: 3px solid #a7f3d0; outline-offset: 3px; }
  .tp-checks {
    list-style: none;
    padding: 0;
    margin: 14px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 16px;
    font-size: 0.9rem;
    color: #a7f3d0;
  }
  .tp-demo { margin: 6px auto 34px; max-width: 420px; }
  .tp-chat {
    background: #0b141a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .tp-bubble {
    max-width: 85%;
    padding: 9px 12px;
    border-radius: 12px;
    font-size: 0.88rem;
    line-height: 1.4;
  }
  .tp-bubble.in { align-self: flex-end; background: #005c4b; color: #e9ffe9; border-top-right-radius: 3px; }
  .tp-bubble.out { align-self: flex-start; background: #1f2c33; color: #e9edef; border-top-left-radius: 3px; }
  .tp-chip {
    align-self: center;
    background: rgba(37, 211, 102, 0.16);
    color: #6ee7b7;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
  }
  .tp-note { text-align: center; font-size: 0.7rem; color: rgba(147, 197, 253, 0.6); margin-top: 6px; }
  h2 { font-size: 1.45rem; font-weight: 900; color: #fff; text-align: center; margin: 0 0 18px; }
  .tp-benefits { padding: 10px 0 30px; }
  .tp-grid { display: grid; gap: 14px; }
  @media (min-width: 760px) { .tp-grid { grid-template-columns: repeat(3, 1fr); } }
  .tp-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 18px;
    color: #34d399;
  }
  .tp-card h3 { color: #fff; font-size: 1.05rem; font-weight: 800; margin: 10px 0 6px; }
  .tp-card p { color: rgba(219, 234, 254, 0.85); font-size: 0.95rem; line-height: 1.55; margin: 0; }
  .tp-mid, .tp-final {
    text-align: center;
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 18px;
    padding: 22px 16px;
    margin: 0 0 30px;
  }
  .tp-mid p { margin: 0 0 14px; line-height: 1.55; }
  .tp-faq { margin: 0 auto 30px; max-width: 680px; }
  .tp-faq details {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 14px 4px;
  }
  .tp-faq summary { cursor: pointer; font-weight: 700; color: #fff; list-style-position: outside; }
  .tp-faq p { margin: 8px 0 0; color: rgba(219, 234, 254, 0.85); line-height: 1.55; }
  .tp-small { font-size: 0.8rem; color: rgba(167, 243, 208, 0.85); margin: 12px 0 0; }
  .tp-footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 10px 18px 24px;
    font-size: 0.75rem;
    color: rgba(147, 197, 253, 0.7);
    text-align: center;
    line-height: 1.6;
  }
  .tp-footer a { color: inherit; }
  .tp-sticky {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    background: rgba(5, 11, 35, 0.94);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 50;
  }
  .tp-sticky .tp-cta { display: block; text-align: center; padding: 14px 18px; }
  @media (min-width: 760px) {
    .tp { padding-bottom: 0; }
    .tp-sticky { display: none; }
  }
  @media (prefers-reduced-motion: reduce) { .tp-cta { transition: none; } }
</style>
