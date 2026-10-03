import { REGISTER_URL } from '$lib/constants';
import { trackLead as metaTrackLead } from '$lib/metaPixel';

/**
 * Fire Meta Lead + Google Ads conversion-ready generate_lead on free-trial CTAs.
 * Safe to call from click handlers; Meta click listener may also fire Lead (deduped).
 */
export function trackTrialCta(contentName: string, source = 'Landing'): void {
  if (typeof window === 'undefined') return;

  metaTrackLead(contentName, `Lead:${REGISTER_URL}`);

  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: source,
      value: 1,
      currency: 'BRL'
    });
    // Keep legacy engagement event for existing GA reports
    window.gtag('event', 'sign_up', {
      event_category: 'engagement',
      event_label: source
    });
  }
}

export function trackWhatsAppClick(label: string): void {
  if (typeof window === 'undefined') return;
  if (window.gtag) {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'engagement',
      event_label: label
    });
  }
}
