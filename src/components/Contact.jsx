import { useState } from 'react'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send enquiry. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setError(err.message || 'Something went wrong while sending your enquiry. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setSubmitted(false)
    setError(null)
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="section contact-grid">
        <div className="reveal">
          <p className="section-eyebrow">Contact</p>
          <h2 id="contact-heading">Start Your Enquiry</h2>
          <p>
            Please provide details of your immigration situation and one of our advisers 
            will be in touch to discuss how we can help.
          </p>
          
          <div className="contact-detail">
            <span className="contact-label">Email Us</span>
            <a href="mailto:info@evergatelaw.co.uk">info@evergatelaw.co.uk</a>
          </div>

          <div className="contact-detail">
            <span className="contact-label">Call Us</span>
            <a href="tel:+442032762862">+44 20 3276 2862</a>
          </div>

          <div className="contact-detail">
            <span className="contact-label">Address</span>
            <p style={{ margin: 0, fontSize: 15, color: 'var(--ink)' }}>
              Evergate<br />
              124 City Road<br />
              London, EC1V 2NX
            </p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          {submitted ? (
            <div className="form-success" role="alert" aria-live="polite">
              <div className="success-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Enquiry Sent Successfully</h3>
              <p>
                Thank you for reaching out, <strong>{form.name || 'there'}</strong>. We have received your enquiry regarding <strong>{form.service || 'our immigration services'}</strong>.
              </p>
              <p className="success-subtext">
                One of our qualified immigration advisers will review your details and respond to <strong>{form.email}</strong> shortly.
              </p>
              <button type="button" onClick={handleReset} className="btn outline" style={{ marginTop: '1.5rem' }}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              {error && (
                <div className="form-error-banner" role="alert">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={form.phone} 
                  onChange={handleChange} 
                  placeholder="+44 7123 456789"
                />
              </div>
              <div>
                <label htmlFor="service">Service required</label>
                <div className="select-wrapper">
                  <select 
                    id="service" 
                    name="service" 
                    value={form.service} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>Choose a service</option>
                    <option value="Family / Partner">Family / Partner</option>
                    <option value="Work Visa">Work Visa</option>
                    <option value="Business Immigration">Business Immigration</option>
                    <option value="Settlement / ILR">Settlement / ILR</option>
                    <option value="British Citizenship">British Citizenship</option>
                    <option value="Visitor Visa">Visitor Visa</option>
                  </select>
                </div>
              </div>
              <div className="full-col">
                <label htmlFor="message">How can we help?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Please describe your current situation or visa requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn dark" 
                disabled={submitting}
                style={{ opacity: submitting ? 0.8 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <svg className="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="2" x2="12" y2="6" />
                      <line x1="12" y1="18" x2="12" y2="22" />
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                      <line x1="2" y1="12" x2="6" y2="12" />
                      <line x1="18" y1="12" x2="22" y2="12" />
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                    </svg>
                    Sending Enquiry...
                  </span>
                ) : (
                  'Send Enquiry'
                )}
              </button>
              <p className="form-disclaimer">
                Evergate will process your data in accordance with our Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
