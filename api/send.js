const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

module.exports = async function handler(req, res) {
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

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return res.status(500).json({ error: "Credenciales de correo no configuradas en variables de entorno" });
  }

  try {
    const { to, subject, html, fromName, replyTo } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({ error: "Faltan campos obligatorios: to, subject, html" });
    }

    const mailOptions = {
      from: `"${fromName || "Nutrición Meteeva"}" <${process.env.GMAIL_USER}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      html,
      replyTo: replyTo || process.env.GMAIL_USER,
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
};
