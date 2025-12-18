<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let customerEmail = '';
  let showEmailInput = true;
  let emailError = '';
  
  // Verificar se há email na URL ou localStorage
  onMount(() => {
    // Verificar query params
    const urlParams = new URLSearchParams(window.location.search);
    const emailFromUrl = urlParams.get('email');
    
    if (emailFromUrl) {
      customerEmail = emailFromUrl;
      showEmailInput = false;
    } else {
      // Tentar recuperar do localStorage (se usuário já usou o sistema)
      const savedEmail = localStorage.getItem('upclinic_user_email');
      if (savedEmail) {
        customerEmail = savedEmail;
        showEmailInput = false;
      }
    }
    
    // Aguardar o script do Stripe carregar
    const checkStripe = setInterval(() => {
      if (window.StripePricingTable || document.querySelector('stripe-pricing-table')) {
        clearInterval(checkStripe);
      }
    }, 100);
    
    setTimeout(() => clearInterval(checkStripe), 5000);
  });
  
  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function handleEmailSubmit() {
    emailError = '';
    
    if (!customerEmail.trim()) {
      emailError = 'Por favor, insira seu email';
      return;
    }
    
    if (!validateEmail(customerEmail)) {
      emailError = 'Por favor, insira um email válido';
      return;
    }
    
    // Salvar email no localStorage para futuras visitas
    localStorage.setItem('upclinic_user_email', customerEmail);
    showEmailInput = false;
  }
  
  function handleChangeEmail() {
    showEmailInput = true;
    emailError = '';
  }
</script>

<svelte:head>
  <title>Planos | UpClinic</title>
  <meta
    name="description"
    content="Conheça os planos do UpClinic e escolha o ideal para sua clínica ou consultório."
  />
  <link rel="canonical" href="https://clinicupapp.com/planos" />
  <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
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
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Planos acessíveis para todos os profissionais da saúde. Todos incluem período de teste gratuito.
      </p>
    </div>
    
    <!-- Email Input Section -->
    {#if showEmailInput}
      <div class="max-w-md mx-auto mb-12">
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div class="text-center mb-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Insira seu email</h2>
            <p class="text-gray-600">Para vincular sua assinatura ao sistema UpClinic</p>
          </div>
          
          <form on:submit|preventDefault={handleEmailSubmit} class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email profissional
              </label>
              <input
                type="email"
                id="email"
                bind:value={customerEmail}
                placeholder="seu@email.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
              {#if emailError}
                <p class="mt-2 text-sm text-red-600">{emailError}</p>
              {/if}
            </div>
            
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Continuar para Planos
            </button>
          </form>
          
          <p class="mt-4 text-xs text-gray-500 text-center">
            🔒 Seu email será usado apenas para vincular sua assinatura
          </p>
        </div>
      </div>
    {:else}
      <!-- Email Confirmado -->
      <div class="max-w-md mx-auto mb-8">
        <div class="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Email confirmado</p>
              <p class="text-sm text-gray-600">{customerEmail}</p>
            </div>
          </div>
          <button
            on:click={handleChangeEmail}
            class="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Alterar
          </button>
        </div>
      </div>
      
      <!-- Stripe Pricing Table com email vinculado -->
      <div class="max-w-6xl mx-auto">
        <stripe-pricing-table 
          pricing-table-id="prctbl_1SGjR4JgDiwrjPsttCMjYT0l"
          publishable-key="pk_live_51RJcEcJgDiwrjPst442rbfublOeAi2EpTli6wtnASS5Trbm3fln4ggIJXyqtq2aRV1bBKI5UMF9Qwq3L8HSD8xtr00h5KIKhGd"
          customer-email={customerEmail}>
        </stripe-pricing-table>
      </div>
    {/if}
    
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
