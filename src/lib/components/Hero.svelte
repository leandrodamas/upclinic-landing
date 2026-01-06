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

<section id="inicio" class="relative w-full overflow-hidden bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
  <div class="container mx-auto px-2 sm:px-3 md:px-4 lg:px-6 relative z-10 w-full">
    <div class="max-w-7xl mx-auto">
      <!-- Layout limpo e organizado -->
      <div class="flex flex-col items-center w-full">
        
        <!-- Imagem Principal com Overlay de CTAs e Estatísticas -->
        <div class="hero-animate relative w-full">
          <div class="relative w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
            <ImageWithFallback 
              src="/hero-image.png"
              alt="UpClinic - Tecnologia que impulsiona sua clínica"
              className="w-full h-auto object-contain sm:object-cover"
              fallback="/hero-image.png"
            />
            
            <!-- Overlay com posicionamento inteligente -->
            <div class="absolute inset-0 flex flex-col">
              
              <!-- Topo: Badge - apenas em desktop para não sobrepor conteúdo -->
              <div class="hidden sm:flex justify-start pt-3 md:pt-4 lg:pt-6 px-3 md:px-4 lg:px-6">
                <div class="inline-flex items-center space-x-1.5 bg-white/95 backdrop-blur-sm border border-blue-100 px-2.5 py-1 rounded-full shadow-md">
                  <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-xs font-semibold text-blue-700">Sistema Certificado</span>
                </div>
              </div>
              
              <!-- Espaço flexível no meio para não sobrepor conteúdo importante da imagem -->
              <div class="flex-1 min-h-[45%] sm:min-h-[40%] md:min-h-0"></div>
              
              <!-- Rodapé: CTAs e Estatísticas - posicionados na parte inferior -->
              <div class="flex flex-col gap-2 sm:gap-2.5 md:gap-3 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 px-2 sm:px-3 md:px-4 lg:px-6">
                
                <!-- CTAs - Compactos e responsivos -->
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
                  <a 
                    href="https://upclinic-aa025.web.app/login" 
                    class="group relative inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm bg-opacity-95 whitespace-nowrap"
                  >
                    <span>Começar Agora</span>
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a 
                    href="#funcionalidades" 
                    class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base font-semibold text-gray-800 bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 whitespace-nowrap"
                  >
                    Ver Demonstração
                  </a>
                </div>
                
                <!-- Estatísticas - Compactas e legíveis -->
                <div class="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5 max-w-sm sm:max-w-md mx-auto w-full">
                  <div class="text-center bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 shadow-md">
                    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-0.5 sm:mb-1">3.2K+</div>
                    <div class="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">Clínicas Ativas</div>
                  </div>
                  <div class="text-center bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 shadow-md">
                    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-0.5 sm:mb-1">98.5%</div>
                    <div class="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">Satisfação</div>
                  </div>
                  <div class="text-center bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 md:p-3 shadow-md">
                    <div class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-0.5 sm:mb-1">24/7</div>
                    <div class="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight">Suporte</div>
                  </div>
                </div>
              </div>
            </div>
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
