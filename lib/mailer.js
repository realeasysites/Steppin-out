const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL, MAIL_FROM } = process.env;
let transport = null;
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 465),
    secure: Number(SMTP_PORT || 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
}

const LABEL = { class: 'Class inquiry', party: 'Birthday party request', contact: 'Message' };

async function notify(row) {
  if (!transport || !NOTIFY_EMAIL) return;
  const lines = [
    `${LABEL[row.kind] || 'Inquiry'} from the website`,
    '',
    `Name: ${row.name}`,
    row.email && `Email: ${row.email}`,
    row.phone && `Phone: ${row.phone}`,
    row.dancer_name && `Dancer: ${row.dancer_name}`,
    row.dancer_age && `Dancer age: ${row.dancer_age}`,
    row.interest && `Interested in: ${row.interest}`,
    row.details && `Details: ${row.details}`,
    row.message && `\n${row.message}`,
    '',
    'See all requests in your dashboard: /admin'
  ].filter(Boolean);
  try {
    await transport.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: NOTIFY_EMAIL,
      replyTo: row.email || undefined,
      subject: `${LABEL[row.kind] || 'Inquiry'}: ${row.name}`,
      text: lines.join('\n')
    });
  } catch (e) {
    console.error('Mail failed:', e.message);
  }
}

module.exports = { notify };
