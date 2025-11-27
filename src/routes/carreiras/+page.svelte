<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import JobApplicationForm from '$lib/components/JobApplicationForm.svelte';
  import { CONTACT } from '$lib/constants';
  
  let showForm = false;
  let selectedPosition = '';
  
  function openForm(position) {
    selectedPosition = position;
    showForm = true;
    document.body.style.overflow = 'hidden';
  }
  
  function closeForm() {
    showForm = false;
    selectedPosition = '';
    document.body.style.overflow = '';
  }
  
  onMount(() => {
    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:head>
  <title>Carreiras - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Junte-se à equipe UpClinic! Trabalhe conosco para transformar a saúde com tecnologia. Vagas abertas para desenvolvedores, designers e profissionais de saúde." />
  <link rel="canonical" href="https://clinicupapp.com/carreiras" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Carreiras
      </span>
      <h1 class="section-title">Trabalhe Conosco</h1>
      <p class="section-description max-w-2xl mx-auto">
        Faça parte da equipe que está transformando a gestão médica com tecnologia de ponta.
        Estamos sempre em busca de talentos apaixonados por inovação e saúde.
      </p>
    </div>

    <!-- Por que trabalhar na UpClinic -->
    <div class="max-w-6xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Por que trabalhar na UpClinic?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">💡</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
          <p class="text-gray-600">
            Trabalhe com as tecnologias mais modernas do mercado e participe de projetos que realmente fazem diferença na vida das pessoas.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Crescimento</h3>
          <p class="text-gray-600">
            Oportunidades de desenvolvimento profissional contínuo, treinamentos e mentoria para acelerar sua carreira.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">❤️</div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Propósito</h3>
          <p class="text-gray-600">
            Faça parte de algo que transforma vidas e a saúde. Seu trabalho terá impacto real na gestão de clínicas e no cuidado com pacientes.
          </p>
        </div>
      </div>
    </div>

    <!-- Vagas em Destaque -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Vagas em Destaque</h2>
      
      <div class="space-y-6">
        <!-- Vaga 1 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Desenvolvedor Full Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Remoto</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">CLT</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">Sênior</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-4">
            Procuramos um desenvolvedor experiente em React, Node.js e Firebase para trabalhar em nosso sistema de gestão médica.
          </p>
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 mb-2">Requisitos:</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Experiência com React/TypeScript</li>
              <li>Conhecimento em Node.js e Firebase</li>
              <li>Experiência com sistemas de saúde (diferencial)</li>
            </ul>
          </div>
          <button
            on:click={() => openForm('Desenvolvedor Full Stack')}
            class="btn bg-blue-600 hover:bg-blue-700 text-white"
          >
            Candidatar-se
          </button>
        </div>

        <!-- Vaga 2 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Designer UX/UI</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Remoto</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">CLT</span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">Pleno</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-4">
            Buscamos um designer criativo para criar interfaces intuitivas e acessíveis para profissionais de saúde.
          </p>
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 mb-2">Requisitos:</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Portfólio com projetos de SaaS ou sistemas complexos</li>
              <li>Conhecimento em Figma e design systems</li>
              <li>Experiência com acessibilidade (WCAG)</li>
            </ul>
          </div>
          <button
            on:click={() => openForm('Designer UX/UI')}
            class="btn bg-blue-600 hover:bg-blue-700 text-white"
          >
            Candidatar-se
          </button>
        </div>

        <!-- Vaga 3 -->
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Especialista em Saúde Digital</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Remoto</span>
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">CLT</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">Sênior</span>
              </div>
            </div>
          </div>
          <p class="text-gray-700 mb-4">
            Procuramos um profissional com experiência em gestão médica para ajudar a desenvolver funcionalidades que atendam às necessidades reais das clínicas.
          </p>
          <div class="mb-4">
            <h4 class="font-semibold text-gray-900 mb-2">Requisitos:</h4>
            <ul class="list-disc list-inside text-gray-600 space-y-1">
              <li>Formação em Medicina, Enfermagem ou Gestão em Saúde</li>
              <li>Experiência com sistemas de gestão médica</li>
              <li>Conhecimento em LGPD e regulamentações do CFM</li>
            </ul>
          </div>
          <button
            on:click={() => openForm('Especialista em Saúde Digital')}
            class="btn bg-blue-600 hover:bg-blue-700 text-white"
          >
            Candidatar-se
          </button>
        </div>
      </div>
    </div>

    <!-- Candidatura Espontânea -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div class="mb-6">
          <svg class="w-24 h-24 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Não encontrou a vaga ideal?</h2>
        <p class="text-xl text-gray-600 mb-8">
          Envie seu currículo mesmo assim! Estamos sempre em busca de novos talentos e podemos ter uma oportunidade perfeita para você em breve.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            on:click={() => openForm('Candidatura Espontânea')}
            class="btn bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Enviar Currículo
          </button>
          <a 
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-green-500 hover:bg-green-600 text-white px-8"
          >
            Falar no WhatsApp
          </a>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200">
          <p class="text-gray-600 mb-2">
            <strong>Email:</strong> <a href="mailto:contato@clinicupapp.com" class="text-blue-600 hover:underline">{CONTACT.email}</a>
          </p>
          <p class="text-gray-600">
            <strong>WhatsApp:</strong> <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">{CONTACT.phone}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Modal de Formulário -->
{#if showForm}
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    on:click={closeForm}
    role="dialog"
    aria-modal="true"
    aria-labelledby="form-title"
  >
    <div 
      on:click|stopPropagation
      class="w-full max-w-2xl"
    >
      <JobApplicationForm positionName={selectedPosition} onClose={closeForm} />
    </div>
  </div>
{/if}

<Footer />
