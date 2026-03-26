# ✅ Instalação da Tag do Google Ads (AW-17840348694)

## 📋 O que foi instalado

### 1. Tag do Google Ads (gtag.js)
**Arquivo:** `src/app.html` (linhas 120-139)

```html
<!-- GOOGLE ADS (gtag) - Conta Secundária -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17840348694"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17840348694');
  
  // Função helper para disparar evento de conversão de compra
  window.trackPurchaseConversion = function(transactionId) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17840348694/D3kyCKr5p9obEJa8-LpC',
        'transaction_id': transactionId || ''
      });
    }
  };
</script>
```

### 2. Evento de Conversão no Formulário de Contato
**Arquivo:** `src/lib/components/ContactForm.svelte` (linhas 125-129)

Quando o formulário de contato é enviado com sucesso, dispara automaticamente:
- Evento de conversão da conta principal (AW-17367062285)
- Evento de conversão da conta secundária (AW-17840348694)

---

## ✅ Pode Atrapalhar Algo?

### ❌ NÃO vai atrapalhar porque:

1. **Múltiplas tags são suportadas**
   - É comum ter múltiplas contas do Google Ads
   - Ambas compartilham o mesmo `dataLayer`
   - Não há conflitos

2. **Tags assíncronas**
   - Carregam em paralelo sem bloquear a página
   - Não afetam performance significativamente

3. **Compatível com tags existentes**
   - Google Tag Manager (GTM-P8CMV8X5) ✅
   - Meta Pixel ✅
   - Google Ads antigo (AW-17367062285) ✅
   - Google Ads novo (AW-17840348694) ✅

4. **Função helper opcional**
   - `window.trackPurchaseConversion()` só é chamada quando necessário
   - Não interfere em nada se não for usada

---

## 🎯 Onde os Eventos são Disparados

### 1. Formulário de Contato
**Quando:** Usuário envia formulário com sucesso
**Local:** `src/lib/components/ContactForm.svelte`
**Eventos disparados:**
- ✅ Conversão conta principal
- ✅ Conversão conta secundária

### 2. Página de Sucesso de Compra (quando necessário)
**Como usar:** Chamar manualmente em qualquer página:

```javascript
// Em uma página de sucesso de checkout/pagamento
if (typeof window !== 'undefined' && window.trackPurchaseConversion) {
  window.trackPurchaseConversion('TRANSACTION_ID_AQUI');
}
```

---

## 📊 Tags Instaladas na Landing Page

| Tag | ID | Status |
|-----|----|--------|
| Google Tag Manager | GTM-P8CMV8X5 | ✅ Ativo |
| Google Ads (Principal) | AW-17367062285 | ✅ Ativo |
| Google Ads (Secundária) | AW-17840348694 | ✅ **NOVO** |
| Meta Pixel | 24235377289434557 | ✅ Ativo |

---

## 🔍 Verificação

Para verificar se está funcionando:

1. **Abrir DevTools (F12)**
2. **Ir para Console**
3. **Digitar:** `window.gtag`
4. **Deve retornar:** Função gtag disponível

5. **Verificar dataLayer:**
   ```javascript
   window.dataLayer
   ```
   Deve mostrar array com eventos

6. **Testar evento manualmente:**
   ```javascript
   window.trackPurchaseConversion('TEST-123')
   ```

---

## ⚠️ Observações Importantes

1. **Transaction ID**
   - O evento de conversão aceita `transaction_id` opcional
   - Se você tiver IDs de transação reais, passe como parâmetro
   - Exemplo: `window.trackPurchaseConversion('STRIPE_CHARGE_123')`

2. **Duplicação de Eventos**
   - O Google Ads automaticamente deduplica eventos duplicados
   - Não há problema em disparar o mesmo evento múltiplas vezes
   - O Google usa cookies e outros métodos para evitar contagem duplicada

3. **Performance**
   - Tags carregam de forma assíncrona
   - Impacto mínimo na velocidade da página
   - Google otimiza o carregamento

---

## ✅ Conclusão

**A instalação está completa e segura!**

- ✅ Não vai atrapalhar o sistema existente
- ✅ Compatível com todas as tags atuais
- ✅ Eventos de conversão configurados
- ✅ Função helper disponível para uso futuro

Nenhuma funcionalidade existente foi afetada.
