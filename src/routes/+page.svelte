<script lang="ts">
  import HeroPro from '$lib/components/HeroPro.svelte';
  import WhatsAppFreeSection from '$lib/components/WhatsAppFreeSection.svelte';
  import BentoFeatures from '$lib/components/BentoFeatures.svelte';
  import ImpactBand from '$lib/components/ImpactBand.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import ResultsShowcase from '$lib/components/ResultsShowcase.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import FeatureDemoModal from '$lib/components/FeatureDemoModal.svelte';
  import PartnersCarousel from '$lib/components/PartnersCarousel.svelte';
  import PricingPlans from '$lib/components/PricingPlans.svelte';
  import FounderOffer from '$lib/components/FounderOffer.svelte';
  import WhySwitch from '$lib/components/WhySwitch.svelte';
  import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
  import ConversionPopup from '$lib/components/ConversionPopup.svelte';
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import { LOGIN_URL, REGISTER_URL, CONTACT } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

  let demoModal: FeatureDemoModal;

  const whatsappHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent('Olá! Quero testar o UpClinic')}`;
</script>

<!-- SEO: single source in app.html for homepage defaults; page only adds JSON-LD + page-specific overrides if needed.
     Duplicate title/description/og tags removed from here to fix duplicated meta. -->
<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UpClinic",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web, iOS, Android",
      "url": "https://www.clinicupapp.com/",
      "description": "Sistema para clínica de fisioterapia e pilates: agenda, prontuário eletrônico, lembretes no WhatsApp, financeiro, IA e check-in Wellhub/TotalPass. Teste 7 dias grátis, sem cartão.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Teste 7 dias grátis, sem cartão de crédito"
      },
      "creator": {
        "@type": "Organization",
        "name": "UpClinic",
        "url": "https://www.clinicupapp.com/",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-62-99701-6149",
          "contactType": "sales",
          "availableLanguage": "Portuguese"
        }
      }
    }
  </script>
</svelte:head>

<Navbar />
<HeroPro />
<WhatsAppFreeSection />
<BentoFeatures />
<ImpactBand />
<FeatureGrid />
<WhySwitch />
<ResultsShowcase />
<FounderOffer />

<!-- Pricing on homepage (nav → /#precos); full details also on /planos -->
<section
  id="precos"
  class="relative overflow-hidden"
  style="background:#050b23; padding-top:5.5rem; padding-bottom:5.5rem;"
  aria-labelledby="precos-title"
>
  <div class="up-aurora" style="opacity:0.45;"></div>
  <div class="up-grid-overlay" style="opacity:0.3;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div class="text-center max-w-2xl mx-auto mb-10" use:reveal>
      <p class="mb-4 inline-flex items-center gap-2 up-glass" style="padding:7px 16px; border-radius:999px;">
        <span class="up-pulse-dot" style="width:8px;height:8px;background:#34d399;border-radius:50%;"></span>
        <span style="color:#6ee7b7; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em;"
          >{$t('pricing.badge')}</span
        >
      </p>
      <h2
        id="precos-title"
        style="font-size:clamp(1.85rem,4vw,2.75rem); font-weight:900; color:#fff; line-height:1.1; letter-spacing:-0.02em;"
      >
        {$t('pricing.title1')} <span class="up-gradient-text">{$t('pricing.title2')}</span>
      </h2>
      <p class="mt-4" style="color:rgba(191,219,254,0.85); font-size:1.05rem; line-height:1.6;">
        {$t('pricing.subPre')}<strong style="color:#6ee7b7;">{$t('pricing.subStrong')}</strong>{$t('pricing.subEnd')}
      </p>
    </div>

    <PricingPlans whatsappFallback={whatsappHref} />

    <p class="text-center mt-8">
      <a href="/planos" class="text-sm font-semibold underline underline-offset-4" style="color:#93c5fd;">
        Ver detalhes dos planos →
      </a>
    </p>
  </div>
</section>

<FAQ />

<PartnersCarousel />

<!-- CTA Section -->
<section
  class="relative overflow-hidden home-cta-pad"
  style="background: linear-gradient(135deg,#050b23 0%,#0a1a44 45%,#1d4ed8 100%); padding-top:6rem; padding-bottom:6rem;"
>
  <div class="up-aurora" style="opacity:0.6;"></div>
  <div class="up-grid-overlay" style="opacity:0.35;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style="z-index:2;">
    <div use:reveal class="inline-flex items-center gap-2 mb-6 up-glass" style="padding:7px 16px; border-radius:999px;">
      <span class="up-pulse-dot" style="width:9px;height:9px;background:#34d399;border-radius:50%;"></span>
      <span style="color:#e0f2fe; font-size:0.8rem; font-weight:700;">{$t('homeCta.badge')}</span>
    </div>
    <h2
      use:reveal={{ delay: 60 }}
      style="font-size:clamp(2.2rem,5vw,3.5rem); font-weight:900; color:#fff; line-height:1.08; letter-spacing:-0.02em; margin-bottom:1.25rem;"
    >
      {$t('homeCta.titleA')}<br class="hidden md:block" />
      <span class="up-gradient-text">{$t('homeCta.titleB')}</span>
    </h2>
    <p use:reveal={{ delay: 120 }} class="text-xl mb-3 max-w-2xl mx-auto" style="color:rgba(219,234,254,0.9);">
      {$t('homeCta.p')}
    </p>
    <p use:reveal={{ delay: 160 }} style="color:rgba(147,197,253,0.75); font-size:0.9rem; margin-bottom:2.5rem;">
      {$t('homeCta.sub')}
    </p>
    <div use:reveal={{ delay: 200 }} class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="up-btn-primary"
        style="min-height:2.85rem;"
        on:click|preventDefault={() => {
          trackTrialCta('CTA Final Teste', 'CTA Section');
          window.open(REGISTER_URL, '_blank');
        }}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          /></svg
        >
        {$t('homeCta.ctaStart')}
      </a>
      <a
        href={LOGIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="up-btn-ghost"
        style="min-height:2.85rem;"
        on:click|preventDefault={() => {
          window.open(LOGIN_URL, '_blank');
        }}
      >
        {$t('homeCta.ctaLogin')}
      </a>
    </div>
    <p use:reveal={{ delay: 240 }} style="color:rgba(147,197,253,0.7); font-size:0.82rem; margin-top:1.5rem;">
      {$t('homeCta.footnote')}
    </p>
  </div>
</section>

<Footer />
<WhatsAppFloat />
<ConversionPopup />
<FeatureDemoModal bind:this={demoModal} />

<style>
  /* Extra bottom space on mobile so floating WhatsApp doesn't cover the final CTA */
  @media (max-width: 640px) {
    .home-cta-pad {
      padding-bottom: 7.5rem !important;
    }
  }
</style>
