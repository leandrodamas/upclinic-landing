<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Sobre - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Conheça a UpClinic, sistema completo de gestão médica desenvolvido para transformar a saúde com tecnologia." />
  <link rel="canonical" href="https://clinicupapp.com/sobre" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
          Sobre o UpClinic
        </span>
        <h1 class="section-title">Tecnologia que transforma a saúde</h1>
      </div>
      
      <div class="prose prose-lg max-w-none mb-16">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">
          O UpClinic foi desenvolvido por profissionais de saúde para profissionais de saúde. 
          Nossa missão é simplificar a gestão clínica, permitindo que você se concentre no 
          que realmente importa: cuidar dos seus pacientes.
        </p>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Nossa História</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Fundada com a visão de revolucionar a gestão de clínicas médicas, a UpClinic nasceu 
          da necessidade de unificar todas as ferramentas necessárias para o funcionamento 
          eficiente de uma clínica em uma única plataforma.
        </p>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Missão</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Proporcionar tecnologia de ponta para profissionais de saúde, simplificando processos 
          administrativos e permitindo que médicos e clínicas se concentrem no que fazem de melhor: 
          cuidar da saúde das pessoas.
        </p>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Visão</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Ser a plataforma de gestão médica mais completa e confiável do Brasil, reconhecida 
          pela excelência em tecnologia, segurança de dados e suporte ao cliente.
        </p>
        
        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">Valores</h2>
        <ul class="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Inovação:</strong> Estamos sempre buscando novas tecnologias para melhorar nossos serviços</li>
          <li><strong>Segurança:</strong> Proteção total dos dados dos pacientes e conformidade com LGPD</li>
          <li><strong>Excelência:</strong> Comprometimento com a qualidade em cada funcionalidade</li>
          <li><strong>Transparência:</strong> Comunicação clara e honesta com nossos clientes</li>
          <li><strong>Suporte:</strong> Atendimento dedicado e personalizado para cada cliente</li>
        </ul>
      </div>
      
      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div class="card">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900">Conformidade com LGPD</h3>
          </div>
          <p class="text-gray-600">Totalmente em conformidade com a Lei Geral de Proteção de Dados.</p>
        </div>
        
        <div class="card">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900">Segurança de Dados Hospitalar</h3>
          </div>
          <p class="text-gray-600">Criptografia de ponta a ponta e backup automático.</p>
        </div>
        
        <div class="card">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900">Suporte Especializado 24/7</h3>
          </div>
          <p class="text-gray-600">Equipe técnica disponível para ajudar quando você precisar.</p>
        </div>
        
        <div class="card">
          <div class="flex items-center space-x-3 mb-4">
            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900">Atualizações Constantes</h3>
          </div>
          <p class="text-gray-600">Novas funcionalidades e melhorias regularmente.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  :global(.prose h2) {
    @apply text-3xl font-bold text-gray-900 mt-12 mb-6;
  }
  
  :global(.prose p) {
    @apply text-gray-700 leading-relaxed mb-6;
  }
  
  :global(.prose ul) {
    @apply list-disc list-inside space-y-3 text-gray-700;
  }
</style>

