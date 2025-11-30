<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // Usar src diretamente, sem normalização
  let currentSrc: string = src || '';
  let hasError = false;
  let shouldRender = true;
  
  function handleError(event: Event) {
    // Se houver fallback e ainda não tentamos usar ele, tentar agora
    if (!hasError && fallback && fallback.trim() !== '' && currentSrc !== fallback) {
      hasError = true;
      currentSrc = fallback;
      // Prevenir loop infinito se o fallback também falhar
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    } else {
      // Se não há fallback ou já tentamos, esconder a imagem
      hasError = true;
      shouldRender = false;
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
      shouldRender = true;
    } else if (!src && fallback && fallback.trim() !== '' && fallback !== currentSrc && !hasError) {
      currentSrc = fallback;
      hasError = false;
      shouldRender = true;
    } else if (!src && (!fallback || fallback.trim() === '')) {
      shouldRender = false;
    }
  }
</script>

{#if shouldRender && currentSrc}
  <img 
    src={currentSrc} 
    alt={alt} 
    loading={loading}
    on:error={handleError}
    {...$$restProps}
  />
{/if}
