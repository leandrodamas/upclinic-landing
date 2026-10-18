/** Variantes aleatórias do hero (estilo Seu Fisio — layout muda a cada visita). */
export type HeroVariant = {
  id: string;
  audience: string;
  headline: string;
  headlineAccent: string;
  sub: string;
  photo: string;
  photoAlt: string;
  accent: string;
  accentSoft: string;
};

export const HERO_VARIANTS: HeroVariant[] = [
  {
    id: 'fisio-bola',
    audience: 'Fisioterapia',
    headline: 'Agenda, prontuário e menos faltas',
    headlineAccent: 'na sua clínica de fisioterapia',
    sub: 'Lembretes no WhatsApp, evolução do paciente e financeiro num só lugar — pensado para quem atende com bola, faixa e mesa.',
    photo: '/media/bola-suica.webp',
    photoAlt: 'Fisioterapeuta auxiliando paciente com bola suíça',
    accent: '#0d9488',
    accentSoft: '#ccfbf1'
  },
  {
    id: 'pilates-reformer',
    audience: 'Studio de Pilates',
    headline: 'Seu studio de pilates',
    headlineAccent: 'no automático',
    sub: 'Turmas, mensalidades, check-in Wellhub e lembretes no WhatsApp — para o reformer não ficar ocioso.',
    photo: '/media/reformer.webp',
    photoAlt: 'Aula de pilates em reformer no studio',
    accent: '#0f766e',
    accentSoft: '#d8f3ef'
  },
  {
    id: 'to-rehab',
    audience: 'Terapia ocupacional & reabilitação',
    headline: 'Evolução do paciente',
    headlineAccent: 'visível a cada sessão',
    sub: 'Prontuário com evolução, agenda anti-falta e financeiro organizado para TO, RPG e reabilitação.',
    photo: '/media/to-rehab.webp',
    photoAlt: 'Terapeuta ocupacional em sessão de reabilitação',
    accent: '#f0796a',
    accentSoft: '#ffe8e3'
  },
  {
    id: 'joelho-ombro',
    audience: 'Ortopedia & movimento',
    headline: 'Menos faltas,',
    headlineAccent: 'mais sessões realizadas',
    sub: 'Robô e lembretes no WhatsApp 24h e 2h antes — para joelho, ombro e retorno ao movimento não perder ritmo.',
    photo: '/media/joelho.webp',
    photoAlt: 'Reabilitação de joelho com fisioterapeuta',
    accent: '#14b8a6',
    accentSoft: '#e0f7f4'
  },
  {
    id: 'studio-equipe',
    audience: 'Clínica e studio',
    headline: 'Um sistema para toda a equipe',
    headlineAccent: 'de movimento',
    sub: 'Fisioterapeutas, instrutores de pilates e recepção no mesmo login — com WhatsApp sem tarifa por mensagem*.',
    photo: '/media/studio-pilates.webp',
    photoAlt: 'Studio de pilates com aparelhos e ambiente claro',
    accent: '#0d9488',
    accentSoft: '#ecfdf8'
  },
  {
    id: 'theraband',
    audience: 'Consultório solo',
    headline: 'Do consultório solo',
    headlineAccent: 'à clínica completa',
    sub: 'Comece no Solo e cresça. Teste 7 dias grátis, sem cartão, com suporte no WhatsApp.',
    photo: '/media/theraband.webp',
    photoAlt: 'Exercício com theraband em sessão de fisioterapia',
    accent: '#e85a48',
    accentSoft: '#fff1ee'
  }
];

/** Escolhe variante aleatória (determinística só se seed for passado). */
export function pickHeroVariant(seed?: number): HeroVariant {
  const i =
    typeof seed === 'number'
      ? Math.abs(seed) % HERO_VARIANTS.length
      : Math.floor(Math.random() * HERO_VARIANTS.length);
  return HERO_VARIANTS[i];
}
