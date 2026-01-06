<script>
  import { onMount } from 'svelte';
  import ImageWithFallback from './ImageWithFallback.svelte';
  
  let scrolled = false;
  let mobileMenuOpen = false;
  
  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function trackLeadEnter() {
    if (typeof window !== 'undefined' && window.fbq) {
      // Gerar event_id único para deduplicação
      const eventId = crypto.randomUUID();
      window.fbq('track', 'Lead', {
        content_name: 'CTA Entrar',
        content_category: 'SaaS',
        source: 'Navbar'
      }, { eventID: eventId });
      console.log('🔥 Meta Pixel Lead (Entrar) - Event ID:', eventId);
      
      // Enviar para backend para deduplicação via CAPI
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          event_id: eventId,
          event_data: {
            content_name: 'CTA Entrar',
            content_category: 'SaaS',
            source: 'Navbar'
          }
        })
      }).catch(err => console.warn('Erro ao enviar evento para CAPI:', err));
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center group">
        <ImageWithFallback 
          src="/logo-upclinic-white.png"
          alt="UpClinic Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
          fallback="/logo-upclinic-white.png"
        />
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/#inicio" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a>
        <a href="/#funcionalidades" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Funcionalidades</a>
        <a href="/planos" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Planos</a>
        <a href="/sobre" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</a>
        <a href="/contato" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a>
        <a 
          href="https://upclinic-aa025.web.app/login" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm"
          on:click|preventDefault={() => {
            trackLeadEnter();
            window.location.href = 'https://upclinic-aa025.web.app/login';
          }}
        >
          Entrar
        </a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 space-y-4 animate-fade-in bg-white rounded-lg mt-2 shadow-lg border border-gray-100">
        <a href="/#inicio" class="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Início</a>
        <a href="/#funcionalidades" class="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Funcionalidades</a>
        <a href="/planos" class="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Planos</a>
        <a href="/sobre" class="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Sobre</a>
        <a href="/contato" class="block text-gray-700 hover:text-blue-600 font-medium px-2 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Contato</a>
        <div class="pt-2 px-2">
          <a 
            href="https://upclinic-aa025.web.app/login" 
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm w-full"
            on:click|preventDefault={() => {
              trackLeadEnter();
              mobileMenuOpen = false;
              window.location.href = 'https://upclinic-aa025.web.app/login';
            }}
          >
            Entrar
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

