<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { onMount } from 'svelte';
  import { initLocale } from '$lib/i18n';
  import { GOOGLE_ADS_CONVERSION_PAGE_VIEW_SEND_TO } from '$lib/constants';
  import { handleMetaPixelClick, trackPageView } from '$lib/metaPixel';
  import {
    captureFirstTouchUtm,
    decorateAppLinks,
    installAppLinkAttribution
  } from '$lib/utm';

  onMount(() => {
    initLocale();

    // First-touch UTMs on every page (incl. /teste): localStorage + cookie
    captureFirstTouchUtm(window.location.search);
    const stopAttribution = installAppLinkAttribution();

    // Lead (free-trial CTAs) + Contact (WhatsApp) — capture so preventDefault handlers still count
    document.addEventListener('click', handleMetaPixelClick, true);
    return () => {
      stopAttribution();
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

      // Re-capture on SPA navigations (query may carry UTMs); decorate CTAs after render
      captureFirstTouchUtm(to?.url.search ?? window.location.search);
      // Defer so Svelte has painted hrefs from constants
      queueMicrotask(() => decorateAppLinks());
      requestAnimationFrame(() => decorateAppLinks());

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
