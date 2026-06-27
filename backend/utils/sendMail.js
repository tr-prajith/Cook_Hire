const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (subject, message) => {
  await resend.emails.send({
    from: "CookHire <onboarding@resend.dev>",
    to: process.env.ADMIN_EMAIL,
    subject,
    text: message,
  });
};

module.exports = sendMail;