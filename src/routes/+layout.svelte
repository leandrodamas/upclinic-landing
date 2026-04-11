<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { afterNavigate } from '$app/navigation';
  import { GOOGLE_ADS_CONVERSION_PAGE_VIEW_SEND_TO } from '$lib/constants';

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

  if (browser) {
    afterNavigate(({ to }) => {
      const path = to?.url.pathname ?? '';
      if (path.startsWith('/api')) return;
      fireAdsPageViewConversion();
    });
  }
</script>

<slot />
