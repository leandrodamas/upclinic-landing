# UpClinic Landing Page

Landing page profissional para o sistema UpClinic, desenvolvida com SvelteKit + TailwindCSS.

## 🚀 Tecnologias

- **SvelteKit** - Framework web moderno
- **TailwindCSS** - Framework CSS utilitário
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápida

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

O build será gerado na pasta `build/`

## 📁 Estrutura do Projeto

```
landing-page-upclinic/
├── src/
│   ├── lib/
│   │   └── components/     # Componentes reutilizáveis
│   ├── routes/             # Páginas e rotas
│   │   ├── +page.svelte    # Home
│   │   ├── sobre/          # Página Sobre
│   │   ├── planos/         # Página Planos
│   │   ├── contato/        # Página Contato
│   │   ├── politica-privacidade/  # Política de Privacidade
│   │   ├── termos-servico/       # Termos de Serviço
│   │   ├── lgpd/                 # LGPD
│   │   ├── politica-cookies/     # Política de Cookies
│   │   ├── codigo-conduta/       # Código de Conduta
│   │   └── faq/                  # FAQ
│   └── app.css             # Estilos globais
├── static/                 # Arquivos estáticos
└── package.json
```

## 🌐 Deploy

### Firebase Hosting

```bash
npm run build
firebase deploy --only hosting:site-upclinic
```

O site estará disponível em:
- `https://site-upclinic.web.app`
- `https://clinicupapp.com` (domínio personalizado)

## 📝 Informações de Contato

- **WhatsApp:** (62) 99672-0296
- **Email:** contato@clinicupapp.com

## 🎨 Design

- Cores primárias: #2563eb (azul), #7c3aed (roxo)
- Gradientes: from-blue-600 to-indigo-700
- Tipografia: Inter (Google Fonts)
- Design: Minimalista, profissional, estilo Canva/Elementor

## 📄 Licença

© 2025 UpClinic. Todos os direitos reservados.

