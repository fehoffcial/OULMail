const nodemailer = require("nodemailer");
const chalk = require('chalk');
// ! COLOR HEX "#0"
const red = chalk.hex("#f24423");
const yellow = chalk.hex("#FFAE48");
const green = chalk.hex("#6FFD41");
// ! [ END ] COLOR HEX "#
function EmailService(){
  /**
 * @description: Oul Mail Service API, send email...
 * @author: @Antraz
 */
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
EmailService.prototype.Config = async function(FileHTML=1,NameConfig="USUÁRIO"){
  // ! CONFIGURATION DEFAUTLATION 
  let Names = NameConfig.split('@');
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  var hour = today.getHours();
  hours = `${hour}:${minutes}:${seconds}`;
  today = mm + '/' + dd + '/' + yyyy;
 // ! [ END ] CONFIGURATION DEFAUTLATION 
  if(FileHTML == 1){ // ! DISPOSITIVO CONNECTED
    let html1 = `
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=5.0"><style>html, body {position: relative !important;font-family: sans-serif;}a[href], a[xhref] { cursor: pointer; text-decoration: underline; color:blue; }.x_notviscode,.notviscode { display: none; height: 0px; visibility: hidden; width: 0px;}body.blockImages img[xsrc] {opacity: 0.5;background: #F0F0F0 !important;min-height: 15px;min-width: 15px;border: 1px dashed #888 !important;}</style><script src="https://imguol.com.br/p/webmail/v3/js/iframeResizer.contentWindow.min.js"></script>
    </head>
    <body marginwidth="0" marginheight="0">
      <div style="background-color:#edeae8;">
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:10px;text-align:center;">
                  
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="vertical-align:middle;padding:0;">
                            <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;padding:10px 25px;padding-bottom:20px;word-break:break-word;" align="center">
                                    <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td style="width:80px;">
                                            <img width="80" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png" height="auto" alt="Logo do UOL - Universo Online" invalid="top.fixImageError(this,'https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png')">
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="vertical-align:middle;padding:0;">
                            <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;padding:4px 0 0;word-break:break-word;" class="c-divider" align="center">
                                    <p style="font-size:1px;margin:0px auto;width:100%;">
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#FFFFFE;background-color:#FFFFFE;margin:0px auto;max-width:700px;">
          <table style="background:#FFFFFE;background-color:#FFFFFE;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:30px;text-align:center;">
                  
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:0;padding-top:10px;padding-bottom:0;word-break:break-word;" align="left">
                            <div class="IDName" style="font-family:UOLText, Arial, sans-serif;font-size:22px;line-height:1;text-align:left;color:#444444;">Olá, ${Names[0]}!</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word;" align="left">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:22px;line-height:1;text-align:left;color:#444444;">Um novo dispositivo foi conectado à sua conta.</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word;" align="left">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:16px;font-weight:bold;line-height:1;text-align:left;color:#666666;">Detalhes do acesso:</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:0;padding-top:20px;word-break:break-word;" align="left">
                            <table style="color:#666666;font-family:UOLText, Arial, sans-serif;font-size:14px;line-height:22px;table-layout:auto;width:100%;border:none;" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody><tr>
                                <td style="width: 100px"><strong>Data/Hora: </strong></td>
                                <td>${today} ${hours}</td> 
                              </tr>
                              <tr>
                                <td style="width: 100px"><strong>Dispositivo: </strong></td>
                                <td>Android</td>
                              </tr>
                              <tr>
                                <td style="width: 100px"><strong>Navegador: </strong></td>
                                <td>Chrome</td>
                              </tr>
                            </tbody></table>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word;" align="left">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:14px;line-height:1;text-align:left;color:#666666;">Se foi você que acessou, desconsidere este e-mail. Se não tiver certeza, recomendamos que altere sua senha: <a title="https://sac.uol.com.br/#/recuperarsenha" alt="Link do SAC (Serviço de Atendimento ao Cliente) do UOL para recuperar senha" style="font-family: 'UOLText', Arial, sans-serif; color: #E39A31; text-decoration: none; display: inline-block;" onclick="top.externalLink('https://sac.uol.com.br/#/recuperarsenha');" xhref="https://sac.uol.com.br/#/recuperarsenha">sac.uol.com.br/#/recuperarsenha</a></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                  
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="vertical-align:middle;padding:0;">
                            <table width="100%" style="" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                                    <p style="border-top:solid 2px #EAEAEA;font-size:1px;margin:0px auto;width:100%;">
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:0;text-align:center;">
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0;word-break:break-word;" align="center">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:18px;line-height:1;text-align:center;color:#444444;">Uma conta para todo o UOL</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#444444;">Uma única conta para você acessar ou assinar os produtos ou serviços UOL. <br><a style="font-family: 'UOLText', Arial, sans-serif; font-size: 14px; color: #1082BE;" title="SAC UOL" alt="SAC UOL" onclick="top.externalLink('https://sac.uol.com.br/');" xhref="https://sac.uol.com.br/">Saiba mais</a></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-33-333333333333336 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word;" align="center">
                            <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:53px;">
                                    <img width="53" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png" height="auto" alt="Logo do UOL - Universo Online" invalid="top.fixImageError(this,'https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png')">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-33-333333333333336 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word;" align="center">
                            <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:169px;">
                                    <img width="169" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://imguol.com/p/pp/logos/meunegocio/logo-preto.png" height="auto" alt="Logo do UOL Meu Negócio" invalid="top.fixImageError(this,'https://imguol.com/p/pp/logos/meunegocio/logo-preto.png')">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-33-333333333333336 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word;" align="center">
                            <table style="border-collapse:collapse;border-spacing:0px;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                              <tbody>
                                <tr>
                                  <td style="width:100px;">
                                    <img width="100" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" src="https://imguol.com/p/pp/logos/host/logo-uolhost.png" height="auto" alt="Logo do UOL Host" invalid="top.fixImageError(this,'https://imguol.com/p/pp/logos/host/logo-uolhost.png')">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;">
          <table style="background:#ffffff;background-color:#ffffff;width:100%;" role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:0;text-align:center;">
                  <div style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;" class="mj-column-per-100 mj-outlook-group-fix">
                    <table width="100%" style="vertical-align:top;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tbody>
                        <tr>
                          <td style="font-size:0px;padding:10px 25px;word-break:break-word;" align="center">
                            <div style="font-family:UOLText, Arial, sans-serif;font-size:14px;line-height:1;text-align:center;color:#999999;">Essa é uma mensagem automática. Por favor, não responda a esse e-mail.<br> ©1996-2023 UOL - O melhor conteúdo. Todos os direitos reservados.</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <script src="./js/Index.js"></script>
    <div style="clear: both; display: block; height: 0px;"></div></body></html>
    `
    return html1
  }
    if(FileHTML == 2){ // ! NEW DEVICE
      html2 = `<div class=""><div class="aHl"></div><div id=":3ws" tabindex="-1"></div><div id=":3xu" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc3ODAyNDE3MTk5NTcxMDI0MiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTc3ODAyNDE3MTk5NTcxMDI0MiIsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxbXV0."><div id=":3xv" class="a3s aiL msg-2844290167450141306"><u></u>
      <div style="word-spacing:normal;background-color:#edeae8">
        <div style="background-color:#edeae8">
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:10px;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align:middle;padding:0">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:20px;word-break:break-word">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                        <tbody>
                                          <tr>
                                            <td style="width:80px">
                                              <img alt="Logo do UOL - Universo Online" height="auto" src="https://ci4.googleusercontent.com/proxy/kOKBhH8_ltojdMdFp6joNvuVaN1LxdorEwYYKnnorHgpqoChMz-MnaGfqx0lhPv8RYQdQ7dqv0duyq27uKUe5XaRbQwNInmpoEgCivc05bfTJhHCVz6WjpD4fk8dLg=s0-d-e1-ft#https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px" width="80" class="CToWUd" data-bit="iit">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:0;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align:middle;padding:0">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" class="m_-2844290167450141306c-divider" style="font-size:0px;padding:4px 0 0;word-break:break-word">
                                      <p style="font-size:1px;margin:0px auto;width:100%">
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:40px;padding-bottom:30px;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0;padding-top:10px;padding-bottom:0;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:22px;line-height:1;text-align:left;color:#444444">Olá, ${$Names[0]}!</div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:22px;line-height:1;text-align:left;color:#444444">Um novo dispositivo foi conectado à sua conta.</div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:16px;font-weight:bold;line-height:1;text-align:left;color:#666666">Detalhes do acesso:</div>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0;padding-top:20px;word-break:break-word">
                              <table cellpadding="0" cellspacing="0" width="100%" border="0" style="color:#666666;font-family:UOLText,Arial,sans-serif;font-size:14px;line-height:22px;table-layout:auto;width:100%;border:none">
                                <tbody><tr>
                                  <td style="width:100px"><strong>Data/Hora: </strong></td>
                                  <td>${today} ${hours}</td> 
                                </tr>
                                <tr>
                                  <td style="width:100px"><strong>Dispositivo: </strong></td>
                                  <td>Windows</td>
                                </tr>
                                <tr>
                                  <td style="width:100px"><strong>Navegador: </strong></td>
                                  <td>Chrome</td>
                                </tr>
                              </tbody></table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" style="font-size:0px;padding:0;padding-top:30px;padding-bottom:0;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:14px;line-height:1;text-align:left;color:#666666">Se foi você que acessou, desconsidere este e-mail. Se não tiver certeza, recomendamos que altere sua senha: <a href="https://sac.uol.com.br/#/recuperarsenha" style="font-family:'UOLText',Arial,sans-serif;color:#e39a31;text-decoration:none;display:inline-block" alt="Link do SAC (Serviço de Atendimento ao Cliente) do UOL para recuperar senha" title="https://sac.uol.com.br/#/recuperarsenha" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/recuperarsenha&amp;source=gmail&amp;ust=1696281109645000&amp;usg=AOvVaw3hfa33FCy9da_wAVh4oira">sac.uol.com.br/#/<wbr>recuperarsenha</a></div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:0;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align:middle;padding:0">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                                      <p style="border-top:solid 2px #eaeaea;font-size:1px;margin:0px auto;width:100%">
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:0;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:0;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:18px;line-height:1;text-align:center;color:#444444">Uma conta para todo o UOL</div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:14px;line-height:1;text-align:center;color:#444444">Uma única conta para você acessar ou assinar os produtos ou serviços UOL. <br><a href="https://sac.uol.com.br/" alt="SAC UOL" title="SAC UOL" style="font-family:'UOLText',Arial,sans-serif;font-size:14px;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/&amp;source=gmail&amp;ust=1696281109645000&amp;usg=AOvVaw3-s6hRzE7l_VOxZipAUHe7">Saiba mais</a></div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-33-333333333333336" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                <tbody>
                                  <tr>
                                    <td style="width:53px">
                                      <img alt="Logo do UOL - Universo Online" height="auto" src="https://ci4.googleusercontent.com/proxy/kOKBhH8_ltojdMdFp6joNvuVaN1LxdorEwYYKnnorHgpqoChMz-MnaGfqx0lhPv8RYQdQ7dqv0duyq27uKUe5XaRbQwNInmpoEgCivc05bfTJhHCVz6WjpD4fk8dLg=s0-d-e1-ft#https://imguol.com/platcorp-servicos/template-email/uol-minimalist-logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px" width="53" class="CToWUd" data-bit="iit">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="m_-2844290167450141306mj-column-per-33-333333333333336" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                <tbody>
                                  <tr>
                                    <td style="width:169px">
                                      <img alt="Logo do UOL Meu Negócio" height="auto" src="https://ci6.googleusercontent.com/proxy/aUjwhO5fQPAMJS3gAfd1sjXU7fZ3JQuG9-9b18YgB8uBtzeNiIEF2H6gLACYj_yqEtjCd0O6LzeOHwerfADLD-o19YEfWB2mKsc=s0-d-e1-ft#https://imguol.com/p/pp/logos/meunegocio/logo-preto.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px" width="169" class="CToWUd" data-bit="iit">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="m_-2844290167450141306mj-column-per-33-333333333333336" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" style="font-size:0px;padding:0 25px 20px 25px;word-break:break-word">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                <tbody>
                                  <tr>
                                    <td style="width:100px">
                                      <img alt="Logo do UOL Host" height="auto" src="https://ci3.googleusercontent.com/proxy/oJPaxFi_fEduYxdoIqmHwQ8kzANesEXSQS1UNU4zk1bnSvrt5KdADeigbMJvku9P9uQlgLVURvcFA_p73cqzmHIQyxeBew=s0-d-e1-ft#https://imguol.com/p/pp/logos/host/logo-uolhost.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px" width="100" class="CToWUd" data-bit="iit">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%">
              <tbody>
                <tr>
                  <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:0;text-align:center">
                    <div class="m_-2844290167450141306mj-column-per-100" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top" width="100%">
                        <tbody>
                          <tr>
                            <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word">
                              <div style="font-family:UOLText,Arial,sans-serif;font-size:14px;line-height:1;text-align:center;color:#999999">Essa é uma mensagem automática. Por favor, não responda a esse e-mail.<br> ©1996-2023 UOL - O melhor conteúdo. Todos os direitos reservados.</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`
      return html2
    }
    if(FileHTML==3){
      let html3 = `
      <html><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.1, maximum-scale=5.0"><style>html, body {position: relative !important;font-family: sans-serif;}a[href], a[xhref] { cursor: pointer; text-decoration: underline; color:blue; }.x_notviscode,.notviscode { display: none; height: 0px; visibility: hidden; width: 0px;}body.blockImages img[xsrc] {opacity: 0.5;background: #F0F0F0 !important;min-height: 15px;min-width: 15px;border: 1px dashed #888 !important;}</style><script src="https://imguol.com.br/p/webmail/v3/js/iframeResizer.contentWindow.min.js"></script>
    </head>
    <body marginwidth="0" marginheight="0">
    <table border="0" cellspacing="0" cellpadding="0" align="center" style="max-width: 830px; width: 100%;" bgcolor="ffffff" width="830" class="mobile-table"> <tbody><tr> <td valign="middle" align="center" style="padding: 10px 20px;"> 
    <img style="display: block; border: 0; max-width: 100%;" alt="UOL" src="https://cutt.ly/dwlhnGmF" border="0" height="" width="96" invalid="top.fixImageError(this,'https://cutt.ly/dwlhnGmF')"> </td> </tr> <tr> <td valign="top"> <table style="font-size: 0px; padding: 0;" cellspacing="0" cellpadding="0" border="0" height="4" width="100%"> <tbody><tr style="font-size:0px;" height="4"> <td style="background-color: #f5c527; font-family: Arial, sans-serif; font-size:0px; height: 4px; width: 50%;" class="bg-b_50" height="4" width="50%">
    </td> 
    <td style="background-color: #ffb300; font-family: Arial, sans-serif; font-size:0px; height: 4px; width: 25%;" class="bg-b_50" height="4" width="25%"></td> 
    <td style="background-color: #ef8326; font-family: Arial, sans-serif; font-size:0px; height: 4px; width: 25%;" class="bg-o_25" height="4" width="25%"></td> 
    </tr> </tbody>
    </table> 
    </td> 
    </tr> 
    <tr> 
    <td style="padding: 20px 20px 0 20px;" align="center"> 
    <table style="width: 100%;" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"> 
    <tbody>
    <tr> 
    <td style="font-size: 14px; line-height: 1.4; color: #333333; padding-top: 15px; padding-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont,'Helvetica Neue', 'Roboto', Arial, sans-serif;" class="content-textarea"> 
    <p>Prezado,  ${$Names[0]}.</p> <p></p> 
    <p>Não identificamos o seu pagamento, mas queremos que você continue conectado!</p> 
    <p>Regularize o seu débito pendente e continue com acesso ao seu produto e todos os serviços exclusivos que nossos Clientes possuem.</p> 
    <p>Para efetuar o pagamento é fácil, clique no botão abaixo:</p> 
    <p></p> 
    </td> 
    </tr> <tr> 
    <td style="text-align: center; padding: 10px 0;" align="center"> 
    <a style="background: #c13216; padding: 10px 15px; color:#ffffff; font-family:Arial, sans-serif; font-size:20px; text-decoration:none; display:inline-block; max-width: 100%;" onclick="top.externalLink('https://qr-scan.it/g/10ZHuPyrT1V');" xhref="https://qr-scan.it/g/10ZHuPyrT1V"> Consultar boleto em aberto </a> 
    </td> 
    </tr> 
    <tr> 
    <td style="font-size: 14px; line-height: 1.4; color: #333333; padding-top: 5px; padding-bottom: 10px; font-family: -apple-system, BlinkMacSystemFont,'Helvetica Neue', 'Roboto', Arial, sans-serif;"> 
    <p>
    <strong>Atenção:</strong> 
    Caso seu serviço seja suspenso, pode demorar até 72h para que ele seja reativado após o pagamento.Equipe UOL</p> 
    </td> </tr> 
    <tr> <td> 
    <hr style="border:1px solid #eaeaea;"> 
    </td> </tr> <tr> 
    <td style="padding-top: 15px;"></td> </tr> </tbody></table> </td> </tr> </tbody></table>
    <div style="clear: both; display: block; height: 0px;"></div></body></html>`
    return html3;
    
  }
    if(FileHTML==4){
      let html4 = `<div class=""><div class="aHl"></div><div id=":3ws" tabindex="-1"></div><div id=":3y2" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTc0Mjg2NDU2NDMzODA2NzE1NyIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTc0Mjg2NDU2NDMzODA2NzE1NyIsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxbXV0."><div id=":3y3" class="a3s aiL msg1017911082682583270"><u></u>
      <div bgcolor="eaeaea" style="margin:0;padding:0">
        <center>
          <table bgcolor="ffffff" style="max-width:600px;width:100%;margin:auto" align="center" cellpadding="0" cellspacing="0" border="0">
            <tbody><tr>
              <td style="padding:20px 20px" align="center" valign="middle">
                        <img width="100" height="" border="0" src="https://ci5.googleusercontent.com/proxy/iNgL-gpSef9YktNGOxHLKRmcP1Lc8Eu-HvlGaQk68vpgEQNbNmvQURUUA5qtBk8Nov6m7EhlGJ9p56A4qOw=s0-d-e1-ft#https://pub.i.uol.com.br/2021/logos/uol.png" alt="UOL" style="display:block;border:0;max-width:100%" class="CToWUd" data-bit="iit">
              </td>
          </tr>
          <tr>
          <td valign="top">
            <table width="100%" height="4" border="0" cellpadding="0" cellspacing="0" style="font-size:0px;padding:0">
            <tbody><tr height="4" style="font-size:0px">
              <td width="100%" height="4" style="background-color:#ffce00;font-family:Arial,sans-serif;font-size:0px;height:4px;width:50%"></td>
            </tr>
            </tbody></table>
          </td>
          </tr>
            <tr>
          <td align="center" style="padding:20px">
            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                      <tbody><tr>
                        <td bgcolor="f1f1f1" align="center" style="padding:15px">
                          <table width="100%" align="center">
                            <tbody><tr>
                                <td align="center" width="46">
                                  <img valign="middle" width="46" height="46" src="https://ci6.googleusercontent.com/proxy/EKIGj7xTegiR1N3ltx1B6Ps8YeDQdg3Y1il5biiD5Wk9SQF6vzimVAh48_ZKR9ZsdRWn2ifTHZbTHPbCqf9AdNavskTRuZ1xghvYt5tUIxY=s0-d-e1-ft#https://pub.i.uol.com.br/2019/pp/comunicados/ass-pp/falha.png" alt="" class="CToWUd" data-bit="iit">
                                </td>
                                <td style="font-size:18px;padding-left:10px;font-weight:bold;line-height:1.44;color:#333333;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                                  Nova tentativa de cobrança no cartão de crédito.
                                </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;line-height:1.4;color:#333333;padding-top:15px;padding-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                          <p>Olá, ${$Names[0]}.</p>
      <p>Não conseguimos efetuar a cobrança no cartão de crédito cadastrado.</p>
      <p>Evite acumulo de fatura e a suspensão do seu serviço UOL atualizando os dados do seu cartão e efetuando o pagamento da sua fatura em atraso.</p>
      <p>Para efetuar o pagamento agora, clique no botão abaixo:</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding:20px">
                          <table width="230" bgcolor="#E29933" style="max-width:100%" align="center" cellpadding="0" cellspacing="0" border="0">
                            <tbody><tr>
                              <td align="center" style="padding:10px 20px;color:#ffffff;font-size:21px">
                                <a href="https://sac.uol.com.br/#/cobranca?cmpid=155-emkt-acessoserasusp-ass" style="color:#ffffff;font-family:Arial;font-size:20px;text-decoration:none;display:block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/cobranca?cmpid%3D155-emkt-acessoserasusp-ass&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw3HRcWRHCe8QRjMp4g5GqSc">
                                  Pagar Agora
                                </a>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;line-height:1.4;color:#333333;padding-top:10px;padding-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                          <p><strong>Atenção</strong>: Caso seu serviço seja suspenso, pode demorar até 72h para que ele seja reativado após o pagamento.</p>
      <p>Para acessar 2° via de boleto, consultar extratos, regularizar débitos e muito mais, acesse nosso aplicativo MEU UOL, ou baixe agora através do <a href="https://play.google.com/store/apps/details?id=com.invillia.uol.meuappuol" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.invillia.uol.meuappuol&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw3EtQda6b-tutZJ3Sp5FOom">Google Play</a> ou <a href="https://apps.apple.com/br/app/meu-uol/id1453193555" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://apps.apple.com/br/app/meu-uol/id1453193555&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw1IXrgs5Mf9-o5EZds5w0uc">Apple Store</a>.</p>
      <p>Se você já efetuou o pagamento, desconsidere este e-mail.</p>
      <p>Equipe UOL</p>
                        </td>
                      </tr>
                           
            </tbody></table>
          </td>
          </tr><tr>
            <td>
              <table>
                <tbody>
                  <tr>
                  <td class="m_1017911082682583270td-full-width">
                    <table border="0" cellpadding="0" cellspacing="0" style="text-align:center;width:100%;padding-top:10px;padding-bottom:40px" align="center">
                    <tbody><tr>
                      <td>
                      <p style="font-size:18px!important;padding:0px!important;margin:0px!important"><b>Precisa de
                        Ajuda?</b>
                      </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0px">
                      <p style="font-size:15px!important;padding:0px!important;margin:0px!important">
                        Visite a nossa página de 
                          <a href="https://sac.uol.com.br/ajuda/home" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/ajuda/home&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw286t-lmuJayelaSQZvoz9t">Ajuda</a>
                          ou 
                          <a href="https://sac.uol.com.br/#/atendimento-online" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/atendimento-online&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw3gUWNpwz1rzpxtFBk-M4oi"><br class="m_1017911082682583270show">entre em contato conosco</a>								
                      </p>
                      </td>
                    </tr>
                    </tbody></table>
                  </td>
                  </tr>
                </tbody>
                </table>
            </td>
            </tr>
           <tr>
            <td>
              <table width="100%" bgcolor="#000" style="color:#fff;font-size:14px;font-family:Arial,Helvetica,sans-serif;padding:20px 10px">
                <tbody><tr>
                  <td align="center">
                    <img width="94" border="0" src="https://ci5.googleusercontent.com/proxy/6qrZpkFekFMCb5jEDSchutr-0yQoVkWEYiiovC0ZAPC_6QLcGXhx_lG22WQmfS4wHd6NvBmY-RAxloPPDSF_hRDVfDkc=s0-d-e1-ft#https://pub.i.uol.com.br/2021/logos/uol-rodape.png" alt="UOL" style="display:inline-block;border:0;vertical-align:top;padding:10px 15px 10px 0px" class="CToWUd" data-bit="iit"> 
                    <p style="display:inline-block;max-width:360px;margin:0;padding:10px 0px 10px 0px">Por favor, não responda a este e-mail, ele é automático e é enviado de acordo com as boas práticas da ABEMD.</p>
                  </td>
                </tr>
                <tr>
                  <td height="30px" style="color:#a1a1a1;font-size:14px;line-height:14px;text-align:center;font-weight:bold">
                    <a href="#m_1017911082682583270_" style="color:#fff">Descadastre-se</a> <b>|</b> <a href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade" style="color:#fff" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade&amp;source=gmail&amp;ust=1696281121489000&amp;usg=AOvVaw1Zi33GE8FL5IbJuPYEq8LN">Política de privacidade</a>
                  </td>
                </tr>
                <tr>
                  <td height="40px" style="font-size:15px;text-align:center">
                    © 1996 - 2021 UOL - Seu universo online. Todos os direitos reservados.
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>	
        </tbody></table>
        </center>
      </div>`;
      return html4;
    
    }
    if(FileHTML==5){
      let html5 = `<div class=""><div class="aHl"></div><div id=":3ws" tabindex="-1"></div><div id=":3yp" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTczODI0NjMwMzIxODE3MzEzNCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTczODI0NjMwMzIxODE3MzEzNCIsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxbXV0."><div id=":3yo" class="a3s aiL "><div class="adM">
      </div><u></u>
          <div bgcolor="eaeaea" style="margin:0;padding:0">
              <center>
                  <table width="600" bgcolor="ffffff" style="max-width:600px;width:100%;margin:auto" align="center" cellpadding="0" cellspacing="0" border="0">
                      <tbody><tr>
                          <td valign="top">
                              <table width="100%" height="4" border="0" cellpadding="0" cellspacing="0" style="font-size:0px;padding:0">
                                  <tbody><tr height="70" align="center">
                                      <td width="5px"></td>
                                      <td style="padding:20px 20px;border:0" align="center" valign="middle" border="0">
                                      <img width="96" src="https://ci4.googleusercontent.com/proxy/4O1odU69-aM4qTREagFDyJJUoeTnoQ6BP1IRF0IN6xb09CkSGHXPn7hAce_i-XRWbQilS3woNSmhuT5VUOcWGg0rjN5OYlcPFOk=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/1e44380d.newUOL.png" alt="UOL" style="display:block;border:0;max-width:100%" class="CToWUd" data-bit="iit">
                                      </td>
                                      <td width="5px"></td>
                                  </tr>
                                  <tr height="4">
                                      <td colspan="4" bgcolor="#FFCE00"></td>
                                  </tr>
                                  <tr height="15">
                                      <td></td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" style="padding:20px">
                              <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
      
                                  <tbody><tr>
                                      <td bgcolor="f1f1f1" align="center" style="padding:15px">
                                          <table width="100%" align="center">
                                              <tbody><tr>
                                                  <td align="center" width="46">
                                                      <img valign="middle" width="46" height="46" src="https://ci5.googleusercontent.com/proxy/HLSoZjvWCowItXFvAlnIWImDe5WPGSY6nenTdjb0Z_re1KvUlVMcQpSOoD0jUdyqu_3u06BaH3_2f-47LHhucjG8N8PQtdIIGBtVrR4QtaR6cQ=s0-d-e1-ft#https://pub.i.uol.com.br/2019/pp/comunicados/ass-pp/sucesso.png" alt="" class="CToWUd" data-bit="iit">
                                                  </td>
                                                  <td style="font-size:16px;padding-left:10px;font-weight:bold;line-height:1.44;color:#444444;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                                                      Transação realizada com sucesso
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-size:13px;line-height:1.4;color:#444444;padding-top:15px;padding-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                                          <p>Olá,${$Names[0]}.</p>
                                          <p>A transação no cartão final 3253 foi realizada com
                                              sucesso em ${today}.</p>
                                          <p>Não perca tempo e volte a utilizar os serviços do UOL.</p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="center" style="padding:20px">
                                          <table width="146px" bgcolor="#FFCE00" style="max-width:100%" align="center" cellpadding="0" cellspacing="0" border="0">
                                              <tbody><tr>
                                                  <td align="center" style="padding:10px 10px;color:#444444;font-size:16px">
                                                      <a href="https://sac.uol.com.br/#/produtoseservicos" style="color:#444444;font-family:Arial;font-size:16px;text-decoration:none;display:block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/produtoseservicos&amp;source=gmail&amp;ust=1696281125795000&amp;usg=AOvVaw18_yE_u83c7qnCb5PRvGUd">
                                                          Meus Produtos
                                                      </a>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-size:13px;line-height:1.4;color:#444444;padding-top:10px;padding-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,'Helvetica Neue','Roboto',Arial,sans-serif">
                                          <p>Baixe agora o nosso aplicativo
                                              <a href="https://play.google.com/store/apps/details?id=com.invillia.uol.meuappuol" style="color:#0070ab" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://play.google.com/store/apps/details?id%3Dcom.invillia.uol.meuappuol&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw0KSENunNtKqcfnGNtsKfXX">Meu UOL</a>. É simples e rápido!</p>
                                          <p>Equipe UOL</p>
                                          <p></p>
                                          <p></p>
                                          <p></p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td align="center" style="background-color:#f0f0f0;border-radius:5px">
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                              <tbody><tr height="20">
                                                  <td></td>
                                              </tr>
                                              <tr>
                                                  <td width="5px">&nbsp;&nbsp;</td>
                                                  <td>
                                                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                          <tbody><tr>
                                                              <td align="center">
                                                                  <font face="Arial, Helvetica, sans-serif" color="#444444" size="3">
                                                                      Uma conta para todo o UOL
                                                                  </font>
                                                              </td>
                                                          </tr>
                                                          <tr height="1">
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td align="center">
                                                                  <table cellpadding="0" cellspacing="0">
                                                                      <tbody><tr>
                                                                          <td width="40px" style="width:40px;min-width:40px">
                                                                              &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                                          <td align="center">
                                                                              <table cellpadding="0" cellspacing="0">
                                                                                  <tbody><tr>
                                                                                      <td align="center">
                                                                                          <font face="Arial, Helvetica, sans-serif" color="#444444" size="2">
                                                                                              <p>Uma única conta para você acessar ou assinar os produtos ou serviços UOL.
                                                                                              </p>
                                                                                              <a href="https://sac.uol.com.br/#/account" style="text-decoration:underline;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/account&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw1RximdljpXCIqzMNEENiOt">Saiba mais</a>
                                                                                          </font>
                                                                                      </td>
                                                                                  </tr>
                                                                              </tbody></table>
                                                                          </td>
                                                                          <td width="40px" style="width:40px;min-width:40px">
                                                                              &nbsp;&nbsp;&nbsp;&nbsp;</td>
                                                                      </tr>
                                                                  </tbody></table>
                                                              </td>
                                                          </tr>
                                                          <tr height="5">
                                                              <td></td>
                                                          </tr>
                                                          <tr>
                                                              <td align="center">
                                                                  <table cellpadding="0" cellspacing="0">
                                                                      <tbody><tr>
                                                                          <td width="9"></td>
                                                                          <td>
                                                                              <img src="https://ci4.googleusercontent.com/proxy/4O1odU69-aM4qTREagFDyJJUoeTnoQ6BP1IRF0IN6xb09CkSGHXPn7hAce_i-XRWbQilS3woNSmhuT5VUOcWGg0rjN5OYlcPFOk=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/1e44380d.newUOL.png" alt="Uol" width="65" height="24px" class="CToWUd" data-bit="iit">
                                                                          </td>
                                                                          <td width="15"></td>
                                                                          <td>
                                                                              <img src="https://ci3.googleusercontent.com/proxy/SXDVgYy5WWf5eMJOrwdrmsDPhtNze4rOv6cm60hW9_yUswhhinPyLjhUKDwgkEh_yms29y6OQ7PLlKEnuCMKIyjv_iFBqsyPMBRiudTSV_UB6naB=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/ab90fe3e.newUOLMeuNegocio.png" alt="UOL Meu Negócio" width="215" height="28px" style="margin-top:2px" class="CToWUd" data-bit="iit">
                                                                          </td>
                                                                          <td width="15"></td>
                                                                          <td>
                                                                              <img src="https://ci5.googleusercontent.com/proxy/t2CvlGFtApx1zaxYz8dhDwadI9DwKxC_CBA3DXnkoofESBOAV_GJ4oqfYAD3dDbFmvAwfd-j6S90e7Ti-KAP8051c1l4SQ55369L5uE=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/2a2619cf.hostpreto.png" alt="Uol Host" width="120" height="24px" class="CToWUd" data-bit="iit">
                                                                          </td>
                                                                          <td width="15"></td>
                                                                      </tr>
                                                                  </tbody></table>
                                                              </td>
                                                          </tr>
                                                      </tbody></table>
                                                  </td>
                                                  <td width="5px">&nbsp;&nbsp;</td>
                                              </tr>
                                              <tr height="20">
                                                  <td></td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                                  <tr height="20">
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td style="border-bottom:2px solid #e0e0e0;background-color:#e0e0e0"></td>
                                  </tr>
                                  <tr>
                                      <td align="center" style="font-size:14px;line-height:1.4;color:#666666;padding:20px;font-family:Arial,Helvetica,sans-serif">
                                          <strong>Acesse nossos canais de atendimento:
                                          </strong>
                                          <a href="https://sac.uol.com.br/ajuda" style="font-family:Arial,Helvetica,sans-serif;text-decoration:none;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/ajuda&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw24Xd0qqmJSh_WGHE65IKse">Perguntas Frequentes</a>&nbsp;|
                                          <a href="https://sac.uol.com.br/#/" style="font-family:Arial,Helvetica,sans-serif;text-decoration:none;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw0MRjW2tHg0PoCk3F225FGE">SAC</a>&nbsp;|
                                          <a href="https://faleconosco.uol.com.br/contact/AbreChat.do?retskin=chatSac" style="font-family:Arial,Helvetica,sans-serif;text-decoration:none;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://faleconosco.uol.com.br/contact/AbreChat.do?retskin%3DchatSac&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw1MooSfO3_wRtec4SHtTjsk">Chat</a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="border-bottom:2px solid #e0e0e0;background-color:#e0e0e0"></td>
                                  </tr>
                                  <tr height="10">
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td align="center">
                                          <table cellpadding="0" cellspacing="0">
                                              <tbody><tr>
                                                  <td align="center">
                                                      <img src="https://ci6.googleusercontent.com/proxy/6OL2QjOIy4JL5AohQbqA5AgouuoVn_1cmBW1mTa8aZgrcVzK8i5JznT4dRPOgyQTet-7wIYEpkwPjLs3cmu2FxSqGjPsTleebQPvqFW3pd-SWDvDLxwv=s0-d-e1-ft#http://imguol.com/p/sac/uol/images/emails/ico-alerta-whitebg_new.jpg" width="15" height="15" alt="Atenção" class="CToWUd" data-bit="iit">
                                                      <font face="Arial, Helvetica, sans-serif" color="#999999" size="2">
                                                          Se você não solicitou esta alteração, para sua segurança,
                                                          <a href="https://sac.uol.com.br/#/atendimento" style="text-decoration:underline;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/atendimento&amp;source=gmail&amp;ust=1696281125796000&amp;usg=AOvVaw1rw27H4BWlkZ8D_gqOIk6B">entre em contato.</a>
                                                      </font>
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                              </tbody></table>
                          </td>
                      </tr>
                              <tr><td><table align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:black;color:white">
                                  <tbody><tr>
                                      <td style="width:600px" align="center">
                                          <table width="100%" cellpadding="0" cellspacing="0" align="center">
                                              <tbody><tr style="text-align:center;padding:5px">
                                                  <td style="min-width:100px;padding-left:40px">
                                                      <img src="https://ci6.googleusercontent.com/proxy/2PGNwCnSaCNZcPdscF52xukCvfHozkjKqzTDGyty1V2S0e1jMH3Al_MHJ7qYWRHXJZTCR2zmS-BRKILIgahq1bOUTJeCjy4oaKcET-8feGKD=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/4e331927.logouolbranco.png" width="110px" height="100%" alt="UOL" class="CToWUd" data-bit="iit">
                                                  </td>
                                                  <td style="font-size:11px;font-family:Arial,Helvetica,sans-serif;text-align:center;color:#f0f0f0;padding-right:50px">
                                                      Essa é uma mensagem automática. Por favor, não responda a esse e-mail.
                                                      <br>
                                                      ©1996-2022 UOL - O melhor conteúdo. Todos os direitos reservados.
                                                  </td>
                                              </tr>
                                          </tbody></table>
                                      </td>
                                  </tr>
                              </tbody></table>
                  </td></tr></tbody></table>
              </center><div class="yj6qo"></div><div class="adL">
          </div></div><div class="adL">
      </div></div></div><div id=":3wo" class="ii gt" style="display:none"><div id=":3wn" class="a3s aiL "></div></div><div class="hi"></div><div class="WhmR8e" data-hash="0"></div></div>`
      return html5;
    }
    if(FileHTML==5){
      let html6 = `
      <div class=""><div class="aHl"></div><div id=":3ws" tabindex="-1"></div><div id=":3yh" class="ii gt" jslog="20277; u014N:xr6bB; 1:WyIjdGhyZWFkLWY6MTczODE3OTczNjk1MDc1Njg3MCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsW11d; 4:WyIjbXNnLWY6MTczODE3OTczNjk1MDc1Njg3MCIsbnVsbCxbXSxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxbXSxbXSxbXV0."><div id=":3yg" class="a3s aiL msg8355336062576394142"><div class="adM">
  <div style="border:none;margin:0;padding:0">
    <p style="display:none!important;font-size:1px!important;line-height:1px!important;max-height:0px!important;max-width:0px!important;opacity:0!important;overflow:hidden!important;color:#ffffff!important">
      Você pediu para redefinir sua senha</p>
    <table width="100%" height="100%" align="center" cellpadding="0" cellspacing="0" border="0">
      <tbody><tr height="15">
        <td width="10"></td>
        <td></td>
        <td width="10"></td>
      </tr>

      <tr>
        <td width="10">&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>
          <table class="m_8355336062576394142width" bgcolor="#FFFFFF" align="center" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;border:2px solid #ededed;margin:0 auto">
            <tbody><tr height="70">
              <td width="20px"></td>
              <td>
                <table align="center">
                  <tbody><tr>
                    <td>
                      <img height="45" src="https://ci4.googleusercontent.com/proxy/4O1odU69-aM4qTREagFDyJJUoeTnoQ6BP1IRF0IN6xb09CkSGHXPn7hAce_i-XRWbQilS3woNSmhuT5VUOcWGg0rjN5OYlcPFOk=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/1e44380d.newUOL.png" alt="UOL" style="display:block" class="CToWUd" data-bit="iit">
                    </td>
                    <td width="7px"></td>
                    
                  </tr>
                </tbody></table>
              </td>
              <td width="20px"></td>
            </tr>
            <tr height="3">
              <td colspan="3" bgcolor="#E9B425">
              </td>
            </tr>
            <tr height="35">
              <td></td>
            </tr>
            <tr>
              <td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td style="width:520px">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tbody><tr>
                    <td>
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#787878;line-height:24px">
                        Olá, ${$Names[0]}.
                      </span>
                    </td>
                  </tr>
                  <tr height="10">
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:18px;color:#474747;line-height:24px;font-weight:bold">
                        Você pediu para redefinir sua senha.
                      </span>
                    </td>
                  </tr>
                  <tr height="20">
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#787878;line-height:24px">
                        A alteração será feita em todos os produtos e serviços UOL, UOL Meu
                        Negócio e UOL HOST que você utiliza com o e-mail <strong><a href="mailto:privattegyn@gmail.com" target="_blank">privattegyn@gmail.com</a></strong>
                      </span>
                    </td>
                  </tr>
                  <tr height="20">
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#787878;line-height:24px">
                        Para prosseguir, clique no botão:
                      </span>
                    </td>
                  </tr>
                  <tr height="30">
                    <td></td>
                  </tr>
                  <tr>
                    <td style="max-width:186px" align="center">
                      <div style="margin-left:15px">
                        
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="max-width:200px" align="center">
                      <a href="https://sac.uol.com.br/uol/#/recuperarsenha/alterarsenha?referenceId=Mk1Ia2F0TmxWMjFJaUQ0eE93Z0VZZz09:s1:5192:8gIbihR5XsQ1WxibL-8zcipyLYwUlVQaSvLddfnkN84UTuzh9s5YwYrXBOQngxkS8bd0-tiygsF7QHFWnDPRKA&amp;token=490770&amp;option=MAIN_EMAIL" style="background-color:#e29933;border-bottom:2px solid #b47928;border-radius:2px;color:#ffffff;display:inline-block;line-height:44px;text-align:center;text-decoration:none;width:200px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/uol/%23/recuperarsenha/alterarsenha?referenceId%3DMk1Ia2F0TmxWMjFJaUQ0eE93Z0VZZz09:s1:5192:8gIbihR5XsQ1WxibL-8zcipyLYwUlVQaSvLddfnkN84UTuzh9s5YwYrXBOQngxkS8bd0-tiygsF7QHFWnDPRKA%26token%3D490770%26option%3DMAIN_EMAIL&amp;source=gmail&amp;ust=1696281126473000&amp;usg=AOvVaw30QBCIlcVGtzAgUtEGFtGW">
                        <font face="Arial, Helvetica, sans-serif" color="#FFFFFF" size="3">
                          Redefinir senha
                        </font>
                      </a>
                    </td>
                  </tr>
                  <tr height="30">
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#787878;line-height:24px">
                        Ou cole esse link no seu navegador:
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <font face="Arial, Helvetica, sans-serif" color="#787878" size="3">
                        <a style="text-decoration:none;color:#1082be" href="https://sac.uol.com.br/uol/#/recuperarsenha/alterarsenha?referenceId=Mk1Ia2F0TmxWMjFJaUQ0eE93Z0VZZz09:s1:5192:8gIbihR5XsQ1WxibL-8zcipyLYwUlVQaSvLddfnkN84UTuzh9s5YwYrXBOQngxkS8bd0-tiygsF7QHFWnDPRKA&amp;token=490770&amp;option=MAIN_EMAIL" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/uol/%23/recuperarsenha/alterarsenha?referenceId%3DMk1Ia2F0TmxWMjFJaUQ0eE93Z0VZZz09:s1:5192:8gIbihR5XsQ1WxibL-8zcipyLYwUlVQaSvLddfnkN84UTuzh9s5YwYrXBOQngxkS8bd0-tiygsF7QHFWnDPRKA%26token%3D490770%26option%3DMAIN_EMAIL&amp;source=gmail&amp;ust=1696281126473000&amp;usg=AOvVaw30QBCIlcVGtzAgUtEGFtGW">https://sac.uol.com.br/uol/#/<wbr>recuperarsenha/alterarsenha?<wbr>referenceId=<wbr>Mk1Ia2F0TmxWMjFJaUQ0eE93Z0VZZz<wbr>09:s1:5192:8gIbihR5XsQ1WxibL-<wbr>8zcipyLYwUlVQaSvLddfnkN84UTuzh<wbr>9s5YwYrXBOQngxkS8bd0-<wbr>tiygsF7QHFWnDPRKA&amp;token=<wbr>490770&amp;option=MAIN_EMAIL</a>
                      </font>
                    </td>
                  </tr>
                </tbody></table>
              </td>
              <td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
            </tr>
            <tr height="30">
              <td></td>
            </tr>
            <tr>
              <td colspan="3" align="center" style="background-color:#f0f0f0;border-radius:5px">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tbody><tr height="22px">
                    <td height="15px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                  <tr>
                    <td width="15px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td>
                            <img src="https://ci6.googleusercontent.com/proxy/tS3g_kzcHOnjxLnScVFbw94g0CPAl9n9JnPwnDEWfHjkGSGRkh4jD5aguBienSzYN5Ll7mVA0r7Po3w0p3RQ=s0-d-e1-ft#https://imguol.com/p/alertas/email-alert.png" alt="warning alert" class="CToWUd" data-bit="iit">
                          </td>
                          <td width="15px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td>
                            <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#787878;font-weight:bold;line-height:24px">
                              Não solicitou esta alteração?
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td>
                            <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#787878;line-height:21px">
                              Para sua segurança, acesse <a href="https://sac.uol.com.br/uol/#/senhaeseguranca" style="text-decoration:none;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/uol/%23/senhaeseguranca&amp;source=gmail&amp;ust=1696281126473000&amp;usg=AOvVaw1ePk7t7FhzOF-vmKSDayUo">sac.uol.com.br/#/<wbr>senhaeseguranca</a> e
                              altere sua senha.
                            </span>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                    <td width="20px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                  <tr height="21px">
                    <td height="20px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
            <tr>
              <td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
              <td>
            </td></tr><tr height="10">
              <td></td>
            </tr>
            <tr>
              <td width="5">&nbsp;&nbsp;</td>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tbody><tr>
                    <td align="center">
                      <font face="Arial, Helvetica, sans-serif" color="#444444" size="3">
                        Uma conta para todo o UOL
                      </font>
                    </td>
                  </tr>
                  <tr height="1">
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td align="center">
                            <font face="Arial, Helvetica, sans-serif" color="#787878" size="2">
                              Uma única conta para você acessar ou assinar os
                              produtos ou serviços UOL.
                              <a href="https://sac.uol.com.br/#/account" style="text-decoration:none;color:#1082be" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://sac.uol.com.br/%23/account&amp;source=gmail&amp;ust=1696281126473000&amp;usg=AOvVaw1Mfgv_RHK8hDyNeJuy8wrS">Saiba
                                mais</a>
                            </font>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                  <tr height="5">
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <td width="9"></td>
                          <td>
                            <img src="https://ci4.googleusercontent.com/proxy/4O1odU69-aM4qTREagFDyJJUoeTnoQ6BP1IRF0IN6xb09CkSGHXPn7hAce_i-XRWbQilS3woNSmhuT5VUOcWGg0rjN5OYlcPFOk=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/1e44380d.newUOL.png" alt="Uol" width="65" height="24px" class="CToWUd" data-bit="iit">
                          </td>
                          <td width="15"></td>
                          <td>
                            <img src="https://ci3.googleusercontent.com/proxy/SXDVgYy5WWf5eMJOrwdrmsDPhtNze4rOv6cm60hW9_yUswhhinPyLjhUKDwgkEh_yms29y6OQ7PLlKEnuCMKIyjv_iFBqsyPMBRiudTSV_UB6naB=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/ab90fe3e.newUOLMeuNegocio.png" alt="UOL Meu Negócio" width="215" height="28px" style="margin-top:2px" class="CToWUd" data-bit="iit">
                          </td>
                          <td width="15"></td>
                          <td>
                            <img src="https://ci4.googleusercontent.com/proxy/okCyeAGvW4tdjx9yFqx5vJWhHPbu8LFG9f-klwWWLwozCz4yKzEYWbgsjsnsXNSfNfqWrNUilEna5YGB5DYfHHZ0MhjxdU0cfSGOXpYC=s0-d-e1-ft#https://imguol.com/p/sac/uol/images/0535b0c7.newUolHost.png" alt="Uol Host" width="120" height="24px" class="CToWUd" data-bit="iit">
                          </td>
                          <td width="15"></td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
              <td width="5px">&nbsp;&nbsp;</td>
            </tr>
        <tr><td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
      <tr>
        <td height="2" width="100%" colspan="3" style="background-color:#ededed"></td>
      </tr>
      <tr>
        <td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
        <td>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tbody><tr height="20">
              <td></td>
            </tr>
            <tr>
              <td align="center">
                <font face="Arial, Helvetica, sans-serif" color="#999999" size="2">
                  Essa é uma mensagem automática. Por favor, não responda a esse
                  e-mail
                </font>
              </td>
            </tr>
            <tr>
              <td align="center">
                <font face="Arial, Helvetica, sans-serif" color="#999999" size="2">
                  ©1996-2022 UOL - O melhor conteúdo. Todos os direitos
                  reservados.
                </font>
              </td>
            </tr>
            <tr height="20">
              <td></td>
            </tr>
          </tbody></table>
        </td>
        <td width="40px" style="width:40px;min-width:40px">&nbsp;&nbsp;&nbsp;&nbsp;</td>
      </tr>
    </tbody></table>
    </td>
    <td width="10">&nbsp;&nbsp;&nbsp;&nbsp;</td>
    </tr>
    <tr height="10">
      <td></td>
    </tr>
    </tbody></table><div class="yj6qo"></div><div class="adL">
  </div></div><div class="adL">
</div></div></div><div id=":3wo" class="ii gt" style="display:none"><div id=":3wn" class="a3s aiL "></div></div><div class="hi"></div><div class="WhmR8e" data-hash="0"></div></div> `
  return html6;
  
}
}
EmailService.prototype.Run = async function(){

  let config = await Email.Config(1,"name@asdsa.com")
  console.log(config)
  let run =  await Email.Oul("aziende-brasil@uol.com.br","Paulo#730","re-play","antraz@tuta.io","Subject",)
}

Email.Run();