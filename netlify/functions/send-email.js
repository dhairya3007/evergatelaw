import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'Info2zamir@gmail.com',
    pass: (process.env.SMTP_PASS || 'rqmg neoh caqx ztvw').replace(/\s+/g, '')
  }
})

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const data = typeof event.body === 'string' ? JSON.parse(event.body || '{}') : (event.body || {})
    const { name, email, phone, service, message } = data

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'Please provide name, email, and message.' })
      }
    }

    const mailOptions = {
      from: `"Evergate Law" <${process.env.SMTP_USER || 'Info2zamir@gmail.com'}>`,
      to: process.env.SMTP_TO || 'Info2zamir@gmail.com',
      replyTo: email,
      subject: `New Enquiry from ${name} - ${service || 'General Enquiry'}`,
      text: `New Website Enquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService Required: ${service || 'Not specified'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17202a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 28px; background: #ffffff;">
          <h2 style="color: #0b1528; border-bottom: 2px solid #b39256; padding-bottom: 12px; margin-top: 0; font-size: 22px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 150px; color: #66717d; border-bottom: 1px solid #f0f0f0;">Name:</td>
              <td style="padding: 10px 0; color: #17202a; font-weight: 600; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #66717d; border-bottom: 1px solid #f0f0f0;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #b39256; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #66717d; border-bottom: 1px solid #f0f0f0;">Phone:</td>
              <td style="padding: 10px 0; color: #17202a; border-bottom: 1px solid #f0f0f0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #66717d; border-bottom: 1px solid #f0f0f0;">Service Required:</td>
              <td style="padding: 10px 0; color: #0b1528; font-weight: bold; border-bottom: 1px solid #f0f0f0;">${service || 'Not specified'}</td>
            </tr>
          </table>
          <h3 style="color: #0b1528; margin-bottom: 8px; font-size: 16px;">Message:</h3>
          <div style="background-color: #fbf9f4; padding: 16px 20px; border-left: 4px solid #b39256; white-space: pre-wrap; font-size: 15px; line-height: 1.6; border-radius: 4px;">${message}</div>
          <p style="font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 12px; text-align: center;">
            This email was sent from the Evergate Law contact form.
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ success: true, message: 'Email sent successfully' })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: error.message || 'Failed to send email' })
    }
  }
}
