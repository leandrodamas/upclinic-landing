<script lang="ts">
  import { onMount } from 'svelte';
  
  let currentIndex = 0;
  let autoplay = true;
  
  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      role: 'Cardiologista',
      clinic: 'Clínica Cardio Saúde',
      rating: 5,
      text: 'O UpClinic revolucionou a gestão da minha clínica. A interface é intuitiva e o suporte é excepcional. Recomendo!'
    },
    {
      name: 'Dra. Ana Paula',
      role: 'Pediatra',
      clinic: 'Clínica Infantil',
      rating: 5,
      text: 'Sistema completo e fácil de usar. Os pacientes adoram a facilidade de agendamento e eu adoro a organização dos prontuários.'
    },
    {
      name: 'Dr. Roberto Mendes',
      role: 'Ortopedista',
      clinic: 'Instituto Ortopédico',
      rating: 5,
      text: 'A telemedicina integrada é fantástica. Conseguimos atender pacientes de qualquer lugar com qualidade profissional.'
    }
  ];
  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  }
  
  onMount(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        if (autoplay) nextTestimonial();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  });
</script>

<section class="py-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Depoimentos
      </span>
      <h2 class="section-title">O que nossos clientes dizem</h2>
      <p class="section-description">
        Profissionais de saúde que confiam no UpClinic
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto relative">
      <div 
        class="card text-center"
        on:mouseenter={() => autoplay = false}
        on:mouseleave={() => autoplay = true}
        role="region"
        aria-label="Depoimentos de clientes"
      >
        <div class="flex justify-center mb-4">
          {#each Array(testimonials[currentIndex].rating) as _}
            <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          {/each}
        </div>
        
        <blockquote class="text-xl md:text-2xl text-gray-700 mb-6 italic">
          "{testimonials[currentIndex].text}"
        </blockquote>
        
        <div class="flex items-center justify-center space-x-4">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {testimonials[currentIndex].name.charAt(0)}
          </div>
          <div class="text-left">
            <div class="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
            <div class="text-sm text-gray-600">{testimonials[currentIndex].role}</div>
            <div class="text-sm text-gray-500">{testimonials[currentIndex].clinic}</div>
          </div>
        </div>
      </div>
      
      <!-- Navigation -->
      <button 
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        on:click={prevTestimonial}
        aria-label="Depoimento anterior"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        on:click={nextTestimonial}
        aria-label="Próximo depoimento"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Dots -->
      <div class="flex justify-center space-x-2 mt-8">
        {#each testimonials as _, index}
          <button
            class="w-2 h-2 rounded-full transition-all {index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'}"
            on:click={() => currentIndex = index}
            aria-label="Ir para depoimento {index + 1}"
          />
        {/each}
      </div>
    </div>
  </div>
</section>

