# Stripe Payment Links → `/obrigado`

## Success URL (obrigatório para Ads/Meta)

Nos Payment Links públicos (Solo / Clínica / Plus — W06–W0b), configure o redirect pós-pagamento:

```
https://clinicupapp.com/obrigado?session_id={CHECKOUT_SESSION_ID}
```

### Stripe Dashboard (manual)

1. Abra [Payment Links](https://dashboard.stripe.com/payment-links).
2. Edite cada link público (Solo/Clínica/Plus, mensal e anual).
3. Aba **After payment** → **Don’t show confirmation page**.
4. Cole a URL acima (com o placeholder literal `{CHECKOUT_SESSION_ID}`).
5. Salve.

### API (equivalente)

```text
POST /v1/payment_links/{id}
after_completion[type]=redirect
after_completion[redirect][url]=https://clinicupapp.com/obrigado?session_id={CHECKOUT_SESSION_ID}
```

O repositório **não** guarda `sk_live` e não atualiza links automaticamente no deploy.

**Status (Out/2026):** os 6 Payment Links públicos Solo/Clínica/Plus (`landing_2026_public`, buy.stripe.com …W06–W0b) já foram atualizados via API para:

`https://clinicupapp.com/obrigado?session_id={CHECKOUT_SESSION_ID}`

Confirme no Dashboard se algum link novo for criado depois. Links de fundador (W00–W05) continuam redirecionando para o login do app com trial — fora do escopo desta página.

## Query params suportados em `/obrigado`

| Param | Origem | Uso |
| --- | --- | --- |
| `session_id` | Stripe `{CHECKOUT_SESSION_ID}` | `transaction_id` / dedupe Purchase |
| `amount` / `value` / `amount_total` | opcional, só se você passar o valor real | `value` nos eventos (nunca inventado) |
| `currency` | opcional (default `BRL`) | moeda dos eventos |

Payment Links **não** enviam o valor automaticamente na URL — só o `session_id`. Sem amount na query, os eventos de compra disparam **sem** `value`.
