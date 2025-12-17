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
  
  const allFeatures = [
    {
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
      title: 'Prontuário Eletrônico',
      shortDesc: 'Histórico médico completo e seguro',
      fullDesc: 'Gerencie todo o histórico médico dos seus pacientes de forma digital e segura, com conformidade total à LGPD.',
      benefits: ['Redução de 90% no tempo de busca', 'Zero perda de documentos', 'Acesso instantâneo de qualquer lugar'],
      roi: '+250%',
      roiText: 'aumento na produtividade',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      title: 'Agenda Inteligente',
      shortDesc: 'Agendamento automático 24/7',
      fullDesc: 'Sistema inteligente que reduz faltas em até 80% com lembretes automáticos e otimização de horários.',
      benefits: ['Redução de 80% nas faltas', 'Agendamento online 24/7', 'Otimização automática de horários'],
      roi: '+180%',
      roiText: 'aumento na ocupação',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z',
      title: 'Telemedicina',
      shortDesc: 'Consultas remotas de alta qualidade',
      fullDesc: 'Expanda seu atendimento para qualquer lugar do Brasil com videoconferência HD e prescrições digitais.',
      benefits: ['Aumento de 300% no alcance', 'Redução de custos operacionais', 'Prescrições digitais integradas'],
      roi: '+300%',
      roiText: 'mais pacientes atendidos',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      title: 'Gestão Financeira',
      shortDesc: 'Controle total das finanças',
      fullDesc: 'Tenha visão completa das receitas, despesas e projeções financeiras em tempo real.',
      benefits: ['Redução de 60% na inadimplência', 'Relatórios automáticos', 'Previsão de fluxo de caixa'],
      roi: '+150%',
      roiText: 'melhoria no faturamento',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'IA Médica',
      shortDesc: 'Assistente inteligente para diagnósticos',
      fullDesc: 'Conte com inteligência artificial como seu assistente, sugerindo diagnósticos baseados em evidências científicas.',
      benefits: ['Redução de 40% no tempo de diagnóstico', 'Alertas de interações medicamentosas', 'Suporte baseado em guidelines'],
      roi: '+200%',
      roiText: 'precisão diagnóstica',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
      title: 'Mobile & Cloud',
      shortDesc: 'Acesso de qualquer lugar',
      fullDesc: 'Sua clínica sempre com você, no consultório, em casa ou em viagem, com sincronização em tempo real.',
      benefits: ['Acesso 24/7 de qualquer dispositivo', 'Backup automático na nuvem', 'Sincronização em tempo real'],
      roi: '+100%',
      roiText: 'flexibilidade operacional',
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
      title: 'Gestão de Pacientes',
      shortDesc: 'Cadastro completo e histórico detalhado',
      fullDesc: 'Sistema completo de gestão de pacientes com busca avançada e acompanhamento personalizado.',
      benefits: ['Busca instantânea por qualquer critério', 'Histórico completo do paciente', 'Alertas automáticos'],
      roi: '+120%',
      roiText: 'eficiência no atendimento',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
      title: 'Gestão de Profissionais',
      shortDesc: 'Controle completo da equipe médica',
      fullDesc: 'Gerencie especialidades, escalas, disponibilidade e permissões de acesso de toda sua equipe.',
      benefits: ['Gestão de múltiplas especialidades', 'Controle de escalas e disponibilidade', 'Relatórios de performance'],
      roi: '+140%',
      roiText: 'organização da equipe',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
      title: 'Exames e Laudos',
      shortDesc: 'Gestão completa de exames',
      fullDesc: 'Organize todos os exames laboratoriais e de imagem com laudos digitais e integração com laboratórios.',
      benefits: ['Integração com laboratórios parceiros', 'Laudos digitais organizados', 'Histórico completo de exames'],
      roi: '+160%',
      roiText: 'organização de dados',
      color: 'green',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Prescrições Digitais',
      shortDesc: 'Prescrições com assinatura eletrônica',
      fullDesc: 'Prescrições médicas digitais válidas legalmente com assinatura eletrônica e integração com farmácias.',
      benefits: ['Assinatura eletrônica válida', 'Integração com farmácias', 'Histórico de prescrições'],
      roi: '+130%',
      roiText: 'agilidade no atendimento',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
      title: 'Relatórios e Analytics',
      shortDesc: 'Dashboards e métricas em tempo real',
      fullDesc: 'Tome decisões baseadas em dados com dashboards interativos e relatórios personalizados.',
      benefits: ['Dashboards em tempo real', 'Relatórios personalizados', 'Análise de performance'],
      roi: '+170%',
      roiText: 'decisões baseadas em dados',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 13 13.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9',
      title: 'Notificações Inteligentes',
      shortDesc: 'Alertas automáticos por WhatsApp e SMS',
      fullDesc: 'Sistema de lembretes automáticos que reduz faltas e melhora a comunicação com pacientes.',
      benefits: ['Redução de 80% nas faltas', 'Lembretes automáticos', 'Comunicação multi-canal'],
      roi: '+190%',
      roiText: 'taxa de comparecimento',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10',
      title: 'Farmácia Integrada',
      shortDesc: 'Gestão de medicamentos e estoque',
      fullDesc: 'Controle completo de medicamentos, estoque e integração com farmácias parceiras.',
      benefits: ['Controle de estoque automático', 'Integração com farmácias', 'Gestão de medicamentos'],
      roi: '+110%',
      roiText: 'controle de medicamentos',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
      title: 'Integrações',
      shortDesc: 'Conecte-se com outras plataformas',
      fullDesc: 'Integre com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde.',
      benefits: ['API completa disponível', 'Integração com principais sistemas', 'Webhooks em tempo real'],
      roi: '+160%',
      roiText: 'automação de processos',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Segurança e LGPD',
      shortDesc: 'Conformidade total com LGPD',
      fullDesc: 'Criptografia de dados, backup automático e conformidade total com LGPD e normas do CFM.',
      benefits: ['Criptografia end-to-end', 'Conformidade LGPD', 'Auditoria completa de acessos'],
      roi: '100%',
      roiText: 'conformidade garantida',
      color: 'red',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      title: 'Backup Automático',
      shortDesc: 'Proteção total dos seus dados',
      fullDesc: 'Backup contínuo na nuvem com recuperação instantânea e proteção contra perda de dados.',
      benefits: ['Backup automático diário', 'Recuperação instantânea', 'Zero perda de dados'],
      roi: '100%',
      roiText: 'proteção de dados',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Dashboard Analytics',
      shortDesc: 'Métricas em tempo real',
      fullDesc: 'Visão completa do seu negócio com métricas em tempo real, gráficos interativos e KPIs personalizados.',
      benefits: ['Métricas em tempo real', 'Gráficos interativos', 'KPIs personalizados'],
      roi: '+180%',
      roiText: 'visibilidade do negócio',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];
  
  let selectedCategory = 'all';
  let hoveredFeature = null;
  
  const categories = [
    { id: 'all', name: 'Todas', count: allFeatures.length },
    { id: 'clinical', name: 'Clínico', count: 4 },
    { id: 'management', name: 'Gestão', count: 6 },
    { id: 'technology', name: 'Tecnologia', count: 5 }
  ];
  
  function getColorClasses(color) {
    const classes = {
      blue: {
        border: 'hover:border-blue-400',
        bg: 'bg-blue-50',
        borderLeft: 'border-blue-500',
        text: 'text-blue-600',
        textDark: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        border: 'hover:border-purple-400',
        bg: 'bg-purple-50',
        borderLeft: 'border-purple-500',
        text: 'text-purple-600',
        textDark: 'text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      indigo: {
        border: 'hover:border-indigo-400',
        bg: 'bg-indigo-50',
        borderLeft: 'border-indigo-500',
        text: 'text-indigo-600',
        textDark: 'text-indigo-700',
        button: 'bg-indigo-600 hover:bg-indigo-700'
      },
      green: {
        border: 'hover:border-green-400',
        bg: 'bg-green-50',
        borderLeft: 'border-green-500',
        text: 'text-green-600',
        textDark: 'text-green-700',
        button: 'bg-green-600 hover:bg-green-700'
      },
      pink: {
        border: 'hover:border-pink-400',
        bg: 'bg-pink-50',
        borderLeft: 'border-pink-500',
        text: 'text-pink-600',
        textDark: 'text-pink-700',
        button: 'bg-pink-600 hover:bg-pink-700'
      },
      cyan: {
        border: 'hover:border-cyan-400',
        bg: 'bg-cyan-50',
        borderLeft: 'border-cyan-500',
        text: 'text-cyan-600',
        textDark: 'text-cyan-700',
        button: 'bg-cyan-600 hover:bg-cyan-700'
      },
      red: {
        border: 'hover:border-red-400',
        bg: 'bg-red-50',
        borderLeft: 'border-red-500',
        text: 'text-red-600',
        textDark: 'text-red-700',
        button: 'bg-red-600 hover:bg-red-700'
      },
      orange: {
        border: 'hover:border-orange-400',
        bg: 'bg-orange-50',
        borderLeft: 'border-orange-500',
        text: 'text-orange-600',
        textDark: 'text-orange-700',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      yellow: {
        border: 'hover:border-yellow-400',
        bg: 'bg-yellow-50',
        borderLeft: 'border-yellow-500',
        text: 'text-yellow-600',
        textDark: 'text-yellow-700',
        button: 'bg-yellow-600 hover:bg-yellow-700'
      },
      teal: {
        border: 'hover:border-teal-400',
        bg: 'bg-teal-50',
        borderLeft: 'border-teal-500',
        text: 'text-teal-600',
        textDark: 'text-teal-700',
        button: 'bg-teal-600 hover:bg-teal-700'
      }
    };
    return classes[color] || classes.blue;
  }
  
  function handleKeydown(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
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
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
    role="dialog"
    aria-modal="true"
    aria-label="Showcase de Funcionalidades"
    on:click={close}
    on:keydown={(e) => e.key === 'Escape' && close()}
  >
    <div 
      class="fixed right-0 top-0 h-full w-full md:w-[90%] lg:w-[85%] xl:w-[80%] max-w-7xl bg-white shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto animate-slide-in"
      on:click|stopPropagation
      role="document"
    >
      <!-- Header Fixo -->
      <div class="sticky top-0 z-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 md:p-8 shadow-lg">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">🚀 Todas as Funcionalidades</h2>
            <p class="text-blue-100 text-lg">Descubra como o UpClinic pode transformar sua clínica</p>
          </div>
          <button 
            type="button"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            on:click={close}
            aria-label="Fechar"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Filtros -->
        <div class="flex gap-3 flex-wrap">
          {#each categories as category}
            <button
              type="button"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all {selectedCategory === category.id ? 'bg-white text-gray-900 shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'}"
              on:click={() => selectedCategory = category.id}
            >
              {category.name} ({category.count})
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Conteúdo -->
      <div class="p-6 md:p-8">
        <!-- Estatísticas Gerais -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
            <div class="text-3xl font-bold text-blue-600 mb-1">{allFeatures.length}</div>
            <div class="text-sm text-blue-700 font-medium">Funcionalidades</div>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
            <div class="text-3xl font-bold text-green-600 mb-1">+200%</div>
            <div class="text-sm text-green-700 font-medium">ROI Médio</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
            <div class="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div class="text-sm text-purple-700 font-medium">Disponível</div>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div class="text-3xl font-bold text-orange-600 mb-1">98%</div>
            <div class="text-sm text-orange-700 font-medium">Satisfação</div>
          </div>
        </div>
        
        <!-- Grid de Funcionalidades -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each allFeatures as feature, index}
            {@const colorClasses = getColorClasses(feature.color)}
            <div
              class="group relative bg-white rounded-2xl border-2 border-gray-200 {colorClasses.border} overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              on:click={() => {
                hoveredFeature = hoveredFeature === index ? null : index;
              }}
              on:mouseenter={() => hoveredFeature = index}
              on:mouseleave={() => hoveredFeature = null}
              role="button"
              tabindex="0"
            >
              <!-- ROI Badge -->
              <div class="absolute top-4 right-4 z-10 bg-gradient-to-br {feature.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {feature.roi}
              </div>
              
              <!-- Header do Card -->
              <div class="bg-gradient-to-br {feature.gradient} p-6 text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                </div>
                <div class="relative z-10">
                  <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{feature.title}</h3>
                  <p class="text-white/90 text-sm">{feature.shortDesc}</p>
                </div>
              </div>
              
              <!-- Conteúdo do Card -->
              <div class="p-6">
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">{feature.fullDesc}</p>
                
                <!-- ROI Highlight -->
                <div class="{colorClasses.bg} border-l-4 {colorClasses.borderLeft} p-3 rounded-r-lg mb-4">
                  <div class="text-2xl font-bold {colorClasses.text} mb-1">{feature.roi}</div>
                  <div class="text-xs {colorClasses.textDark} font-medium">{feature.roiText}</div>
                </div>
                
                <!-- Benefícios -->
                <div class="space-y-2 mb-4">
                  {#each feature.benefits.slice(0, 2) as benefit}
                    <div class="flex items-center gap-2 text-sm text-gray-700">
                      <svg class="w-4 h-4 {colorClasses.text} flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  {/each}
                </div>
                
                <!-- CTA -->
                <div class="flex gap-2">
                  <a
                    href="https://upclinic-aa025.web.app/login"
                    class="flex-1 btn {colorClasses.button} text-white text-center text-sm py-2"
                    on:click|stopPropagation
                  >
                    Testar Agora
                  </a>
                  <a
                    href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20{feature.title}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn bg-green-500 hover:bg-green-600 text-white text-center text-sm py-2 px-4"
                    on:click|stopPropagation={() => trackWhatsAppClick('botao_whatsapp_feature_card')}
                  >
                    💬
                  </a>
                </div>
              </div>
              
              <!-- Hover Overlay -->
              {#if hoveredFeature === index}
                <div class="absolute inset-0 bg-gradient-to-br {feature.gradient} opacity-95 flex items-center justify-center p-6 transition-opacity duration-300">
                  <div class="text-center text-white">
                    <div class="text-4xl font-bold mb-2">{feature.roi}</div>
                    <div class="text-lg font-medium mb-4">{feature.roiText}</div>
                    <div class="space-y-2 text-sm">
                      {#each feature.benefits as benefit}
                        <div class="flex items-center justify-center gap-2">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </div>
                      {/each}
                    </div>
                  </div>
                </div>
              {/if}
            </div>
          {/each}
        </div>
        
        <!-- CTA Final -->
        <div class="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar sua clínica?</h3>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 3.200 clínicas que já transformaram sua gestão com o UpClinic
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://upclinic-aa025.web.app/login"
              class="btn bg-white text-blue-600 hover:bg-gray-100 btn-large"
            >
              Começar Agora - Grátis
            </a>
            <a 
              href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20UpClinic"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-green-500 hover:bg-green-600 text-white btn-large"
              on:click={() => trackWhatsAppClick('botao_whatsapp_features_showcase')}
            >
              📱 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .animate-slide-in {
    animation: slide-in 0.5s ease-out;
  }
</style>

