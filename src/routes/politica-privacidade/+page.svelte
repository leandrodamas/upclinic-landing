<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';
  
  function trackWhatsAppClick(label: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: label
      });
    }
  }
  
  const toc = [
    { id: 'coleta', title: '1. Coleta de Dados' },
    { id: 'uso', title: '2. Uso dos Dados' },
    { id: 'compartilhamento', title: '3. Compartilhamento' },
    { id: 'seguranca', title: '4. Segurança' },
    { id: 'retencao', title: '5. Retenção e Exclusão de Dados' },
    { id: 'direitos', title: '6. Direitos do Usuário' },
    { id: 'cookies', title: '7. Cookies' },
    { id: 'alteracoes', title: '8. Alterações' }
  ];
</script>

<svelte:head>
  <title>Política de Privacidade - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Política de Privacidade do UpClinic. Conheça como protegemos seus dados pessoais." />
  <link rel="canonical" href="https://clinicupapp.com/politica-privacidade" />
</svelte:head>

<Navbar />

<LegalPageLayout title="Política de Privacidade" toc={toc} lastUpdated="27/11/2025">
  <div id="coleta">
    <h2>1. Coleta de Dados</h2>
    <p>
      A UpClinic coleta informações pessoais necessárias para fornecer nossos serviços. 
      Isso inclui dados de identificação, informações de contato, dados de saúde dos pacientes 
      (quando aplicável) e informações de uso do sistema.
    </p>
    <p>
      Coletamos dados através de: cadastro de usuários, uso da plataforma, formulários de contato, 
      e integrações com sistemas terceiros autorizados.
    </p>
  </div>
  
  <div id="uso">
    <h2>2. Uso dos Dados</h2>
    <p>Utilizamos seus dados pessoais para:</p>
    <ul>
      <li>Fornecer e melhorar nossos serviços</li>
      <li>Processar transações e gerenciar contas</li>
      <li>Enviar comunicações importantes sobre o serviço</li>
      <li>Garantir segurança e prevenir fraudes</li>
      <li>Cumprir obrigações legais</li>
    </ul>
  </div>
  
  <div id="compartilhamento">
    <h2>3. Compartilhamento de Dados</h2>
    <p>
      Não vendemos seus dados pessoais. Podemos compartilhar informações apenas nas seguintes situações:
    </p>
    <ul>
      <li>Com seu consentimento explícito</li>
      <li>Para cumprir obrigações legais</li>
      <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
      <li>Em caso de fusão, aquisição ou venda de ativos (com notificação prévia)</li>
    </ul>
  </div>
  
  <div id="seguranca">
    <h2>4. Segurança dos Dados</h2>
    <p>
      Implementamos medidas técnicas e organizacionais robustas para proteger seus dados:
    </p>
    <ul>
      <li>Criptografia de dados em trânsito e em repouso</li>
      <li>Controles de acesso rigorosos</li>
      <li>Monitoramento contínuo de segurança</li>
      <li>Backup regular e plano de recuperação de desastres</li>
      <li>Conformidade com padrões de segurança da informação</li>
    </ul>
  </div>
  
  <div id="retencao">
    <h2>5. Retenção e Exclusão de Dados</h2>
    
    <h3>5.1. Política de Retenção</h3>
    <p>
      A UpClinic mantém seus dados pessoais e informações médicas armazenadas na plataforma 
      conforme os prazos estabelecidos pela <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> 
      e pela <strong>Resolução CFM nº 1.821/2007</strong>, que estabelece o prazo de guarda de prontuários médicos.
    </p>
    
    <h3>5.2. Prazos de Retenção</h3>
    <p>Estabelecemos os seguintes prazos de retenção de dados:</p>
    <ul>
      <li><strong>Período de Suspensão:</strong> 90 dias após a expiração do período de trial gratuito ou cancelamento da assinatura</li>
      <li><strong>Período de Exclusão Definitiva:</strong> 90 dias após o período de suspensão (total de 180 dias)</li>
      <li><strong>Prazo Legal CFM:</strong> 20 anos para prontuários médicos (conforme Resolução CFM nº 1.821/2007)</li>
      <li><strong>Aviso Prévio:</strong> 30 dias antes da exclusão definitiva, enviaremos notificações por email e WhatsApp</li>
    </ul>
    
    <h3>5.3. Exclusão Automática de Contas Inativas</h3>
    <p>
      Caso sua conta permaneça inativa (sem assinatura ativa ou trial expirado) por um período superior 
      a <strong>180 dias</strong>, os dados listados abaixo serão <strong>excluídos automaticamente e permanentemente</strong>.
    </p>
    <p>
      <strong>⚠️ ATENÇÃO:</strong> A exclusão é <strong>irreversível</strong>. Mesmo que você assine um plano 
      posteriormente e faça login, as informações já terão sido excluídas permanentemente. Apenas o direito 
      de acesso à conta será preservado, mas todos os dados clínicos, pacientes, agendamentos e histórico 
      serão perdidos irreversivelmente.
    </p>
    
    <h3>5.4. Dados que Serão Excluídos Automaticamente</h3>
    <p>Após o prazo de retenção, os seguintes dados serão excluídos permanentemente:</p>
    <ul>
      <li>Cadastros de pacientes e informações pessoais</li>
      <li>Prontuários eletrônicos e evoluções clínicas</li>
      <li>Agendamentos e histórico de consultas</li>
      <li>Exames laboratoriais e laudos</li>
      <li>Prescrições médicas e dados da farmácia</li>
      <li>Dados financeiros e transações</li>
      <li>Documentos e anexos</li>
      <li>Histórico de mensagens e notificações</li>
      <li>Configurações personalizadas e preferências do sistema</li>
      <li>Relatórios e análises</li>
      <li>Backups e arquivos armazenados</li>
    </ul>
    
    <h3>5.5. Dados que Serão Preservados</h3>
    <p>
      Apenas os seguintes dados serão preservados para garantir o direito de acesso à conta e cumprimento 
      de obrigações legais:
    </p>
    <ul>
      <li>Email de cadastro</li>
      <li>Data de criação da conta</li>
      <li>Histórico de assinaturas e planos contratados</li>
      <li>Registros de pagamento (conforme obrigação fiscal e legal)</li>
    </ul>
    
    <h3>5.6. Exclusão Manual de Conta</h3>
    <p>
      Você pode solicitar a exclusão manual de sua conta a qualquer momento através das configurações 
      do perfil no sistema. Ao solicitar a exclusão manual, todos os dados serão excluídos imediatamente 
      após a confirmação, conforme descrito na seção 5.4.
    </p>
    <p>
      A exclusão manual requer confirmação explícita e leitura de termo de responsabilidade, 
      pois é uma ação <strong>irreversível</strong>.
    </p>
    
    <h3>5.7. Recuperação de Dados</h3>
    <p>
      <strong>Importante:</strong> Não será possível recuperar nenhum dado após a exclusão, mesmo através 
      de solicitação ao suporte técnico ou contato com a equipe UpClinic. A exclusão é definitiva e permanente.
    </p>
    
    <h3>5.8. Conformidade Legal</h3>
    <p>
      Esta política de retenção e exclusão está em total conformidade com:
    </p>
    <ul>
      <li><strong>Lei Geral de Proteção de Dados (LGPD):</strong> Lei nº 13.709/2018 - Regulamenta o tratamento de dados pessoais no Brasil</li>
      <li><strong>Resolução CFM nº 1.821/2007:</strong> Estabelece o prazo de guarda de prontuários médicos em 20 anos</li>
      <li><strong>Normas do Conselho Federal de Medicina:</strong> Regulamentações sobre guarda e preservação de documentos médicos</li>
    </ul>
    
    <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
      <p class="font-semibold text-gray-900 mb-2">💡 Dica Importante:</p>
      <p class="text-gray-700">
        Para evitar a exclusão automática de seus dados, mantenha sua assinatura ativa ou reative sua conta 
        dentro do prazo de 180 dias após a expiração do trial. Você receberá notificações por email e WhatsApp 
        com 30 dias de antecedência antes da exclusão definitiva.
      </p>
    </div>
  </div>
  
  <div id="direitos">
    <h2>6. Direitos do Usuário (LGPD)</h2>
    <p>Você tem os seguintes direitos sobre seus dados pessoais:</p>
    <ul>
      <li><strong>Acesso:</strong> Solicitar informações sobre dados que possuímos</li>
      <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
      <li><strong>Exclusão:</strong> Solicitar exclusão de dados desnecessários</li>
      <li><strong>Portabilidade:</strong> Solicitar transferência de dados para outro fornecedor</li>
      <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
      <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas circunstâncias</li>
    </ul>
    <p>
      Para exercer seus direitos, entre em contato através do email: 
      <a href="mailto:contato@clinicupapp.com">contato@clinicupapp.com</a>
    </p>
  </div>
  
  <div id="cookies">
    <h2>7. Cookies e Tecnologias Similares</h2>
    <p>
      Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar uso 
      do site e personalizar conteúdo. Você pode gerenciar preferências de cookies através 
      das configurações do seu navegador.
    </p>
    <p>
      Para mais informações, consulte nossa <a href="/politica-cookies">Política de Cookies</a>.
    </p>
  </div>
  
  <div id="alteracoes">
    <h2>8. Alterações nesta Política</h2>
    <p>
      Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
      mudanças significativas através de email ou aviso em nosso site. A data da última 
      atualização está indicada no topo desta página.
    </p>
  </div>
  
  <div class="mt-12 p-6 bg-blue-50 rounded-lg">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Dúvidas sobre Privacidade?</h3>
    <p class="text-gray-700 mb-4">
      Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, 
      entre em contato conosco:
    </p>
    <ul class="text-gray-700 space-y-2">
      <li>Email: <a href="mailto:contato@clinicupapp.com" class="text-blue-600">contato@clinicupapp.com</a></li>
      <li>WhatsApp: <a 
        href="https://wa.me/5562996720296" 
        class="text-blue-600"
        on:click={() => trackWhatsAppClick('botao_whatsapp_politica_privacidade')}
      >(62) 99672-0296</a></li>
    </ul>
  </div>
</LegalPageLayout>

<Footer />

