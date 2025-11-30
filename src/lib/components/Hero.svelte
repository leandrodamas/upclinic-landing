<script>
  import { onMount } from 'svelte';
  import ImageWithFallback from './ImageWithFallback.svelte';
  
  onMount(() => {
    // Animação suave de entrada
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      const elements = document.querySelectorAll('.hero-animate');
      elements.forEach((el) => {
        observer.observe(el);
        // Fallback: mostrar após 500ms mesmo se observer não funcionar
        setTimeout(() => {
          if (!el.classList.contains('animate-fade-in')) {
            el.classList.add('animate-fade-in');
          }
        }, 500);
      });
    }, 100);
  });
</script>

<section id="inicio" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-white">
  <!-- Background sutil e profissional -->
  <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white"></div>
  
  <!-- Padrão geométrico sutil -->
  <div class="absolute inset-0 opacity-[0.03]">
    <div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>
  
  <!-- Elementos decorativos sutis -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
    <div class="absolute bottom-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40"></div>
  </div>
  
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Conteúdo Principal -->
        <div class="hero-animate text-center lg:text-left">
          <!-- Badge profissional -->
          <div class="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8">
            <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm font-semibold text-blue-700">Sistema Certificado e Seguro</span>
          </div>
          
          <!-- Título Principal -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            O futuro da
            <span class="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              gestão médica
            </span>
            é digital
          </h1>
          
          <!-- Descrição -->
          <p class="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Plataforma completa com prontuário eletrônico, telemedicina, gestão financeira e IA médica integrada. 
            <span class="font-semibold text-gray-900">Tudo em um só lugar.</span>
          </p>
          
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12">
            <a 
              href="https://upclinic-aa025.web.app/signup" 
              class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <span>Começar Agora</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#funcionalidades" 
              class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            >
              Ver Demonstração
            </a>
          </div>
          
          <!-- Estatísticas Profissionais -->
          <div class="grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">3.2K+</div>
              <div class="text-sm text-gray-600 font-medium">Clínicas Ativas</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">98.5%</div>
              <div class="text-sm text-gray-600 font-medium">Satisfação</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">24/7</div>
              <div class="text-sm text-gray-600 font-medium">Suporte</div>
            </div>
          </div>
        </div>
        
        <!-- Visual/Dashboard Preview -->
        <div class="hero-animate relative hidden lg:block">
          <div class="relative">
            <!-- Card principal com sombra elegante -->
            <div class="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <!-- Imagem do dashboard -->
              <div class="w-full min-h-[500px] flex items-center justify-center p-4">
                <ImageWithFallback 
                  src="/ChatGPT Image 30 de nov. de 2025, 01_37_20.png"
                  alt="Dashboard UpClinic"
                  class="w-full h-auto max-h-[650px] object-contain"
                  fallback="/ChatGPT Image 30 de nov. de 2025, 01_37_20.png"
                  loading="eager"
                />
              </div>
            </div>
            
            <!-- Elementos decorativos flutuantes -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl rotate-12 opacity-60 blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-2xl -rotate-12 opacity-60 blur-xl"></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

<style>
  .hero-animate {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .hero-animate:not(.animate-fade-in) {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .hero-animate.animate-fade-in {
    opacity: 1;
    transform: translateY(0);
  }
</style>
