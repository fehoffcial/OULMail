const nodemailer = require("nodemailer");
const chalk = require('chalk');
// ! COLOR HEX "#0"
const red = chalk.hex("#f24423");
const yellow = chalk.hex("#FFAE48");
const green = chalk.hex("#6FFD41");
// ! [ END ] COLOR HEX "#
/**
 * @description: Oul Mail Service API, send email...
 * @author: @Antraz
 */
function EmailService(){
  console.log("EmailService")
}
const Email = new EmailService();
EmailService.prototype.Oul = async function(EmailConfig,PasswordConfig,NameConfig,ToEmail,ToSubject,ToHtml){
  const transporter = await nodemailer.createTransport({
    host: "smtps.uol.com.br",
    port: 587,
    secure: false,
    auth: {
      user: EmailConfig,
      pass: PasswordConfig
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  async function main() {
    const info = await transporter.sendMail({
      from: `"${NameConfig}" <${EmailConfig}>`,
      to: `${ToEmail}`,
      subject: `${ToSubject}`,
      html: `${ToHtml}`,
    }).then(message => {
      console.log(yellow(`>> [ OUL | ${EmailConfig} : ${PasswordConfig} ]`),green(`[ PROTOCOL: ${message.messageId} ]`),yellow(`[ ${ToEmail} | ${ToSubject} ]`));
    }).catch(err=>{
      console.log(yellow(`>> [ OUL ]`),red(`[ INVALID SEND: >>> | ${EmailConfig} : ${PasswordConfig} ]`),yellow(`[ ${ToEmail} | ${ToSubject} ]`));
    });

  }
  main();
}
// Email.Oul("annaaugusta@uol.com.br","Paulo2018-","no-replay","aziende-brasil@uol.com.br","TESTE EMAIL","<p>TESTE EMAIL</p>")
