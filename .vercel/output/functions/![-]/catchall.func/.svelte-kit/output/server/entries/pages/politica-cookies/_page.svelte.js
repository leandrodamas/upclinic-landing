import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import { L as LegalPageLayout } from "../../../chunks/LegalPageLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toc = [
    {
      id: "o-que-sao",
      title: "1. O que são Cookies"
    },
    {
      id: "tipos",
      title: "2. Tipos de Cookies"
    },
    {
      id: "gerenciar",
      title: "3. Como Gerenciar Cookies"
    },
    {
      id: "terceiros",
      title: "4. Cookies de Terceiros"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-go7kr0_START -->${$$result.title = `<title>Política de Cookies - UpClinic | clinicupapp.com</title>`, ""}<meta name="description" content="Política de Cookies do UpClinic. Saiba como utilizamos cookies em nosso site."><link rel="canonical" href="https://clinicupapp.com/politica-cookies"><!-- HEAD_svelte-go7kr0_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(LegalPageLayout, "LegalPageLayout").$$render(
    $$result,
    {
      title: "Política de Cookies",
      toc,
      lastUpdated: "26/11/2025"
    },
    {},
    {
      default: () => {
        return `<div id="o-que-sao" data-svelte-h="svelte-1iumjk5"><h2>1. O que são Cookies</h2> <p>Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. 
      Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente, bem como 
      para fornecer informações aos proprietários do site.</p> <p>Os cookies permitem que um site reconheça seu dispositivo e armazene algumas informações sobre 
      suas preferências ou ações passadas.</p></div> <div id="tipos" data-svelte-h="svelte-whj2l6"><h2>2. Tipos de Cookies que Utilizamos</h2> <h3>2.1. Cookies Essenciais</h3> <p>Estes cookies são necessários para o funcionamento do site e não podem ser desativados. 
      Eles geralmente são definidos apenas em resposta a ações feitas por você, como definir 
      suas preferências de privacidade, fazer login ou preencher formulários.</p> <h3>2.2. Cookies de Desempenho</h3> <p>Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e 
      melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são mais e menos 
      populares e ver como os visitantes se movem pelo site.</p> <h3>2.3. Cookies de Funcionalidade</h3> <p>Estes cookies permitem que o site forneça funcionalidades e personalização aprimoradas. 
      Podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionamos às nossas páginas.</p> <h3>2.4. Cookies de Marketing</h3> <p>Estes cookies podem ser definidos através do nosso site por nossos parceiros de publicidade. 
      Podem ser usados por essas empresas para construir um perfil de seus interesses e mostrar-lhe 
      anúncios relevantes em outros sites.</p></div> <div id="gerenciar" data-svelte-h="svelte-qjqgav"><h2>3. Como Gerenciar Cookies</h2> <p>Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies 
      que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que 
      sejam colocados.</p> <h3>3.1. Configurações do Navegador</h3> <p>Você pode gerenciar cookies através das configurações do seu navegador:</p> <ul><li><strong>Google Chrome:</strong> Configurações &gt; Privacidade e segurança &gt; Cookies</li> <li><strong>Mozilla Firefox:</strong> Opções &gt; Privacidade e Segurança &gt; Cookies e Dados do Site</li> <li><strong>Safari:</strong> Preferências &gt; Privacidade &gt; Cookies e dados de sites</li> <li><strong>Microsoft Edge:</strong> Configurações &gt; Cookies e permissões do site</li></ul> <h3>3.2. Impacto da Desativação</h3> <p>Se você desativar os cookies, algumas funcionalidades do site podem não funcionar corretamente. 
      Por exemplo, você pode não conseguir fazer login ou usar certas áreas do site.</p></div> <div id="terceiros" data-svelte-h="svelte-10jbby8"><h2>4. Cookies de Terceiros</h2> <p>Além de nossos próprios cookies, também podemos usar vários cookies de terceiros para relatar 
      estatísticas de uso do site, entregar anúncios e assim por diante.</p> <h3>4.1. Serviços de Terceiros</h3> <p>Utilizamos os seguintes serviços de terceiros que podem definir cookies:</p> <ul><li><strong>Google Analytics:</strong> Para análise de uso do site</li> <li><strong>Google Fonts:</strong> Para carregamento de fontes</li></ul> <p>Estes serviços têm suas próprias políticas de privacidade e cookies. Recomendamos que você 
      revise essas políticas para entender como esses serviços tratam seus dados.</p></div> <div class="mt-12 p-6 bg-blue-50 rounded-lg" data-svelte-h="svelte-1kzk1wp"><h3 class="text-xl font-bold text-gray-900 mb-3">Dúvidas sobre Cookies?</h3> <p class="text-gray-700 mb-4">Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:</p> <ul class="text-gray-700 space-y-2"><li>Email: <a href="mailto:contato@clinicupapp.com" class="text-blue-600">contato@clinicupapp.com</a></li> <li>WhatsApp: <a href="https://wa.me/5562996720296" class="text-blue-600">(62) 99672-0296</a></li></ul></div>`;
      }
    }
  )} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
