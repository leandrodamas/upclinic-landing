<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { REGISTER_URL } from '$lib/constants';

  const benefits = [
    { icon: 'M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z', title: 'Videoconsulta HD', desc: 'Atendimento por vídeo com qualidade HD, sem instalação de aplicativo pelo paciente.' },
    { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Prontuário na Consulta', desc: 'Acesse e atualize o prontuário do paciente diretamente durante a videoconsulta, sem alternar telas.' },
    { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', title: 'Prescrição Digital', desc: 'Emita receitas digitais com validade legal durante ou após a consulta, com assinatura eletrônica certificada.' },
    { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', title: 'Link por WhatsApp', desc: 'Envie o link da consulta diretamente pelo WhatsApp. Paciente acessa com um clique, sem login.' },
    { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Agenda Integrada', desc: 'Consultas presenciais e remotas na mesma agenda. Paciente vê disponibilidade e agenda online.' },
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: '100% Seguro e Legal', desc: 'Em conformidade com a Resolução CFM 2.314/2022. Dados protegidos com criptografia ponta a ponta.' }
  ];
</script>

<svelte:head>
  <title>Telemedicina Integrada | UpClinic — Atendimento Remoto Seguro</title>
  <meta name="description" content="Telemedicina integrada ao prontuário eletrônico, agenda e prescrição digital. Conforme resolução CFM 2.314/2022. Atenda remotamente sem sair do UpClinic." />
  <link rel="canonical" href="https://www.clinicupapp.com/telemedicina" />
</svelte:head>

<Navbar />

<section class="pt-28 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Hero -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
        Conforme CFM 2.314/2022
      </span>
      <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
        Telemedicina integrada ao<br class="hidden md:block">
        <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">prontuário da sua clínica</span>
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Atenda seus pacientes de forma remota, segura e legal. A videoconsulta, o prontuário e a prescrição digital funcionam integrados — sem abrir outro sistema.
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg hover:scale-105 transition-all">
          Testar Grátis por 30 Dias
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </a>
        <a href="/contato"
          class="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-400 transition-all">
          Falar com um especialista
        </a>
      </div>
    </div>

    <!-- Como funciona -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Como funciona em 3 passos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each [
          { step: '1', title: 'Agende a consulta', desc: 'Profissional agenda a videoconsulta pela agenda do UpClinic. Paciente recebe o link por WhatsApp ou e-mail.' },
          { step: '2', title: 'Inicie a videoconsulta', desc: 'Clique em "Iniciar consulta" e a sala de vídeo abre dentro do UpClinic, com o prontuário ao lado.' },
          { step: '3', title: 'Finalize e prescreva', desc: 'Emita a receita digital com assinatura eletrônica e atualize o prontuário — tudo na mesma tela.' }
        ] as item}
          <div class="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
            <p class="text-gray-600 text-sm">{item.desc}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Benefícios -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">Por que usar a telemedicina do UpClinic</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each benefits as b}
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div class="w-11 h-11 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={b.icon}/>
              </svg>
            </div>
            <h3 class="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Conformidade legal -->
    <div class="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-blue-900 mb-2">Conformidade com a legislação brasileira</h3>
          <p class="text-blue-800 text-sm leading-relaxed">
            A telemedicina do UpClinic segue a <strong>Resolução CFM 2.314/2022</strong>, que regulamenta o exercício da medicina à distância no Brasil. A plataforma garante registro em prontuário, obtenção de consentimento do paciente, sigilo médico e segurança dos dados conforme LGPD.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA final -->
    <div class="bg-gradient-to-r from-purple-600 to-blue-700 rounded-3xl p-10 text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Expanda seu atendimento sem sair de casa</h2>
      <p class="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
        Configure a telemedicina em minutos e comece a atender remotamente hoje mesmo. 30 dias grátis, sem cartão.
      </p>
      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-purple-700 bg-white rounded-xl hover:bg-purple-50 hover:scale-105 transition-all shadow-lg">
        Criar conta grátis — 30 dias
      </a>
      <p class="text-purple-200 text-sm mt-4">Sem cartão · Sem taxa de setup · Cancele quando quiser</p>
    </div>
  </div>
</section>

<Footer />
