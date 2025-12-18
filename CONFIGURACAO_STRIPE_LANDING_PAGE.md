# 🔐 CONFIGURAÇÃO STRIPE - LANDING PAGE UPCLINIC

**Data:** 18/12/2025  
**Status:** ✅ INTEGRAÇÃO COMPLETA COM VINCULAÇÃO DE EMAIL

---

## 📋 VISÃO GERAL

A landing page do UpClinic está integrada com o Stripe Pricing Table para permitir que usuários assinem diretamente da página de planos. O sistema captura o email do usuário e o vincula automaticamente à assinatura Stripe, garantindo sincronização com o sistema principal.

---

## 🎯 FLUXO COMPLETO DO USUÁRIO

### 1. **Acesso à Página de Planos**
```
URL: https://clinicupapp.com/planos
```

### 2. **Captura de Email**
- Usuário insere email profissional
- Email é validado no formato correto
- Email é salvo no `localStorage` para futuras visitas
- Email pode ser alterado a qualquer momento

### 3. **Visualização dos Planos**
- Stripe Pricing Table carrega com `customer-email` pré-preenchido
- Usuário escolhe plano (Starter, Professional ou Enterprise)
- Período de trial de 30 dias incluído automaticamente

### 4. **Checkout no Stripe**
- Usuário é redirecionado para checkout seguro do Stripe
- Email já está vinculado à sessão
- Dados de pagamento são inseridos de forma segura

### 5. **Confirmação e Webhook**
- Stripe processa pagamento
- Webhook notifica Firebase Extension
- Collection `customers/{userId}/subscriptions` é atualizada
- Sistema UpClinic detecta assinatura ativa automaticamente

### 6. **Acesso ao Sistema**
- Usuário faz login no sistema principal com o mesmo email
- `SubscriptionGuard` verifica assinatura ativa
- Acesso é liberado automaticamente
- Trial de 30 dias se inicia (se aplicável)

---

## 🛠️ CONFIGURAÇÕES NECESSÁRIAS NO STRIPE DASHBOARD

### 1. **Criar Pricing Table**

1. Acesse: https://dashboard.stripe.com/pricing-tables
2. Clique em "Create pricing table"
3. Configure:
   - Nome: "UpClinic Landing Page Pricing"
   - ID: `prctbl_1SGjR4JgDiwrjPsttCMjYT0l` (já configurado)

### 2. **Adicionar Produtos e Preços**

#### Produto 1: UpClinic Starter
```
Nome: UpClinic Starter
Descrição: Ideal para consultórios pequenos
Preço: R$ 29,90/mês
Price ID: price_starter_monthly

Metadata:
{
  "firebaseRole": "starter",
  "trialDays": "30",
  "maxPatients": "100",
  "maxProfessionals": "2"
}
```

#### Produto 2: UpClinic Professional
```
Nome: UpClinic Professional
Descrição: Para clínicas em crescimento
Preço: R$ 59,90/mês
Price ID: price_professional_monthly

Metadata:
{
  "firebaseRole": "professional",
  "trialDays": "30",
  "maxPatients": "500",
  "maxProfessionals": "10"
}
```

#### Produto 3: UpClinic Enterprise
```
Nome: UpClinic Enterprise
Descrição: Solução completa para grandes clínicas
Preço: R$ 129,90/mês
Price ID: price_enterprise_monthly

Metadata:
{
  "firebaseRole": "enterprise",
  "trialDays": "30",
  "maxPatients": "unlimited",
  "maxProfessionals": "unlimited"
}
```

### 3. **Configurar Trial Period**

Para cada produto:
1. Clique em "Edit product"
2. Vá em "Pricing"
3. Habilite "Free trial"
4. Configure: **30 days**
5. Salve

### 4. **Configurar Webhooks**

**URL do Webhook:**
```
https://us-central1-upclinic-aa025.cloudfunctions.net/ext-firestore-stripe-payments-handleWebhookEvents
```

**Eventos Obrigatórios:**
```
✅ checkout.session.completed
✅ customer.subscription.created
✅ customer.subscription.updated
✅ customer.subscription.deleted
✅ customer.subscription.trial_will_end
✅ invoice.paid
✅ invoice.payment_failed
✅ payment_intent.succeeded
✅ payment_intent.payment_failed
```

**Configuração:**
1. Acesse: https://dashboard.stripe.com/webhooks
2. Clique em "Add endpoint"
3. Cole a URL acima
4. Selecione todos os eventos listados
5. Salve e copie o **Signing Secret**

### 5. **Configurar Firebase Extension**

No Firebase Console:
1. Vá em Extensions
2. Localize "Run Payments with Stripe"
3. Configure:
   - Stripe API Key (Secret): `sk_live_...`
   - Webhook Secret: Cole o secret do webhook
   - Products and pricing plans collection: `products`
   - Customer details collection: `customers`
   - Subscriptions collection: `subscriptions`

---

## 🔗 INTEGRAÇÃO COM O SISTEMA PRINCIPAL

### Arquivo: `frontend/src/services/subscriptionStatusService.ts`

