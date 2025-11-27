<script>
  let formData = {
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: ''
  };
  
  let errors = {};
  let loading = false;
  let success = false;
  
  export let positionName = '';
  export let onClose = () => {};
  
  $: if (positionName) {
    formData.position = positionName;
  }
  
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
    
    if (!formData.position.trim()) {
      errors.position = 'Vaga é obrigatória';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Mensagem deve ter pelo menos 20 caracteres';
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
      // Criar link mailto com todos os dados
      const subject = encodeURIComponent(`Candidatura - ${formData.position}`);
      const body = encodeURIComponent(
        `Candidatura para a vaga: ${formData.position}\n\n` +
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Mensagem:\n${formData.message}`
      );
      
      // Tentar usar a API primeiro (se disponível em desenvolvimento)
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Candidatura - ${formData.position}`,
            message: `Candidatura para a vaga: ${formData.position}\n\n${formData.message}\n\nTelefone: ${formData.phone}\nEmail: ${formData.email}`
          })
        });
        
        if (response.ok) {
          success = true;
          setTimeout(() => {
            onClose();
            formData = {
              name: '',
              email: '',
              phone: '',
              position: positionName,
              resume: null,
              message: ''
            };
            success = false;
          }, 2000);
          loading = false;
          return;
        }
      } catch (apiError) {
        // Se a API não estiver disponível, usar mailto como fallback
        console.log('API não disponível, usando mailto como fallback');
      }
      
      // Fallback: usar mailto
      window.location.href = `mailto:contato@clinicupapp.com?subject=${subject}&body=${body}`;
      
      // Mostrar mensagem de sucesso mesmo usando mailto
      success = true;
      setTimeout(() => {
        onClose();
        formData = {
          name: '',
          email: '',
          phone: '',
          position: positionName,
          resume: null,
          message: ''
        };
        success = false;
      }, 2000);
      
    } catch (error) {
      errors.submit = 'Erro ao enviar candidatura. Por favor, tente novamente ou entre em contato via WhatsApp.';
    } finally {
      loading = false;
    }
  }
</script>

<div class="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
  <div class="flex items-center justify-between mb-6">
    <h3 class="text-2xl font-bold text-gray-900">Candidatar-se</h3>
    <button
      type="button"
      on:click={onClose}
      class="text-gray-400 hover:text-gray-600 transition-colors"
      aria-label="Fechar"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  
  {#if success}
    <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <p class="text-green-800 font-medium">Candidatura enviada com sucesso! Entraremos em contato em breve.</p>
      </div>
    </div>
  {/if}
  
  {#if errors.submit}
    <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
      <p class="text-red-800">{errors.submit}</p>
    </div>
  {/if}
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div>
      <label for="position" class="block text-sm font-medium text-gray-700 mb-2">
        Vaga de Interesse *
      </label>
      <input
        type="text"
        id="position"
        bind:value={formData.position}
        readonly
        class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
      />
      {#if errors.position}
        <p class="text-red-500 text-sm mt-1">{errors.position}</p>
      {/if}
    </div>
    
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
      <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
        Conte-nos sobre você e sua experiência *
      </label>
      <textarea
        id="message"
        bind:value={formData.message}
        rows="6"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent {errors.message ? 'border-red-500' : ''}"
        placeholder="Fale sobre sua experiência, habilidades e por que você gostaria de trabalhar conosco..."
      ></textarea>
      {#if errors.message}
        <p class="text-red-500 text-sm mt-1">{errors.message}</p>
      {/if}
      <p class="text-sm text-gray-500 mt-2">
        💡 Dica: Você pode anexar seu currículo enviando por email para contato@clinicupapp.com após enviar este formulário.
      </p>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-4">
      <button
        type="submit"
        disabled={loading}
        class="btn bg-blue-600 hover:bg-blue-700 text-white flex-1 {loading ? 'opacity-50 cursor-not-allowed' : ''}"
      >
        {#if loading}
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando...
        {:else}
          Enviar Candidatura
        {/if}
      </button>
      
      <button
        type="button"
        on:click={onClose}
        class="btn bg-gray-200 hover:bg-gray-300 text-gray-800 flex-1"
      >
        Cancelar
      </button>
    </div>
  </form>
</div>

