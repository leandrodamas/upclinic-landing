<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head>
  <title>Contato - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Entre em contato com a UpClinic. WhatsApp: (62) 99672-0296 | Email: contato@clinicupapp.com" />
  <link rel="canonical" href="https://clinicupapp.com/contato" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Contato
      </span>
      <h1 class="section-title">Entre em contato</h1>
      <p class="section-description">
        Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Informações de Contato -->
      <div class="space-y-6">
        <div class="card">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Telefone / WhatsApp</h3>
              <p class="text-gray-600 mb-3">(62) 99672-0296</p>
              <a 
                href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20UpClinic"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Falar no WhatsApp
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p class="text-gray-600 mb-3">contato@clinicupapp.com</p>
              <a 
                href="mailto:contato@clinicupapp.com"
                class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Enviar email
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
              <p class="text-gray-600">Segunda a Sexta: 8h às 18h</p>
              <p class="text-gray-600">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Formulário -->
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
</section>

<Footer />

