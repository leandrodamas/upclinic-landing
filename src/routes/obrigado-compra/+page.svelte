<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { GOOGLE_ADS_PURCHASE_CONVERSION_SEND_TO, LOGIN_URL } from '$lib/constants';

  onMount(() => {
    const sessionId = get(page).url.searchParams.get('session_id') || '';

    const fire = (): boolean => {
      if (typeof window === 'undefined') return false;
      if (window.trackPurchaseConversion) {
        window.trackPurchaseConversion(sessionId);
        return true;
      }
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_PURCHASE_CONVERSION_SEND_TO,
          transaction_id: sessionId || ''
        });
        return true;
      }
      return false;
    };

    if (fire()) return;
    const id = window.setInterval(() => {
      if (fire()) window.clearInterval(id);
    }, 150);
    window.setTimeout(() => window.clearInterval(id), 8000);
  });
</script>

<svelte:head>
  <title>Obrigado pela assinatura | UpClinic</title>
  <meta
    name="description"
    content="Pagamento confirmado. Acesse o UpClinic e comece a usar sua clínica na nuvem."
  />
  <link rel="canonical" href="https://www.clinicupapp.com/obrigado-compra" />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-20 pt-28">
  <div class="container mx-auto max-w-lg px-4 text-center sm:px-6">
    <div
      class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
      aria-hidden="true"
    >
      <svg class="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h1 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Pagamento recebido</h1>
    <p class="mt-3 text-gray-600">
      Obrigado por assinar o UpClinic. Em instantes você recebe o acesso por e-mail; se já tiver conta, entre
      direto no sistema.
    </p>
    <a
      href={LOGIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      class="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
    >
      Entrar no UpClinic
    </a>
  </div>
</main>

<Footer />
