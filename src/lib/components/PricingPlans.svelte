<script lang="ts">
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';

  /**
   * Checkout de subscription DIRETO no Stripe (sem passar por /auth).
   * Cada valor é um Stripe Payment Link (modo subscription) por tier/intervalo.
   * Preencher com os links reais gerados no Stripe (Live) — 1 por célula.
   *
   * Enquanto vazio (''), o botão cai no fallback de WhatsApp para não perder venda.
   */
  export let paymentLinks: {
    starter: { monthly: string; annual: string };
    professional: { monthly: string; annual: string };
    enterprise: { monthly: string; annual: string };
  } = {
    starter: { monthly: '', annual: '' },
    professional: { monthly: '', annual: '' },
    enterprise: { monthly: '', annual: '' }
  };

  export let whatsappFallback =
    'https://wa.me/5562997016149?text=Quero%20assinar%20o%20UpClinic';

  let annual = false;

  const brl = (v: number) =>
    v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Nome/tagline/features vêm do i18n (keys em plans.*). Valores numéricos e cor permanecem aqui.
  const plans = [
    { id: 'starter' as const, nameKey: 'plans.starterName', tagKey: 'plans.starterTag', featKey: 'plans.starterFeatures', monthly: 29.9, annual: 299.0, accent: '#34d399', popular: false },
    { id: 'professional' as const, nameKey: 'plans.proName', tagKey: 'plans.proTag', featKey: 'plans.proFeatures', monthly: 59.9, annual: 599.0, accent: '#60a5fa', popular: true },
    { id: 'enterprise' as const, nameKey: 'plans.entName', tagKey: 'plans.entTag', featKey: 'plans.entFeatures', monthly: 129.9, annual: 1299.0, accent: '#c4b5fd', popular: false }
  ];

  function linkFor(id: 'starter' | 'professional' | 'enterprise') {
    const url = annual ? paymentLinks[id].annual : paymentLinks[id].monthly;
    return url && url.length > 0 ? url : whatsappFallback;
  }

  function trackSubscribe(planId: string) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', { content_name: planId, content_category: 'Subscription', source: 'Planos' }, { eventID: eventId });
    }
    if (window.gtag) window.gtag('event', 'begin_checkout', { event_category: 'engagement', event_label: `${planId}:${annual ? 'annual' : 'monthly'}` });
  }
</script>

<!-- Toggle Mensal / Anual -->
<div use:reveal class="flex justify-center mb-10">
  <div class="up-glass inline-flex items-center gap-1" style="padding:5px; border-radius:999px;">
    <button type="button" on:click={() => (annual = false)}
      class="up-toggle" class:up-toggle-on={!annual} aria-pressed={!annual}>{$t('plans.monthly')}</button>
    <button type="button" on:click={() => (annual = true)}
      class="up-toggle" class:up-toggle-on={annual} aria-pressed={annual}>
      {$t('plans.annual')} <span style="color:#6ee7b7; font-weight:800;">{$t('plans.save')}</span>
    </button>
  </div>
</div>

<div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
  {#each plans as plan, i}
    {@const price = annual ? plan.annual / 12 : plan.monthly}
    <div use:reveal={{ delay: i * 90 }}
      class="relative up-glass flex flex-col"
      class:up-plan-popular={plan.popular}
      style="border-radius:1.5rem; padding:1.75rem;{plan.popular ? ' border-color:rgba(96,165,250,0.6);' : ''}">

      {#if plan.popular}
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
              style="background:linear-gradient(90deg,#2563eb,#7c3aed);">{$t('plans.popular')}</span>
      {/if}

      <h3 class="text-xl font-bold text-white" style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;">{$t(plan.nameKey)}</h3>
      <p class="mt-1 text-sm" style="color:rgba(191,219,254,0.72);">{$t(plan.tagKey)}</p>

      <div class="mt-5 flex items-end gap-1">
        <span class="text-sm font-semibold" style="color:{plan.accent};">R$</span>
        <span class="text-4xl font-black text-white" style="line-height:1;">{brl(price)}</span>
        <span class="text-sm mb-1" style="color:rgba(191,219,254,0.6);">{$t('plans.perMonth')}</span>
      </div>
      {#if annual}
        <p class="mt-1 text-xs" style="color:rgba(167,243,208,0.85);">R$ {brl(plan.annual)} {$t('plans.billedAnnually')}</p>
      {:else}
        <p class="mt-1 text-xs" style="color:rgba(191,219,254,0.5);">{$t('plans.billedMonthly')}</p>
      {/if}

      <ul class="mt-6 space-y-2.5 flex-1">
        {#each $t(plan.featKey) as f}
          <li class="flex items-start gap-2 text-sm" style="color:rgba(219,234,254,0.88);">
            <svg width="18" height="18" fill="none" stroke={plan.accent} stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0; margin-top:1px;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            {f}
          </li>
        {/each}
      </ul>

      <a href={linkFor(plan.id)} target="_blank" rel="noopener noreferrer"
         class="mt-7 {plan.popular ? 'up-btn-primary' : 'up-btn-ghost'}"
         style="width:100%; justify-content:center;"
         on:click={() => trackSubscribe(plan.id)}>
        {$t('plans.subscribe')} {$t(plan.nameKey)}
      </a>
    </div>
  {/each}
</div>

<p use:reveal class="text-center text-xs mt-6" style="color:rgba(147,197,253,0.6);">
  {$t('plans.footnote')}
</p>

<style>
  .up-toggle {
    padding: 8px 20px; border-radius: 999px; font-size: 0.85rem; font-weight: 700;
    color: rgba(191,219,254,0.8); background: transparent; border: none; cursor: pointer;
    transition: all 0.2s ease;
  }
  .up-toggle-on { background: rgba(255,255,255,0.16); color: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.25); }
  .up-plan-popular { transform: scale(1.03); }
  @media (max-width: 768px) { .up-plan-popular { transform: none; } }
</style>
