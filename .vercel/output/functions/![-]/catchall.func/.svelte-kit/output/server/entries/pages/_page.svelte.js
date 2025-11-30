import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../chunks/Navbar.js";
const css$4 = {
  code: ".hero-animate.svelte-9on473{opacity:1;transform:translateY(0);transition:opacity 0.8s ease-out, transform 0.8s ease-out}.hero-animate.svelte-9on473:not(.animate-fade-in){opacity:0;transform:translateY(20px)}",
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from 'svelte';\\r\\n  \\r\\n  onMount(() => {\\r\\n    // Animação suave de entrada\\r\\n    setTimeout(() => {\\r\\n      const observer = new IntersectionObserver((entries) => {\\r\\n        entries.forEach(entry => {\\r\\n          if (entry.isIntersecting) {\\r\\n            entry.target.classList.add('animate-fade-in');\\r\\n          }\\r\\n        });\\r\\n      }, { threshold: 0.1 });\\r\\n      \\r\\n      const elements = document.querySelectorAll('.hero-animate');\\r\\n      elements.forEach((el) => {\\r\\n        observer.observe(el);\\r\\n        // Fallback: mostrar após 500ms mesmo se observer não funcionar\\r\\n        setTimeout(() => {\\r\\n          if (!el.classList.contains('animate-fade-in')) {\\r\\n            el.classList.add('animate-fade-in');\\r\\n          }\\r\\n        }, 500);\\r\\n      });\\r\\n    }, 100);\\r\\n  });\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"inicio\\" class=\\"relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-white\\">\\r\\n  <!-- Background sutil e profissional -->\\r\\n  <div class=\\"absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white\\"></div>\\r\\n  \\r\\n  <!-- Padrão geométrico sutil -->\\r\\n  <div class=\\"absolute inset-0 opacity-[0.03]\\">\\r\\n    <div class=\\"absolute top-0 left-0 w-full h-full\\" style=\\"background-image: radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0); background-size: 40px 40px;\\"></div>\\r\\n  </div>\\r\\n  \\r\\n  <!-- Elementos decorativos sutis -->\\r\\n  <div class=\\"absolute inset-0 overflow-hidden pointer-events-none\\">\\r\\n    <div class=\\"absolute top-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40\\"></div>\\r\\n    <div class=\\"absolute bottom-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40\\"></div>\\r\\n  </div>\\r\\n  \\r\\n  <div class=\\"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10\\">\\r\\n    <div class=\\"max-w-7xl mx-auto\\">\\r\\n      <div class=\\"grid lg:grid-cols-2 gap-12 items-center\\">\\r\\n        \\r\\n        <!-- Conteúdo Principal -->\\r\\n        <div class=\\"hero-animate text-center lg:text-left\\">\\r\\n          <!-- Badge profissional -->\\r\\n          <div class=\\"inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8\\">\\r\\n            <svg class=\\"w-4 h-4 text-blue-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n              <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\\" />\\r\\n            </svg>\\r\\n            <span class=\\"text-sm font-semibold text-blue-700\\">Sistema Certificado e Seguro</span>\\r\\n          </div>\\r\\n          \\r\\n          <!-- Título Principal -->\\r\\n          <h1 class=\\"text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight\\">\\r\\n            O futuro da\\r\\n            <span class=\\"block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent\\">\\r\\n              gestão médica\\r\\n            </span>\\r\\n            é digital\\r\\n          </h1>\\r\\n          \\r\\n          <!-- Descrição -->\\r\\n          <p class=\\"text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0\\">\\r\\n            Plataforma completa com prontuário eletrônico, telemedicina, gestão financeira e IA médica integrada. \\r\\n            <span class=\\"font-semibold text-gray-900\\">Tudo em um só lugar.</span>\\r\\n          </p>\\r\\n          \\r\\n          <!-- CTAs -->\\r\\n          <div class=\\"flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12\\">\\r\\n            <a \\r\\n              href=\\"https://upclinic-aa025.web.app/signup\\" \\r\\n              class=\\"group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50\\"\\r\\n            >\\r\\n              <span>Começar Agora</span>\\r\\n              <svg class=\\"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M13 7l5 5m0 0l-5 5m5-5H6\\" />\\r\\n              </svg>\\r\\n            </a>\\r\\n            <a \\r\\n              href=\\"#funcionalidades\\" \\r\\n              class=\\"inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20\\"\\r\\n            >\\r\\n              Ver Demonstração\\r\\n            </a>\\r\\n          </div>\\r\\n          \\r\\n          <!-- Estatísticas Profissionais -->\\r\\n          <div class=\\"grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0\\">\\r\\n            <div class=\\"text-center lg:text-left\\">\\r\\n              <div class=\\"text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1\\">3.2K+</div>\\r\\n              <div class=\\"text-sm text-gray-600 font-medium\\">Clínicas Ativas</div>\\r\\n            </div>\\r\\n            <div class=\\"text-center lg:text-left\\">\\r\\n              <div class=\\"text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1\\">98.5%</div>\\r\\n              <div class=\\"text-sm text-gray-600 font-medium\\">Satisfação</div>\\r\\n            </div>\\r\\n            <div class=\\"text-center lg:text-left\\">\\r\\n              <div class=\\"text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1\\">24/7</div>\\r\\n              <div class=\\"text-sm text-gray-600 font-medium\\">Suporte</div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        \\r\\n        <!-- Visual/Dashboard Preview -->\\r\\n        <div class=\\"hero-animate relative hidden lg:block\\">\\r\\n          <div class=\\"relative\\">\\r\\n            <!-- Card principal com sombra elegante -->\\r\\n            <div class=\\"relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500\\">\\r\\n              <!-- Header do card -->\\r\\n              <div class=\\"bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4\\">\\r\\n                <div class=\\"flex items-center space-x-2\\">\\r\\n                  <div class=\\"w-3 h-3 rounded-full bg-white/30\\"></div>\\r\\n                  <div class=\\"w-3 h-3 rounded-full bg-white/30\\"></div>\\r\\n                  <div class=\\"w-3 h-3 rounded-full bg-white/30\\"></div>\\r\\n                </div>\\r\\n              </div>\\r\\n              \\r\\n              <!-- Conteúdo do dashboard preview -->\\r\\n              <div class=\\"p-8 bg-gray-50\\">\\r\\n                <div class=\\"space-y-4\\">\\r\\n                  <!-- Linha de gráfico -->\\r\\n                  <div class=\\"flex items-end space-x-2 h-32\\">\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg\\" style=\\"height: 60%\\"></div>\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg\\" style=\\"height: 80%\\"></div>\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg\\" style=\\"height: 100%\\"></div>\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg\\" style=\\"height: 70%\\"></div>\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg\\" style=\\"height: 90%\\"></div>\\r\\n                    <div class=\\"flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg\\" style=\\"height: 65%\\"></div>\\r\\n                  </div>\\r\\n                  \\r\\n                  <!-- Cards de métricas -->\\r\\n                  <div class=\\"grid grid-cols-3 gap-4\\">\\r\\n                    <div class=\\"bg-white rounded-lg p-4 shadow-sm border border-gray-100\\">\\r\\n                      <div class=\\"text-2xl font-bold text-blue-600 mb-1\\">1.2K</div>\\r\\n                      <div class=\\"text-xs text-gray-600\\">Consultas</div>\\r\\n                    </div>\\r\\n                    <div class=\\"bg-white rounded-lg p-4 shadow-sm border border-gray-100\\">\\r\\n                      <div class=\\"text-2xl font-bold text-indigo-600 mb-1\\">850</div>\\r\\n                      <div class=\\"text-xs text-gray-600\\">Pacientes</div>\\r\\n                    </div>\\r\\n                    <div class=\\"bg-white rounded-lg p-4 shadow-sm border border-gray-100\\">\\r\\n                      <div class=\\"text-2xl font-bold text-purple-600 mb-1\\">R$45K</div>\\r\\n                      <div class=\\"text-xs text-gray-600\\">Receita</div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n            \\r\\n            <!-- Elementos decorativos flutuantes -->\\r\\n            <div class=\\"absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl rotate-12 opacity-60 blur-xl\\"></div>\\r\\n            <div class=\\"absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-2xl -rotate-12 opacity-60 blur-xl\\"></div>\\r\\n          </div>\\r\\n        </div>\\r\\n        \\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .hero-animate {\\r\\n    opacity: 1;\\r\\n    transform: translateY(0);\\r\\n    transition: opacity 0.8s ease-out, transform 0.8s ease-out;\\r\\n  }\\r\\n  \\r\\n  .hero-animate:not(.animate-fade-in) {\\r\\n    opacity: 0;\\r\\n    transform: translateY(20px);\\r\\n  }\\r\\n  \\r\\n  .hero-animate.animate-fade-in {\\r\\n    opacity: 1;\\r\\n    transform: translateY(0);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsKE,2BAAc,CACZ,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,UAAU,CAAE,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,QACpD,CAEA,2BAAa,KAAK,gBAAgB,CAAE,CAClC,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC5B"}`
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="inicio" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-white" data-svelte-h="svelte-1luc38w"> <div class="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white"></div>  <div class="absolute inset-0 opacity-[0.03]"><div class="absolute top-0 left-0 w-full h-full" style="background-image: radial-gradient(circle at 2px 2px, #1e40af 1px, transparent 0); background-size: 40px 40px;"></div></div>  <div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute top-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div> <div class="absolute bottom-20 left-10 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40"></div></div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div class="max-w-7xl mx-auto"><div class="grid lg:grid-cols-2 gap-12 items-center"> <div class="hero-animate text-center lg:text-left svelte-9on473"> <div class="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8"><svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="text-sm font-semibold text-blue-700">Sistema Certificado e Seguro</span></div>  <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">O futuro da
            <span class="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">gestão médica</span>
            é digital</h1>  <p class="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">Plataforma completa com prontuário eletrônico, telemedicina, gestão financeira e IA médica integrada. 
            <span class="font-semibold text-gray-900">Tudo em um só lugar.</span></p>  <div class="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"><a href="https://upclinic-aa025.web.app/signup" class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"><span>Começar Agora</span> <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <a href="#funcionalidades" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20">Ver Demonstração</a></div>  <div class="grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0"><div class="text-center lg:text-left"><div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">3.2K+</div> <div class="text-sm text-gray-600 font-medium">Clínicas Ativas</div></div> <div class="text-center lg:text-left"><div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">98.5%</div> <div class="text-sm text-gray-600 font-medium">Satisfação</div></div> <div class="text-center lg:text-left"><div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">24/7</div> <div class="text-sm text-gray-600 font-medium">Suporte</div></div></div></div>  <div class="hero-animate relative hidden lg:block svelte-9on473"><div class="relative"> <div class="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500"> <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4"><div class="flex items-center space-x-2"><div class="w-3 h-3 rounded-full bg-white/30"></div> <div class="w-3 h-3 rounded-full bg-white/30"></div> <div class="w-3 h-3 rounded-full bg-white/30"></div></div></div>  <div class="p-8 bg-gray-50"><div class="space-y-4"> <div class="flex items-end space-x-2 h-32"><div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg" style="height: 60%"></div> <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg" style="height: 80%"></div> <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg" style="height: 100%"></div> <div class="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg" style="height: 70%"></div> <div class="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg" style="height: 90%"></div> <div class="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-lg" style="height: 65%"></div></div>  <div class="grid grid-cols-3 gap-4"><div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><div class="text-2xl font-bold text-blue-600 mb-1">1.2K</div> <div class="text-xs text-gray-600">Consultas</div></div> <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><div class="text-2xl font-bold text-indigo-600 mb-1">850</div> <div class="text-xs text-gray-600">Pacientes</div></div> <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100"><div class="text-2xl font-bold text-purple-600 mb-1">R$45K</div> <div class="text-xs text-gray-600">Receita</div></div></div></div></div></div>  <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl rotate-12 opacity-60 blur-xl"></div> <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-2xl -rotate-12 opacity-60 blur-xl"></div></div></div></div></div></div> </section>`;
});
const css$3 = {
  code: "@keyframes svelte-1b3k9y4-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-1b3k9y4-scale-in{from{transform:scale(0.95);opacity:0}to{transform:scale(1);opacity:1}}.animate-fade-in.svelte-1b3k9y4{animation:svelte-1b3k9y4-fade-in 0.3s ease-out}.animate-scale-in.svelte-1b3k9y4{animation:svelte-1b3k9y4-scale-in 0.3s ease-out}",
  map: `{"version":3,"file":"FeatureDemoModal.svelte","sources":["FeatureDemoModal.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from 'svelte';\\r\\n  \\r\\n  let isOpen = false;\\r\\n  \\r\\n  export function open() {\\r\\n    isOpen = true;\\r\\n    if (typeof document !== 'undefined') {\\r\\n      document.body.style.overflow = 'hidden';\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  export function close() {\\r\\n    isOpen = false;\\r\\n    if (typeof document !== 'undefined') {\\r\\n      document.body.style.overflow = '';\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  const features = [\\r\\n    {\\r\\n      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',\\r\\n      title: 'Prontuário Eletrônico',\\r\\n      description: 'Sistema completo de prontuários digitais com segurança LGPD',\\r\\n      fullDescription: 'Gerencie todo o histórico médico dos seus pacientes de forma digital e segura. O prontuário eletrônico do UpClinic permite registrar consultas, exames, prescrições e evoluções clínicas com total conformidade à LGPD. Acesso rápido, busca inteligente e backup automático garantem que todas as informações estejam sempre disponíveis quando você precisar.',\\r\\n      benefits: [\\r\\n        'Histórico médico completo e organizado',\\r\\n        'Conformidade total com LGPD e normas do CFM',\\r\\n        'Busca inteligente por sintomas, diagnósticos ou medicamentos',\\r\\n        'Anexos de exames e documentos',\\r\\n        'Assinatura digital de prescrições',\\r\\n        'Backup automático na nuvem'\\r\\n      ],\\r\\n      color: 'blue',\\r\\n      example: 'Exemplo: Um paciente retorna após 6 meses. Com um clique, você acessa todo o histórico, exames anteriores, medicações prescritas e evoluções, permitindo um atendimento mais eficiente e preciso.'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',\\r\\n      title: 'Agenda Inteligente',\\r\\n      description: 'Agendamento automático com lembretes por WhatsApp e email',\\r\\n      fullDescription: 'Transforme a gestão da sua agenda com inteligência artificial. O sistema sugere os melhores horários, envia lembretes automáticos por WhatsApp e email, e otimiza sua agenda para maximizar a produtividade. Reduza faltas em até 80% com lembretes inteligentes e confirmações automáticas.',\\r\\n      benefits: [\\r\\n        'Agendamento online 24/7 para pacientes',\\r\\n        'Lembretes automáticos por WhatsApp, SMS e email',\\r\\n        'Otimização automática de horários',\\r\\n        'Gestão de múltiplos profissionais e especialidades',\\r\\n        'Bloqueio de horários e feriados',\\r\\n        'Relatórios de ocupação e produtividade'\\r\\n      ],\\r\\n      color: 'purple',\\r\\n      example: 'Exemplo: Um paciente agenda uma consulta pelo site às 23h. O sistema confirma automaticamente, envia lembretes 48h e 24h antes, e 2h antes da consulta. Resultado: zero esquecimentos!'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z',\\r\\n      title: 'Telemedicina',\\r\\n      description: 'Consultas online integradas com prescrição digital',\\r\\n      fullDescription: 'Realize consultas remotas com qualidade profissional. Videoconferência HD, chat integrado, compartilhamento de tela para exames e prescrições digitais assinadas eletronicamente. Tudo integrado ao prontuário eletrônico para um atendimento completo e documentado.',\\r\\n      benefits: [\\r\\n        'Videoconferência HD com qualidade profissional',\\r\\n        'Chat em tempo real durante a consulta',\\r\\n        'Compartilhamento de tela para análise de exames',\\r\\n        'Gravação de consultas (com consentimento do paciente)',\\r\\n        'Prescrições digitais com assinatura eletrônica',\\r\\n        'Integração completa com prontuário eletrônico'\\r\\n      ],\\r\\n      color: 'indigo',\\r\\n      example: 'Exemplo: Paciente em outra cidade precisa de retorno. Você agenda uma teleconsulta, analisa exames compartilhando a tela, prescreve digitalmente e tudo fica registrado automaticamente no prontuário.'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',\\r\\n      title: 'Gestão Financeira',\\r\\n      description: 'Controle completo de receitas, despesas e pagamentos',\\r\\n      fullDescription: 'Tenha controle total das finanças da sua clínica. Receitas de consultas, despesas operacionais, controle de inadimplência, relatórios detalhados e integração com sistemas de pagamento. Tudo em um só lugar para você tomar decisões financeiras inteligentes.',\\r\\n      benefits: [\\r\\n        'Controle de receitas e despesas em tempo real',\\r\\n        'Relatórios financeiros detalhados e personalizados',\\r\\n        'Gestão de inadimplência e cobranças',\\r\\n        'Integração com gateways de pagamento',\\r\\n        'Análise de lucratividade por profissional',\\r\\n        'Previsão de fluxo de caixa'\\r\\n      ],\\r\\n      color: 'green',\\r\\n      example: 'Exemplo: No final do mês, você acessa um dashboard completo mostrando receitas por especialidade, despesas categorizadas, taxa de inadimplência e projeções para o próximo mês - tudo em gráficos visuais.'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',\\r\\n      title: 'IA Médica',\\r\\n      description: 'Assistente de IA para diagnósticos e análise de exames',\\r\\n      fullDescription: 'Conte com inteligência artificial como seu assistente médico. O sistema analisa sintomas, sugere diagnósticos baseados em evidências científicas, identifica padrões em exames e oferece suporte à decisão clínica. Sempre como ferramenta de apoio, nunca substituindo o julgamento médico.',\\r\\n      benefits: [\\r\\n        'Análise inteligente de sintomas e sinais',\\r\\n        'Sugestões de diagnósticos baseadas em evidências',\\r\\n        'Identificação de padrões em exames laboratoriais',\\r\\n        'Alertas para interações medicamentosas',\\r\\n        'Suporte à decisão clínica baseado em guidelines',\\r\\n        'Aprendizado contínuo com casos similares'\\r\\n      ],\\r\\n      color: 'pink',\\r\\n      example: 'Exemplo: Você digita os sintomas do paciente. A IA sugere possíveis diagnósticos com base em evidências, alerta sobre interações medicamentosas e mostra casos similares já tratados na sua clínica.'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',\\r\\n      title: 'Mobile & Cloud',\\r\\n      description: 'Acesso em qualquer lugar via web ou mobile',\\r\\n      fullDescription: 'Acesse seu sistema de qualquer lugar, a qualquer hora. Versão mobile otimizada, sincronização em tempo real entre dispositivos e backup automático na nuvem. Sua clínica sempre com você, no consultório, em casa ou em viagem.',\\r\\n      benefits: [\\r\\n        'Aplicativo mobile nativo para iOS e Android',\\r\\n        'Sincronização em tempo real entre dispositivos',\\r\\n        'Backup automático na nuvem',\\r\\n        'Acesso offline com sincronização automática',\\r\\n        'Notificações push no celular',\\r\\n        'Interface responsiva para tablets'\\r\\n      ],\\r\\n      color: 'cyan',\\r\\n      example: 'Exemplo: Você está em casa e precisa verificar um agendamento urgente. Abre o app no celular, acessa todas as informações, faz alterações e tudo sincroniza automaticamente com o sistema principal.'\\r\\n    }\\r\\n  ];\\r\\n  \\r\\n  let selectedFeature = 0;\\r\\n  \\r\\n  $: currentFeature = features[selectedFeature];\\r\\n  $: gradientClass = currentFeature?.color === 'blue' ? 'from-blue-500 to-blue-600' : \\r\\n    currentFeature?.color === 'purple' ? 'from-purple-500 to-purple-600' : \\r\\n    currentFeature?.color === 'indigo' ? 'from-indigo-500 to-indigo-600' : \\r\\n    currentFeature?.color === 'green' ? 'from-green-500 to-green-600' : \\r\\n    currentFeature?.color === 'pink' ? 'from-pink-500 to-pink-600' : \\r\\n    'from-cyan-500 to-cyan-600';\\r\\n  $: iconColorClass = currentFeature?.color === 'blue' ? 'text-blue-600' : \\r\\n    currentFeature?.color === 'purple' ? 'text-purple-600' : \\r\\n    currentFeature?.color === 'indigo' ? 'text-indigo-600' : \\r\\n    currentFeature?.color === 'green' ? 'text-green-600' : \\r\\n    currentFeature?.color === 'pink' ? 'text-pink-600' : \\r\\n    'text-cyan-600';\\r\\n  \\r\\n  function selectFeature(index) {\\r\\n    selectedFeature = index;\\r\\n  }\\r\\n  \\r\\n  function nextFeature() {\\r\\n    selectedFeature = (selectedFeature + 1) % features.length;\\r\\n  }\\r\\n  \\r\\n  function prevFeature() {\\r\\n    selectedFeature = (selectedFeature - 1 + features.length) % features.length;\\r\\n  }\\r\\n  \\r\\n  function handleKeydown(e) {\\r\\n    if (!isOpen) return;\\r\\n    if (e.key === 'Escape') close();\\r\\n    if (e.key === 'ArrowRight') nextFeature();\\r\\n    if (e.key === 'ArrowLeft') prevFeature();\\r\\n  }\\r\\n  \\r\\n  onMount(() => {\\r\\n    return () => {\\r\\n      if (typeof document !== 'undefined') {\\r\\n        document.body.style.overflow = '';\\r\\n      }\\r\\n    };\\r\\n  });\\r\\n<\/script>\\r\\n\\r\\n<svelte:window on:keydown={handleKeydown} />\\r\\n\\r\\n{#if isOpen}\\r\\n  <div \\r\\n    class=\\"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto\\"\\r\\n    role=\\"dialog\\"\\r\\n    aria-modal=\\"true\\"\\r\\n    aria-label=\\"Demonstração de Funcionalidades\\"\\r\\n    on:click={close}\\r\\n    on:keydown={(e) => e.key === 'Escape' && close()}\\r\\n  >\\r\\n    <div \\r\\n      class=\\"max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 animate-scale-in my-8\\"\\r\\n      on:click|stopPropagation\\r\\n      role=\\"document\\"\\r\\n    >\\r\\n      {#if currentFeature}\\r\\n        <!-- Header -->\\r\\n        <div class=\\"bg-gradient-to-br {gradientClass} p-8 text-white relative overflow-hidden\\">\\r\\n        <div class=\\"absolute inset-0 opacity-10\\">\\r\\n          <div class=\\"absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32\\"></div>\\r\\n          <div class=\\"absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24\\"></div>\\r\\n        </div>\\r\\n        \\r\\n        <div class=\\"relative z-10\\">\\r\\n          <div class=\\"flex items-start justify-between mb-6\\">\\r\\n            <div>\\r\\n              <h2 class=\\"text-4xl font-bold mb-2\\">Conheça o UpClinic</h2>\\r\\n              <p class=\\"text-white/90 text-lg\\">Sistema completo de gestão médica</p>\\r\\n            </div>\\r\\n            <button \\r\\n              type=\\"button\\"\\r\\n              class=\\"w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors\\"\\r\\n              on:click={close}\\r\\n              aria-label=\\"Fechar\\"\\r\\n            >\\r\\n              <svg class=\\"w-6 h-6\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 18L18 6M6 6l12 12\\" />\\r\\n              </svg>\\r\\n            </button>\\r\\n          </div>\\r\\n          \\r\\n          <!-- Feature Selector -->\\r\\n          <div class=\\"flex gap-2 flex-wrap\\">\\r\\n            {#each features as f, index}\\r\\n              <button\\r\\n                type=\\"button\\"\\r\\n                class=\\"px-4 py-2 rounded-lg text-sm font-medium transition-all {index === selectedFeature ? 'bg-white text-gray-900' : 'bg-white/20 text-white hover:bg-white/30'}\\"\\r\\n                on:click={() => selectFeature(index)}\\r\\n              >\\r\\n                {f.title}\\r\\n              </button>\\r\\n            {/each}\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n      \\r\\n      <!-- Content -->\\r\\n      <div class=\\"p-8\\">\\r\\n        <div class=\\"grid grid-cols-1 lg:grid-cols-3 gap-8\\">\\r\\n          <!-- Main Content -->\\r\\n          <div class=\\"lg:col-span-2\\">\\r\\n            <div class=\\"flex items-center gap-4 mb-6\\">\\r\\n              <div class=\\"w-16 h-16 bg-gradient-to-br {gradientClass} rounded-2xl flex items-center justify-center\\">\\r\\n                <svg class=\\"w-8 h-8 text-white\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d={currentFeature.icon} />\\r\\n                </svg>\\r\\n              </div>\\r\\n              <div>\\r\\n                <h3 class=\\"text-3xl font-bold text-gray-900 mb-2\\">{currentFeature.title}</h3>\\r\\n                <p class=\\"text-gray-600 text-lg\\">{currentFeature.description}</p>\\r\\n              </div>\\r\\n            </div>\\r\\n            \\r\\n            <div class=\\"prose max-w-none mb-6\\">\\r\\n              <p class=\\"text-gray-700 text-lg leading-relaxed mb-6\\">\\r\\n                {currentFeature.fullDescription}\\r\\n              </p>\\r\\n              \\r\\n              <div class=\\"bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6\\">\\r\\n                <p class=\\"text-gray-800 font-medium mb-2\\">💡 Exemplo Prático:</p>\\r\\n                <p class=\\"text-gray-700\\">{currentFeature.example}</p>\\r\\n              </div>\\r\\n            </div>\\r\\n            \\r\\n            <div>\\r\\n              <h4 class=\\"text-xl font-bold text-gray-900 mb-4\\">Principais Benefícios:</h4>\\r\\n              <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-3\\">\\r\\n                {#each currentFeature.benefits as benefit}\\r\\n                  <div class=\\"flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors\\">\\r\\n                    <svg class=\\"w-6 h-6 {iconColorClass} flex-shrink-0 mt-0.5\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                      <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M5 13l4 4L19 7\\" />\\r\\n                    </svg>\\r\\n                    <span class=\\"text-gray-700\\">{benefit}</span>\\r\\n                  </div>\\r\\n                {/each}\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n          \\r\\n          <!-- Sidebar -->\\r\\n          <div class=\\"lg:col-span-1\\">\\r\\n            <div class=\\"bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sticky top-8\\">\\r\\n              <h4 class=\\"text-xl font-bold text-gray-900 mb-4\\">Quer ver na prática?</h4>\\r\\n              <p class=\\"text-gray-600 mb-6\\">\\r\\n                Agende uma demonstração personalizada e veja como o UpClinic pode transformar a gestão da sua clínica.\\r\\n              </p>\\r\\n              \\r\\n              <div class=\\"space-y-3\\">\\r\\n                <a \\r\\n                  href=\\"https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20UpClinic\\"\\r\\n                  target=\\"_blank\\"\\r\\n                  rel=\\"noopener noreferrer\\"\\r\\n                  class=\\"block w-full btn bg-green-500 hover:bg-green-600 text-white text-center\\"\\r\\n                >\\r\\n                  📱 WhatsApp\\r\\n                </a>\\r\\n                <a \\r\\n                  href=\\"/contato\\"\\r\\n                  class=\\"block w-full btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 text-center\\"\\r\\n                >\\r\\n                  📧 Email\\r\\n                </a>\\r\\n                <a \\r\\n                  href=\\"https://upclinic-aa025.web.app/signup\\"\\r\\n                  class=\\"block w-full btn bg-blue-600 hover:bg-blue-700 text-white text-center\\"\\r\\n                >\\r\\n                  🚀 Teste Grátis\\r\\n                </a>\\r\\n              </div>\\r\\n              \\r\\n              <div class=\\"mt-6 pt-6 border-t border-gray-200\\">\\r\\n                <p class=\\"text-sm text-gray-600 mb-2\\">Navegue pelas funcionalidades:</p>\\r\\n                <div class=\\"flex items-center justify-between\\">\\r\\n                  <button\\r\\n                    type=\\"button\\"\\r\\n                    class=\\"p-2 rounded-lg hover:bg-gray-200 transition-colors\\"\\r\\n                    on:click={prevFeature}\\r\\n                    aria-label=\\"Funcionalidade anterior\\"\\r\\n                  >\\r\\n                    <svg class=\\"w-5 h-5 text-gray-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                      <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 19l-7-7 7-7\\" />\\r\\n                    </svg>\\r\\n                  </button>\\r\\n                  <span class=\\"text-sm text-gray-600\\">\\r\\n                    {selectedFeature + 1} de {features.length}\\r\\n                  </span>\\r\\n                  <button\\r\\n                    type=\\"button\\"\\r\\n                    class=\\"p-2 rounded-lg hover:bg-gray-200 transition-colors\\"\\r\\n                    on:click={nextFeature}\\r\\n                    aria-label=\\"Próxima funcionalidade\\"\\r\\n                  >\\r\\n                    <svg class=\\"w-5 h-5 text-gray-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                      <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 5l7 7-7 7\\" />\\r\\n                    </svg>\\r\\n                  </button>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n      {/if}\\r\\n    </div>\\r\\n  </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  @keyframes fade-in {\\r\\n    from { opacity: 0; }\\r\\n    to { opacity: 1; }\\r\\n  }\\r\\n  \\r\\n  @keyframes scale-in {\\r\\n    from {\\r\\n      transform: scale(0.95);\\r\\n      opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n      transform: scale(1);\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  .animate-fade-in {\\r\\n    animation: fade-in 0.3s ease-out;\\r\\n  }\\r\\n  \\r\\n  .animate-scale-in {\\r\\n    animation: scale-in 0.3s ease-out;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"AA2UE,WAAW,sBAAQ,CACjB,IAAK,CAAE,OAAO,CAAE,CAAG,CACnB,EAAG,CAAE,OAAO,CAAE,CAAG,CACnB,CAEA,WAAW,uBAAS,CAClB,IAAK,CACH,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,OAAO,CAAE,CACX,CACA,EAAG,CACD,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACX,CACF,CAEA,+BAAiB,CACf,SAAS,CAAE,sBAAO,CAAC,IAAI,CAAC,QAC1B,CAEA,gCAAkB,CAChB,SAAS,CAAE,uBAAQ,CAAC,IAAI,CAAC,QAC3B"}`
};
const FeatureDemoModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentFeature;
  let gradientClass;
  let iconColorClass;
  let isOpen = false;
  function open() {
    isOpen = true;
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }
  function close() {
    isOpen = false;
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }
  const features = [
    {
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
      title: "Prontuário Eletrônico",
      description: "Sistema completo de prontuários digitais com segurança LGPD",
      fullDescription: "Gerencie todo o histórico médico dos seus pacientes de forma digital e segura. O prontuário eletrônico do UpClinic permite registrar consultas, exames, prescrições e evoluções clínicas com total conformidade à LGPD. Acesso rápido, busca inteligente e backup automático garantem que todas as informações estejam sempre disponíveis quando você precisar.",
      benefits: [
        "Histórico médico completo e organizado",
        "Conformidade total com LGPD e normas do CFM",
        "Busca inteligente por sintomas, diagnósticos ou medicamentos",
        "Anexos de exames e documentos",
        "Assinatura digital de prescrições",
        "Backup automático na nuvem"
      ],
      color: "blue",
      example: "Exemplo: Um paciente retorna após 6 meses. Com um clique, você acessa todo o histórico, exames anteriores, medicações prescritas e evoluções, permitindo um atendimento mais eficiente e preciso."
    },
    {
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
      title: "Agenda Inteligente",
      description: "Agendamento automático com lembretes por WhatsApp e email",
      fullDescription: "Transforme a gestão da sua agenda com inteligência artificial. O sistema sugere os melhores horários, envia lembretes automáticos por WhatsApp e email, e otimiza sua agenda para maximizar a produtividade. Reduza faltas em até 80% com lembretes inteligentes e confirmações automáticas.",
      benefits: [
        "Agendamento online 24/7 para pacientes",
        "Lembretes automáticos por WhatsApp, SMS e email",
        "Otimização automática de horários",
        "Gestão de múltiplos profissionais e especialidades",
        "Bloqueio de horários e feriados",
        "Relatórios de ocupação e produtividade"
      ],
      color: "purple",
      example: "Exemplo: Um paciente agenda uma consulta pelo site às 23h. O sistema confirma automaticamente, envia lembretes 48h e 24h antes, e 2h antes da consulta. Resultado: zero esquecimentos!"
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z",
      title: "Telemedicina",
      description: "Consultas online integradas com prescrição digital",
      fullDescription: "Realize consultas remotas com qualidade profissional. Videoconferência HD, chat integrado, compartilhamento de tela para exames e prescrições digitais assinadas eletronicamente. Tudo integrado ao prontuário eletrônico para um atendimento completo e documentado.",
      benefits: [
        "Videoconferência HD com qualidade profissional",
        "Chat em tempo real durante a consulta",
        "Compartilhamento de tela para análise de exames",
        "Gravação de consultas (com consentimento do paciente)",
        "Prescrições digitais com assinatura eletrônica",
        "Integração completa com prontuário eletrônico"
      ],
      color: "indigo",
      example: "Exemplo: Paciente em outra cidade precisa de retorno. Você agenda uma teleconsulta, analisa exames compartilhando a tela, prescreve digitalmente e tudo fica registrado automaticamente no prontuário."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
      title: "Gestão Financeira",
      description: "Controle completo de receitas, despesas e pagamentos",
      fullDescription: "Tenha controle total das finanças da sua clínica. Receitas de consultas, despesas operacionais, controle de inadimplência, relatórios detalhados e integração com sistemas de pagamento. Tudo em um só lugar para você tomar decisões financeiras inteligentes.",
      benefits: [
        "Controle de receitas e despesas em tempo real",
        "Relatórios financeiros detalhados e personalizados",
        "Gestão de inadimplência e cobranças",
        "Integração com gateways de pagamento",
        "Análise de lucratividade por profissional",
        "Previsão de fluxo de caixa"
      ],
      color: "green",
      example: "Exemplo: No final do mês, você acessa um dashboard completo mostrando receitas por especialidade, despesas categorizadas, taxa de inadimplência e projeções para o próximo mês - tudo em gráficos visuais."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "IA Médica",
      description: "Assistente de IA para diagnósticos e análise de exames",
      fullDescription: "Conte com inteligência artificial como seu assistente médico. O sistema analisa sintomas, sugere diagnósticos baseados em evidências científicas, identifica padrões em exames e oferece suporte à decisão clínica. Sempre como ferramenta de apoio, nunca substituindo o julgamento médico.",
      benefits: [
        "Análise inteligente de sintomas e sinais",
        "Sugestões de diagnósticos baseadas em evidências",
        "Identificação de padrões em exames laboratoriais",
        "Alertas para interações medicamentosas",
        "Suporte à decisão clínica baseado em guidelines",
        "Aprendizado contínuo com casos similares"
      ],
      color: "pink",
      example: "Exemplo: Você digita os sintomas do paciente. A IA sugere possíveis diagnósticos com base em evidências, alerta sobre interações medicamentosas e mostra casos similares já tratados na sua clínica."
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
      title: "Mobile & Cloud",
      description: "Acesso em qualquer lugar via web ou mobile",
      fullDescription: "Acesse seu sistema de qualquer lugar, a qualquer hora. Versão mobile otimizada, sincronização em tempo real entre dispositivos e backup automático na nuvem. Sua clínica sempre com você, no consultório, em casa ou em viagem.",
      benefits: [
        "Aplicativo mobile nativo para iOS e Android",
        "Sincronização em tempo real entre dispositivos",
        "Backup automático na nuvem",
        "Acesso offline com sincronização automática",
        "Notificações push no celular",
        "Interface responsiva para tablets"
      ],
      color: "cyan",
      example: "Exemplo: Você está em casa e precisa verificar um agendamento urgente. Abre o app no celular, acessa todas as informações, faz alterações e tudo sincroniza automaticamente com o sistema principal."
    }
  ];
  let selectedFeature = 0;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
  $$result.css.add(css$3);
  currentFeature = features[selectedFeature];
  gradientClass = currentFeature?.color === "blue" ? "from-blue-500 to-blue-600" : currentFeature?.color === "purple" ? "from-purple-500 to-purple-600" : currentFeature?.color === "indigo" ? "from-indigo-500 to-indigo-600" : currentFeature?.color === "green" ? "from-green-500 to-green-600" : currentFeature?.color === "pink" ? "from-pink-500 to-pink-600" : "from-cyan-500 to-cyan-600";
  iconColorClass = currentFeature?.color === "blue" ? "text-blue-600" : currentFeature?.color === "purple" ? "text-purple-600" : currentFeature?.color === "indigo" ? "text-indigo-600" : currentFeature?.color === "green" ? "text-green-600" : currentFeature?.color === "pink" ? "text-pink-600" : "text-cyan-600";
  return ` ${isOpen ? `<div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto svelte-1b3k9y4" role="dialog" aria-modal="true" aria-label="Demonstração de Funcionalidades"><div class="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 animate-scale-in my-8 svelte-1b3k9y4" role="document">${currentFeature ? ` <div class="${"bg-gradient-to-br " + escape(gradientClass, true) + " p-8 text-white relative overflow-hidden svelte-1b3k9y4"}"><div class="absolute inset-0 opacity-10" data-svelte-h="svelte-15nd5ru"><div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div> <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full -ml-24 -mb-24"></div></div> <div class="relative z-10"><div class="flex items-start justify-between mb-6"><div data-svelte-h="svelte-13b0p5s"><h2 class="text-4xl font-bold mb-2">Conheça o UpClinic</h2> <p class="text-white/90 text-lg">Sistema completo de gestão médica</p></div> <button type="button" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors" aria-label="Fechar" data-svelte-h="svelte-132irck"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>  <div class="flex gap-2 flex-wrap">${each(features, (f, index) => {
    return `<button type="button" class="${"px-4 py-2 rounded-lg text-sm font-medium transition-all " + escape(
      index === selectedFeature ? "bg-white text-gray-900" : "bg-white/20 text-white hover:bg-white/30",
      true
    )}">${escape(f.title)} </button>`;
  })}</div></div></div>  <div class="p-8"><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2"><div class="flex items-center gap-4 mb-6"><div class="${"w-16 h-16 bg-gradient-to-br " + escape(gradientClass, true) + " rounded-2xl flex items-center justify-center svelte-1b3k9y4"}"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${add_attribute("d", currentFeature.icon, 0)}></path></svg></div> <div><h3 class="text-3xl font-bold text-gray-900 mb-2">${escape(currentFeature.title)}</h3> <p class="text-gray-600 text-lg">${escape(currentFeature.description)}</p></div></div> <div class="prose max-w-none mb-6"><p class="text-gray-700 text-lg leading-relaxed mb-6">${escape(currentFeature.fullDescription)}</p> <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6"><p class="text-gray-800 font-medium mb-2" data-svelte-h="svelte-16ok1x4">💡 Exemplo Prático:</p> <p class="text-gray-700">${escape(currentFeature.example)}</p></div></div> <div><h4 class="text-xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-cegkya">Principais Benefícios:</h4> <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${each(currentFeature.benefits, (benefit) => {
    return `<div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"><svg class="${"w-6 h-6 " + escape(iconColorClass, true) + " flex-shrink-0 mt-0.5 svelte-1b3k9y4"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span class="text-gray-700">${escape(benefit)}</span> </div>`;
  })}</div></div></div>  <div class="lg:col-span-1"><div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sticky top-8"><h4 class="text-xl font-bold text-gray-900 mb-4" data-svelte-h="svelte-oucmpt">Quer ver na prática?</h4> <p class="text-gray-600 mb-6" data-svelte-h="svelte-1pqnf1e">Agende uma demonstração personalizada e veja como o UpClinic pode transformar a gestão da sua clínica.</p> <div class="space-y-3" data-svelte-h="svelte-1cofjc9"><a href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20agendar%20uma%20demonstração%20do%20UpClinic" target="_blank" rel="noopener noreferrer" class="block w-full btn bg-green-500 hover:bg-green-600 text-white text-center">📱 WhatsApp</a> <a href="/contato" class="block w-full btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 text-center">📧 Email</a> <a href="https://upclinic-aa025.web.app/signup" class="block w-full btn bg-blue-600 hover:bg-blue-700 text-white text-center">🚀 Teste Grátis</a></div> <div class="mt-6 pt-6 border-t border-gray-200"><p class="text-sm text-gray-600 mb-2" data-svelte-h="svelte-1qqbbgq">Navegue pelas funcionalidades:</p> <div class="flex items-center justify-between"><button type="button" class="p-2 rounded-lg hover:bg-gray-200 transition-colors" aria-label="Funcionalidade anterior" data-svelte-h="svelte-gt7jo"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <span class="text-sm text-gray-600">${escape(selectedFeature + 1)} de ${escape(features.length)}</span> <button type="button" class="p-2 rounded-lg hover:bg-gray-200 transition-colors" aria-label="Próxima funcionalidade" data-svelte-h="svelte-81525c"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div></div></div></div></div>` : ``}</div></div>` : ``}`;
});
const css$2 = {
  code: "@keyframes svelte-vdek8r-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-vdek8r-scale-in{from{transform:scale(0.96);opacity:0}to{transform:scale(1);opacity:1}}.animate-fade-in.svelte-vdek8r{animation:svelte-vdek8r-fade-in 0.2s ease-out}.animate-scale-in.svelte-vdek8r{animation:svelte-vdek8r-scale-in 0.2s ease-out}",
  map: `{"version":3,"file":"FeatureDetailModal.svelte","sources":["FeatureDetailModal.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from 'svelte';\\r\\n  \\r\\n  let isOpen = false;\\r\\n  let feature = null;\\r\\n  \\r\\n  export function open(selectedFeature) {\\r\\n    feature = selectedFeature;\\r\\n    isOpen = true;\\r\\n    if (typeof document !== 'undefined') {\\r\\n      document.body.style.overflow = 'hidden';\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  export function close() {\\r\\n    isOpen = false;\\r\\n    feature = null;\\r\\n    if (typeof document !== 'undefined') {\\r\\n      document.body.style.overflow = '';\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  function handleKeydown(e) {\\r\\n    if (!isOpen) return;\\r\\n    if (e.key === 'Escape') close();\\r\\n  }\\r\\n  \\r\\n  onMount(() => {\\r\\n    return () => {\\r\\n      if (typeof document !== 'undefined') {\\r\\n        document.body.style.overflow = '';\\r\\n      }\\r\\n    };\\r\\n  });\\r\\n  \\r\\n  function getColorClasses(color) {\\r\\n    const classes = {\\r\\n      blue: {\\r\\n        accent: 'text-blue-600',\\r\\n        bg: 'bg-blue-50',\\r\\n        border: 'border-blue-200',\\r\\n        button: 'bg-blue-600 hover:bg-blue-700',\\r\\n        iconBg: 'bg-blue-100'\\r\\n      },\\r\\n      purple: {\\r\\n        accent: 'text-purple-600',\\r\\n        bg: 'bg-purple-50',\\r\\n        border: 'border-purple-200',\\r\\n        button: 'bg-purple-600 hover:bg-purple-700',\\r\\n        iconBg: 'bg-purple-100'\\r\\n      },\\r\\n      indigo: {\\r\\n        accent: 'text-indigo-600',\\r\\n        bg: 'bg-indigo-50',\\r\\n        border: 'border-indigo-200',\\r\\n        button: 'bg-indigo-600 hover:bg-indigo-700',\\r\\n        iconBg: 'bg-indigo-100'\\r\\n      },\\r\\n      green: {\\r\\n        accent: 'text-green-600',\\r\\n        bg: 'bg-green-50',\\r\\n        border: 'border-green-200',\\r\\n        button: 'bg-green-600 hover:bg-green-700',\\r\\n        iconBg: 'bg-green-100'\\r\\n      },\\r\\n      pink: {\\r\\n        accent: 'text-pink-600',\\r\\n        bg: 'bg-pink-50',\\r\\n        border: 'border-pink-200',\\r\\n        button: 'bg-pink-600 hover:bg-pink-700',\\r\\n        iconBg: 'bg-pink-100'\\r\\n      },\\r\\n      cyan: {\\r\\n        accent: 'text-cyan-600',\\r\\n        bg: 'bg-cyan-50',\\r\\n        border: 'border-cyan-200',\\r\\n        button: 'bg-cyan-600 hover:bg-cyan-700',\\r\\n        iconBg: 'bg-cyan-100'\\r\\n      },\\r\\n      red: {\\r\\n        accent: 'text-red-600',\\r\\n        bg: 'bg-red-50',\\r\\n        border: 'border-red-200',\\r\\n        button: 'bg-red-600 hover:bg-red-700',\\r\\n        iconBg: 'bg-red-100'\\r\\n      },\\r\\n      orange: {\\r\\n        accent: 'text-orange-600',\\r\\n        bg: 'bg-orange-50',\\r\\n        border: 'border-orange-200',\\r\\n        button: 'bg-orange-600 hover:bg-orange-700',\\r\\n        iconBg: 'bg-orange-100'\\r\\n      },\\r\\n      yellow: {\\r\\n        accent: 'text-yellow-600',\\r\\n        bg: 'bg-yellow-50',\\r\\n        border: 'border-yellow-200',\\r\\n        button: 'bg-yellow-600 hover:bg-yellow-700',\\r\\n        iconBg: 'bg-yellow-100'\\r\\n      },\\r\\n      teal: {\\r\\n        accent: 'text-teal-600',\\r\\n        bg: 'bg-teal-50',\\r\\n        border: 'border-teal-200',\\r\\n        button: 'bg-teal-600 hover:bg-teal-700',\\r\\n        iconBg: 'bg-teal-100'\\r\\n      }\\r\\n    };\\r\\n    return classes[color] || classes.blue;\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<svelte:window on:keydown={handleKeydown} />\\r\\n\\r\\n{#if isOpen && feature}\\r\\n  {@const colors = getColorClasses(feature.color)}\\r\\n  <div \\r\\n    class=\\"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in\\"\\r\\n    role=\\"dialog\\"\\r\\n    aria-modal=\\"true\\"\\r\\n    aria-label=\\"Detalhes: {feature.title}\\"\\r\\n    on:click={close}\\r\\n    on:keydown={(e) => e.key === 'Escape' && close()}\\r\\n  >\\r\\n    <div \\r\\n      class=\\"max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transform scale-95 animate-scale-in max-h-[90vh] flex flex-col\\"\\r\\n      on:click|stopPropagation\\r\\n      role=\\"document\\"\\r\\n    >\\r\\n      <!-- Header Minimalista -->\\r\\n      <div class=\\"px-8 pt-8 pb-6 border-b border-gray-100\\">\\r\\n        <div class=\\"flex items-start justify-between gap-4\\">\\r\\n          <div class=\\"flex items-start gap-4 flex-1\\">\\r\\n            <div class=\\"w-14 h-14 {colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0\\">\\r\\n              <svg class=\\"w-7 h-7 {colors.accent}\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d={feature.icon} />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <div class=\\"flex-1 min-w-0\\">\\r\\n              <h2 class=\\"text-2xl font-bold text-gray-900 mb-1.5\\">{feature.title}</h2>\\r\\n              <p class=\\"text-gray-600 text-sm leading-relaxed\\">{feature.description}</p>\\r\\n            </div>\\r\\n          </div>\\r\\n          <button \\r\\n            type=\\"button\\"\\r\\n            class=\\"w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0\\"\\r\\n            on:click={close}\\r\\n            aria-label=\\"Fechar\\"\\r\\n          >\\r\\n            <svg class=\\"w-5 h-5\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n              <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M6 18L18 6M6 6l12 12\\" />\\r\\n            </svg>\\r\\n          </button>\\r\\n        </div>\\r\\n      </div>\\r\\n      \\r\\n      <!-- Content Scrollable -->\\r\\n      <div class=\\"flex-1 overflow-y-auto px-8 py-6\\">\\r\\n        {#if feature.fullDescription}\\r\\n          <div class=\\"mb-8\\">\\r\\n            <p class=\\"text-gray-700 leading-relaxed text-[15px]\\">{feature.fullDescription}</p>\\r\\n          </div>\\r\\n        {/if}\\r\\n        \\r\\n        {#if feature.benefits && feature.benefits.length > 0}\\r\\n          <div class=\\"mb-8\\">\\r\\n            <h3 class=\\"text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4\\">Principais Benefícios</h3>\\r\\n            <div class=\\"space-y-2.5\\">\\r\\n              {#each feature.benefits as benefit}\\r\\n                <div class=\\"flex items-start gap-3\\">\\r\\n                  <div class=\\"w-5 h-5 {colors.iconBg} rounded flex items-center justify-center flex-shrink-0 mt-0.5\\">\\r\\n                    <svg class=\\"w-3 h-3 {colors.accent}\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                      <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2.5\\" d=\\"M5 13l4 4L19 7\\" />\\r\\n                    </svg>\\r\\n                  </div>\\r\\n                  <p class=\\"text-gray-700 text-sm leading-relaxed flex-1\\">{benefit}</p>\\r\\n                </div>\\r\\n              {/each}\\r\\n            </div>\\r\\n          </div>\\r\\n        {/if}\\r\\n        \\r\\n        {#if feature.features && feature.features.length > 0}\\r\\n          <div class=\\"mb-8\\">\\r\\n            <h3 class=\\"text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4\\">Funcionalidades Incluídas</h3>\\r\\n            <div class=\\"grid grid-cols-1 sm:grid-cols-2 gap-2.5\\">\\r\\n              {#each feature.features as func}\\r\\n                <div class=\\"flex items-center gap-2.5 text-sm text-gray-600\\">\\r\\n                  <div class=\\"w-1.5 h-1.5 {colors.accent} rounded-full flex-shrink-0\\"></div>\\r\\n                  <span>{func}</span>\\r\\n                </div>\\r\\n              {/each}\\r\\n            </div>\\r\\n          </div>\\r\\n        {/if}\\r\\n        \\r\\n        {#if feature.example}\\r\\n          <div class=\\"mb-6 p-5 {colors.bg} rounded-xl border {colors.border}\\">\\r\\n            <div class=\\"flex items-start gap-3\\">\\r\\n              <div class=\\"w-8 h-8 {colors.iconBg} rounded-lg flex items-center justify-center flex-shrink-0\\">\\r\\n                <svg class=\\"w-4 h-4 {colors.accent}\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                  <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z\\" />\\r\\n                </svg>\\r\\n              </div>\\r\\n              <div class=\\"flex-1\\">\\r\\n                <h4 class=\\"text-sm font-semibold text-gray-900 mb-1.5\\">Exemplo Prático</h4>\\r\\n                <p class=\\"text-gray-700 text-sm leading-relaxed\\">{feature.example}</p>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n        {/if}\\r\\n      </div>\\r\\n      \\r\\n      <!-- Footer com CTAs -->\\r\\n      <div class=\\"px-8 py-5 border-t border-gray-100 bg-gray-50\\">\\r\\n        <div class=\\"flex flex-col sm:flex-row gap-3\\">\\r\\n          <a \\r\\n            href=\\"https://upclinic-aa025.web.app/signup\\"\\r\\n            class=\\"flex-1 {colors.button} text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all\\"\\r\\n          >\\r\\n            Experimentar Agora\\r\\n          </a>\\r\\n          <a \\r\\n            href=\\"/contato\\"\\r\\n            class=\\"flex-1 bg-white border-2 border-gray-300 text-gray-700 text-center px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-all\\"\\r\\n          >\\r\\n            Falar com Especialista\\r\\n          </a>\\r\\n          <a \\r\\n            href=\\"https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20{feature.title}\\"\\r\\n            target=\\"_blank\\"\\r\\n            rel=\\"noopener noreferrer\\"\\r\\n            class=\\"flex-1 bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all\\"\\r\\n          >\\r\\n            WhatsApp\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  @keyframes fade-in {\\r\\n    from { opacity: 0; }\\r\\n    to { opacity: 1; }\\r\\n  }\\r\\n  \\r\\n  @keyframes scale-in {\\r\\n    from {\\r\\n      transform: scale(0.96);\\r\\n      opacity: 0;\\r\\n    }\\r\\n    to {\\r\\n      transform: scale(1);\\r\\n      opacity: 1;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  .animate-fade-in {\\r\\n    animation: fade-in 0.2s ease-out;\\r\\n  }\\r\\n  \\r\\n  .animate-scale-in {\\r\\n    animation: scale-in 0.2s ease-out;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmPE,WAAW,qBAAQ,CACjB,IAAK,CAAE,OAAO,CAAE,CAAG,CACnB,EAAG,CAAE,OAAO,CAAE,CAAG,CACnB,CAEA,WAAW,sBAAS,CAClB,IAAK,CACH,SAAS,CAAE,MAAM,IAAI,CAAC,CACtB,OAAO,CAAE,CACX,CACA,EAAG,CACD,SAAS,CAAE,MAAM,CAAC,CAAC,CACnB,OAAO,CAAE,CACX,CACF,CAEA,8BAAiB,CACf,SAAS,CAAE,qBAAO,CAAC,IAAI,CAAC,QAC1B,CAEA,+BAAkB,CAChB,SAAS,CAAE,sBAAQ,CAAC,IAAI,CAAC,QAC3B"}`
};
function getColorClasses(color) {
  const classes = {
    blue: {
      accent: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      button: "bg-blue-600 hover:bg-blue-700",
      iconBg: "bg-blue-100"
    },
    purple: {
      accent: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
      iconBg: "bg-purple-100"
    },
    indigo: {
      accent: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      button: "bg-indigo-600 hover:bg-indigo-700",
      iconBg: "bg-indigo-100"
    },
    green: {
      accent: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      button: "bg-green-600 hover:bg-green-700",
      iconBg: "bg-green-100"
    },
    pink: {
      accent: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-200",
      button: "bg-pink-600 hover:bg-pink-700",
      iconBg: "bg-pink-100"
    },
    cyan: {
      accent: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      button: "bg-cyan-600 hover:bg-cyan-700",
      iconBg: "bg-cyan-100"
    },
    red: {
      accent: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      button: "bg-red-600 hover:bg-red-700",
      iconBg: "bg-red-100"
    },
    orange: {
      accent: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      button: "bg-orange-600 hover:bg-orange-700",
      iconBg: "bg-orange-100"
    },
    yellow: {
      accent: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      button: "bg-yellow-600 hover:bg-yellow-700",
      iconBg: "bg-yellow-100"
    },
    teal: {
      accent: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
      button: "bg-teal-600 hover:bg-teal-700",
      iconBg: "bg-teal-100"
    }
  };
  return classes[color] || classes.blue;
}
const FeatureDetailModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen = false;
  let feature = null;
  function open(selectedFeature) {
    feature = selectedFeature;
    isOpen = true;
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }
  function close() {
    isOpen = false;
    feature = null;
    if (typeof document !== "undefined") {
      document.body.style.overflow = "";
    }
  }
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0) $$bindings.close(close);
  $$result.css.add(css$2);
  return ` ${isOpen && feature ? (() => {
    let colors = getColorClasses(feature.color);
    return ` <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in svelte-vdek8r" role="dialog" aria-modal="true" aria-label="${"Detalhes: " + escape(feature.title, true)}"><div class="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden transform scale-95 animate-scale-in max-h-[90vh] flex flex-col svelte-vdek8r" role="document"> <div class="px-8 pt-8 pb-6 border-b border-gray-100"><div class="flex items-start justify-between gap-4"><div class="flex items-start gap-4 flex-1"><div class="${"w-14 h-14 " + escape(colors.iconBg, true) + " rounded-xl flex items-center justify-center flex-shrink-0 svelte-vdek8r"}"><svg class="${"w-7 h-7 " + escape(colors.accent, true) + " svelte-vdek8r"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${add_attribute("d", feature.icon, 0)}></path></svg></div> <div class="flex-1 min-w-0"><h2 class="text-2xl font-bold text-gray-900 mb-1.5">${escape(feature.title)}</h2> <p class="text-gray-600 text-sm leading-relaxed">${escape(feature.description)}</p></div></div> <button type="button" class="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0" aria-label="Fechar" data-svelte-h="svelte-r1ovck"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>  <div class="flex-1 overflow-y-auto px-8 py-6">${feature.fullDescription ? `<div class="mb-8"><p class="text-gray-700 leading-relaxed text-[15px]">${escape(feature.fullDescription)}</p></div>` : ``} ${feature.benefits && feature.benefits.length > 0 ? `<div class="mb-8"><h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4" data-svelte-h="svelte-1bczu7z">Principais Benefícios</h3> <div class="space-y-2.5">${each(feature.benefits, (benefit) => {
      return `<div class="flex items-start gap-3"><div class="${"w-5 h-5 " + escape(colors.iconBg, true) + " rounded flex items-center justify-center flex-shrink-0 mt-0.5 svelte-vdek8r"}"><svg class="${"w-3 h-3 " + escape(colors.accent, true) + " svelte-vdek8r"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg></div> <p class="text-gray-700 text-sm leading-relaxed flex-1">${escape(benefit)}</p> </div>`;
    })}</div></div>` : ``} ${feature.features && feature.features.length > 0 ? `<div class="mb-8"><h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4" data-svelte-h="svelte-xp6nd1">Funcionalidades Incluídas</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${each(feature.features, (func) => {
      return `<div class="flex items-center gap-2.5 text-sm text-gray-600"><div class="${"w-1.5 h-1.5 " + escape(colors.accent, true) + " rounded-full flex-shrink-0 svelte-vdek8r"}"></div> <span>${escape(func)}</span> </div>`;
    })}</div></div>` : ``} ${feature.example ? `<div class="${"mb-6 p-5 " + escape(colors.bg, true) + " rounded-xl border " + escape(colors.border, true) + " svelte-vdek8r"}"><div class="flex items-start gap-3"><div class="${"w-8 h-8 " + escape(colors.iconBg, true) + " rounded-lg flex items-center justify-center flex-shrink-0 svelte-vdek8r"}"><svg class="${"w-4 h-4 " + escape(colors.accent, true) + " svelte-vdek8r"}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div> <div class="flex-1"><h4 class="text-sm font-semibold text-gray-900 mb-1.5" data-svelte-h="svelte-aghi1">Exemplo Prático</h4> <p class="text-gray-700 text-sm leading-relaxed">${escape(feature.example)}</p></div></div></div>` : ``}</div>  <div class="px-8 py-5 border-t border-gray-100 bg-gray-50"><div class="flex flex-col sm:flex-row gap-3"><a href="https://upclinic-aa025.web.app/signup" class="${"flex-1 " + escape(colors.button, true) + " text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all svelte-vdek8r"}">Experimentar Agora</a> <a href="/contato" class="flex-1 bg-white border-2 border-gray-300 text-gray-700 text-center px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-all" data-svelte-h="svelte-132lqvs">Falar com Especialista</a> <a href="${"https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20" + escape(feature.title, true)}" target="_blank" rel="noopener noreferrer" class="flex-1 bg-green-500 hover:bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium text-sm hover:shadow-md transition-all">WhatsApp</a></div></div></div></div>`;
  })() : ``}`;
});
const FeatureGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let demoModal;
  let detailModal;
  const features = [
    {
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
      title: "Prontuário Eletrônico",
      description: "Sistema completo de prontuários digitais com segurança LGPD, histórico completo e acesso rápido a todas as informações do paciente.",
      color: "blue",
      fullDescription: "Gerencie todo o histórico médico dos seus pacientes de forma digital e segura. O prontuário eletrônico do UpClinic permite registrar consultas, exames, prescrições e evoluções clínicas com total conformidade à LGPD. Acesso rápido, busca inteligente e backup automático garantem que todas as informações estejam sempre disponíveis quando você precisar.",
      benefits: [
        "Histórico médico completo e organizado",
        "Conformidade total com LGPD e normas do CFM",
        "Busca inteligente por sintomas, diagnósticos ou medicamentos",
        "Anexos de exames e documentos",
        "Assinatura digital de prescrições",
        "Backup automático na nuvem"
      ],
      features: [
        "Registro de consultas e evoluções",
        "Histórico de medicações",
        "Anexo de exames e imagens",
        "Busca avançada por múltiplos critérios",
        "Timeline cronológica de atendimentos",
        "Exportação de relatórios"
      ],
      example: "Um paciente retorna após 6 meses. Com um clique, você acessa todo o histórico, exames anteriores, medicações prescritas e evoluções, permitindo um atendimento mais eficiente e preciso."
    },
    {
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",
      title: "Agenda Inteligente",
      description: "Agendamento automático com lembretes por WhatsApp e email, otimização de horários e gestão completa da sua agenda.",
      color: "purple",
      fullDescription: "Transforme a gestão da sua agenda com inteligência artificial. O sistema sugere os melhores horários, envia lembretes automáticos por WhatsApp e email, e otimiza sua agenda para maximizar a produtividade. Reduza faltas em até 80% com lembretes inteligentes e confirmações automáticas.",
      benefits: [
        "Agendamento online 24/7 para pacientes",
        "Lembretes automáticos por WhatsApp, SMS e email",
        "Otimização automática de horários",
        "Gestão de múltiplos profissionais e especialidades",
        "Bloqueio de horários e feriados",
        "Relatórios de ocupação e produtividade"
      ],
      features: [
        "Calendário visual interativo",
        "Agendamento por especialidade",
        "Confirmação automática de consultas",
        "Gestão de lista de espera",
        "Reagendamento rápido",
        "Integração com Google Calendar"
      ],
      example: "Um paciente agenda uma consulta pelo site às 23h. O sistema confirma automaticamente, envia lembretes 48h e 24h antes, e 2h antes da consulta. Resultado: zero esquecimentos!"
    },
    {
      icon: "M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z",
      title: "Telemedicina",
      description: "Consultas online integradas com prescrição digital, videoconferência de alta qualidade e prontuário sincronizado.",
      color: "indigo",
      fullDescription: "Realize consultas remotas com qualidade profissional. Videoconferência HD, chat integrado, compartilhamento de tela para exames e prescrições digitais assinadas eletronicamente. Tudo integrado ao prontuário eletrônico para um atendimento completo e documentado.",
      benefits: [
        "Videoconferência HD com qualidade profissional",
        "Chat em tempo real durante a consulta",
        "Compartilhamento de tela para análise de exames",
        "Gravação de consultas (com consentimento do paciente)",
        "Prescrições digitais com assinatura eletrônica",
        "Integração completa com prontuário eletrônico"
      ],
      features: [
        "Sala de espera virtual",
        "Compartilhamento de arquivos",
        "Gravação de consultas",
        "Prescrições digitais integradas",
        "Agendamento específico para telemedicina",
        "Relatórios de teleconsultas"
      ],
      example: "Paciente em outra cidade precisa de retorno. Você agenda uma teleconsulta, analisa exames compartilhando a tela, prescreve digitalmente e tudo fica registrado automaticamente no prontuário."
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
      title: "Gestão Financeira",
      description: "Controle completo de receitas, despesas, pagamentos e relatórios financeiros detalhados para sua clínica.",
      color: "green",
      fullDescription: "Tenha controle total das finanças da sua clínica. Receitas de consultas, despesas operacionais, controle de inadimplência, relatórios detalhados e integração com sistemas de pagamento. Tudo em um só lugar para você tomar decisões financeiras inteligentes.",
      benefits: [
        "Controle de receitas e despesas em tempo real",
        "Relatórios financeiros detalhados e personalizados",
        "Gestão de inadimplência e cobranças",
        "Integração com gateways de pagamento",
        "Análise de lucratividade por profissional",
        "Previsão de fluxo de caixa"
      ],
      features: [
        "Dashboard financeiro em tempo real",
        "Controle de contas a pagar e receber",
        "Relatórios de faturamento",
        "Integração com bancos",
        "Gestão de planos de saúde",
        "Análise de rentabilidade"
      ],
      example: "No final do mês, você acessa um dashboard completo mostrando receitas por especialidade, despesas categorizadas, taxa de inadimplência e projeções para o próximo mês - tudo em gráficos visuais."
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "IA Médica",
      description: "Assistente de IA para diagnósticos, análise de exames e sugestões de tratamento baseadas em evidências científicas.",
      color: "pink",
      fullDescription: "Conte com inteligência artificial como seu assistente médico. O sistema analisa sintomas, sugere diagnósticos baseados em evidências científicas, identifica padrões em exames e oferece suporte à decisão clínica. Sempre como ferramenta de apoio, nunca substituindo o julgamento médico.",
      benefits: [
        "Análise inteligente de sintomas e sinais",
        "Sugestões de diagnósticos baseadas em evidências",
        "Identificação de padrões em exames laboratoriais",
        "Alertas para interações medicamentosas",
        "Suporte à decisão clínica baseado em guidelines",
        "Aprendizado contínuo com casos similares"
      ],
      features: [
        "Análise de sintomas",
        "Sugestões de exames complementares",
        "Alertas de interações medicamentosas",
        "Base de conhecimento médico",
        "Análise de padrões em exames",
        "Histórico de casos similares"
      ],
      example: "Você digita os sintomas do paciente. A IA sugere possíveis diagnósticos com base em evidências, alerta sobre interações medicamentosas e mostra casos similares já tratados na sua clínica."
    },
    {
      icon: "M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z",
      title: "Mobile & Cloud",
      description: "Acesso em qualquer lugar via web ou mobile, sincronização em tempo real e backup automático na nuvem.",
      color: "cyan",
      fullDescription: "Acesse seu sistema de qualquer lugar, a qualquer hora. Versão mobile otimizada, sincronização em tempo real entre dispositivos e backup automático na nuvem. Sua clínica sempre com você, no consultório, em casa ou em viagem.",
      benefits: [
        "Aplicativo mobile nativo para iOS e Android",
        "Sincronização em tempo real entre dispositivos",
        "Backup automático na nuvem",
        "Acesso offline com sincronização automática",
        "Notificações push no celular",
        "Interface responsiva para tablets"
      ],
      features: [
        "App iOS e Android",
        "Sincronização em tempo real",
        "Modo offline",
        "Backup automático",
        "Notificações push",
        "Acesso via navegador"
      ],
      example: "Você está em casa e precisa verificar um agendamento urgente. Abre o app no celular, acessa todas as informações, faz alterações e tudo sincroniza automaticamente com o sistema principal."
    },
    {
      icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
      title: "Gestão de Pacientes",
      description: "Cadastro completo, histórico médico detalhado, busca avançada e acompanhamento personalizado de cada paciente.",
      color: "blue",
      fullDescription: "Sistema completo de gestão de pacientes com busca avançada e acompanhamento personalizado. Cadastre informações completas, histórico médico detalhado, múltiplos contatos e dados de emergência sempre acessíveis.",
      benefits: [
        "Busca instantânea por qualquer critério",
        "Histórico completo do paciente",
        "Alertas automáticos de retornos",
        "Gestão de múltiplos contatos",
        "Dados de emergência sempre acessíveis",
        "Integração com exames e prescrições"
      ],
      features: [
        "Cadastro completo de pacientes",
        "Busca avançada multi-critério",
        "Histórico médico integrado",
        "Gestão de contatos",
        "Alertas de retorno",
        "Fichas personalizadas"
      ],
      example: "Busque um paciente por nome, CPF, telefone ou sintoma. Em segundos, você tem acesso a todo o histórico, exames, prescrições e informações de contato."
    },
    {
      icon: "M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
      title: "Gestão de Profissionais",
      description: "Controle completo da equipe médica, especialidades, escalas, disponibilidade e permissões de acesso.",
      color: "purple",
      fullDescription: "Gerencie toda sua equipe médica de forma eficiente. Controle especialidades, escalas de trabalho, disponibilidade e permissões de acesso personalizadas para cada profissional.",
      benefits: [
        "Gestão de múltiplas especialidades",
        "Controle de escalas e disponibilidade",
        "Relatórios de performance individual",
        "Permissões de acesso personalizadas",
        "Integração com agenda e prontuário",
        "Histórico de atividades por profissional"
      ],
      features: [
        "Cadastro de profissionais",
        "Gestão de especialidades",
        "Controle de escalas",
        "Permissões personalizadas",
        "Relatórios de performance",
        "Integração com agenda"
      ],
      example: "Configure diferentes níveis de acesso: recepcionistas veem apenas agenda, médicos acessam prontuários completos, e administradores têm acesso total ao sistema."
    },
    {
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z",
      title: "Exames e Laudos",
      description: "Gestão completa de exames laboratoriais e de imagem, laudos digitais e integração com laboratórios parceiros.",
      color: "green",
      fullDescription: "Organize todos os exames laboratoriais e de imagem com laudos digitais e integração com laboratórios parceiros. Histórico completo, comparação de exames ao longo do tempo e alertas de exames pendentes.",
      benefits: [
        "Integração com laboratórios parceiros",
        "Laudos digitais organizados",
        "Histórico completo de exames",
        "Alertas de exames pendentes",
        "Visualização de imagens integrada",
        "Comparação de exames ao longo do tempo"
      ],
      features: [
        "Upload de exames",
        "Integração com laboratórios",
        "Visualização de imagens",
        "Laudos digitais",
        "Histórico de exames",
        "Alertas automáticos"
      ],
      example: "Um exame de sangue chega do laboratório parceiro. O sistema notifica automaticamente, anexa ao prontuário do paciente e você pode comparar com exames anteriores em segundos."
    },
    {
      icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Prescrições Digitais",
      description: "Prescrições médicas digitais com assinatura eletrônica, validação de medicamentos e integração com farmácias.",
      color: "red",
      fullDescription: "Prescrições médicas digitais válidas legalmente com assinatura eletrônica e integração com farmácias. Validação automática de medicamentos, alertas de interações e histórico completo de prescrições.",
      benefits: [
        "Assinatura eletrônica válida legalmente",
        "Integração com farmácias parceiras",
        "Histórico de prescrições completo",
        "Validação automática de medicamentos",
        "Alertas de interações medicamentosas",
        "Prescrições padronizadas por especialidade"
      ],
      features: [
        "Prescrições digitais",
        "Assinatura eletrônica",
        "Validação de medicamentos",
        "Integração com farmácias",
        "Histórico de prescrições",
        "Templates por especialidade"
      ],
      example: "Você prescreve um medicamento e o sistema alerta sobre uma possível interação com outro remédio que o paciente já usa. A prescrição é assinada digitalmente e enviada automaticamente para a farmácia parceira."
    },
    {
      icon: "M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z",
      title: "Relatórios e Analytics",
      description: "Dashboards interativos, relatórios personalizados, métricas de performance e análises detalhadas do seu negócio.",
      color: "orange",
      fullDescription: "Tome decisões baseadas em dados com dashboards interativos e relatórios personalizados. Métricas de performance, análises detalhadas do seu negócio e comparação de períodos para identificar tendências.",
      benefits: [
        "Dashboards em tempo real",
        "Relatórios personalizados",
        "Análise de performance",
        "Métricas de produtividade",
        "Gráficos interativos",
        "Exportação de relatórios em PDF/Excel"
      ],
      features: [
        "Dashboard personalizado",
        "Relatórios financeiros",
        "Análise de produtividade",
        "Gráficos interativos",
        "Exportação de dados",
        "Comparação de períodos"
      ],
      example: "Visualize em um dashboard completo: número de consultas por mês, receita por especialidade, taxa de ocupação da agenda e satisfação dos pacientes - tudo em gráficos visuais e interativos."
    },
    {
      icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 13 13.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9",
      title: "Notificações Inteligentes",
      description: "Sistema de alertas e lembretes automáticos por WhatsApp, SMS e email para pacientes e profissionais.",
      color: "yellow",
      fullDescription: "Sistema de lembretes automáticos que reduz faltas e melhora a comunicação com pacientes. Lembretes por WhatsApp, SMS e email, templates personalizáveis e relatórios de entrega e leitura.",
      benefits: [
        "Redução de 80% nas faltas",
        "Lembretes automáticos multi-canal",
        "Comunicação personalizada",
        "Templates de mensagens",
        "Agendamento de notificações",
        "Relatórios de entrega e leitura"
      ],
      features: [
        "Lembretes automáticos",
        "WhatsApp, SMS e Email",
        "Templates personalizáveis",
        "Agendamento de notificações",
        "Relatórios de entrega",
        "Confirmação de consultas"
      ],
      example: "O sistema envia automaticamente lembretes 48h, 24h e 2h antes da consulta. O paciente confirma pelo WhatsApp e você recebe uma notificação. Resultado: 80% menos faltas!"
    },
    {
      icon: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10",
      title: "Farmácia Integrada",
      description: "Gestão de medicamentos, controle de estoque, prescrições digitais e integração com farmácias parceiras.",
      color: "teal",
      fullDescription: "Controle completo de medicamentos, estoque e integração com farmácias parceiras. Gestão de medicamentos, alertas de estoque baixo, histórico de medicamentos e validação de prescrições.",
      benefits: [
        "Controle de estoque automático",
        "Integração com farmácias",
        "Gestão de medicamentos",
        "Alertas de estoque baixo",
        "Histórico de medicamentos",
        "Validação de prescrições"
      ],
      features: [
        "Controle de estoque",
        "Integração com farmácias",
        "Gestão de medicamentos",
        "Alertas automáticos",
        "Histórico de medicamentos",
        "Validação de prescrições"
      ],
      example: "Você prescreve um medicamento e o sistema verifica automaticamente se está disponível na farmácia parceira. Se não estiver, sugere alternativas disponíveis."
    },
    {
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
      title: "Integrações",
      description: "Conecte-se com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde.",
      color: "indigo",
      fullDescription: "Integre com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde. API completa disponível, webhooks em tempo real e integração com os principais sistemas do mercado.",
      benefits: [
        "API completa disponível",
        "Integração com principais sistemas",
        "Webhooks em tempo real",
        "Integração com laboratórios",
        "Integração com farmácias",
        "Integração com sistemas de pagamento"
      ],
      features: [
        "API REST completa",
        "Webhooks em tempo real",
        "Integração com laboratórios",
        "Integração com farmácias",
        "Gateways de pagamento",
        "Sistemas de terceiros"
      ],
      example: "Conecte seu sistema com o laboratório parceiro. Quando um exame fica pronto, ele é automaticamente importado para o prontuário do paciente, sem necessidade de upload manual."
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Segurança e LGPD",
      description: "Criptografia de dados, backup automático, conformidade com LGPD e auditoria completa de acessos.",
      color: "red",
      fullDescription: "Criptografia de dados, backup automático e conformidade total com LGPD e normas do CFM. Auditoria completa de acessos, controle de permissões e logs de todas as ações para garantir a segurança e privacidade dos dados.",
      benefits: [
        "Criptografia end-to-end",
        "Conformidade LGPD",
        "Auditoria completa de acessos",
        "Backup automático",
        "Controle de permissões",
        "Logs de todas as ações"
      ],
      features: [
        "Criptografia de dados",
        "Conformidade LGPD",
        "Auditoria de acessos",
        "Controle de permissões",
        "Backup automático",
        "Logs de atividades"
      ],
      example: "Todos os dados são criptografados e armazenados com segurança. Você pode auditar quem acessou qual informação e quando, garantindo total conformidade com a LGPD."
    },
    {
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      title: "Backup Automático",
      description: "Backup contínuo na nuvem, recuperação de dados e proteção contra perda de informações.",
      color: "blue",
      fullDescription: "Backup contínuo na nuvem com recuperação instantânea e proteção contra perda de dados. Múltiplos pontos de restauração, backup em servidores redundantes e testes de recuperação regulares.",
      benefits: [
        "Backup automático diário",
        "Recuperação instantânea",
        "Zero perda de dados",
        "Múltiplos pontos de restauração",
        "Backup em servidores redundantes",
        "Testes de recuperação regulares"
      ],
      features: [
        "Backup automático diário",
        "Múltiplos pontos de restauração",
        "Recuperação instantânea",
        "Servidores redundantes",
        "Testes automáticos",
        "Histórico de backups"
      ],
      example: "Seu servidor local falha? Sem problemas! Todos os dados estão seguros na nuvem e podem ser recuperados instantaneamente, sem perda de informações."
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Dashboard Analytics",
      description: "Visão geral completa com métricas em tempo real, gráficos interativos e KPIs personalizados.",
      color: "purple",
      fullDescription: "Visão completa do seu negócio com métricas em tempo real, gráficos interativos e KPIs personalizados. Análise de performance, comparação de períodos e alertas de métricas para tomar decisões baseadas em dados.",
      benefits: [
        "Métricas em tempo real",
        "Gráficos interativos",
        "KPIs personalizados",
        "Comparação de períodos",
        "Alertas de métricas",
        "Exportação de dados"
      ],
      features: [
        "Dashboard personalizado",
        "Métricas em tempo real",
        "Gráficos interativos",
        "KPIs configuráveis",
        "Comparação de períodos",
        "Exportação de dados"
      ],
      example: "Acesse um dashboard completo mostrando consultas do dia, receita do mês, taxa de ocupação, satisfação dos pacientes e muito mais - tudo atualizado em tempo real."
    }
  ];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section id="funcionalidades" class="py-24 bg-white"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16" data-svelte-h="svelte-135o0i"><span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Funcionalidades</span> <h2 class="section-title">Tudo que sua clínica precisa</h2> <p class="section-description">Um sistema completo e integrado com mais de 18 funcionalidades para gerenciar todos os aspectos da sua prática médica</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(features, (feature) => {
      let gradientClass = feature.color === "blue" ? "from-blue-500 to-blue-600" : feature.color === "purple" ? "from-purple-500 to-purple-600" : feature.color === "indigo" ? "from-indigo-500 to-indigo-600" : feature.color === "green" ? "from-green-500 to-green-600" : feature.color === "pink" ? "from-pink-500 to-pink-600" : feature.color === "cyan" ? "from-cyan-500 to-cyan-600" : feature.color === "red" ? "from-red-500 to-red-600" : feature.color === "orange" ? "from-orange-500 to-orange-600" : feature.color === "yellow" ? "from-yellow-500 to-yellow-600" : feature.color === "teal" ? "from-teal-500 to-teal-600" : "from-blue-500 to-blue-600";
      return ` <div class="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" role="button" tabindex="0"><div class="${"w-16 h-16 bg-gradient-to-br " + escape(gradientClass, true) + " rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"}"><svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${add_attribute("d", feature.icon, 0)}></path></svg></div> <h3 class="text-xl font-bold text-gray-900 mb-3">${escape(feature.title)}</h3> <p class="text-gray-600 leading-relaxed mb-4">${escape(feature.description)}</p> <div class="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity" data-svelte-h="svelte-imk3rj"><span>Ver detalhes</span> <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div> </div>`;
    })}</div> <div class="text-center mt-12"><p class="text-gray-600 mb-6" data-svelte-h="svelte-zyhpwv">E muito mais funcionalidades para transformar a gestão da sua clínica</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://upclinic-aa025.web.app/signup" class="btn btn-primary btn-large" data-svelte-h="svelte-1u2qett">Ver Todas as Funcionalidades</a> <button type="button" class="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 btn-large" data-svelte-h="svelte-ocemcx">Solicitar Demonstração</button></div></div></div> ${validate_component(FeatureDemoModal, "FeatureDemoModal").$$render(
      $$result,
      { this: demoModal },
      {
        this: ($$value) => {
          demoModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(FeatureDetailModal, "FeatureDetailModal").$$render(
      $$result,
      { this: detailModal },
      {
        this: ($$value) => {
          detailModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}</section>`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: "@keyframes svelte-vrouvy-fade-in{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in.svelte-vrouvy{animation:svelte-vrouvy-fade-in 0.3s ease-out}",
  map: `{"version":3,"file":"FAQ.svelte","sources":["FAQ.svelte"],"sourcesContent":["<script>\\r\\n  let openIndex = null;\\r\\n  \\r\\n  const faqs = [\\r\\n    {\\r\\n      question: 'Como funciona o sistema UpClinic?',\\r\\n      answer: 'O UpClinic é um sistema completo de gestão médica que integra prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais. Tudo em uma única plataforma na nuvem, acessível de qualquer dispositivo.'\\r\\n    },\\r\\n    {\\r\\n      question: 'Preciso instalar algum software?',\\r\\n      answer: 'Não! O UpClinic é 100% baseado em nuvem. Você acessa através do navegador web ou pelos aplicativos mobile (iOS e Android). Não há necessidade de instalação de software no computador.'\\r\\n    },\\r\\n    {\\r\\n      question: 'Meus dados estão seguros?',\\r\\n      answer: 'Sim! Utilizamos criptografia end-to-end, backup automático diário e total conformidade com a LGPD. Seus dados são armazenados em servidores seguros com redundância e monitoramento 24/7.'\\r\\n    },\\r\\n    {\\r\\n      question: 'Posso testar antes de contratar?',\\r\\n      answer: 'Claro! Oferecemos período de teste gratuito para você conhecer todas as funcionalidades. Não é necessário cartão de crédito para começar.'\\r\\n    }\\r\\n  ];\\r\\n  \\r\\n  function toggleFAQ(index) {\\r\\n    openIndex = openIndex === index ? null : index;\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"duvidas-frequentes\\" class=\\"py-24 bg-white\\">\\r\\n  <div class=\\"container mx-auto px-4 sm:px-6 lg:px-8\\">\\r\\n    <div class=\\"text-center mb-16\\">\\r\\n      <h2 class=\\"text-4xl md:text-5xl font-bold text-gray-900 mb-4\\">\\r\\n        FICOU ALGUMA DÚVIDA?\\r\\n      </h2>\\r\\n      <p class=\\"text-xl text-gray-600 max-w-2xl mx-auto\\">\\r\\n        Confira nossas perguntas frequentes\\r\\n      </p>\\r\\n    </div>\\r\\n    \\r\\n    <div class=\\"max-w-3xl mx-auto\\">\\r\\n      <div class=\\"space-y-4\\">\\r\\n        {#each faqs as faq, index}\\r\\n          <div class=\\"border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors\\">\\r\\n            <button\\r\\n              type=\\"button\\"\\r\\n              class=\\"w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors\\"\\r\\n              on:click={() => toggleFAQ(index)}\\r\\n              aria-expanded={openIndex === index}\\r\\n              aria-controls=\\"faq-answer-{index}\\"\\r\\n            >\\r\\n              <span class=\\"font-semibold text-gray-900 text-lg flex-1\\">{faq.question}</span>\\r\\n              <svg \\r\\n                class=\\"w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}\\"\\r\\n                fill=\\"none\\" \\r\\n                stroke=\\"currentColor\\" \\r\\n                viewBox=\\"0 0 24 24\\"\\r\\n              >\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 9l-7 7-7-7\\" />\\r\\n              </svg>\\r\\n            </button>\\r\\n            \\r\\n            {#if openIndex === index}\\r\\n              <div \\r\\n                id=\\"faq-answer-{index}\\"\\r\\n                class=\\"px-6 pb-5 text-gray-700 leading-relaxed animate-fade-in\\"\\r\\n              >\\r\\n                {faq.answer}\\r\\n              </div>\\r\\n            {/if}\\r\\n          </div>\\r\\n        {/each}\\r\\n      </div>\\r\\n      \\r\\n      <!-- CTA -->\\r\\n      <div class=\\"mt-12 text-center\\">\\r\\n        <p class=\\"text-gray-600 mb-6\\">\\r\\n          Não encontrou a resposta que procurava?\\r\\n        </p>\\r\\n        <div class=\\"flex flex-col sm:flex-row items-center justify-center gap-4\\">\\r\\n          <a \\r\\n            href=\\"/contato\\"\\r\\n            class=\\"btn bg-blue-600 hover:bg-blue-700 text-white px-8\\"\\r\\n          >\\r\\n            Entre em Contato\\r\\n          </a>\\r\\n          <a \\r\\n            href=\\"https://wa.me/5562996720296?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20UpClinic\\"\\r\\n            target=\\"_blank\\"\\r\\n            rel=\\"noopener noreferrer\\"\\r\\n            class=\\"btn bg-green-500 hover:bg-green-600 text-white px-8\\"\\r\\n          >\\r\\n            Falar no WhatsApp\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  @keyframes fade-in {\\r\\n    from {\\r\\n      opacity: 0;\\r\\n      transform: translateY(-10px);\\r\\n    }\\r\\n    to {\\r\\n      opacity: 1;\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  .animate-fade-in {\\r\\n    animation: fade-in 0.3s ease-out;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"AAmGE,WAAW,qBAAQ,CACjB,IAAK,CACH,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,KAAK,CAC7B,CACA,EAAG,CACD,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACzB,CACF,CAEA,8BAAiB,CACf,SAAS,CAAE,qBAAO,CAAC,IAAI,CAAC,QAC1B"}`
};
const FAQ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let openIndex = null;
  const faqs = [
    {
      question: "Como funciona o sistema UpClinic?",
      answer: "O UpClinic é um sistema completo de gestão médica que integra prontuário eletrônico, agenda inteligente, telemedicina, gestão financeira e muito mais. Tudo em uma única plataforma na nuvem, acessível de qualquer dispositivo."
    },
    {
      question: "Preciso instalar algum software?",
      answer: "Não! O UpClinic é 100% baseado em nuvem. Você acessa através do navegador web ou pelos aplicativos mobile (iOS e Android). Não há necessidade de instalação de software no computador."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Utilizamos criptografia end-to-end, backup automático diário e total conformidade com a LGPD. Seus dados são armazenados em servidores seguros com redundância e monitoramento 24/7."
    },
    {
      question: "Posso testar antes de contratar?",
      answer: "Claro! Oferecemos período de teste gratuito para você conhecer todas as funcionalidades. Não é necessário cartão de crédito para começar."
    }
  ];
  $$result.css.add(css$1);
  return `<section id="duvidas-frequentes" class="py-24 bg-white"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-16" data-svelte-h="svelte-1g9indb"><h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FICOU ALGUMA DÚVIDA?</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">Confira nossas perguntas frequentes</p></div> <div class="max-w-3xl mx-auto"><div class="space-y-4">${each(faqs, (faq, index) => {
    return `<div class="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"><button type="button" class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"${add_attribute("aria-expanded", openIndex === index, 0)} aria-controls="${"faq-answer-" + escape(index, true)}"><span class="font-semibold text-gray-900 text-lg flex-1">${escape(faq.question)}</span> <svg class="${"w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 " + escape(openIndex === index ? "rotate-180" : "", true)}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> ${openIndex === index ? `<div id="${"faq-answer-" + escape(index, true)}" class="px-6 pb-5 text-gray-700 leading-relaxed animate-fade-in svelte-vrouvy">${escape(faq.answer)} </div>` : ``} </div>`;
  })}</div>  <div class="mt-12 text-center" data-svelte-h="svelte-2e7jdi"><p class="text-gray-600 mb-6">Não encontrou a resposta que procurava?</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="/contato" class="btn bg-blue-600 hover:bg-blue-700 text-white px-8">Entre em Contato</a> <a href="https://wa.me/5562996720296?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20UpClinic" target="_blank" rel="noopener noreferrer" class="btn bg-green-500 hover:bg-green-600 text-white px-8">Falar no WhatsApp</a></div></div></div></div> </section>`;
});
const css = {
  code: "@keyframes svelte-1hijtoo-fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.animate-fade-in.svelte-1hijtoo{animation:svelte-1hijtoo-fade-in 0.4s ease-out}",
  map: `{"version":3,"file":"ResultsShowcase.svelte","sources":["ResultsShowcase.svelte"],"sourcesContent":["<script>\\r\\n  const results = [\\r\\n    {\\r\\n      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',\\r\\n      metric: '80%',\\r\\n      title: 'Redução de Faltas',\\r\\n      description: 'Com lembretes automáticos inteligentes',\\r\\n      color: 'blue',\\r\\n      gradient: 'from-blue-500 to-blue-600'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',\\r\\n      metric: '90%',\\r\\n      title: 'Menos Tempo de Busca',\\r\\n      description: 'Acesso instantâneo a informações do paciente',\\r\\n      color: 'green',\\r\\n      gradient: 'from-green-500 to-green-600'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',\\r\\n      metric: '+250%',\\r\\n      title: 'Aumento de Produtividade',\\r\\n      description: 'Automação de processos administrativos',\\r\\n      color: 'purple',\\r\\n      gradient: 'from-purple-500 to-purple-600'\\r\\n    },\\r\\n    {\\r\\n      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',\\r\\n      metric: '60%',\\r\\n      title: 'Redução de Inadimplência',\\r\\n      description: 'Gestão financeira inteligente e cobranças automáticas',\\r\\n      color: 'orange',\\r\\n      gradient: 'from-orange-500 to-orange-600'\\r\\n    }\\r\\n  ];\\r\\n  \\r\\n  const testimonials = [\\r\\n    {\\r\\n      name: 'Dr. Carlos Silva',\\r\\n      role: 'Clínica Médica São Paulo',\\r\\n      quote: 'O UpClinic transformou completamente nossa gestão. Reduzimos o tempo administrativo em 70% e aumentamos a satisfação dos pacientes.',\\r\\n      avatar: '👨‍⚕️'\\r\\n    },\\r\\n    {\\r\\n      name: 'Dra. Ana Costa',\\r\\n      role: 'Clínica de Especialidades',\\r\\n      quote: 'A agenda inteligente eliminou praticamente todas as faltas. Os lembretes automáticos são um diferencial incrível.',\\r\\n      avatar: '👩‍⚕️'\\r\\n    },\\r\\n    {\\r\\n      name: 'Dr. Roberto Santos',\\r\\n      role: 'Consultório Particular',\\r\\n      quote: 'O prontuário eletrônico é completo e seguro. Conseguimos acessar o histórico de qualquer paciente em segundos.',\\r\\n      avatar: '👨‍⚕️'\\r\\n    }\\r\\n  ];\\r\\n  \\r\\n  let currentTestimonial = 0;\\r\\n  let intervalId;\\r\\n  \\r\\n  function nextTestimonial() {\\r\\n    currentTestimonial = (currentTestimonial + 1) % testimonials.length;\\r\\n  }\\r\\n  \\r\\n  function prevTestimonial() {\\r\\n    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;\\r\\n  }\\r\\n  \\r\\n  function goToTestimonial(index) {\\r\\n    currentTestimonial = index;\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"pt-0 pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50\\">\\r\\n  <div class=\\"container mx-auto px-4 sm:px-6 lg:px-8\\">\\r\\n    <!-- Header -->\\r\\n    <div class=\\"text-center mb-12 pt-8\\">\\r\\n      <span class=\\"inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4\\">\\r\\n        Resultados Comprovados\\r\\n      </span>\\r\\n      <h2 class=\\"section-title\\">Resultados Reais de Clínicas que Usam UpClinic</h2>\\r\\n      <p class=\\"section-description max-w-3xl mx-auto\\">\\r\\n        Veja os números que comprovam a eficácia do nosso sistema na gestão de clínicas médicas\\r\\n      </p>\\r\\n    </div>\\r\\n    \\r\\n    <!-- Métricas -->\\r\\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16\\">\\r\\n      {#each results as result}\\r\\n        <div class=\\"group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100\\">\\r\\n          <div class=\\"absolute top-0 right-0 w-20 h-20 bg-gradient-to-br {result.gradient} opacity-5 rounded-bl-full\\"></div>\\r\\n          <div class=\\"relative\\">\\r\\n            <div class=\\"w-14 h-14 bg-gradient-to-br {result.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform\\">\\r\\n              <svg class=\\"w-7 h-7 text-white\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d={result.icon} />\\r\\n              </svg>\\r\\n            </div>\\r\\n            <div class=\\"text-5xl font-bold bg-gradient-to-br {result.gradient} bg-clip-text text-transparent mb-2\\">\\r\\n              {result.metric}\\r\\n            </div>\\r\\n            <h3 class=\\"text-lg font-bold text-gray-900 mb-2\\">{result.title}</h3>\\r\\n            <p class=\\"text-gray-600 text-sm\\">{result.description}</p>\\r\\n          </div>\\r\\n        </div>\\r\\n      {/each}\\r\\n    </div>\\r\\n    \\r\\n    <!-- Depoimentos em Destaque -->\\r\\n    <div class=\\"bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100\\">\\r\\n      <div class=\\"text-center mb-8\\">\\r\\n        <h3 class=\\"text-2xl md:text-3xl font-bold text-gray-900 mb-3\\">\\r\\n          O que nossos clientes dizem\\r\\n        </h3>\\r\\n        <p class=\\"text-gray-600\\">\\r\\n          Depoimentos reais de profissionais que transformaram suas clínicas\\r\\n        </p>\\r\\n      </div>\\r\\n      \\r\\n      <div class=\\"max-w-4xl mx-auto\\">\\r\\n        <!-- Depoimento Ativo -->\\r\\n        <div class=\\"relative\\">\\r\\n          <div class=\\"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-100\\">\\r\\n            <div class=\\"flex items-start gap-6 mb-6\\">\\r\\n              <div class=\\"w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl flex-shrink-0\\">\\r\\n                {testimonials[currentTestimonial].avatar}\\r\\n              </div>\\r\\n              <div class=\\"flex-1\\">\\r\\n                <div class=\\"flex items-center gap-2 mb-2\\">\\r\\n                  {#each Array(5) as _}\\r\\n                    <svg class=\\"w-5 h-5 text-yellow-400\\" fill=\\"currentColor\\" viewBox=\\"0 0 20 20\\">\\r\\n                      <path d=\\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\\" />\\r\\n                    </svg>\\r\\n                  {/each}\\r\\n                </div>\\r\\n                <h4 class=\\"text-xl font-bold text-gray-900 mb-1\\">\\r\\n                  {testimonials[currentTestimonial].name}\\r\\n                </h4>\\r\\n                <p class=\\"text-gray-600 text-sm mb-4\\">\\r\\n                  {testimonials[currentTestimonial].role}\\r\\n                </p>\\r\\n                <p class=\\"text-gray-700 text-lg leading-relaxed italic\\">\\r\\n                  \\"{testimonials[currentTestimonial].quote}\\"\\r\\n                </p>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n          \\r\\n          <!-- Navegação -->\\r\\n          <div class=\\"flex items-center justify-between mt-6\\">\\r\\n            <button\\r\\n              type=\\"button\\"\\r\\n              class=\\"w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all\\"\\r\\n              on:click={prevTestimonial}\\r\\n              aria-label=\\"Depoimento anterior\\"\\r\\n            >\\r\\n              <svg class=\\"w-5 h-5 text-gray-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M15 19l-7-7 7-7\\" />\\r\\n              </svg>\\r\\n            </button>\\r\\n            \\r\\n            <div class=\\"flex gap-2\\">\\r\\n              {#each testimonials as _, index}\\r\\n                <button\\r\\n                  type=\\"button\\"\\r\\n                  class=\\"w-2.5 h-2.5 rounded-full transition-all {index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}\\"\\r\\n                  on:click={() => goToTestimonial(index)}\\r\\n                  aria-label=\\"Ir para depoimento {index + 1}\\"\\r\\n                ></button>\\r\\n              {/each}\\r\\n            </div>\\r\\n            \\r\\n            <button\\r\\n              type=\\"button\\"\\r\\n              class=\\"w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all\\"\\r\\n              on:click={nextTestimonial}\\r\\n              aria-label=\\"Próximo depoimento\\"\\r\\n            >\\r\\n              <svg class=\\"w-5 h-5 text-gray-600\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\r\\n                <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M9 5l7 7-7 7\\" />\\r\\n              </svg>\\r\\n            </button>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    \\r\\n    <!-- CTA -->\\r\\n    <div class=\\"mt-16 text-center\\">\\r\\n      <div class=\\"inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100\\">\\r\\n        <div class=\\"text-left\\">\\r\\n          <h4 class=\\"text-lg font-bold text-gray-900 mb-1\\">Quer resultados como estes?</h4>\\r\\n          <p class=\\"text-gray-600 text-sm\\">Comece sua transformação digital hoje mesmo</p>\\r\\n        </div>\\r\\n        <div class=\\"flex gap-3\\">\\r\\n          <a \\r\\n            href=\\"https://upclinic-aa025.web.app/signup\\"\\r\\n            class=\\"btn bg-blue-600 hover:bg-blue-700 text-white px-6\\"\\r\\n          >\\r\\n            Teste Grátis\\r\\n          </a>\\r\\n          <a \\r\\n            href=\\"https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20resultados%20do%20UpClinic\\"\\r\\n            target=\\"_blank\\"\\r\\n            rel=\\"noopener noreferrer\\"\\r\\n            class=\\"btn bg-green-500 hover:bg-green-600 text-white px-6\\"\\r\\n          >\\r\\n            Falar no WhatsApp\\r\\n          </a>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  @keyframes fade-in {\\r\\n    from {\\r\\n      opacity: 0;\\r\\n      transform: translateY(10px);\\r\\n    }\\r\\n    to {\\r\\n      opacity: 1;\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n  }\\r\\n  \\r\\n  .animate-fade-in {\\r\\n    animation: fade-in 0.4s ease-out;\\r\\n  }\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"AAuNE,WAAW,sBAAQ,CACjB,IAAK,CACH,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,IAAI,CAC5B,CACA,EAAG,CACD,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,CAAC,CACzB,CACF,CAEA,+BAAiB,CACf,SAAS,CAAE,sBAAO,CAAC,IAAI,CAAC,QAC1B"}`
};
const ResultsShowcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const results = [
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      metric: "80%",
      title: "Redução de Faltas",
      description: "Com lembretes automáticos inteligentes",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      metric: "90%",
      title: "Menos Tempo de Busca",
      description: "Acesso instantâneo a informações do paciente",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      metric: "+250%",
      title: "Aumento de Produtividade",
      description: "Automação de processos administrativos",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      metric: "60%",
      title: "Redução de Inadimplência",
      description: "Gestão financeira inteligente e cobranças automáticas",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    }
  ];
  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Clínica Médica São Paulo",
      quote: "O UpClinic transformou completamente nossa gestão. Reduzimos o tempo administrativo em 70% e aumentamos a satisfação dos pacientes.",
      avatar: "👨‍⚕️"
    },
    {
      name: "Dra. Ana Costa",
      role: "Clínica de Especialidades",
      quote: "A agenda inteligente eliminou praticamente todas as faltas. Os lembretes automáticos são um diferencial incrível.",
      avatar: "👩‍⚕️"
    },
    {
      name: "Dr. Roberto Santos",
      role: "Consultório Particular",
      quote: "O prontuário eletrônico é completo e seguro. Conseguimos acessar o histórico de qualquer paciente em segundos.",
      avatar: "👨‍⚕️"
    }
  ];
  let currentTestimonial = 0;
  $$result.css.add(css);
  return `<section class="pt-0 pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50"><div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12 pt-8" data-svelte-h="svelte-1ykzcn1"><span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Resultados Comprovados</span> <h2 class="section-title">Resultados Reais de Clínicas que Usam UpClinic</h2> <p class="section-description max-w-3xl mx-auto">Veja os números que comprovam a eficácia do nosso sistema na gestão de clínicas médicas</p></div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">${each(results, (result) => {
    return `<div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"><div class="${"absolute top-0 right-0 w-20 h-20 bg-gradient-to-br " + escape(result.gradient, true) + " opacity-5 rounded-bl-full svelte-1hijtoo"}"></div> <div class="relative"><div class="${"w-14 h-14 bg-gradient-to-br " + escape(result.gradient, true) + " rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform svelte-1hijtoo"}"><svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${add_attribute("d", result.icon, 0)}></path></svg></div> <div class="${"text-5xl font-bold bg-gradient-to-br " + escape(result.gradient, true) + " bg-clip-text text-transparent mb-2 svelte-1hijtoo"}">${escape(result.metric)}</div> <h3 class="text-lg font-bold text-gray-900 mb-2">${escape(result.title)}</h3> <p class="text-gray-600 text-sm">${escape(result.description)}</p></div> </div>`;
  })}</div>  <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"><div class="text-center mb-8" data-svelte-h="svelte-159x7jz"><h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">O que nossos clientes dizem</h3> <p class="text-gray-600">Depoimentos reais de profissionais que transformaram suas clínicas</p></div> <div class="max-w-4xl mx-auto"> <div class="relative"><div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-blue-100"><div class="flex items-start gap-6 mb-6"><div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-3xl flex-shrink-0">${escape(testimonials[currentTestimonial].avatar)}</div> <div class="flex-1"><div class="flex items-center gap-2 mb-2">${each(Array(5), (_) => {
    return `<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
  })}</div> <h4 class="text-xl font-bold text-gray-900 mb-1">${escape(testimonials[currentTestimonial].name)}</h4> <p class="text-gray-600 text-sm mb-4">${escape(testimonials[currentTestimonial].role)}</p> <p class="text-gray-700 text-lg leading-relaxed italic">&quot;${escape(testimonials[currentTestimonial].quote)}&quot;</p></div></div></div>  <div class="flex items-center justify-between mt-6"><button type="button" class="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all" aria-label="Depoimento anterior" data-svelte-h="svelte-12djkfd"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button> <div class="flex gap-2">${each(testimonials, (_, index) => {
    return `<button type="button" class="${"w-2.5 h-2.5 rounded-full transition-all " + escape(
      index === currentTestimonial ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400",
      true
    )}" aria-label="${"Ir para depoimento " + escape(index + 1, true)}"></button>`;
  })}</div> <button type="button" class="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all" aria-label="Próximo depoimento" data-svelte-h="svelte-yi82zf"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button></div></div></div></div>  <div class="mt-16 text-center" data-svelte-h="svelte-ryf55s"><div class="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"><div class="text-left"><h4 class="text-lg font-bold text-gray-900 mb-1">Quer resultados como estes?</h4> <p class="text-gray-600 text-sm">Comece sua transformação digital hoje mesmo</p></div> <div class="flex gap-3"><a href="https://upclinic-aa025.web.app/signup" class="btn bg-blue-600 hover:bg-blue-700 text-white px-6">Teste Grátis</a> <a href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20resultados%20do%20UpClinic" target="_blank" rel="noopener noreferrer" class="btn bg-green-500 hover:bg-green-600 text-white px-6">Falar no WhatsApp</a></div></div></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let demoModal;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1rnvjl8_START -->${$$result.title = `<title>UpClinic - Sistema de Gestão Médica Profissional | clinicupapp.com</title>`, ""}<meta name="description" content="Sistema completo de gestão médica com prontuário eletrônico, agendamentos inteligentes, telemedicina e muito mais. Transforme sua clínica com tecnologia de ponta."><meta property="og:title" content="UpClinic - Sistema de Gestão Médica Profissional"><meta property="og:description" content="Transforme sua clínica com tecnologia de ponta. Sistema completo de gestão médica."><meta property="og:type" content="website"><meta property="og:url" content="https://clinicupapp.com"><meta property="og:image" content="https://clinicupapp.com/favicon-64.png"><meta name="twitter:card" content="summary_large_image"><link rel="canonical" href="https://clinicupapp.com"><script type="application/ld+json" data-svelte-h="svelte-18sdkqq">{
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "UpClinic",
      "applicationCategory": "MedicalApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "1000"
      }
    }<\/script><!-- HEAD_svelte-1rnvjl8_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(FeatureGrid, "FeatureGrid").$$render($$result, {}, {}, {})} ${validate_component(ResultsShowcase, "ResultsShowcase").$$render($$result, {}, {}, {})} ${validate_component(FAQ, "FAQ").$$render($$result, {}, {}, {})}  <section class="py-24 bg-gradient-to-r from-blue-600 to-indigo-700"><div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-4xl md:text-5xl font-bold text-white mb-6" data-svelte-h="svelte-1mv2ep5">Pronto para transformar sua clínica?</h2> <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-svelte-h="svelte-16bqia1">Comece hoje mesmo e veja como o UpClinic pode revolucionar a gestão da sua clínica</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"><a href="https://upclinic-aa025.web.app/signup" class="btn bg-white text-blue-600 hover:bg-gray-100 btn-large" data-svelte-h="svelte-rmaq14">Começar Agora</a> <button type="button" class="btn btn-outline border-white text-white hover:bg-white/10 btn-large" data-svelte-h="svelte-fz6zoo">Falar com Vendas</button></div></div></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  <a href="https://wa.me/5562996720296?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20UpClinic" target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group" aria-label="Fale conosco no WhatsApp" data-svelte-h="svelte-19281vu"><svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> <span class="absolute right-20 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Fale conosco no WhatsApp</span></a> ${validate_component(FeatureDemoModal, "FeatureDemoModal").$$render(
      $$result,
      { this: demoModal },
      {
        this: ($$value) => {
          demoModal = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
