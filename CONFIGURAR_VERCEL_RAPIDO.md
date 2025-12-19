# ⚡ Configuração Rápida - Variáveis Vercel

## 🎯 Método Mais Rápido: Interface Web

1. **Acesse:** https://vercel.com/dashboard
2. **Clique no projeto:** `upclinic-landing`
3. **Vá em:** Settings → Environment Variables
4. **Adicione estas 4 variáveis:**

```
SMTP_HOST = sh00122.hostgator.com.br
SMTP_PORT = 465
SMTP_USER = contato@clinicupapp.com
SMTP_PASSWORD = [sua_senha_do_email]
```

5. **Marque:** ✅ Production ✅ Preview ✅ Development
6. **Salve cada uma**
7. **Pronto!** Faça um novo deploy

---

## 💻 Via CLI (quando tiver tempo)

Execute estes comandos **após fazer `vercel login`**:

```powershell
cd D:\upclinic-project\landing-page-upclinic

# Production
vercel env add SMTP_HOST production
vercel env add SMTP_PORT production  
vercel env add SMTP_USER production
vercel env add SMTP_PASSWORD production

# Preview
vercel env add SMTP_HOST preview
vercel env add SMTP_PORT preview
vercel env add SMTP_USER preview
vercel env add SMTP_PASSWORD preview

# Development
vercel env add SMTP_HOST development
vercel env add SMTP_PORT development
vercel env add SMTP_USER development
vercel env add SMTP_PASSWORD development
```

---

**Recomendação:** Use a interface web (método 1) - é mais rápido! ⚡

