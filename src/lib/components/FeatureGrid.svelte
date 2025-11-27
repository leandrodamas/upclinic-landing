<script>
  import FeatureDemoModal from './FeatureDemoModal.svelte';
  import FeatureDetailModal from './FeatureDetailModal.svelte';
  
  let demoModal;
  let detailModal;
  
  function openDemo() {
    if (demoModal) {
      demoModal.open();
    }
  }
  
  function openFeatureDetail(feature) {
    if (detailModal) {
      detailModal.open(feature);
    }
  }
  
  const features = [
    {
      icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
      title: 'Prontuário Eletrônico',
      description: 'Sistema completo de prontuários digitais com segurança LGPD, histórico completo e acesso rápido a todas as informações do paciente.',
      color: 'blue',
      fullDescription: 'Gerencie todo o histórico médico dos seus pacientes de forma digital e segura. O prontuário eletrônico do UpClinic permite registrar consultas, exames, prescrições e evoluções clínicas com total conformidade à LGPD. Acesso rápido, busca inteligente e backup automático garantem que todas as informações estejam sempre disponíveis quando você precisar.',
      benefits: [
        'Histórico médico completo e organizado',
        'Conformidade total com LGPD e normas do CFM',
        'Busca inteligente por sintomas, diagnósticos ou medicamentos',
        'Anexos de exames e documentos',
        'Assinatura digital de prescrições',
        'Backup automático na nuvem'
      ],
      features: [
        'Registro de consultas e evoluções',
        'Histórico de medicações',
        'Anexo de exames e imagens',
        'Busca avançada por múltiplos critérios',
        'Timeline cronológica de atendimentos',
        'Exportação de relatórios'
      ],
      example: 'Um paciente retorna após 6 meses. Com um clique, você acessa todo o histórico, exames anteriores, medicações prescritas e evoluções, permitindo um atendimento mais eficiente e preciso.'
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z',
      title: 'Agenda Inteligente',
      description: 'Agendamento automático com lembretes por WhatsApp e email, otimização de horários e gestão completa da sua agenda.',
      color: 'purple',
      fullDescription: 'Transforme a gestão da sua agenda com inteligência artificial. O sistema sugere os melhores horários, envia lembretes automáticos por WhatsApp e email, e otimiza sua agenda para maximizar a produtividade. Reduza faltas em até 80% com lembretes inteligentes e confirmações automáticas.',
      benefits: [
        'Agendamento online 24/7 para pacientes',
        'Lembretes automáticos por WhatsApp, SMS e email',
        'Otimização automática de horários',
        'Gestão de múltiplos profissionais e especialidades',
        'Bloqueio de horários e feriados',
        'Relatórios de ocupação e produtividade'
      ],
      features: [
        'Calendário visual interativo',
        'Agendamento por especialidade',
        'Confirmação automática de consultas',
        'Gestão de lista de espera',
        'Reagendamento rápido',
        'Integração com Google Calendar'
      ],
      example: 'Um paciente agenda uma consulta pelo site às 23h. O sistema confirma automaticamente, envia lembretes 48h e 24h antes, e 2h antes da consulta. Resultado: zero esquecimentos!'
    },
    {
      icon: 'M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z',
      title: 'Telemedicina',
      description: 'Consultas online integradas com prescrição digital, videoconferência de alta qualidade e prontuário sincronizado.',
      color: 'indigo',
      fullDescription: 'Realize consultas remotas com qualidade profissional. Videoconferência HD, chat integrado, compartilhamento de tela para exames e prescrições digitais assinadas eletronicamente. Tudo integrado ao prontuário eletrônico para um atendimento completo e documentado.',
      benefits: [
        'Videoconferência HD com qualidade profissional',
        'Chat em tempo real durante a consulta',
        'Compartilhamento de tela para análise de exames',
        'Gravação de consultas (com consentimento do paciente)',
        'Prescrições digitais com assinatura eletrônica',
        'Integração completa com prontuário eletrônico'
      ],
      features: [
        'Sala de espera virtual',
        'Compartilhamento de arquivos',
        'Gravação de consultas',
        'Prescrições digitais integradas',
        'Agendamento específico para telemedicina',
        'Relatórios de teleconsultas'
      ],
      example: 'Paciente em outra cidade precisa de retorno. Você agenda uma teleconsulta, analisa exames compartilhando a tela, prescreve digitalmente e tudo fica registrado automaticamente no prontuário.'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
      title: 'Gestão Financeira',
      description: 'Controle completo de receitas, despesas, pagamentos e relatórios financeiros detalhados para sua clínica.',
      color: 'green',
      fullDescription: 'Tenha controle total das finanças da sua clínica. Receitas de consultas, despesas operacionais, controle de inadimplência, relatórios detalhados e integração com sistemas de pagamento. Tudo em um só lugar para você tomar decisões financeiras inteligentes.',
      benefits: [
        'Controle de receitas e despesas em tempo real',
        'Relatórios financeiros detalhados e personalizados',
        'Gestão de inadimplência e cobranças',
        'Integração com gateways de pagamento',
        'Análise de lucratividade por profissional',
        'Previsão de fluxo de caixa'
      ],
      features: [
        'Dashboard financeiro em tempo real',
        'Controle de contas a pagar e receber',
        'Relatórios de faturamento',
        'Integração com bancos',
        'Gestão de planos de saúde',
        'Análise de rentabilidade'
      ],
      example: 'No final do mês, você acessa um dashboard completo mostrando receitas por especialidade, despesas categorizadas, taxa de inadimplência e projeções para o próximo mês - tudo em gráficos visuais.'
    },
    {
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      title: 'IA Médica',
      description: 'Assistente de IA para diagnósticos, análise de exames e sugestões de tratamento baseadas em evidências científicas.',
      color: 'pink',
      fullDescription: 'Conte com inteligência artificial como seu assistente médico. O sistema analisa sintomas, sugere diagnósticos baseados em evidências científicas, identifica padrões em exames e oferece suporte à decisão clínica. Sempre como ferramenta de apoio, nunca substituindo o julgamento médico.',
      benefits: [
        'Análise inteligente de sintomas e sinais',
        'Sugestões de diagnósticos baseadas em evidências',
        'Identificação de padrões em exames laboratoriais',
        'Alertas para interações medicamentosas',
        'Suporte à decisão clínica baseado em guidelines',
        'Aprendizado contínuo com casos similares'
      ],
      features: [
        'Análise de sintomas',
        'Sugestões de exames complementares',
        'Alertas de interações medicamentosas',
        'Base de conhecimento médico',
        'Análise de padrões em exames',
        'Histórico de casos similares'
      ],
      example: 'Você digita os sintomas do paciente. A IA sugere possíveis diagnósticos com base em evidências, alerta sobre interações medicamentosas e mostra casos similares já tratados na sua clínica.'
    },
    {
      icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
      title: 'Mobile & Cloud',
      description: 'Acesso em qualquer lugar via web ou mobile, sincronização em tempo real e backup automático na nuvem.',
      color: 'cyan',
      fullDescription: 'Acesse seu sistema de qualquer lugar, a qualquer hora. Versão mobile otimizada, sincronização em tempo real entre dispositivos e backup automático na nuvem. Sua clínica sempre com você, no consultório, em casa ou em viagem.',
      benefits: [
        'Aplicativo mobile nativo para iOS e Android',
        'Sincronização em tempo real entre dispositivos',
        'Backup automático na nuvem',
        'Acesso offline com sincronização automática',
        'Notificações push no celular',
        'Interface responsiva para tablets'
      ],
      features: [
        'App iOS e Android',
        'Sincronização em tempo real',
        'Modo offline',
        'Backup automático',
        'Notificações push',
        'Acesso via navegador'
      ],
      example: 'Você está em casa e precisa verificar um agendamento urgente. Abre o app no celular, acessa todas as informações, faz alterações e tudo sincroniza automaticamente com o sistema principal.'
    },
    {
      icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
      title: 'Gestão de Pacientes',
      description: 'Cadastro completo, histórico médico detalhado, busca avançada e acompanhamento personalizado de cada paciente.',
      color: 'blue',
      fullDescription: 'Sistema completo de gestão de pacientes com busca avançada e acompanhamento personalizado. Cadastre informações completas, histórico médico detalhado, múltiplos contatos e dados de emergência sempre acessíveis.',
      benefits: [
        'Busca instantânea por qualquer critério',
        'Histórico completo do paciente',
        'Alertas automáticos de retornos',
        'Gestão de múltiplos contatos',
        'Dados de emergência sempre acessíveis',
        'Integração com exames e prescrições'
      ],
      features: [
        'Cadastro completo de pacientes',
        'Busca avançada multi-critério',
        'Histórico médico integrado',
        'Gestão de contatos',
        'Alertas de retorno',
        'Fichas personalizadas'
      ],
      example: 'Busque um paciente por nome, CPF, telefone ou sintoma. Em segundos, você tem acesso a todo o histórico, exames, prescrições e informações de contato.'
    },
    {
      icon: 'M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
      title: 'Gestão de Profissionais',
      description: 'Controle completo da equipe médica, especialidades, escalas, disponibilidade e permissões de acesso.',
      color: 'purple',
      fullDescription: 'Gerencie toda sua equipe médica de forma eficiente. Controle especialidades, escalas de trabalho, disponibilidade e permissões de acesso personalizadas para cada profissional.',
      benefits: [
        'Gestão de múltiplas especialidades',
        'Controle de escalas e disponibilidade',
        'Relatórios de performance individual',
        'Permissões de acesso personalizadas',
        'Integração com agenda e prontuário',
        'Histórico de atividades por profissional'
      ],
      features: [
        'Cadastro de profissionais',
        'Gestão de especialidades',
        'Controle de escalas',
        'Permissões personalizadas',
        'Relatórios de performance',
        'Integração com agenda'
      ],
      example: 'Configure diferentes níveis de acesso: recepcionistas veem apenas agenda, médicos acessam prontuários completos, e administradores têm acesso total ao sistema.'
    },
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z',
      title: 'Exames e Laudos',
      description: 'Gestão completa de exames laboratoriais e de imagem, laudos digitais e integração com laboratórios parceiros.',
      color: 'green',
      fullDescription: 'Organize todos os exames laboratoriais e de imagem com laudos digitais e integração com laboratórios parceiros. Histórico completo, comparação de exames ao longo do tempo e alertas de exames pendentes.',
      benefits: [
        'Integração com laboratórios parceiros',
        'Laudos digitais organizados',
        'Histórico completo de exames',
        'Alertas de exames pendentes',
        'Visualização de imagens integrada',
        'Comparação de exames ao longo do tempo'
      ],
      features: [
        'Upload de exames',
        'Integração com laboratórios',
        'Visualização de imagens',
        'Laudos digitais',
        'Histórico de exames',
        'Alertas automáticos'
      ],
      example: 'Um exame de sangue chega do laboratório parceiro. O sistema notifica automaticamente, anexa ao prontuário do paciente e você pode comparar com exames anteriores em segundos.'
    },
    {
      icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Prescrições Digitais',
      description: 'Prescrições médicas digitais com assinatura eletrônica, validação de medicamentos e integração com farmácias.',
      color: 'red',
      fullDescription: 'Prescrições médicas digitais válidas legalmente com assinatura eletrônica e integração com farmácias. Validação automática de medicamentos, alertas de interações e histórico completo de prescrições.',
      benefits: [
        'Assinatura eletrônica válida legalmente',
        'Integração com farmácias parceiras',
        'Histórico de prescrições completo',
        'Validação automática de medicamentos',
        'Alertas de interações medicamentosas',
        'Prescrições padronizadas por especialidade'
      ],
      features: [
        'Prescrições digitais',
        'Assinatura eletrônica',
        'Validação de medicamentos',
        'Integração com farmácias',
        'Histórico de prescrições',
        'Templates por especialidade'
      ],
      example: 'Você prescreve um medicamento e o sistema alerta sobre uma possível interação com outro remédio que o paciente já usa. A prescrição é assinada digitalmente e enviada automaticamente para a farmácia parceira.'
    },
    {
      icon: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z',
      title: 'Relatórios e Analytics',
      description: 'Dashboards interativos, relatórios personalizados, métricas de performance e análises detalhadas do seu negócio.',
      color: 'orange',
      fullDescription: 'Tome decisões baseadas em dados com dashboards interativos e relatórios personalizados. Métricas de performance, análises detalhadas do seu negócio e comparação de períodos para identificar tendências.',
      benefits: [
        'Dashboards em tempo real',
        'Relatórios personalizados',
        'Análise de performance',
        'Métricas de produtividade',
        'Gráficos interativos',
        'Exportação de relatórios em PDF/Excel'
      ],
      features: [
        'Dashboard personalizado',
        'Relatórios financeiros',
        'Análise de produtividade',
        'Gráficos interativos',
        'Exportação de dados',
        'Comparação de períodos'
      ],
      example: 'Visualize em um dashboard completo: número de consultas por mês, receita por especialidade, taxa de ocupação da agenda e satisfação dos pacientes - tudo em gráficos visuais e interativos.'
    },
    {
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 13 13.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9',
      title: 'Notificações Inteligentes',
      description: 'Sistema de alertas e lembretes automáticos por WhatsApp, SMS e email para pacientes e profissionais.',
      color: 'yellow',
      fullDescription: 'Sistema de lembretes automáticos que reduz faltas e melhora a comunicação com pacientes. Lembretes por WhatsApp, SMS e email, templates personalizáveis e relatórios de entrega e leitura.',
      benefits: [
        'Redução de 80% nas faltas',
        'Lembretes automáticos multi-canal',
        'Comunicação personalizada',
        'Templates de mensagens',
        'Agendamento de notificações',
        'Relatórios de entrega e leitura'
      ],
      features: [
        'Lembretes automáticos',
        'WhatsApp, SMS e Email',
        'Templates personalizáveis',
        'Agendamento de notificações',
        'Relatórios de entrega',
        'Confirmação de consultas'
      ],
      example: 'O sistema envia automaticamente lembretes 48h, 24h e 2h antes da consulta. O paciente confirma pelo WhatsApp e você recebe uma notificação. Resultado: 80% menos faltas!'
    },
    {
      icon: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10',
      title: 'Farmácia Integrada',
      description: 'Gestão de medicamentos, controle de estoque, prescrições digitais e integração com farmácias parceiras.',
      color: 'teal',
      fullDescription: 'Controle completo de medicamentos, estoque e integração com farmácias parceiras. Gestão de medicamentos, alertas de estoque baixo, histórico de medicamentos e validação de prescrições.',
      benefits: [
        'Controle de estoque automático',
        'Integração com farmácias',
        'Gestão de medicamentos',
        'Alertas de estoque baixo',
        'Histórico de medicamentos',
        'Validação de prescrições'
      ],
      features: [
        'Controle de estoque',
        'Integração com farmácias',
        'Gestão de medicamentos',
        'Alertas automáticos',
        'Histórico de medicamentos',
        'Validação de prescrições'
      ],
      example: 'Você prescreve um medicamento e o sistema verifica automaticamente se está disponível na farmácia parceira. Se não estiver, sugere alternativas disponíveis.'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
      title: 'Integrações',
      description: 'Conecte-se com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde.',
      color: 'indigo',
      fullDescription: 'Integre com laboratórios, farmácias, sistemas de pagamento e outras plataformas de saúde. API completa disponível, webhooks em tempo real e integração com os principais sistemas do mercado.',
      benefits: [
        'API completa disponível',
        'Integração com principais sistemas',
        'Webhooks em tempo real',
        'Integração com laboratórios',
        'Integração com farmácias',
        'Integração com sistemas de pagamento'
      ],
      features: [
        'API REST completa',
        'Webhooks em tempo real',
        'Integração com laboratórios',
        'Integração com farmácias',
        'Gateways de pagamento',
        'Sistemas de terceiros'
      ],
      example: 'Conecte seu sistema com o laboratório parceiro. Quando um exame fica pronto, ele é automaticamente importado para o prontuário do paciente, sem necessidade de upload manual.'
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Segurança e LGPD',
      description: 'Criptografia de dados, backup automático, conformidade com LGPD e auditoria completa de acessos.',
      color: 'red',
      fullDescription: 'Criptografia de dados, backup automático e conformidade total com LGPD e normas do CFM. Auditoria completa de acessos, controle de permissões e logs de todas as ações para garantir a segurança e privacidade dos dados.',
      benefits: [
        'Criptografia end-to-end',
        'Conformidade LGPD',
        'Auditoria completa de acessos',
        'Backup automático',
        'Controle de permissões',
        'Logs de todas as ações'
      ],
      features: [
        'Criptografia de dados',
        'Conformidade LGPD',
        'Auditoria de acessos',
        'Controle de permissões',
        'Backup automático',
        'Logs de atividades'
      ],
      example: 'Todos os dados são criptografados e armazenados com segurança. Você pode auditar quem acessou qual informação e quando, garantindo total conformidade com a LGPD.'
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      title: 'Backup Automático',
      description: 'Backup contínuo na nuvem, recuperação de dados e proteção contra perda de informações.',
      color: 'blue',
      fullDescription: 'Backup contínuo na nuvem com recuperação instantânea e proteção contra perda de dados. Múltiplos pontos de restauração, backup em servidores redundantes e testes de recuperação regulares.',
      benefits: [
        'Backup automático diário',
        'Recuperação instantânea',
        'Zero perda de dados',
        'Múltiplos pontos de restauração',
        'Backup em servidores redundantes',
        'Testes de recuperação regulares'
      ],
      features: [
        'Backup automático diário',
        'Múltiplos pontos de restauração',
        'Recuperação instantânea',
        'Servidores redundantes',
        'Testes automáticos',
        'Histórico de backups'
      ],
      example: 'Seu servidor local falha? Sem problemas! Todos os dados estão seguros na nuvem e podem ser recuperados instantaneamente, sem perda de informações.'
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Dashboard Analytics',
      description: 'Visão geral completa com métricas em tempo real, gráficos interativos e KPIs personalizados.',
      color: 'purple',
      fullDescription: 'Visão completa do seu negócio com métricas em tempo real, gráficos interativos e KPIs personalizados. Análise de performance, comparação de períodos e alertas de métricas para tomar decisões baseadas em dados.',
      benefits: [
        'Métricas em tempo real',
        'Gráficos interativos',
        'KPIs personalizados',
        'Comparação de períodos',
        'Alertas de métricas',
        'Exportação de dados'
      ],
      features: [
        'Dashboard personalizado',
        'Métricas em tempo real',
        'Gráficos interativos',
        'KPIs configuráveis',
        'Comparação de períodos',
        'Exportação de dados'
      ],
      example: 'Acesse um dashboard completo mostrando consultas do dia, receita do mês, taxa de ocupação, satisfação dos pacientes e muito mais - tudo atualizado em tempo real.'
    }
  ];
