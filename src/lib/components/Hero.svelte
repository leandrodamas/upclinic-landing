<script>
  import { onMount } from 'svelte';
  import { LOGIN_URL, REGISTER_URL } from '$lib/constants';

  function trackLead(contentName = 'CTA Principal', source = 'Hero') {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: contentName, content_category: 'SaaS', source }, { eventID: eventId });
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_name: 'Lead', event_id: eventId, event_data: { content_name: contentName, content_category: 'SaaS', source } })
      }).catch(() => {});
    }
    if (window.gtag) window.gtag('event', 'sign_up', { event_category: 'engagement', event_label: source });
  }

  let visible = false;
  onMount(() => {
    requestAnimationFrame(() => setTimeout(() => { visible = true; }, 100));
  });
</script>

<section id="inicio" class="relative w-full overflow-hidden" style="min-height: 100vh;">

  <!-- ══════════════════════════════════
       VÍDEO DE FUNDO
       ══════════════════════════════════ -->
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute inset-0 w-full h-full object-cover"
    style="z-index: 0;"
    aria-hidden="true"
  >
    <source src="/video%20site1.mp4" type="video/mp4" />
  </video>

  <!-- Overlay gradiente — harmoniza com azul da marca e garante legibilidade -->
  <div
    class="absolute inset-0"
    style="
      z-index: 1;
      background: linear-gradient(
        135deg,
        rgba(10, 22, 60, 0.88) 0%,
        rgba(17, 45, 110, 0.80) 40%,
        rgba(29, 78, 216, 0.55) 70%,
        rgba(17, 45, 110, 0.70) 100%
      );
    "
  ></div>

  <!-- ══════════════════════════════════
       CONTEÚDO PRINCIPAL
       ══════════════════════════════════ -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
       style="z-index: 2; min-height: 100vh; padding-top: 5rem; padding-bottom: 5rem;">

    <div class="max-w-3xl" class:visible>

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 mb-6"
           style="background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
                  backdrop-filter: blur(8px); padding: 6px 16px; border-radius: 999px;">
        <span style="width:8px;height:8px;background:#34d399;border-radius:50%;flex-shrink:0;
                     animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;"></span>
        <span style="color:#e0f2fe; font-size:0.875rem; font-weight:600;">
          Sistema de Gestão Médica · 30 dias grátis, sem cartão
        </span>
      </div>

      <!-- H1 -->
      <h1 style="font-size: clamp(2.2rem, 5vw, 3.75rem); font-weight: 900; line-height: 1.1;
                 color: #ffffff; margin-bottom: 1.25rem; letter-spacing: -0.02em;">
        Gerencie sua clínica<br>
        do agendamento<br>
        <span style="background: linear-gradient(90deg, #60c8ff 0%, #a5b4fc 100%);
                     -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                     background-clip: text;">
          ao financeiro
        </span>
        — tudo em um lugar
      </h1>

      <!-- Subheadline -->
      <p style="font-size: 1.125rem; color: rgba(219,234,254,0.90); max-width: 560px;
                line-height: 1.7; margin-bottom: 0.75rem;">
        Sem planilhas, sem papel. Prontuário eletrônico, agenda inteligente,
        telemedicina e cobrança integrados numa plataforma feita para a saúde brasileira.
      </p>
      <p style="font-size: 0.875rem; color: rgba(147,197,253,0.70); margin-bottom: 2.5rem;">
        Para consultórios, clínicas e grupos médicos de qualquer especialidade.
      </p>

      <!-- CTAs -->
      <div class="flex flex-wrap gap-3 mb-8">
        <!-- Botão primário: verde sólido bem visível -->
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-hero-primary"
          on:click|preventDefault={() => { trackLead('CTA Iniciar Teste', 'Hero'); window.open(REGISTER_URL, '_blank'); }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="flex-shrink:0;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          Iniciar Teste Grátis — 30 dias
        </a>

        <!-- Botão secundário: contorno branco bem visível -->
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-hero-secondary"
          on:click|preventDefault={() => { trackLead('CTA Entrar', 'Hero'); window.open(LOGIN_URL, '_blank'); }}
        >
          Entrar no UpClinic
        </a>
      </div>

      <!-- Trust badges -->
      <div style="display:flex; flex-wrap:wrap; gap: 1.25rem;">
        {#each ['Sem cartão de crédito', 'Sem taxa de setup', 'Cancele quando quiser', '100% LGPD'] as item}
          <span style="display:inline-flex; align-items:center; gap:0.375rem;
                       color:rgba(167,210,255,0.80); font-size:0.8125rem;">
            <svg width="16" height="16" fill="#34d399" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            {item}
          </span>
        {/each}
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════
       FAIXA DE ESTATÍSTICAS NA BASE
       ══════════════════════════════════ -->
  <div class="relative w-full" style="z-index: 2;
       background: linear-gradient(90deg, rgba(10,22,60,0.95) 0%, rgba(29,78,216,0.90) 50%, rgba(10,22,60,0.95) 100%);
       border-top: 1px solid rgba(255,255,255,0.10);
       backdrop-filter: blur(12px);">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; text-align: center;">
        {#each [
          { value: '3.2K+', label: 'Clínicas ativas' },
          { value: '80%',   label: 'Menos faltas com lembretes' },
          { value: '18+',   label: 'Módulos integrados' },
          { value: 'Seg–Sáb', label: 'Suporte 8h–18h' }
        ] as stat}
          <div>
            <div style="font-size: 1.625rem; font-weight: 900; color: #fff; line-height:1;">{stat.value}</div>
            <div style="font-size: 0.75rem; color: rgba(147,197,253,0.75); margin-top: 0.25rem;">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>

</section>

<style>
  /* ── Animação de entrada ── */
  .visible {
    animation: heroFade 0.9s ease-out both;
  }
  @keyframes heroFade {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }

  /* ── Botão primário: verde esmeralda ── */
  :global(.btn-hero-primary) {
    display: inline-flex !important;
    align-items: center !important;
    gap: 0.5rem !important;
    padding: 1rem 2rem !important;
    font-size: 1.0625rem !important;
    font-weight: 800 !important;
    color: #ffffff !important;
    background: #10b981 !important;
    border: none !important;
    border-radius: 0.875rem !important;
    text-decoration: none !important;
    cursor: pointer !important;
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.50) !important;
    transition: transform 0.18s ease, box-shadow 0.18s ease !important;
    white-space: nowrap !important;
  }
  :global(.btn-hero-primary:hover) {
    transform: scale(1.05) !important;
    background: #059669 !important;
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.65) !important;
    color: #ffffff !important;
  }

  /* ── Botão secundário: contorno branco ── */
  :global(.btn-hero-secondary) {
    display: inline-flex !important;
    align-items: center !important;
    padding: 1rem 2rem !important;
    font-size: 1.0625rem !important;
    font-weight: 700 !important;
    color: #ffffff !important;
    background: rgba(255, 255, 255, 0.15) !important;
    border: 2.5px solid rgba(255, 255, 255, 0.75) !important;
    border-radius: 0.875rem !important;
    text-decoration: none !important;
    cursor: pointer !important;
    backdrop-filter: blur(8px) !important;
    transition: all 0.18s ease !important;
    white-space: nowrap !important;
  }
  :global(.btn-hero-secondary:hover) {
    background: rgba(255, 255, 255, 0.28) !important;
    border-color: #ffffff !important;
    color: #ffffff !important;
    transform: scale(1.03) !important;
  }
</style>
