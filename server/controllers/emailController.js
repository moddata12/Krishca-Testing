const nodemailer = require('nodemailer');

const mail = async (req, res) => {
    const { email, serviceRequest, message } = req.body;
  
    // Configure the email transport using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: "sramsw16@gmail.com",
          pass: "osperrkwkiwzmbxb"
      }
    });
  
    const mailOptions = {
        from: email,
        to: "sramsw16@gmail.com",
        cc: email,
        subject: `Service Request: ${serviceRequest}`,
        text: message
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  };

  module.exports = { mail, }; 

  