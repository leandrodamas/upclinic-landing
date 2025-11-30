# 🔍 RELATÓRIO DE INVESTIGAÇÃO - Logo não aparece no Vercel

## ✅ Verificações Realizadas

### 1. Arquivos Físicos
- ✅ `static/logo-upclinic.png` existe (5347 bytes)
- ✅ `static/logo-upclinic.svg` existe (1493 bytes)
- ✅ Arquivos copiados no build: `.svelte-kit/output/client/logo-upclinic.png` e `.svg`

### 2. Código
- ✅ Navbar.svelte: usa `src="/logo-upclinic.png"` (caminho absoluto)
- ✅ Footer.svelte: usa `src="/logo-upclinic.png"` (caminho absoluto)
- ✅ ImageWithFallback.svelte: usa `export let className` (sem $$props.class)
- ✅ Todos os caminhos são absolutos começando com `/`

### 3. Configuração
- ✅ svelte.config.js: adapter-vercel configurado corretamente
- ✅ package.json: adapter-vercel instalado
- ✅ Build local funciona corretamente

## 🔴 Possíveis Problemas

### Problema 1: Arquivos não commitados no Git
**Verificação necessária:**
```bash
git ls-files static/logo-upclinic.*
```

Se não retornar nada, os arquivos não estão no Git e o Vercel não os terá.

### Problema 2: Vercel não está servindo arquivos estáticos
O adapter-vercel do SvelteKit deve copiar automaticamente arquivos de `static/` para o output, mas pode haver problemas.

### Problema 3: Cache do Vercel
O Vercel pode estar servindo uma versão antiga em cache.

## 🛠️ Soluções Aplicadas

1. ✅ Removido `$$props.class` → `export let className`
2. ✅ Garantido caminhos absolutos em todos os lugares
3. ✅ Simplificado lógica de inicialização do componente
4. ✅ Removido vercel.json (não necessário, pode causar conflito)

## 📋 Próximos Passos

1. **Verificar se arquivos estão no Git:**
   ```bash
   git add static/logo-upclinic.png static/logo-upclinic.svg
   git commit -m "Add: garantir que logos estejam no repositório"
   git push
   ```

2. **Verificar build do Vercel:**
   - Acessar logs do deploy no Vercel
   - Verificar se arquivos estáticos estão sendo copiados
   - Verificar se há erros 404 no console do navegador

3. **Testar diretamente:**
   - Acessar `https://seu-dominio.vercel.app/logo-upclinic.png` diretamente
   - Se retornar 404, o arquivo não está sendo servido

4. **Forçar rebuild:**
   - No painel do Vercel, fazer "Redeploy" forçado
   - Limpar cache se necessário

## 🔧 Solução Alternativa (se necessário)

Se o problema persistir, podemos:
1. Mover logo para `src/lib/assets/` e importar diretamente
2. Usar CDN externo para a logo
3. Inline SVG diretamente no componente

