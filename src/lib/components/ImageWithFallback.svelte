<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '';
  
  // Aceitar className como prop (Svelte não permite export let class)
  export let className: string = '';

  function handleError(event: Event) {
    if (!fallback) return;

    const img = event.currentTarget as HTMLImageElement;
    img.src = fallback;
  }
</script>

<img
  src={src}
  alt={alt}
  class={className}
  on:error={handleError}
/>
