import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import nodemailer from 'nodemailer'

// Connection pool configuration for significantly faster email dispatch
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  pool: true,
  maxConnections: 3,
  maxMessages: 100,
  auth: {
    user: 'Info2zamir@gmail.com',
    pass: 'rqmg neoh caqx ztvw'.replace(/\s+/g, '')
  }
})

function buildHtmlTemplate({ name, email, phone, service, message }) {
  const replySubject = encodeURIComponent(`Evergate Law - Re: ${service || 'Your Enquiry'}`)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f5f7; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0b1528; padding: 32px 36px 28px; text-align: left; border-bottom: 3px solid #c5a880;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 700; letter-spacing: 2px; color: #ffffff; text-transform: uppercase;">
                      EVERGATE <span style="color: #c5a880; font-weight: 400;">LAW</span>
                    </div>
                    <div style="font-size: 11px; letter-spacing: 1.5px; color: #94a3b8; text-transform: uppercase; margin-top: 4px;">
                      IMMIGRATION & LEGAL ADVISORY
                    </div>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(197, 168, 128, 0.15); border: 1px solid #c5a880; color: #e2d3be; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; padding: 6px 12px; border-radius: 20px;">
                      New Client Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 36px 28px;">
              <h1 style="margin: 0 0 8px; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; color: #0b1528; font-weight: 600;">
                New Website Enquiry Received
              </h1>
              <p style="margin: 0 0 24px; font-size: 14px; color: #64748b; line-height: 1.5;">
                A prospective client has submitted an enquiry through the Evergate Law contact form. Details are provided below:
              </p>

              <!-- Client Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; width: 140px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                    Client Name
                  </td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 15px; font-weight: 600; color: #0f172a;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                    Email Address
                  </td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 15px;">
                    <a href="mailto:${email}" style="color: #0284c7; text-decoration: none; font-weight: 600;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                    Phone Number
                  </td>
                  <td style="padding: 14px 20px; border-bottom: 1px solid #e2e8f0; font-size: 15px; color: #0f172a; font-weight: 500;">
                    ${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                    Service Required
                  </td>
                  <td style="padding: 14px 20px; font-size: 15px;">
                    <span style="display: inline-block; background-color: #0b1528; color: #c5a880; font-weight: 600; font-size: 13px; padding: 4px 12px; border-radius: 4px;">
                      ${service || 'General Enquiry'}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #0b1528; margin-bottom: 10px;">
                  Client Message
                </div>
                <div style="background-color: #fdfbf7; border-left: 4px solid #c5a880; border-top: 1px solid #f1ece4; border-right: 1px solid #f1ece4; border-bottom: 1px solid #f1ece4; padding: 18px 22px; border-radius: 0 6px 6px 0; font-size: 15px; line-height: 1.65; color: #1e293b; white-space: pre-wrap;">${message}</div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 10px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=${replySubject}" style="display: inline-block; background-color: #0b1528; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 13px 28px; border-radius: 6px; letter-spacing: 0.5px; border: 1px solid #0b1528;">
                      Reply Directly to Client &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 22px 36px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 6px; font-size: 12px; color: #64748b; font-weight: 500;">
                Evergate Law &bull; 124 City Road, London, EC1V 2NX &bull; +44 20 3276 2862
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.4;">
                This message was generated automatically from the contact form at evergatelaw.co.uk.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

const emailPlugin = () => ({
  name: 'email-dev-server',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.method === 'POST' && (req.url === '/api/send-email' || req.url === '/.netlify/functions/send-email')) {
        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}')
            const { name, email, phone, service, message } = data

            if (!name || !email || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ error: 'Please provide name, email, and message.' }))
            }

            await transporter.sendMail({
              from: '"Evergate Law" <Info2zamir@gmail.com>',
              to: 'dhairyapatel3007@gmail.com',
              replyTo: email,
              subject: `New Client Enquiry: ${name} (${service || 'Immigration'})`,
              text: `EVERGATE LAW - NEW ENQUIRY\n\nClient Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService Required: ${service || 'Not specified'}\n\nClient Message:\n${message}\n\n--\nSubmitted via Evergate Law Website`,
              html: buildHtmlTemplate({ name, email, phone, service, message })
            })

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }))
          } catch (err) {
            console.error('Local dev email error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message || 'Failed to send email' }))
          }
        })
      } else {
        next()
      }
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), emailPlugin()],
})
