<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  onMount(() => {
    goto(`/obrigado${$page.url.search}`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Redirecionando… | UpClinic</title>
  <meta name="robots" content="noindex, nofollow" />
  <meta http-equiv="refresh" content="0;url=/obrigado" />
</svelte:head>

<p class="p-8 text-center text-gray-600">Redirecionando para a página de agradecimento…</p>
