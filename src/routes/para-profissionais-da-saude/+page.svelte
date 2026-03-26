<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { REGISTER_URL } from '$lib/constants';

  const specialties = [
    { icon: '🩺', name: 'Clínica Geral', benefit: 'Agenda, prontuário e prescrição em uma tela só' },
    { icon: '🧠', name: 'Psicologia', benefit: 'Anamnese, evolução e agendamento de sessões' },
    { icon: '🦷', name: 'Odontologia', benefit: 'Odontograma, plano de tratamento e financeiro' },
    { icon: '💪', name: 'Fisioterapia', benefit: 'Evolução por sessão e controle de turmas' },
    { icon: '🥗', name: 'Nutrição', benefit: 'Planos alimentares e acompanhamento de metas' },
    { icon: '👶', name: 'Pediatria', benefit: 'Curva de crescimento e cartão vacinal digital' },
    { icon: '❤️', name: 'Cardiologia', benefit: 'Laudos, ECG e integração com laboratório' },
    { icon: '🔬', name: 'Dermatologia', benefit: 'Galeria de imagens e evolução por foto' },
    { icon: '🏃', name: 'Educação Física', benefit: 'Avaliação física e prescrição de exercícios' }
  ];

  const profiles = [
    {
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      title: 'Profissional Autônomo',
      desc: 'Consultório solo, home office ou atendimento domiciliar. Gerencie agenda, prontuário e cobranças sem secretária, pelo celular ou computador.',
      highlight: 'Plano Básico a partir de R$ 79/mês',
      features: ['Agenda online com link de agendamento', 'Prontuário eletrônico completo', 'Cobranças e recibos automáticos', 'Telemedicina inclusa']
    },
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Clínica Multi-profissional',
      desc: 'Vários profissionais, especialidades e salas. Controle de comissões, agenda por profissional e gestão financeira centralizada.',
      highlight: 'Plano Profissional — multi-usuário',
      features: ['Múltiplos profissionais e especialidades', 'Controle de comissões e repasses', 'Relatórios por profissional', 'Gestão de convênios e TISS']
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
      title: 'Grupo Médico ou Rede',
      desc: 'Múltiplas unidades, controle centralizado e relatórios consolidados. API disponível para integrações com sistemas legados.',
      highlight: 'Plano Enterprise — personalizado',
      features: ['Múltiplas unidades com dados isolados', 'Dashboard consolidado por rede', 'API para integrações', 'Gerente de conta dedicado']
    }
  ];
</script>

<svelte:head>
  <title>Sistema para Profissionais da Saúde | UpClinic</title>
  <meta name="description" content="UpClinic é o sistema de gestão para médicos, psicólogos, fisioterapeutas, nutricionistas e toda área da saúde. Prontuário, agenda, financeiro e telemedicina integrados." />
  <link rel="canonical" href="https://www.clinicupapp.com/para-profissionais-da-saude" />
</svelte:head>

<Navbar />

<section class="pt-28 pb-16 bg-gradient-to-br from-teal-50 via-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Hero -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
        Para todas as especialidades da saúde
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
        O sistema que <span class="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">se adapta</span><br class="hidden md:block">
        ao seu jeito de trabalhar
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Do consultório solo à rede de clínicas, o UpClinic tem o perfil certo para você. Sem configuração complexa, sem treinamento longo — comece a usar no mesmo dia.
      </p>
      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-105 transition-all">
        Criar conta grátis — 30 dias, sem cartão
      </a>
    </div>

    <!-- Especialidades -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Funciona para qualquer especialidade</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {#each specialties as s}
          <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center">
            <div class="text-3xl mb-3">{s.icon}</div>
            <h3 class="text-base font-bold text-gray-900 mb-1">{s.name}</h3>
            <p class="text-gray-500 text-xs leading-snug">{s.benefit}</p>
          </div>
        {/each}
      </div>
      <p class="text-center text-gray-500 text-sm mt-4">+ Fonoaudiologia, Terapia Ocupacional, Enfermagem, Acupuntura e muito mais</p>
    </div>

    <!-- Perfis -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Qual é o seu perfil?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each profiles as p}
          <div class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col">
            <div class="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={p.icon}/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div class="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full inline-block mb-4">{p.highlight}</div>
            <ul class="space-y-2 mt-auto">
              {#each p.features as f}
                <li class="flex items-center gap-2 text-sm text-gray-700">
                  <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                  {f}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <!-- CTA final -->
    <div class="bg-gradient-to-r from-teal-600 to-blue-700 rounded-3xl p-10 text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Feito para profissionais de saúde brasileiros</h2>
      <p class="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
        Interface em português, suporte local, conformidade com CFM e LGPD, e preço justo. Experimente 30 dias grátis.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-teal-700 bg-white rounded-xl hover:bg-teal-50 hover:scale-105 transition-all shadow-lg">
          Iniciar Teste Grátis
        </a>
        <a href="/planos"
          class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/50 rounded-xl hover:border-white hover:bg-white/10 transition-all">
          Ver planos e preços
        </a>
      </div>
      <p class="text-teal-200 text-sm mt-6">Sem cartão · Sem taxa de setup · Suporte em português</p>
    </div>
  </div>
</section>

<Footer />
