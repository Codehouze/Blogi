const { transporter } = require("../src/config/mailer");
require("dotenv").config();

exports.userEmailTemp = {
  firstEmail: (url, firstName, email) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        subject: "One Step Closer",
        from: process.env.DEFAULT_FROM_EMAIL,
        to: email,
        service: process.env.SERVICE,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
  
  <style>
            @media only screen and (max-width: 600px) {
              .main {
                width: 320px !important;
              }
          
              .top-image {
                width: 100% !important;
              }
              .inside-footer {
                width: 320px !important;
              }
              table[class="contenttable"] { 
                      width: 320px !important;
                      text-align: left !important;
                  }
                  td[class="force-col"] {
                    display: block !important;
                }
                 td[class="rm-col"] {
                    display: none !important;
                }
              .mt {
                margin-top: 15px !important;
              }
              *[class].width300 {width: 255px !important;}
              *[class].block {display:block !important;}
              *[class].blockcol {display:none !important;}
              .emailButton{
                      width: 100% !important;
                  }
          
                  .emailButton a {
                      display:block !important;
                      font-size:18px !important;
                  }
            }
         </style>
         </head>
      
       <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  
  <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
      <tr>
        <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
          <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
            <tr>
              <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                <a href="https://kogiappealselibrary.com"><img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1625787679/Kogi_Appeals_Project/db/APPEALS-Logo-PNG-e1572663556421_r8xnd6.png" alt="logo"style="line-height: 1;width: 200px;"></a>
              </td>
            </tr>
            <tr>
              <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                  <tr>
                    <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                      <div class="mktEditable" id="main_title">
                      
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="sub-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;padding-top:5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 18px;line-height: 29px;font-weight: bold;text-align: center;">
                    <div class="mktEditable" id="intro_title">
                  
                    </div></td>
                  </tr>
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
                  </tr>
                  <tr>
                    <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
                    <div class="mktEditable" id="cta">
                    <img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1633010660/Kogi_Appeals_Project/content/istockphoto-934919462-612x612_dmdllc.jpg" width="560"/><br><br>
  
                  <tr>
                    <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                      <hr size="1" color="#eeeff0">
                    </td>
                  </tr>
                  <tr>
                    <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                    <div class="mktEditable" id="main_text">
  
                    <h4>Hi ${firstName},<br /></h4>
                    <p>
                      Thank you for signing up on Kogi Appeal E-library Application. <br/>You sign into your account 
                      by clicking <a href=${url}>here</a>.
                      
                      <div>
                      <a href=${url}>${url}</a>
                      </div>
                      
                   
                    </p>
                  <div class="ending">
                    <p>Best Regards</p>
                    <p>Kogi Appeals E-library Team</p>
                  </div>
                   </div>
                           </td>
                         </tr>
                         <tr>
                           <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            &nbsp;<br>
                           </td>
                         </tr>
                     
                               </td>	
                           </tr>
                       </table>
                     </div>
                     </td>
                   </tr>											
                   <tr>
                     <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                             <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                               <tr>
                                 <!--facebook !-->
                                 <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/kogiappeals.elibrary"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005200/Kogi_Appeals_Project/social_media_icons/fb_x0xxk2.png"></a></td>
                           
                           <!--Ig!-->
     
                              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.instagram.com/kogiappealselibrary/"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005232/Kogi_Appeals_Project/social_media_icons/ig_htqwbc.png"></a></td>
                           
       <!--youtube !-->
                               <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/playlist?list=PLnrTVa36zte7iizOLF0LRtlBRqg2vUZX7"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_38/v1633005940/Kogi_Appeals_Project/social_media_icons/youtube-logo-png-clip-art_qzqtow.png"></a></td>
                           
                          
         
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                     <td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #fff;text-align: center;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
         <div id="address" class="mktEditable">
                             <b>Kogi Appeal E-Library</b><br>
                                     Opposite Children Amusement Park, Wallace Street Post Office Road , <br>  Township/ G.R.A,<br> Lokoja<br>
                                     <a style="color: #00a5b5;" href="https://kogiappealselibrary.com/contact">Contact Us</a>
         </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
           </body>
         </html>
  
       `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve(false);
          console.log(err);
        }
        resolve(true);
        console.log(info);
      });
    });
  },

  forgotPasswordMail: (url, firstName, email) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        subject: "Forgot Password",
        from: process.env.DEFAULT_FROM_EMAIL,
        to: email,
        service: process.env.SERVICE,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
  
  <style>
  
            @media only screen and (max-width: 600px) {
              .main {
                width: 320px !important;
              }
          
              .top-image {
                width: 100% !important;
              }
              .inside-footer {
                width: 320px !important;
              }
              table[class="contenttable"] { 
                      width: 320px !important;
                      text-align: left !important;
                  }
                  td[class="force-col"] {
                    display: block !important;
                }
                 td[class="rm-col"] {
                    display: none !important;
                }
              .mt {
                margin-top: 15px !important;
              }
              *[class].width300 {width: 255px !important;}
              *[class].block {display:block !important;}
              *[class].blockcol {display:none !important;}
              .emailButton{
                      width: 100% !important;
                  }
          
                  .emailButton a {
                      display:block !important;
                      font-size:18px !important;
                  }
                }
            
         </style>
         </head>
  
         <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  
         <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
             <tr>
               <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                 <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                   <tr>
                     <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                       <a href="https://kogiappealselibrary.com"><img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1625787679/Kogi_Appeals_Project/db/APPEALS-Logo-PNG-e1572663556421_r8xnd6.png" alt="logo"style="line-height: 1;width: 200px;"></a>
                     </td>
                   </tr>
                   <tr>
                     <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                             <div class="mktEditable" id="main_title">
                             
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td class="sub-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;padding-top:5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 18px;line-height: 29px;font-weight: bold;text-align: center;">
                           <div class="mktEditable" id="intro_title">
                         
                           </div></td>
                         </tr>
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
                         </tr>
                         <tr>
                           <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
                           <div class="mktEditable" id="cta">
                           <img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1633010660/Kogi_Appeals_Project/content/istockphoto-934919462-612x612_dmdllc.jpg" width="560"/><br><br>
     
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                             <hr size="1" color="#eeeff0">
                           </td>
                         </tr>
                         <tr>
                           <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                           <div class="mktEditable" id="main_text">
                           <p>Hello ${firstName},
                           <p>A request has been received to change ${email} password.</p><br/>
                           <p> Please <a href=${url}>Click Here</a>
         
         
                             <br>
                     <p>If the above link does not work for you, please copy and paste the following into your browser address bar:
         
                     <a href="${url}">${url}</a>
                    <br/>
                           
                         <div class="ending">
                           <p>Best Regards</p>
                           <p>Kogi Appeals E-Library Support Team</p>
                         </div>
      
                           </div>
                           </td>
                         </tr>
                         <tr>
                           <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            &nbsp;<br>
                           </td>
                         </tr>
                     
                               </td>	
                           </tr>
                       </table>
                     </div>
                     </td>
                   </tr>											
                   <tr>
                     <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                             <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                               <tr>
                                 <!--facebook !-->
                                 <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/kogiappeals.elibrary"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005200/Kogi_Appeals_Project/social_media_icons/fb_x0xxk2.png"></a></td>
                           
                           <!--Ig!-->
     
                              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.instagram.com/kogiappealselibrary/"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005232/Kogi_Appeals_Project/social_media_icons/ig_htqwbc.png"></a></td>
                           
       <!--youtube !-->
                               <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/playlist?list=PLnrTVa36zte7iizOLF0LRtlBRqg2vUZX7"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_38/v1633005940/Kogi_Appeals_Project/social_media_icons/youtube-logo-png-clip-art_qzqtow.png"></a></td>
                           
                          
         
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                     <td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #fff;text-align: center;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
         <div id="address" class="mktEditable">
                             <b>Kogi Appeal E-Library</b><br>
                                     Opposite Children Amusement Park, Wallace Street Post Office Road , <br>  Township/ G.R.A,<br> Lokoja<br>
                                     <a style="color: #00a5b5;" href="https://kogiappealselibrary.com/contact">Contact Us</a>
         </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
           </body>
         </html>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          resolve(false);
        }
        console.log(info);
        resolve(true);
      });
    });
  },
};

exports.adminEmailTemp = {
  newAdmin: (url, email, admin, role,) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        subject: "One Step Closer",
        from: process.env.DEFAULT_FROM_EMAIL,
        to: email,
        service: process.env.SERVICE,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />

<style>

            @media only screen and (max-width: 600px) {
              .main {
                width: 320px !important;
              }
          
              .top-image {
                width: 100% !important;
              }
              .inside-footer {
                width: 320px !important;
              }
              table[class="contenttable"] { 
                      width: 320px !important;
                      text-align: left !important;
                  }
                  td[class="force-col"] {
                    display: block !important;
                }
                 td[class="rm-col"] {
                    display: none !important;
                }
              .mt {
                margin-top: 15px !important;
              }
              *[class].width300 {width: 255px !important;}
              *[class].block {display:block !important;}
              *[class].blockcol {display:none !important;}
              .emailButton{
                      width: 100% !important;
                  }
          
                  .emailButton a {
                      display:block !important;
                      font-size:18px !important;
                  }
                }
         </style>
         </head>
 
         <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">

         <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
             <tr>
               <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                 <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                   <tr>
                     <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                       <a href="https://kogiappealselibrary.com"><img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1625787679/Kogi_Appeals_Project/db/APPEALS-Logo-PNG-e1572663556421_r8xnd6.png" alt="logo"style="line-height: 1;width: 200px;"></a>
                     </td>
                   </tr>
                   <tr>
                     <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                             <div class="mktEditable" id="main_title">
                             
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td class="sub-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;padding-top:5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 18px;line-height: 29px;font-weight: bold;text-align: center;">
                           <div class="mktEditable" id="intro_title">
                         
                           </div></td>
                         </tr>
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
                         </tr>
                         <tr>
                           <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
                           <div class="mktEditable" id="cta">
                           <img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1631690969/AdobeStock_64279450_Preview_piqk5n.jpg" width="560"/><br><br>
         
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                             <hr size="1" color="#eeeff0">
                           </td>
                         </tr>
                         <tr>
                           <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                           <div class="mktEditable" id="main_text">
                           <h3>Hi </h3>
                           Welcome to Kogi Appeal E-library. ${admin} added you to Kogi Appeal E-Library as ${role}.<br/>
                           Please confirm your email address to complete your account setup by
                           clicking <a href=${url}>Setup Account</a> to complete signup. 
                           <br><br>
                           Email:${email},<br>
                          <br/>
                           You can also copy the link below and paste it in your browser<br/>
                           <a href="${url}">${url}</a>
                           <br/>
                         </p><br/>
                       <div class="ending">
                         <p>Best Regards</p>
                         <p>Kogi Appeals E-Library Team</p>
                       </div>
                        </div>
                         </td>
                       </tr>
                       <tr>
                         <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                          &nbsp;<br>
                         </td>
                       </tr>
                   
                             </td>	
                         </tr>
                     </table>
                   </div>
                   </td>
                 </tr>											
                 <tr>
                   <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                     <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                       <tr>
                         <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                           <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                             <tr>
                               <!--facebook !-->
                               <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/kogiappeals.elibrary"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005200/Kogi_Appeals_Project/social_media_icons/fb_x0xxk2.png"></a></td>
                         
                         <!--Ig!-->
   
                            <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.instagram.com/kogiappealselibrary/"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005232/Kogi_Appeals_Project/social_media_icons/ig_htqwbc.png"></a></td>
                         
     <!--youtube !-->
                             <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/playlist?list=PLnrTVa36zte7iizOLF0LRtlBRqg2vUZX7"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_38/v1633005940/Kogi_Appeals_Project/social_media_icons/youtube-logo-png-clip-art_qzqtow.png"></a></td>
                         
                        
       
                             </tr>
                           </table>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
                 <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                   <td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #fff;text-align: center;">
                     <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                       <tr>
                         <td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
       <div id="address" class="mktEditable">
                           <b>Kogi Appeal E-Library</b><br>
                                   Opposite Children Amusement Park, Wallace Street Post Office Road , <br>  Township/ G.R.A,<br> Lokoja<br>
                                   <a style="color: #00a5b5;" href="https://kogiappealselibrary.com/contact">Contact Us</a>
       </div>
                         </td>
                       </tr>
                     </table>
                   </td>
                 </tr>
               </table>
         </body>
       </html>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve(false);
          console.log(err);
        }
        resolve(true);
        console.log(info);
      });
    });
  },

 
};

exports.contactUsPage = {
  userEmail: (email, fullName) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        subject: "Thank You For Contact Kogi Appeals E-library",
        from: process.env.DEFAULT_FROM_EMAIL,
        to: email,
        service: process.env.SERVICE,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
  
  <style>
  
            @media only screen and (max-width: 600px) {
              .main {
                width: 320px !important;
              }
          
              .top-image {
                width: 100% !important;
              }
              .inside-footer {
                width: 320px !important;
              }
              table[class="contenttable"] { 
                      width: 320px !important;
                      text-align: left !important;
                  }
                  td[class="force-col"] {
                    display: block !important;
                }
                 td[class="rm-col"] {
                    display: none !important;
                }
              .mt {
                margin-top: 15px !important;
              }
              *[class].width300 {width: 255px !important;}
              *[class].block {display:block !important;}
              *[class].blockcol {display:none !important;}
              .emailButton{
                      width: 100% !important;
                  }
          
                  .emailButton a {
                      display:block !important;
                      font-size:18px !important;
                  }
                }
            
         </style>
         </head>
  
         <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  
         <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
             <tr>
               <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                 <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                   <tr>
                     <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                       <a href="https://kogiappealselibrary.com"><img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1625787679/Kogi_Appeals_Project/db/APPEALS-Logo-PNG-e1572663556421_r8xnd6.png" alt="logo"style="line-height: 1;width: 200px;"></a>
                     </td>
                   </tr>
                   <tr>
                     <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                             <div class="mktEditable" id="main_title">
                             
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td class="sub-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;padding-top:5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 18px;line-height: 29px;font-weight: bold;text-align: center;">
                           <div class="mktEditable" id="intro_title">
                         
                           </div></td>
                         </tr>
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
                         </tr>
                         <tr>
                           <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
                           <div class="mktEditable" id="cta">
       
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                             <hr size="1" color="#eeeff0">
                           </td>
                         </tr>
                         <tr>
                           <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                           <div class="mktEditable" id="main_text">
                          
                          Hello ${fullName},<br/>
                          <p>Thank You for Contacting <a href="https://kogiappealselibrary.com"> Kogi Appeals Elibrary </a> 
                           <br>
                           You will be attended to shortly.
                         
                         </p><br/>
                       <div class="ending">
                         <p>Best Regards</p>
                         <p>Kogi Appeals E-Library Team</p>
                       </div>
      
                           </div>
                           </td>
                         </tr>
                        
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                    <tr>
                     <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                             <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                               <tr>
                                 <!--facebook !-->
                                 <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/kogiappeals.elibrary"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005200/Kogi_Appeals_Project/social_media_icons/fb_x0xxk2.png"></a></td>
                           
                           <!--Ig!-->
     
                              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.instagram.com/kogiappealselibrary/"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005232/Kogi_Appeals_Project/social_media_icons/ig_htqwbc.png"></a></td>
                           
       <!--youtube !-->
                               <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/playlist?list=PLnrTVa36zte7iizOLF0LRtlBRqg2vUZX7"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_38/v1633005940/Kogi_Appeals_Project/social_media_icons/youtube-logo-png-clip-art_qzqtow.png"></a></td>
                           
                          
         
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   
                   
                   <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                     <td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #fff;text-align: center;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
         <div id="address" class="mktEditable">
                             <b>Kogi Appeal E-Library</b><br>
                                     Opposite Children Amusement Park, Wallace Street Post Office Road , <br>  Township/ G.R.A,<br> Lokoja<br>
                                     <a style="color: #00a5b5;" href="https://kogiappealselibrary.com/contact">Contact Us</a>
         </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
               </td>
             </tr>
           </table>
           </body>
         </html>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve(false);
          console.log(error);
        }
        resolve(true);
        console.log(info);
      });
    });
  },
  adminEmail: (fullName, email, subject, message) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        subject: `Heads Up:${fullName} Just Contacted.`,
        from: process.env.DEFAULT_FROM_EMAIL,
        to: process.env.DEFAULT_FROM_EMAIL,
        service: process.env.SERVICE,
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous"
            />
  
  <style>
  
            @media only screen and (max-width: 600px) {
              .main {
                width: 320px !important;
              }
          
              .top-image {
                width: 100% !important;
              }
              .inside-footer {
                width: 320px !important;
              }
              table[class="contenttable"] { 
                      width: 320px !important;
                      text-align: left !important;
                  }
                  td[class="force-col"] {
                    display: block !important;
                }
                 td[class="rm-col"] {
                    display: none !important;
                }
              .mt {
                margin-top: 15px !important;
              }
              *[class].width300 {width: 255px !important;}
              *[class].block {display:block !important;}
              *[class].blockcol {display:none !important;}
              .emailButton{
                      width: 100% !important;
                  }
          
                  .emailButton a {
                      display:block !important;
                      font-size:18px !important;
                  }
                }
            
         </style>
         </head>
  
         <body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5">
  
         <table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
             <tr>
               <td class="border" style="border-collapse: collapse;border: 1px solid #eeeff0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                 <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                   <tr>
                     <td colspan="4" valign="top" class="image-section" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff;border-bottom: 4px solid #00a5b5">
                       <a href="https://kogiappealselibrary.com"><img class="top-image" src="https://res.cloudinary.com/dfsmwu4av/image/upload/v1625787679/Kogi_Appeals_Project/db/APPEALS-Logo-PNG-e1572663556421_r8xnd6.png" alt="logo"style="line-height: 1;width: 200px;"></a>
                     </td>
                   </tr>
                   <tr>
                     <td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 28px;line-height: 34px;font-weight: bold; text-align: center;">
                             <div class="mktEditable" id="main_title">
                             
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td class="sub-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;padding-top:5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 18px;line-height: 29px;font-weight: bold;text-align: center;">
                           <div class="mktEditable" id="intro_title">
                         
                           </div></td>
                         </tr>
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
                         </tr>
                         <tr>
                           <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
                           <div class="mktEditable" id="cta">
                         
         <!-- 										<strong>Date:</strong> Caecuss, Dabico xx, XXXX<br>
                                           <strong>Time</strong>: 9:00 am &#8211; 4:00 pm<br><br>
                                            <a style="color:#ffffff; background-color: #ff8300;  border: 10px solid #ff8300; border-radius: 3px; text-decoration:none;" href="#">Download Now</a>
                           </div>
                           </td>
                         </tr> -->
                         <tr>
                           <td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 15px 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 21px;">
                             <hr size="1" color="#eeeff0">
                           </td>
                         </tr>
                         <tr>
                           <td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                           <div class="mktEditable" id="main_text">
                           <h3>Hello Admin, </h3><br/>
                          
                          <p> ${fullName} Reached out to inquire about ${subject}.</p>
                          <br/>
                          Description:${message}
                          Email:${email}
                           <br/>
                         </p><br/>
                       <div class="ending">
                         <p>Best Regards</p>
                         <p>Kogi Appeals E-Library Team</p>
                       </div>
      
                           </div>
                           </td>
                         </tr>
                         <tr>
                           <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                            &nbsp;<br>
                           </td>
                         </tr>
                         <tr>
         <!-- 									<td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                           <div class="mktEditable" id="download_button" style="text-align: center;">
                             <a style="color:#ffffff; background-color: #ff8300; border: 20px solid #ff8300; border-left: 20px solid #ff8300; border-right: 20px solid #ff8300; border-top: 10px solid #ff8300; border-bottom: 10px solid #ff8300;border-radius: 3px; text-decoration:none;" href="#">Download Now</a>										
                           </div>
                           </td>
                         </tr>
         
                       </table>
                     </td>
                   </tr>
                   <tr>
                     <td style="padding:20px; font-family: Arial, sans-serif; -webkit-text-size-adjust: none;" align="center">
                       <table>
                         <tr>
                           <td align="center" style="font-family: Arial, sans-serif; -webkit-text-size-adjust: none; font-size: 16px;">
                             <a style="color: #00a5b5;" href="{{system.forwardToFriendLink}}">Forward this Email</a>
                             <br/><span style="font-size:10px; font-family: Arial, sans-serif; -webkit-text-size-adjust: none;" >Please only forward this email to colleagues or contacts who will be interested in receiving this email.</span>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   <tr>
                     <td style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px; padding: 20px;">
                     <div class="mktEditable" id="cta_try">
                       <table border="0" cellpadding="0" cellspacing="0" class="mobile" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                           <tr>
                             <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                             
                                   <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                                     <tr>
                                 <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
                                 
                                 <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Try Our Products</span><br>
                                 Get started with a trial for your organization<br><br>
                             <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://www.tenable.com/evaluate">Try Now</a>
                                 
                                 </td>
                               </tr>
                                   </table>
                               </td>	
                           <td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
                               <td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
                                   <table class="mb mt" style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;margin-bottom: 15px;margin-top: 0;">
                                     <tr>
                                 <td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;padding: 18px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;background-color: #fff; border-top: 3px solid #00a5b5; border-left: 1px solid #E6E6E6; border-right: 1px solid #E6E6E6; border-bottom: 1px solid #E6E6E6; width: 250px; text-align: center;">
                                 
                                 <span style="font-family: Arial, sans-serif; font-size: 24px; line-height: 39px; border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559; text-align: center;font-weight: bold;">Buy Our Products</span><br>
                                 Get the full power of Tenable working for you<br><br>
                                                                            <a style="color:#ffffff; background-color: #00a5b5;  border-top: 10px solid #00a5b5; border-bottom: 10px solid #00a5b5; border-left: 20px solid #00a5b5; border-right: 20px solid #00a5b5; border-radius: 3px; text-decoration:none;" href="https://www.tenable.com/products/buy">Buy Now</a>
                                 
                                 </td>
                               </tr>
                                   </table> -->
                               </td>	
                           </tr>
                       </table>
                     </div>
                     </td>
                   </tr>											
                   <tr>
                     <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                             <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                               <tr>
                                <td valign="top" align="center" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td align="center" valign="middle" class="social" style="border-collapse: collapse;border: 0;margin: 0;padding: 10px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;text-align: center;">
                             <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                               <tr>
                                 <!--facebook !-->
                                 <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.facebook.com/kogiappeals.elibrary"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005200/Kogi_Appeals_Project/social_media_icons/fb_x0xxk2.png"></a></td>
                           
                           <!--Ig!-->
     
                              <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.instagram.com/kogiappealselibrary/"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_39/v1633005232/Kogi_Appeals_Project/social_media_icons/ig_htqwbc.png"></a></td>
                           
       <!--youtube !-->
                               <td style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"><a href="https://www.youtube.com/playlist?list=PLnrTVa36zte7iizOLF0LRtlBRqg2vUZX7"><img src="https://res.cloudinary.com/dfsmwu4av/image/upload/c_scale,h_38/v1633005940/Kogi_Appeals_Project/social_media_icons/youtube-logo-png-clip-art_qzqtow.png"></a></td>
                        
                               </tr>
                             </table>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   <tr bgcolor="#fff" style="border-top: 4px solid #00a5b5;">
                     <td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #fff;text-align: center;">
                       <table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
                         <tr>
                           <td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
         <div id="address" class="mktEditable">
                             <b>Kogi Appeal E-Library</b><br>
                                     Opposite Children Amusement Park, Wallace Street Post Office Road , <br>  Township/ G.R.A,<br> Lokoja<br>
                                     <a style="color: #00a5b5;" href="https://kogiappealselibrary.com/contact">Contact Us</a>
         </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
               </td>
             </tr>
           </table>
           </body>
         </html>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          resolve(false);
          console.error(error);
        }
        resolve(true);
        console.log(info);
      });
    });
  },
};
