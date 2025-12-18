<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { CONTACT } from '$lib/constants';
  
  function trackWhatsAppClick(label: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: label
      });
    }
  }
  
  let searchQuery = '';
  
  const categories = [
    {
      id: 'primeiros-passos',
      title: 'Primeiros Passos',
      description: 'Aprenda o básico para começar a usar o UpClinic rapidamente.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      color: 'blue',
      link: '/faq?category=Geral'
    },
    {
      id: 'pacientes',
      title: 'Gestão de Pacientes',
      description: 'Cadastro, prontuários eletrônicos e histórico completo.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'green',
      link: '/faq?category=Funcionalidades'
    },
    {
      id: 'agendamentos',
      title: 'Agendamentos',
      description: 'Calendário inteligente, confirmações automáticas e muito mais.',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'purple',
      link: '/faq?category=Funcionalidades'
    },
    {
      id: 'telemedicina',
      title: 'Telemedicina',
      description: 'Consultas online seguras com videochamada integrada.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      color: 'indigo',
      link: '/telemedicina'
    },
    {
      id: 'financeiro',
      title: 'Módulo Financeiro',
      description: 'Controle completo de receitas, despesas e relatórios.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'yellow',
      link: '/faq?category=Funcionalidades'
    },
    {
      id: 'integracoes',
      title: 'Integrações',
      description: 'WhatsApp, Google Calendar, Stripe e muito mais.',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      color: 'pink',
      link: '/faq?category=Funcionalidades'
    }
  ];
  
  $: displayedCategories = searchQuery.trim() === ''
    ? categories
    : categories.filter(cat => 
        cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  function getColorClasses(color: string) {
    const colorMap: Record<string, { bg: string; text: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600' }
    };
    return colorMap[color] || colorMap.blue;
  }
</script>

<svelte:head>
  <title>Documentação | UpClinic</title>
  <meta
    name="description"
    content="Documentação completa do sistema UpClinic - guias, tutoriais e recursos para profissionais de saúde."
  />
  <link rel="canonical" href="https://clinicupapp.com/documentacao" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <!-- Header -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        📚 Central de Ajuda
      </span>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Documentação UpClinic
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Tudo que você precisa para aproveitar ao máximo o sistema de gestão de clínicas mais completo do Brasil.
      </p>
    </div>

    <!-- Busca Rápida FUNCIONAL -->
    <div class="max-w-2xl mx-auto mb-16">
      <div class="relative">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar na documentação..."
          class="w-full px-6 py-4 pl-14 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-sm transition-colors"
        />
        <svg class="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {#if searchQuery}
          <button
            on:click={() => searchQuery = ''}
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Limpar busca"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        {/if}
      </div>
      {#if searchQuery && displayedCategories.length === 0}
        <p class="text-center text-gray-500 mt-4">
          Nenhum resultado encontrado para "{searchQuery}"
        </p>
      {/if}
    </div>

    <!-- Categorias Principais COM LINKS FUNCIONAIS -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {#each displayedCategories as category}
        {@const colorClasses = getColorClasses(category.color)}
        <a
          href={category.link}
          class="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer block"
        >
          <div class="w-14 h-14 {colorClasses.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 {colorClasses.text}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={category.icon} />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
          <p class="text-gray-600 mb-4">{category.description}</p>
          <span class="text-blue-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
            Ver guia →
          </span>
        </a>
      {/each}
    </div>

    <!-- Recursos Adicionais -->
    <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-3xl font-bold mb-4">Precisa de ajuda?</h2>
          <p class="text-blue-100 mb-6 text-lg">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              href="{CONTACT.whatsappLink}?text=Olá!%20Preciso%20de%20ajuda%20com%20a%20documentação%20do%20UpClinic" 
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              on:click={() => trackWhatsAppClick('botao_whatsapp_documentacao')}
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chamar no WhatsApp
            </a>
            <a 
              href="/contato" 
              class="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Enviar Email
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div class="text-3xl font-bold mb-1">24/7</div>
              <div class="text-sm text-blue-100">Suporte Disponível</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div class="text-3xl font-bold mb-1">100+</div>
              <div class="text-sm text-blue-100">Artigos de Ajuda</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div class="text-3xl font-bold mb-1">50+</div>
              <div class="text-sm text-blue-100">Vídeos Tutoriais</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div class="text-3xl font-bold mb-1">4.9⭐</div>
              <div class="text-sm text-blue-100">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
