// TODO: configure nodemailer or SendGrid
exports.sendEmail = async ({ to, subject, html }) => {
  console.log(`[Email] To: ${to} | Subject: ${subject}`);
};
