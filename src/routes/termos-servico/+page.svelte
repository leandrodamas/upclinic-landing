<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';
  
  const toc = [
    { id: 'aceitacao', title: '1. Aceitação dos Termos' },
    { id: 'uso', title: '2. Uso do Serviço' },
    { id: 'contas', title: '3. Contas de Usuário' },
    { id: 'propriedade', title: '4. Propriedade Intelectual' },
    { id: 'responsabilidade', title: '5. Limitação de Responsabilidade' },
    { id: 'rescisao', title: '6. Rescisão' }
  ];
</script>

<svelte:head>
  <title>Termos de Serviço - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Termos de Serviço do UpClinic. Leia os termos e condições de uso da plataforma." />
  <link rel="canonical" href="https://clinicupapp.com/termos-servico" />
</svelte:head>

<Navbar />

<LegalPageLayout title="Termos de Serviço" toc={toc} lastUpdated="26/11/2025">
  <div id="aceitacao">
    <h2>1. Aceitação dos Termos</h2>
    <p>
      Ao acessar e usar o UpClinic, você concorda em cumprir e estar vinculado a estes Termos de Serviço. 
      Se você não concorda com qualquer parte destes termos, não deve usar nosso serviço.
    </p>
    <p>
      Estes termos se aplicam a todos os usuários do serviço, incluindo visitantes, clientes e outros 
      que acessam ou usam o serviço.
    </p>
  </div>
  
  <div id="uso">
    <h2>2. Uso do Serviço</h2>
    <h3>2.1. Uso Permitido</h3>
    <p>Você concorda em usar o UpClinic apenas para fins legais e de acordo com estes termos. Você não deve:</p>
    <ul>
      <li>Usar o serviço de forma que viole qualquer lei ou regulamento</li>
      <li>Transmitir qualquer conteúdo malicioso, ofensivo ou ilegal</li>
      <li>Tentar acessar áreas restritas do sistema</li>
      <li>Interferir ou interromper o funcionamento do serviço</li>
      <li>Usar o serviço para qualquer propósito não autorizado</li>
    </ul>
    
    <h3>2.2. Responsabilidades do Usuário</h3>
    <p>Você é responsável por:</p>
    <ul>
      <li>Manter a confidencialidade de suas credenciais de acesso</li>
      <li>Todas as atividades que ocorrem sob sua conta</li>
      <li>Garantir que os dados inseridos sejam precisos e atualizados</li>
      <li>Cumprir todas as leis aplicáveis relacionadas ao uso do serviço</li>
    </ul>
  </div>
  
  <div id="contas">
    <h2>3. Contas de Usuário</h2>
    <p>
      Para usar certos recursos do UpClinic, você precisa criar uma conta. Ao criar uma conta, você concorda em:
    </p>
    <ul>
      <li>Fornecer informações precisas, completas e atualizadas</li>
      <li>Manter e atualizar suas informações quando necessário</li>
      <li>Manter a segurança de sua senha</li>
      <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
      <li>Ser responsável por todas as atividades em sua conta</li>
    </ul>
    <p>
      Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos.
    </p>
  </div>
  
  <div id="propriedade">
    <h2>4. Propriedade Intelectual</h2>
    <p>
      O serviço UpClinic e todo o conteúdo, incluindo mas não limitado a texto, gráficos, logos, 
      ícones, imagens, compilações de dados, software e outros materiais, são propriedade da UpClinic 
      ou de seus fornecedores de conteúdo e são protegidos por leis de direitos autorais e outras 
      leis de propriedade intelectual.
    </p>
    <p>
      Você não pode reproduzir, distribuir, modificar, criar trabalhos derivados, exibir publicamente, 
      executar publicamente, republicar, baixar, armazenar ou transmitir qualquer material do nosso 
      serviço sem nosso consentimento prévio por escrito.
    </p>
  </div>
  
  <div id="responsabilidade">
    <h2>5. Limitação de Responsabilidade</h2>
    <p>
      O UpClinic é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será 
      ininterrupto, seguro, livre de erros ou atenderá às suas expectativas específicas.
    </p>
    <p>
      Na medida máxima permitida por lei, a UpClinic não será responsável por quaisquer danos diretos, 
      indiretos, incidentais, especiais, consequenciais ou punitivos resultantes do uso ou incapacidade 
      de usar o serviço.
    </p>
    <p>
      Nossa responsabilidade total para com você por todas as reivindicações relacionadas ao serviço 
      não excederá o valor pago por você nos últimos 12 meses.
    </p>
  </div>
  
  <div id="rescisao">
    <h2>6. Rescisão</h2>
    <p>
      Você pode encerrar sua conta a qualquer momento através das configurações da conta ou entrando 
      em contato conosco.
    </p>
    <p>
      Podemos suspender ou encerrar seu acesso ao serviço imediatamente, sem aviso prévio, por qualquer 
      motivo, incluindo se você violar estes Termos de Serviço.
    </p>
    <p>
      Após a rescisão, seu direito de usar o serviço cessará imediatamente. Todas as disposições destes 
      termos que por sua natureza devem sobreviver à rescisão continuarão em vigor.
    </p>
  </div>
  
  <div class="mt-12 p-6 bg-blue-50 rounded-lg">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Dúvidas sobre os Termos?</h3>
    <p class="text-gray-700 mb-4">
      Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato:
    </p>
    <ul class="text-gray-700 space-y-2">
      <li>Email: <a href="mailto:contato@clinicupapp.com" class="text-blue-600">contato@clinicupapp.com</a></li>
      <li>WhatsApp: <a href="https://wa.me/5562996720296" class="text-blue-600">(62) 99672-0296</a></li>
    </ul>
  </div>
</LegalPageLayout>

<Footer />

