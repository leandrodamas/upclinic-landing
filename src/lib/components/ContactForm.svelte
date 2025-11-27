<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  let errors = {};
  let loading = false;
  let success = false;
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    const re = /^[\d\s()+-]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }
  
  function validateForm() {
    errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Telefone é obrigatório';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Telefone inválido';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    return Object.keys(errors).length === 0;
  }
  
  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }
    
    loading = true;
    success = false;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        success = true;
        formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        dispatch('success');
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      errors.submit = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.';
      dispatch('error', error);
    } finally {
      loading = false;
    }
  }
</script>

<div class="card max-w-2xl mx-auto">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
  
  {#if success}
    <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-green-800 font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
      </div>
    </div>
  {/if}
  
  {#if errors.submit}
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <p class="text-red-800">{errors.submit}</p>
    </div>
  {/if}
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          bind:value={formData.name}
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.name ? 'border-red-500' : ''}"
          placeholder="Seu nome"
        />
        {#if errors.name}
          <p class="text-red-500 text-sm mt-1">{errors.name}</p>
        {/if}
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.email ? 'border-red-500' : ''}"
          placeholder="seu@email.com"
        />
        {#if errors.email}
          <p class="text-red-500 text-sm mt-1">{errors.email}</p>
        {/if}
      </div>
    </div>
    
    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
        Telefone / WhatsApp *
      </label>
      <input
        type="tel"
        id="phone"
        bind:value={formData.phone}
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.phone ? 'border-red-500' : ''}"
        placeholder="(62) 99999-9999"
      />
      {#if errors.phone}
        <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
      {/if}
    </div>
    
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
        Assunto *
      </label>
      <input
        type="text"
        id="subject"
        bind:value={formData.subject}
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.subject ? 'border-red-500' : ''}"
        placeholder="Qual o assunto da sua mensagem?"
      />
      {#if errors.subject}
        <p class="text-red-500 text-sm mt-1">{errors.subject}</p>
      {/if}
    </div>
    
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Mensagem *
      </label>
      <textarea
        id="message"
        bind:value={formData.message}
        rows="5"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.message ? 'border-red-500' : ''}"
        placeholder="Conte-nos como podemos ajudar..."
      ></textarea>
      {#if errors.message}
        <p class="text-red-500 text-sm mt-1">{errors.message}</p>
      {/if}
    </div>
    
    <div class="flex flex-col sm:flex-row gap-4">
      <button
        type="submit"
        disabled={loading}
        class="btn btn-primary flex-1 {loading ? 'opacity-50 cursor-not-allowed' : ''}"
      >
        {#if loading}
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        {:else}
          Enviar Mensagem
        {/if}
      </button>
      
      <a
        href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20UpClinic"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary flex-1 text-center"
      >
        Falar no WhatsApp
      </a>
    </div>
  </form>
</div>

