<script lang="ts">
  import { onMount } from 'svelte';
  
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // class é uma palavra reservada, então usamos $$props para acessá-la
  let className: string = '';
  
  let currentSrc: string = src || fallback;
  let hasError = false;
  
  // Garantir que src inicial seja válido
  onMount(() => {
    if (!currentSrc || currentSrc === '') {
      currentSrc = fallback;
    }
  });
  
  function handleError(event: Event) {
    if (!hasError && currentSrc !== fallback) {
      hasError = true;
      currentSrc = fallback;
      // Prevenir loop infinito se o fallback também falhar
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    }
  }
  
  // Inicializar e resetar quando src mudar
  $: {
    if (src && src !== currentSrc && !hasError) {
      currentSrc = src;
      hasError = false;
    } else if (!src) {
      currentSrc = fallback;
    }
  }
  
  // Atualizar className quando props mudarem
  $: {
    className = $$props.class || '';
  }
</script>

<img 
  src={currentSrc} 
  alt={alt} 
  class={className}
  loading={loading}
  on:error={handleError}
/>

