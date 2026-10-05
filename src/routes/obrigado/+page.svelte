<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { CONTACT, LOGIN_URL, REGISTER_URL, SITE_URL } from '$lib/constants';
  import {
    firePurchaseConversion,
    fireThankYouLeadFallback,
    isStripeSessionId,
    parseAmountFromSearchParams,
    parseCurrencyFromSearchParams
  } from '$lib/conversion';

  const waText = encodeURIComponent(
    'Olá! Acabei de assinar o UpClinic e quero confirmar o próximo passo.'
  );
  const whatsappHref = `${CONTACT.whatsappLink}?text=${waText}`;

  onMount(() => {
    const params = get(page).url.searchParams;
    const sessionId = (params.get('session_id') || params.get('checkout_session_id') || '').trim();
    const value = parseAmountFromSearchParams(params);
    const currency = parseCurrencyFromSearchParams(params);

    const tryFire = (): boolean => {
      if (typeof window === 'undefined') return false;
      // Wait until gtag or Meta helper is available
      if (!window.gtag && !window.trackPurchaseConversion && typeof window.fbq !== 'function') {
        return false;
      }

      if (sessionId && isStripeSessionId(sessionId)) {
        return firePurchaseConversion({ sessionId, value, currency });
      }

      return fireThankYouLeadFallback();
    };

    if (tryFire()) return;
    const id = window.setInterval(() => {
      if (tryFire()) window.clearInterval(id);
    }, 150);
    window.setTimeout(() => window.clearInterval(id), 8000);
  });
</script>

<svelte:head>
  <title>Obrigado pela assinatura | UpClinic</title>
  <meta
    name="description"
    content="Pagamento confirmado. Veja os próximos passos para acessar o UpClinic."
  />
  <link rel="canonical" href="{SITE_URL}/obrigado" />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navbar />

<main class="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/40 to-white pb-20 pt-28">
  <div class="container mx-auto max-w-xl px-4 text-center sm:px-6">
    <div
      class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
      aria-hidden="true"
    >
      <svg class="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <p class="text-sm font-semibold uppercase tracking-wider text-emerald-700">UpClinic</p>
    <h1 class="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">Obrigado pela assinatura</h1>
    <p class="mt-3 text-gray-600">
      Seu pagamento foi confirmado. Em breve você recebe o acesso por e-mail. Se já tiver conta, entre
      direto no sistema.
    </p>

    <ol class="mt-8 space-y-3 text-left text-sm text-gray-700">
      <li class="rounded-xl border border-emerald-100 bg-white/80 px-4 py-3">
        <span class="font-semibold text-gray-900">1. Confira seu e-mail</span>
        <p class="mt-1 text-gray-600">
          Enviamos o recibo e as instruções de acesso para o e-mail usado no checkout.
        </p>
      </li>
      <li class="rounded-xl border border-emerald-100 bg-white/80 px-4 py-3">
        <span class="font-semibold text-gray-900">2. Entre no UpClinic</span>
        <p class="mt-1 text-gray-600">
          Use o mesmo e-mail da assinatura para fazer login. Se ainda não criou senha, use o link do
          e-mail ou o teste gratuito.
        </p>
      </li>
      <li class="rounded-xl border border-emerald-100 bg-white/80 px-4 py-3">
        <span class="font-semibold text-gray-900">3. Precisa de ajuda?</span>
        <p class="mt-1 text-gray-600">
          Fale conosco no WhatsApp ({CONTACT.phone}) — respondemos em horário comercial.
        </p>
      </li>
    </ol>

    <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
      <a
        href={LOGIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
      >
        Entrar no UpClinic
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white px-8 py-3.5 text-base font-bold text-emerald-800 transition hover:bg-emerald-50"
      >
        Falar no WhatsApp
      </a>
    </div>

    <p class="mt-6 text-sm text-gray-500">
      Ainda sem conta?
      <a href={REGISTER_URL} class="font-semibold text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"
        >Começar teste grátis</a
      >
      ou
      <a href="/planos" class="font-semibold text-blue-600 hover:underline">ver planos</a>.
    </p>
  </div>
</main>

<Footer />
