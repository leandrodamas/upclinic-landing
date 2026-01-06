# 🎯 Estratégia Meta Ads para SaaS B2B - UpClinic

## 📊 Visão Geral

Este documento descreve a estratégia ideal de campanhas Meta Ads (Facebook/Instagram) para o UpClinic, um SaaS B2B de gestão médica.

## 🎯 Estrutura de Campanhas Recomendada

### CAMPANHA 1 — Aquisição (Topo do Funil)
**Objetivo:** Gerar tráfego e engajamento inicial

- **Tipo de Campanha:** Tráfego ou Engajamento
- **Evento Otimizado:** ViewContent (visualização de página)
- **Público-Alvo:**
  - Interesses: Profissionais de saúde, médicos, clínicas, gestão médica
  - Demografia: 25-65 anos, Brasil
  - Comportamento: Visitantes de sites médicos, interessados em software médico
- **Criativos:**
  - Foco na dor do profissional de saúde
  - Problemas: "Ainda gerencia sua clínica com planilhas?"
  - Benefícios: "Automatize agendamentos, prontuários e muito mais"
- **Orçamento:** 30-40% do total
- **Janela de Conversão:** 7 dias clique / 1 dia visualização

### CAMPANHA 2 — Leads (Meio do Funil)
**Objetivo:** Capturar leads qualificados

- **Tipo de Campanha:** Leads
- **Evento Otimizado:** Lead (disparado em formulários e botão "Começar Agora")
- **Público-Alvo:**
  - Visitantes do site (pixel retargeting)
  - Engajados no Instagram/Facebook (curtidas, comentários, saves)
  - Lookalike de Leads (1-3% similaridade)
  - Interesses: Software médico, gestão de clínica, prontuário eletrônico
- **Criativos:**
  - Depoimentos de clientes
  - Demonstrações de funcionalidades
  - Casos de sucesso
  - CTA direto: "Começar Agora"
- **Orçamento:** 40-50% do total
- **Janela de Conversão:** 7 dias clique / 1 dia visualização

### CAMPANHA 3 — Cadastro (Fundo do Funil)
**Objetivo:** Converter leads em cadastros reais

- **Tipo de Campanha:** Conversões
- **Evento Otimizado:** CompleteRegistration (disparado após cadastro finalizado)
- **Público-Alvo:**
  - Leads capturados (retargeting)
  - Visitantes da página de cadastro/login
  - Lookalike de CompleteRegistration (1-2% similaridade)
  - Exclusões: Usuários que já se cadastraram
- **Criativos:**
  - Teste grátis de 30 dias
  - "Sem cartão de crédito"
  - "Configure em minutos"
  - Urgência: "Comece hoje mesmo"
- **Orçamento:** 20-30% do total
- **Janela de Conversão:** 7 dias clique / 1 dia visualização

## 📈 Eventos Implementados

### 1. ViewContent (Automático)
- **Quando:** A cada visualização de página
- **Onde:** Meta Pixel base (já implementado)
- **Uso:** Otimização de campanhas de tráfego

### 2. Lead
- **Quando:** 
  - Clique no botão "Começar Agora / Entrar"
  - Envio bem-sucedido de formulário de contato
  - Envio bem-sucedido de formulário de candidatura
- **Onde:** 
  - `landing-page-upclinic/src/lib/components/Hero.svelte`
  - `landing-page-upclinic/src/routes/+page.svelte`
  - `landing-page-upclinic/src/lib/components/ContactForm.svelte`
  - `landing-page-upclinic/src/lib/components/JobApplicationForm.svelte`
- **Deduplicação:** ✅ Implementada com `event_id` único

### 3. CompleteRegistration
- **Quando:** 
  - Após cadastro bem-sucedido (criação de conta)
  - Após onboarding completo (cadastro 100% finalizado)
- **Onde:**
  - `frontend/src/contexts/AuthContext.tsx` (função `register` e `processAuthResult`)
  - `frontend/src/components/onboarding/OnboardingPage.tsx` (após finalizar onboarding)
- **Deduplicação:** ✅ Implementada com `event_id` único

## 🔄 Deduplicação Pixel + CAPI

### Como Funciona

1. **Frontend (Pixel):**
   - Gera `event_id` único usando `crypto.randomUUID()`
   - Dispara evento no Pixel com `eventID`
   - Envia o mesmo `event_id` para backend via `/api/meta-event`

2. **Backend (Conversions API):**
   - Recebe `event_id` do frontend
   - Envia evento via CAPI usando o mesmo `event_id`
   - Meta deduplica automaticamente os eventos

### Configuração Necessária

