<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { REGISTER_URL, LOGIN_URL } from '$lib/constants';

  let billing: 'monthly' | 'yearly' = 'yearly';

  const plans = [
    {
      name: 'Básico',
      subtitle: 'Para profissionais autônomos',
      priceMonthly: 97,
      priceYearly: 77,
      color: 'gray',
      badge: '',
      features: [
        '1 profissional',
        'Agenda inteligente',
        'Prontuário eletrônico',
        'Lembretes por WhatsApp',
        'Telemedicina inclusa',
        'Cobranças e recibos',
        'Suporte por e-mail',
        'Até 200 pacientes ativos'
      ],
      missing: ['Múltiplos profissionais', 'Convênios / TISS', 'API e integrações']
    },
    {
      name: 'Profissional',
      subtitle: 'Para clínicas e consultórios',
      priceMonthly: 247,
      priceYearly: 197,
      color: 'blue',
      badge: 'Mais Popular',
      features: [
        'Até 5 profissionais',
        'Tudo do plano Básico',
        'Gestão financeira completa',
        'Controle de convênios',
        'Relatórios avançados',
        'Múltiplas especialidades',
        'Comissões por profissional',
        'Pacientes ilimitados',
        'Suporte prioritário por WhatsApp'
      ],
      missing: ['API e integrações', 'Múltiplas unidades']
    },
    {
      name: 'Enterprise',
      subtitle: 'Para grupos e redes de clínicas',
      priceMonthly: null,
      priceYearly: null,
      color: 'indigo',
      badge: 'Personalizado',
      features: [
        'Profissionais ilimitados',
        'Tudo do plano Profissional',
        'Múltiplas unidades',
        'Dashboard consolidado',
        'API e integrações',
        'Faturamento TISS',
        'Onboarding dedicado',
        'Gerente de conta exclusivo',
        'SLA garantido'
      ],
      missing: []
    }
  ];
</script>

<svelte:head>
  <title>Planos e Preços | UpClinic — 30 dias grátis, sem cartão</title>
  <meta name="description" content="Planos a partir de R$ 77/mês. UpClinic para consultórios, clínicas e grupos médicos. Teste grátis por 30 dias, sem cartão de crédito." />
  <link rel="canonical" href="https://www.clinicupapp.com/planos" />
</svelte:head>

<Navbar />

<section class="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Header -->
    <div class="text-center mb-12">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        Planos e Preços
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Simples, transparente,<br class="hidden md:block"> sem surpresas
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Comece grátis por 30 dias. Depois, escolha o plano que faz sentido para o tamanho da sua clínica.
      </p>

      <!-- Toggle mensal/anual -->
      <div class="inline-flex items-center bg-gray-100 rounded-xl p-1 gap-1">
        <button
          class="px-5 py-2 rounded-lg text-sm font-semibold transition-all {billing === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
          on:click={() => billing = 'monthly'}>
          Mensal
        </button>
        <button
          class="px-5 py-2 rounded-lg text-sm font-semibold transition-all {billing === 'yearly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}"
          on:click={() => billing = 'yearly'}>
          Anual
          <span class="ml-1.5 text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">-20%</span>
        </button>
      </div>
    </div>

    <!-- Cards de planos -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
      {#each plans as plan}
        <div class="relative bg-white rounded-2xl shadow-sm border {plan.color === 'blue' ? 'border-blue-400 shadow-blue-100 shadow-md ring-2 ring-blue-400' : 'border-gray-200'} overflow-hidden flex flex-col">
          {#if plan.badge}
            <div class="absolute top-0 left-0 right-0 text-center py-1.5 text-xs font-bold {plan.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'}">
              {plan.badge}
            </div>
          {/if}

          <div class="p-7 {plan.badge ? 'pt-10' : ''} flex-1 flex flex-col">
            <div class="mb-6">
              <h2 class="text-2xl font-extrabold text-gray-900 mb-1">{plan.name}</h2>
              <p class="text-gray-500 text-sm">{plan.subtitle}</p>
            </div>

            <div class="mb-6">
              {#if plan.priceMonthly !== null}
                <div class="flex items-end gap-1">
                  <span class="text-gray-400 text-base">R$</span>
                  <span class="text-5xl font-extrabold text-gray-900">{billing === 'yearly' ? plan.priceYearly : plan.priceMonthly}</span>
                  <span class="text-gray-400 text-sm pb-1">/mês</span>
                </div>
                {#if billing === 'yearly'}
                  <p class="text-green-600 text-xs font-semibold mt-1">Cobrado anualmente · Economize R$ {(plan.priceMonthly! - plan.priceYearly!) * 12}/ano</p>
                {:else}
                  <p class="text-gray-400 text-xs mt-1">Ou R$ {plan.priceYearly}/mês no plano anual</p>
                {/if}
              {:else}
                <div class="text-3xl font-extrabold text-gray-900 mb-1">Sob consulta</div>
                <p class="text-gray-400 text-xs">Preço personalizado para sua rede</p>
              {/if}
            </div>

            <!-- CTA -->
            {#if plan.priceMonthly !== null}
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
                class="block text-center w-full py-3 px-4 rounded-xl font-bold text-sm transition-all mb-6 {plan.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}">
                Começar grátis por 30 dias
              </a>
            {:else}
              <a href="/contato"
                class="block text-center w-full py-3 px-4 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-all mb-6">
                Falar com nosso time
              </a>
            {/if}

            <!-- Features -->
            <ul class="space-y-2.5 flex-1">
              {#each plan.features as f}
                <li class="flex items-start gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                  {f}
                </li>
              {/each}
              {#each plan.missing as m}
                <li class="flex items-start gap-2 text-sm text-gray-400">
                  <svg class="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  {m}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
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

    <!-- FAQ de preços -->
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-xl font-bold text-gray-900 mb-2">Dúvidas sobre os planos?</h2>
      <p class="text-gray-600 text-sm mb-6">Nosso time responde em até 1 hora útil.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="https://wa.me/5562996720296?text=Quero%20saber%20mais%20sobre%20os%20planos%20do%20UpClinic"
          target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all">
          Falar no WhatsApp
        </a>
        <a href="/contato"
          class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-400 rounded-xl transition-all">
          Enviar mensagem
        </a>
      </div>
    </div>
  </div>
</section>

<Footer />
