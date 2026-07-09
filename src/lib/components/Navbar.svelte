<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { LOGIN_URL, REGISTER_URL } from '$lib/constants';
  import { t, locale, setLocale, LANGS } from '$lib/i18n';

  let scrolled = false;
  let mobileMenuOpen = false;
  let langOpen = false;

  $: currentLang = LANGS.find((l) => l.code === $locale) ?? LANGS[0];
  $: isHomePage = $page.url.pathname === '/';
  $: onLight = scrolled || !isHomePage || mobileMenuOpen;

  $: navLinks = [
    { href: '/#funcionalidades', label: $t('nav.features') },
    { href: '/planos', label: $t('nav.plans') },
    /* CONVERSAO-LINK-INICIO */
    { href: '/comece', label: $t('nav.fill') },
    /* CONVERSAO-LINK-FIM */
    { href: '/sobre', label: $t('nav.about') },
    { href: '/contato', label: $t('nav.contact') },
  ];

  function chooseLang(code) {
    setLocale(code);
    langOpen = false;
  }

  function closeMobile() {
    mobileMenuOpen = false;
    langOpen = false;
  }

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    langOpen = false;
  }

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') closeMobile();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  });

  $: if (typeof window !== 'undefined') {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }

  function trackEvent(name, source) {
    if (typeof window === 'undefined') return;
    const eventId = crypto.randomUUID();
    if (window.fbq) {
      window.fbq('track', 'Lead', { content_name: name, content_category: 'SaaS', source }, { eventID: eventId });
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          event_id: eventId,
          event_data: { content_name: name, content_category: 'SaaS', source },
        }),
      }).catch(() => {});
    }
    if (window.gtag) {
      window.gtag('event', name === 'CTA Registro' ? 'sign_up' : 'login', {
        event_category: 'engagement',
        event_label: source,
      });
    }
  }

  function openLogin(source) {
    trackEvent('CTA Login', source);
    window.open(LOGIN_URL, '_blank');
  }

  function openRegister(source) {
    trackEvent('CTA Registro', source);
    window.open(REGISTER_URL, '_blank');
  }
</script>

