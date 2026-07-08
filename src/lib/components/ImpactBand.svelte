<script>
  import { reveal, countUp } from '$lib/actions/motion';
  import { t } from '$lib/i18n';

  const stats = [
    { opts: { to: 80, suffix: '%' }, key: 'impact.s1', color: '#34d399' },
    { opts: { to: 250, prefix: '+', suffix: '%' }, key: 'impact.s2', color: '#60a5fa' },
    { opts: { to: 60, suffix: '%' }, key: 'impact.s3', color: '#fbbf24' },
    { opts: { to: 2, suffix: 'h' }, key: 'impact.s4', color: '#c4b5fd' },
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
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {#each stats as s, i}
        <div use:reveal={{ delay: i * 80 }} class="text-center up-glass" style="padding:26px 16px; border-radius:20px;">
          <div style="font-size:clamp(2.2rem,4vw,3rem); font-weight:900; line-height:1; color:{s.color};">
            <span use:countUp={s.opts}>0</span>
          </div>
          <p style="color:rgba(191,219,254,0.85); font-size:0.82rem; line-height:1.45; margin-top:10px;">{$t(s.key)}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
