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
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center group">
        <ImageWithFallback 
          src="/ChatGPT Image 30 de nov. de 2025, 01_06_00.png"
          alt="UpClinic Logo"
          class="h-28 w-auto object-contain mt-4"
          fallback="/ChatGPT Image 30 de nov. de 2025, 01_06_00.png"
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
      <div class="md:hidden py-4 space-y-4 animate-fade-in">
        <a href="/#inicio" class="block text-gray-700 hover:text-blue-600 font-medium">Início</a>
        <a href="/#funcionalidades" class="block text-gray-700 hover:text-blue-600 font-medium" on:click={() => mobileMenuOpen = false}>Funcionalidades</a>
        <a href="/planos" class="block text-gray-700 hover:text-blue-600 font-medium" on:click={() => mobileMenuOpen = false}>Planos</a>
        <a href="/sobre" class="block text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
        <a href="/contato" class="block text-gray-700 hover:text-blue-600 font-medium">Contato</a>
        <a 
          href="https://upclinic-aa025.web.app/login" 
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm w-full"
        >
          Entrar
        </a>
      </div>
    {/if}
  </div>
</nav>

