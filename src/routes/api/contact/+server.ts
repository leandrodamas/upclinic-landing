import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendContactEmail, sendContactConfirmationEmail, isEmailConfigured } from '$lib/services/emailService';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validação básica
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
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
    
    // Log do formulário recebido
    console.log('📧 [API-CONTACT] Formulário de contato recebido:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      timestamp: new Date().toISOString()
    });
    
    // Verificar se o email está configurado
    if (!isEmailConfigured()) {
      console.warn('⚠️ [API-CONTACT] SMTP não configurado. Verifique as variáveis de ambiente.');
      // Retornar sucesso mesmo sem enviar email (para não quebrar o formulário)
      return json(
        { 
          success: true,
          message: 'Mensagem recebida! Entraremos em contato em breve.',
          warning: 'Email não configurado. Mensagem apenas registrada no log.'
        },
        { status: 200 }
      );
    }
    
    // Enviar email para contato@clinicupapp.com
    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message
      });
      
      // Enviar email de confirmação para o remetente (opcional, não bloqueia se falhar)
      try {
        await sendContactConfirmationEmail(data.email, data.name);
      } catch (confirmationError) {
        console.warn('⚠️ [API-CONTACT] Erro ao enviar email de confirmação (não crítico):', confirmationError);
      }
      
      console.log('✅ [API-CONTACT] Email enviado com sucesso');
      
      return json(
        { 
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('❌ [API-CONTACT] Erro ao enviar email:', emailError);
      
      // Retornar erro específico do email
      return json(
        { 
          error: 'Erro ao enviar email. Por favor, tente novamente ou entre em contato via WhatsApp.',
          details: emailError instanceof Error ? emailError.message : 'Erro desconhecido'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [API-CONTACT] Erro ao processar formulário de contato:', error);
    return json(
      { error: 'Erro ao processar sua mensagem. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
};

