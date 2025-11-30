<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // class é uma palavra reservada, então usamos $$props para acessá-la
  let className: string = '';
  
  // Inicializar currentSrc com src ou fallback
  let currentSrc: string = src || fallback;
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
  
  // Atualizar currentSrc quando src mudar
  $: {
    if (src && src !== currentSrc && !hasError) {
      currentSrc = src;
      hasError = false;
    } else if (!src && currentSrc !== fallback) {
      currentSrc = fallback;
      hasError = false;
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

