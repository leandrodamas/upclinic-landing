<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/motion';
  import { REGISTER_URL, CONTACT } from '$lib/constants';

  // Mensagens que aparecem em sequência no mockup do celular
  const chat = [
    { from: 'clinic', text: 'Olá, Maria! 👋 Aqui é da Clínica UpVida. Confirmando sua consulta amanhã (Ter) às 08:00 com Dr. Silva.', t: '08:41' },
    { from: 'clinic', text: 'Responda: 1️⃣ Confirmar · 2️⃣ Remarcar', t: '08:41' },
    { from: 'patient', text: '1 ✅', t: '08:43' },
    { from: 'clinic', text: 'Perfeito! Consulta confirmada. Te esperamos 💙 Enviamos a localização e o preparo por aqui.', t: '08:43' },
  ];

  let mounted = false;
  let cycle = 0;
  onMount(() => {
    mounted = true;
    const id = setInterval(() => { cycle += 1; }, 9000); // re-anima o chat periodicamente
    return () => clearInterval(id);
  });

  function trackWhats() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_whatsapp', { event_category: 'engagement', event_label: 'secao_whatsapp_gratis' });
    }
  }
</script>

<section class="relative overflow-hidden" style="background: linear-gradient(180deg,#050b23 0%, #071233 55%, #0a1a44 100%);">
  <div class="up-aurora" style="opacity:0.55;"></div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2; padding-top:6rem; padding-bottom:6rem;">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      <!-- Texto -->
      <div>
        <div use:reveal class="inline-flex items-center gap-2 mb-5" style="background:rgba(37,211,102,0.12); border:1px solid rgba(37,211,102,0.35); padding:6px 14px; border-radius:999px;">
          <span style="font-size:0.95rem;">💬</span>
          <span style="color:#6ee7b7; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.05em;">O diferencial que ninguém te conta</span>
        </div>

        <h2 use:reveal={{ delay: 60 }} style="font-size:clamp(2rem,4vw,3rem); font-weight:900; color:#fff; line-height:1.08; letter-spacing:-0.02em; margin-bottom:1.25rem;">
          WhatsApp integrado.<br>
          <span class="up-gradient-text">Sem pagar por mensagem.</span>
        </h2>

        <p use:reveal={{ delay: 120 }} style="color:rgba(219,234,254,0.9); font-size:1.1rem; line-height:1.7; margin-bottom:1.75rem; max-width:520px;">
          A maioria dos sistemas cobra por SMS ou por mensagem de WhatsApp — e isso vira uma
          conta que só cresce. No UpClinic, os lembretes, confirmações e avisos saem
          direto do seu número, <strong style="color:#6ee7b7;">sem tarifa por envio</strong>.
          Menos faltas, mais consultas, zero custo variável.
        </p>

        <!-- Comparativo de custo -->
        <div use:reveal={{ delay: 180 }} class="grid grid-cols-2 gap-3 mb-8" style="max-width:520px;">
          <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.28); border-radius:16px; padding:16px;">
            <div style="color:#fca5a5; font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">Outros sistemas</div>
            <div style="color:#fff; font-size:1.5rem; font-weight:900; line-height:1;">R$ 0,10–0,45</div>
            <div style="color:rgba(252,165,165,0.85); font-size:0.72rem; margin-top:4px;">por mensagem · some no fim do mês</div>
          </div>
          <div style="background:rgba(37,211,102,0.1); border:1px solid rgba(37,211,102,0.4); border-radius:16px; padding:16px;">
            <div style="color:#6ee7b7; font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:6px;">UpClinic</div>
            <div style="color:#fff; font-size:1.5rem; font-weight:900; line-height:1;">R$ 0,00</div>
            <div style="color:rgba(167,243,208,0.9); font-size:0.72rem; margin-top:4px;">incluído no plano · ilimitado*</div>
          </div>
        </div>

        <div use:reveal={{ delay: 240 }} class="flex flex-wrap gap-3">
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary">
            Ativar meu WhatsApp grátis
          </a>
          <a href={`${CONTACT.whatsappLink}?text=Quero%20saber%20do%20WhatsApp%20sem%20cobran%C3%A7a%20do%20UpClinic`}
             target="_blank" rel="noopener noreferrer" class="up-btn-ghost" on:click={trackWhats}>
            Falar no WhatsApp
          </a>
        </div>
        <p use:reveal={{ delay: 300 }} style="color:rgba(147,197,253,0.6); font-size:0.72rem; margin-top:0.9rem;">
          *Uso justo dentro das políticas oficiais do WhatsApp/Meta, a partir do seu próprio número.
        </p>
      </div>

      <!-- Mockup do celular -->
      <div use:reveal={{ delay: 100, y: 40 }} class="flex justify-center">
        <div class="up-phone">
          <div class="up-phone-notch"></div>
          <!-- Header do chat -->
          <div class="up-chat-header">
            <div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#25d366,#128c7e);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.683-1.448L.057 24z"/></svg>
            </div>
            <div style="flex:1; min-width:0;">
              <div style="color:#fff; font-weight:700; font-size:0.85rem;">Clínica UpVida</div>
              <div style="color:#a7f3d0; font-size:0.68rem;">online · resposta automática</div>
            </div>
            <div style="display:flex; gap:14px; color:rgba(255,255,255,0.7);">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"/></svg>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
            </div>
          </div>

          <!-- Corpo do chat -->
          <div class="up-chat-body">
            {#key cycle}
              {#if mounted}
                {#each chat as m, i}
                  <div class="up-msg" style="animation-delay:{i * 1.1 + 0.3}s; display:flex; justify-content:{m.from === 'patient' ? 'flex-end' : 'flex-start'};">
                    <div class="up-bubble {m.from === 'patient' ? 'up-bubble-out' : 'up-bubble-in'}">
                      <span>{m.text}</span>
                      <span class="up-bubble-time">{m.t} {m.from === 'patient' ? '✓✓' : ''}</span>
                    </div>
                  </div>
                {/each}
                <div class="up-msg" style="animation-delay:{chat.length * 1.1 + 0.5}s; display:flex; justify-content:center;">
                  <span style="background:rgba(37,211,102,0.16); color:#6ee7b7; font-size:0.66rem; font-weight:700; padding:4px 12px; border-radius:999px;">
                    💚 Falta evitada · custo R$ 0,00
                  </span>
                </div>
              {/if}
            {/key}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .up-phone {
    position: relative;
    width: 320px;
    max-width: 82vw;
    height: 620px;
    max-height: 74vh;
    border-radius: 42px;
    background: #0b141a;
    border: 10px solid #05080c;
    box-shadow: 0 40px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .up-phone-notch {
    position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
    width: 120px; height: 22px; background: #05080c; border-radius: 999px; z-index: 5;
  }
  .up-chat-header {
    display: flex; align-items: center; gap: 10px;
    padding: 26px 14px 12px; background: linear-gradient(180deg,#1f2c33,#111b21);
  }
  .up-chat-body {
    flex: 1; padding: 14px 12px; display: flex; flex-direction: column; gap: 8px;
    background:
      linear-gradient(rgba(11,20,26,0.94), rgba(11,20,26,0.94)),
      radial-gradient(circle at 20% 10%, rgba(37,211,102,0.06), transparent 40%);
    overflow: hidden;
  }
  .up-bubble {
    max-width: 82%; padding: 8px 11px 18px; border-radius: 12px; font-size: 0.78rem; line-height: 1.4;
    position: relative;
  }
  .up-bubble-in { background: #1f2c33; color: #e9edef; border-top-left-radius: 3px; }
  .up-bubble-out { background: #005c4b; color: #e9ffe9; border-top-right-radius: 3px; }
  .up-bubble-time { position: absolute; bottom: 4px; right: 9px; font-size: 0.58rem; opacity: 0.6; }
</style>
