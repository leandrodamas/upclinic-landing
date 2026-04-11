<script lang="ts">
  import { YOUTUBE_DRCARLOS_CHANNEL_URL } from '$lib/constants';

  /** Arquivo em /static (ex.: /videoplayback.mp4) */
  export let videoSrc: string;
  /** Descrição para leitores de tela */
  export let ariaLabel: string;
  /** Texto curto exibido sobre o vídeo (dica de clique) */
  export let teaserLine: string;
</script>

<div class="relative aspect-video w-full overflow-hidden bg-slate-950">
  <video
    src={videoSrc}
    class="pointer-events-none absolute inset-0 h-full w-full object-cover"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    aria-hidden="true"
  ></video>
  <div
    class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/20 to-transparent"
    aria-hidden="true"
  ></div>
  <a
    href={YOUTUBE_DRCARLOS_CHANNEL_URL}
    target="_blank"
    rel="noopener noreferrer"
    class="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/0 px-4 text-center transition-colors duration-200 hover:bg-black/20 focus:outline-none focus-visible:bg-black/25 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
    aria-label={ariaLabel}
  >
    <span
      class="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-xl ring-4 ring-black/25 transition duration-200 group-hover:scale-105 group-hover:bg-white sm:h-[4.25rem] sm:w-[4.25rem]"
      aria-hidden="true"
    >
      <svg class="ml-0.5 h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    </span>
    <span
      class="max-w-sm text-xs font-semibold leading-snug text-white drop-shadow-md sm:text-sm md:max-w-md"
    >
      {teaserLine}
    </span>
    <span class="text-[10px] font-medium uppercase tracking-[0.12em] text-white/75 drop-shadow">
      Clique para abrir o canal @drcarloseurico no YouTube
    </span>
  </a>
</div>
