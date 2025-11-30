<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '/logo-upclinic.png';
  export let loading: 'lazy' | 'eager' | 'auto' = 'lazy';
  
  // class é uma palavra reservada, então usamos $$props para acessá-la
  let className: string = '';
  
  // Função para garantir caminho absoluto (começando com /)
  function ensureAbsolutePath(path: string): string {
    if (!path) return fallback;
    // Se já começa com /, retorna como está
    if (path.startsWith('/')) return path;
    // Se começa com http:// ou https://, retorna como está
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    // Caso contrário, adiciona / no início
    return '/' + path;
  }
  
  // Inicializar currentSrc com src ou fallback, garantindo caminho absoluto
  let currentSrc: string = ensureAbsolutePath(src || fallback);
  let hasError = false;
  
  function handleError(event: Event) {
    if (!hasError && currentSrc !== fallback) {
      hasError = true;
      currentSrc = ensureAbsolutePath(fallback);
      // Prevenir loop infinito se o fallback também falhar
      if (event.target) {
        (event.target as HTMLImageElement).onerror = null;
      }
    }
  }
  
  // Atualizar currentSrc quando src mudar
  $: {
    const normalizedSrc = ensureAbsolutePath(src || '');
    const normalizedFallback = ensureAbsolutePath(fallback);
    
    if (normalizedSrc && normalizedSrc !== currentSrc && !hasError) {
      currentSrc = normalizedSrc;
      hasError = false;
    } else if (!normalizedSrc && currentSrc !== normalizedFallback) {
      currentSrc = normalizedFallback;
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

