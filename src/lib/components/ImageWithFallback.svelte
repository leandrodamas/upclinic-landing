<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // Usar src diretamente, sem normalização
  let currentSrc: string = src || fallback || '';
  let hasError = false;
  
  function handleError(event: Event) {
    // Se houver fallback e ainda não tentamos usar ele, tentar agora
    if (!hasError && fallback && currentSrc !== fallback) {
      hasError = true;
      currentSrc = fallback;
      // Prevenir loop infinito se o fallback também falhar
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    } else {
      // Prevenir loop infinito se o fallback também falhar ou não houver fallback
      hasError = true;
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    }
  }
  
  // Atualizar currentSrc quando src ou fallback mudarem
  $: {
    if (src && src !== currentSrc && !hasError) {
      currentSrc = src;
      hasError = false;
    } else if (!src && fallback && fallback !== currentSrc && !hasError) {
      currentSrc = fallback;
      hasError = false;
    }
  }
</script>

<img 
  src={currentSrc} 
  alt={alt} 
  loading={loading}
  on:error={handleError}
  {...$$restProps}
/>
