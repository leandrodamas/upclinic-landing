import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import { L as LegalPageLayout } from "../../../chunks/LegalPageLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const toc = [
    {
      id: "valores",
      title: "1. Valores e Princípios"
    },
    {
      id: "comportamento",
      title: "2. Comportamento Esperado"
    },
    {
      id: "consequencias",
      title: "3. Consequências"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-uiqgiv_START -->${$$result.title = `<title>Código de Conduta - UpClinic | clinicupapp.com</title>`, ""}<meta name="description" content="Código de Conduta da UpClinic. Conheça nossos valores e princípios."><link rel="canonical" href="https://clinicupapp.com/codigo-conduta"><!-- HEAD_svelte-uiqgiv_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(LegalPageLayout, "LegalPageLayout").$$render(
    $$result,
    {
      title: "Código de Conduta",
      toc,
      lastUpdated: "26/11/2025"
    },
    {},
    {
      default: () => {
        return `<div id="valores" data-svelte-h="svelte-m15u0g"><h2>1. Valores e Princípios</h2> <p>O Código de Conduta da UpClinic estabelece os valores fundamentais e os padrões de comportamento 
      esperados de todos os usuários da plataforma. Estes princípios guiam nossa comunidade e garantem 
      um ambiente respeitoso e profissional.</p> <h3>1.1. Respeito</h3> <p>Tratamos todos com dignidade e respeito, independentemente de sua posição, origem ou 
      características pessoais. Valorizamos a diversidade e promovemos um ambiente inclusivo.</p> <h3>1.2. Integridade</h3> <p>Agimos com honestidade, transparência e ética em todas as nossas interações. Mantemos nossos 
      compromissos e assumimos responsabilidade por nossas ações.</p> <h3>1.3. Profissionalismo</h3> <p>Mantemos altos padrões profissionais em todas as nossas atividades. Valorizamos a excelência, 
      a competência e o compromisso com a qualidade.</p> <h3>1.4. Confidencialidade</h3> <p>Respeitamos e protegemos a confidencialidade das informações dos pacientes e usuários. 
      Mantemos os mais altos padrões de privacidade e segurança de dados.</p></div> <div id="comportamento" data-svelte-h="svelte-r7at4e"><h2>2. Comportamento Esperado</h2> <h3>2.1. Uso Apropriado da Plataforma</h3> <p>Os usuários devem:</p> <ul><li>Usar a plataforma apenas para fins legítimos e profissionais</li> <li>Manter informações precisas e atualizadas</li> <li>Proteger credenciais de acesso e não compartilhar contas</li> <li>Reportar problemas de segurança ou uso indevido</li></ul> <h3>2.2. Comunicação Respeitosa</h3> <p>Em todas as comunicações, os usuários devem:</p> <ul><li>Usar linguagem profissional e respeitosa</li> <li>Evitar conteúdo ofensivo, discriminatório ou inadequado</li> <li>Respeitar opiniões e perspectivas diferentes</li> <li>Comunicar-se de forma clara e construtiva</li></ul> <h3>2.3. Proteção de Dados</h3> <p>Os usuários devem:</p> <ul><li>Proteger dados de pacientes e informações confidenciais</li> <li>Não compartilhar informações sem autorização apropriada</li> <li>Seguir todas as leis e regulamentos de proteção de dados</li> <li>Reportar violações de segurança imediatamente</li></ul> <h3>2.4. Comportamento Proibido</h3> <p>É estritamente proibido:</p> <ul><li>Usar a plataforma para atividades ilegais</li> <li>Violar direitos de propriedade intelectual</li> <li>Interferir no funcionamento do sistema</li> <li>Realizar engenharia reversa ou tentar acessar código-fonte</li> <li>Usar bots ou scripts automatizados sem autorização</li> <li>Compartilhar credenciais de acesso</li> <li>Realizar qualquer atividade que possa comprometer a segurança</li></ul></div> <div id="consequencias" data-svelte-h="svelte-1pq29oa"><h2>3. Consequências da Violação</h2> <p>Violações deste Código de Conduta podem resultar em ações disciplinares, incluindo mas não 
      limitado a:</p> <ul><li>Aviso formal</li> <li>Suspensão temporária da conta</li> <li>Encerramento permanente da conta</li> <li>Ações legais, quando aplicável</li></ul> <p>A severidade da ação será determinada com base na natureza e gravidade da violação, histórico 
      do usuário e outros fatores relevantes.</p> <h3>3.1. Processo de Denúncia</h3> <p>Se você testemunhar ou for vítima de comportamento que viole este Código de Conduta, 
      por favor, entre em contato conosco imediatamente através de:</p> <ul><li>Email: <a href="mailto:contato@clinicupapp.com">contato@clinicupapp.com</a></li> <li>WhatsApp: <a href="https://wa.me/5562996720296">(62) 99672-0296</a></li></ul> <p>Todas as denúncias serão tratadas com confidencialidade e investigadas adequadamente.</p></div> <div class="mt-12 p-6 bg-blue-50 rounded-lg" data-svelte-h="svelte-1b0j876"><h3 class="text-xl font-bold text-gray-900 mb-3">Compromisso com a Excelência</h3> <p class="text-gray-700">Este Código de Conduta reflete nosso compromisso em manter um ambiente profissional, respeitoso 
      e seguro para todos os usuários da plataforma UpClinic. Agradecemos sua cooperação em seguir 
      estes padrões.</p></div>`;
      }
    }
  )} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
