import { c as create_ssr_component, i as compute_rest_props, j as spread, k as escape_attribute_value, l as escape_object, v as validate_component, f as add_attribute, e as escape } from "./ssr.js";
const CONTACT = {
  whatsappLink: "https://wa.me/5562996720296",
  email: "contato@clinicupapp.com",
  phone: "(62) 99672-0296"
};
const SOCIAL = {
  facebook: "https://www.facebook.com/Upclinicapp/",
  instagram: "https://www.instagram.com/upclinicapp/",
  whatsapp: CONTACT.whatsappLink
};
const ImageWithFallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "alt", "fallback", "loading"]);
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { fallback = "" } = $$props;
  let { loading = "lazy" } = $$props;
  let currentSrc = src || fallback || "";
  let hasError = false;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0) $$bindings.fallback(fallback);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  {
    {
      if (src && src !== currentSrc && !hasError) {
        currentSrc = src;
        hasError = false;
      } else if (!src && fallback && fallback !== currentSrc && !hasError) {
        currentSrc = fallback;
        hasError = false;
      }
    }
  }
  return `<img${spread(
    [
      { src: escape_attribute_value(currentSrc) },
      { alt: escape_attribute_value(alt) },
      { loading: escape_attribute_value(loading) },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="bg-gray-900 text-gray-300"><div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> <div class="lg:col-span-1"><div class="flex items-center mb-4">${validate_component(ImageWithFallback, "ImageWithFallback").$$render(
    $$result,
    {
      src: "/logo-upclinic.png",
      alt: "UpClinic Logo",
      class: "h-12 w-auto object-contain",
      fallback: "/logo-upclinic.png"
    },
    {},
    {}
  )}</div> <p class="text-sm text-gray-400 mb-6" data-svelte-h="svelte-a8jor9">Sistema completo de gestão médica e clínica. 
          Transformando a saúde com tecnologia.</p> <div class="flex space-x-4">${`<a${add_attribute("href", SOCIAL.facebook, 0)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook" data-svelte-h="svelte-1hin7bp"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>`} ${`<a${add_attribute("href", SOCIAL.instagram, 0)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" data-svelte-h="svelte-co8i03"><svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg></a>`} ${``} ${`<a${add_attribute("href", SOCIAL.whatsapp, 0)} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp" data-svelte-h="svelte-1ydri5f"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg></a>`}</div></div>  <div data-svelte-h="svelte-u1oelv"><h4 class="text-white font-bold mb-4">Produto</h4> <ul class="space-y-2"><li><a href="/#funcionalidades" class="hover:text-white transition-colors">Funcionalidades</a></li> <li><a href="/planos" class="hover:text-white transition-colors">Planos</a></li> <li><a href="https://upclinic-aa025.web.app/" class="hover:text-white transition-colors">Login</a></li> <li><a href="https://upclinic-aa025.web.app/signup" class="hover:text-white transition-colors">Cadastro</a></li></ul></div>  <div data-svelte-h="svelte-wwvllj"><h4 class="text-white font-bold mb-4">Empresa</h4> <ul class="space-y-2"><li><a href="/sobre" class="hover:text-white transition-colors">Sobre Nós</a></li> <li><a href="/contato" class="hover:text-white transition-colors">Contato</a></li> <li><a href="/carreiras" class="hover:text-white transition-colors">Carreiras</a></li></ul></div>  <div data-svelte-h="svelte-rsp3ax"><h4 class="text-white font-bold mb-4">Suporte</h4> <ul class="space-y-2"><li><a href="/#duvidas-frequentes" class="hover:text-white transition-colors">Dúvidas Frequentes</a></li> <li><a href="/faq" class="hover:text-white transition-colors">Central de Ajuda</a></li> <li><a href="/documentacao" class="hover:text-white transition-colors">Documentação</a></li> <li><a href="/contato" class="hover:text-white transition-colors">Fale Conosco</a></li></ul></div>  <div data-svelte-h="svelte-nyo1kv"><h4 class="text-white font-bold mb-4">Legal</h4> <ul class="space-y-2"><li><a href="/politica-privacidade" class="hover:text-white transition-colors">Política de Privacidade</a></li> <li><a href="/termos-servico" class="hover:text-white transition-colors">Termos de Uso</a></li> <li><a href="/lgpd" class="hover:text-white transition-colors">LGPD</a></li> <li><a href="/politica-cookies" class="hover:text-white transition-colors">Política de Cookies</a></li> <li><a href="/codigo-conduta" class="hover:text-white transition-colors">Código de Conduta</a></li></ul></div></div>  <div class="border-t border-gray-800 pt-8" data-svelte-h="svelte-19wibrd"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div class="flex items-center space-x-3"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <div><div class="text-sm text-gray-400">Telefone / WhatsApp</div> <a href="https://wa.me/5562996720296" target="_blank" rel="noopener noreferrer" class="text-white hover:text-blue-400 transition-colors">(62) 99672-0296</a></div></div> <div class="flex items-center space-x-3"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <div><div class="text-sm text-gray-400">Email</div> <a href="mailto:contato@clinicupapp.com" class="text-white hover:text-blue-400 transition-colors">contato@clinicupapp.com</a></div></div> <div class="flex items-center space-x-3"><svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div><div class="text-sm text-gray-400">Horário de Atendimento</div> <div class="text-white">Segunda a Sexta: 8h às 18h</div></div></div></div></div>  <div class="border-t border-gray-800 pt-8 text-center"><p class="text-sm text-gray-400">© ${escape(currentYear)} UpClinic. Todos os direitos reservados.</p></div></div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + escape(
    "bg-transparent",
    true
  )}"><div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-20"> <a href="/" class="flex items-center group">${validate_component(ImageWithFallback, "ImageWithFallback").$$render(
    $$result,
    {
      src: "/logo-upclinic.png",
      alt: "UpClinic Logo",
      class: "h-12 w-auto object-contain",
      fallback: "/logo-upclinic.png"
    },
    {},
    {}
  )}</a>  <div class="hidden md:flex items-center space-x-8" data-svelte-h="svelte-idkop6"><a href="/#inicio" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a> <a href="/#funcionalidades" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Funcionalidades</a> <a href="/planos" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Planos</a> <a href="/sobre" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</a> <a href="/contato" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a> <a href="https://upclinic-aa025.web.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Entrar</a></div>  <button class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" aria-label="Toggle menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`}</svg></button></div>  ${``}</div></nav>`;
});
export {
  CONTACT as C,
  Footer as F,
  Navbar as N
};
