<script lang="ts">
  export let data;
</script>

<header class="w-full border-b bg-white">
  <nav class="max-w-7xl mx-auto flex items-center justify-between p-4">
    <a href="/" class="font-bold text-xl">UpClinic</a>

    <div class="flex gap-6">
      <a href="/funcionalidades">Funcionalidades</a>
      <a href="/planos">Planos</a>
      <a href="/telemedicina">Telemedicina</a>
      <a href="/para-profissionais-da-saude">Profissionais da Saúde</a>
      <a href="/login" class="font-semibold text-blue-600">Entrar</a>
    </div>
  </nav>
</header>

<main class="min-h-screen">
  <slot />
</main>

<footer class="border-t p-6 text-center text-sm text-gray-500">
  © {new Date().getFullYear()} UpClinic. Todos os direitos reservados.
</footer>
