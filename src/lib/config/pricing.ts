/**
 * Plan prices for the marketing site.
 *
 * Plan IDs stay starter / professional / enterprise so app deep-links and
 * analytics labels keep working. Display names map to Solo / Clínica-Studio /
 * Clínica Plus.
 *
 * Public catalog prices (CURRENT_PRICING) are the new list prices.
 * Founder Stripe Payment Links still charge the launch prices (R$ 29,90 / 59,90)
 * and must ONLY be used in the Clínica Fundadora block.
 *
 * New-price Stripe links: set PUBLIC_STRIPE_* env vars when created. Until then,
 * "Já quero assinar" on the public cards falls back to the free-trial signup.
 */

import { REGISTER_URL } from '$lib/constants';

export type PlanId = 'starter' | 'professional' | 'enterprise';
export type BillingInterval = 'monthly' | 'annual';

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
  'Preços públicos novos (Solo/Clínica/Clínica Plus). Links Stripe de fundador = preços de lançamento.';

/** Easy-to-edit founder spots counter (shown as "Vagas restantes: N"). */
export const FOUNDER_SPOTS_REMAINING = 50;

/** Deadline copy for the Clínica Fundadora offer. */
export const FOUNDER_DEADLINE = '30/11/2026';

/** Launch prices charged by the existing Stripe Payment Links (fundadores). */
export const FOUNDER_PRICING = {
  starter: { monthly: 29.9, annual: 299.0 },
  professional: { monthly: 59.9, annual: 599.0 }
} as const;

/** Public list prices (BRL). Annual = 10× monthly (2 months free). */
export const CURRENT_PRICING: Record<PlanId, { monthly: number; annual: number }> = {
  starter: { monthly: 59.0, annual: 590.0 },
  professional: { monthly: 129.0, annual: 1290.0 },
  enterprise: { monthly: 249.0, annual: 2490.0 }
};

export const PLAN_CATALOG: PlanPricing[] = [
  {
    id: 'starter',
    name: 'Solo',
    tagline: '1 profissional — consultório solo de fisioterapia ou pilates',
    monthly: CURRENT_PRICING.starter.monthly,
    annual: CURRENT_PRICING.starter.annual,
    accent: '#34d399',
    popular: false,
    features: [
      'Agenda para 1 profissional',
      'Prontuário e evolução por sessão',
      'Lembretes no WhatsApp (sem cobrança por msg)',
      'Cobrança de mensalidade / financeiro básico',
      'Check-in Wellhub / TotalPass',
      'Suporte por e-mail'
    ]
  },
  {
    id: 'professional',
    name: 'Clínica / Studio',
    tagline: 'Até 5 profissionais — clínicas e studios de pilates',
    monthly: CURRENT_PRICING.professional.monthly,
    annual: CURRENT_PRICING.professional.annual,
    accent: '#60a5fa',
    popular: true,
    features: [
      'Até 5 profissionais',
      'Pacientes ilimitados',
      'IA para apoio à evolução',
      'Cobrança recorrente / mensalidade',
      'WhatsApp sem cobrança por mensagem',
      'Check-in Wellhub / TotalPass',
      'Suporte prioritário'
    ]
  },
  {
    id: 'enterprise',
    name: 'Clínica Plus',
    tagline: 'Até 15 profissionais (+ R$ 15 por profissional extra)',
    monthly: CURRENT_PRICING.enterprise.monthly,
    annual: CURRENT_PRICING.enterprise.annual,
    accent: '#c4b5fd',
    popular: false,
    features: [
      'Até 15 profissionais (+ R$ 15 / extra)',
      'Home Care com GPS',
      'IA completa + convênios',
      'WhatsApp sem cobrança por mensagem',
      'Gestor dedicado',
      'Suporte estendido'
    ]
  }
];

/**
 * Existing Stripe Payment Links — founder / launch prices only.
 * Do NOT wire these to the new public price cards.
 */
