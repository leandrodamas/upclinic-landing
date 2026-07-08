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
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  
  let demoModal: FeatureDemoModal;
  
  function openDemo() {
    if (demoModal) {
      demoModal.open();
    }
  }
  
  function trackWhatsAppClick(label: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: label
      });
    }
  }

  function trackLead(contentName = 'CTA Principal', source = 'Landing Page') {
    if (typeof window !== 'undefined' && window.fbq) {
      // Gerar event_id único para deduplicação
      const eventId = crypto.randomUUID();
      window.fbq('track', 'Lead', {
        content_name: contentName,
        content_category: 'SaaS',
        source: source
      }, { eventID: eventId });
      console.log('🔥 Meta Pixel Lead disparado - Event ID:', eventId, 'Content:', contentName);
      
      // Enviar para backend para deduplicação via CAPI
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          event_id: eventId,
          event_data: {
            content_name: contentName,
            content_category: 'SaaS',
            source: source
          }
        })
      }).catch(err => console.warn('Erro ao enviar evento para CAPI:', err));
    }
  }
</script>

<svelte:head>
  <title>UpClinic - Sistema de Gestão Médica Profissional | clinicupapp.com</title>
  <meta name="description" content="Sistema completo de gestão médica com prontuário eletrônico, agendamentos inteligentes, telemedicina e muito mais. Transforme sua clínica com tecnologia de ponta." />
  <meta property="og:title" content="UpClinic - Sistema de Gestão Médica Profissional" />
  <meta property="og:description" content="Transforme sua clínica com tecnologia de ponta. Sistema completo de gestão médica." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.clinicupapp.com" />
  <!-- og:image removido - já está definido em app.html para evitar duplicação -->
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://clinicupapp.com" />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UpClinic",
      "applicationCategory": "MedicalApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "1000"
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
<ResultsShowcase />
<FAQ />

<PartnersCarousel />

<!-- CTA Section — imersiva -->
<section class="relative overflow-hidden" style="background: linear-gradient(135deg,#050b23 0%,#0a1a44 45%,#1d4ed8 100%); padding-top:6rem; padding-bottom:6rem;">
  <div class="up-aurora" style="opacity:0.6;"></div>
  <div class="up-grid-overlay" style="opacity:0.35;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative" style="z-index:2;">
    <div use:reveal class="inline-flex items-center gap-2 mb-6 up-glass" style="padding:7px 16px; border-radius:999px;">
      <span class="up-pulse-dot" style="width:9px;height:9px;background:#34d399;border-radius:50%;"></span>
      <span style="color:#e0f2fe; font-size:0.8rem; font-weight:700;">{$t('homeCta.badge')}</span>
    </div>
    <h2 use:reveal={{ delay: 60 }} style="font-size:clamp(2.2rem,5vw,3.5rem); font-weight:900; color:#fff; line-height:1.08; letter-spacing:-0.02em; margin-bottom:1.25rem;">
      {$t('homeCta.titleA')}<br class="hidden md:block">
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
        href="https://upclinic-aa025.web.app/register"
        target="_blank"
        rel="noopener noreferrer"
        on:click|preventDefault={() => {
          trackLead('CTA Final Registro', 'CTA Section');
          window.open('https://upclinic-aa025.web.app/register', '_blank');
        }}
        class="up-btn-primary"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        {$t('homeCta.ctaStart')}
      </a>
      <a
        href="https://upclinic-aa025.web.app/login"
        target="_blank"
        rel="noopener noreferrer"
        on:click|preventDefault={() => {
          trackLead('CTA Final Login', 'CTA Section');
          window.open('https://upclinic-aa025.web.app/login', '_blank');
        }}
        class="up-btn-ghost"
      >
        {$t('homeCta.ctaLogin')}
      </a>
    </div>
    <p use:reveal={{ delay: 240 }} style="color:rgba(147,197,253,0.7); font-size:0.82rem; margin-top:1.5rem;">{$t('homeCta.footnote')}</p>
  </div>
</section>

<Footer />

<!-- WhatsApp Floating Button -->
<a 
  href="https://wa.me/5562997016149?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20UpClinic"
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group"
  aria-label={$t('homeCta.waTooltip')}
  on:click={() => trackWhatsAppClick('botao_whatsapp_flutuante')}
>
  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span class="absolute right-20 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    {$t('homeCta.waTooltip')}
  </span>
</a>

<FeatureDemoModal bind:this={demoModal} />
