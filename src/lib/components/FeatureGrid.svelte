<script>
  import { onMount } from 'svelte';
  import FeatureDemoModal from './FeatureDemoModal.svelte';
  import FeatureDetailModal from './FeatureDetailModal.svelte';
  
  let demoModal;
  let detailModal;
  let selectedItem = null;
  let expandedItems = [];
  let sidebarCollapsed = false;

  // Estrutura do menu lateral oficial do UpClinic (copiada do ResponsiveSidebar.tsx)
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Início',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      path: '/dashboard',
      sectionTitle: null,
      description: 'Dashboard principal com visão geral da clínica, métricas em tempo real, gráficos de atendimentos e acesso rápido às principais funcionalidades.',
      priority: 'high'
    },
    {
      id: 'patients',
      label: 'Pacientes',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      path: '/patients',
      sectionTitle: 'ATENDIMENTO',
      description: 'Gestão completa de pacientes com prontuário eletrônico, histórico médico, exames, prescrições, busca avançada e integração com outros módulos.',
      priority: 'high'
    },
    {
      id: 'appointments',
      label: 'Agendamentos',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      path: '/appointments',
      description: 'Sistema de agendamento inteligente com lembretes automáticos por WhatsApp e email, otimização de horários, bloqueios e gestão completa da agenda.',
      priority: 'high'
    },
    {
      id: 'telemedicine',
      label: 'Telemedicina',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      path: '/telemedicine',
      description: 'Consultas online integradas com videoconferência de alta qualidade, prescrição digital, prontuário sincronizado e histórico completo.',
      priority: 'medium'
    },
    {
      id: 'reminders',
      label: 'Lembretes',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      path: '/reminders',
      description: 'Sistema de lembretes e notificações automáticas por WhatsApp, SMS e email para pacientes e profissionais, com agendamento inteligente.',
      priority: 'medium'
    },
    {
      id: 'laboratory',
      label: 'Laboratório',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      path: '/laboratory',
      sectionTitle: 'SERVIÇOS CLÍNICOS',
      description: 'Gestão completa de exames laboratoriais e de imagem, laudos digitais, integração com laboratórios parceiros e histórico de exames.',
      priority: 'medium'
    },
    {
      id: 'pharmacy',
      label: 'Farmácia',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      path: '/pharmacy',
      description: 'Gestão de medicamentos, controle de estoque, prescrições digitais, integração com farmácias parceiras e validação de medicamentos.',
      priority: 'medium'
    },
    {
      id: 'financial',
      label: 'Financeiro',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      path: '/financial',
      sectionTitle: 'GESTÃO FINANCEIRA',
      description: 'Controle completo de receitas, despesas, pagamentos, relatórios financeiros detalhados, conciliação bancária e cobrança recorrente.',
      priority: 'high',
      children: [
        {
          id: 'financial-dashboard',
          label: 'Visão Geral',
          icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
          description: 'Dashboard financeiro com métricas em tempo real, gráficos de receita e despesa, e indicadores de performance.'
        },
        {
          id: 'financial-accounts',
          label: 'Contas a Receber',
          icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
          description: 'Gestão de recebimentos pendentes, controle de inadimplência e acompanhamento de pagamentos.'
        },
        {
          id: 'financial-billing',
          label: 'Cobrança Recorrente',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
          description: 'Sistema de assinaturas e planos com cobrança automática mensal, sem necessidade de cobrar manualmente todo mês.'
        }
      ]
    },
    {
      id: 'professionals',
      label: 'Profissionais',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      path: '/professionals',
      sectionTitle: 'ADMINISTRAÇÃO',
      description: 'Controle completo da equipe médica, especialidades, escalas, disponibilidade, permissões de acesso e gestão de profissionais.',
      priority: 'medium'
    },
    {
      id: 'reports',
      label: 'Relatórios',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      path: '/reports',
      description: 'Dashboards interativos, relatórios personalizados, métricas de performance e análises detalhadas do seu negócio.',
      priority: 'medium'
    },
    {
      id: 'ai',
      label: 'IA Médica',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      path: '/ai',
      sectionTitle: 'INTELIGÊNCIA & AUTOMAÇÃO',
      description: 'Assistente de IA para diagnósticos, análise de exames, sugestões de tratamento baseadas em evidências científicas e automações inteligentes.',
      priority: 'medium'
    },
    {
      id: 'settings',
      label: 'Configurações',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      path: '/settings',
      description: 'Configurações gerais do sistema, permissões, integrações, personalização e gestão de usuários.',
      priority: 'low'
    }
  ];

  function toggleExpand(itemId) {
    if (expandedItems.includes(itemId)) {
      expandedItems = expandedItems.filter(id => id !== itemId);
    } else {
      expandedItems = [...expandedItems, itemId];
    }
  }

  function handleItemClick(item) {
    selectedItem = item;
    if (item.children && item.children.length > 0) {
      toggleExpand(item.id);
    }
    
    // Scroll para a área de conteúdo no mobile
    setTimeout(() => {
      const contentArea = document.getElementById('feature-content-area');
      if (contentArea) {
        contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  function openDemo() {
    if (demoModal) {
      demoModal.open();
    }
  }

  function openFeatureDetail(feature) {
    if (detailModal) {
      detailModal.open(feature);
    }
  }
</script>

<section id="funcionalidades" class="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <span class="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
        Funcionalidades
      </span>
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">Tudo que sua clínica precisa</h2>
      <p class="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
        Um sistema completo e integrado com mais de 18 funcionalidades para gerenciar todos os aspectos da sua prática médica
      </p>
    </div>

    <!-- Container com tela de desktop/mobile -->
    <div class="relative max-w-6xl mx-auto">
      <!-- Desktop Screen -->
      <div class="bg-gray-900 rounded-t-xl md:rounded-t-2xl p-2 md:p-3 shadow-xl md:shadow-2xl mb-6 md:mb-8">
        <!-- Barra de título do desktop -->
        <div class="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
          <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
          <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
          <div class="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
          <div class="ml-2 md:ml-4 text-gray-400 text-xs md:text-sm font-medium truncate">UpClinic - Sistema de Gestão Médica</div>
        </div>
        
        <!-- Tela do desktop com menu lateral -->
        <div class="bg-white rounded-lg overflow-hidden shadow-inner h-[400px] md:h-[500px] lg:h-[600px] min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <div class="flex h-full flex-col md:flex-row">
            <!-- Sidebar (Menu Lateral Oficial) -->
            <div class="w-full md:w-48 lg:w-64 bg-gradient-to-b from-blue-50 to-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col h-[200px] md:h-full flex-shrink-0">
              <!-- Header do Sidebar -->
              <div class="p-2 md:p-3 lg:p-4 border-b border-gray-200 flex items-center gap-2 md:gap-3 flex-shrink-0">
                <div class="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-md overflow-hidden bg-white flex-shrink-0">
                  <img 
                    src="/1-615ef95f.png" 
                    alt="UpClinic Logo" 
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-gray-800 text-sm md:text-base lg:text-lg truncate">UpClinic</div>
                  <div class="text-[10px] md:text-xs text-gray-500 truncate">Sistema Médico</div>
                </div>
              </div>

              <!-- Menu Items -->
              <div class="flex-1 overflow-y-auto py-1 md:py-2 min-h-0">
                {#each menuItems as item (item.id)}
                  {@const isSelected = selectedItem?.id === item.id}
                  {@const isExpanded = expandedItems.includes(item.id)}
                  {@const hasChildren = item.children && item.children.length > 0}
                  
                  <!-- Divisor de seção -->
                  {#if item.sectionTitle}
                    <div class="px-2 md:px-3 lg:px-4 py-1 md:py-2">
                      <div class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">{item.sectionTitle}</div>
                    </div>
                  {/if}

                  <!-- Item do menu -->
                  <div
                    class="px-1 md:px-2 mx-1 md:mx-2 mb-0.5 md:mb-1"
                  >
                    <button
                      class="w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2 lg:py-2.5 rounded-md md:rounded-lg transition-all duration-200 {isSelected ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}"
                      on:click={() => handleItemClick(item)}
                      on:keydown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleItemClick(item);
                        }
                      }}
                    >
                      <svg class="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={item.icon} />
                      </svg>
                      <span class="flex-1 text-left font-medium text-xs md:text-sm truncate">{item.label}</span>
                      {#if hasChildren}
                        <svg class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      {/if}
                    </button>

                    <!-- Subitens -->
                    {#if hasChildren && isExpanded}
                      <div class="ml-2 md:ml-4 mt-0.5 md:mt-1 space-y-0.5 md:space-y-1">
                        {#each item.children as child (child.id)}
                          {@const isChildSelected = selectedItem?.id === child.id}
                          <button
                            class="w-full flex items-center gap-2 md:gap-3 px-2 md:px-3 py-1 md:py-2 rounded-md md:rounded-lg text-xs md:text-sm transition-all duration-200 {isChildSelected ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'}"
                            on:click={() => handleItemClick(child)}
                          >
                            <svg class="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={child.icon} />
                            </svg>
                            <span class="flex-1 text-left truncate">{child.label}</span>
                          </button>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>

              <!-- Footer do Sidebar -->
              <div class="p-2 md:p-3 lg:p-4 border-t border-gray-200 flex-shrink-0">
                <div class="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-500">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Sistema Online</span>
                </div>
              </div>
            </div>

            <!-- Área de conteúdo (lado direito) -->
            <div class="flex-1 bg-gray-50 p-4 md:p-6 lg:p-8 overflow-y-auto min-h-[200px] md:min-h-0" id="feature-content-area">
              {#if selectedItem}
                <!-- Card de informações da funcionalidade -->
                <div class="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg p-4 md:p-6 lg:p-8 max-w-3xl animate-fade-in">
                  <div class="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-md md:shadow-lg flex-shrink-0">
                      <svg class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={selectedItem.icon} />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">{selectedItem.label}</h3>
                      <div class="flex flex-wrap items-center gap-1.5 md:gap-2">
                        <span class="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-xs font-semibold">
                          {selectedItem.priority === 'high' ? 'Alta Prioridade' : selectedItem.priority === 'medium' ? 'Média Prioridade' : 'Baixa Prioridade'}
                        </span>
                        {#if selectedItem.path}
                          <span class="text-[10px] md:text-xs text-gray-500 truncate">Rota: {selectedItem.path}</span>
                        {/if}
                      </div>
                    </div>
                  </div>

                  <div class="prose max-w-none">
                    <p class="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                      {selectedItem.description}
                    </p>

                    <!-- Funcionalidades principais -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6">
                      <div class="bg-blue-50 rounded-md md:rounded-lg p-3 md:p-4">
                        <div class="font-semibold text-blue-900 mb-1 md:mb-2 text-xs md:text-sm">✓ Integração Completa</div>
                        <div class="text-xs md:text-sm text-blue-700">Conectado com todos os módulos do sistema</div>
                      </div>
                      <div class="bg-green-50 rounded-md md:rounded-lg p-3 md:p-4">
                        <div class="font-semibold text-green-900 mb-1 md:mb-2 text-xs md:text-sm">✓ Segurança LGPD</div>
                        <div class="text-xs md:text-sm text-green-700">Dados protegidos e criptografados</div>
                      </div>
                      <div class="bg-purple-50 rounded-md md:rounded-lg p-3 md:p-4">
                        <div class="font-semibold text-purple-900 mb-1 md:mb-2 text-xs md:text-sm">✓ Acesso Mobile</div>
                        <div class="text-xs md:text-sm text-purple-700">Disponível em qualquer dispositivo</div>
                      </div>
                      <div class="bg-yellow-50 rounded-md md:rounded-lg p-3 md:p-4">
                        <div class="font-semibold text-yellow-900 mb-1 md:mb-2 text-xs md:text-sm">✓ Suporte 24/7</div>
                        <div class="text-xs md:text-sm text-yellow-700">Atendimento sempre disponível</div>
                      </div>
                    </div>
                  </div>
                </div>
              {:else}
                <!-- Mini-dashboard de demonstração -->
                <div class="space-y-3 md:space-y-4 animate-fade-in">

                  <!-- Header -->
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm md:text-base font-bold text-gray-800">Bom dia, Dr. Silva 👋</h3>
                      <p class="text-[10px] md:text-xs text-gray-500">Quinta-feira, 27 de março de 2026</p>
                    </div>
                    <span class="text-[10px] md:text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">● Online</span>
                  </div>

                  <!-- KPI Cards -->
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {#each [
                      { label: 'Pacientes', value: '1.247', sub: '+12 este mês', bg: 'from-blue-600 to-blue-500', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
                      { label: 'Consultas Hoje', value: '8', sub: '3 pendentes', bg: 'from-purple-600 to-purple-500', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
                      { label: 'Profissionais', value: '7', sub: 'Equipe ativa', bg: 'from-green-600 to-green-500', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                      { label: 'Receita / Mês', value: 'R$ 48k', sub: '+18% vs anterior', bg: 'from-amber-500 to-orange-500', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
                    ] as kpi}
                      <div class="bg-gradient-to-br {kpi.bg} rounded-lg p-2 md:p-3 text-white">
                        <div class="flex items-center gap-1.5 mb-1">
                          <svg class="w-3 h-3 md:w-4 md:h-4 opacity-80 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={kpi.icon} />
                          </svg>
                        </div>
                        <div class="text-base md:text-xl font-bold leading-none mb-0.5">{kpi.value}</div>
                        <div class="text-[9px] md:text-[10px] opacity-90 font-medium">{kpi.label}</div>
                        <div class="text-[9px] md:text-[10px] opacity-70">{kpi.sub}</div>
                      </div>
                    {/each}
                  </div>

                  <!-- Agenda do dia -->
                  <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-2 md:p-3">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-[11px] md:text-xs font-bold text-gray-700">📅 Agenda de Hoje</span>
                      <span class="text-[10px] text-blue-600 font-semibold">8 consultas</span>
                    </div>
                    <div class="space-y-1.5">
                      {#each [
                        { time: '08:00', name: 'Maria Oliveira', type: 'Clínica Geral', status: 'concluida' },
                        { time: '09:30', name: 'João Pereira', type: 'Cardiologia', status: 'confirmada' },
                        { time: '10:00', name: 'Ana Souza', type: 'Pediatria', status: 'agendada' },
                      ] as apt}
                        <div class="flex items-center gap-2 text-[10px] md:text-xs">
                          <span class="bg-blue-600 text-white rounded px-1.5 py-0.5 font-bold tabular-nums flex-shrink-0">{apt.time}</span>
                          <span class="font-medium text-gray-800 truncate flex-1">{apt.name}</span>
                          <span class="text-gray-400 hidden md:block truncate">{apt.type}</span>
                          <span class="px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0
                            {apt.status === 'concluida' ? 'bg-green-100 text-green-700' :
                             apt.status === 'confirmada' ? 'bg-blue-100 text-blue-700' :
                             'bg-gray-100 text-gray-600'}">
                            {apt.status === 'concluida' ? '✓ Concluída' : apt.status === 'confirmada' ? 'Confirmada' : 'Agendada'}
                          </span>
                        </div>
                      {/each}
                    </div>
                  </div>

                  <!-- Ações rápidas + alertas -->
                  <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-2 md:p-3">
                      <div class="text-[11px] md:text-xs font-bold text-gray-700 mb-2">⚡ Ações Rápidas</div>
                      <div class="grid grid-cols-2 gap-1">
                        {#each ['Nova Consulta', 'Novo Paciente', 'Prontuário', 'Financeiro'] as action}
                          <div class="bg-blue-50 hover:bg-blue-100 rounded text-center py-1 px-1 text-[9px] md:text-[10px] text-blue-700 font-medium cursor-pointer transition-colors truncate">
                            {action}
                          </div>
                        {/each}
                      </div>
                    </div>
                    <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-2 md:p-3">
                      <div class="text-[11px] md:text-xs font-bold text-gray-700 mb-2">🔔 Alertas</div>
                      <div class="space-y-1">
                        <div class="flex items-center gap-1.5 text-[9px] md:text-[10px]">
                          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                          <span class="text-gray-600">3 estoque abaixo do mínimo</span>
                        </div>
                        <div class="flex items-center gap-1.5 text-[9px] md:text-[10px]">
                          <span class="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                          <span class="text-gray-600">2 aniversariantes hoje</span>
                        </div>
                        <div class="flex items-center gap-1.5 text-[9px] md:text-[10px]">
                          <span class="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                          <span class="text-gray-600">Sistema atualizado v2.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="text-[10px] text-gray-400 text-center">
                    ← Clique em um item do menu para explorar cada funcionalidade
                  </p>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão CTA -->
    <div class="text-center mt-8 md:mt-10 lg:mt-12">
      <p class="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
        E muito mais funcionalidades para transformar a gestão da sua clínica
      </p>
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
        <a 
          href="https://upclinic-aa025.web.app/login" 
          class="btn btn-primary text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 w-full sm:w-auto text-center"
        >
          Ver Todas as Funcionalidades
        </a>
        <button class="btn btn-secondary text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 w-full sm:w-auto text-center" on:click={openDemo}>
          Solicitar Demonstração
        </button>
      </div>
    </div>
  </div>

  <FeatureDemoModal bind:this={demoModal} />
  <FeatureDetailModal bind:this={detailModal} />
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
    animation: fade-in 0.3s ease-out;
  }
</style>