<header
  class="site-header fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300
    {onLight
      ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm'
      : 'bg-transparent border-b border-transparent'}"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 lg:h-[4.25rem] items-center gap-3 lg:gap-6">
      <!-- Brand: ícone com fundo transparente + wordmark -->
      <a href="/" class="brand group flex items-center gap-2.5 shrink-0" aria-label="UpClinic" on:click={closeMobile}>
        <img
          src="/brand-mark.png?v=2"
          alt=""
          class="brand-mark"
          width="512"
          height="512"
          decoding="async"
        />
        <span
          class="brand-name font-bold tracking-tight transition-colors
            {onLight ? 'text-slate-900' : 'text-white'}"
        >UpClinic</span>
      </a>

      <!-- Desktop: links no centro -->
      <nav class="hidden lg:flex flex-1 items-center justify-center" aria-label="Principal">
        <ul class="flex items-center gap-0.5">
          {#each navLinks as item}
            <li>
              <a
                href={item.href}
                class="nav-link px-3 py-2 text-[13px] font-medium rounded-lg whitespace-nowrap transition-colors
                  {onLight
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-white/85 hover:text-white hover:bg-white/10'}"
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Desktop: ações à direita -->
      <div class="hidden lg:flex items-center gap-2 shrink-0">
        <div class="relative">
          <button
            type="button"
            class="inline-flex items-center gap-1.5 h-9 px-2.5 text-xs font-semibold rounded-lg transition-colors
              {onLight ? 'text-slate-600 hover:bg-slate-100' : 'text-white/90 hover:bg-white/10'}"
            on:click={() => (langOpen = !langOpen)}
            aria-label="Language"
            aria-expanded={langOpen}
          >
            <span class="text-sm leading-none">{currentLang.flag}</span>
            <span class="uppercase tracking-wide">{currentLang.code}</span>
            <svg class="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if langOpen}
            <div
              class="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-xl border border-slate-100 py-1 z-50"
              role="menu"
            >
              {#each LANGS as l}
                <button
                  type="button"
                  role="menuitem"
                  class="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors
                    {l.code === $locale ? 'font-bold text-blue-600' : ''}"
                  on:click={() => chooseLang(l.code)}
                >
                  <span class="text-base leading-none">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              {/each}
            </div>
          {/if}
        </div>

        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center h-9 px-3.5 text-[13px] font-semibold rounded-lg transition-colors
            {onLight
              ? 'text-slate-700 hover:bg-slate-100'
              : 'text-white/90 hover:bg-white/10'}"
          on:click|preventDefault={() => openLogin('Navbar')}
        >
          {$t('nav.login')}
        </a>

        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 h-9 px-4 text-[13px] font-bold text-white
                 bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-sm hover:shadow
                 transition-all whitespace-nowrap"
          on:click|preventDefault={() => openRegister('Navbar')}
        >
          {$t('nav.trial')}
          <svg class="w-3.5 h-3.5 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      <!-- Mobile / tablet: CTA curto + hamburger -->
      <div class="flex lg:hidden items-center gap-2 ml-auto">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center h-9 px-3 text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-sm"
          on:click|preventDefault={() => openRegister('Navbar Mobile Compact')}
        >
          {$t('nav.trial')}
        </a>
        <button
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors
            {onLight ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/15'}"
          on:click={toggleMobileMenu}
          aria-label={mobileMenuOpen ? $t('nav.close') : $t('nav.menu')}
          aria-expanded={mobileMenuOpen}
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
    </div>
  </div>
</header>

<!-- Mobile drawer -->
{#if mobileMenuOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="fixed inset-0 z-[60] lg:hidden"
    role="dialog"
    aria-modal="true"
    aria-label={$t('nav.menu')}
  >
    <button
      type="button"
      class="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
      aria-label={$t('nav.close')}
      on:click={closeMobile}
    ></button>

    <div class="absolute inset-y-0 right-0 w-full max-w-[20rem] bg-white shadow-2xl flex flex-col animate-drawer">
      <div class="flex items-center justify-between px-5 h-16 border-b border-slate-100">
        <a href="/" class="flex items-center gap-2.5" on:click={closeMobile}>
          <img
            src="/brand-mark.png?v=2"
            alt=""
            class="brand-mark brand-mark--drawer"
            width="512"
            height="512"
            decoding="async"
          />
          <span class="text-lg font-bold text-slate-900 tracking-tight">UpClinic</span>
        </a>
        <button
          type="button"
          class="w-10 h-10 inline-flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100"
          aria-label={$t('nav.close')}
          on:click={closeMobile}
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto px-3 py-4">
        <ul class="space-y-0.5">
          {#each navLinks as item}
            <li>
              <a
                href={item.href}
                class="flex items-center px-3 py-3 text-[15px] font-medium text-slate-700 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors"
                on:click={closeMobile}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>

        <div class="mt-5 px-2">
          <p class="px-1 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Idioma</p>
          <div class="flex gap-2">
            {#each LANGS as l}
              <button
                type="button"
                class="flex-1 inline-flex items-center justify-center gap-1.5 h-10 text-sm rounded-xl border transition-colors
                  {l.code === $locale
                    ? 'border-blue-600 text-blue-700 font-bold bg-blue-50'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'}"
                on:click={() => chooseLang(l.code)}
              >
                <span>{l.flag}</span>
                <span class="uppercase">{l.code}</span>
              </button>
            {/each}
          </div>
        </div>
      </nav>

      <div class="p-4 border-t border-slate-100 space-y-2 bg-slate-50/80">
        <a
          href={LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center w-full h-11 text-sm font-semibold text-slate-800 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
          on:click={() => {
            trackEvent('CTA Login', 'Navbar Mobile');
            closeMobile();
          }}
        >
          {$t('nav.loginFull')}
        </a>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 w-full h-11 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-sm transition-colors"
          on:click={() => {
            trackEvent('CTA Registro', 'Navbar Mobile');
            closeMobile();
          }}
        >
          {$t('nav.trial7')}
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Ícone completo (coração + circuito) com fundo transparente */
  .brand-mark {
    display: block;
    width: 44px;
    height: 44px;
    object-fit: contain;
    object-position: center;
    flex-shrink: 0;
  }

  .brand-mark--drawer {
    width: 48px;
    height: 48px;
  }

  .brand-name {
    font-size: 1.2rem;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  @media (min-width: 640px) {
    .brand-mark {
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 1024px) {
    .brand-mark {
      width: 52px;
      height: 52px;
    }
    .brand-name {
      font-size: 1.3rem;
    }
  }

  @keyframes drawer-in {
    from {
      transform: translateX(100%);
      opacity: 0.6;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-drawer {
    animation: drawer-in 0.22s ease-out;
  }
</style>
