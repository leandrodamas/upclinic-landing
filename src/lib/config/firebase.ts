// Configuração do Firebase para a Landing Page
// Este arquivo é isolado e não afeta o sistema principal (frontend)

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { browser } from '$app/environment';

// Configuração do Firebase
// IMPORTANTE: Esta configuração é apenas para Analytics na landing page
// O sistema principal (frontend) usa sua própria configuração
const firebaseConfig = {
  apiKey: "AIzaSyDMhIX1dlx0b3q2YDmmR_IsLcOsKTvdY2U",
  authDomain: "upclinic-aa025.firebaseapp.com",
  projectId: "upclinic-aa025",
  storageBucket: "upclinic-aa025.firebasestorage.app",
  messagingSenderId: "821231945105",
  appId: "1:821231945105:web:aed776bd9d1d6dbcd08630",
  measurementId: "G-NJYBSXBJC5"
};

// Inicializar Firebase apenas no cliente (browser)
let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

if (browser) {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    console.log('✅ Firebase Analytics inicializado na landing page');
  } catch (error) {
    console.warn('⚠️ Erro ao inicializar Firebase Analytics:', error);
  }
}

export { app, analytics };

