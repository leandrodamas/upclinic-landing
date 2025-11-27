<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let stripeLoaded = false;
  
  // Configuração da Stripe Pricing Table
  const STRIPE_CONFIG = {
    pricingTableId: 'prctbl_1SGjR4JgDiwrjPsttCMjYT0l',
    publishableKey: 'pk_live_51RJcEcJgDiwrjPst442rbfublOeAi2EpTli6wtnASS5Trbm3fln4ggIJXyqtq2aRV1bBKI5UMF9Qwq3L8HSD8xtr00h5KIKhGd'
  };
  
  onMount(() => {
    // Só executar no cliente (browser)
    if (!browser) return;
    
    // Função para carregar o script do Stripe
    const loadStripeScript = () => {
      if (window.StripePricingTable) {
        stripeLoaded = true;
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/pricing-table.js';
      script.async = true;
      script.onload = () => {
        stripeLoaded = true;
        console.log('✅ Stripe Pricing Table carregado');
      };
      script.onerror = () => {
        console.error('❌ Erro ao carregar Stripe Pricing Table');
        stripeLoaded = false;
      };
      document.head.appendChild(script);
    };
    
    // Carregar script
    loadStripeScript();
    
    // Listener para eventos do Stripe Pricing Table
    const handleCheckoutSuccess = (event) => {
      console.log('✅ Checkout bem-sucedido:', event.detail);
      // Redirecionar para página de sucesso no sistema principal
      if (event.detail?.sessionId) {
        window.location.href = 'https://upclinic-aa025.web.app/success?session_id=' + event.detail.sessionId;
      }
    };
    
    document.addEventListener('stripe-pricing-table-checkout-session-created', handleCheckoutSuccess);
    
    return () => {
      document.removeEventListener('stripe-pricing-table-checkout-session-created', handleCheckoutSuccess);
    };
  });
  
</script>

<svelte:head>
  <title>Planos e Preços - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Escolha o plano ideal para sua clínica. Planos flexíveis com funcionalidades completas de gestão médica." />
  <link rel="canonical" href="https://clinicupapp.com/planos" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Tabela de Preços Stripe (Integração Real) -->
    <div class="max-w-5xl mx-auto mb-16">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-6">
          <p class="text-gray-600">
            Pagamento seguro processado pelo Stripe. Após o pagamento, sua conta será ativada automaticamente.
          </p>
        </div>
        
        {#if browser && stripeLoaded}
          <div id="stripe-pricing-table-container">
            <stripe-pricing-table 
              pricing-table-id={STRIPE_CONFIG.pricingTableId}
              publishable-key={STRIPE_CONFIG.publishableKey}
            />
          </div>
        {:else if browser}
          <div class="flex items-center justify-center py-12">
            <div class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p class="text-gray-600">Carregando tabela de preços...</p>
            </div>
          </div>
        {:else}
          <div class="flex items-center justify-center py-12">
            <div class="text-center">
              <p class="text-gray-600">Carregando...</p>
            </div>
          </div>
        {/if}
        
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p class="text-sm text-gray-700">
            <strong>💡 Como funciona:</strong> Ao clicar em "Assinar", você será redirecionado para o checkout seguro do Stripe. 
            Após o pagamento, sua conta será ativada automaticamente e você receberá um email de confirmação. 
            Se você já tem uma conta, use o mesmo email do cadastro para que o pagamento seja associado automaticamente.
          </p>
        </div>
      </div>
    </div>
    
    <!-- FAQ de Planos -->
    <div class="mt-24 max-w-3xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
      <div class="space-y-4">
        <details class="card">
          <summary class="font-bold text-gray-900 cursor-pointer">Posso mudar de plano depois?</summary>
          <p class="mt-4 text-gray-600">
            Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
            As alterações são aplicadas imediatamente.
          </p>
        </details>
        
        <details class="card">
          <summary class="font-bold text-gray-900 cursor-pointer">Há período de teste?</summary>
          <p class="mt-4 text-gray-600">
            Sim, oferecemos 30 dias de teste gratuito para você conhecer todas as funcionalidades 
            do sistema sem compromisso.
          </p>
        </details>
        
        <details class="card">
          <summary class="font-bold text-gray-900 cursor-pointer">Os dados são seguros?</summary>
          <p class="mt-4 text-gray-600">
            Absolutamente. Utilizamos criptografia de ponta a ponta, backup automático e estamos 
            totalmente em conformidade com a LGPD.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

<Footer />