</script>

<section id="funcionalidades" class="py-24 bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
        Funcionalidades
      </span>
      <h2 class="section-title">Tudo que sua clínica precisa</h2>
      <p class="section-description">
        Um sistema completo e integrado com mais de 18 funcionalidades para gerenciar todos os aspectos da sua prática médica
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        {@const gradientClass = feature.color === 'blue' ? 'from-blue-500 to-blue-600' : 
          feature.color === 'purple' ? 'from-purple-500 to-purple-600' : 
          feature.color === 'indigo' ? 'from-indigo-500 to-indigo-600' : 
          feature.color === 'green' ? 'from-green-500 to-green-600' : 
          feature.color === 'pink' ? 'from-pink-500 to-pink-600' : 
          feature.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : 
          feature.color === 'red' ? 'from-red-500 to-red-600' : 
          feature.color === 'orange' ? 'from-orange-500 to-orange-600' : 
          feature.color === 'yellow' ? 'from-yellow-500 to-yellow-600' : 
          feature.color === 'teal' ? 'from-teal-500 to-teal-600' : 
          'from-blue-500 to-blue-600'}
        <div 
          class="card group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          on:click={() => openFeatureDetail(feature)}
          role="button"
          tabindex="0"
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openFeatureDetail(feature);
            }
          }}
        >
          <div class="w-16 h-16 bg-gradient-to-br {gradientClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={feature.icon} />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p class="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
          <div class="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Ver detalhes</span>
            <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <p class="text-gray-600 mb-6">
        E muito mais funcionalidades para transformar a gestão da sua clínica
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://upclinic-aa025.web.app/signup" 
          class="btn btn-primary btn-large"
        >
          Ver Todas as Funcionalidades
        </a>
        <button 
          type="button"
          on:click={openDemo}
          class="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 btn-large"
        >
          Solicitar Demonstração
        </button>
      </div>
    </div>
  </div>
  
  <FeatureDemoModal bind:this={demoModal} />
  <FeatureDetailModal bind:this={detailModal} />
</section>
