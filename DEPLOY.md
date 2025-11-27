# Instruções de Deploy - Landing Page UpClinic

## Pré-requisitos

1. Node.js 18+ instalado
2. Firebase CLI instalado e autenticado
3. Acesso ao projeto Firebase `upclinic-aa025`

## Passos para Deploy

### 1. Instalar Dependências

```bash
cd landing-page-upclinic
npm install
```

### 2. Testar Localmente

```bash
npm run dev
```

Acesse `http://localhost:5173` para verificar se tudo está funcionando.

### 3. Build para Produção

```bash
npm run build
```

Isso gerará os arquivos estáticos na pasta `build/`.

### 4. Deploy no Firebase Hosting

```bash
# Na raiz do projeto (D:\upclinic-project)
firebase deploy --only hosting:site-upclinic
```

### 5. Verificar Deploy

Após o deploy, verifique os sites:
- `https://site-upclinic.web.app`
- `https://clinicupapp.com` (domínio personalizado)

## Estrutura de Arquivos

```
landing-page-upclinic/
├── build/              # Gerado após npm run build
├── src/
│   ├── lib/components/ # Componentes reutilizáveis
│   └── routes/        # Páginas
├── static/            # Arquivos estáticos (logo, etc)
└── package.json
```

## Configuração Firebase

O `firebase.json` na raiz do projeto já está configurado com o target `site-upclinic` apontando para `landing-page-upclinic/build`.

## Troubleshooting

### Erro: "Cannot find module"
- Execute `npm install` novamente

### Erro: "Build failed"
- Verifique se todos os arquivos estão criados
- Verifique erros no console

### Site não atualiza após deploy
- Limpe o cache do navegador
- Aguarde alguns minutos para propagação

## Contato

Para dúvidas sobre o deploy:
- Email: contato@clinicupapp.com
- WhatsApp: (62) 99672-0296

