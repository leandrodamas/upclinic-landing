import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * Endpoint para receber eventos do Meta Pixel e enviar via Conversions API (CAPI)
 * para deduplicação entre Pixel (browser) e CAPI (server).
 * 
 * IMPORTANTE: Configure as variáveis de ambiente:
 * - META_ACCESS_TOKEN: Token de acesso da Meta
 * - META_PIXEL_ID: ID do Pixel (24235377289434557)
 * - META_TEST_EVENT_CODE: (opcional) Para testar eventos
 */
export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validação básica
    if (!data.event_name || !data.event_id) {
      return json(
        { error: 'event_name e event_id são obrigatórios' },
        { status: 400 }
      );
    }

    const { event_name, event_id, event_data } = data;
    
    // Log do evento recebido
    console.log('📊 [META-EVENT] Evento recebido:', {
      event_name,
      event_id,
      timestamp: new Date().toISOString()
    });

    // Obter variáveis de ambiente
    const accessToken = import.meta.env.META_ACCESS_TOKEN || process.env.META_ACCESS_TOKEN;
    const pixelId = import.meta.env.META_PIXEL_ID || process.env.META_PIXEL_ID || '24235377289434557';
    const testEventCode = import.meta.env.META_TEST_EVENT_CODE || process.env.META_TEST_EVENT_CODE;

    // Se não houver token configurado, apenas logar (não quebrar o fluxo)
    if (!accessToken) {
      console.warn('⚠️ [META-EVENT] META_ACCESS_TOKEN não configurado. Evento apenas registrado no log.');
      return json(
        { 
          success: true,
          message: 'Evento recebido (CAPI não configurado)',
          warning: 'Configure META_ACCESS_TOKEN para enviar via Conversions API'
        },
        { status: 200 }
      );
    }

    // Preparar payload para Conversions API
    const payload = {
      data: [
        {
          event_name,
          event_id, // Crucial para deduplicação
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            // Coletar dados do usuário se disponíveis (hasheados)
            // client_ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
            // client_user_agent: request.headers.get('user-agent'),
          },
          ...(event_data || {})
        }
      ],
      ...(testEventCode && { test_event_code: testEventCode })
    };

    // Enviar para Conversions API
    const capiUrl = `https://graph.facebook.com/v18.0/${pixelId}/events`;
    
    try {
      const response = await fetch(capiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          access_token: accessToken
        })
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ [META-EVENT] Evento enviado via CAPI com sucesso:', {
          event_name,
          event_id,
          events_received: result.events_received
        });
        
        return json(
          { 
            success: true,
            message: 'Evento enviado via Conversions API',
            event_id,
            capi_response: result
          },
          { status: 200 }
        );
      } else {
        console.error('❌ [META-EVENT] Erro ao enviar via CAPI:', result);
        
        return json(
          { 
            error: 'Erro ao enviar evento via Conversions API',
            details: result.error || result
          },
          { status: response.status }
        );
      }
    } catch (capiError) {
      console.error('❌ [META-EVENT] Erro na requisição CAPI:', capiError);
      
      // Retornar sucesso parcial (evento já foi disparado no Pixel)
      return json(
        { 
          success: true,
          warning: 'Evento registrado, mas CAPI falhou (evento já disparado no Pixel)',
          error: capiError instanceof Error ? capiError.message : 'Erro desconhecido'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('❌ [META-EVENT] Erro ao processar evento:', error);
    return json(
      { error: 'Erro ao processar evento' },
      { status: 500 }
    );
  }
};

