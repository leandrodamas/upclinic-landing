<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  export let className: string = '';
  
  // Função para garantir caminho absoluto (começando com /)
  function ensureAbsolutePath(path: string): string {
    if (!path) return '/logo-upclinic.png';
    // Se já começa com /, retorna como está
    if (path.startsWith('/')) return path;
    // Se começa com http:// ou https://, retorna como está
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    // Caso contrário, adiciona / no início
    return '/' + path;
  }
  
  // Inicializar currentSrc com src ou fallback, garantindo caminho absoluto
  let currentSrc: string = src ? ensureAbsolutePath(src) : ensureAbsolutePath(fallback);
  let hasError = false;
  
  function handleError(event: Event) {
    if (!hasError && currentSrc !== ensureAbsolutePath(fallback)) {
      hasError = true;
      const fallbackPath = ensureAbsolutePath(fallback);
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
      const normalizedSrc = ensureAbsolutePath(src);
      if (normalizedSrc !== currentSrc) {
        currentSrc = normalizedSrc;
        hasError = false;
      }
    } else if (!src && !hasError) {
      const normalizedFallback = ensureAbsolutePath(fallback);
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

