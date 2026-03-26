<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { REGISTER_URL, CONTACT } from '$lib/constants';

  const modules = [
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      title: 'Agenda Inteligente',
      description: 'Agendamento online com confirmação automática por WhatsApp e e-mail. Veja disponibilidade em tempo real, evite conflitos e reduza faltas com lembretes automáticos.',
      highlight: 'Reduz até 80% das faltas',
      color: 'blue'
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Prontuário Eletrônico',
      description: 'Prontuário completo e seguro, com histórico do paciente, evolução clínica, prescrições, exames e documentos. Acesso rápido de qualquer dispositivo.',
      highlight: '100% em conformidade com CFM',
      color: 'green'
    },
    {
      icon: 'M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
      title: 'Telemedicina Integrada',
      description: 'Atenda pacientes remotamente com videoconsulta integrada ao prontuário. Prescrições digitais e encaminhamentos emitidos direto da consulta.',
      highlight: 'Conforme resolução CFM 2.314/2022',
      color: 'purple'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Gestão Financeira',
      description: 'Controle de receitas, despesas, repasses e inadimplência. Emissão de NF, cobranças automáticas e relatórios financeiros detalhados por período e profissional.',
      highlight: 'Reduz inadimplência em 60%',
      color: 'orange'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Gestão de Pacientes',
      description: 'Cadastro completo com histórico de consultas, financeiro, documentos e comunicação. Segmentação por convênio, especialidade ou profissional.',
      highlight: 'Histórico completo em segundos',
      color: 'teal'
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Relatórios e Analytics',
      description: 'Dashboards em tempo real com métricas de ocupação, faturamento, performance por profissional e análise de tendências para decisões estratégicas.',
      highlight: 'Visão 360° da sua clínica',
      color: 'indigo'
    },
    {
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      title: 'WhatsApp Integrado',
      description: 'Envio automático de confirmações, lembretes e orientações pós-consulta diretamente pelo WhatsApp. Comunicação com o paciente sem sair do sistema.',
      highlight: 'Automação sem esforço extra',
      color: 'green'
    },
    {
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      title: 'Farmácia e Prescrições',
      description: 'Emissão de receitas digitais com assinatura eletrônica, controle de prescrições e integração com farmácias parceiras para otimizar o atendimento.',
      highlight: 'Prescrição digital com validade legal',
      color: 'red'
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: 'Gestão de Convênios',
      description: 'Controle de convênios e planos de saúde, faturamento TISS, glosas e relatórios de produção. Simplifique o processo de autorização e cobrança.',
      highlight: 'Faturamento TISS simplificado',
      color: 'yellow'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    red: 'bg-red-100 text-red-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };
</script>

<svelte:head>
  <title>Funcionalidades | UpClinic — Sistema Completo de Gestão Médica</title>
  <meta name="description" content="Conheça os 18+ módulos do UpClinic: agenda inteligente, prontuário eletrônico, telemedicina, financeiro, WhatsApp integrado e muito mais para sua clínica." />
  <link rel="canonical" href="https://www.clinicupapp.com/funcionalidades" />
</svelte:head>

<Navbar />

<section class="pt-28 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Header -->
    <div class="text-center mb-14">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
        18+ Módulos Integrados
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
        Tudo que sua clínica precisa<br class="hidden md:block">
        <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">em uma única plataforma</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Chega de sistemas separados que não se falam. O UpClinic integra agenda, prontuário, financeiro e comunicação — sem planilhas, sem papel, sem dor de cabeça.
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-105 transition-all">
          Testar Grátis por 30 Dias
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </a>
        <a href="https://wa.me/5562996720296?text=Quero%20conhecer%20as%20funcionalidades%20do%20UpClinic"
          target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 17.406c-.217.607-1.268 1.198-1.737 1.274-.469.077-1.049.108-1.694-.108-.387-.127-.882-.301-1.518-.584-2.664-1.153-4.409-3.859-4.541-4.038-.133-.18-1.083-1.44-1.083-2.746 0-1.305.683-1.948.924-2.214.242-.267.528-.334.703-.334.176 0 .351.002.506.009.162.008.379-.062.592.451.22.532.746 1.827.812 1.96.066.133.11.289.022.463-.089.174-.133.283-.265.436-.133.153-.28.341-.4.458-.133.131-.272.272-.117.533.155.261.688 1.133 1.477 1.836.938.836 1.726 1.094 1.97 1.216.243.121.385.101.527-.061.141-.161.605-.704.767-.945.161-.241.322-.201.54-.121.219.081 1.385.653 1.623.772.238.12.397.18.456.28.059.1.059.576-.158 1.182z"/></svg>
          Falar com um especialista
        </a>
      </div>
    </div>

    <!-- Grid de Módulos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {#each modules as mod}
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 {colorMap[mod.color] || 'bg-blue-100 text-blue-600'} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={mod.icon}/>
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-bold text-gray-900 mb-0.5">{mod.title}</h2>
              <span class="inline-block text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{mod.highlight}</span>
            </div>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">{mod.description}</p>
        </div>
      {/each}
    </div>

    <!-- CTA final -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Pronto para simplificar sua clínica?</h2>
      <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
        Comece com 30 dias grátis, sem cartão de crédito e sem taxa de setup. Configure em minutos e veja a diferença no primeiro dia.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-blue-700 bg-white rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-lg">
          Criar conta grátis — 30 dias
        </a>
        <a href="/planos"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl hover:border-white hover:bg-white/10 transition-all">
          Ver planos e preços
        </a>
      </div>
      <p class="text-blue-200 text-sm mt-6">Sem cartão · Sem taxa de setup · Cancele quando quiser</p>
    </div>
  </div>
</section>

<Footer />