**Variáveis de Ambiente (SvelteKit):**
```env
META_ACCESS_TOKEN=seu_token_de_acesso
META_PIXEL_ID=24235377289434557
META_TEST_EVENT_CODE=opcional_para_testes
```

**Como Obter o Token:**
1. Acesse: https://business.facebook.com/events_manager2
2. Selecione seu Pixel
3. Vá em "Configurações" > "Conversions API"
4. Gere um token de acesso
5. Adicione como variável de ambiente

## 📊 Métricas e KPIs

### Campanha 1 (Aquisição)
- **CPC (Custo por Clique):** Meta: R$ 0,50 - R$ 2,00
- **CTR (Taxa de Clique):** Meta: 1-3%
- **CPM (Custo por 1000 impressões):** Meta: R$ 10 - R$ 30

### Campanha 2 (Leads)
- **CPL (Custo por Lead):** Meta: R$ 5 - R$ 20
- **Taxa de Conversão:** Meta: 2-5%
- **Qualidade de Leads:** Acompanhar no CRM

### Campanha 3 (Cadastro)
- **CPA (Custo por Aquisição):** Meta: R$ 20 - R$ 50
- **Taxa de Conversão Lead → Cadastro:** Meta: 10-20%
- **ROAS (Retorno sobre Investimento em Anúncios):** Meta: 3:1 ou melhor

## 🎨 Diretrizes de Criativos

### Formato Recomendado
- **Imagens:** 1200x628px (1.91:1)
- **Vídeos:** 1080x1080px (quadrado) ou 1080x1920px (stories)
- **Duração de Vídeo:** 15-30 segundos
- **Texto:** Máximo 125 caracteres (evitar truncamento)

### Mensagens por Estágio

**Topo (Aquisição):**
- "Transforme sua clínica com tecnologia"
- "Pare de perder pacientes por falta de organização"
- "O sistema que médicos confiam"

**Meio (Leads):**
- "Veja como outras clínicas estão crescendo"
- "Teste grátis por 30 dias"
- "Agende uma demonstração"

**Fundo (Cadastro):**
- "Comece agora, sem cartão de crédito"
- "Configure em menos de 5 minutos"
- "Junte-se a centenas de profissionais"

## ⚙️ Configurações Técnicas

### Posicionamentos
- **Recomendado:** Automático (deixar algoritmo otimizar)
- **Evitar:** Audience Network (baixa qualidade)
- **Priorizar:** Feed do Facebook, Stories, Reels

### Otimização de Lances
- **Estratégia:** Custo por Resultado (CPR)
- **Ajuste:** Automático
- **Revisão:** Semanal

### Orçamento
- **Distribuição:** Diária
- **Limite:** Diário por campanha
- **Recomendação:** Começar com R$ 50-100/dia por campanha

## 🔍 Acompanhamento e Otimização

### Semanal
- Revisar métricas de cada campanha
- Ajustar orçamentos baseado em performance
- Testar novos criativos (A/B testing)

### Mensal
- Analisar funil completo (ViewContent → Lead → CompleteRegistration)
- Identificar gargalos
- Otimizar públicos e criativos

### Trimestral
- Revisar estratégia geral
- Ajustar estrutura de campanhas
- Definir novos objetivos

## 📝 Checklist de Implementação

- [x] Meta Pixel instalado e funcionando
- [x] Evento Lead implementado (botões e formulários)
- [x] Evento CompleteRegistration implementado
- [x] Deduplicação Pixel + CAPI configurada
- [ ] Token de acesso CAPI configurado
- [ ] Campanhas criadas no Meta Ads Manager
- [ ] Pixels de conversão configurados
- [ ] Criativos desenvolvidos
- [ ] Públicos-alvo criados
- [ ] Orçamentos definidos

## 🚀 Próximos Passos

1. **Configurar CAPI:**
   - Obter token de acesso
   - Adicionar variáveis de ambiente
   - Testar endpoint `/api/meta-event`

2. **Criar Campanhas:**
   - Começar com Campanha 2 (Leads) - maior ROI esperado
   - Depois Campanha 3 (Cadastro) - conversão direta
   - Por último Campanha 1 (Aquisição) - escala

3. **Desenvolver Criativos:**
   - 3-5 variações por campanha
   - Testar diferentes mensagens
   - Usar imagens profissionais

4. **Monitorar e Otimizar:**
   - Acompanhar diariamente na primeira semana
   - Ajustar lances e orçamentos
   - Pausar criativos com baixa performance

## 📚 Recursos Adicionais

- [Meta Business Help Center](https://www.facebook.com/business/help)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Conversions API Guide](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Meta Ads Manager](https://business.facebook.com/adsmanager)

---

**Última atualização:** Janeiro 2025  
**Versão:** 1.0  
**Mantido por:** Equipe UpClinic

