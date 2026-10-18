<script>
  import { onMount } from 'svelte';
  import { LOGIN_URL, TRIAL_PAGE_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';
  import { t } from '$lib/i18n';
  import { tilt } from '$lib/actions/motion';

  function trackLead(contentName = 'CTA Principal', source = 'Hero') {
    trackTrialCta(contentName, source);
  }

  let visible = false;
  let parallaxY = 0;

  onMount(() => {
    requestAnimationFrame(() => setTimeout(() => { visible = true; }, 60));

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onScroll = () => {
      parallaxY = Math.min(window.scrollY * 0.18, 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<section id="inicio" class="hero relative w-full overflow-hidden">
  <div class="up-aurora" aria-hidden="true"></div>
  <div class="up-grid-overlay" aria-hidden="true"></div>

  <div
    class="hero-media absolute inset-0 pointer-events-none"
    style="transform: translate3d(0, {parallaxY}px, 0);"
    aria-hidden="true"
  >
    <img
      src="/media/hero-pilates.webp"
      alt=""
      class="hero-bg-img"
      width="1600"
      height="1067"
      fetchpriority="high"
      decoding="async"
    />
    <div class="hero-veil"></div>
  </div>

  <div
    class="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
    style="z-index:3; min-height: 100vh; padding-top: 6.5rem; padding-bottom: 5rem;"
  >
    <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      <div class:up-in={visible} class="up-col">
        <p class="hero-brand">UpClinic</p>

        <h1 class="hero-title">
          {$t('hero.titleA')}<br />
          {$t('hero.titleB')}
          <span class="up-gradient-text"><br />{$t('hero.titleC')}<br />{$t('hero.titleD')}</span>
        </h1>

        <p class="hero-sub">
          {$t('hero.sub')}<strong>{$t('hero.subStrong')}</strong>{$t('hero.subEnd')}
        </p>
        <p class="hero-sub2">{$t('hero.sub2')}</p>

        <div class="flex flex-wrap gap-3 mb-8">
          <a
            href={TRIAL_PAGE_URL}
            class="up-btn-primary"
            style="min-height:2.85rem;"
            on:click={() => trackLead('CTA Testar 7 dias', 'Hero')}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="flex-shrink:0;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Teste grátis 7 dias
          </a>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            class="up-btn-ghost"
            style="min-height:2.85rem;"
          >
            {$t('hero.ctaLogin')}
          </a>
        </div>

        <div class="hero-trust">
          {#each $t('hero.trust') as item}
            <span>
              <svg width="16" height="16" fill="#0d9488" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {item}
            </span>
          {/each}
        </div>
      </div>

      <div class="relative hidden lg:block up-visual" class:up-in={visible} use:tilt={10} style="height: 540px;">
        <div class="phone-stage">
          <div class="phone-shell up-float">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <p class="phone-label">{$t('hero.cardAgenda')}</p>
              {#each [['08:00', 'Maria Oliveira', '#14b8a6'], ['09:30', 'João Pereira', '#f0796a'], ['10:15', 'Ana Souza', '#0d9488']] as [h, n, c]}
                <div class="phone-row">
                  <span class="phone-time">{h}</span>
                  <span class="phone-name">{n}</span>
                  <span class="phone-dot" style="background:{c};"></span>
                </div>
              {/each}
            </div>
          </div>

          <div class="float-card up-glass up-float-delayed card-wa">
            <div class="float-card-head">
              <div class="wa-icon">
                <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.683-1.448L.057 24z"/></svg>
              </div>
              <div>
                <div class="float-title">{$t('hero.cardReminder')}</div>
                <div class="float-sub">{$t('hero.cardReminderSub')}</div>
              </div>
            </div>
            <p class="float-msg">{$t('hero.cardMsg')}</p>
          </div>

          <div class="float-card up-glass up-float-slow card-bill">
            <div class="float-title">{$t('hero.cardBilling')}</div>
            <div class="float-big">Mensalidades + sessões</div>
            <div class="float-sub">{$t('hero.cardBillingSub')}</div>
            <div class="progress"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    background: linear-gradient(165deg, #f7fbfa 0%, #e8f7f4 42%, #fff5f2 100%);
  }

  .hero-media {
    z-index: 0;
    will-change: transform;
  }

  .hero-bg-img {
    position: absolute;
    right: -8%;
    top: 8%;
    width: min(58vw, 760px);
    height: auto;
    object-fit: cover;
    border-radius: 0;
    opacity: 0.28;
    mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 78%, transparent 100%);
    -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 28%, #000 78%, transparent 100%);
  }

  .hero-veil {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(105deg, rgba(247, 251, 250, 0.96) 0%, rgba(247, 251, 250, 0.78) 48%, rgba(247, 251, 250, 0.35) 100%);
  }

  .hero-brand {
    margin: 0 0 1rem;
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.25rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #0f766e;
  }

  .hero-title {
    font-size: clamp(1.65rem, 3.4vw, 2.55rem);
    font-weight: 700;
    line-height: 1.15;
    color: #0f1f1c;
    letter-spacing: -0.025em;
    margin-bottom: 1.15rem;
  }

  .hero-sub {
    font-size: 1.08rem;
    color: #3d524d;
    max-width: 540px;
    line-height: 1.65;
    margin-bottom: 0.65rem;
  }

  .hero-sub strong {
    color: #0d9488;
  }

  .hero-sub2 {
    font-size: 0.9rem;
    color: #6b817b;
    margin-bottom: 2rem;
  }

  .hero-trust {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem 1.1rem;
  }

  .hero-trust span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: #4a625c;
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .up-col {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .up-visual {
    opacity: 0;
    transform: translateY(36px) scale(0.98);
    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.12s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.12s;
    transform-style: preserve-3d;
  }
  .up-in {
    opacity: 1 !important;
    transform: none !important;
  }

  .phone-stage {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1100px;
  }

  .phone-shell {
    position: absolute;
    left: 18%;
    top: 4%;
    width: 280px;
    border-radius: 2rem;
    background: linear-gradient(160deg, #ffffff, #f0faf8);
    border: 1px solid rgba(13, 148, 136, 0.15);
    box-shadow: 0 30px 60px rgba(15, 118, 110, 0.14);
    padding: 14px 12px 18px;
    transform: rotateY(-8deg) rotateX(4deg);
  }

  .phone-notch {
    width: 88px;
    height: 10px;
    margin: 0 auto 14px;
    border-radius: 999px;
    background: #0f1f1c;
    opacity: 0.12;
  }

  .phone-screen {
    background: #fff;
    border-radius: 1.25rem;
    padding: 14px;
    border: 1px solid rgba(13, 148, 136, 0.08);
  }

  .phone-label {
    color: #5b6f6a;
    font-size: 0.72rem;
    font-weight: 700;
    margin: 0 0 12px;
  }

  .phone-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .phone-time {
    background: #0d9488;
    color: #fff;
    font-size: 0.68rem;
    font-weight: 800;
    padding: 3px 7px;
    border-radius: 6px;
  }

  .phone-name {
    color: #0f1f1c;
    font-size: 0.8rem;
    flex: 1;
  }

  .phone-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .float-card {
    position: absolute;
    border-radius: 1.15rem;
    padding: 14px 16px;
    width: 250px;
  }

  .card-wa {
    top: 120px;
    right: 0;
  }

  .card-bill {
    bottom: 24px;
    left: 8%;
    width: 260px;
  }

  .float-card-head {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .wa-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #25d366;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .float-title {
    color: #0f1f1c;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .float-sub {
    color: #0d9488;
    font-size: 0.66rem;
    font-weight: 600;
  }

  .float-msg {
    margin: 0;
    background: rgba(13, 148, 136, 0.08);
    border: 1px solid rgba(13, 148, 136, 0.16);
    border-radius: 12px 12px 12px 4px;
    padding: 9px 11px;
    color: #24443e;
    font-size: 0.72rem;
    line-height: 1.4;
  }

  .float-big {
    color: #0f1f1c;
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.2;
    margin: 4px 0;
  }

  .progress {
    height: 6px;
    background: rgba(13, 148, 136, 0.12);
    border-radius: 999px;
    margin-top: 10px;
    overflow: hidden;
  }

  .progress span {
    display: block;
    height: 100%;
    width: 78%;
    background: linear-gradient(90deg, #0d9488, #14b8a6);
    border-radius: 999px;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-media {
      transform: none !important;
    }
  }
</style>
