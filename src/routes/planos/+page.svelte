<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PricingPlans from '$lib/components/PricingPlans.svelte';
  import { reveal } from '$lib/actions/motion';
  import { CONTACT } from '$lib/constants';
  import { t } from '$lib/i18n';

  const whatsappHref = `${CONTACT.whatsappLink}?text=Quero%20saber%20mais%20sobre%20os%20planos%20do%20UpClinic`;

  // Stripe Payment Links (modo subscription, Live) — checkout direto sem passar por /auth.
  // Trial de 7 dias, sem exigir cartão, cupons habilitados. Gerados via Stripe MCP.
  const paymentLinks = {
    starter: {
      monthly: 'https://buy.stripe.com/eVq7sM2iad8Qe9U6URdnW00',
      annual: 'https://buy.stripe.com/fZucN66yq4Ck8PA92ZdnW01'
    },
    professional: {
      monthly: 'https://buy.stripe.com/4gM7sMf4W8SAfdYbb7dnW02',
      annual: 'https://buy.stripe.com/8x25kE5um7Ow1n8frndnW03'
    },
    enterprise: {
      monthly: 'https://buy.stripe.com/eVqfZi6yq5Go7LwgvrdnW04',
      annual: 'https://buy.stripe.com/4gMcN6e0SfgYaXIgvrdnW05'
    }
  };
</script>

<svelte:head>
  <title>Planos e Preços | UpClinic — 7 dias grátis, sem cartão</title>
  <meta name="description" content="Escolha o plano ideal para sua clínica. UpClinic para consultórios, clínicas e grupos médicos. Teste grátis por 7 dias, sem cartão de crédito." />
  <link rel="canonical" href="https://www.clinicupapp.com/planos" />
</svelte:head>

<Navbar />

<main class="planos-page min-h-screen overflow-x-hidden" style="background:#050b23; color:#e5eefb;">

  <!-- ══════════ HERO ══════════ -->
  <section class="relative overflow-hidden" style="padding-top:8rem; padding-bottom:3rem;">
    <div class="up-aurora"></div>
    <div class="up-grid-overlay"></div>

    <div class="relative z-[2] mx-auto max-w-3xl px-4 text-center sm:px-6">
      <p use:reveal class="mb-5 inline-flex items-center gap-2 up-glass" style="padding:7px 16px; border-radius:999px;">
        <span class="up-pulse-dot" style="width:8px;height:8px;background:#34d399;border-radius:50%;"></span>
        <span style="color:#6ee7b7; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.16em;">{$t('pricing.badge')}</span>
      </p>
      <h1 use:reveal={{ delay: 60 }} style="font-size:clamp(2.2rem,5vw,3.5rem); font-weight:900; line-height:1.08; letter-spacing:-0.02em; color:#fff;">
        {$t('pricing.title1')}<br class="hidden md:block"> <span class="up-gradient-text">{$t('pricing.title2')}</span>
      </h1>
      <p use:reveal={{ delay: 120 }} class="mx-auto mt-5 max-w-2xl" style="font-size:1.1rem; line-height:1.65; color:rgba(191,219,254,0.85);">
        {$t('pricing.subPre')}<strong style="color:#6ee7b7;">{$t('pricing.subStrong')}</strong>{$t('pricing.subEnd')}
      </p>
    </div>
  </section>

  <div class="relative z-[2] mx-auto max-w-6xl px-4 pb-20 sm:px-6">

    <!-- Planos com checkout de subscription direto no Stripe (sem passar por /auth) -->
    <div class="mb-14">
      <PricingPlans {paymentLinks} whatsappFallback={whatsappHref} />
    </div>

    <!-- Garantias -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
      {#each [
        { icon: '🎁', title: $t('pricing.g1t'), desc: $t('pricing.g1d') },
        { icon: '💸', title: $t('pricing.g2t'), desc: $t('pricing.g2d') },
        { icon: '🔓', title: $t('pricing.g3t'), desc: $t('pricing.g3d') }
      ] as g, i}
        <div use:reveal={{ delay: i * 80 }} class="up-glass text-center" style="padding:1.25rem; border-radius:1rem;">
          <div class="text-2xl mb-2">{g.icon}</div>
          <div class="font-bold text-white text-sm">{g.title}</div>
          <div class="text-xs mt-1" style="color:rgba(191,219,254,0.7);">{g.desc}</div>
        </div>
      {/each}
    </div>

    <!-- Dúvidas -->
    <div use:reveal class="max-w-2xl mx-auto text-center">
      <h2 class="text-xl font-bold text-white mb-2">{$t('pricing.faqTitle')}</h2>
      <p class="text-sm mb-6" style="color:rgba(191,219,254,0.7);">{$t('pricing.faqSub')}</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" class="up-btn-primary">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.406c-.217.607-1.268 1.198-1.737 1.274-.469.077-1.049.108-1.694-.108-.387-.127-.882-.301-1.518-.584-2.664-1.153-4.409-3.859-4.541-4.038-.133-.18-1.083-1.44-1.083-2.746 0-1.305.683-1.948.924-2.214.242-.267.528-.334.703-.334.176 0 .351.002.506.009.162.008.379-.062.592.451.22.532.746 1.827.812 1.96.066.133.11.289.022.463-.089.174-.133.283-.265.436-.133.153-.28.341-.4.458-.133.131-.272.272-.117.533.155.261.688 1.133 1.477 1.836.938.836 1.726 1.094 1.97 1.216.243.121.385.101.527-.061.141-.161.605-.704.767-.945.161-.241.322-.201.54-.121.219.081 1.385.653 1.623.772.238.12.397.18.456.28.059.1.059.576-.158 1.182z"/></svg>
          {$t('pricing.ctaWa')}
        </a>
        <a href="/contato" class="up-btn-ghost">{$t('pricing.ctaMsg')}</a>
      </div>
    </div>

  </div>
</main>

<Footer />

