import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendJobApplicationEmail, isEmailConfigured } from '$lib/services/emailService';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validação básica
    if (!data.name || !data.email || !data.phone || !data.position || !data.message) {
      return json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }
    
    // Log da candidatura recebida
    console.log('📧 [API-JOB] Candidatura recebida:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      position: data.position,
      timestamp: new Date().toISOString()
    });
    
    // Verificar se o email está configurado
    if (!isEmailConfigured()) {
      console.warn('⚠️ [API-JOB] SMTP não configurado. Verifique as variáveis de ambiente.');
      // Retornar sucesso mesmo sem enviar email (para não quebrar o formulário)
      return json(
        { 
          success: true,
          message: 'Candidatura recebida! Entraremos em contato em breve.',
          warning: 'Email não configurado. Candidatura apenas registrada no log.'
        },
        { status: 200 }
      );
    }
    
    // Enviar email de candidatura
    try {
      await sendJobApplicationEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        position: data.position,
        message: data.message,
        resume: data.resume // Base64 do currículo se fornecido
      });
      
      console.log('✅ [API-JOB] Email de candidatura enviado com sucesso');
      
      return json(
        { 
          success: true,
          message: 'Candidatura enviada com sucesso! Entraremos em contato em breve.'
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('❌ [API-JOB] Erro ao enviar email:', emailError);
      
      // Retornar erro específico do email
      return json(
        { 
          error: 'Erro ao enviar candidatura. Por favor, tente novamente ou entre em contato via WhatsApp.',
          details: emailError instanceof Error ? emailError.message : 'Erro desconhecido'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [API-JOB] Erro ao processar candidatura:', error);
    return json(
      { error: 'Erro ao processar sua candidatura. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
};

