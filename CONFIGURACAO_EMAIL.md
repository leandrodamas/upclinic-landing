# Configuração de Email - UpClinic Landing Page

Este documento descreve como configurar o envio de emails através do SMTP do HostGator.

## 📋 Pré-requisitos

- Conta de email `contato@clinicupapp.com` criada no cPanel
- Senha da conta de email
- Acesso ao cPanel HostGator

## 🔧 Configuração SMTP

### Configurações do Servidor (cPanel)

Com base nas configurações do cPanel, as seguintes configurações são necessárias:

#### Servidor de Entrada (IMAP)
- **Servidor:** `sh00122.hostgator.com.br`
- **Porta:** `993` (SSL/TLS)
- **Protocolo:** `IMAP`

#### Servidor de Saída (SMTP)
- **Servidor:** `sh00122.hostgator.com.br`
- **Porta:** `465` (SSL/TLS) ou `587` (STARTTLS)
- **Protocolo:** `SMTP`
- **Autenticação:** Requerida

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou configure no Vercel) com as seguintes variáveis:

```env
SMTP_HOST=sh00122.hostgator.com.br
SMTP_PORT=465
SMTP_USER=contato@clinicupapp.com
SMTP_PASSWORD=sua_senha_aqui
```

## 🚀 Configuração no Vercel (Produção)

1. Acesse o painel do Vercel: https://vercel.com
2. Selecione o projeto `upclinic-landing`
3. Vá em **Settings** > **Environment Variables**
4. Adicione as seguintes variáveis:
   - `SMTP_HOST` = `sh00122.hostgator.com.br`
   - `SMTP_PORT` = `465`
   - `SMTP_USER` = `contato@clinicupapp.com`
   - `SMTP_PASSWORD` = (senha do email)
5. Selecione os ambientes: **Production**, **Preview**, **Development**
6. Clique em **Save**

## 📧 Funcionalidades Implementadas

### 1. Formulário de Contato (`/contato`)

- **Endpoint:** `POST /api/contact`
- **Funcionalidade:** Envia email para `contato@clinicupapp.com` com os dados do formulário
- **Confirmação:** Envia email de confirmação automático para o remetente

### 2. Formulário de Candidatura (`/carreiras`)

- **Endpoint:** `POST /api/job-application`
- **Funcionalidade:** Envia email para `contato@clinicupapp.com` com dados da candidatura
- **Suporte:** Suporta anexo de currículo (base64)

## 🧪 Testando a Configuração

### Teste Local

1. Crie um arquivo `.env` na raiz do projeto:
```bash
cp .env.example .env
```

2. Edite o `.env` e adicione a senha real:
```env
SMTP_PASSWORD=sua_senha_real_aqui
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `/contato` e envie um formulário de teste

5. Verifique os logs no console para confirmar o envio

### Teste em Produção

1. Configure as variáveis de ambiente no Vercel
2. Faça deploy da aplicação
3. Teste o formulário de contato em produção
4. Verifique se o email chegou em `contato@clinicupapp.com`

## 🔍 Troubleshooting

### Erro: "SMTP não configurado"

**Causa:** Variáveis de ambiente não estão configuradas.

**Solução:**
- Verifique se o arquivo `.env` existe (desenvolvimento)
- Verifique se as variáveis estão configuradas no Vercel (produção)
- Verifique se os nomes das variáveis estão corretos

### Erro: "Authentication failed"

**Causa:** Credenciais incorretas.

**Solução:**
- Verifique se `SMTP_USER` está correto
- Verifique se `SMTP_PASSWORD` está correto
- Teste as credenciais no cliente de email (Thunderbird, Outlook, etc.)

### Erro: "Connection timeout"

**Causa:** Servidor SMTP inacessível ou porta incorreta.

**Solução:**
- Verifique se `SMTP_HOST` está correto
- Tente usar a porta `587` com STARTTLS ao invés de `465`
- Verifique se há firewall bloqueando a conexão

### Emails não estão chegando

**Verificações:**
1. Verifique a pasta de spam/lixo eletrônico
2. Verifique os logs do servidor (console do Vercel)
3. Verifique se o email de destino está correto
4. Teste enviando um email manualmente do cPanel

## 📝 Estrutura do Código

### Serviço de Email
- **Arquivo:** `src/lib/services/emailService.ts`
- **Funções principais:**
  - `sendContactEmail()` - Envia email de contato
  - `sendContactConfirmationEmail()` - Envia confirmação ao remetente
  - `sendJobApplicationEmail()` - Envia email de candidatura
  - `isEmailConfigured()` - Verifica se SMTP está configurado

### APIs
- **Arquivo:** `src/routes/api/contact/+server.ts`
  - Processa formulário de contato
  - Valida dados
  - Chama serviço de email

- **Arquivo:** `src/routes/api/job-application/+server.ts`
  - Processa formulário de candidatura
  - Valida dados
  - Chama serviço de email

## 🔒 Segurança

- **Nunca** commite o arquivo `.env` no Git
- Use variáveis de ambiente do Vercel para produção
- Mantenha a senha do email segura
- Use HTTPS em produção

## 📞 Suporte

Se tiver problemas com a configuração:
1. Verifique os logs do servidor
2. Teste as credenciais no cliente de email
3. Entre em contato com o suporte do HostGator se necessário

---

**Última atualização:** 18/12/2025

