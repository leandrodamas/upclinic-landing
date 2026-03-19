<script>
  let openIndex = null;
  
  const faqs = [
    {
      question: 'Como funciona o sistema UpClinic?',
      answer: 'O UpClinic é um sistema completo de gestão médica que integra prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais. Tudo em uma única plataforma na nuvem, acessível de qualquer dispositivo.'
    },
    {
      question: 'Preciso instalar algum software?',
      answer: 'Não! O UpClinic é 100% baseado em nuvem. Você acessa através do navegador web ou pelos aplicativos mobile (iOS e Android). Não há necessidade de instalação de software no computador.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia end-to-end, backup automático diário e total conformidade com a LGPD. Seus dados são armazenados em servidores seguros com redundância e monitoramento 24/7.'
    },
    {
      question: 'Posso testar antes de contratar?',
      answer: 'Claro! Oferecemos período de teste gratuito para você conhecer todas as funcionalidades. Não é necessário cartão de crédito para começar.'
    }
  ];
  
  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="duvidas-frequentes" class="pt-0 pb-12 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
  <!-- Elementos decorativos de fundo -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Círculos flutuantes decorativos -->
    <div class="absolute top-20 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
    <div class="absolute top-1/2 left-1/2 w-48 h-48 md:w-96 md:h-96 bg-indigo-200/15 rounded-full blur-3xl animate-pulse-slow"></div>
  </div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
      <!-- Lado Esquerdo: FAQ -->
      <div class="relative">
        <!-- Linha decorativa conectando ao título -->
        <div class="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-50"></div>
        
        <!-- Ícones flutuantes decorativos -->
        <div class="hidden lg:block absolute -top-4 -right-4 w-16 h-16 text-blue-400/30 animate-float-icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <div class="mb-6 md:mb-8 relative">
          <!-- Badge decorativo -->
          <div class="inline-flex items-center gap-1 px-2.5 py-1 md:gap-1.5 md:px-3 md:py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-[10px] md:text-xs font-semibold mb-3 md:mb-4 shadow-md">
            <svg class="w-3 h-3 md:w-4 md:h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Suporte Especializado</span>
          </div>
          
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 md:mb-2 relative">
            <span class="relative z-10">FICOU ALGUMA DÚVIDA?</span>
            <!-- Destaque decorativo atrás do título -->
            <span class="absolute -left-1 -top-0.5 md:-left-2 md:-top-1 w-12 h-12 md:w-16 md:h-16 bg-blue-200/30 rounded-full blur-2xl -z-0"></span>
      </h2>
          <p class="text-xs md:text-sm text-gray-600 relative z-10">
        Confira nossas perguntas frequentes
      </p>
    </div>
    
        <div class="space-y-2 relative z-10">
        {#each faqs as faq, index}
            <div class="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm group">
            <button
              type="button"
                class="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 relative"
              on:click={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls="faq-answer-{index}"
            >
                <!-- Ícone decorativo no hover -->
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span class="font-semibold text-gray-900 text-sm flex-1 group-hover:text-blue-700 transition-colors">{faq.question}</span>
                <div class="flex items-center gap-2">
              <svg 
                    class="w-4 h-4 text-gray-500 group-hover:text-blue-600 flex-shrink-0 transition-all duration-200 {openIndex === index ? 'rotate-180' : ''}"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
                </div>
            </button>
            
            {#if openIndex === index}
              <div 
                id="faq-answer-{index}"
                  class="px-4 pb-3 text-gray-700 text-sm leading-relaxed animate-fade-in bg-gradient-to-br from-blue-50/50 to-transparent"
              >
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
      
      <!-- CTA -->
        <div class="mt-6 md:mt-8 relative z-10">
          <p class="text-gray-700 mb-3 md:mb-4 text-xs md:text-sm font-medium">
          Não encontrou a resposta que procurava?
        </p>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
          <a 
            href="/contato"
              class="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            Entre em Contato
          </a>
          <a 
            href="https://wa.me/5562996720296?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20UpClinic"
            target="_blank"
            rel="noopener noreferrer"
              class="btn bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 md:px-6 md:py-2 text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            on:click={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'botao_whatsapp_faq'
                });
              }
            }}
          >
            Falar no WhatsApp
          </a>
          </div>
        </div>
      </div>

      <!-- Lado Direito: Imagem com integração criativa -->
      <div class="hidden lg:block relative pt-0 lg:pt-8">
        <!-- Forma decorativa que conecta a imagem ao texto -->
        <div class="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 opacity-20">
          <svg viewBox="0 0 200 200" class="w-full h-full text-blue-400">
            <path d="M 20 100 Q 50 50, 100 50 Q 150 50, 180 100" stroke="currentColor" stroke-width="3" fill="none" class="animate-draw-line" />
            <circle cx="20" cy="100" r="8" fill="currentColor" class="animate-pulse" />
            <circle cx="180" cy="100" r="8" fill="currentColor" class="animate-pulse" />
          </svg>
        </div>
        
        <!-- Container da imagem com efeito de vazamento -->
        <div class="relative group">
          <!-- Efeito de brilho ao redor -->
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
          
          <!-- Máscara decorativa que "vaza" para a esquerda -->
          <div class="absolute -left-8 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent blur-sm"></div>
          
          <div class="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6 transform group-hover:scale-[1.02] transition-transform duration-500">
            <!-- Decoração superior -->
            <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            
            <!-- Ícones decorativos flutuantes -->
            <div class="absolute top-4 -right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-float-icon-delayed">
              <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <div class="absolute bottom-4 -left-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg animate-float-icon">
              <svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <img 
              src="/equipess.png" 
              alt="UpClinic - Equipe pronta para ajudar"
              class="w-full h-auto rounded-xl object-cover relative z-10 shadow-inner"
            />
            
            <!-- Overlay gradiente sutil na parte inferior -->
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/80 via-transparent to-transparent rounded-b-xl pointer-events-none"></div>
          </div>
          
          <!-- Partículas decorativas -->
          <div class="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          <div class="absolute top-1/4 -right-6 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
          <div class="absolute bottom-1/4 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse-delayed"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }
  
  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    50% {
      transform: translateY(20px) translateX(-15px);
    }
  }
  
  @keyframes float-icon {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }
  
  @keyframes float-icon-delayed {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(10px) rotate(-5deg);
    }
  }
  
  @keyframes pulse-slow {
    0%, 100% {
      opacity: 0.15;
      transform: scale(1);
    }
    50% {
      opacity: 0.25;
      transform: scale(1.1);
    }
  }
  
  @keyframes pulse-delayed {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
  
  @keyframes draw-line {
    0% {
      stroke-dasharray: 0, 200;
    }
    100% {
      stroke-dasharray: 200, 0;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
  }
  
  .animate-float-icon {
    animation: float-icon 3s ease-in-out infinite;
  }
  
  .animate-float-icon-delayed {
    animation: float-icon-delayed 4s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
  
  .animate-pulse-delayed {
    animation: pulse-delayed 2s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .animate-draw-line {
    animation: draw-line 3s ease-in-out infinite;
  }
</style>

