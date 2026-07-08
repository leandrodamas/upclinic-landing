<script>
  import { reveal } from '$lib/actions/motion';
  import { REGISTER_URL } from '$lib/constants';

  // Segue o mouse para o brilho interno de cada card
  function glow(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
</script>

<section class="relative overflow-hidden" style="background:#050b23; padding-top:6rem; padding-bottom:6rem;">
  <div class="up-grid-overlay" style="opacity:0.4;"></div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div class="text-center max-w-3xl mx-auto mb-12" use:reveal>
      <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4"
        style="background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.35); color:#7dd3fc; text-transform:uppercase; letter-spacing:0.06em;">
        Muito além do prontuário
      </span>
      <h2 style="font-size:clamp(2rem,4vw,3rem); font-weight:900; color:#fff; line-height:1.1; letter-spacing:-0.02em; margin-bottom:1rem;">
        Funcionalidades que <span class="up-gradient-text">poucos sabem que existem</span>
      </h2>
      <p style="color:rgba(191,219,254,0.8); font-size:1.05rem; line-height:1.6;">
        Tudo criado para a realidade da saúde brasileira — e tudo dentro do mesmo sistema.
      </p>
    </div>

    <!-- Bento grid -->
    <div class="up-bento">

      <!-- Home Care GPS (destaque grande) -->
      <div class="up-bento-card up-glow-border up-cell-lg" role="presentation" on:mousemove={glow} use:reveal>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#22c55e,#15803d);">
            <svg width="22" height="22" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
          </div>
          <h3 class="up-cell-title">Atendimento domiciliar com GPS</h3>
          <p class="up-cell-desc">Home Care com rota otimizada, mapa em tempo real, check-in por localização e trânsito ao vivo. Sua equipe na rua, você acompanhando pela tela.</p>
          <!-- mini mapa -->
          <div class="up-map">
            <div class="up-route"></div>
            <span class="up-pin" style="top:20%; left:18%;">A</span>
            <span class="up-pin" style="top:62%; left:52%;">B</span>
            <span class="up-pin up-pin-live" style="top:38%; left:78%;">🚗</span>
          </div>
        </div>
      </div>

      <!-- Injetáveis mapa corporal -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal={{ delay: 60 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#f472b6,#db2777);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2a3 3 0 013 3v2a3 3 0 01-6 0V5a3 3 0 013-3zM6 22v-6a6 6 0 0112 0v6"/></svg>
          </div>
          <h3 class="up-cell-title">Injetáveis & mapa corporal</h3>
          <p class="up-cell-desc">Marque no corpo e na face onde cada aplicação foi feita, com histórico visual por paciente.</p>
        </div>
      </div>

      <!-- IA Médica -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal={{ delay: 120 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#a78bfa,#7c3aed);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <h3 class="up-cell-title">IA médica com seus dados</h3>
          <p class="up-cell-desc">Assistente que entende o prontuário do paciente e sugere condutas com base em evidências.</p>
        </div>
      </div>

      <!-- Telemedicina -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal={{ delay: 60 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#60a5fa,#2563eb);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          </div>
          <h3 class="up-cell-title">Telemedicina integrada</h3>
          <p class="up-cell-desc">Vídeo HD com prontuário sincronizado e prescrição digital assinada, sem instalar nada.</p>
        </div>
      </div>

      <!-- Cobrança recorrente (destaque médio) -->
      <div class="up-bento-card up-glow-border up-cell-wide" role="presentation" on:mousemove={glow} use:reveal={{ delay: 120 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#fbbf24,#f59e0b);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          <h3 class="up-cell-title">Cobrança recorrente automática</h3>
          <p class="up-cell-desc">Planos e assinaturas com cartão via Stripe. O sistema cobra todo mês sozinho e reduz a inadimplência — você não corre mais atrás de pagamento.</p>
          <div class="up-chip-row">
            <span class="up-chip">💳 Cartão recorrente</span>
            <span class="up-chip">📉 -60% inadimplência</span>
            <span class="up-chip">🔁 Renovação automática</span>
          </div>
        </div>
      </div>

      <!-- TISS / Convênios -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#2dd4bf,#0d9488);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <h3 class="up-cell-title">Convênios & TISS/ANS</h3>
          <p class="up-cell-desc">Guias no padrão TISS e faturamento de convênios sem retrabalho.</p>
        </div>
      </div>

      <!-- SNGPC / ANVISA -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal={{ delay: 60 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#f87171,#dc2626);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h3 class="up-cell-title">SNGPC & controle sanitário</h3>
          <p class="up-cell-desc">Controle de medicamentos e escrituração alinhados às exigências da ANVISA.</p>
        </div>
      </div>

      <!-- Lembretes / Fidelização -->
      <div class="up-bento-card up-glow-border" role="presentation" on:mousemove={glow} use:reveal={{ delay: 120 }}>
        <div class="up-cell-inner">
          <div class="up-icon" style="background:linear-gradient(135deg,#34d399,#059669);">
            <svg width="20" height="20" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          </div>
          <h3 class="up-cell-title">Fidelização automática</h3>
          <p class="up-cell-desc">Aniversários, retornos e campanhas por WhatsApp que trazem o paciente de volta.</p>
        </div>
      </div>

    </div>

    <div class="text-center mt-12" use:reveal>
      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary">
        Explorar tudo grátis por 7 dias
      </a>
    </div>
  </div>
</section>

<style>
  .up-bento {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .up-cell-lg { grid-column: span 2; grid-row: span 2; }
  .up-cell-wide { grid-column: span 2; }

  .up-cell-inner {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: 22px;
    border-radius: 1.4rem;
    background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
    display: flex;
    flex-direction: column;
  }
  .up-icon {
    width: 46px; height: 46px; border-radius: 13px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px; box-shadow: 0 8px 20px rgba(0,0,0,0.35);
    flex-shrink: 0;
  }
  .up-cell-title { color: #fff; font-weight: 800; font-size: 1.05rem; margin-bottom: 6px; letter-spacing: -0.01em; }
  .up-cell-desc { color: rgba(191,219,254,0.8); font-size: 0.86rem; line-height: 1.55; }

  .up-chip-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 16px; }
  .up-chip {
    background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
    color: #dbeafe; font-size: 0.72rem; font-weight: 600; padding: 5px 11px; border-radius: 999px;
  }

  /* Mini mapa Home Care */
  .up-map {
    position: relative; margin-top: auto; height: 150px; border-radius: 16px; overflow: hidden;
    background:
      radial-gradient(circle at 30% 30%, rgba(34,197,94,0.12), transparent 50%),
      linear-gradient(135deg,#0b1a2e,#0e2438);
    border: 1px solid rgba(255,255,255,0.08);
    background-image:
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(135deg,#0b1a2e,#0e2438);
    background-size: 26px 26px, 26px 26px, 100% 100%;
  }
  .up-route {
    position: absolute; inset: 0;
    background:
      linear-gradient(90deg, transparent 18%, rgba(52,211,153,0.7) 18%, rgba(52,211,153,0.7) 78%, transparent 78%);
    clip-path: polygon(18% 24%, 52% 66%, 78% 42%, 78% 42%, 52% 66%, 18% 24%);
    display: none;
  }
  .up-pin {
    position: absolute; transform: translate(-50%,-50%);
    width: 24px; height: 24px; border-radius: 50%;
    background: #22c55e; color: #05221a; font-weight: 800; font-size: 0.7rem;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  .up-pin-live { background: transparent; box-shadow: none; font-size: 1.1rem; animation: up-bob 3s ease-in-out infinite; }

  @media (max-width: 900px) {
    .up-bento { grid-template-columns: repeat(2, 1fr); }
    .up-cell-lg { grid-column: span 2; grid-row: span 1; }
    .up-cell-wide { grid-column: span 2; }
  }
  @media (max-width: 560px) {
    .up-bento { grid-template-columns: 1fr; }
    .up-cell-lg, .up-cell-wide { grid-column: span 1; }
  }
</style>
