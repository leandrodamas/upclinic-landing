<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let fallback: string = '';
</script>

<img
  src={src}
  alt={alt}
  on:error={(e) => {
    if (fallback) {
      (e.currentTarget as HTMLImageElement).src = fallback;
    }
  }}
/>
