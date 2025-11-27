<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LegalPageLayout from '$lib/components/LegalPageLayout.svelte';
  
  const toc = [
    { id: 'conformidade', title: '1. Conformidade com LGPD' },
    { id: 'direitos', title: '2. Direitos dos Titulares' },
    { id: 'exercer', title: '3. Como Exercer seus Direitos' },
    { id: 'dpo', title: '4. Contato do DPO' }
  ];
</script>

<svelte:head>
  <title>LGPD - UpClinic | clinicupapp.com</title>
  <meta name="description" content="Conformidade com a LGPD. Conheça seus direitos e como exercê-los no UpClinic." />
  <link rel="canonical" href="https://clinicupapp.com/lgpd" />
</svelte:head>

<Navbar />

<LegalPageLayout title="Conformidade com LGPD" toc={toc} lastUpdated="26/11/2025">
  <div id="conformidade">
    <h2>1. Conformidade com a LGPD</h2>
    <p>
      A UpClinic está totalmente comprometida com a conformidade da Lei Geral de Proteção de Dados 
      (Lei nº 13.709/2018 - LGPD). Implementamos medidas técnicas e organizacionais adequadas para 
      proteger os dados pessoais de nossos usuários e pacientes.
    </p>
    
    <h3>1.1. Princípios da LGPD</h3>
    <p>Nossas práticas seguem os princípios fundamentais da LGPD:</p>
    <ul>
      <li><strong>Finalidade:</strong> Coletamos dados apenas para finalidades específicas e legítimas</li>
      <li><strong>Adequação:</strong> Dados coletados são compatíveis com as finalidades informadas</li>
      <li><strong>Necessidade:</strong> Limitamos a coleta ao mínimo necessário</li>
      <li><strong>Livre acesso:</strong> Garantimos transparência sobre o tratamento de dados</li>
      <li><strong>Qualidade dos dados:</strong> Mantemos dados precisos e atualizados</li>
      <li><strong>Transparência:</strong> Informamos claramente sobre o tratamento de dados</li>
      <li><strong>Segurança:</strong> Implementamos medidas de segurança adequadas</li>
      <li><strong>Prevenção:</strong> Adotamos medidas para prevenir danos</li>
      <li><strong>Não discriminação:</strong> Não realizamos tratamento discriminatório</li>
      <li><strong>Responsabilização:</strong> Demonstramos conformidade com a LGPD</li>
    </ul>
  </div>
  
  <div id="direitos">
    <h2>2. Direitos dos Titulares</h2>
    <p>Conforme a LGPD, você tem os seguintes direitos sobre seus dados pessoais:</p>
    
    <h3>2.1. Confirmação e Acesso</h3>
    <p>
      Você tem direito de obter confirmação sobre a existência de tratamento de dados pessoais e 
      acessar seus dados, incluindo informações sobre a origem dos dados, critérios utilizados e 
      finalidade do tratamento.
    </p>
    
    <h3>2.2. Correção</h3>
    <p>
      Você pode solicitar a correção de dados incompletos, inexatos ou desatualizados.
    </p>
    
    <h3>2.3. Anonimização, Bloqueio ou Eliminação</h3>
    <p>
      Você pode solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos 
      ou tratados em desconformidade com a LGPD.
    </p>
    
    <h3>2.4. Portabilidade</h3>
    <p>
      Você pode solicitar a portabilidade de seus dados para outro fornecedor de serviço ou produto, 
      mediante requisição expressa.
    </p>
    
    <h3>2.5. Eliminação</h3>
    <p>
      Você pode solicitar a eliminação dos dados pessoais tratados com seu consentimento, exceto nas 
      hipóteses previstas em lei.
    </p>
    
    <h3>2.6. Informação sobre Compartilhamento</h3>
    <p>
      Você tem direito de obter informações sobre entidades públicas e privadas com as quais 
      compartilhamos seus dados.
    </p>
    
    <h3>2.7. Informação sobre Possibilidade de Não Consentir</h3>
    <p>
      Você tem direito de ser informado sobre a possibilidade de não fornecer consentimento e sobre 
      as consequências da negativa.
    </p>
    
    <h3>2.8. Revogação do Consentimento</h3>
    <p>
      Você pode revogar seu consentimento a qualquer momento, mediante manifestação expressa.
    </p>
  </div>
  
  <div id="exercer">
    <h2>3. Como Exercer seus Direitos</h2>
    <p>
      Para exercer qualquer um dos direitos acima, você pode entrar em contato conosco através de:
    </p>
    <ul>
      <li>Email: <a href="mailto:contato@clinicupapp.com">contato@clinicupapp.com</a></li>
      <li>WhatsApp: <a href="https://wa.me/5562996720296">(62) 99672-0296</a></li>
      <li>Formulário de contato em nosso site</li>
    </ul>
    
    <h3>3.1. Processo de Solicitação</h3>
    <p>
      Ao fazer uma solicitação, precisaremos verificar sua identidade para proteger seus dados. 
      Responderemos à sua solicitação no prazo de até 15 (quinze) dias, conforme previsto na LGPD.
    </p>
    
    <h3>3.2. Documentação Necessária</h3>
    <p>
      Para processar sua solicitação, podemos solicitar documentação que comprove sua identidade, 
      como cópia de documento de identidade.
    </p>
  </div>
  
  <div id="dpo">
    <h2>4. Contato do Encarregado de Dados (DPO)</h2>
    <p>
      Para questões relacionadas à proteção de dados pessoais e exercício de direitos, você pode 
      entrar em contato com nosso Encarregado de Proteção de Dados:
    </p>
    <div class="bg-blue-50 p-6 rounded-lg mt-6">
      <p class="text-gray-700 mb-2">
        <strong>Email:</strong> <a href="mailto:contato@clinicupapp.com" class="text-blue-600">contato@clinicupapp.com</a>
      </p>
      <p class="text-gray-700 mb-2">
        <strong>Assunto:</strong> DPO / LGPD
      </p>
      <p class="text-gray-700">
        <strong>WhatsApp:</strong> <a href="https://wa.me/5562996720296" class="text-blue-600">(62) 99672-0296</a>
      </p>
    </div>
  </div>
  
  <div class="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Compromisso com a Privacidade</h3>
    <p class="text-gray-700">
      A UpClinic está comprometida em proteger seus dados pessoais e garantir que você tenha controle 
      total sobre suas informações. Se você tiver qualquer dúvida ou preocupação sobre como tratamos 
      seus dados, não hesite em entrar em contato conosco.
    </p>
  </div>
</LegalPageLayout>

<Footer />

