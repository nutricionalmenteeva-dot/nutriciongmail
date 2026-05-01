const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "nutricionalmeteeva@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "stbq qtuj cofk tpjn",
  },
});

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { to, subject, html, fromName, replyTo } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({ error: "Faltan campos obligatorios: to, subject, html" });
    }

    const mailOptions = {
      from: `"${fromName || "Nutrición Meteeva"}" <nutricionalmeteeva@gmail.com>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html,
      replyTo: replyTo || "nutricionalmeteeva@gmail.com",
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: "Correo enviado exitosamente",
    });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({
      success: false,
      error: "Error al enviar el correo",
      details: error.message,
    });
  }
}
