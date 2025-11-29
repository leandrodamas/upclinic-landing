import { c as create_ssr_component, v as validate_component, f as add_attribute, d as each, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
const css = {
  code: "details.svelte-19qm027 summary.svelte-19qm027::-webkit-details-marker{display:none}details[open].svelte-19qm027 summary svg.svelte-19qm027{transform:rotate(180deg)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Navbar from \\"$lib/components/Navbar.svelte\\";\\nimport Footer from \\"$lib/components/Footer.svelte\\";\\nlet searchQuery = \\"\\";\\nconst faqs = [\\n  {\\n    category: \\"Geral\\",\\n    questions: [\\n      {\\n        q: \\"O que \\\\xE9 o UpClinic?\\",\\n        a: \\"O UpClinic \\\\xE9 um sistema completo de gest\\\\xE3o m\\\\xE9dica que oferece prontu\\\\xE1rio eletr\\\\xF4nico, agenda inteligente, telemedicina, gest\\\\xE3o financeira e muito mais, tudo em uma \\\\xFAnica plataforma.\\"\\n      },\\n      {\\n        q: \\"Como posso come\\\\xE7ar a usar o UpClinic?\\",\\n        a: \\"Voc\\\\xEA pode criar uma conta gratuita atrav\\\\xE9s do nosso site. Oferecemos 30 dias de teste gratuito para voc\\\\xEA conhecer todas as funcionalidades.\\"\\n      },\\n      {\\n        q: \\"O UpClinic \\\\xE9 seguro?\\",\\n        a: \\"Sim! Utilizamos criptografia de ponta a ponta, backup autom\\\\xE1tico e estamos totalmente em conformidade com a LGPD. Seus dados est\\\\xE3o seguros conosco.\\"\\n      }\\n    ]\\n  },\\n  {\\n    category: \\"Funcionalidades\\",\\n    questions: [\\n      {\\n        q: \\"Quais funcionalidades est\\\\xE3o inclu\\\\xEDdas?\\",\\n        a: \\"O UpClinic inclui prontu\\\\xE1rio eletr\\\\xF4nico, agenda inteligente, telemedicina, gest\\\\xE3o financeira, IA m\\\\xE9dica, relat\\\\xF3rios avan\\\\xE7ados e muito mais. Consulte nossa p\\\\xE1gina de funcionalidades para mais detalhes.\\"\\n      },\\n      {\\n        q: \\"O sistema funciona em dispositivos m\\\\xF3veis?\\",\\n        a: \\"Sim! O UpClinic \\\\xE9 totalmente responsivo e funciona perfeitamente em smartphones e tablets, permitindo acesso de qualquer lugar.\\"\\n      },\\n      {\\n        q: \\"Posso integrar com outros sistemas?\\",\\n        a: \\"Sim, oferecemos integra\\\\xE7\\\\xF5es com diversos sistemas. Entre em contato conosco para saber mais sobre integra\\\\xE7\\\\xF5es dispon\\\\xEDveis.\\"\\n      }\\n    ]\\n  },\\n  {\\n    category: \\"Planos e Pre\\\\xE7os\\",\\n    questions: [\\n      {\\n        q: \\"Quais s\\\\xE3o os planos dispon\\\\xEDveis?\\",\\n        a: \\"Oferecemos tr\\\\xEAs planos: B\\\\xE1sico (para profissionais aut\\\\xF4nomos), Profissional (para cl\\\\xEDnicas) e Enterprise (para grandes redes). Consulte nossa p\\\\xE1gina de planos para mais detalhes.\\"\\n      },\\n      {\\n        q: \\"H\\\\xE1 per\\\\xEDodo de teste?\\",\\n        a: \\"Sim! Oferecemos 30 dias de teste gratuito para voc\\\\xEA conhecer todas as funcionalidades sem compromisso.\\"\\n      },\\n      {\\n        q: \\"Posso mudar de plano depois?\\",\\n        a: \\"Sim! Voc\\\\xEA pode fazer upgrade ou downgrade do seu plano a qualquer momento. As altera\\\\xE7\\\\xF5es s\\\\xE3o aplicadas imediatamente.\\"\\n      },\\n      {\\n        q: \\"H\\\\xE1 desconto para pagamento anual?\\",\\n        a: \\"Sim! Oferecemos desconto de at\\\\xE9 20% para pagamento anual. Consulte nossa p\\\\xE1gina de planos para mais informa\\\\xE7\\\\xF5es.\\"\\n      }\\n    ]\\n  },\\n  {\\n    category: \\"Suporte\\",\\n    questions: [\\n      {\\n        q: \\"Como posso entrar em contato com o suporte?\\",\\n        a: \\"Voc\\\\xEA pode entrar em contato atrav\\\\xE9s do WhatsApp (62) 99672-0296, email contato@clinicupapp.com ou atrav\\\\xE9s do formul\\\\xE1rio de contato em nosso site.\\"\\n      },\\n      {\\n        q: \\"Qual o hor\\\\xE1rio de atendimento?\\",\\n        a: \\"Nosso atendimento funciona de segunda a sexta, das 8h \\\\xE0s 18h, e aos s\\\\xE1bados das 8h \\\\xE0s 12h.\\"\\n      },\\n      {\\n        q: \\"Oferecem treinamento?\\",\\n        a: \\"Sim! Oferecemos treinamento para novos usu\\\\xE1rios e suporte cont\\\\xEDnuo. Entre em contato para saber mais sobre nossos programas de treinamento.\\"\\n      }\\n    ]\\n  },\\n  {\\n    category: \\"Seguran\\\\xE7a e Privacidade\\",\\n    questions: [\\n      {\\n        q: \\"Meus dados est\\\\xE3o seguros?\\",\\n        a: \\"Absolutamente. Utilizamos criptografia de ponta a ponta, backup autom\\\\xE1tico, controles de acesso rigorosos e estamos totalmente em conformidade com a LGPD.\\"\\n      },\\n      {\\n        q: \\"O UpClinic est\\\\xE1 em conformidade com a LGPD?\\",\\n        a: \\"Sim! Estamos totalmente em conformidade com a Lei Geral de Prote\\\\xE7\\\\xE3o de Dados. Consulte nossa p\\\\xE1gina sobre LGPD para mais informa\\\\xE7\\\\xF5es.\\"\\n      },\\n      {\\n        q: \\"Posso exportar meus dados?\\",\\n        a: \\"Sim! Voc\\\\xEA pode solicitar a exporta\\\\xE7\\\\xE3o dos seus dados a qualquer momento atrav\\\\xE9s do nosso suporte.\\"\\n      }\\n    ]\\n  }\\n];\\n$: filteredFaqs = faqs.map((category) => ({\\n  ...category,\\n  questions: category.questions.filter(\\n    (q) => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase())\\n  )\\n})).filter((category) => category.questions.length > 0);\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n  <title>Perguntas Frequentes (FAQ) - UpClinic | clinicupapp.com</title>\\r\\n  <meta name=\\"description\\" content=\\"Perguntas frequentes sobre o UpClinic. Encontre respostas para suas dúvidas.\\" />\\r\\n  <link rel=\\"canonical\\" href=\\"https://clinicupapp.com/faq\\" />\\r\\n</svelte:head>\\r\\n\\r\\n<Navbar />\\r\\n\\r\\n<section class=\\"pt-32 pb-24 bg-white\\">\\r\\n  <div class=\\"container mx-auto px-4 sm:px-6 lg:px-8\\">\\r\\n    <div class=\\"max-w-4xl mx-auto\\">\\r\\n      <div class=\\"text-center mb-12\\">\\r\\n        <span class=\\"inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4\\">\\r\\n          FAQ\\r\\n        </span>\\r\\n        <h1 class=\\"section-title\\">Perguntas Frequentes</h1>\\r\\n        <p class=\\"section-description\\">\\r\\n          Encontre respostas para as dúvidas mais comuns sobre o UpClinic\\r\\n        </p>\\r\\n      </div>\\r\\n      \\r\\n      <!-- Busca -->\\r\\n      <div class=\\"mb-8\\">\\r\\n        <input\\r\\n          type=\\"text\\"\\r\\n          bind:value={searchQuery}\\r\\n          placeholder=\\"Buscar perguntas...\\"\\r\\n          class=\\"w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\\"\\r\\n        />\\r\\n      </div>\\r\\n      \\r\\n      <!-- FAQ por Categoria -->\\r\\n      <div class=\\"space-y-8\\">\\r\\n        {#each filteredFaqs as category}\\r\\n          <div>\\r\\n            <h2 class=\\"text-2xl font-bold text-gray-900 mb-6\\">{category.category}</h2>\\r\\n            <div class=\\"space-y-4\\">\\r\\n              {#each category.questions as faq}\\r\\n                <details class=\\"card cursor-pointer\\">\\r\\n                  <summary class=\\"font-bold text-gray-900 cursor-pointer list-none\\">\\r\\n                    <div class=\\"flex items-center justify-between\\">\\r\\n                      <span>{faq.q}</span>\\r\\n                      <svg class=\\"w-5 h-5 text-gray-500 flex-shrink-0\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                        <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 9l-7 7-7-7\\" />\\r\\n                      </svg>\\r\\n                    </div>\\r\\n                  </summary>\\r\\n                  <p class=\\"mt-4 text-gray-600 leading-relaxed\\">{faq.a}</p>\\r\\n                </details>\\r\\n              {/each}\\r\\n            </div>\\r\\n          </div>\\r\\n        {/each}\\r\\n      </div>\\r\\n      \\r\\n      {#if filteredFaqs.length === 0}\\r\\n        <div class=\\"text-center py-12\\">\\r\\n          <p class=\\"text-gray-600 mb-4\\">Nenhuma pergunta encontrada para \\"{searchQuery}\\"</p>\\r\\n          <a href=\\"/contato\\" class=\\"btn btn-primary\\">Entre em Contato</a>\\r\\n        </div>\\r\\n      {/if}\\r\\n      \\r\\n      <!-- CTA -->\\r\\n      <div class=\\"mt-16 text-center\\">\\r\\n        <div class=\\"card bg-gradient-to-r from-blue-600 to-indigo-700 text-white\\">\\r\\n          <h3 class=\\"text-2xl font-bold mb-4\\">Não encontrou sua resposta?</h3>\\r\\n          <p class=\\"mb-6 text-blue-100\\">\\r\\n            Nossa equipe está pronta para ajudar. Entre em contato conosco!\\r\\n          </p>\\r\\n          <a href=\\"/contato\\" class=\\"btn bg-white text-blue-600 hover:bg-gray-100\\">\\r\\n            Falar com Suporte\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<Footer />\\r\\n\\r\\n<style>\\r\\n  details summary::-webkit-details-marker {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  details[open] summary svg {\\r\\n    transform: rotate(180deg);\\r\\n  }\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"AAuLE,sBAAO,CAAC,sBAAO,wBAAyB,CACtC,OAAO,CAAE,IACX,CAEA,OAAO,CAAC,IAAI,gBAAC,CAAC,OAAO,CAAC,kBAAI,CACxB,SAAS,CAAE,OAAO,MAAM,CAC1B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredFaqs;
  let searchQuery = "";
  const faqs = [
    {
      category: "Geral",
      questions: [
        {
          q: "O que é o UpClinic?",
          a: "O UpClinic é um sistema completo de gestão médica que oferece prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais, tudo em uma única plataforma."
        },
        {
          q: "Como posso começar a usar o UpClinic?",
          a: "Você pode criar uma conta gratuita através do nosso site. Oferecemos 30 dias de teste gratuito para você conhecer todas as funcionalidades."
        },
        {
          q: "O UpClinic é seguro?",
          a: "Sim! Utilizamos criptografia de ponta a ponta, backup automático e estamos totalmente em conformidade com a LGPD. Seus dados estão seguros conosco."
        }
      ]
    },
    {
      category: "Funcionalidades",
      questions: [
        {
          q: "Quais funcionalidades estão incluídas?",
          a: "O UpClinic inclui prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira, IA médica, relatórios avançados e muito mais. Consulte nossa página de funcionalidades para mais detalhes."
        },
        {
          q: "O sistema funciona em dispositivos móveis?",
          a: "Sim! O UpClinic é totalmente responsivo e funciona perfeitamente em smartphones e tablets, permitindo acesso de qualquer lugar."
        },
        {
          q: "Posso integrar com outros sistemas?",
          a: "Sim, oferecemos integrações com diversos sistemas. Entre em contato conosco para saber mais sobre integrações disponíveis."
        }
      ]
    },
    {
      category: "Planos e Preços",
      questions: [
        {
          q: "Quais são os planos disponíveis?",
          a: "Oferecemos três planos: Básico (para profissionais autônomos), Profissional (para clínicas) e Enterprise (para grandes redes). Consulte nossa página de planos para mais detalhes."
        },
        {
          q: "Há período de teste?",
          a: "Sim! Oferecemos 30 dias de teste gratuito para você conhecer todas as funcionalidades sem compromisso."
        },
        {
          q: "Posso mudar de plano depois?",
          a: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente."
        },
        {
          q: "Há desconto para pagamento anual?",
          a: "Sim! Oferecemos desconto de até 20% para pagamento anual. Consulte nossa página de planos para mais informações."
        }
      ]
    },
    {
      category: "Suporte",
      questions: [
        {
          q: "Como posso entrar em contato com o suporte?",
          a: "Você pode entrar em contato através do WhatsApp (62) 99672-0296, email contato@clinicupapp.com ou através do formulário de contato em nosso site."
        },
        {
          q: "Qual o horário de atendimento?",
          a: "Nosso atendimento funciona de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h."
        },
        {
          q: "Oferecem treinamento?",
          a: "Sim! Oferecemos treinamento para novos usuários e suporte contínuo. Entre em contato para saber mais sobre nossos programas de treinamento."
        }
      ]
    },
    {
      category: "Segurança e Privacidade",
      questions: [
        {
          q: "Meus dados estão seguros?",
          a: "Absolutamente. Utilizamos criptografia de ponta a ponta, backup automático, controles de acesso rigorosos e estamos totalmente em conformidade com a LGPD."
        },
        {
          q: "O UpClinic está em conformidade com a LGPD?",
          a: "Sim! Estamos totalmente em conformidade com a Lei Geral de Proteção de Dados. Consulte nossa página sobre LGPD para mais informações."
        },
        {
          q: "Posso exportar meus dados?",
          a: "Sim! Você pode solicitar a exportação dos seus dados a qualquer momento através do nosso suporte."
        }
      ]
    }
  ];
  $$result.css.add(css);
  filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter((q) => q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter((category) => category.questions.length > 0);
  return `${$$result.head += `<!-- HEAD_svelte-1sktayf_START -->${$$result.title = `<title>Perguntas Frequentes (FAQ) - UpClinic | clinicupapp.com</title>`, ""}<meta name="description" content="Perguntas frequentes sobre o UpClinic. Encontre respostas para suas dúvidas."><link rel="canonical" href="https://clinicupapp.com/faq"><!-- HEAD_svelte-1sktayf_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section class="pt-32 pb-24 bg-white"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="max-w-4xl mx-auto"><div class="text-center mb-12" data-svelte-h="svelte-p7bgfu"><span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">FAQ</span> <h1 class="section-title">Perguntas Frequentes</h1> <p class="section-description">Encontre respostas para as dúvidas mais comuns sobre o UpClinic</p></div>  <div class="mb-8"><input type="text" placeholder="Buscar perguntas..." class="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"${add_attribute("value", searchQuery, 0)}></div>  <div class="space-y-8">${each(filteredFaqs, (category) => {
    return `<div><h2 class="text-2xl font-bold text-gray-900 mb-6">${escape(category.category)}</h2> <div class="space-y-4">${each(category.questions, (faq) => {
      return `<details class="card cursor-pointer svelte-19qm027"><summary class="font-bold text-gray-900 cursor-pointer list-none svelte-19qm027"><div class="flex items-center justify-between"><span>${escape(faq.q)}</span> <svg class="w-5 h-5 text-gray-500 flex-shrink-0 svelte-19qm027" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </div></summary> <p class="mt-4 text-gray-600 leading-relaxed">${escape(faq.a)}</p> </details>`;
    })}</div> </div>`;
  })}</div> ${filteredFaqs.length === 0 ? `<div class="text-center py-12"><p class="text-gray-600 mb-4">Nenhuma pergunta encontrada para &quot;${escape(searchQuery)}&quot;</p> <a href="/contato" class="btn btn-primary" data-svelte-h="svelte-w8fo1j">Entre em Contato</a></div>` : ``}  <div class="mt-16 text-center" data-svelte-h="svelte-1pa4wn7"><div class="card bg-gradient-to-r from-blue-600 to-indigo-700 text-white"><h3 class="text-2xl font-bold mb-4">Não encontrou sua resposta?</h3> <p class="mb-6 text-blue-100">Nossa equipe está pronta para ajudar. Entre em contato conosco!</p> <a href="/contato" class="btn bg-white text-blue-600 hover:bg-gray-100">Falar com Suporte</a></div></div></div></div></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
