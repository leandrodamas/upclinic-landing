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
      category: 'Clínico',
      description: 'Sistema completo de prontuários digitais com segurança LGPD, histórico completo e acesso rápido a todas as informações do paciente.',
      benefits: [
        'Histórico médico completo e organizado',
        'Conformidade total com LGPD e normas do CFM',
        'Busca inteligente por sintomas, diagnósticos ou medicamentos',
        'Anexos de exames e documentos',
        'Assinatura digital de prescrições',
        'Backup automático na nuvem'
      ],
      impact: 'Redução de 90% no tempo de busca de informações',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      title: 'Agenda Inteligente',
      category: 'Gestão',
      description: 'Agendamento automático com lembretes por WhatsApp e email, otimização de horários e gestão completa da sua agenda.',
      benefits: [
        'Agendamento online 24/7 para pacientes',
        'Lembretes automáticos por WhatsApp, SMS e email',
        'Otimização automática de horários',
        'Gestão de múltiplos profissionais e especialidades',
        'Bloqueio de horários e feriados',
        'Relatórios de ocupação e produtividade'
      ],
      impact: 'Redução de 80% nas faltas de pacientes',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600'
    },
    {
      icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z',
      title: 'Telemedicina',
      category: 'Clínico',
      description: 'Consultas online integradas com prescrição digital, videoconferência de alta qualidade e prontuário sincronizado.',
      benefits: [
        'Videoconferência HD com qualidade profissional',
        'Chat em tempo real durante a consulta',
        'Compartilhamento de tela para análise de exames',
        'Gravação de consultas (com consentimento do paciente)',
        'Prescrições digitais com assinatura eletrônica',
        'Integração completa com prontuário eletrônico'
      ],
      impact: 'Aumento de 300% no alcance de atendimento',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
      borderColor: 'border-indigo-500',
      textColor: 'text-indigo-600'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      title: 'Gestão Financeira',
      category: 'Gestão',
      description: 'Controle completo de receitas, despesas, pagamentos e relatórios financeiros detalhados para sua clínica.',
      benefits: [
        'Controle de receitas e despesas em tempo real',
        'Relatórios financeiros detalhados e personalizados',
        'Gestão de inadimplência e cobranças',
        'Integração com gateways de pagamento',
        'Análise de lucratividade por profissional',
        'Previsão de fluxo de caixa'
      ],
      impact: 'Redução de 60% na inadimplência',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-600'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'IA Médica',
      category: 'Tecnologia',
      description: 'Assistente de IA para diagnósticos, análise de exames e sugestões de tratamento baseadas em evidências científicas.',
      benefits: [
        'Análise inteligente de sintomas e sinais',
        'Sugestões de diagnósticos baseadas em evidências',
        'Identificação de padrões em exames laboratoriais',
        'Alertas para interações medicamentosas',
        'Suporte à decisão clínica baseado em guidelines',
        'Aprendizado contínuo com casos similares'
      ],
      impact: 'Redução de 40% no tempo de diagnóstico',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600',
      bgLight: 'bg-pink-50',
      borderColor: 'border-pink-500',
      textColor: 'text-pink-600'
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
      title: 'Mobile & Cloud',
      category: 'Tecnologia',
      description: 'Acesso em qualquer lugar via web ou mobile, sincronização em tempo real e backup automático na nuvem.',
      benefits: [
        'Aplicativo mobile nativo para iOS e Android',
        'Sincronização em tempo real entre dispositivos',
        'Backup automático na nuvem',
        'Acesso offline com sincronização automática',
        'Notificações push no celular',
        'Interface responsiva para tablets'
      ],
      impact: 'Acesso 24/7 de qualquer dispositivo',
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-600',
      bgLight: 'bg-cyan-50',
      borderColor: 'border-cyan-500',
      textColor: 'text-cyan-600'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
      title: 'Gestão de Pacientes',
      category: 'Clínico',
      description: 'Cadastro completo, histórico médico detalhado, busca avançada e acompanhamento personalizado de cada paciente.',
      benefits: [
        'Busca instantânea por qualquer critério',
        'Histórico completo do paciente',
        'Alertas automáticos de retornos',
        'Gestão de múltiplos contatos',
        'Dados de emergência sempre acessíveis',
        'Integração com exames e prescrições'
      ],
      impact: 'Busca de informações em menos de 2 segundos',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: 'M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
      title: 'Gestão de Profissionais',
      category: 'Gestão',
      description: 'Controle completo da equipe médica, especialidades, escalas, disponibilidade e permissões de acesso.',
      benefits: [
        'Gestão de múltiplas especialidades',
        'Controle de escalas e disponibilidade',
        'Relatórios de performance individual',
        'Permissões de acesso personalizadas',
        'Integração com agenda e prontuário',
        'Histórico de atividades por profissional'
      ],
      impact: 'Organização completa da equipe médica',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600'
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
      title: 'Exames e Laudos',
      category: 'Clínico',
      description: 'Gestão completa de exames laboratoriais e de imagem, laudos digitais e integração com laboratórios parceiros.',
      benefits: [
        'Integração com laboratórios parceiros',
        'Laudos digitais organizados',
        'Histórico completo de exames',
        'Alertas de exames pendentes',
        'Visualização de imagens integrada',
        'Comparação de exames ao longo do tempo'
      ],
      impact: 'Organização total de exames e laudos',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-600'
    },
    {
      icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Prescrições Digitais',
      category: 'Clínico',
      description: 'Prescrições médicas digitais com assinatura eletrônica, validação de medicamentos e integração com farmácias.',
      benefits: [
        'Assinatura eletrônica válida legalmente',
        'Integração com farmácias parceiras',
        'Histórico de prescrições completo',
        'Validação automática de medicamentos',
        'Alertas de interações medicamentosas',
        'Prescrições padronizadas por especialidade'
      ],
      impact: 'Agilidade no atendimento e prescrições',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgLight: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-600'
    },
    {
      icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
      title: 'Relatórios e Analytics',
      category: 'Gestão',
      description: 'Dashboards interativos, relatórios personalizados, métricas de performance e análises detalhadas do seu negócio.',
      benefits: [
        'Dashboards em tempo real',
        'Relatórios personalizados',
        'Análise de performance',
        'Métricas de produtividade',
        'Gráficos interativos',
        'Exportação de relatórios em PDF/Excel'
      ],
      impact: 'Decisões baseadas em dados reais',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgLight: 'bg-orange-50',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-600'
    },
    {
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 13 13.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9',
      title: 'Notificações Inteligentes',
      category: 'Tecnologia',
      description: 'Sistema de alertas e lembretes automáticos por WhatsApp, SMS e email para pacientes e profissionais.',
      benefits: [
        'Redução de 80% nas faltas',
        'Lembretes automáticos multi-canal',
        'Comunicação personalizada',
        'Templates de mensagens',
        'Agendamento de notificações',
        'Relatórios de entrega e leitura'
      ],
      impact: 'Melhoria significativa na taxa de comparecimento',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
      bgLight: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-600'
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10',
      title: 'Farmácia Integrada',
      category: 'Gestão',
      description: 'Gestão de medicamentos, controle de estoque, prescrições digitais e integração com farmácias parceiras.',
      benefits: [
        'Controle de estoque automático',
        'Integração com farmácias',
        'Gestão de medicamentos',
        'Alertas de estoque baixo',
        'Histórico de medicamentos',
        'Validação de prescrições'
      ],
      impact: 'Controle total de medicamentos e estoque',
      color: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      bgLight: 'bg-teal-50',
      borderColor: 'border-teal-500',
      textColor: 'text-teal-600'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
      title: 'Integrações',
      category: 'Tecnologia',
      description: 'Conecte-se com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde.',
      benefits: [
        'API completa disponível',
        'Integração com principais sistemas',
        'Webhooks em tempo real',
        'Integração com laboratórios',
        'Integração com farmácias',
        'Integração com sistemas de pagamento'
      ],
      impact: 'Automação completa de processos',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      bgLight: 'bg-indigo-50',
      borderColor: 'border-indigo-500',
      textColor: 'text-indigo-600'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Segurança e LGPD',
      category: 'Tecnologia',
      description: 'Criptografia de dados, backup automático e conformidade total com LGPD e normas do CFM.',
      benefits: [
        'Criptografia end-to-end',
        'Conformidade LGPD',
        'Auditoria completa de acessos',
        'Backup automático',
        'Controle de permissões',
        'Logs de todas as ações'
      ],
      impact: '100% de conformidade com LGPD',
      color: 'red',
      gradient: 'from-red-500 to-red-600',
      bgLight: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-600'
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      title: 'Backup Automático',
      category: 'Tecnologia',
      description: 'Backup contínuo na nuvem com recuperação instantânea e proteção contra perda de dados.',
      benefits: [
        'Backup automático diário',
        'Recuperação instantânea',
        'Zero perda de dados',
        'Múltiplos pontos de restauração',
        'Backup em servidores redundantes',
        'Testes de recuperação regulares'
      ],
      impact: 'Proteção total dos dados da clínica',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Dashboard Analytics',
      category: 'Gestão',
      description: 'Visão completa do seu negócio com métricas em tempo real, gráficos interativos e KPIs personalizados.',
      benefits: [
        'Métricas em tempo real',
        'Gráficos interativos',
        'KPIs personalizados',
        'Comparação de períodos',
        'Alertas de métricas',
        'Exportação de dados'
      ],
      impact: 'Visibilidade completa do negócio',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
      borderColor: 'border-purple-500',
      textColor: 'text-purple-600'
    }
  ];
  
  let selectedCategory = 'all';
  let selectedFeature = null;
  
  const categories = [
    { id: 'all', name: 'Todas', icon: '📋' },
    { id: 'Clínico', name: 'Clínico', icon: '🏥' },
    { id: 'Gestão', name: 'Gestão', icon: '📊' },
    { id: 'Tecnologia', name: 'Tecnologia', icon: '💻' }
  ];
  
  $: filteredFeatures = selectedCategory === 'all' 
    ? allFeatures 
    : allFeatures.filter(f => f.category === selectedCategory);
  
  function getHoverBorderClass(color) {
    const classes = {
      blue: 'hover:border-blue-400',
      purple: 'hover:border-purple-400',
      indigo: 'hover:border-indigo-400',
      green: 'hover:border-green-400',
      pink: 'hover:border-pink-400',
      cyan: 'hover:border-cyan-400',
      red: 'hover:border-red-400',
      orange: 'hover:border-orange-400',
      yellow: 'hover:border-yellow-400',
      teal: 'hover:border-teal-400'
    };
    return classes[color] || 'hover:border-blue-400';
  }
  
  function handleKeydown(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') {
      if (selectedFeature) {
        selectedFeature = null;
      } else {
        close();
      }
    }
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
    class="fixed inset-0 bg-gray-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-label="Centro de Funcionalidades UpClinic"
    on:click={close}
    on:keydown={(e) => e.key === 'Escape' && close()}
  >
    <div 
      class="max-w-7xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform scale-95 animate-scale-in my-8 max-h-[90vh] flex flex-col"
      on:click|stopPropagation
      role="document"
    >
      <!-- Header Profissional -->
      <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 relative overflow-hidden">
        <!-- Padrão médico sutil -->
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0" style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px);"></div>
        </div>
        
        <div class="relative z-10">
          <div class="flex items-start justify-between mb-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 class="text-3xl md:text-4xl font-bold mb-1">Centro de Funcionalidades</h2>
                  <p class="text-blue-100 text-lg">Sistema completo de gestão médica profissional</p>
                </div>
              </div>
            </div>
            <button 
              type="button"
              class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors flex-shrink-0"
              on:click={close}
              aria-label="Fechar"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Filtros Profissionais -->
          <div class="flex gap-3 flex-wrap">
            {#each categories as category}
              <button
                type="button"
                class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 {selectedCategory === category.id ? 'bg-white text-gray-900 shadow-lg scale-105' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}"
                on:click={() => selectedCategory = category.id}
              >
                <span class="mr-2">{category.icon}</span>
                {category.name}
                {#if category.id !== 'all'}
                  <span class="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {allFeatures.filter(f => f.category === category.name).length}
                  </span>
                {/if}
              </button>
            {/each}
          </div>
        </div>
      </div>
      
      <!-- Conteúdo -->
      <div class="flex-1 overflow-y-auto p-8 bg-gray-50">
        {#if selectedFeature}
          <!-- Vista Detalhada -->
          <div class="max-w-4xl mx-auto">
            <button
              type="button"
              class="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              on:click={() => selectedFeature = null}
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para lista
            </button>
            
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <!-- Header da Feature -->
              <div class="bg-gradient-to-br {selectedFeature.gradient} p-8 text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
                </div>
                <div class="relative z-10">
                  <div class="flex items-start justify-between mb-6">
                    <div class="flex items-center gap-4">
                      <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={selectedFeature.icon} />
                        </svg>
                      </div>
                      <div>
                        <div class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium mb-2">
                          {selectedFeature.category}
                        </div>
                        <h3 class="text-4xl font-bold mb-2">{selectedFeature.title}</h3>
                        <p class="text-white/90 text-lg max-w-2xl">{selectedFeature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Conteúdo Detalhado -->
              <div class="p-8">
                <!-- Impacto -->
                <div class="{selectedFeature.bgLight} border-l-4 {selectedFeature.borderColor} p-6 rounded-r-xl mb-8">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg class="w-7 h-7 {selectedFeature.textColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-gray-900 mb-2">Impacto Mensurável</h4>
                      <p class="text-gray-700 text-lg">{selectedFeature.impact}</p>
                    </div>
                  </div>
                </div>
                
                <!-- Benefícios -->
                <div class="mb-8">
                  <h4 class="text-2xl font-bold text-gray-900 mb-6">Principais Benefícios</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each selectedFeature.benefits as benefit}
                      <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                        <svg class="w-6 h-6 {selectedFeature.textColor} flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    {/each}
                  </div>
                </div>
                
                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <a 
                    href="https://upclinic-aa025.web.app/signup"
                    class="flex-1 btn {selectedFeature.gradient} text-white text-center btn-large"
                  >
                    Experimentar Agora
                  </a>
                  <a 
                    href="/contato"
                    class="flex-1 btn btn-outline {selectedFeature.borderColor} {selectedFeature.textColor} hover:{selectedFeature.bgLight} text-center btn-large"
                  >
                    Falar com Especialista
                  </a>
                  <a 
                    href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20{selectedFeature.title}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 btn bg-green-500 hover:bg-green-600 text-white text-center btn-large"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        {:else}
          <!-- Grid de Funcionalidades -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredFeatures as feature}
              <div
                class="group bg-white rounded-2xl border-2 border-gray-200 {getHoverBorderClass(feature.color)} overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                on:click={() => selectedFeature = feature}
                role="button"
                tabindex="0"
                on:keydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectedFeature = feature;
                  }
                }}
              >
                <!-- Header do Card -->
                <div class="bg-gradient-to-br {feature.gradient} p-6 text-white relative overflow-hidden">
                  <div class="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div class="relative z-10">
                    <div class="flex items-center justify-between mb-4">
                      <div class="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
                        </svg>
                      </div>
                      <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-semibold">
                        {feature.category}
                      </span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">{feature.title}</h3>
                    <p class="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                <!-- Conteúdo do Card -->
                <div class="p-6">
                  <!-- Impacto -->
                  <div class="{feature.bgLight} border-l-4 {feature.borderColor} p-4 rounded-r-lg mb-4">
                    <p class="text-sm font-semibold {feature.textColor} mb-1">Impacto:</p>
                    <p class="text-gray-700 text-sm">{feature.impact}</p>
                  </div>
                  
                  <!-- Benefícios (primeiros 3) -->
                  <div class="space-y-2 mb-4">
                    {#each feature.benefits.slice(0, 3) as benefit}
                      <div class="flex items-center gap-2 text-sm text-gray-600">
                        <svg class="w-4 h-4 {feature.textColor} flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="line-clamp-1">{benefit}</span>
                      </div>
                    {/each}
                    {#if feature.benefits.length > 3}
                      <p class="text-xs text-gray-500 mt-2">+{feature.benefits.length - 3} benefícios adicionais</p>
                    {/if}
                  </div>
                  
                  <!-- CTA -->
                  <button
                    type="button"
                    class="w-full bg-gradient-to-br {feature.gradient} text-white text-center text-sm py-2.5 rounded-full font-semibold hover:shadow-lg transition-all"
                  >
                    Ver Detalhes
                    <svg class="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            {/each}
          </div>
          
          <!-- CTA Final -->
          <div class="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 class="text-3xl md:text-4xl font-bold mb-4">Transforme sua clínica hoje</h3>
            <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 3.200 clínicas que já transformaram sua gestão com o UpClinic
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://upclinic-aa025.web.app/signup"
                class="btn bg-white text-blue-600 hover:bg-gray-100 btn-large"
              >
                Começar Agora - Grátis
              </a>
              <a 
                href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20UpClinic"
                target="_blank"
                rel="noopener noreferrer"
                class="btn bg-green-500 hover:bg-green-600 text-white btn-large"
              >
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        {/if}
      </div>
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
  
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>

