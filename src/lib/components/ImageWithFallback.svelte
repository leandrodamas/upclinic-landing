<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // class é uma palavra reservada, então usamos $$props para acessá-la
  let className: string = '';
  
  let currentSrc = src;
  let hasError = false;
  
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
  
  // Reset quando src mudar
  $: if (src !== currentSrc && !hasError) {
    currentSrc = src;
    hasError = false;
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

