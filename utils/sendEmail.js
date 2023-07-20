// const { error } = require("console");
// const { cache } = require("ejs");
// const nodemailer = require("nodemailer");

// const sendEmail = async (to, messageContent) => {
//   try {
//     // create Transport
//     const transporter = nodemailer.createTransport({
//       hosts: "smtp.gmail.com",
//       port: 587,
//       secure: true,
//       auth: {
//         user: "nrivillager@gmail.com",
//         pass: "bmujstwposogcqwe",
//       },
//     });
//     // message obj
//     const message = {
//       to,
//       subject: "New Message from NriVillager",
//       html: `
//             <h3>You recevied a message from the Abhishek</h3>
//             <p>${messageContent}</p>
//             `,
//     };

//     // SEnd email
//     const info = await transporter.sendMail(message);
//     console.log("Message SEnd", info.messageId);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = sendEmail;

const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    //create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: "",
      },
    });
    //message obj
    const message = {
      to: to,
      subject: "New Message from Nodemailer APP",
      html: `
            <h3>You have received a new message from Nodemailer APP</h3>
            <p>${messageContent}</p>
            `,
    };
    //send the email
    const info = await transporter.sendMail(message);
    console.log("Message sent", info.messageId);
  } catch (error) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
