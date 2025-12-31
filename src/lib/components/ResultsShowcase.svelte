<script>
  const results = [
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      metric: '80%',
      title: 'Redução de Faltas',
      description: 'Com lembretes automáticos inteligentes',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      metric: '90%',
      title: 'Menos Tempo de Busca',
      description: 'Acesso instantâneo a informações do paciente',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      metric: '+250%',
      title: 'Aumento de Produtividade',
      description: 'Automação de processos administrativos',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      metric: '60%',
      title: 'Redução de Inadimplência',
      description: 'Gestão financeira inteligente e cobranças automáticas',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];
  
  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      role: 'Clínica Médica São Paulo',
      quote: 'O UpClinic transformou completamente nossa gestão. Reduzimos o tempo administrativo em 70% e aumentamos a satisfação dos pacientes.',
      avatar: '/ChatGPT Image 18 de dez. de 2025, 21_59_49.png'
    },
    {
      name: 'Dra. Ana Costa',
      role: 'Clínica de Especialidades',
      quote: 'A agenda inteligente eliminou praticamente todas as faltas. Os lembretes automáticos são um diferencial incrível.',
      avatar: '/ChatGPT Image 18 de dez. de 2025, 21_51_34.png'
    },
    {
      name: 'Dr. Roberto Santos',
      role: 'Consultório Particular',
      quote: 'O prontuário eletrônico é completo e seguro. Conseguimos acessar o histórico de qualquer paciente em segundos.',
      avatar: '/retrato-de-homem.png'
    }
  ];
  
  let currentTestimonial = 0;
  let intervalId;
  
  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
  
  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  }
  
  function goToTestimonial(index) {
    currentTestimonial = index;
  }
</script>

<section class="pt-0 pb-12 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-6 md:mb-8 pt-0">
      <span class="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
        Resultados Comprovados
      </span>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Resultados Reais de Clínicas que Usam UpClinic</h2>
      <p class="text-xs md:text-sm lg:text-base text-gray-600 max-w-3xl mx-auto">
        Veja os números que comprovam a eficácia do nosso sistema na gestão de clínicas médicas
      </p>
    </div>
    
    <!-- Métricas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
      {#each results as result}
        <div class="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100">
          <div class="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br {result.gradient} opacity-5 rounded-bl-full"></div>
          <div class="relative">
            <div class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br {result.gradient} rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={result.icon} />
              </svg>
            </div>
            <div class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br {result.gradient} bg-clip-text text-transparent mb-1.5 md:mb-2">
              {result.metric}
            </div>
            <h3 class="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2">{result.title}</h3>
            <p class="text-xs md:text-sm text-gray-600 leading-relaxed">{result.description}</p>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Depoimentos em Destaque -->
    <div class="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 lg:p-8 border border-gray-100">
      <div class="text-center mb-3 md:mb-4">
        <h3 class="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
          O que nossos clientes dizem
        </h3>
        <p class="text-gray-600 text-[10px] md:text-xs">
          Depoimentos reais de profissionais que transformaram suas clínicas
        </p>
      </div>
      
      <div class="max-w-3xl mx-auto">
        <!-- Depoimento Ativo -->
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-blue-100">
            <div class="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-md">
                {#if typeof testimonials[currentTestimonial].avatar === 'string' && testimonials[currentTestimonial].avatar.startsWith('/')}
                  {@const imageSrc = testimonials[currentTestimonial].avatar.includes(' ') 
                    ? encodeURI(testimonials[currentTestimonial].avatar) 
                    : testimonials[currentTestimonial].avatar}
                  <img 
                    src={imageSrc} 
                    alt={testimonials[currentTestimonial].name}
                    class="w-full h-full object-cover"
                    loading="lazy"
                    on:error={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle fill=%22%23667eea%22 cx=%2250%22 cy=%2250%22 r=%2250%22/%3E%3Ctext fill=%22white%22 font-size=%2240%22 x=%2250%22 y=%2265%22 text-anchor=%22middle%22%3E👨‍⚕️%3C/text%3E%3C/svg%3E';
                    }}
                  />
                {:else}
                  <span class="text-2xl">{testimonials[currentTestimonial].avatar}</span>
                {/if}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-0.5 md:gap-1 mb-1 md:mb-1.5">
                  {#each Array(5) as _}
                    <svg class="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
                <h4 class="text-sm md:text-base font-bold text-gray-900 mb-0.5 truncate">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p class="text-gray-600 text-[10px] md:text-xs mb-2 md:mb-3 truncate">
                  {testimonials[currentTestimonial].role}
                </p>
                <p class="text-gray-700 text-xs md:text-sm leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
              </div>
            </div>
          </div>
          
          <!-- Navegação -->
          <div class="flex items-center justify-between mt-3 md:mt-4">
            <button
              type="button"
              class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
              on:click={prevTestimonial}
              aria-label="Depoimento anterior"
            >
              <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div class="flex gap-1 md:gap-1.5">
              {#each testimonials as _, index}
                <button
                  type="button"
                  class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all {index === currentTestimonial ? 'bg-blue-600 w-5 md:w-6' : 'bg-gray-300 hover:bg-gray-400'}"
                  on:click={() => goToTestimonial(index)}
                  aria-label="Ir para depoimento {index + 1}"
                ></button>
              {/each}
            </div>
            
            <button
              type="button"
              class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all"
              on:click={nextTestimonial}
              aria-label="Próximo depoimento"
            >
              <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA -->
    <div class="mt-8 md:mt-12 lg:mt-16 text-center">
      <div class="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-md md:shadow-lg border border-gray-100 w-full sm:w-auto">
        <div class="text-center sm:text-left">
          <h4 class="text-base md:text-lg font-bold text-gray-900 mb-0.5 md:mb-1">Quer resultados como estes?</h4>
          <p class="text-gray-600 text-xs md:text-sm">Comece sua transformação digital hoje mesmo</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 md:gap-3 w-full sm:w-auto">
          <a 
            href="https://upclinic-aa025.web.app/login"
            class="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 text-xs md:text-sm w-full sm:w-auto text-center"
          >
            Teste Grátis
          </a>
          <a 
            href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20resultados%20do%20UpClinic"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-green-500 hover:bg-green-600 text-white px-4 py-2 md:px-6 text-xs md:text-sm w-full sm:w-auto text-center"
            on:click={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'botao_whatsapp_results_showcase'
                });
              }
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.4s ease-out;
  }
</style>

