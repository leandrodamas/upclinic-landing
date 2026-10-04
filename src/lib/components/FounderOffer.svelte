<script lang="ts">
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import {
    FOUNDER_SPOTS_REMAINING,
    FOUNDER_DEADLINE,
    FOUNDER_PRICING,
    formatBrl,
    founderCheckoutUrl,
    trialUrlForPlan
  } from '$lib/config/pricing';
  import { trackTrialCta } from '$lib/analytics';

  let annual = false;
  const founderPlans: Array<'starter' | 'professional'> = ['starter', 'professional'];

  function trackFounderStripe(planId: string) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq(
        'track',
        'InitiateCheckout',
        {
          content_name: `founder_${planId}`,
          content_category: 'FounderSubscription',
          source: 'Clinica Fundadora'
        },
        { eventID: eventId }
      );
    }
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', {
        event_category: 'engagement',
        event_label: `founder:${planId}:${annual ? 'annual' : 'monthly'}`
      });
    }
  }
</script>

<section
  id="clinica-fundadora"
  class="relative overflow-hidden"
  style="background:linear-gradient(180deg,#071233 0%,#0a1a44 100%); padding:4.5rem 0;"
  aria-labelledby="fundadora-title"
>
  <div class="up-aurora" style="opacity:0.35;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div use:reveal class="mx-auto max-w-3xl text-center">
      <p
        class="mb-4 inline-flex items-center gap-2 up-glass"
        style="padding:7px 16px; border-radius:999px;"
      >
        <span class="up-pulse-dot" style="width:8px;height:8px;background:#fbbf24;border-radius:50%;"
        ></span>
        <span
          style="color:#fde68a; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em;"
          >{$t('founder.badge')}</span
        >
      </p>
      <h2
        id="fundadora-title"
        style="font-size:clamp(1.65rem,3.5vw,2.35rem); font-weight:900; color:#fff; line-height:1.15; letter-spacing:-0.02em;"
      >
        {$t('founder.title')}
      </h2>
      <p class="mt-4 text-sm sm:text-base leading-relaxed" style="color:rgba(191,219,254,0.88);">
        {$t('founder.bodyPre')}{FOUNDER_DEADLINE}{$t('founder.bodyMid')}R$ {formatBrl(
          FOUNDER_PRICING.starter.monthly
        )}{$t('founder.bodySolo')}R$ {formatBrl(FOUNDER_PRICING.professional.monthly)}{$t(
          'founder.bodyEnd'
        )}
      </p>
      <p
        class="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold"
        style="background:rgba(251,191,36,0.12); border:1px solid rgba(251,191,36,0.4); color:#fde68a;"
      >
        {$t('founder.spotsLabel')}
        <span style="color:#fff; font-size:1.15rem;">{FOUNDER_SPOTS_REMAINING}</span>
      </p>
    </div>

    <div use:reveal={{ delay: 80 }} class="mt-8 flex justify-center">
      <div class="up-glass inline-flex items-center gap-1" style="padding:5px; border-radius:999px;">
        <button
          type="button"
          class="founder-toggle"
          class:founder-toggle-on={!annual}
          on:click={() => (annual = false)}
          aria-pressed={!annual}>{$t('plans.monthly')}</button
        >
        <button
          type="button"
          class="founder-toggle"
          class:founder-toggle-on={annual}
          on:click={() => (annual = true)}
          aria-pressed={annual}>{$t('plans.annual')}</button
        >
      </div>
    </div>

    <div class="mt-8 grid gap-5 max-w-3xl mx-auto sm:grid-cols-2">
      {#each founderPlans as planId, i}
        {@const price = annual
          ? FOUNDER_PRICING[planId].annual / 12
          : FOUNDER_PRICING[planId].monthly}
        {@const annualTotal = FOUNDER_PRICING[planId].annual}
        {@const name = planId === 'starter' ? $t('founder.soloName') : $t('founder.clinicaName')}
        <div
          use:reveal={{ delay: 100 + i * 60 }}
          class="up-glass flex flex-col"
          style="border-radius:1.25rem; padding:1.5rem; border-color:rgba(251,191,36,0.35);"
        >
          <h3 class="text-lg font-bold text-white">{name}</h3>
          <p class="mt-1 text-xs" style="color:rgba(253,230,138,0.85);">{$t('founder.lockPrice')}</p>
          <div class="mt-4 flex items-end gap-1">
            <span class="text-sm font-semibold" style="color:#fbbf24;">R$</span>
            <span class="text-3xl font-black text-white">{formatBrl(price)}</span>
            <span class="text-sm mb-1" style="color:rgba(191,219,254,0.6);">{$t('plans.perMonth')}</span>
          </div>
          {#if annual}
            <p class="mt-1 text-xs" style="color:rgba(167,243,208,0.85);">
              R$ {formatBrl(annualTotal)} {$t('plans.billedAnnually')}
            </p>
          {/if}
          <a
            href={trialUrlForPlan(planId)}
            target="_blank"
            rel="noopener noreferrer"
            class="up-btn-primary mt-5"
            style="width:100%; justify-content:center; min-height:2.6rem;"
            on:click={() => trackTrialCta(`Fundador ${planId} — teste`, 'Clinica Fundadora')}
          >
            {$t('plans.ctaTrial')}
          </a>
          <a
            href={founderCheckoutUrl(planId, annual)}
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 text-center text-xs font-semibold underline underline-offset-4"
            style="color:rgba(253,230,138,0.9);"
            on:click={() => trackFounderStripe(planId)}
          >
            {$t('founder.ctaStripe')}
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .founder-toggle {
    padding: 8px 18px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 700;
    color: rgba(191, 219, 254, 0.8);
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .founder-toggle-on {
    background: rgba(251, 191, 36, 0.2);
    color: #fff;
  }
</style>
