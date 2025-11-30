<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  export let className: string = '';
  
  // Função para normalizar caminho (URLs importadas pelo Vite já vêm corretas)
  function normalizePath(path: string): string {
    if (!path) return fallback || '/logo-upclinic.png';
    // URLs importadas pelo Vite podem vir como caminhos relativos ou absolutos
    // Se já começa com /, http:// ou https://, retorna como está
    if (path.startsWith('/') || path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    // Se é um caminho relativo processado pelo Vite (começa com _app/immutable), usar como está
    if (path.includes('_app/immutable') || path.includes('/assets/')) {
      return path;
    }
    // Caso contrário, adiciona / no início
    return '/' + path;
  }
  
  // Inicializar currentSrc com src ou fallback
  let currentSrc: string = src ? normalizePath(src) : normalizePath(fallback);
  let hasError = false;
  
  function handleError(event: Event) {
    if (!hasError && currentSrc !== normalizePath(fallback)) {
      hasError = true;
      const fallbackPath = normalizePath(fallback);
      currentSrc = fallbackPath;
      // Prevenir loop infinito se o fallback também falhar
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    }
  }
  
  // Atualizar currentSrc quando src mudar
  $: {
    if (src && !hasError) {
      const normalizedSrc = normalizePath(src);
      if (normalizedSrc !== currentSrc) {
        currentSrc = normalizedSrc;
        hasError = false;
      }
    } else if (!src && !hasError) {
      const normalizedFallback = normalizePath(fallback);
      if (currentSrc !== normalizedFallback) {
        currentSrc = normalizedFallback;
        hasError = false;
      }
    }
  }
</script>

<img 
  src={currentSrc} 
  alt={alt} 
  class={className}
  loading={loading}
  on:error={handleError}
/>

