<script>
  import { onMount } from 'svelte';
  
  let isOpen = false;
  
  export function open() {
    isOpen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }
  
  export function close() {
    isOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
  
  const features = [
    {
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
      title: 'Prontuário Eletrônico',
      description: 'Sistema completo de prontuários digitais com segurança LGPD',
      fullDescription: 'Gerencie todo o histórico médico dos seus pacientes de forma digital e segura. O prontuário eletrônico do UpClinic permite registrar consultas, exames, prescrições e evoluções clínicas com total conformidade à LGPD. Acesso rápido, busca inteligente e backup automático garantem que todas as informações estejam sempre disponíveis quando você precisar.',
      benefits: [
        'Histórico médico completo e organizado',
        'Conformidade total com LGPD e normas do CFM',
        'Busca inteligente por sintomas, diagnósticos ou medicamentos',
        'Anexos de exames e documentos',
        'Assinatura digital de prescrições',
        'Backup automático na nuvem'
      ],
      color: 'blue',
      example: 'Exemplo: Um paciente retorna após 6 meses. Com um clique, você acessa todo o histórico, exames anteriores, medicações prescritas e evoluções, permitindo um atendimento mais eficiente e preciso.'
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      title: 'Agenda Inteligente',
      description: 'Agendamento automático com lembretes por WhatsApp e email',
      fullDescription: 'Transforme a gestão da sua agenda com inteligência artificial. O sistema sugere os melhores horários, envia lembretes automáticos por WhatsApp e email, e otimiza sua agenda para maximizar a produtividade. Reduza faltas em até 80% com lembretes inteligentes e confirmações automáticas.',
      benefits: [
        'Agendamento online 24/7 para pacientes',
        'Lembretes automáticos por WhatsApp, SMS e email',
        'Otimização automática de horários',
        'Gestão de múltiplos profissionais e especialidades',
        'Bloqueio de horários e feriados',
        'Relatórios de ocupação e produtividade'
      ],
      color: 'purple',
      example: 'Exemplo: Um paciente agenda uma consulta pelo site às 23h. O sistema confirma automaticamente, envia lembretes 48h e 24h antes, e 2h antes da consulta. Resultado: zero esquecimentos!'
    },
    {
      icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z',
      title: 'Telemedicina',
      description: 'Consultas online integradas com prescrição digital',
      fullDescription: 'Realize consultas remotas com qualidade profissional. Videoconferência HD, chat integrado, compartilhamento de tela para exames e prescrições digitais assinadas eletronicamente. Tudo integrado ao prontuário eletrônico para um atendimento completo e documentado.',
      benefits: [
        'Videoconferência HD com qualidade profissional',
        'Chat em tempo real durante a consulta',
        'Compartilhamento de tela para análise de exames',
        'Gravação de consultas (com consentimento do paciente)',
        'Prescrições digitais com assinatura eletrônica',
        'Integração completa com prontuário eletrônico'
      ],
      color: 'indigo',
      example: 'Exemplo: Paciente em outra cidade precisa de retorno. Você agenda uma teleconsulta, analisa exames compartilhando a tela, prescreve digitalmente e tudo fica registrado automaticamente no prontuário.'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      title: 'Gestão Financeira',
      description: 'Controle completo de receitas, despesas e pagamentos',
      fullDescription: 'Tenha controle total das finanças da sua clínica. Receitas de consultas, despesas operacionais, controle de inadimplência, relatórios detalhados e integração com sistemas de pagamento. Tudo em um só lugar para você tomar decisões financeiras inteligentes.',
      benefits: [
        'Controle de receitas e despesas em tempo real',
        'Relatórios financeiros detalhados e personalizados',
        'Gestão de inadimplência e cobranças',
        'Integração com gateways de pagamento',
        'Análise de lucratividade por profissional',
        'Previsão de fluxo de caixa'
      ],
      color: 'green',
      example: 'Exemplo: No final do mês, você acessa um dashboard completo mostrando receitas por especialidade, despesas categorizadas, taxa de inadimplência e projeções para o próximo mês - tudo em gráficos visuais.'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'IA Médica',
      description: 'Assistente de IA para diagnósticos e análise de exames',
      fullDescription: 'Conte com inteligência artificial como seu assistente médico. O sistema analisa sintomas, sugere diagnósticos baseados em evidências científicas, identifica padrões em exames e oferece suporte à decisão clínica. Sempre como ferramenta de apoio, nunca substituindo o julgamento médico.',
      benefits: [
        'Análise inteligente de sintomas e sinais',
        'Sugestões de diagnósticos baseadas em evidências',
        'Identificação de padrões em exames laboratoriais',
        'Alertas para interações medicamentosas',
        'Suporte à decisão clínica baseado em guidelines',
        'Aprendizado contínuo com casos similares'
      ],
      color: 'pink',
      example: 'Exemplo: Você digita os sintomas do paciente. A IA sugere possíveis diagnósticos com base em evidências, alerta sobre interações medicamentosas e mostra casos similares já tratados na sua clínica.'
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
      title: 'Mobile & Cloud',
      description: 'Acesso em qualquer lugar via web ou mobile',
      fullDescription: 'Acesse seu sistema de qualquer lugar, a qualquer hora. Versão mobile otimizada, sincronização em tempo real entre dispositivos e backup automático na nuvem. Sua clínica sempre com você, no consultório, em casa ou em viagem.',
      benefits: [
        'Aplicativo mobile nativo para iOS e Android',
        'Sincronização em tempo real entre dispositivos',
        'Backup automático na nuvem',
        'Acesso offline com sincronização automática',
        'Notificações push no celular',
        'Interface responsiva para tablets'
      ],
      color: 'cyan',
      example: 'Exemplo: Você está em casa e precisa verificar um agendamento urgente. Abre o app no celular, acessa todas as informações, faz alterações e tudo sincroniza automaticamente com o sistema principal.'
    }
  ];
  
  let selectedFeature = 0;
  
  $: currentFeature = features[selectedFeature];
  $: gradientClass = currentFeature?.color === 'blue' ? 'from-blue-500 to-blue-600' : 
    currentFeature?.color === 'purple' ? 'from-purple-500 to-purple-600' : 
    currentFeature?.color === 'indigo' ? 'from-indigo-500 to-indigo-600' : 
    currentFeature?.color === 'green' ? 'from-green-500 to-green-600' : 
    currentFeature?.color === 'pink' ? 'from-pink-500 to-pink-600' : 
    'from-cyan-500 to-cyan-600';
  $: iconColorClass = currentFeature?.color === 'blue' ? 'text-blue-600' : 
    currentFeature?.color === 'purple' ? 'text-purple-600' : 
    currentFeature?.color === 'indigo' ? 'text-indigo-600' : 
    currentFeature?.color === 'green' ? 'text-green-600' : 
    currentFeature?.color === 'pink' ? 'text-pink-600' : 
    'text-cyan-600';
  
  function selectFeature(index) {
    selectedFeature = index;
  }
  
  function nextFeature() {
    selectedFeature = (selectedFeature + 1) % features.length;
  }
  
  function prevFeature() {
    selectedFeature = (selectedFeature - 1 + features.length) % features.length;
  }
  
  function handleKeydown(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') nextFeature();
    if (e.key === 'ArrowLeft') prevFeature();
  }
  
  onMount(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div 
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-label="Demonstração de Funcionalidades"
    on:click={close}
    on:keydown={(e) => e.key === 'Escape' && close()}
  >
    <div 
      class="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 animate-scale-in my-8"
      on:click|stopPropagation
      role="document"
    >
      {#if currentFeature}
        <!-- Header -->
        <div class="bg-gradient-to-br {gradientClass} p-8 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-start justify-between mb-6">
            <div>
              <h2 class="text-4xl font-bold mb-2">Conheça o UpClinic</h2>
              <p class="text-white/90 text-lg">Sistema completo de gestão médica</p>
            </div>
            <button 
              type="button"
              class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              on:click={close}
              aria-label="Fechar"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Feature Selector -->
          <div class="flex gap-2 flex-wrap">
            {#each features as f, index}
              <button
                type="button"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all {index === selectedFeature ? 'bg-white text-gray-900' : 'bg-white/20 text-white hover:bg-white/30'}"
                on:click={() => selectFeature(index)}
              >
                {f.title}
              </button>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br {gradientClass} rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={currentFeature.icon} />
                </svg>
              </div>
              <div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">{currentFeature.title}</h3>
                <p class="text-gray-600 text-lg">{currentFeature.description}</p>
              </div>
            </div>
            
            <div class="prose max-w-none mb-6">
              <p class="text-gray-700 text-lg leading-relaxed mb-6">
                {currentFeature.fullDescription}
              </p>
              
              <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <p class="text-gray-800 font-medium mb-2">💡 Exemplo Prático:</p>
                <p class="text-gray-700">{currentFeature.example}</p>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-bold text-gray-900 mb-4">Principais Benefícios:</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                {#each currentFeature.benefits as benefit}
                  <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg class="w-6 h-6 {iconColorClass} flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700">{benefit}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sticky top-8">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Quer ver na prática?</h4>
              <p class="text-gray-600 mb-6">
                Agende uma demonstração personalizada e veja como o UpClinic pode transformar a gestão da sua clínica.
              </p>
              
              <div class="space-y-3">
                <a 
                  href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20UpClinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full btn bg-green-500 hover:bg-green-600 text-white text-center"
                  on:click={() => {
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'click_whatsapp', {
                        event_category: 'engagement',
                        event_label: 'botao_whatsapp_feature_demo'
                      });
                    }
                  }}
                >
                  📱 WhatsApp
                </a>
                <a 
                  href="/contato"
                  class="block w-full btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 text-center"
                >
                  📧 Email
                </a>
                <a 
                  href="https://upclinic-aa025.web.app/login"
                  class="block w-full btn bg-blue-600 hover:bg-blue-700 text-white text-center"
                >
                  🚀 Teste Grátis
                </a>
              </div>
              
              <div class="mt-6 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-600 mb-2">Navegue pelas funcionalidades:</p>
                <div class="flex items-center justify-between">
                  <button
                    type="button"
                    class="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    on:click={prevFeature}
                    aria-label="Funcionalidade anterior"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span class="text-sm text-gray-600">
                    {selectedFeature + 1} de {features.length}
                  </span>
                  <button
                    type="button"
                    class="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                    on:click={nextFeature}
                    aria-label="Próxima funcionalidade"
                  >
                    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
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
</style>

