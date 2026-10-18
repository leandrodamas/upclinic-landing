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
  import WellhubIntegration from '$lib/components/WellhubIntegration.svelte';
  import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
  import ConversionPopup from '$lib/components/ConversionPopup.svelte';
  import PainPoints from '$lib/components/PainPoints.svelte';
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import { LOGIN_URL, TRIAL_PAGE_URL, CONTACT } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

  let demoModal: FeatureDemoModal;

  const whatsappHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent('Olá! Quero testar o UpClinic')}`;
</script>

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
<PainPoints />
<WhatsAppFreeSection />
<BentoFeatures />
<ImpactBand />
<FeatureGrid />
<WhySwitch />
<WellhubIntegration />
<ResultsShowcase />
<FounderOffer />

<section
  id="precos"
  class="relative overflow-hidden pricing-section"
  aria-labelledby="precos-title"
>
  <div class="up-aurora" style="opacity:0.55;"></div>
  <div class="up-grid-overlay" style="opacity:0.55;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div class="text-center max-w-2xl mx-auto mb-10" use:reveal>
      <p class="mb-4 inline-flex items-center gap-2 up-glass" style="padding:7px 16px; border-radius:999px;">
        <span class="up-pulse-dot" style="width:8px;height:8px;background:#14b8a6;border-radius:50%;"></span>
        <span style="color:#0d9488; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em;"
          >{$t('pricing.badge')}</span
        >
      </p>
      <h2
        id="precos-title"
        style="font-size:clamp(1.85rem,4vw,2.75rem); font-weight:900; color:#0f1f1c; line-height:1.1; letter-spacing:-0.02em;"
      >
        {$t('pricing.title1')} <span class="up-gradient-text">{$t('pricing.title2')}</span>
      </h2>
      <p class="mt-4" style="color:#5b6f6a; font-size:1.05rem; line-height:1.6;">
        {$t('pricing.subPre')}<strong style="color:#0d9488;">{$t('pricing.subStrong')}</strong>{$t('pricing.subEnd')}
      </p>
    </div>

    <PricingPlans whatsappFallback={whatsappHref} />

    <p class="text-center mt-8">
      <a href="/planos" class="text-sm font-semibold underline underline-offset-4" style="color:#0d9488;">
        Ver detalhes dos planos →
      </a>
    </p>
  </div>
</section>

<FAQ />

<section class="social-proof" aria-labelledby="prova-title">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8" use:reveal>
    <p class="kicker">Prova social</p>
    <h2 id="prova-title">Clínicas e studios já usam o UpClinic</h2>
    <p class="note">
      [PLACEHOLDER] Depoimentos e números reais serão publicados aqui assim que autorizados pelos clientes.
      Não inventamos resultados.
    </p>
  </div>
</section>

<PartnersCarousel />

<section class="relative overflow-hidden home-cta-pad final-cta">
  <div class="up-aurora" style="opacity:0.45;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style="z-index:2;">
    <div use:reveal class="inline-flex items-center gap-2 mb-6 up-glass" style="padding:7px 16px; border-radius:999px;">
      <span class="up-pulse-dot" style="width:9px;height:9px;background:#14b8a6;border-radius:50%;"></span>
      <span style="color:#0f766e; font-size:0.8rem; font-weight:700;">{$t('homeCta.badge')}</span>
    </div>
    <h2
      use:reveal={{ delay: 60 }}
      style="font-size:clamp(2rem,4.5vw,3.2rem); font-weight:900; color:#0f1f1c; line-height:1.08; letter-spacing:-0.02em; margin-bottom:1.25rem;"
    >
      {$t('homeCta.titleA')}<br class="hidden md:block" />
      <span class="up-gradient-text">{$t('homeCta.titleB')}</span>
    </h2>
    <p use:reveal={{ delay: 120 }} class="text-xl mb-3 max-w-2xl mx-auto" style="color:#5b6f6a;">
      {$t('homeCta.p')}
    </p>
    <p use:reveal={{ delay: 160 }} style="color:#7a908a; font-size:0.9rem; margin-bottom:2.5rem;">
      {$t('homeCta.sub')}
    </p>
    <div use:reveal={{ delay: 200 }} class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={TRIAL_PAGE_URL}
        class="up-btn-primary"
        style="min-height:2.85rem;"
        on:click={() => trackTrialCta('CTA Final Teste', 'CTA Section')}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          /></svg
        >
        Teste grátis 7 dias
      </a>
      <a
        href={LOGIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="up-btn-ghost"
        style="min-height:2.85rem;"
      >
        {$t('homeCta.ctaLogin')}
      </a>
    </div>
    <p use:reveal={{ delay: 240 }} style="color:#7a908a; font-size:0.82rem; margin-top:1.5rem;">
      {$t('homeCta.footnote')}
    </p>
  </div>
</section>

<Footer />
<WhatsAppFloat />
<ConversionPopup />
<FeatureDemoModal bind:this={demoModal} />

<style>
  .pricing-section {
    background: linear-gradient(180deg, #f7fbfa 0%, #eef8f6 55%, #fff 100%);
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }

  .social-proof {
    padding: 3.5rem 0;
    background: #fff;
    text-align: center;
  }

  .social-proof .kicker {
    margin: 0 0 0.5rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #f0796a;
  }

  .social-proof h2 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.4rem, 3vw, 1.9rem);
    font-weight: 800;
    color: #0f1f1c;
  }

  .social-proof .note {
    margin: 0 auto;
    max-width: 36rem;
    color: #5b6f6a;
    font-size: 0.95rem;
    line-height: 1.55;
    background: #fff5f2;
    border: 1px dashed rgba(240, 121, 106, 0.45);
    border-radius: 1rem;
    padding: 1rem 1.15rem;
  }

  .final-cta {
    background: linear-gradient(145deg, #e8f7f4 0%, #f7fbfa 40%, #fff5f2 100%);
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media (max-width: 640px) {
    .home-cta-pad {
      padding-bottom: 7.5rem !important;
    }
  }
</style>
