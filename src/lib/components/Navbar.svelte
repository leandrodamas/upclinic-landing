<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { LOGIN_URL, REGISTER_URL } from '$lib/constants';
  import { t, locale, setLocale, LANGS } from '$lib/i18n';

  let scrolled = false;
  let mobileMenuOpen = false;
  let langOpen = false;

  $: currentLang = LANGS.find((l) => l.code === $locale) ?? LANGS[0];

  function chooseLang(code) {
    setLocale(code);
    langOpen = false;
    mobileMenuOpen = false;
  }

  // Só usa fundo transparente com texto branco na home page (que tem o vídeo escuro)
  $: isHomePage = $page.url.pathname === '/';
  $: darkNav = scrolled || !isHomePage; // true = fundo branco + texto escuro

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileMenu() { mobileMenuOpen = !mobileMenuOpen; }

  function trackEvent(name, source) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: name, content_category: 'SaaS', source }, { eventID: eventId });
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_name: 'Lead', event_id: eventId, event_data: { content_name: name, content_category: 'SaaS', source } })
      }).catch(() => {});
    }
    if (window.gtag) {
      window.gtag('event', name === 'CTA Registro' ? 'sign_up' : 'login', { event_category: 'engagement', event_label: source });
    }
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
  {darkNav || mobileMenuOpen
    ? 'bg-white/95 backdrop-blur-md shadow-md'
    : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-none'}">

  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-18 md:h-20">

      <!-- Logo -->
      <a href="/" class="flex items-center group">
        <img
          src={darkNav ? '/favicon-64.png' : '/logo-upclinic-navbar.png'}
          alt="UpClinic"
          class="logo-img"
          class:logo-scrolled={darkNav}
        />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-6 lg:space-x-8">

        <!-- Links: brancos no hero (fundo escuro), cinza escuro após scroll -->
        {#each [
          { href: '/#funcionalidades', label: $t('nav.features') },
          { href: '/planos',           label: $t('nav.plans') },
          /* CONVERSAO-LINK-INICIO — apague esta linha e o bloco no mobile para remover /comece do menu */
          { href: '/comece',           label: $t('nav.fill') },
          /* CONVERSAO-LINK-FIM */
          { href: '/sobre',            label: $t('nav.about') },
          { href: '/contato',          label: $t('nav.contact') },
        ] as item}
          <a
            href={item.href}
            class="font-semibold transition-colors duration-200 text-sm lg:text-base
              {darkNav
                ? 'text-gray-700 hover:text-blue-600'
                : 'text-white/90 hover:text-white drop-shadow-sm'}"
          >
            {item.label}
          </a>
        {/each}

        <!-- Entrar no UpClinic: adapta cor conforme scroll -->
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg
                 transition-all duration-200 whitespace-nowrap border-2
            {darkNav
              ? 'text-blue-600 border-blue-600 hover:bg-blue-50'
              : 'text-white border-white/70 hover:border-white hover:bg-white/10'}"
          on:click|preventDefault={() => { trackEvent('CTA Login', 'Navbar'); window.open(LOGIN_URL, '_blank'); }}
        >
          {$t('nav.login')}
        </a>

        <!-- Iniciar Teste Grátis: sempre verde, sempre visível -->
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white
                 bg-green-500 hover:bg-green-600 rounded-lg shadow-md hover:shadow-lg
                 hover:scale-105 transition-all duration-200 whitespace-nowrap"
          on:click|preventDefault={() => { trackEvent('CTA Registro', 'Navbar'); window.open(REGISTER_URL, '_blank'); }}
        >
          {$t('nav.trial')}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <!-- Seletor de idioma -->
        <div class="relative">
          <button
            type="button"
            class="inline-flex items-center gap-1.5 px-2.5 py-2 text-sm font-semibold rounded-lg transition-colors
              {darkNav ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}"
            on:click={() => (langOpen = !langOpen)}
            aria-label="Language"
            aria-expanded={langOpen}
          >
            <span class="text-base leading-none">{currentLang.flag}</span>
            <span class="uppercase">{currentLang.code}</span>
            <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {#if langOpen}
            <div class="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl border border-gray-100 py-1 z-50">
              {#each LANGS as l}
                <button
                  type="button"
                  class="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors {l.code === $locale ? 'font-bold text-blue-600' : ''}"
                  on:click={() => chooseLang(l.code)}
                >
                  <span class="text-base leading-none">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- Mobile Menu Button: ícone branco no hero, cinza após scroll -->
      <button
        class="md:hidden p-2 rounded-lg transition-colors
          {darkNav ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/15'}"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if mobileMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu: sempre fundo branco (aparece sobre qualquer seção) -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 space-y-2 bg-white rounded-xl mt-2 shadow-xl border border-gray-100 px-2">
        <a href="/#funcionalidades" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>{$t('nav.features')}</a>
        <a href="/planos" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>{$t('nav.plans')}</a>
        <!-- CONVERSAO-LINK-INICIO -->
        <a href="/comece" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>{$t('nav.fill')}</a>
        <!-- CONVERSAO-LINK-FIM -->
        <a href="/sobre" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>{$t('nav.about')}</a>
        <a href="/contato" class="block text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-colors" on:click={() => mobileMenuOpen = false}>{$t('nav.contact')}</a>
        <div class="flex items-center gap-2 px-3 py-2">
          {#each LANGS as l}
            <button
              type="button"
              class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm rounded-lg border transition-colors {l.code === $locale ? 'border-blue-600 text-blue-600 font-bold bg-blue-50' : 'border-gray-200 text-gray-600'}"
              on:click={() => chooseLang(l.code)}
            >
              <span class="text-base leading-none">{l.flag}</span>
              <span class="uppercase">{l.code}</span>
            </button>
          {/each}
        </div>
        <div class="pt-2 space-y-2 border-t border-gray-100 mt-2">
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            on:click={() => { trackEvent('CTA Login', 'Navbar Mobile'); mobileMenuOpen = false; }}
          >
            {$t('nav.login')}
          </a>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-bold text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-md transition-all"
            on:click={() => { trackEvent('CTA Registro', 'Navbar Mobile'); mobileMenuOpen = false; }}
          >
            {$t('nav.trial7')}
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<style>
  /* Sobre fundo escuro (hero) — logo grande e bem visível */
  .logo-img {
    height: 110px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6));
    transition: filter 0.3s ease, height 0.3s ease;
  }

  /* Sobre fundo branco (páginas internas / após scroll) — favicon colorido, levemente menor */
  .logo-scrolled {
    height: 64px;
    filter: none;
  }

  @media (max-width: 768px) {
    .logo-img { height: 80px; }
    .logo-scrolled { height: 52px; }
  }
</style>
