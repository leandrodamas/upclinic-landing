// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		// interface PageProps {}
		// interface LayoutProps {}
	}
	
	interface Window {
		StripePricingTable?: any;
		fbq?: (action: string, event: string, params?: any) => void;
	}
	
	// Declaração do elemento customizado do Stripe
	namespace JSX {
		interface IntrinsicElements {
			'stripe-pricing-table': {
				'pricing-table-id': string;
				'publishable-key': string;
			};
		}
	}
}

export {};

