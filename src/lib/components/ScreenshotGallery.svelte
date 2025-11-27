<script>
  import { onMount } from 'svelte';
  
  let modalOpen = false;
  let selectedIndex = 0;
  
  // Screenshots com informações detalhadas
  const screenshots = [
    {
      src: '/screenshots/dashboard.svg',
      alt: 'Dashboard UpClinic - Visão geral do sistema com estatísticas e gráficos',
      title: 'Dashboard Principal',
      description: 'Visão completa e em tempo real de todas as métricas importantes da sua clínica',
      features: [
        'Gráficos e estatísticas em tempo real',
        'Indicadores de performance (KPIs)',
        'Agenda do dia em destaque',
        'Alertas e notificações importantes',
        'Acesso rápido às funcionalidades principais'
      ],
      icon: '📊',
      bgGradient: 'from-blue-100 to-blue-200',
      headerGradient: 'from-blue-500 to-blue-700',
      buttonClass: 'bg-blue-600 hover:bg-blue-700',
      borderClass: 'border-blue-600',
      textClass: 'text-blue-600',
      hoverClass: 'hover:bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      src: '/screenshots/agenda.svg',
      alt: 'Agenda Inteligente UpClinic com calendário e agendamentos',
      title: 'Agenda Inteligente',
      description: 'Gerencie todos os seus agendamentos de forma inteligente e eficiente',
      features: [
        'Calendário visual intuitivo',
        'Agendamento online para pacientes',
        'Lembretes automáticos por SMS e email',
        'Gestão de múltiplos profissionais',
        'Bloqueio de horários e feriados'
      ],
      icon: '📅',
      bgGradient: 'from-purple-100 to-purple-200',
      headerGradient: 'from-purple-500 to-purple-700',
      buttonClass: 'bg-purple-600 hover:bg-purple-700',
      borderClass: 'border-purple-600',
      textClass: 'text-purple-600',
      hoverClass: 'hover:bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      src: '/screenshots/prontuario.svg',
      alt: 'Prontuário Eletrônico UpClinic com histórico clínico completo',
      title: 'Prontuário Eletrônico',
      description: 'Prontuário digital completo e seguro, conforme normas da ANVISA e CFM',
      features: [
        'Histórico clínico completo do paciente',
        'Prescrições digitais com assinatura eletrônica',
        'Exames e laudos integrados',
        'Busca inteligente e filtros avançados',
        'Backup automático na nuvem'
      ],
      icon: '📋',
      bgGradient: 'from-green-100 to-green-200',
      headerGradient: 'from-green-500 to-green-700',
      buttonClass: 'bg-green-600 hover:bg-green-700',
      borderClass: 'border-green-600',
      textClass: 'text-green-600',
      hoverClass: 'hover:bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      src: '/screenshots/telemedicina.svg',
      alt: 'Telemedicina UpClinic com videoconferência e chat integrado',
      title: 'Telemedicina',
      description: 'Realize consultas online com qualidade profissional e segurança total',
      features: [
        'Videoconferência HD integrada',
        'Chat em tempo real durante consultas',
        'Compartilhamento de tela para exames',
        'Gravação de consultas (com consentimento)',
        'Prescrições digitais na teleconsulta'
      ],
      icon: '💻',
      bgGradient: 'from-indigo-100 to-indigo-200',
      headerGradient: 'from-indigo-500 to-indigo-700',
      buttonClass: 'bg-indigo-600 hover:bg-indigo-700',
      borderClass: 'border-indigo-600',
      textClass: 'text-indigo-600',
      hoverClass: 'hover:bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];
  
  function openModal(index) {
    selectedIndex = index;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modalOpen = false;
    document.body.style.overflow = '';
  }
  
  function nextCard() {
    selectedIndex = (selectedIndex + 1) % screenshots.length;
  }
  
  function prevCard() {
    selectedIndex = (selectedIndex - 1 + screenshots.length) % screenshots.length;
  }
  
  onMount(() => {
    function handleKeydown(e) {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  });
</script>

<section id="funcionalidades" class="py-24 bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Interface
      </span>
      <h2 class="section-title">Conheça nossa interface</h2>
      <p class="section-description">
        Design moderno e intuitivo para facilitar o dia a dia da sua clínica
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each screenshots as screenshot, index}
        <div
          class="card cursor-pointer overflow-hidden p-0 text-left w-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          role="button"
          tabindex="0"
          on:click={() => openModal(index)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openModal(index);
            }
          }}
          aria-label="Ver detalhes: {screenshot.title}"
        >
          <div class="aspect-video bg-gradient-to-br {screenshot.bgGradient} flex items-center justify-center relative overflow-hidden">
            <img 
              src={screenshot.src}
              alt={screenshot.alt}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div class="flex items-center gap-2 text-white mb-2">
                <span class="text-2xl">{screenshot.icon}</span>
                <span class="font-semibold text-lg">{screenshot.title}</span>
              </div>
              <p class="text-white/90 text-sm line-clamp-2">{screenshot.description}</p>
            </div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg class="w-5 h-5 {screenshot.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
          <div class="p-5 bg-white">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">{screenshot.icon}</span>
              <h3 class="font-bold text-gray-900 text-lg">{screenshot.title}</h3>
            </div>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">{screenshot.description}</p>
            <div class="flex items-center {screenshot.textClass} font-semibold text-sm group-hover:gap-2 transition-all">
              <span>Ver detalhes</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Modal Interativo -->
  {#if modalOpen}
    <div 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Detalhes da funcionalidade"
      tabindex="-1"
      on:click={closeModal}
      on:keydown={(e) => e.key === 'Escape' && closeModal()}
    >
      <!-- Conteúdo do Modal -->
      <div 
        class="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 animate-scale-in"
        on:click|stopPropagation
        role="document"
      >
        {#if screenshots[selectedIndex]}
          {@const item = screenshots[selectedIndex]}
          
          <!-- Header do Modal -->
          <div class="relative h-64 bg-gradient-to-br {item.headerGradient} overflow-hidden">
            <img 
              src={item.src}
              alt={item.alt}
              class="w-full h-full object-cover opacity-30"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            <!-- Botão Fechar -->
            <button 
              type="button"
              class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              on:click={closeModal}
              aria-label="Fechar"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <!-- Navegação -->
            <button 
              type="button"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              on:click|stopPropagation={prevCard}
              aria-label="Funcionalidade anterior"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              type="button"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              on:click|stopPropagation={nextCard}
              aria-label="Próxima funcionalidade"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <!-- Título no Header -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-center gap-3 mb-2">
                <span class="text-4xl">{item.icon}</span>
                <h2 class="text-3xl font-bold">{item.title}</h2>
              </div>
              <p class="text-white/90 text-lg">{item.description}</p>
            </div>
          </div>
          
          <!-- Corpo do Modal -->
          <div class="p-8">
            <div class="mb-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Principais Funcionalidades</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each item.features as feature}
                  <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg class="w-6 h-6 {item.iconColor} flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{feature}</span>
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Botões de Ação -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <a 
                href="https://upclinic-aa025.web.app/signup"
                class="flex-1 btn {item.buttonClass} text-white text-center"
              >
                Experimentar Agora
              </a>
              <a 
                href="/contato"
                class="flex-1 btn btn-outline {item.borderClass} {item.textClass} {item.hoverClass} text-center"
              >
                Falar com Especialista
              </a>
              <a 
                href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20{item.title}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 btn bg-green-500 hover:bg-green-600 text-white text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scale-in {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .animate-scale-in {
    animation: scale-in 0.3s ease-out;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
