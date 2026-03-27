// See https://kit.svelte.dev/docs/types#app
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  // Stripe custom elements
  namespace svelteHTML {
    interface IntrinsicElements {
      'stripe-pricing-table': {
        'pricing-table-id': string;
        'publishable-key': string;
        'customer-email'?: string;
        'client-reference-id'?: string;
      };
    }
  }
}

export {};
