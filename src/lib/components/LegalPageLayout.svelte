<script lang="ts">
  import { onMount } from 'svelte';
  
  export let title;
  export let lastUpdated = new Date().toLocaleDateString('pt-BR');
  export let toc = [];
  
  let showBackToTop = false;
  
  onMount(() => {
    const handleScroll = () => {
      showBackToTop = window.scrollY > 400;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="min-h-screen bg-gray-50 py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Breadcrumb -->
      <nav class="mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" class="hover:text-blue-600">Início</a></li>
          <li>/</li>
          <li class="text-gray-900">{title}</li>
        </ol>
      </nav>
      
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Table of Contents -->
        {#if toc.length > 0}
          <aside class="lg:col-span-1">
            <div class="sticky top-24">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="font-bold text-gray-900 mb-4">Índice</h3>
                <nav class="space-y-2">
                  {#each toc as item}
                    <a
                      href="#{item.id}"
                      class="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  {/each}
                </nav>
              </div>
            </div>
          </aside>
        {/if}
        
        <!-- Main Content -->
        <div class="lg:col-span-3">
          <article class="bg-white rounded-lg shadow-md p-8 md:p-12">
            <header class="mb-8">
              <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              <p class="text-sm text-gray-500">
                Última atualização: {lastUpdated}
              </p>
            </header>
            
            <div class="prose prose-lg max-w-none">
              <slot />
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Back to Top Button -->
  {#if showBackToTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50"
      aria-label="Voltar ao topo"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  {/if}
</div>

<style>
  :global(.prose h2) {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  :global(.prose h3) {
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  :global(.prose p) {
    color: #374151;
    line-height: 1.75;
    margin-bottom: 1rem;
  }
  
  :global(.prose ul) {
    list-style-type: disc;
    list-style-position: inside;
    margin-bottom: 1rem;
    color: #374151;
  }
  
  :global(.prose ul li) {
    margin-bottom: 0.5rem;
  }
  
  :global(.prose ol) {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 1rem;
    color: #374151;
  }
  
  :global(.prose ol li) {
    margin-bottom: 0.5rem;
  }
  
  :global(.prose a) {
    color: #2563eb;
    text-decoration: underline;
  }
  
  :global(.prose a:hover) {
    color: #1d4ed8;
  }
</style>

