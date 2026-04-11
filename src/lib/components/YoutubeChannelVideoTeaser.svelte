<script lang="ts">
  import { YOUTUBE_DRCARLOS_CHANNEL_URL } from '$lib/constants';

  /** Arquivo em /static (ex.: /videoplayback.mp4) */
  export let videoSrc: string;
  /** Acessível: o que o vídeo mostra */
  export let videoAriaLabel: string;
  /** Acessível: o link abre o canal no YouTube */
  export let ariaLabel: string;
  /** Rótulo minúsculo no canto (ex.: "Canal no YouTube") */
  export let teaserLine = 'Canal no YouTube';
</script>

<div class="relative aspect-video w-full overflow-hidden bg-slate-950">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video
    src={videoSrc}
    class="block h-full w-full object-cover"
    controls
    controlslist="nodownload"
    playsinline
    preload="metadata"
    aria-label={videoAriaLabel}
  ></video>
  <!-- Canto inferior direito, bem pequeno — acima da barra de controles -->
  <a
    href={YOUTUBE_DRCARLOS_CHANNEL_URL}
    target="_blank"
    rel="noopener noreferrer"
    class="absolute bottom-11 right-1.5 z-20 flex max-w-[min(11rem,calc(100%-0.75rem))] items-center gap-1 rounded-md border border-white/20 bg-black/75 px-1 py-0.5 pl-1 pr-1.5 text-[9px] font-medium leading-tight text-white/90 shadow-md backdrop-blur-sm transition hover:border-white/35 hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 sm:bottom-12 sm:right-2 sm:text-[10px]"
    title={ariaLabel}
    aria-label={ariaLabel}
  >
    <svg
      class="h-2.5 w-2.5 shrink-0 text-red-500 sm:h-3 sm:w-3"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
    <span class="min-w-0 truncate opacity-95">{teaserLine}</span>
  </a>
</div>
