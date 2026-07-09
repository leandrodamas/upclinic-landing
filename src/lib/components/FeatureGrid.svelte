<script>
  import { onMount } from 'svelte';
  import { reveal } from '$lib/actions/motion';
  import { REGISTER_URL } from '$lib/constants';
  import { t } from '$lib/i18n';
  import FeatureDemoModal from './FeatureDemoModal.svelte';

  let demoModal;
  let active = 0;
  let mounted = false;
  let autoPlay = true;
  let pulse = 0;
  let mx = 50;
  let my = 40;

  // 12 módulos em órbita — o preview muda conforme o ativo
  const modules = [
    {
      id: 'agenda',
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      accent: '#34d399',
      plan: 'all',
      preview: 'agenda'
    },
    {
      id: 'prontuario',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      accent: '#60a5fa',
      plan: 'all',
      preview: 'prontuario'
    },
    {
      id: 'whatsapp',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      accent: '#25d366',
      plan: 'all',
      preview: 'whatsapp'
    },
    {
      id: 'telemedicina',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      accent: '#818cf8',
      plan: 'pro',
      preview: 'tele'
    },
    {
      id: 'financeiro',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      accent: '#fbbf24',
      plan: 'all',
      preview: 'finance'
    },
    {
      id: 'ia',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      accent: '#c084fc',
      plan: 'pro',
      preview: 'ia'
    },
    {
      id: 'homecare',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      accent: '#2dd4bf',
      plan: 'ent',
      preview: 'homecare'
    },
    {
      id: 'injetaveis',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      accent: '#f472b6',
      plan: 'pro',
      preview: 'inject'
    },
    {
      id: 'tiss',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      accent: '#38bdf8',
      plan: 'ent',
      preview: 'tiss'
    },
    {
      id: 'laboratorio',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      accent: '#a78bfa',
      plan: 'pro',
      preview: 'lab'
    },
    {
      id: 'fidelizacao',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      accent: '#fb7185',
      plan: 'all',
      preview: 'loyalty'
    },
    {
      id: 'sngpc',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      accent: '#f87171',
      plan: 'ent',
      preview: 'sngpc'
    }
  ];

  $: mod = modules[active];
  $: title = $t(`featCore.mods.${mod.id}.title`);
  $: desc = $t(`featCore.mods.${mod.id}.desc`);
  $: signal = $t(`featCore.mods.${mod.id}.signal`);

  function planLabel(p) {
    if (p === 'ent') return $t('featCore.planEnt');
    if (p === 'pro') return $t('featCore.planPro');
    return $t('featCore.planAll');
  }

  function select(i) {
    active = i;
    autoPlay = false;
  }

  function next() {
    active = (active + 1) % modules.length;
  }

  function prev() {
    active = (active - 1 + modules.length) % modules.length;
  }

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx = ((e.clientX - r.left) / r.width) * 100;
    my = ((e.clientY - r.top) / r.height) * 100;
  }

  function openDemo() {
    if (demoModal) demoModal.open();
  }

  // Posição orbital (ângulo em graus)
  function orbitStyle(i, total) {
    const angle = (i / total) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const rx = 42; // %
    const ry = 38;
    const x = 50 + rx * Math.cos(rad);
    const y = 50 + ry * Math.sin(rad);
    return `left:${x}%; top:${y}%;`;
  }

  onMount(() => {
    mounted = true;
    const tick = setInterval(() => {
      pulse += 1;
      if (autoPlay) next();
    }, 4200);
    return () => clearInterval(tick);
  });
</script>

<section
  id="funcionalidades"
  class="feat-core relative overflow-hidden"
  style="background:#050b23; padding-top:5.5rem; padding-bottom:6rem;"
  role="region"
  aria-label="Funcionalidades"
  on:mousemove={onMove}
