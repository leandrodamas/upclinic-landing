<script>
  let openIndex = null;
  
  const faqs = [
    {
      question: 'Como funciona o sistema UpClinic?',
      answer: 'O UpClinic é um sistema completo de gestão médica que integra prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais. Tudo em uma única plataforma na nuvem, acessível de qualquer dispositivo.'
    },
    {
      question: 'Preciso instalar algum software?',
      answer: 'Não! O UpClinic é 100% baseado em nuvem. Você acessa através do navegador web ou pelos aplicativos mobile (iOS e Android). Não há necessidade de instalação de software no computador.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia end-to-end, backup automático diário e total conformidade com a LGPD. Seus dados são armazenados em servidores seguros com redundância e monitoramento 24/7.'
    },
    {
      question: 'Posso testar antes de contratar?',
      answer: 'Claro! Oferecemos período de teste gratuito para você conhecer todas as funcionalidades. Não é necessário cartão de crédito para começar.'
    }
  ];
  
  function toggleFAQ(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="duvidas-frequentes" class="py-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        FICOU ALGUMA DÚVIDA?
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Confira nossas perguntas frequentes
      </p>
    </div>
    
    <div class="max-w-3xl mx-auto">
      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors">
            <button
              type="button"
              class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              on:click={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls="faq-answer-{index}"
            >
              <span class="font-semibold text-gray-900 text-lg flex-1">{faq.question}</span>
              <svg 
                class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {#if openIndex === index}
              <div 
                id="faq-answer-{index}"
                class="px-6 pb-5 text-gray-700 leading-relaxed animate-fade-in"
              >
                {faq.answer}
              </div>
            {/if}
          </div>
        {/each}
      </div>
      
      <!-- CTA -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-6">
          Não encontrou a resposta que procurava?
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/contato"
            class="btn bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Entre em Contato
          </a>
          <a 
            href="https://wa.me/5562996720296?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20UpClinic"
            target="_blank"
            rel="noopener noreferrer"
            class="btn bg-green-500 hover:bg-green-600 text-white px-8"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
</style>

