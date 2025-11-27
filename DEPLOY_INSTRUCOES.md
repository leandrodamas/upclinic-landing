# 🚀 Instruções de Deploy - Landing Page UpClinic

## Pré-requisitos

1. Firebase CLI instalado: `npm install -g firebase-tools`
2. Login no Firebase: `firebase login`
3. Projeto configurado: `firebase use upclinic-aa025`

## Passos para Deploy

### 1. Build do Projeto

```bash
cd landing-page-upclinic
npm install
npm run build
```

### 2. Verificar Build

Certifique-se de que o diretório `build` foi criado com os arquivos estáticos.

### 3. Deploy para Firebase Hosting

```bash
firebase deploy --only hosting:site-upclinic
```

### 4. Configurar Domínio Personalizado (se ainda não estiver configurado)

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Vá em **Hosting** → **site-upclinic**
3. Clique em **Adicionar domínio personalizado**
4. Digite: `clinicupapp.com`
5. Siga as instruções para verificar o domínio (DNS)

### 5. Verificar Deploy

Após o deploy, acesse:
- **URL Firebase**: https://site-upclinic.web.app
- **Domínio Personalizado**: https://clinicupapp.com (após configuração do DNS)

## Comandos Rápidos

### Build e Deploy em um comando:

**Windows (PowerShell):**
```powershell
cd landing-page-upclinic
npm run build
firebase deploy --only hosting:site-upclinic
```

**Linux/Mac:**
```bash
cd landing-page-upclinic
npm run build && firebase deploy --only hosting:site-upclinic
```

## Troubleshooting

- Se o build falhar, verifique se todas as dependências estão instaladas
- Se o deploy falhar, verifique se está logado no Firebase CLI
- Se o domínio não funcionar, verifique as configurações de DNS no seu provedor

