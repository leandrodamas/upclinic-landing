<script lang="ts">
  import { gsapReveal } from '$lib/actions/gsapMotion';
  import { TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';
  import { prefersReducedMotion } from '$lib/actions/gsapMotion';
  import { onMount } from 'svelte';

  let allowVideo = true;
  onMount(() => {
    allowVideo = !prefersReducedMotion();
  });

  const rows = [
    {
      kicker: 'Agenda + WhatsApp',
      title: 'Lembretes que saem do seu número',
      text: 'Robô de menu e lembretes 24h e 2h antes — sem tarifa por mensagem*. Menos buracos na agenda de fisio e pilates.',
      img: '/media/recepcao.webp',
      video: '/media/video/loop-pilates.mp4',
      reverse: false,
      band: '#fff7ed'
    },
    {
      kicker: 'Prontuário e evolução',
      title: 'Histórico do paciente na ponta dos dedos',
      text: 'Registre evolução, objetivos e anexos entre uma sessão e outra — no celular ou no PC, sem planilha solta.',
      img: '/media/fisio2.webp',
      video: '',
      reverse: true,
      band: '#fff'
    },
    {
      kicker: 'Financeiro',
      title: 'Mensalidades e pacotes sob controle',
      text: 'Cobrança recorrente, pacotes de sessões e visão clara do mês — menos tempo correndo atrás de pagamento.',
      img: '/media/alongamento.webp',
      video: '/media/video/loop-movimento.mp4',
      reverse: false,
      band: '#fff5f2'
    },
    {
      kicker: 'Studio e clínica',
      title: 'Do solo à equipe completa',
      text: 'Planos Solo, Clínica/Studio e Clínica Plus com os valores da página. Cresça sem trocar de sistema.',
      img: '/media/movimento.webp',
      video: '',
      reverse: true,
      band: '#fff7ed'
    }
  ];
</script>

{#each rows as row, i}
  <section
    class="story"
    class:reverse={row.reverse}
    style="background:{row.band};"
    use:gsapReveal
    aria-labelledby="story-{i}"
  >
    <div class="container inner">
      <div class="media" data-reveal>
        {#if row.video && allowVideo}
          <video
            class="clip"
            autoplay
            muted
            loop
            playsinline
            preload="none"
            poster={row.img}
          >
            <source src={row.video} type="video/mp4" />
          </video>
        {:else}
          <img src={row.img} alt="" width="1200" height="800" loading="lazy" decoding="async" />
        {/if}
        <div class="glow" aria-hidden="true"></div>
      </div>
      <div class="copy" data-reveal>
        <p class="kicker">{row.kicker}</p>
        <h2 id="story-{i}">{row.title}</h2>
        <p class="text">{row.text}</p>
        <a
          href={TRIAL_PAGE_URL}
          class="up-btn-primary"
          on:click={() => trackTrialCta(`CTA story ${i}`, 'Photo Story')}
        >
          Teste grátis 7 dias
        </a>
      </div>
    </div>
  </section>
{/each}

<style>
  .story {
    padding: 4.5rem 0;
  }

  .inner {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  @media (min-width: 900px) {
    .inner {
      grid-template-columns: 1.1fr 1fr;
      gap: 3rem;
    }
    .reverse .inner {
      direction: rtl;
    }
    .reverse .inner > * {
      direction: ltr;
    }
  }

  .media {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 28px 60px rgba(234, 88, 12, 0.14);
    min-height: 280px;
  }

  .media img,
  .clip {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 280px;
    max-height: 420px;
    object-fit: cover;
  }

  .glow {
    position: absolute;
    inset: auto -10% -20% auto;
    width: 55%;
    height: 55%;
    background: radial-gradient(circle, rgba(249, 115, 22, 0.35), transparent 70%);
    pointer-events: none;
  }

  .kicker {
    margin: 0 0 0.55rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #f97316;
  }

  h2 {
    margin: 0 0 0.85rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(1.55rem, 3vw, 2.2rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0c1222;
    line-height: 1.15;
  }

  .text {
    margin: 0 0 1.35rem;
    color: #5c6578;
    font-size: 1.05rem;
    line-height: 1.65;
    max-width: 32rem;
  }
</style>
