<script>
  import { onMount } from 'svelte';
  import { LOGIN_URL, REGISTER_URL } from '$lib/constants';
  import { countUp } from '$lib/actions/motion';

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
    requestAnimationFrame(() => setTimeout(() => { visible = true; }, 80));
  });
</script>

<section id="inicio" class="relative w-full overflow-hidden" style="min-height: 100vh; background:#050b23;">

  <!-- Vídeo de fundo -->
  <video autoplay muted loop playsinline aria-hidden="true"
    class="absolute inset-0 w-full h-full object-cover" style="z-index:0; opacity:0.42;">
    <source src="/video%20site1.mp4" type="video/mp4" />
  </video>

  <!-- Overlay de marca -->
  <div class="absolute inset-0" style="z-index:1; background:
    linear-gradient(135deg, rgba(5,11,35,0.92) 0%, rgba(10,22,60,0.82) 42%, rgba(29,78,216,0.42) 72%, rgba(5,11,35,0.86) 100%);"></div>

  <!-- Aurora animada + grid -->
  <div class="up-aurora" style="z-index:1;"></div>
  <div class="up-grid-overlay" style="z-index:1;"></div>

  <!-- Conteúdo -->
  <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
       style="z-index:3; min-height: 100vh; padding-top: 6.5rem; padding-bottom: 7rem;">

    <div class="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

      <!-- Coluna texto -->
      <div class:up-in={visible} class="up-col">
        <!-- Badge diferencial -->
        <div class="inline-flex items-center gap-2 mb-6 up-glass" style="padding:7px 16px; border-radius:999px;">
          <span class="up-pulse-dot" style="width:9px;height:9px;background:#34d399;border-radius:50%;flex-shrink:0;"></span>
          <span style="color:#e0f2fe; font-size:0.8125rem; font-weight:700; letter-spacing:0.01em;">
            WhatsApp incluído · <span style="color:#6ee7b7;">R$ 0 por mensagem</span>
          </span>
        </div>

        <h1 style="font-size: clamp(2.3rem, 5.2vw, 4rem); font-weight:900; line-height:1.05; color:#fff; letter-spacing:-0.03em; margin-bottom:1.25rem;">
          A clínica inteira<br>
          numa só tela —
          <span class="up-gradient-text">viva, integrada<br>e inteligente</span>
        </h1>

        <p style="font-size:1.15rem; color:rgba(219,234,254,0.92); max-width:540px; line-height:1.65; margin-bottom:0.75rem;">
          Prontuário, agenda, telemedicina, financeiro, atendimento domiciliar com GPS,
          IA médica e cobrança automática. Tudo conversando entre si — e o
          <strong style="color:#6ee7b7;">WhatsApp sem cobrar por mensagem</strong>.
        </p>
        <p style="font-size:0.875rem; color:rgba(147,197,253,0.72); margin-bottom:2.25rem;">
          Para consultórios, clínicas e grupos de qualquer especialidade.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-3 mb-8">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary"
             on:click|preventDefault={() => { trackLead('CTA Iniciar Teste', 'Hero'); window.open(REGISTER_URL, '_blank'); }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="flex-shrink:0;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Começar grátis — 7 dias
          </a>
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" class="up-btn-ghost"
             on:click|preventDefault={() => { trackLead('CTA Entrar', 'Hero'); window.open(LOGIN_URL, '_blank'); }}>
            Entrar no UpClinic
          </a>
        </div>

        <!-- Trust -->
        <div style="display:flex; flex-wrap:wrap; gap:1.1rem;">
          {#each ['Sem cartão de crédito', 'Sem taxa de setup', 'Configure em minutos', '100% LGPD'] as item}
            <span style="display:inline-flex; align-items:center; gap:0.375rem; color:rgba(167,210,255,0.82); font-size:0.8125rem;">
              <svg width="16" height="16" fill="#34d399" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              {item}
            </span>
          {/each}
        </div>
      </div>

      <!-- Coluna visual: cards "live" flutuantes -->
      <div class="relative hidden lg:block up-visual" class:up-in={visible} style="height: 520px;">

        <!-- Card agenda -->
        <div class="up-glass up-float absolute" style="top:0; left:4%; width:300px; padding:18px; border-radius:20px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
            <span style="color:#bfdbfe; font-size:0.75rem; font-weight:700;">📅 Agenda de hoje</span>
            <span style="color:#6ee7b7; font-size:0.7rem; font-weight:700;">8 consultas</span>
          </div>
          {#each [['08:00','Maria Oliveira','#34d399'],['09:30','João Pereira','#60a5fa'],['10:15','Ana Souza','#c4b5fd']] as [h,n,c]}
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
              <span style="background:rgba(37,99,235,0.9); color:#fff; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:6px;">{h}</span>
              <span style="color:#e5eefb; font-size:0.78rem; flex:1;">{n}</span>
              <span style="width:8px; height:8px; border-radius:50%; background:{c};"></span>
            </div>
          {/each}
        </div>

        <!-- Card WhatsApp enviado -->
        <div class="up-glass up-float-delayed absolute" style="top:150px; right:2%; width:290px; padding:16px; border-radius:20px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
            <div style="width:30px;height:30px;border-radius:50%;background:#25d366;display:flex;align-items:center;justify-content:center;">
              <svg width="17" height="17" fill="#fff" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.683-1.448L.057 24z"/></svg>
            </div>
            <div>
              <div style="color:#fff; font-size:0.78rem; font-weight:700;">Lembrete enviado</div>
              <div style="color:#86efac; font-size:0.66rem;">automático · custo R$ 0</div>
            </div>
          </div>
          <div style="background:rgba(37,211,102,0.14); border:1px solid rgba(37,211,102,0.3); border-radius:12px 12px 12px 4px; padding:9px 11px;">
            <p style="color:#dcfce7; font-size:0.72rem; line-height:1.4; margin:0;">Olá Maria! Confirmando sua consulta amanhã às 8h. Responda SIM para confirmar 😊</p>
          </div>
          <div style="display:flex; align-items:center; gap:5px; margin-top:8px;">
            <span style="width:6px;height:6px;border-radius:50%;background:#34d399;"></span>
            <span style="color:#a7f3d0; font-size:0.66rem;">Confirmada — falta evitada</span>
          </div>
        </div>

        <!-- Card financeiro / pagamento -->
        <div class="up-glass up-float-slow absolute" style="bottom:8px; left:12%; width:280px; padding:16px; border-radius:20px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
            <span style="color:#bfdbfe; font-size:0.72rem; font-weight:700;">💳 Cobrança recorrente</span>
            <span style="color:#6ee7b7; font-size:0.66rem; font-weight:700;">+18%</span>
          </div>
          <div style="color:#fff; font-size:1.55rem; font-weight:900; line-height:1;">R$ 48.250</div>
          <div style="color:rgba(147,197,253,0.75); font-size:0.68rem; margin-top:3px;">recebido automático este mês</div>
          <div style="height:6px; background:rgba(255,255,255,0.1); border-radius:999px; margin-top:10px; overflow:hidden;">
            <div style="height:100%; width:78%; background:linear-gradient(90deg,#34d399,#10b981); border-radius:999px;"></div>
          </div>
        </div>

        <!-- Selo IA -->
        <div class="up-glass up-float absolute" style="top:36px; right:22%; padding:10px 14px; border-radius:14px; animation-delay:-1.5s;">
          <div style="display:flex; align-items:center; gap:7px;">
            <span style="font-size:1rem;">🧠</span>
            <span style="color:#e9d5ff; font-size:0.72rem; font-weight:700;">IA sugerindo conduta…</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Faixa de estatísticas -->
  <div class="relative w-full" style="z-index:3;
       background: linear-gradient(90deg, rgba(5,11,35,0.96) 0%, rgba(29,78,216,0.88) 50%, rgba(5,11,35,0.96) 100%);
       border-top: 1px solid rgba(255,255,255,0.10); backdrop-filter: blur(12px);">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; text-align:center;">
        <div>
          <div style="font-size:1.7rem; font-weight:900; color:#fff; line-height:1;"><span use:countUp={{ to: 3200, suffix: '+' }}>0</span></div>
          <div style="font-size:0.72rem; color:rgba(147,197,253,0.75); margin-top:0.25rem;">Clínicas ativas</div>
        </div>
        <div>
          <div style="font-size:1.7rem; font-weight:900; color:#fff; line-height:1;"><span use:countUp={{ to: 80, suffix: '%' }}>0</span></div>
          <div style="font-size:0.72rem; color:rgba(147,197,253,0.75); margin-top:0.25rem;">Menos faltas c/ lembretes</div>
        </div>
        <div>
          <div style="font-size:1.7rem; font-weight:900; color:#fff; line-height:1;"><span use:countUp={{ to: 18, suffix: '+' }}>0</span></div>
          <div style="font-size:0.72rem; color:rgba(147,197,253,0.75); margin-top:0.25rem;">Módulos integrados</div>
        </div>
        <div>
          <div style="font-size:1.7rem; font-weight:900; color:#fff; line-height:1;">R$ 0</div>
          <div style="font-size:0.72rem; color:rgba(147,197,253,0.75); margin-top:0.25rem;">Por mensagem no WhatsApp</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .up-col { opacity: 0; transform: translateY(30px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
  .up-visual { opacity: 0; transform: translateY(40px) scale(0.97); transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.15s; }
  .up-in { opacity: 1 !important; transform: none !important; }
</style>
