<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { initLocale } from '$lib/i18n';
  import { GOOGLE_ADS_CONVERSION_PAGE_VIEW_SEND_TO } from '$lib/constants';
  import { handleMetaPixelClick, trackPageView } from '$lib/metaPixel';

  onMount(() => {
    initLocale();

    // Lead (free-trial CTAs) + Contact (WhatsApp) — capture so preventDefault handlers still count
    document.addEventListener('click', handleMetaPixelClick, true);
    return () => {
      document.removeEventListener('click', handleMetaPixelClick, true);
    };
  });

  function fireAdsPageViewConversion() {
    const tryFire = (): boolean => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_CONVERSION_PAGE_VIEW_SEND_TO
        });
        return true;
      }
      return false;
    };
    if (tryFire()) return;
    const id = window.setInterval(() => {
      if (tryFire()) window.clearInterval(id);
    }, 150);
    window.setTimeout(() => window.clearInterval(id), 8000);
  }

  let isFirstNav = true;

  if (browser) {
    afterNavigate(({ to }) => {
      const path = to?.url.pathname ?? '';
      if (path.startsWith('/api')) return;

      fireAdsPageViewConversion();

      // Initial PageView is fired by the base snippet in app.html; fire again on SPA navigations
      if (isFirstNav) {
        isFirstNav = false;
        return;
      }
      trackPageView();
    });
  }
</script>

<slot />
