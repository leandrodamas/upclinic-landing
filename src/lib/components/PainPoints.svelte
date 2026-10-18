<script lang="ts">
  import { reveal } from '$lib/actions/motion';
  import { TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

  const pains = [
    {
      title: 'Agenda cheia de buracos',
      text: 'Encaixes, cancelamentos de última hora e horários ociosos drenam o faturamento do studio e do consultório.',
      img: '/media/studio.webp',
      accent: '#f97316'
    },
    {
      title: 'Faltas que poderiam ser evitadas',
      text: 'Sem lembrete no WhatsApp, o paciente esquece. Você perde a sessão e o ritmo do tratamento.',
      img: '/media/pilates-class.webp',
      accent: '#f0796a'
    },
    {
      title: 'Evolução espalhada em papel',
      text: 'Prontuário em planilha ou caderno atrasa a sessão e dificulta acompanhar o progresso do paciente.',
      img: '/media/fisio.webp',
      accent: '#ea580c'
    },
    {
      title: 'Financeiro no escuro',
      text: 'Mensalidades, pacotes e inadimplência sem um painel claro — tempo perdido correndo atrás de pagamento.',
      img: '/media/rehab.webp',
      accent: '#fb923c'
    }
  ];
</script>

<section id="dores" class="pains" aria-labelledby="pains-title">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="head" use:reveal>
      <p class="kicker">Para quem vive a rotina da clínica</p>
      <h2 id="pains-title">Você reconhece essas dores?</h2>
      <p class="sub">
        Feito para fisioterapeutas, studios de pilates, terapeutas ocupacionais, RPG, osteopatia e
        profissionais de reabilitação — autônomos ou donos de clínica.
      </p>
    </div>

    <div class="grid">
      {#each pains as p, i}
        <article class="item" use:reveal={{ delay: i * 80 }}>
          <div class="media">
            <img src={p.img} alt="" width="600" height="400" loading="lazy" decoding="async" />
          </div>
          <div class="body">
            <span class="bar" style="background:{p.accent};"></span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        </article>
      {/each}
    </div>

    <div class="cta" use:reveal>
      <a
        href={TRIAL_PAGE_URL}
        class="up-btn-primary"
        on:click={() => trackTrialCta('CTA dores — teste', 'Pain Points')}
      >
        Teste grátis 7 dias
      </a>
    </div>
  </div>
</section>

<style>
  .pains {
    padding: 5rem 0;
    background: #fff;
  }

  .head {
    max-width: 40rem;
    margin: 0 auto 2.75rem;
    text-align: center;
  }

  .kicker {
    margin: 0 0 0.75rem;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #f97316;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0c1222;
  }

  .sub {
    margin: 0.85rem 0 0;
    color: #5c6578;
    line-height: 1.6;
    font-size: 1.02rem;
  }

  .grid {
    display: grid;
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .item {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1rem;
    align-items: stretch;
    background: #fffaf5;
    border: 1px solid rgba(249, 115, 22, 0.1);
    border-radius: 1.25rem;
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .item:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(234, 88, 12, 0.08);
  }

  .media {
    min-height: 100%;
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .body {
    padding: 1.1rem 1.1rem 1.1rem 0;
  }

  .bar {
    display: block;
    width: 2rem;
    height: 3px;
    border-radius: 999px;
    margin-bottom: 0.65rem;
  }

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0c1222;
  }

  .body p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.55;
    color: #5c6578;
  }

  .cta {
    margin-top: 2.25rem;
    text-align: center;
  }

  @media (max-width: 560px) {
    .item {
      grid-template-columns: 1fr;
    }
    .media {
      height: 140px;
    }
    .body {
      padding: 0 1rem 1.1rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .item {
      transition: none;
    }
  }
</style>
