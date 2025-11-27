<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  
  onMount(() => {
    // Inicializar Firebase Analytics apenas no cliente
    if (browser) {
      import('$lib/config/firebase').then(({ analytics }) => {
        if (analytics) {
          console.log('✅ Firebase Analytics ativo na landing page');
        }
      }).catch((error) => {
        console.warn('⚠️ Firebase Analytics não disponível:', error);
      });
    }
    
    // Smooth scroll para links internos (apenas links que começam com #)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        // Não interceptar links externos ou que já têm target="_blank"
        if (anchor.target === '_blank' || anchor.href.startsWith('http')) {
          return;
        }
        e.preventDefault();
        const href = anchor.getAttribute('href') || '';
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  });
</script>

<main>
  <slot />
</main>

