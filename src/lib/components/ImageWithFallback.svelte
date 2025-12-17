<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '';

  function handleError(event: Event) {
    if (!fallback) return;

    const img = event.currentTarget as HTMLImageElement;
    img.src = fallback;
  }
</script>

<img
  src={src}
  alt={alt}
  on:error={handleError}
/>
