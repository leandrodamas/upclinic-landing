<script lang="ts">
  import { reveal } from '$lib/actions/motion';
  import { t } from '$lib/i18n';
  import { REGISTER_URL } from '$lib/constants';
  import { trackTrialCta } from '$lib/analytics';
</script>

<section
  id="por-que-trocar"
  class="relative overflow-hidden"
  style="background:#f8fafc; padding:4.5rem 0;"
  aria-labelledby="why-switch-title"
>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div use:reveal class="mx-auto max-w-2xl text-center mb-10">
      <h2
        id="why-switch-title"
        class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900"
      >
        {$t('whySwitch.title')}
      </h2>
      <p class="mt-2 text-sm sm:text-base text-slate-600">{$t('whySwitch.sub')}</p>
    </div>

    <ul class="mx-auto max-w-3xl space-y-4">
      {#each ['c1', 'c2', 'c3'] as key, i}
        <li
          use:reveal={{ delay: i * 70 }}
          class="flex gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-200/80 shadow-sm"
        >
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
            style="background:linear-gradient(135deg,#2563eb,#0d9488);">{i + 1}</span
          >
          <div>
            <p class="font-bold text-slate-900">{$t(`whySwitch.${key}t`)}</p>
            <p class="mt-1 text-sm text-slate-600 leading-relaxed">{$t(`whySwitch.${key}d`)}</p>
          </div>
        </li>
      {/each}
    </ul>

    <p use:reveal class="mx-auto mt-6 max-w-3xl text-xs text-slate-500 text-center">
      {$t('whySwitch.disclaimer')}
    </p>

    <div use:reveal class="mt-8 text-center">
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center min-h-[2.75rem] px-5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition"
        on:click={() => trackTrialCta('Por que trocar — teste', 'Why Switch')}
      >
        {$t('whySwitch.cta')}
      </a>
    </div>
  </div>
</section>
