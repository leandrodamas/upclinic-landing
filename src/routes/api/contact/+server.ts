import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

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
    
    // Aqui você pode adicionar lógica para:
    // - Enviar email usando um serviço como SendGrid, Resend, etc.
    // - Salvar no banco de dados
    // - Enviar notificação para o time
    
    // Por enquanto, apenas retornamos sucesso
    // TODO: Implementar envio de email
    // TODO: Salvar no Firestore ou outro banco de dados
    
    console.log('Formulário de contato recebido:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString()
    });
    
    return json(
      { 
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error);
    return json(
      { error: 'Erro ao processar sua mensagem. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
};

