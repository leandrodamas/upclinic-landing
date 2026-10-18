<script lang="ts">
  import HeroPro from '$lib/components/HeroPro.svelte';
  import AudienceForWho from '$lib/components/AudienceForWho.svelte';
  import PhotoStorySections from '$lib/components/PhotoStorySections.svelte';
  import WhatsAppFreeSection from '$lib/components/WhatsAppFreeSection.svelte';
  import BentoFeatures from '$lib/components/BentoFeatures.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import PricingPlans from '$lib/components/PricingPlans.svelte';
  import FounderOffer from '$lib/components/FounderOffer.svelte';
  import WhySwitch from '$lib/components/WhySwitch.svelte';
  import WellhubIntegration from '$lib/components/WellhubIntegration.svelte';
  import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
  import ConversionPopup from '$lib/components/ConversionPopup.svelte';
  import PainPoints from '$lib/components/PainPoints.svelte';
  import { gsapReveal } from '$lib/actions/gsapMotion';
  import { t } from '$lib/i18n';
  import { LOGIN_URL, TRIAL_PAGE_URL, CONTACT } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

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
      }
    }
  </script>
</svelte:head>

<Navbar />
<HeroPro />
<AudienceForWho />
<PainPoints />
<PhotoStorySections />
<WhatsAppFreeSection />
<BentoFeatures />
<WhySwitch />
<WellhubIntegration />

<!-- Prova social: placeholder explícito (não inventamos depoimentos) -->
<section class="proof" use:gsapReveal aria-labelledby="prova-title">
  <div class="container" data-reveal>
    <p class="kicker">Prova social</p>
    <h2 id="prova-title">Clínicas e studios confiam no UpClinic</h2>
    <div class="ph">
      <p>
        <strong>[PLACEHOLDER]</strong> Depoimentos reais e números autorizados serão publicados aqui.
        Não inventamos resultados nem logos de clientes.
      </p>
      <div class="ph-grid" aria-hidden="true">
        <img src="/media/studio-pilates-card.webp" alt="" loading="lazy" />
        <img src="/media/fisio-paciente-card.webp" alt="" loading="lazy" />
        <img src="/media/reformer-card.webp" alt="" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<FounderOffer />

<section id="precos" class="pricing-section" use:gsapReveal aria-labelledby="precos-title">
  <div class="container relative" style="z-index:2;">
    <div class="text-center max-w-2xl mx-auto mb-10" data-reveal>
      <p class="kicker">{$t('pricing.badge')}</p>
      <h2 id="precos-title" class="price-title">
        {$t('pricing.title1')} <span class="up-gradient-text">{$t('pricing.title2')}</span>
      </h2>
      <p class="price-sub">
        {$t('pricing.subPre')}<strong>{$t('pricing.subStrong')}</strong>{$t('pricing.subEnd')}
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

<section class="final-cta home-cta-pad" use:gsapReveal>
  <div class="container text-center" data-reveal>
    <p class="kicker">{$t('homeCta.badge')}</p>
    <h2 class="final-title">
      {$t('homeCta.titleA')}<br class="hidden md:block" />
      <span class="up-gradient-text">{$t('homeCta.titleB')}</span>
    </h2>
    <p class="final-p">{$t('homeCta.p')}</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      <a
        href={TRIAL_PAGE_URL}
        class="up-btn-primary"
        on:click={() => trackTrialCta('CTA Final Teste', 'CTA Section')}
      >
        Teste grátis 7 dias
      </a>
      <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" class="up-btn-ghost">
        {$t('homeCta.ctaLogin')}
      </a>
    </div>
  </div>
</section>

<Footer />
<WhatsAppFloat />
<ConversionPopup />

<style>
  .kicker {
    margin: 0 0 0.55rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #0d9488;
  }

  .proof {
    padding: 4.5rem 0;
    background: #fff;
    text-align: center;
  }

  .proof h2 {
    margin: 0 0 1.25rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    font-weight: 800;
    color: #0f1f1c;
  }

  .ph {
    max-width: 48rem;
    margin: 0 auto;
    padding: 1.25rem;
    border-radius: 1.25rem;
    background: #fff5f2;
    border: 1px dashed rgba(240, 121, 106, 0.5);
  }

  .ph p {
    margin: 0 0 1rem;
    color: #5b6f6a;
    line-height: 1.55;
  }

  .ph-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.65rem;
  }

  .ph-grid img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    border-radius: 0.75rem;
    filter: grayscale(0.15);
    opacity: 0.9;
  }

  .pricing-section {
    background: linear-gradient(180deg, #f7fbfa 0%, #eef8f6 55%, #fff 100%);
    padding: 5.5rem 0;
  }

  .price-title {
    font-size: clamp(1.85rem, 4vw, 2.75rem);
    font-weight: 900;
    color: #0f1f1c;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .price-sub {
    margin-top: 1rem;
    color: #5b6f6a;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .price-sub strong {
    color: #0d9488;
  }

  .final-cta {
    background:
      linear-gradient(145deg, rgba(232, 247, 244, 0.95), rgba(255, 245, 242, 0.9)),
      url('/media/studio-pilates.webp') center / cover;
    padding: 6rem 0;
  }

  .final-title {
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 900;
    color: #0f1f1c;
    line-height: 1.08;
    letter-spacing: -0.02em;
  }

  .final-p {
    margin: 1rem auto 0;
    max-width: 36rem;
    color: #3d524d;
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    .home-cta-pad {
      padding-bottom: 7.5rem !important;
    }
    .ph-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
