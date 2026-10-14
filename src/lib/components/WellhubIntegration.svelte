<script lang="ts">
  import { CONTACT } from '$lib/constants';

  /** Compact layout for /teste (narrow conversion page). */
  export let compact = false;

  const whatsappHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent(
    'Olá! Quero saber como cadastrar minha clínica no Wellhub com o UpClinic'
  )}`;

  /*
    Logo source:
    Official Wellhub horizontal wordmark (magenta) from wellhub.com public CDN:
    https://assets-cdn.wellhub.com/images/mep-cms/horizontal_complete_logo_magenta_3_e637a577de.png
    Served on the brand homepage / press materials. brandcenter-wellhub.com logo.zip
    (SVG package) returned AllAccessDisabled — no public SVG recovered from
    Wikimedia Commons either (only PNG / old Gympass SVG).
    TODO: replace with official SVG from brandcenter-wellhub.com when downloadables are available.
  */
  const LOGO_SRC = '/wellhub-logo-horizontal-magenta.png';
</script>

<section
  class="wh"
  class:wh--compact={compact}
  aria-labelledby="wellhub-title"
  id="integracao-wellhub"
>
  <div class="wh-inner">
    <div class="wh-brand-row">
      <p class="wh-kicker">Integração UpClinic</p>
      <!-- TODO: official Wellhub SVG from brandcenter-wellhub.com when publicly available -->
      <img
        class="wh-logo"
        src={LOGO_SRC}
        alt="Wellhub"
        width="196"
        height="38"
        loading="lazy"
        decoding="async"
      />
    </div>

    <h2 id="wellhub-title">Integrado com o Wellhub</h2>

    <p class="wh-body">
      O UpClinic tem integração com o Wellhub: quando o paciente agenda pelo app, o horário entra
      direto na sua agenda, com check-in e cadastro automáticos.
    </p>

    <p class="wh-serve">
      O Wellhub conecta beneficiários a <strong>academias</strong>, <strong>fisioterapia</strong> e
      <strong>pilates</strong> — e o UpClinic sincroniza a agenda da sua clínica com esses agendamentos.
    </p>

    <div class="wh-cta" role="note">
      <p>
        Sua clínica precisa ter contrato de parceria com o Wellhub. A gente te ajuda a se cadastrar.
      </p>
      <a class="wh-btn" href={whatsappHref} target="_blank" rel="noopener noreferrer">
        Falar sobre cadastro no Wellhub
      </a>
    </div>
  </div>
</section>

<style>
  .wh {
    --wh-magenta: #f2496b;
    --wh-offwhite: #fbf8ec;
    --wh-black: #1d1d1f;
    background:
      radial-gradient(ellipse 70% 60% at 12% 0%, rgba(242, 73, 107, 0.12), transparent 55%),
      radial-gradient(ellipse 50% 45% at 90% 100%, rgba(242, 73, 107, 0.08), transparent 50%),
      var(--wh-offwhite);
    color: var(--wh-black);
    padding: 4.5rem 1.15rem;
  }

  .wh--compact {
    padding: 2.25rem 0;
    background: transparent;
  }

  .wh-inner {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }

  .wh--compact .wh-inner {
    background: var(--wh-offwhite);
    border: 1px solid rgba(242, 73, 107, 0.28);
    border-radius: 18px;
    padding: 1.75rem 1.15rem 1.5rem;
    max-width: none;
  }

  .wh-brand-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 1.15rem;
  }

  .wh-kicker {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--wh-magenta);
  }

  .wh-logo {
    height: 36px;
    width: auto;
    max-width: min(220px, 70vw);
    object-fit: contain;
    display: block;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: clamp(1.65rem, 3.6vw, 2.35rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    color: var(--wh-black);
  }

  .wh-body {
    margin: 0 auto 0.9rem;
    max-width: 38rem;
    font-size: 1.05rem;
    line-height: 1.6;
    color: rgba(29, 29, 31, 0.88);
  }

  .wh-serve {
    margin: 0 auto 1.5rem;
    max-width: 36rem;
    font-size: 0.95rem;
    line-height: 1.55;
    color: rgba(29, 29, 31, 0.75);
  }

  .wh-serve strong {
    color: var(--wh-black);
    font-weight: 700;
  }

  .wh-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.85rem;
    max-width: 34rem;
    margin: 0 auto;
    padding: 1.1rem 1.15rem;
    border-radius: 14px;
    background: rgba(242, 73, 107, 0.08);
    border: 1px solid rgba(242, 73, 107, 0.22);
  }

  .wh-cta p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 600;
    color: var(--wh-black);
  }

  .wh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--wh-magenta);
    color: #fff;
    font-weight: 800;
    font-size: 0.95rem;
    text-decoration: none;
    padding: 0.8rem 1.25rem;
    border-radius: 12px;
    transition: transform 0.15s ease, filter 0.15s ease;
  }

  .wh-btn:hover,
  .wh-btn:focus-visible {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  .wh-btn:focus-visible {
    outline: 3px solid rgba(242, 73, 107, 0.45);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    .wh-btn {
      transition: none;
    }
  }
</style>
