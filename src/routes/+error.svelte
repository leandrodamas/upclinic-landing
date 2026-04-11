<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status === 404 ? 'Página não encontrada' : 'Erro'} | UpClinic</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 antialiased">
  <main class="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-6 py-16 text-center">
    <p class="text-sm font-semibold uppercase tracking-wide text-blue-600">UpClinic</p>
    <p class="mt-4 text-6xl font-black tabular-nums text-slate-200">{$page.status}</p>
    <h1 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
      {$page.status === 404 ? 'Página não encontrada' : 'Algo deu errado'}
    </h1>
    <p class="mt-4 text-base leading-relaxed text-slate-600">
      {#if $page.status === 404}
        Este endereço não existe ou mudou. A página para <strong class="text-slate-800">preencher a agenda</strong> está em
        <code class="rounded bg-white px-1.5 py-0.5 text-sm text-blue-700 shadow-sm ring-1 ring-slate-200">/comece</code>.
      {:else}
        Tente de novo em alguns minutos. Se persistir, fale com o suporte.
      {/if}
    </p>
    <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href="/comece"
        class="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
      >
        Ir para Encher a agenda
      </a>
      <a
        href="/"
        class="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        Página inicial
      </a>
    </div>
  </main>
</div>
