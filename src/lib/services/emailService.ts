import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

// Configuração SMTP baseada no cPanel HostGator
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'sh00122.hostgator.com.br',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true para porta 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER || 'upclinic8@gmail.com',
    pass: process.env.SMTP_PASSWORD || ''
  }
};

// Criar transporter reutilizável
let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: SMTP_CONFIG.secure,
      auth: {
        user: SMTP_CONFIG.auth.user,
        pass: SMTP_CONFIG.auth.pass
      },
      tls: {
        rejectUnauthorized: false // Necessário para alguns servidores SMTP
      }
    });
  }
  return transporter;
}

export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface JobApplicationEmailData {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resume?: string; // Base64 ou URL do currículo
}

/**
 * Envia email de contato do formulário
 */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"${data.name}" <${SMTP_CONFIG.auth.user}>`,
    replyTo: data.email,
    to: SMTP_CONFIG.auth.user,
    subject: `[Contato UpClinic] ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #667eea; }
            .field-value { margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nova Mensagem de Contato</h1>
              <p>UpClinic - Formulário de Contato</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Nome:</div>
                <div class="field-value">${escapeHtml(data.name)}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Telefone/WhatsApp:</div>
                <div class="field-value"><a href="https://wa.me/55${data.phone.replace(/\D/g, '')}">${escapeHtml(data.phone)}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Assunto:</div>
                <div class="field-value">${escapeHtml(data.subject)}</div>
              </div>
              <div class="field">
                <div class="field-label">Mensagem:</div>
                <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do site UpClinic.</p>
                <p>Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Nova Mensagem de Contato - UpClinic

Nome: ${data.name}
Email: ${data.email}
Telefone/WhatsApp: ${data.phone}
Assunto: ${data.subject}

Mensagem:
${data.message}

---
Esta mensagem foi enviada através do formulário de contato do site UpClinic.
Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
    `.trim()
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ [EMAIL] Email de contato enviado com sucesso para:', SMTP_CONFIG.auth.user);
  } catch (error) {
    console.error('❌ [EMAIL] Erro ao enviar email de contato:', error);
    throw new Error(`Erro ao enviar email: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
  }
}

/**
 * Envia email de confirmação para o remetente
 */
export async function sendContactConfirmationEmail(to: string, name: string): Promise<void> {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"UpClinic" <${SMTP_CONFIG.auth.user}>`,
    to: to,
    subject: 'Recebemos sua mensagem - UpClinic',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Mensagem Recebida!</h1>
            </div>
            <div class="content">
              <p>Olá <strong>${escapeHtml(name)}</strong>,</p>
              <p>Recebemos sua mensagem através do formulário de contato do UpClinic.</p>
              <p>Nossa equipe entrará em contato em breve através do email ou WhatsApp informado.</p>
              <p>Obrigado por entrar em contato conosco!</p>
              <p>Atenciosamente,<br><strong>Equipe UpClinic</strong></p>
            </div>
            <div class="footer">
              <p>UpClinic - Sistema de Gestão Médica</p>
              <p>WhatsApp: (62) 99672-0296 | Email: upclinic8@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ [EMAIL] Email de confirmação enviado para:', to);
  } catch (error) {
    console.error('⚠️ [EMAIL] Erro ao enviar email de confirmação (não crítico):', error);
    // Não lançar erro aqui, pois é apenas uma confirmação
  }
}

/**
 * Envia email de candidatura para vaga
 */
export async function sendJobApplicationEmail(data: JobApplicationEmailData): Promise<void> {
  const transporter = getTransporter();
  
  const mailOptions = {
    from: `"${data.name}" <${SMTP_CONFIG.auth.user}>`,
    replyTo: data.email,
    to: SMTP_CONFIG.auth.user,
    subject: `[Candidatura] ${data.position} - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #667eea; }
            .field-value { margin-top: 5px; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nova Candidatura</h1>
              <p>UpClinic - Carreiras</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Vaga:</div>
                <div class="field-value">${escapeHtml(data.position)}</div>
              </div>
              <div class="field">
                <div class="field-label">Nome:</div>
                <div class="field-value">${escapeHtml(data.name)}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Telefone:</div>
                <div class="field-value"><a href="https://wa.me/55${data.phone.replace(/\D/g, '')}">${escapeHtml(data.phone)}</a></div>
              </div>
              ${data.message ? `
              <div class="field">
                <div class="field-label">Mensagem/Carta de Apresentação:</div>
                <div class="message-box">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              ${data.resume ? `
              <div class="field">
                <div class="field-label">Currículo:</div>
                <div class="field-value">Anexado ao email</div>
              </div>
              ` : ''}
              <div class="footer">
                <p>Esta candidatura foi enviada através do formulário de carreiras do site UpClinic.</p>
                <p>Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Nova Candidatura - UpClinic

Vaga: ${data.position}
Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}
${data.message ? `\nMensagem:\n${data.message}\n` : ''}
---
Esta candidatura foi enviada através do formulário de carreiras do site UpClinic.
Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
    `.trim(),
    attachments: data.resume ? [
      {
        filename: `curriculo_${data.name.replace(/\s+/g, '_')}.pdf`,
        content: data.resume,
        encoding: 'base64'
      }
    ] : undefined
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ [EMAIL] Email de candidatura enviado com sucesso para:', SMTP_CONFIG.auth.user);
  } catch (error) {
    console.error('❌ [EMAIL] Erro ao enviar email de candidatura:', error);
    throw new Error(`Erro ao enviar email: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
  }
}

/**
 * Função auxiliar para escapar HTML
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Verifica se as configurações SMTP estão disponíveis
 */
export function isEmailConfigured(): boolean {
  return !!(
    SMTP_CONFIG.auth.user &&
    SMTP_CONFIG.auth.pass &&
    SMTP_CONFIG.host
  );
}

