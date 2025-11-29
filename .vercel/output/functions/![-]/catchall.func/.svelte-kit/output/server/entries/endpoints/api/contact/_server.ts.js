import { json } from "@sveltejs/kit";
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
      return json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }
    console.log("Formulário de contato recebido:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    return json(
      {
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar formulário de contato:", error);
    return json(
      { error: "Erro ao processar sua mensagem. Por favor, tente novamente." },
      { status: 500 }
    );
  }
};
export {
  POST
};
