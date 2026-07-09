<script>
  import { t } from '$lib/i18n';

  const partners = [
    { name: 'Stripe', logo: '/Stripe-Emblem.png', url: 'https://stripe.com', role: 'Pagamentos' },
    { name: 'Firebase', logo: '/logo-vertical.png', url: 'https://firebase.google.com', role: 'Dados & Auth' },
    { name: 'AWS', logo: '/images.png', url: 'https://aws.amazon.com', role: 'Cloud' },
    { name: 'DigitalOcean', logo: '/download.png', url: 'https://www.digitalocean.com', role: 'Compute' },
    { name: 'SendGrid', logo: encodeURI('/download (1).png'), url: 'https://sendgrid.com', role: 'E-mail' },
  ];

  // Loop infinito suave
  const track = [...partners, ...partners, ...partners];

  $: trust = [
    $t('infra.t1'),
    $t('infra.t2'),
    $t('infra.t3'),
    $t('infra.t4'),
  ];
</script>

<section class="infra relative overflow-hidden">
  <div class="infra-bg" aria-hidden="true"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
    <div class="mx-auto max-w-2xl text-center mb-8 md:mb-10">
      <span class="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 ring-1 ring-slate-200/80 backdrop-blur">
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        {$t('infra.badge')}
      </span>
      <h2 class="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
        {$t('infra.title')}<span class="text-blue-600">{$t('infra.titleHi')}</span>
      </h2>
      <p class="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
        {$t('infra.sub')}
      </p>
    </div>

    <!-- Trust chips -->
    <div class="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-10">
      {#each trust as item}
        <span class="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200/90 shadow-sm">
          <svg class="h-3.5 w-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </span>
      {/each}
    </div>

    <!-- Marquee de logos em cards uniformes -->
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-[#f4f7fb] to-transparent"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-[#f4f7fb] to-transparent"></div>

      <div class="overflow-hidden py-1">
        <div class="infra-track flex w-max gap-3 sm:gap-4">
          {#each track as partner}
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              class="partner-card group flex w-[9.5rem] sm:w-[11rem] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-white/90 px-4 py-4 ring-1 ring-slate-200/80 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md hover:ring-blue-200"
              title={partner.name}
            >
              <div class="flex h-10 sm:h-12 w-full items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  class="partner-logo max-h-full max-w-[7.5rem] sm:max-w-[8.5rem] object-contain"
                  loading="lazy"
                />
              </div>
              <span class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-slate-400 group-hover:text-slate-600 transition-colors">
                {partner.role}
              </span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .infra {
    background: #f4f7fb;
  }

  .infra-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 20% 0%, rgba(59, 130, 246, 0.08), transparent 60%),
      radial-gradient(ellipse 50% 40% at 80% 100%, rgba(16, 185, 129, 0.07), transparent 55%);
    pointer-events: none;
  }

  .partner-logo {
    filter: grayscale(1) contrast(1.05);
    opacity: 0.72;
    transition: filter 0.25s ease, opacity 0.25s ease;
  }

  .partner-card:hover .partner-logo {
    filter: grayscale(0) contrast(1);
    opacity: 1;
  }

  @keyframes infra-scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-33.333%);
    }
  }

  .infra-track {
    animation: infra-scroll 28s linear infinite;
  }

  .infra-track:hover {
    animation-play-state: paused;
  }

  @media (max-width: 640px) {
    .infra-track {
      animation-duration: 22s;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .infra-track {
      animation: none;
    }
  }
</style>