>
  <div class="up-aurora" style="opacity:0.55;"></div>
  <div class="up-grid-overlay" style="opacity:0.35;"></div>

  <!-- Cursor glow -->
  <div
    class="pointer-events-none absolute inset-0"
    style="z-index:1; background:radial-gradient(520px circle at {mx}% {my}%, rgba(52,211,153,0.12), transparent 45%);"
    aria-hidden="true"
  ></div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative" style="z-index:2;">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-10 md:mb-14" use:reveal>
      <span
        class="inline-flex items-center gap-2 mb-5"
        style="background:rgba(56,189,248,0.12); border:1px solid rgba(56,189,248,0.35); padding:6px 14px; border-radius:999px;"
      >
        <span class="up-pulse-dot" style="width:7px;height:7px;background:#38bdf8;border-radius:50%;"></span>
        <span style="color:#7dd3fc; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:0.14em;">
          {$t('featCore.badge')}
        </span>
      </span>
      <h2 style="font-size:clamp(2rem,4.4vw,3.2rem); font-weight:900; color:#fff; line-height:1.08; letter-spacing:-0.02em; margin-bottom:1rem;">
        {$t('featCore.titleA')}
        <span class="up-gradient-text">{$t('featCore.titleHi')}</span>
      </h2>
      <p style="color:rgba(191,219,254,0.82); font-size:1.05rem; line-height:1.65;">
        {$t('featCore.sub')}
      </p>
    </div>

    <!-- Stage: orbit + live panel -->
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      <!-- ORBIT -->
      <div class="lg:col-span-5" use:reveal>
        <div class="feat-orbit relative mx-auto" class:feat-in={mounted} style="width:min(100%,420px); aspect-ratio:1;">
          <!-- Rings -->
          <div class="feat-ring feat-ring-a" aria-hidden="true"></div>
          <div class="feat-ring feat-ring-b" aria-hidden="true"></div>
          <div class="feat-ring feat-ring-c" aria-hidden="true"></div>

          <!-- Connection lines (SVG) -->
          <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
            {#each modules as m, i}
              {@const angle = (i / modules.length) * 360 - 90}
              {@const rad = (angle * Math.PI) / 180}
              {@const x = 50 + 42 * Math.cos(rad)}
              {@const y = 50 + 38 * Math.sin(rad)}
              <line
                x1="50" y1="50" x2={x} y2={y}
                stroke={i === active ? m.accent : 'rgba(147,197,253,0.12)'}
                stroke-width={i === active ? '0.45' : '0.2'}
                style="transition: stroke 0.35s ease;"
              />
            {/each}
          </svg>

          <!-- Core -->
          <div class="feat-core-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="feat-core-glow" style="background:{mod.accent};"></div>
            <div class="feat-core-inner">
              <div class="feat-core-scan"></div>
              <span class="feat-core-label">UP</span>
              <span class="feat-core-sub">{$t('featCore.coreLabel')}</span>
            </div>
          </div>

          <!-- Satellites -->
          {#each modules as m, i}
            <button
              type="button"
              class="feat-sat"
              class:feat-sat-on={i === active}
              style="{orbitStyle(i, modules.length)} --sat:{m.accent};"
              on:click={() => select(i)}
              aria-pressed={i === active}
              aria-label={$t(`featCore.mods.${m.id}.title`)}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d={m.icon} />
              </svg>
            </button>
          {/each}
        </div>

        <p class="text-center mt-5 text-xs" style="color:rgba(147,197,253,0.55);">
          {$t('featCore.hint')}
        </p>
      </div>

      <!-- LIVE PANEL -->
      <div class="lg:col-span-7" use:reveal={{ delay: 100 }}>
        <div class="up-glow-border" style="padding:0;">
          <div class="feat-panel relative overflow-hidden" style="border-radius:1.5rem; background:linear-gradient(165deg,#071233 0%,#0a1a44 55%,#061528 100%);">
            <!-- Top bar -->
            <div class="flex items-center gap-3 px-4 py-3 sm:px-5" style="border-bottom:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03);">
              <span class="flex gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
              </span>
              <div class="flex-1 font-mono text-[11px] truncate" style="color:rgba(147,197,253,0.65);">
                upclinic://modules/{mod.id}
              </div>
              <span
                class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style="background:rgba(52,211,153,0.12); color:#6ee7b7; border:1px solid rgba(52,211,153,0.3);"
              >
                {$t('featCore.live')}
              </span>
            </div>

            <div class="p-5 sm:p-7">
              <!-- Meta -->
              <div class="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div class="flex items-center gap-3 min-w-0">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style="background:linear-gradient(135deg,{mod.accent},{mod.accent}88); box-shadow:0 8px 24px {mod.accent}44;"
                  >
                    <svg width="22" height="22" fill="none" stroke="#fff" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d={mod.icon} />
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <h3 class="text-xl sm:text-2xl font-extrabold text-white truncate" style="letter-spacing:-0.02em;">
                      {title}
                    </h3>
                    <p class="text-xs mt-0.5" style="color:rgba(191,219,254,0.65);">{signal}</p>
                  </div>
                </div>
                <span
                  class="text-[11px] font-bold px-3 py-1.5 rounded-full shrink-0"
                  style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.12); color:#dbeafe;"
                >
                  {planLabel(mod.plan)}
                </span>
              </div>

              <p class="mb-6 text-sm sm:text-base leading-relaxed" style="color:rgba(219,234,254,0.88);">
                {desc}
              </p>

              <!-- Dynamic preview surface -->
              <div class="feat-preview mb-6" style="--accent:{mod.accent};">
                {#key active}
                  <div class="feat-preview-in">
                    {#if mod.preview === 'agenda'}
                      <div class="space-y-2">
                        {#each [['08:00','Maria Oliveira','#34d399'],['09:30','João Pereira','#60a5fa'],['10:15','Ana Souza','#c4b5fd']] as [h,n,c]}
                          <div class="flex items-center gap-2 rounded-lg px-3 py-2" style="background:rgba(255,255,255,0.04);">
                            <span class="text-[11px] font-black text-white px-2 py-0.5 rounded" style="background:{c};">{h}</span>
                            <span class="text-sm text-white/90 flex-1">{n}</span>
                            <span class="h-2 w-2 rounded-full" style="background:{c};"></span>
                          </div>
                        {/each}
                      </div>
                    {:else if mod.preview === 'whatsapp'}
                      <div class="rounded-xl p-3" style="background:#0b141a;">
                        <div class="rounded-lg px-3 py-2 mb-2 max-w-[90%]" style="background:#1f2c33; color:#e9edef; font-size:0.78rem;">
                          {$t('featCore.preview.waIn')}
                        </div>
                        <div class="rounded-lg px-3 py-2 ml-auto max-w-[60%]" style="background:#005c4b; color:#e9ffe9; font-size:0.78rem;">
                          1 ✅
                        </div>
                        <div class="mt-2 text-center text-[11px] font-bold" style="color:#6ee7b7;">{$t('featCore.preview.waOk')}</div>
                      </div>
                    {:else if mod.preview === 'homecare'}
                      <div class="relative h-36 rounded-xl overflow-hidden" style="background:linear-gradient(135deg,#0b1a2e,#0e2438); border:1px solid rgba(255,255,255,0.08);">
                        <div class="absolute inset-0 opacity-40" style="background-image:linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px); background-size:22px 22px;"></div>
                        <span class="absolute top-[22%] left-[18%] h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black" style="background:#22c55e; color:#05221a;">A</span>
                        <span class="absolute top-[58%] left-[48%] h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black" style="background:#22c55e; color:#05221a;">B</span>
                        <span class="absolute top-[36%] left-[72%] text-lg feat-bob">🚗</span>
                        <div class="absolute bottom-2 left-2 right-2 text-[10px] font-semibold px-2 py-1 rounded" style="background:rgba(45,212,191,0.15); color:#5eead4;">
                          {$t('featCore.preview.gps')}
                        </div>
                      </div>
                    {:else if mod.preview === 'ia'}
                      <div class="space-y-2">
                        <div class="text-[11px] font-mono" style="color:#c4b5fd;">{$t('featCore.preview.aiThinking')}</div>
                        <div class="h-1.5 rounded-full overflow-hidden" style="background:rgba(255,255,255,0.08);">
                          <div class="feat-bar h-full rounded-full" style="background:linear-gradient(90deg,#a78bfa,#c084fc);"></div>
                        </div>
                        <div class="rounded-lg p-3 text-sm" style="background:rgba(192,132,252,0.1); border:1px solid rgba(192,132,252,0.25); color:#e9d5ff;">
                          {$t('featCore.preview.aiSuggest')}
                        </div>
                      </div>
                    {:else if mod.preview === 'finance'}
                      <div>
                        <div class="flex items-end justify-between mb-2">
                          <div>
                            <div class="text-2xl font-black text-white">R$ 48.250</div>
                            <div class="text-[11px]" style="color:rgba(147,197,253,0.7);">{$t('featCore.preview.financeSub')}</div>
                          </div>
                          <span class="text-sm font-bold" style="color:#6ee7b7;">+18%</span>
                        </div>
                        <div class="flex items-end gap-1.5 h-16">
                          {#each [40,55,48,70,62,85,78] as h}
                            <div class="flex-1 rounded-t" style="height:{h}%; background:linear-gradient(180deg,#fbbf24,#f59e0b); opacity:0.85;"></div>
                          {/each}
                        </div>
                      </div>
                    {:else if mod.preview === 'tele'}
                      <div class="relative rounded-xl overflow-hidden h-36" style="background:#0b1020; border:1px solid rgba(129,140,248,0.3);">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="h-16 w-16 rounded-full flex items-center justify-center" style="background:rgba(129,140,248,0.2); border:2px solid rgba(129,140,248,0.5);">
                            <svg width="28" height="28" fill="#a5b4fc" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                          </div>
                        </div>
                        <div class="absolute bottom-2 left-2 right-2 flex justify-between text-[10px] font-semibold" style="color:#c7d2fe;">
                          <span>HD · 1080p</span>
                          <span>{$t('featCore.preview.teleLive')}</span>
                        </div>
                      </div>
                    {:else}
                      <div class="grid grid-cols-2 gap-2">
                        {#each [$t('featCore.preview.chip1'), $t('featCore.preview.chip2'), $t('featCore.preview.chip3'), $t('featCore.preview.chip4')] as chip}
                          <div class="rounded-lg px-3 py-2.5 text-xs font-semibold" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#dbeafe;">
                            ✓ {chip}
                          </div>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/key}
              </div>

              <!-- Nav + CTA -->
              <div class="flex flex-wrap items-center gap-3">
                <button type="button" class="feat-nav-btn" on:click={prev} aria-label="Previous">‹</button>
                <div class="flex gap-1.5 flex-1 justify-center sm:justify-start">
                  {#each modules as _, i}
                    <button
                      type="button"
                      class="feat-dot"
                      class:feat-dot-on={i === active}
                      style={i === active ? `background:${mod.accent};` : ''}
                      on:click={() => select(i)}
                      aria-label="Module {i + 1}"
                    ></button>
                  {/each}
                </div>
                <button type="button" class="feat-nav-btn" on:click={next} aria-label="Next">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom strip: module chips -->
    <div class="mt-10 overflow-hidden" use:reveal>
      <div class="feat-marquee">
        <div class="feat-marquee-track">
          {#each [...modules, ...modules] as m}
            <button
              type="button"
              class="feat-chip"
              class:feat-chip-on={modules[active]?.id === m.id}
              style="--sat:{m.accent};"
              on:click={() => select(modules.findIndex((x) => x.id === m.id))}
            >
              <span class="feat-chip-dot"></span>
              {$t(`featCore.mods.${m.id}.title`)}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-12" use:reveal>
      <p class="mb-5 text-sm" style="color:rgba(191,219,254,0.7);">{$t('featCore.ctaSub')}</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" class="up-btn-primary">
          {$t('featCore.ctaStart')}
        </a>
        <button type="button" class="up-btn-ghost" on:click={openDemo}>
          {$t('featCore.ctaDemo')}
        </button>
      </div>
    </div>
  </div>

  <FeatureDemoModal bind:this={demoModal} />
</section>

<style>
  .feat-orbit {
    opacity: 0;
    transform: scale(0.92);
    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .feat-in {
    opacity: 1 !important;
    transform: none !important;
  }

  .feat-ring {
    position: absolute;
    inset: 8%;
    border-radius: 50%;
    border: 1px solid rgba(147, 197, 253, 0.12);
    pointer-events: none;
  }
  .feat-ring-a {
    inset: 4%;
    border-color: rgba(52, 211, 153, 0.15);
    animation: feat-spin 48s linear infinite;
  }
  .feat-ring-b {
    inset: 14%;
    border-style: dashed;
    animation: feat-spin 36s linear infinite reverse;
  }
  .feat-ring-c {
    inset: 26%;
    border-color: rgba(96, 165, 250, 0.1);
  }

  .feat-core-node {
    width: 108px;
    height: 108px;
    z-index: 5;
  }
  .feat-core-glow {
    position: absolute;
    inset: -18%;
    border-radius: 50%;
    filter: blur(28px);
    opacity: 0.45;
    transition: background 0.4s ease;
  }
  .feat-core-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #1e3a5f, #050b23 70%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 0 0 1px rgba(52, 211, 153, 0.2), 0 20px 50px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .feat-core-scan {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent, rgba(52, 211, 153, 0.18), transparent);
    animation: feat-scan 3.2s ease-in-out infinite;
  }
  .feat-core-label {
    position: relative;
    font-weight: 900;
    font-size: 1.35rem;
    letter-spacing: 0.08em;
    color: #fff;
  }
  .feat-core-sub {
    position: relative;
    font-size: 0.58rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: rgba(167, 243, 208, 0.85);
  }

  .feat-sat {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(219, 234, 254, 0.85);
    background: rgba(8, 16, 40, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    z-index: 4;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
  }
  .feat-sat:hover {
    transform: translate(-50%, -50%) scale(1.08);
    border-color: var(--sat);
    color: #fff;
  }
  .feat-sat-on {
    color: #fff;
    border-color: var(--sat);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--sat) 45%, transparent), 0 12px 32px color-mix(in srgb, var(--sat) 35%, transparent);
    transform: translate(-50%, -50%) scale(1.12);
  }

  .feat-preview {
    min-height: 150px;
    border-radius: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 0 40px color-mix(in srgb, var(--accent) 8%, transparent);
  }
  .feat-preview-in {
    animation: feat-fade 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .feat-nav-btn {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  .feat-nav-btn:hover {
    background: rgba(255, 255, 255, 0.12);
  }

  .feat-dot {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: rgba(147, 197, 253, 0.28);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: width 0.25s ease, background 0.25s ease;
  }
  .feat-dot-on {
    width: 22px;
  }

  .feat-marquee {
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .feat-marquee-track {
    display: flex;
    gap: 10px;
    width: max-content;
    animation: feat-marquee 42s linear infinite;
  }
  .feat-marquee:hover .feat-marquee-track {
    animation-play-state: paused;
  }
  .feat-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 700;
    color: rgba(219, 234, 254, 0.85);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .feat-chip:hover,
  .feat-chip-on {
    border-color: var(--sat);
    background: color-mix(in srgb, var(--sat) 14%, transparent);
    color: #fff;
  }
  .feat-chip-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sat);
  }

  .feat-bar {
    width: 0;
    animation: feat-load 2.2s ease-out forwards;
  }
  .feat-bob {
    animation: feat-bob 2.8s ease-in-out infinite;
  }

  @keyframes feat-spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes feat-scan {
    0%,
    100% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(100%);
    }
  }
  @keyframes feat-fade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes feat-marquee {
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes feat-load {
    to {
      width: 78%;
    }
  }
  @keyframes feat-bob {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  @media (max-width: 640px) {
    .feat-sat {
      width: 38px;
      height: 38px;
      border-radius: 12px;
    }
    .feat-core-node {
      width: 88px;
      height: 88px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .feat-ring-a,
    .feat-ring-b,
    .feat-marquee-track,
    .feat-core-scan,
    .feat-bob,
    .feat-bar {
      animation: none !important;
    }
  }
</style>
