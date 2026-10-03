/**
 * Plan prices for the marketing site.
 *
 * TODO(owner): Confirm against private app repo `leandrodamas/upclinic`
 * at `frontend/src/config/pricing.ts` (CURRENT_PRICING STARTER/PROFESSIONAL/ENTERPRISE).
 * That repo was not readable from this environment (404). Values below match the
 * Stripe payment links already wired on `/planos` and CONFIGURACAO_STRIPE_LANDING_PAGE.md.
 */

export type PlanId = 'starter' | 'professional' | 'enterprise';

export type PlanPricing = {
  id: PlanId;
  /** Display name (pt-BR marketing). */
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  accent: string;
  popular: boolean;
  features: string[];
};

export const PRICING_SOURCE_NOTE =
  'Valores alinhados aos Stripe Payment Links da landing; confirmar com pricing.ts do app.';

/** Monthly / annual BRL amounts (annual = total billed once per year). */
export const CURRENT_PRICING: Record<PlanId, { monthly: number; annual: number }> = {
  starter: { monthly: 29.9, annual: 299.0 },
  professional: { monthly: 59.9, annual: 599.0 },
  enterprise: { monthly: 129.9, annual: 1299.0 }
};

export const PLAN_CATALOG: PlanPricing[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal para consultório solo de fisioterapia',
    monthly: CURRENT_PRICING.starter.monthly,
    annual: CURRENT_PRICING.starter.annual,
    accent: '#34d399',
    popular: false,
    features: [
      'Agenda para 1 profissional',
      'Prontuário e evolução do paciente',
      'Lembretes no WhatsApp (sem cobrança por msg)',
      'Financeiro básico',
      'Check-in Wellhub / TotalPass',
      'Suporte por e-mail'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Para clínicas e studios de pilates',
    monthly: CURRENT_PRICING.professional.monthly,
    annual: CURRENT_PRICING.professional.annual,
    accent: '#60a5fa',
    popular: true,
    features: [
      'Até 5 profissionais',
      'Pacientes ilimitados',
      'IA para apoio à evolução',
      'Cobrança recorrente',
      'WhatsApp sem cobrança por mensagem',
      'Suporte prioritário'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Para redes e clínicas maiores',
    monthly: CURRENT_PRICING.enterprise.monthly,
    annual: CURRENT_PRICING.enterprise.annual,
    accent: '#c4b5fd',
    popular: false,
    features: [
      'Profissionais ilimitados',
      'Home Care com GPS',
      'IA completa + convênios',
      'WhatsApp sem cobrança por mensagem',
      'Gestor dedicado',
      'Suporte estendido'
    ]
  }
];

export const STRIPE_PAYMENT_LINKS = {
  starter: {
    monthly: 'https://buy.stripe.com/eVq7sM2iad8Qe9U6URdnW00',
    annual: 'https://buy.stripe.com/fZucN66yq4Ck8PA92ZdnW01'
  },
  professional: {
    monthly: 'https://buy.stripe.com/4gM7sMf4W8SAfdYbb7dnW02',
    annual: 'https://buy.stripe.com/8x25kE5um7Ow1n8frndnW03'
  },
  enterprise: {
    monthly: 'https://buy.stripe.com/eVqfZi6yq5Go7LwgvrdnW04',
    annual: 'https://buy.stripe.com/4gMcN6e0SfgYaXIgvrdnW05'
  }
} as const;

export function formatBrl(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
