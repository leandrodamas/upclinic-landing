<script>
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';

  const items = [
    { label: '01', key: 'impact.s1', color: '#34d399' },
    { label: '02', key: 'impact.s2', color: '#60a5fa' },
    { label: '03', key: 'impact.s3', color: '#fbbf24' },
    { label: '04', key: 'impact.s4', color: '#c4b5fd' },
  ];
</script>

<section class="relative overflow-hidden" style="background: linear-gradient(180deg,#050b23 0%, #0a1a44 100%); padding-top:4.5rem; padding-bottom:5rem;">
  <div class="up-aurora" style="opacity:0.4;"></div>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <div class="text-center max-w-2xl mx-auto mb-10" use:reveal>
      <h2 style="font-size:clamp(1.6rem,3vw,2.4rem); font-weight:900; color:#fff; letter-spacing:-0.02em;">
        {$t('impact.title')}<span class="up-gradient-text">{$t('impact.titleHi')}</span>
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {#each items as s, i}
        <div use:reveal={{ delay: i * 80 }} class="up-glass" style="padding:22px 18px; border-radius:20px;">
          <div style="font-size:0.75rem; font-weight:800; letter-spacing:0.12em; color:{s.color}; margin-bottom:0.65rem;">{s.label}</div>
          <p style="color:rgba(219,234,254,0.92); font-size:0.95rem; line-height:1.45; font-weight:600; margin:0;">{$t(s.key)}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