export const FOUNDER_STRIPE_PAYMENT_LINKS = {
  starter: {
    monthly: 'https://buy.stripe.com/eVq7sM2iad8Qe9U6URdnW00',
    annual: 'https://buy.stripe.com/fZucN66yq4Ck8PA92ZdnW01'
  },
  professional: {
    monthly: 'https://buy.stripe.com/4gM7sMf4W8SAfdYbb7dnW02',
    annual: 'https://buy.stripe.com/8x25kE5um7Ow1n8frndnW03'
  }
} as const;

/** @deprecated Use FOUNDER_STRIPE_PAYMENT_LINKS or publicCheckoutUrl(). Kept for imports. */
export const STRIPE_PAYMENT_LINKS = {
  starter: FOUNDER_STRIPE_PAYMENT_LINKS.starter,
  professional: FOUNDER_STRIPE_PAYMENT_LINKS.professional,
  enterprise: {
    monthly: 'https://buy.stripe.com/eVqfZi6yq5Go7LwgvrdnW04',
    annual: 'https://buy.stripe.com/4gMcN6e0SfgYaXIgvrdnW05'
  }
} as const;

function envStripeLink(key: string): string {
  const v = (import.meta.env[key] as string | undefined)?.trim();
  return v || '';
}

/**
 * Configurable Stripe Payment Links for the NEW public prices.
 * Set on Vercel when the new Stripe products exist:
 *   PUBLIC_STRIPE_SOLO_MONTHLY / PUBLIC_STRIPE_SOLO_ANNUAL
 *   PUBLIC_STRIPE_CLINICA_MONTHLY / PUBLIC_STRIPE_CLINICA_ANNUAL
 *   PUBLIC_STRIPE_PLUS_MONTHLY / PUBLIC_STRIPE_PLUS_ANNUAL
 * (Aliases with STARTER/PROFESSIONAL/ENTERPRISE also accepted.)
 */
export const PUBLIC_STRIPE_PAYMENT_LINKS: Record<
  PlanId,
  { monthly: string; annual: string }
> = {
  starter: {
    monthly:
      envStripeLink('PUBLIC_STRIPE_SOLO_MONTHLY') ||
      envStripeLink('PUBLIC_STRIPE_STARTER_MONTHLY'),
    annual:
      envStripeLink('PUBLIC_STRIPE_SOLO_ANNUAL') ||
      envStripeLink('PUBLIC_STRIPE_STARTER_ANNUAL')
  },
  professional: {
    monthly:
      envStripeLink('PUBLIC_STRIPE_CLINICA_MONTHLY') ||
      envStripeLink('PUBLIC_STRIPE_PROFESSIONAL_MONTHLY'),
    annual:
      envStripeLink('PUBLIC_STRIPE_CLINICA_ANNUAL') ||
      envStripeLink('PUBLIC_STRIPE_PROFESSIONAL_ANNUAL')
  },
  enterprise: {
    monthly:
      envStripeLink('PUBLIC_STRIPE_PLUS_MONTHLY') ||
      envStripeLink('PUBLIC_STRIPE_ENTERPRISE_MONTHLY'),
    annual:
      envStripeLink('PUBLIC_STRIPE_PLUS_ANNUAL') ||
      envStripeLink('PUBLIC_STRIPE_ENTERPRISE_ANNUAL')
  }
};

/** Trial signup URL, optionally with plan hint for the app. */
export function trialUrlForPlan(planId?: PlanId): string {
  if (!planId) return REGISTER_URL;
  const sep = REGISTER_URL.includes('?') ? '&' : '?';
  return `${REGISTER_URL}${sep}plan=${planId}`;
}

/**
 * Checkout for the public price table.
 * Uses env Stripe links when set; otherwise falls back to trial (never old founder links).
 */
export function publicCheckoutUrl(planId: PlanId, annual: boolean): string {
  const url = annual
    ? PUBLIC_STRIPE_PAYMENT_LINKS[planId].annual
    : PUBLIC_STRIPE_PAYMENT_LINKS[planId].monthly;
  return url || trialUrlForPlan(planId);
}

export function founderCheckoutUrl(
  planId: 'starter' | 'professional',
  annual: boolean
): string {
  return annual
    ? FOUNDER_STRIPE_PAYMENT_LINKS[planId].annual
    : FOUNDER_STRIPE_PAYMENT_LINKS[planId].monthly;
}

export function formatBrl(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
