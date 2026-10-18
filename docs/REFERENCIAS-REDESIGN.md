# Referências internacionais — redesign UpClinic (rodada energética)

Estudo de landing pages de softwares de gestão de fisioterapia, pilates e clínicas que mais convertem (Europa, EUA/Canadá, Ásia, África, Rússia, Japão, China). Foco em padrões de conversão — **sem** copiar textos, assets ou marca.

---

## Principal (Brasil)

### Seu Fisio — https://www.seufisio.com/
**O que converte (adaptado):**
- Paleta **laranja energética** + fundo claro (não teal calmante)
- Hero denso: mockup notebook + **vários personagens/fotos** ao redor
- Headline forte + CTA “teste X dias” repetido
- Bloco “para quem é” por público (Pilates, Fisio, etc.)
- Hero que muda a cada visita (variantes)
- Prova social visual (fotos reais de studios) — no UpClinic: só fotos reais nossas / placeholder sem depoimentos inventados

**Incorporado:** laranja como cor principal, CTAs fortes, avatares flutuantes no hero, urgência leve “teste grátis 7 dias”, hero rotativo.

---

## Europa / Oceania / Reino Unido

### Cliniko (AU/UK/EU) — https://www.cliniko.com/
- Hero benefício claro (“practice management for clinics and allied health”)
- **Preço transparente por nº de profissionais** + trial 30 dias sem cartão
- Segurança e suporte ilimitado como faixas de confiança
- CTA único e repetido (“Free for 30 days”)
**Pegamos:** trial sem cartão bem visível; trust chips (LGPD, suporte); hierarquia Z (marca → headline → CTA → mockup).

### Jane App (CA/US/UK) — https://jane.app/
- Headline empática + produto em mockup grande no hero
- Tabs de módulos (Scheduling, Charting, Billing…)
- Pilha de “trusted by” + comunidade
- CTA “See Jane run your practice”
**Pegamos:** mockup de produto dominante; seções por módulo; avatares/pilha “profissionais usando”.

### Physitrack (NL/global) — https://www.physitrack.com/
- Segmentação por tamanho de prática (small / mid / enterprise)
- Trial curto (14 dias) + “get started in minutes”
- Vídeo “in 2 min” e biblioteca visual de exercícios
**Pegamos:** urgência leve do trial; mini vídeos; “configure em minutos”.

### Doctolib Pro (FR/EU) — https://pro.doctolib.com/
- Hero com benefício + prova de escala
- Dores → solução com ícones
- CTAs repetidos; compliance
**Pegamos:** padrão dor→solução; CTAs recorrentes para `/teste`.

### Nookal (AU/NZ) — https://www.nookal.com/
- “See how Nookal works for” por especialidade (Physios, OTs, Osteos…)
- Features densas + AI charting
- Depoimentos com nome/cargo/clínica
**Pegamos:** audiência por especialidade (AudienceForWho); UI animada de agenda/prontuário no mockup.

### Clinicmaster (CA) — https://clinicmaster.com/
- Foco multi-unidade + AI charting + outcomes (NPRS, DASH)
- Números de escala só quando reais
**Pegamos:** linguagem de outcomes clínicos (evolução) sem inventar métricas.

### Timify (EU) — scheduling multi-sala
- Agendamento de salas/equipamentos + staff
**Pegamos:** narrativa de agenda inteligente e recursos (sem overclaim).

### Mindbody (US/global fitness/pilates) — https://www.mindbodyonline.com/
- Hero animado; marketplace + retenção
- Vídeos de depoimento; stats grandes (só usamos o padrão visual, **não** números inventados)
**Pegamos:** movimento no hero; mini vídeos; energia fitness/pilates.

---

## EUA / Canadá (rehab)

### WebPT — https://www.webpt.com/
- Headlines curtas de benefício (“Faster Notes. Fuller Schedules.”)
- Blocos AI + Documentation + Billing
- CTA claro por seção
**Pegamos:** headlines curtas; contraste forte no CTA; seções one-job.

### Jane (já acima) — referência #1 Canadá para clinics wellness/physio.

---

## Ásia / África / Oriente Médio

### Kreloses (MY/ID/Asia) — https://www.kreloses.com/physio
- “Built in Asia, for Asia” + compliance local
- Preço transparente; paperless clinic
**Pegamos:** clareza de preço e compliance (LGPD no BR).

### MOVO-X (SEA/ME) — https://www.movo-x.com/
- WhatsApp exercise delivery; go-live rápido; dashboard por terapeuta
**Pegamos:** WhatsApp como diferencial visual; “em minutos”.

### Clindesk (multi: UK/US/IN/JP/ZA…) — https://www.clindeskapp.com/
- Trial curto; flags de países; “No credit card”
**Pegamos:** “Sem cartão” no trust row do hero.

### Healcon / WIO CLINIC — multi-país
- Body charts, séries de tratamento, telerehab
**Pegamos:** narrativa de evolução/sessões no mockup de prontuário.

---

## Japão

- Softwares locais de rehab (ex. Rehabmate / Tack / sistemas hospitalares) priorizam **agenda + reembolso/seguro + avaliação estruturada**.
**Pegamos:** mockup alternando Agenda ↔ Prontuário; linguagem de evolução clínica.

## China

- Ecossistema WeChat-first e agregadores (não há um “Cliniko chinês” público dominante em inglês). Padrão: **QR, mensagens, check-in mobile**.
**Pegamos:** reforço visual de WhatsApp/QR e check-in (Wellhub).

## Rússia / CEI

### Infoclinica + MedFlex
- MIS completo + **agendamento online** em agregadores
**Pegamos:** integração Wellhub como “canal de agenda externa” (frase exata já no produto).

### África (ex. Clindesk SA + players regionais)
- Mobile-first, SMS/WhatsApp, trial curto
**Pegamos:** mobile-first no hero; lembretes WhatsApp como prova visual.

---

## Psicologia da atenção aplicada (síntese)

| Padrão | Como usamos |
|--------|-------------|
| Z / F-pattern | Marca UpClinic → headline → CTA laranja → olhar dos avatares → mockup |
| Direção do olhar | Personagens/fotos orientados para o CTA |
| Von Restorff | CTA laranja saturado vs. fundo claro / navy nos detalhes |
| Movimento | GSAP intro, float, tilt 3D, partículas leves, UI agenda animada |
| Urgência leve | “Teste grátis 7 dias” / “Sem cartão” — sem falsa escassez |
| Prova visual | Fotos reais de sessão + mockup do produto (sem depoimentos inventados) |
| Hierarquia | Um job por seção; brand hero-level |

---

## Checklist de regras de produto (mantidas)

- pt-BR
- Frase Wellhub exata + logo
- CTAs marketing → `/teste`; registro só no CTA final de `/teste` com UTMs
- Preços atuais
- UTM / Pixel / gtag preservados
- Hero rotativo (`heroVariants`)
- `prefers-reduced-motion`
- Sem depoimentos ou números inventados
