<script lang="ts">
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import {
    PLAN_CATALOG,
    formatBrl,
    publicCheckoutUrl,
    type PlanId
  } from '$lib/config/pricing';
  import { TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

  export let whatsappFallback =
    'https://wa.me/5562997016149?text=Quero%20assinar%20o%20UpClinic';

  let annual = false;

  function trialHref(_id: PlanId) {
    return TRIAL_PAGE_URL;
  }

  function subscribeHref(id: PlanId) {
    const url = publicCheckoutUrl(id, annual);
    return url || whatsappFallback;
  }

  function trackTrial(planId: string) {
    trackTrialCta(`Plano ${planId} — teste`, 'Pricing Section');
  }

  function trackSubscribe(planId: string) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq(
        'track',
        'InitiateCheckout',
        { content_name: planId, content_category: 'Subscription', source: 'Planos' },
        { eventID: eventId }
      );
    }
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', {
        event_category: 'engagement',
        event_label: `${planId}:${annual ? 'annual' : 'monthly'}`
      });
    }
  }
</script>

<div use:reveal class="flex justify-center mb-10">
  <div class="up-glass inline-flex items-center gap-1" style="padding:5px; border-radius:999px;">
    <button
      type="button"
      on:click={() => (annual = false)}
      class="up-toggle"
      class:up-toggle-on={!annual}
      aria-pressed={!annual}>{$t('plans.monthly')}</button
    >
    <button
      type="button"
      on:click={() => (annual = true)}
      class="up-toggle"
      class:up-toggle-on={annual}
      aria-pressed={annual}
    >
      {$t('plans.annual')} <span style="color:#f97316; font-weight:800;">{$t('plans.save')}</span>
    </button>
  </div>
</div>

<div class="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
  {#each PLAN_CATALOG as plan, i}
    {@const price = annual ? plan.annual / 12 : plan.monthly}
    <div
      use:reveal={{ delay: i * 90 }}
      class="relative plan-card flex flex-col"
      class:up-plan-popular={plan.popular}
      style={plan.popular ? 'border-color:rgba(249,115,22,0.45);' : ''}
    >
      {#if plan.popular}
        <span
          class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold text-white"
          style="background:linear-gradient(90deg,#f97316,#fb923c);">{$t('plans.popular')}</span
        >
      {/if}

      <h3 class="text-xl font-bold" style="color:#0c1222; font-family:'Outfit',system-ui,sans-serif;">
        {plan.name}
      </h3>
      <p class="mt-1 text-sm" style="color:#5c6578;">{plan.tagline}</p>

      <div class="mt-5 flex items-end gap-1">
        <span class="text-sm font-semibold" style="color:{plan.accent};">R$</span>
        <span class="text-4xl font-black" style="line-height:1; color:#0c1222;">{formatBrl(price)}</span>
        <span class="text-sm mb-1" style="color:#8b95a5;">{$t('plans.perMonth')}</span>
      </div>
      {#if annual}
        <p class="mt-1 text-xs" style="color:#ea580c;">
          R$ {formatBrl(plan.annual)} {$t('plans.billedAnnually')}
        </p>
      {:else}
        <p class="mt-1 text-xs" style="color:#8b95a5;">{$t('plans.billedMonthly')}</p>
      {/if}

      <ul class="mt-6 space-y-2.5 flex-1">
        {#each plan.features as f}
          <li class="flex items-start gap-2 text-sm" style="color:#4a5568;">
            <svg
              width="18"
              height="18"
              fill="none"
              stroke={plan.accent}
              stroke-width="2.5"
              viewBox="0 0 24 24"
              style="flex-shrink:0; margin-top:1px;"
              ><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
            >
            {f}
          </li>
        {/each}
      </ul>

      <a
        href={trialHref(plan.id)}
        class="mt-7 {plan.popular ? 'up-btn-primary' : 'up-btn-ghost'}"
        style="width:100%; justify-content:center; min-height:2.75rem;"
        on:click={() => trackTrial(plan.id)}
      >
        Teste grátis 7 dias
      </a>
      <a
        href={subscribeHref(plan.id)}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-2 text-center text-xs font-semibold underline underline-offset-4"
        style="color:#8b95a5;"
        on:click={() => trackSubscribe(plan.id)}
      >
        {$t('plans.ctaSubscribe')}
      </a>
    </div>
  {/each}
</div>

<p use:reveal class="text-center text-xs mt-6" style="color:#8b95a5;">
  {$t('plans.footnote')}
</p>

<style>
  .plan-card {
    background: #fff;
    border: 1px solid rgba(249, 115, 22, 0.12);
    border-radius: 1.5rem;
    padding: 1.75rem;
    box-shadow: 0 14px 36px rgba(234, 88, 12, 0.06);
  }
  .up-toggle {
    padding: 8px 20px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 700;
    color: #5c6578;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .up-toggle-on {
    background: #fff;
    color: #0c1222;
    box-shadow: 0 2px 10px rgba(234, 88, 12, 0.12);
  }
  .up-plan-popular {
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    .up-plan-popular {
      transform: none;
    }
  }
</style>
