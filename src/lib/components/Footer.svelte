<script>
  import { SOCIAL, YOUTUBE_DRCARLOS_CHANNEL_URL } from '$lib/constants';
  import { t } from '$lib/i18n';

  const currentYear = new Date().getFullYear();

  /** Accordion aberto no mobile (só um por vez) */
  let openSection = '';

  function toggleSection(id) {
    openSection = openSection === id ? '' : id;
  }
</script>

<footer class="bg-gray-900 text-gray-300">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
    <!-- Brand + socials -->
    <div class="flex flex-col gap-3 sm:gap-4 mb-5 md:mb-10">
      <div class="flex items-center justify-between gap-4">
        <img
          src="/logo-upclinic-navbar.png"
          alt="UpClinic"
          class="footer-logo h-10 w-auto object-contain sm:h-14 md:h-[120px] md:max-w-[280px]"
        />
        <div class="flex items-center gap-3 shrink-0">
          {#if SOCIAL.facebook && SOCIAL.facebook !== '#'}
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          {/if}
          {#if SOCIAL.instagram && SOCIAL.instagram !== '#'}
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
          {/if}
          {#if SOCIAL.whatsapp}
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
              on:click={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_whatsapp', {
                    event_category: 'engagement',
                    event_label: 'botao_whatsapp_footer'
                  });
                }
              }}
            >
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          {/if}
        </div>
      </div>
      <p class="text-xs text-gray-500 leading-snug max-w-md md:text-sm md:text-gray-400">
        {$t('footer.desc')}
      </p>
    </div>

    <!-- Mobile: accordion compacto -->
    <div class="md:hidden border-t border-gray-800 divide-y divide-gray-800 mb-5">
      <div>
        <button
          type="button"
          class="flex w-full items-center justify-between py-3 text-left"
          aria-expanded={openSection === 'product'}
          on:click={() => toggleSection('product')}
        >
          <span class="text-sm font-semibold text-white">{$t('footer.colProduct')}</span>
          <svg class="w-4 h-4 text-gray-400 transition-transform {openSection === 'product' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {#if openSection === 'product'}
          <ul class="pb-3 space-y-2">
            <li><a href="/#funcionalidades" class="text-xs text-gray-400 hover:text-white">{$t('footer.features')}</a></li>
            <li><a href="/planos" class="text-xs text-gray-400 hover:text-white">{$t('footer.plans')}</a></li>
            <li><a href="https://upclinic-aa025.web.app/login" class="text-xs text-gray-400 hover:text-white">{$t('footer.login')}</a></li>
            <li><a href="https://upclinic-aa025.web.app/login" class="text-xs text-gray-400 hover:text-white">{$t('footer.register')}</a></li>
          </ul>
        {/if}
      </div>

      <div>
        <button
          type="button"
          class="flex w-full items-center justify-between py-3 text-left"
          aria-expanded={openSection === 'company'}
          on:click={() => toggleSection('company')}
        >
          <span class="text-sm font-semibold text-white">{$t('footer.colCompany')}</span>
          <svg class="w-4 h-4 text-gray-400 transition-transform {openSection === 'company' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {#if openSection === 'company'}
          <ul class="pb-3 space-y-2">
            <li><a href="/sobre" class="text-xs text-gray-400 hover:text-white">{$t('footer.about')}</a></li>
            <li><a href="/contato" class="text-xs text-gray-400 hover:text-white">{$t('footer.contact')}</a></li>
            <li><a href="/carreiras" class="text-xs text-gray-400 hover:text-white">{$t('footer.careers')}</a></li>
          </ul>
        {/if}
      </div>

      <div>
        <button
          type="button"
          class="flex w-full items-center justify-between py-3 text-left"
          aria-expanded={openSection === 'support'}
          on:click={() => toggleSection('support')}
        >
          <span class="text-sm font-semibold text-white">{$t('footer.colSupport')}</span>
          <svg class="w-4 h-4 text-gray-400 transition-transform {openSection === 'support' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {#if openSection === 'support'}
          <ul class="pb-3 space-y-2">
            <li><a href="/#duvidas-frequentes" class="text-xs text-gray-400 hover:text-white">{$t('footer.faq')}</a></li>
            <li><a href="/faq" class="text-xs text-gray-400 hover:text-white">{$t('footer.helpCenter')}</a></li>
            <li><a href="/contato" class="text-xs text-gray-400 hover:text-white">{$t('footer.contactUs')}</a></li>
          </ul>
        {/if}
      </div>

      <div>
        <button
          type="button"
          class="flex w-full items-center justify-between py-3 text-left"
          aria-expanded={openSection === 'legal'}
          on:click={() => toggleSection('legal')}
        >
          <span class="text-sm font-semibold text-white">{$t('footer.colLegal')}</span>
          <svg class="w-4 h-4 text-gray-400 transition-transform {openSection === 'legal' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {#if openSection === 'legal'}
          <ul class="pb-3 space-y-2">
            <li><a href="/politica-privacidade" class="text-xs text-gray-400 hover:text-white">{$t('footer.privacy')}</a></li>
            <li><a href="/termos-servico" class="text-xs text-gray-400 hover:text-white">{$t('footer.terms')}</a></li>
            <li><a href="/lgpd" class="text-xs text-gray-400 hover:text-white">{$t('footer.lgpd')}</a></li>
            <li><a href="/politica-cookies" class="text-xs text-gray-400 hover:text-white">{$t('footer.cookies')}</a></li>
            <li><a href="/codigo-conduta" class="text-xs text-gray-400 hover:text-white">{$t('footer.conduct')}</a></li>
          </ul>
        {/if}
      </div>
    </div>

    <!-- Desktop / tablet: grid de colunas -->
    <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <div>
        <h4 class="text-white font-bold mb-4 text-base">{$t('footer.colProduct')}</h4>
        <ul class="space-y-2">
          <li><a href="/#funcionalidades" class="hover:text-white transition-colors text-sm">{$t('footer.features')}</a></li>
          <li><a href="/planos" class="hover:text-white transition-colors text-sm">{$t('footer.plans')}</a></li>
          <li><a href="https://upclinic-aa025.web.app/login" class="hover:text-white transition-colors text-sm">{$t('footer.login')}</a></li>
          <li><a href="https://upclinic-aa025.web.app/login" class="hover:text-white transition-colors text-sm">{$t('footer.register')}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4 text-base">{$t('footer.colCompany')}</h4>
        <ul class="space-y-2">
          <li><a href="/sobre" class="hover:text-white transition-colors text-sm">{$t('footer.about')}</a></li>
          <li><a href="/contato" class="hover:text-white transition-colors text-sm">{$t('footer.contact')}</a></li>
          <li><a href="/carreiras" class="hover:text-white transition-colors text-sm">{$t('footer.careers')}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4 text-base">{$t('footer.colSupport')}</h4>
        <ul class="space-y-2">
          <li><a href="/#duvidas-frequentes" class="hover:text-white transition-colors text-sm">{$t('footer.faq')}</a></li>
          <li><a href="/faq" class="hover:text-white transition-colors text-sm">{$t('footer.helpCenter')}</a></li>
          <li><a href="/contato" class="hover:text-white transition-colors text-sm">{$t('footer.contactUs')}</a></li>
          <li class="text-gray-400 text-xs mt-2 leading-snug">{$t('footer.supportHoursLabel')}<br>{$t('footer.supportHours1')}<br>{$t('footer.supportHours2')}</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4 text-base">{$t('footer.colLegal')}</h4>
        <ul class="space-y-2">
          <li><a href="/politica-privacidade" class="hover:text-white transition-colors text-sm">{$t('footer.privacy')}</a></li>
          <li><a href="/termos-servico" class="hover:text-white transition-colors text-sm">{$t('footer.terms')}</a></li>
          <li><a href="/lgpd" class="hover:text-white transition-colors text-sm">{$t('footer.lgpd')}</a></li>
          <li><a href="/politica-cookies" class="hover:text-white transition-colors text-sm">{$t('footer.cookies')}</a></li>
          <li><a href="/codigo-conduta" class="hover:text-white transition-colors text-sm">{$t('footer.conduct')}</a></li>
        </ul>
      </div>
    </div>

    <!-- Contato compacto -->
    <div class="border-t border-gray-800 pt-4 md:pt-8">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm mb-4 md:mb-6 md:gap-x-8">
        <a
          href="https://wa.me/5562997016149"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors"
          on:click={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'click_whatsapp', {
                event_category: 'engagement',
                event_label: 'botao_whatsapp_footer_telefone'
              });
            }
          }}
        >
          <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (62) 99701-6149
        </a>
        <a href="mailto:upclinic8@gmail.com" class="inline-flex items-center gap-1.5 text-white hover:text-blue-400 transition-colors break-all">
          <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          upclinic8@gmail.com
        </a>
        <span class="inline-flex items-center gap-1.5 text-gray-400">
          <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {$t('footer.hoursValue')}
        </span>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 pt-4 md:pt-8 text-center">
      <p class="text-[11px] md:text-sm text-gray-400">
        &copy; {currentYear} UpClinic. {$t('footer.copyright')}
      </p>
      <p class="mx-auto mt-1.5 max-w-xl text-[10px] leading-snug text-gray-500 md:mt-2 md:text-[11px]">
        {$t('footer.videosNotePre')}
        <a
          href={YOUTUBE_DRCARLOS_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 underline decoration-gray-600 underline-offset-2 hover:text-gray-300"
          >@drcarloseurico</a
        >
        {$t('footer.videosNotePost')}
      </p>
    </div>
  </div>
</footer>

<style>
  .footer-logo {
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  }
</style>
