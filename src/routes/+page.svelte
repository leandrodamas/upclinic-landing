<script>
  import Hero from '$lib/components/Hero.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import ResultsShowcase from '$lib/components/ResultsShowcase.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import FeatureDemoModal from '$lib/components/FeatureDemoModal.svelte';
  
  let demoModal;
  
  function openDemo() {
    if (demoModal) {
      demoModal.open();
    }
  }
</script>

<svelte:head>
  <title>UpClinic - Sistema de Gestão Médica Profissional | clinicupapp.com</title>
  <meta name="description" content="Sistema completo de gestão médica com prontuário eletrônico, agendamentos inteligentes, telemedicina e muito mais. Transforme sua clínica com tecnologia de ponta." />
  <meta property="og:title" content="UpClinic - Sistema de Gestão Médica Profissional" />
  <meta property="og:description" content="Transforme sua clínica com tecnologia de ponta. Sistema completo de gestão médica." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://clinicupapp.com" />
  <meta property="og:image" content="https://clinicupapp.com/favicon-64.png" />
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
<Hero />
<FeatureGrid />
<ResultsShowcase />
<FAQ />

<!-- CTA Section -->
<section class="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
      Pronto para transformar sua clínica?
    </h2>
    <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Comece hoje mesmo e veja como o UpClinic pode revolucionar a gestão da sua clínica
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a 
        href="https://upclinic-aa025.web.app/login" 
        class="btn bg-white text-blue-600 hover:bg-gray-100 btn-large"
      >
        Começar Agora
      </a>
      <button 
        type="button"
        on:click={openDemo}
        class="btn btn-outline border-white text-white hover:bg-white/10 btn-large"
      >
        Falar com Vendas
      </button>
    </div>
  </div>
</section>

<Footer />

<!-- WhatsApp Floating Button -->
<a 
  href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20UpClinic"
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group"
  aria-label="Fale conosco no WhatsApp"
>
  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span class="absolute right-20 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    Fale conosco no WhatsApp
  </span>
</a>

<FeatureDemoModal bind:this={demoModal} />

