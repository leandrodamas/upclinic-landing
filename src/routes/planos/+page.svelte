<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  function handleAccessPlans() {
    // Redirecionar para o sistema principal onde o usuário fará login
    window.location.href = 'https://upclinic-aa025.web.app/pricing';
  }
</script>

<svelte:head>
  <title>Planos | UpClinic</title>
  <meta
    name="description"
    content="Conheça os planos do UpClinic e escolha o ideal para sua clínica ou consultório."
  />
  <link rel="canonical" href="https://clinicupapp.com/planos" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Planos e Preços
      </span>
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Escolha o Plano Ideal
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Planos acessíveis para todos os profissionais da saúde. Todos incluem período de teste gratuito.
      </p>
      
      <!-- CTA para acessar planos no sistema -->
      <div class="max-w-2xl mx-auto mt-12">
        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-12 text-white">
          <div class="flex items-center justify-center mb-6">
            <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h2 class="text-3xl font-bold mb-4 text-center">
            Pronto para começar?
          </h2>
          
          <p class="text-xl text-blue-100 mb-8 text-center">
            Faça login ou crie sua conta para ver todos os planos disponíveis
          </p>
          
          <button
            on:click={handleAccessPlans}
            class="w-full bg-white text-blue-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Ver Planos e Preços →
          </button>
          
          <div class="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">30 dias</div>
              <div class="text-sm text-blue-100">Teste Grátis</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">R$ 0</div>
              <div class="text-sm text-blue-100">Taxa de Setup</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold mb-1">100%</div>
              <div class="text-sm text-blue-100">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Informações Adicionais -->
    <div class="mt-16 max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-white rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Teste Grátis</h3>
          <p class="text-gray-600 text-sm">Todos os planos incluem período de teste gratuito para você experimentar</p>
        </div>
        
        <div class="text-center p-6 bg-white rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Sem Taxa de Setup</h3>
          <p class="text-gray-600 text-sm">Não cobramos taxa de instalação ou configuração inicial</p>
        </div>
        
        <div class="text-center p-6 bg-white rounded-xl shadow-sm">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Cancele Quando Quiser</h3>
          <p class="text-gray-600 text-sm">Cancele sua assinatura a qualquer momento sem multas ou taxas</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
