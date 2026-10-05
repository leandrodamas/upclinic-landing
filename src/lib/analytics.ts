import {
  trackCompleteRegistration as metaTrackCompleteRegistration,
  trackLead as metaTrackLead,
  trackTrialGtag
} from '$lib/metaPixel';

/**
 * Fire conversion events when a visitor starts the free-trial / signup flow
 * (click on "teste grátis" / create-account CTA → login?trial=true).
 *
 * - GA4 / Google Ads: gtag event `sign_up` (imported conversion)
 * - Meta Pixel: Lead + CompleteRegistration (deduped vs capture-phase listener)
 */
export function trackTrialCta(contentName: string, source = 'Landing'): void {
  if (typeof window === 'undefined') return;

  metaTrackLead(contentName, 'Lead:trial');
  metaTrackCompleteRegistration(contentName, 'CompleteRegistration:trial');
  trackTrialGtag(source);
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
