<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  let searchQuery = '';
  
  const faqs = [
    {
      category: 'Geral',
      questions: [
        {
          q: 'O que é o UpClinic?',
          a: 'O UpClinic é um sistema completo de gestão médica que oferece prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais, tudo em uma única plataforma.'
        },
        {
          q: 'Como posso começar a usar o UpClinic?',
          a: 'Você pode criar uma conta gratuita através do nosso site. Oferecemos 30 dias de teste gratuito para você conhecer todas as funcionalidades.'
        },
        {
          q: 'O UpClinic é seguro?',
          a: 'Sim! Utilizamos criptografia de ponta a ponta, backup automático e estamos totalmente em conformidade com a LGPD. Seus dados estão seguros conosco.'
        }
      ]
    },
    {
      category: 'Funcionalidades',
      questions: [
        {
          q: 'Quais funcionalidades estão incluídas?',
          a: 'O UpClinic inclui prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira, IA médica, relatórios avançados e muito mais. Consulte nossa página de funcionalidades para mais detalhes.'
        },
        {
          q: 'O sistema funciona em dispositivos móveis?',
          a: 'Sim! O UpClinic é totalmente responsivo e funciona perfeitamente em smartphones e tablets, permitindo acesso de qualquer lugar.'
        },
        {
          q: 'Posso integrar com outros sistemas?',
          a: 'Sim, oferecemos integrações com diversos sistemas. Entre em contato conosco para saber mais sobre integrações disponíveis.'
        }
      ]
    },
    {
      category: 'Planos e Preços',
      questions: [
        {
          q: 'Quais são os planos disponíveis?',
          a: 'Oferecemos três planos: Básico (para profissionais autônomos), Profissional (para clínicas) e Enterprise (para grandes redes). Consulte nossa página de planos para mais detalhes.'
        },
        {
          q: 'Há período de teste?',
          a: 'Sim! Oferecemos 30 dias de teste gratuito para você conhecer todas as funcionalidades sem compromisso.'
        },
        {
          q: 'Posso mudar de plano depois?',
          a: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente.'
        },
        {
          q: 'Há desconto para pagamento anual?',
          a: 'Sim! Oferecemos desconto de até 20% para pagamento anual. Consulte nossa página de planos para mais informações.'
        }
      ]
    },
    {
      category: 'Suporte',
      questions: [
        {
          q: 'Como posso entrar em contato com o suporte?',
          a: 'Você pode entrar em contato através do WhatsApp (62) 99672-0296, email contato@clinicupapp.com ou através do formulário de contato em nosso site.'
        },
        {
          q: 'Qual o horário de atendimento?',
          a: 'Nosso atendimento funciona de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h.'
        },
        {
          q: 'Oferecem treinamento?',
          a: 'Sim! Oferecemos treinamento para novos usuários e suporte contínuo. Entre em contato para saber mais sobre nossos programas de treinamento.'
        }
      ]
    },
    {
      category: 'Segurança e Privacidade',
      questions: [
        {
          q: 'Meus dados estão seguros?',
          a: 'Absolutamente. Utilizamos criptografia de ponta a ponta, backup automático, controles de acesso rigorosos e estamos totalmente em conformidade com a LGPD.'
        },
        {
          q: 'O UpClinic está em conformidade com a LGPD?',
          a: 'Sim! Estamos totalmente em conformidade com a Lei Geral de Proteção de Dados. Consulte nossa página sobre LGPD para mais informações.'
        },
        {
          q: 'Posso exportar meus dados?',
          a: 'Sim! Você pode solicitar a exportação dos seus dados a qualquer momento através do nosso suporte.'
        }
      ]
    }
  ];
  
  $: filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);
</script>

<svelte:head>
  <title>Perguntas Frequentes (FAQ) - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Perguntas frequentes sobre o UpClinic. Encontre respostas para suas dúvidas." />
  <link rel="canonical" href="https://clinicupapp.com/faq" />
</svelte:head>

<Navbar />

<section class="pt-32 pb-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
          FAQ
        </span>
        <h1 class="section-title">Perguntas Frequentes</h1>
        <p class="section-description">
          Encontre respostas para as dúvidas mais comuns sobre o UpClinic
        </p>
      </div>
      
      <!-- Busca -->
      <div class="mb-8">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar perguntas..."
          class="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <!-- FAQ por Categoria -->
      <div class="space-y-8">
        {#each filteredFaqs as category}
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
            <div class="space-y-4">
              {#each category.questions as faq}
                <details class="card cursor-pointer">
                  <summary class="font-bold text-gray-900 cursor-pointer list-none">
                    <div class="flex items-center justify-between">
                      <span>{faq.q}</span>
                      <svg class="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <p class="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                </details>
              {/each}
            </div>
          </div>
        {/each}
      </div>
      
      {#if filteredFaqs.length === 0}
        <div class="text-center py-12">
          <p class="text-gray-600 mb-4">Nenhuma pergunta encontrada para "{searchQuery}"</p>
          <a href="/contato" class="btn btn-primary">Entre em Contato</a>
        </div>
      {/if}
      
      <!-- CTA -->
      <div class="mt-16 text-center">
        <div class="card bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <h3 class="text-2xl font-bold mb-4">Não encontrou sua resposta?</h3>
          <p class="mb-6 text-blue-100">
            Nossa equipe está pronta para ajudar. Entre em contato conosco!
          </p>
          <a href="/contato" class="btn bg-white text-blue-600 hover:bg-gray-100">
            Falar com Suporte
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  details summary::-webkit-details-marker {
    display: none;
  }
  
  details[open] summary svg {
    transform: rotate(180deg);
  }
</style>

