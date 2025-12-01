<script>
  import { onMount } from 'svelte';
  
  let isOpen = false;
  let feature = null;
  
  export function open(selectedFeature) {
    feature = selectedFeature;
    isOpen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }
  
  export function close() {
    isOpen = false;
    feature = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
  
  function handleKeydown(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
  }
  
  onMount(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  });
  
  function getColorClasses(color) {
    const classes = {
      blue: {
        accent: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        iconBg: 'bg-blue-100'
      },
      purple: {
        accent: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700',
        iconBg: 'bg-purple-100'
      },
      indigo: {
        accent: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        iconBg: 'bg-indigo-100'
      },
      green: {
        accent: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700',
        iconBg: 'bg-green-100'
      },
      pink: {
        accent: 'text-pink-600',
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        button: 'bg-pink-600 hover:bg-pink-700',
        iconBg: 'bg-pink-100'
      },
      cyan: {
        accent: 'text-cyan-600',
        bg: 'bg-cyan-50',
        border: 'border-cyan-200',
        button: 'bg-cyan-600 hover:bg-cyan-700',
        iconBg: 'bg-cyan-100'
      },
      red: {
        accent: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-200',
        button: 'bg-red-600 hover:bg-red-700',
        iconBg: 'bg-red-100'
      },
      orange: {
        accent: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        button: 'bg-orange-600 hover:bg-orange-700',
        iconBg: 'bg-orange-100'
      },
      yellow: {
        accent: 'text-yellow-600',
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        button: 'bg-yellow-600 hover:bg-yellow-700',
        iconBg: 'bg-yellow-100'
      },
      teal: {
        accent: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        button: 'bg-teal-600 hover:bg-teal-700',
        iconBg: 'bg-teal-100'
      }
    };
    return classes[color] || classes.blue;
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && feature}
  {@const colors = getColorClasses(feature.color)}
  <div 
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
    role="dialog"
    aria-modal="true"
    aria-label="Detalhes: {feature.title}"
    on:click={close}
    on:keydown={(e) => e.key === 'Escape' && close()}
  >
    <div 
      class="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transform scale-95 animate-scale-in max-h-[90vh] flex flex-col"
      on:click|stopPropagation
      role="document"
    >
      <!-- Header Minimalista -->
      <div class="px-8 pt-8 pb-6 border-b border-gray-100">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4 flex-1">
            <div class="w-14 h-14 {colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 {colors.accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold text-gray-900 mb-1.5">{feature.title}</h2>
              <p class="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
          <button 
            type="button"
            class="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
            on:click={close}
            aria-label="Fechar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Content Scrollable -->
      <div class="flex-1 overflow-y-auto px-8 py-6">
        {#if feature.fullDescription}
          <div class="mb-8">
            <p class="text-gray-700 leading-relaxed text-[15px]">{feature.fullDescription}</p>
          </div>
        {/if}
        
        {#if feature.benefits && feature.benefits.length > 0}
          <div class="mb-8">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Principais Benefícios</h3>
            <div class="space-y-2.5">
              {#each feature.benefits as benefit}
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 {colors.iconBg} rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 {colors.accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="text-gray-700 text-sm leading-relaxed flex-1">{benefit}</p>
                </div>
              {/each}
            </div>
          </div>
        {/if}
        
        {#if feature.features && feature.features.length > 0}
          <div class="mb-8">
            <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Funcionalidades Incluídas</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {#each feature.features as func}
                <div class="flex items-center gap-2.5 text-sm text-gray-600">
                  <div class="w-1.5 h-1.5 {colors.accent} rounded-full flex-shrink-0"></div>
                  <span>{func}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
        
        {#if feature.example}
          <div class="mb-6 p-5 {colors.bg} rounded-xl border {colors.border}">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 {colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 {colors.accent}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-gray-900 mb-1.5">Exemplo Prático</h4>
                <p class="text-gray-700 text-sm leading-relaxed">{feature.example}</p>
              </div>
            </div>
          </div>
        {/if}
      </div>
      
      <!-- Footer com CTAs -->
      <div class="px-8 py-5 border-t border-gray-100 bg-gray-50">
        <div class="flex flex-col sm:flex-row gap-3">
          <a 
            href="https://upclinic-aa025.web.app/login"
            class="flex-1 {colors.button} text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all"
          >
            Experimentar Agora
          </a>
          <a 
            href="/contato"
            class="flex-1 bg-white border-2 border-gray-300 text-gray-700 text-center px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            Falar com Especialista
          </a>
          <a 
            href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20{feature.title}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all"
          >
            WhatsApp
          </a>
        </div>
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
      transform: scale(0.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
  
  .animate-scale-in {
    animation: scale-in 0.2s ease-out;
  }
</style>
