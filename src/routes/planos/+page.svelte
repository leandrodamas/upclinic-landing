<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { CONTACT } from '$lib/constants';
</script>

<svelte:head>
  <title>Planos e Preços | UpClinic — 30 dias grátis, sem cartão</title>
  <meta name="description" content="Escolha o plano ideal para sua clínica. UpClinic para consultórios, clínicas e grupos médicos. Teste grátis por 30 dias, sem cartão de crédito." />
  <link rel="canonical" href="https://www.clinicupapp.com/planos" />

  <!-- Stripe Pricing Table -->
  <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
</svelte:head>

<Navbar />

<section class="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Header -->
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Planos e Preços
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Simples, transparente,<br class="hidden md:block"> sem surpresas
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Comece grátis por 30 dias. Depois, escolha o plano que faz sentido para o tamanho da sua clínica.
      </p>
    </div>

    <!-- Stripe Pricing Table -->
    <div class="max-w-6xl mx-auto mb-14">
      <stripe-pricing-table
        pricing-table-id="prctbl_1SGjR4JgDiwrjPsttCMjYT0l"
        publishable-key="pk_live_51RJcEcJgDiwrjPst442rbfublOeAi2EpTli6wtnASS5Trbm3fln4ggIJXyqtq2aRV1bBKI5UMF9Qwq3L8HSD8xtr00h5KIKhGd"
      ></stripe-pricing-table>
    </div>

    <!-- Garantias -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
      {#each [
        { icon: '🎁', title: '30 dias grátis', desc: 'Teste completo sem cartão de crédito' },
        { icon: '💸', title: 'Sem taxa de setup', desc: 'Nenhum custo de implantação ou configuração' },
        { icon: '🔓', title: 'Cancele quando quiser', desc: 'Sem multa, sem burocracia, sem prazo mínimo' }
      ] as g}
        <div class="text-center bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div class="text-2xl mb-2">{g.icon}</div>
          <div class="font-bold text-gray-900 text-sm">{g.title}</div>
          <div class="text-gray-500 text-xs mt-1">{g.desc}</div>
        </div>
      {/each}
    </div>

    <!-- Dúvidas -->
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-xl font-bold text-gray-900 mb-2">Dúvidas sobre os planos?</h2>
      <p class="text-gray-500 text-sm mb-6">Nosso time responde em até 1 hora útil.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://wa.me/5562996720296?text=Quero%20saber%20mais%20sobre%20os%20planos%20do%20UpClinic"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.406c-.217.607-1.268 1.198-1.737 1.274-.469.077-1.049.108-1.694-.108-.387-.127-.882-.301-1.518-.584-2.664-1.153-4.409-3.859-4.541-4.038-.133-.18-1.083-1.44-1.083-2.746 0-1.305.683-1.948.924-2.214.242-.267.528-.334.703-.334.176 0 .351.002.506.009.162.008.379-.062.592.451.22.532.746 1.827.812 1.96.066.133.11.289.022.463-.089.174-.133.283-.265.436-.133.153-.28.341-.4.458-.133.131-.272.272-.117.533.155.261.688 1.133 1.477 1.836.938.836 1.726 1.094 1.97 1.216.243.121.385.101.527-.061.141-.161.605-.704.767-.945.161-.241.322-.201.54-.121.219.081 1.385.653 1.623.772.238.12.397.18.456.28.059.1.059.576-.158 1.182z"/>
          </svg>
          Falar no WhatsApp
        </a>
        <a
          href="/contato"
          class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-400 rounded-xl transition-all"
        >
          Enviar mensagem
        </a>
      </div>
    </div>

  </div>
</section>

<Footer />
