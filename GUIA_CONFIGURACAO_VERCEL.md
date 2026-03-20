# 🔧 Guia de Configuração - Variáveis de Ambiente no Vercel

Este guia mostra como configurar as variáveis de ambiente necessárias para o envio de emails no Vercel.

## 📋 Pré-requisitos

- Conta no Vercel
- Projeto `upclinic-landing` criado no Vercel
- Vercel CLI instalado (já está instalado: v48.12.0)

## 🚀 Método 1: Via Interface Web (Recomendado)

### Passo 1: Acessar o Painel do Vercel

1. Acesse: https://vercel.com
2. Faça login na sua conta
3. Selecione o projeto **upclinic-landing**

### Passo 2: Configurar Variáveis de Ambiente

1. No menu lateral, clique em **Settings**
2. Clique em **Environment Variables** no menu lateral
3. Clique no botão **Add New**

### Passo 3: Adicionar Cada Variável

Adicione as seguintes variáveis **uma por uma**:

#### Variável 1: SMTP_HOST
- **Name:** `SMTP_HOST`
- **Value:** `sh00122.hostgator.com.br`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Clique em **Save**

#### Variável 2: SMTP_PORT
- **Name:** `SMTP_PORT`
- **Value:** `465`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Clique em **Save**

#### Variável 3: SMTP_USER
- **Name:** `SMTP_USER`
- **Value:** `upclinic8@gmail.com`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Clique em **Save**

#### Variável 4: SMTP_PASSWORD
- **Name:** `SMTP_PASSWORD`
- **Value:** `[sua_senha_do_email]` (senha da conta de email no cPanel)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development
- Clique em **Save**

### Passo 4: Verificar Configuração

Após adicionar todas as variáveis, você deve ver:

```
SMTP_HOST          Production, Preview, Development
SMTP_PORT          Production, Preview, Development
SMTP_USER          Production, Preview, Development
SMTP_PASSWORD      Production, Preview, Development
```

### Passo 5: Fazer Deploy

1. Vá para a aba **Deployments**
2. Clique nos três pontos (...) do último deployment
3. Clique em **Redeploy**
4. Ou faça um novo deploy via CLI: `vercel --prod`

---

## 💻 Método 2: Via CLI (Script Automatizado)

### Passo 1: Fazer Login no Vercel CLI

```powershell
cd D:\upclinic-project\landing-page-upclinic
vercel login
```

Siga as instruções para fazer login no navegador.

### Passo 2: Executar Script de Configuração

```powershell
.\configurar-vercel-env.ps1
```

O script irá:
- Verificar se você está logado
- Solicitar as informações necessárias
- Configurar automaticamente todas as variáveis para Production, Preview e Development

### Passo 3: Fazer Deploy

```powershell
vercel --prod
```

---

## 💻 Método 3: Via CLI (Manual)

Se preferir configurar manualmente via CLI:

### Passo 1: Fazer Login

```powershell
vercel login
```

### Passo 2: Configurar Variáveis

Execute os seguintes comandos **para cada ambiente** (Production, Preview, Development):

#### Para Production:
```powershell
vercel env add SMTP_HOST production
# Quando solicitado, digite: sh00122.hostgator.com.br

vercel env add SMTP_PORT production
# Quando solicitado, digite: 465

vercel env add SMTP_USER production
# Quando solicitado, digite: upclinic8@gmail.com

vercel env add SMTP_PASSWORD production
# Quando solicitado, digite: sua_senha_do_email
```

#### Para Preview:
```powershell
vercel env add SMTP_HOST preview
vercel env add SMTP_PORT preview
vercel env add SMTP_USER preview
vercel env add SMTP_PASSWORD preview
```

#### Para Development:
```powershell
vercel env add SMTP_HOST development
vercel env add SMTP_PORT development
vercel env add SMTP_USER development
vercel env add SMTP_PASSWORD development
```

### Passo 3: Verificar Variáveis

```powershell
vercel env ls
```

Você deve ver todas as 4 variáveis listadas para cada ambiente.

### Passo 4: Fazer Deploy

```powershell
vercel --prod
```

---

## ✅ Verificação

Após configurar e fazer deploy, teste o envio de emails:

1. Acesse: https://clinicupapp.com/contato
2. Preencha o formulário de contato
3. Envie a mensagem
4. Verifique se o email chegou em `upclinic8@gmail.com`
5. Verifique os logs no Vercel: **Settings** > **Functions** > **Logs**

---

## 🔍 Troubleshooting

### Erro: "SMTP não configurado"

**Causa:** Variáveis de ambiente não estão configuradas ou não foram aplicadas.

**Solução:**
1. Verifique se todas as variáveis estão configuradas no Vercel
2. Faça um novo deploy após configurar
3. Verifique os logs do Vercel para erros

### Erro: "Authentication failed"

**Causa:** Credenciais SMTP incorretas.

**Solução:**
1. Verifique se `SMTP_USER` está correto
2. Verifique se `SMTP_PASSWORD` está correto
3. Teste as credenciais no cliente de email (Thunderbird, Outlook)

### Emails não estão sendo enviados

**Verificações:**
1. Verifique os logs do Vercel (Settings > Functions > Logs)
2. Verifique se as variáveis estão configuradas para o ambiente correto
3. Verifique se o deploy foi feito após configurar as variáveis
4. Teste as credenciais SMTP manualmente

---

## 📝 Resumo das Variáveis

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `SMTP_HOST` | `sh00122.hostgator.com.br` | Servidor SMTP |
| `SMTP_PORT` | `465` | Porta SMTP (SSL/TLS) |
| `SMTP_USER` | `upclinic8@gmail.com` | Email de autenticação |
| `SMTP_PASSWORD` | `[sua_senha]` | Senha do email |

---

## 🔒 Segurança

- ✅ A senha nunca será exposta no código
- ✅ Variáveis são criptografadas no Vercel
- ✅ Apenas acessíveis durante a execução das funções
- ✅ Não aparecem nos logs públicos

---

**Última atualização:** 18/12/2025