Este serviço verifica automaticamente:
- Status da assinatura em tempo real
- Trial period ativo
- Pagamentos atrasados
- Data de renovação

### Arquivo: `frontend/src/components/subscription/SubscriptionGuard.tsx`

Componente que protege rotas:
- Verifica trial de 30 dias
- Verifica assinatura Stripe ativa
- Bloqueia acesso se ambos estiverem inativos
- Exibe modal com opções de upgrade

### Fluxo de Verificação:

```typescript
1. Usuário tenta acessar sistema
   ↓
2. SubscriptionGuard verifica trial
   ↓
3. Se trial expirou → verifica Stripe
   ↓
4. Se tem subscription ativa → libera acesso
   ↓
5. Se não tem → bloqueia e redireciona para /planos
```

---

## 📊 MONITORAMENTO E LOGS

### Logs no Console do Sistema

```javascript
🔐 [SUBSCRIPTION-STATUS] Verificando acesso
✅ [SUBSCRIPTION-STATUS] Trial ativo - acesso liberado
✅ [SUBSCRIPTION-STATUS] Subscription ativa - acesso liberado
🚫 [SUBSCRIPTION-STATUS] Sem trial nem subscription - acesso bloqueado
```

### Verificar Webhooks no Stripe

1. Acesse: https://dashboard.stripe.com/webhooks
2. Clique no webhook configurado
3. Veja histórico de eventos
4. Verifique status de entrega (200 = sucesso)

### Verificar no Firestore

Collection: `customers/{userId}/subscriptions`
```json
{
  "id": "sub_xxxxxxxxxxxxx",
  "status": "active",
  "current_period_start": 1234567890,
  "current_period_end": 1234567890,
  "created": 1234567890,
  "price": {
    "id": "price_professional_monthly",
    "unit_amount": 5990,
    "currency": "brl"
  }
}
```

---

## ⚠️ IMPORTANTE: TESTE ANTES DE USAR EM PRODUÇÃO

### Modo de Teste (Test Mode)

1. Use as chaves de teste do Stripe:
   - Publishable Key: `pk_test_...`
   - Secret Key: `sk_test_...`

2. Cartões de teste:
   - Sucesso: `4242 4242 4242 4242`
   - Falha: `4000 0000 0000 0002`
   - 3D Secure: `4000 0025 0000 3155`
   - CVC: qualquer 3 dígitos
   - Data: qualquer data futura

3. Webhook em modo de teste:
   - Configure URL separada ou use o mesmo endpoint
   - Stripe identifica automaticamente test vs live

### Modo de Produção (Live Mode)

⚠️ **Certifique-se de:**
1. Todos os webhooks estão configurados e testados
2. Products têm metadata correto
3. Trial period está configurado (30 dias)
4. Firebase Extension está com chaves live
5. SSL está ativo no domínio

---

## 🎯 CHECKLIST FINAL

Antes de ir para produção, verifique:

- [ ] Pricing Table ID está correto no código
- [ ] Publishable Key está correto (live mode)
- [ ] Webhook está recebendo eventos corretamente
- [ ] Produtos têm metadata com firebaseRole
- [ ] Trial de 30 dias está configurado
- [ ] Firebase Extension está com chaves live
- [ ] Email é capturado e vinculado corretamente
- [ ] Sistema detecta assinatura após pagamento
- [ ] Acesso é liberado automaticamente
- [ ] Trial bloqueia acesso após expiração

---

## 🆘 TROUBLESHOOTING

### Problema: "Tabela de preços não carrega"
**Solução:**
- Verifique se o script do Stripe está carregando
- Abra console do navegador e procure erros
- Confirme que `pricing-table-id` está correto

### Problema: "Email não está sendo vinculado"
**Solução:**
- Verifique se `customer-email` está sendo passado para o componente
- Confirme que o email é válido
- Teste com email diferente

### Problema: "Sistema não detecta assinatura"
**Solução:**
- Verifique webhooks no Stripe Dashboard
- Confirme que webhook está retornando 200
- Verifique collection `customers/{userId}/subscriptions` no Firestore
- Aguarde alguns segundos (webhook pode ter delay)

### Problema: "Trial não expira"
**Solução:**
- Verifique campo `endDate` em `trialUsers/{userId}`
- Confirme que `TRIAL_DURATION_HOURS` está 720 (30 dias)
- Force refresh do trial status

---

## 📞 SUPORTE

Para problemas não resolvidos:
1. Verifique logs no console do navegador
2. Verifique logs do Firestore
3. Verifique webhook logs no Stripe
4. Entre em contato com suporte técnico

---

## 🔄 ATUALIZAÇÕES FUTURAS

Melhorias planejadas:
- [ ] Adicionar planos anuais com desconto
- [ ] Implementar cupons de desconto
- [ ] Adicionar upgrade/downgrade de planos
- [ ] Criar dashboard de métricas de assinatura
- [ ] Implementar emails automáticos de renovação

---

**Desenvolvido por:** Equipe UpClinic  
**Última atualização:** 18/12/2025

