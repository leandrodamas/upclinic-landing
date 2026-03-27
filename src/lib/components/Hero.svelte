<script>
  import { onMount } from 'svelte';
  import ImageWithFallback from './ImageWithFallback.svelte';
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
    requestAnimationFrame(() => setTimeout(() => { visible = true; }, 80));
  });
</script>

<section id="inicio" class="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 md:pt-24">

  <!-- Círculos decorativos de fundo -->
  <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-40 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center py-12 lg:py-16">

      <!-- Coluna Esquerda: Texto + CTAs -->
      <div class:visible>

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Sistema para Clínicas · 30 dias grátis, sem cartão
        </div>

        <!-- H1 -->
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-5 tracking-tight">
          Gerencie sua clínica<br>
          do agendamento<br>
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ao financeiro</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg text-gray-600 mb-2 leading-relaxed max-w-md">
          Sem planilhas, sem papel. Prontuário eletrônico, agenda inteligente, telemedicina e cobrança — integrados numa plataforma feita para a saúde brasileira.
        </p>
        <p class="text-sm text-gray-400 mb-8">
          Para consultórios, clínicas e grupos médicos de qualquer especialidade.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3 mb-8">
          <!-- Primário: verde sólido bem visível -->
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-200"
            on:click|preventDefault={() => { trackLead('CTA Iniciar Teste', 'Hero'); window.open(REGISTER_URL, '_blank'); }}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Iniciar Teste Grátis — 30 dias
          </a>

          <!-- Secundário: azul com contorno claro -->
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-blue-700 bg-white border-2 border-blue-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 shadow-sm"
            on:click|preventDefault={() => { trackLead('CTA Entrar', 'Hero'); window.open(LOGIN_URL, '_blank'); }}
          >
            Entrar no UpClinic
          </a>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
          {#each ['Sem cartão de crédito', 'Sem taxa de setup', 'Cancele quando quiser', '100% LGPD'] as item}
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {item}
            </span>
          {/each}
        </div>
      </div>

      <!-- Coluna Direita: Imagem -->
      <div class="relative flex items-center justify-center lg:justify-end" class:visible-delayed={visible}>
        <ImageWithFallback
          src="/hero-image.png"
          alt="UpClinic — sistema de gestão médica com agenda, prontuário e telemedicina integrados"
          className="w-full max-w-xl lg:max-w-full h-auto object-contain"
          fallback="/hero-image.png"
        />
      </div>

    </div>
  </div>

  <!-- Faixa de estatísticas -->
  <div class="bg-blue-600 mt-4">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
        <div>
          <div class="text-2xl font-extrabold">3.2K+</div>
          <div class="text-xs text-blue-200 mt-0.5">Clínicas ativas</div>
        </div>
        <div>
          <div class="text-2xl font-extrabold">80%</div>
          <div class="text-xs text-blue-200 mt-0.5">Redução de faltas</div>
        </div>
        <div>
          <div class="text-2xl font-extrabold">18+</div>
          <div class="text-xs text-blue-200 mt-0.5">Módulos integrados</div>
        </div>
        <div>
          <div class="text-2xl font-extrabold">Seg–Sáb</div>
          <div class="text-xs text-blue-200 mt-0.5">Suporte 8h–18h</div>
        </div>
      </div>
    </div>
  </div>

</section>

<style>
  .visible {
    animation: fadeUp 0.6s ease-out both;
  }
  .visible-delayed {
    animation: fadeUp 0.6s ease-out 0.12s both;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>
