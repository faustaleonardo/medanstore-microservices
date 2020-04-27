const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const pug = require('pug');
const htmlToText = require('html-to-text');

class Email {
  constructor({ username, email }, orderId, url) {
    this.username = username;
    this.orderId = orderId;
    this.to = email;
    this.url = url;
    this.from = 'no-reply@medanstore.co';
  }

  newTransport() {
    return nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_PASSWORD,
      })
    );

    // for dev only
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      username: this.username,
      orderId: this.orderId,
      url: this.url,
      subject,
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async sendPaymentReminder() {
    await this.send('paymentReminder', 'MEDANSTORE XYZ Order');
  }
}

module.exports = Email;
