import * as publicEnv from '$env/static/public';

// Constantes do site
export const SITE_URL = 'https://clinicupapp.com';
export const FIREBASE_URL = 'https://site-upclinic.web.app';
export const SYSTEM_URL = 'https://upclinic-aa025.web.app';
export const LOGIN_URL = 'https://upclinic-aa025.web.app/login?tab=entrar';
export const REGISTER_URL = 'https://upclinic-aa025.web.app/login?trial=true';

/** Meta Pixel / dataset ID — override with PUBLIC_META_PIXEL_ID in env (Vercel). */
export const META_PIXEL_ID =
  (publicEnv as Record<string, string | undefined>).PUBLIC_META_PIXEL_ID?.trim() ||
  '646948901744249';

/** Google Ads — conversão “Visualização de página (2)” (disparo global no layout, todas as rotas exceto /api). */
export const GOOGLE_ADS_CONVERSION_PAGE_VIEW_SEND_TO =
  'AW-17367062285/fUu0CKCPwZocEI2uodlA';

/** Google Ads — conversão “Compra” (conta AW-17840348694); disparar só após pagamento confirmado. */
export const GOOGLE_ADS_PURCHASE_CONVERSION_SEND_TO =
  'AW-17840348694/D3kyCKr5p9obEJa8-LpC';

// Horário de suporte real (versão mais comum no site)
export const SUPPORT_HOURS = 'Seg–Sex 8h–18h | Sáb 8h–12h';

// Informações de contato
export const CONTACT = {
  whatsapp: '62997016149',
  whatsappLink: 'https://wa.me/5562997016149',
  email: 'contato@clinicupapp.com',
  phone: '(62) 99701-6149'
};

// Redes sociais
export const SOCIAL = {
  facebook: 'https://www.facebook.com/Upclinicapp/',
  instagram: 'https://www.instagram.com/upclinicapp/',
  linkedin: '#',
  whatsapp: CONTACT.whatsappLink
};

