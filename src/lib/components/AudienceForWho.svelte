<script lang="ts">
  import { gsapReveal } from '$lib/actions/gsapMotion';
  import { TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';

  const audiences = [
    {
      title: 'Fisioterapia',
      text: 'Agenda de sessões, evolução clínica e financeiro — da bola suíça ao home care.',
      img: '/media/fisio-paciente-card.webp',
      color: '#0d9488'
    },
    {
      title: 'Pilates',
      text: 'Turmas, mensalidades, check-in Wellhub e remarcações sem planilha.',
      img: '/media/reformer-card.webp',
      color: '#0f766e'
    },
    {
      title: 'RPG & osteopatia',
      text: 'Histórico do paciente e lembretes no WhatsApp para manter a continuidade.',
      img: '/media/ombro-card.webp',
      color: '#14b8a6'
    },
    {
      title: 'Terapia ocupacional',
      text: 'Evolução por sessão, pacotes e cobrança recorrente no mesmo login.',
      img: '/media/to-rehab.webp',
      color: '#f0796a'
    },
    {
      title: 'Reabilitação',
      text: 'Joelho, ombro, retorno ao esporte — com agenda anti-falta.',
      img: '/media/joelho-card.webp',
      color: '#e85a48'
    },
    {
      title: 'Studio / clínica',
      text: 'Até 15 profissionais no Clínica Plus. Equipe alinhada, recepção leve.',
      img: '/media/studio-pilates-card.webp',
      color: '#0d9488'
    }
  ];
</script>

<section class="aud" aria-labelledby="aud-title" use:gsapReveal>
  <div class="container">
    <div class="head" data-reveal>
      <p class="kicker">UpClinic para quem é</p>
      <h2 id="aud-title">Feito para profissionais de movimento</h2>
      <p class="sub">
        Fisioterapeutas, studios de pilates, TO, RPG, osteopatia e donos de clínica — autônomos ou com equipe.
      </p>
    </div>

    <div class="grid">
      {#each audiences as a, i}
        <article class="card" data-reveal style="--c:{a.color}; animation-delay:{i * 40}ms">
          <div class="photo">
            <img src={a.img} alt="" width="720" height="540" loading="lazy" decoding="async" />
          </div>
          <div class="body">
            <h3>{a.title}</h3>
            <p>{a.text}</p>
          </div>
        </article>
      {/each}
    </div>

    <div class="cta" data-reveal>
      <a
        href={TRIAL_PAGE_URL}
        class="up-btn-primary"
        on:click={() => trackTrialCta('CTA audiências', 'Audience For Who')}
      >
        Teste grátis 7 dias
      </a>
    </div>
  </div>
</section>

<style>
  .aud {
    padding: 5rem 0;
    background: linear-gradient(180deg, #fff 0%, #eef8f6 100%);
  }

  .head {
    text-align: center;
    max-width: 40rem;
    margin: 0 auto 2.5rem;
  }

  .kicker {
    margin: 0 0 0.6rem;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #0d9488;
  }

  h2 {
    margin: 0;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.7rem, 3.5vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f1f1c;
  }

  .sub {
    margin: 0.85rem 0 0;
    color: #5b6f6a;
    line-height: 1.6;
  }

  .grid {
    display: grid;
    gap: 1.1rem;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .card {
    background: #fff;
    border-radius: 1.25rem;
    overflow: hidden;
    border: 1px solid rgba(13, 148, 136, 0.12);
    box-shadow: 0 16px 40px rgba(15, 118, 110, 0.08);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 24px 50px rgba(15, 118, 110, 0.14);
  }

  .photo {
    height: 160px;
    overflow: hidden;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .card:hover .photo img {
    transform: scale(1.06);
  }

  .body {
    padding: 1.1rem 1.15rem 1.25rem;
    border-top: 3px solid var(--c, #0d9488);
  }

  h3 {
    margin: 0 0 0.4rem;
    font-size: 1.1rem;
    font-weight: 800;
    color: #0f1f1c;
  }

  .body p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #5b6f6a;
  }

  .cta {
    margin-top: 2rem;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .card,
    .photo img {
      transition: none;
    }
  }
</style>
