<script lang="ts">
  import { YOUTUBE_DRCARLOS_CHANNEL_URL } from '$lib/constants';

  /** Descrição para leitores de tela */
  export let ariaLabel: string;
  /** Frase curta sobre o que o visitante verá no YouTube */
  export let teaserLine: string;
</script>

<a
  href={YOUTUBE_DRCARLOS_CHANNEL_URL}
  target="_blank"
  rel="noopener noreferrer"
  class="group relative block aspect-video w-full overflow-hidden bg-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
  aria-label={ariaLabel}
>
  <div class="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" aria-hidden="true"></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:28px_28px] opacity-90"
    aria-hidden="true"
  ></div>
  <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center sm:gap-3.5 sm:p-8">
    <span
      class="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-xl ring-4 ring-black/20 transition duration-200 group-hover:scale-105 group-hover:bg-white sm:h-[4.25rem] sm:w-[4.25rem]"
      aria-hidden="true"
    >
      <svg class="ml-0.5 h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    </span>
    <p class="max-w-sm px-2 text-sm font-semibold leading-snug text-white/95 sm:text-base">{teaserLine}</p>
    <p class="max-w-md px-2 text-[11px] font-medium leading-relaxed text-white/45 sm:text-xs">
      Vídeo no YouTube · conteúdo do canal
      <span class="text-white/65">@drcarloseurico</span>
      <span class="mt-1.5 block text-[10px] font-normal uppercase tracking-[0.14em] text-white/30">
        Clique para abrir o canal
      </span>
    </p>
  </div>
</a>
