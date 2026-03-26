<script>
  import { onMount } from 'svelte';
  import ImageWithFallback from './ImageWithFallback.svelte';
  import { LOGIN_URL, REGISTER_URL } from '$lib/constants';

  let scrolled = false;
  let mobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() { mobileMenuOpen = !mobileMenuOpen; }

  function trackEvent(name, source) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: name, content_category: 'SaaS', source }, { eventID: eventId });
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_name: 'Lead', event_id: eventId, event_data: { content_name: name, content_category: 'SaaS', source } })
      }).catch(() => {});
    }
    if (window.gtag) {
      window.gtag('event', name === 'CTA Registro' ? 'sign_up' : 'login', { event_category: 'engagement', event_label: source });
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
      <div class="hidden md:flex items-center space-x-6 lg:space-x-8">
        <a href="/#funcionalidades" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">Funcionalidades</a>
        <a href="/planos" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">Planos</a>
        <a href="/sobre" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">Sobre</a>
        <a href="/contato" class="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base">Contato</a>

        <!-- Entrar no UpClinic — contorno -->
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
          on:click|preventDefault={() => { trackEvent('CTA Login', 'Navbar'); window.open(LOGIN_URL, '_blank'); }}
        >
          Entrar no UpClinic
        </a>

        <!-- Iniciar Teste Grátis — destaque verde -->
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
          on:click|preventDefault={() => { trackEvent('CTA Registro', 'Navbar'); window.open(REGISTER_URL, '_blank'); }}
        >
          Iniciar Teste Grátis
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
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
      <div class="md:hidden py-4 space-y-2 animate-fade-in bg-white rounded-lg mt-2 shadow-lg border border-gray-100 px-2">
        <a href="/#funcionalidades" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Funcionalidades</a>
        <a href="/planos" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Planos</a>
        <a href="/sobre" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Sobre</a>
        <a href="/contato" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>Contato</a>
        <div class="pt-2 space-y-2 border-t border-gray-100 mt-2">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            on:click={() => { trackEvent('CTA Login', 'Navbar Mobile'); mobileMenuOpen = false; }}
          >
            Entrar no UpClinic
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md transition-all"
            on:click={() => { trackEvent('CTA Registro', 'Navbar Mobile'); mobileMenuOpen = false; }}
          >
            Iniciar Teste Grátis — 30 dias grátis
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>
