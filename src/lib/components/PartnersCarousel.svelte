<script lang="ts">
  // Lista de parceiros (você pode adicionar mais logos aqui)
  const partners = [
    {
      name: 'Clínica Vida+',
      logo: encodeURI('/ChatGPT Image 18 de dez. de 2025, 22_42_15.png'),
      url: '#'
    },
    {
      name: 'Saúde Prime',
      logo: encodeURI('/ChatGPT Image 18 de dez. de 2025, 22_52_03.png'),
      url: '#'
    },
    {
      name: 'STRIPE',
      logo: '/Stripe-Emblem.png',
      url: 'https://stripe.com'
    },
    {
      name: 'DigitalOcean',
      logo: '/download.png',
      url: 'https://www.digitalocean.com'
    },
    {
      name: 'Firebase',
      logo: '/logo-vertical.png',
      url: 'https://firebase.google.com'
    },
    {
      name: 'SendGrid',
      logo: encodeURI('/download (1).png'),
      url: 'https://sendgrid.com'
    },
    {
      name: 'AWS (Amazon Web Services)',
      logo: '/images.png',
      url: 'https://aws.amazon.com'
    }
  ];
  
  // Duplicar parceiros para criar efeito de loop infinito
  const duplicatedPartners = [...partners, ...partners];
</script>

<section class="py-6 md:py-8 bg-white border-y border-gray-100">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Título -->
    <div class="text-center mb-4 md:mb-6">
      <h2 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
        Nossos Parceiros
      </h2>
      <p class="text-gray-600 text-xs md:text-sm">
        Empresas que confiam no UpClinic
      </p>
    </div>
    
    <!-- Carrossel -->
    <div class="relative overflow-hidden">
      <!-- Máscara de gradiente esquerda -->
      <div class="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      <!-- Máscara de gradiente direita -->
      <div class="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <!-- Container do carrossel -->
      <div class="flex animate-scroll">
        {#each duplicatedPartners as partner}
          <div class="flex-shrink-0 mx-3 md:mx-6 flex items-center justify-center">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              class="block transition-all duration-300 hover:scale-110 w-24 h-12 sm:w-28 sm:h-14 md:w-40 md:h-20 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
    display: flex;
    width: fit-content;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
  
  /* Responsividade - ajustar velocidade em telas menores */
  @media (max-width: 768px) {
    .animate-scroll {
      animation-duration: 20s;
    }
  }
</style>

