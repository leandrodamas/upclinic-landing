<script>
  import { onMount } from 'svelte';
  import ImageWithFallback from './ImageWithFallback.svelte';
  import { LOGIN_URL, REGISTER_URL, CONTACT } from '$lib/constants';

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

  onMount(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('animate-fade-in'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.hero-animate').forEach(el => {
        observer.observe(el);
        setTimeout(() => { if (!el.classList.contains('animate-fade-in')) el.classList.add('animate-fade-in'); }, 500);
      });
    }, 100);
  });
</script>

<section id="inicio" class="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 md:pt-24 pb-12 md:pb-20">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="max-w-7xl mx-auto">

      <!-- Texto acima da imagem — SEO H1 real em HTML -->
      <div class="hero-animate text-center mb-8 md:mb-10">
        <div class="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Sistema de Gestão Médica · 30 dias grátis, sem cartão
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 tracking-tight">
          Gerencie sua clínica do<br class="hidden sm:block">
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> agendamento ao financeiro</span><br class="hidden sm:block">
          — tudo em um lugar
        </h1>

        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-3">
          Sem planilhas, sem papel, sem sistemas separados. Prontuário eletrônico, agenda inteligente, telemedicina e cobrança integrados em uma plataforma feita para a saúde brasileira.
        </p>
        <p class="text-sm text-gray-500 max-w-xl mx-auto mb-8">
          Para consultórios, clínicas e grupos médicos de qualquer especialidade.
        </p>

        <!-- CTAs principais -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            on:click|preventDefault={() => { trackLead('CTA Iniciar Teste', 'Hero'); window.open(REGISTER_URL, '_blank'); }}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Iniciar Teste Grátis — 30 dias
          </a>

          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-blue-600 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto justify-center"
            on:click|preventDefault={() => { trackLead('CTA Entrar', 'Hero'); window.open(LOGIN_URL, '_blank'); }}
          >
            Entrar no UpClinic
          </a>
        </div>

        <!-- Prova social rápida abaixo dos CTAs -->
        <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mb-10">
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Sem taxa de setup
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Sem cartão de crédito
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Cancele quando quiser
          </span>
          <span class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            100% em conformidade com LGPD
          </span>
        </div>
      </div>

      <!-- Imagem do sistema -->
      <div class="hero-animate relative w-full">
        <div class="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-200/50">
          <ImageWithFallback
            src="/hero-image.png"
            alt="Painel do UpClinic — sistema completo de gestão médica com agenda, prontuário e financeiro"
            className="w-full h-auto object-contain"
            fallback="/hero-image.png"
          />
        </div>
      </div>

      <!-- Estatísticas abaixo da imagem com contexto -->
      <div class="hero-animate grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <div class="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">3.2K+</div>
          <div class="text-sm font-semibold text-gray-800 mt-0.5">Clínicas Ativas</div>
          <div class="text-xs text-gray-500 mt-0.5">usando a plataforma</div>
        </div>
        <div class="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">80%</div>
          <div class="text-sm font-semibold text-gray-800 mt-0.5">Menos Faltas</div>
          <div class="text-xs text-gray-500 mt-0.5">com lembretes automáticos</div>
        </div>
        <div class="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">18+</div>
          <div class="text-sm font-semibold text-gray-800 mt-0.5">Módulos Integrados</div>
          <div class="text-xs text-gray-500 mt-0.5">em uma só plataforma</div>
        </div>
        <div class="text-center bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Seg–Sáb</div>
          <div class="text-sm font-semibold text-gray-800 mt-0.5">Suporte Dedicado</div>
          <div class="text-xs text-gray-500 mt-0.5">8h–18h e Sáb 8h–12h</div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .hero-animate {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  .hero-animate.animate-fade-in {
    opacity: 1;
    transform: translateY(0);
  }
</style>
