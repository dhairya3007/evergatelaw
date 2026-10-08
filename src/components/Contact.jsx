import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

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
            <div className="form-success">
              <h3>Enquiry Received</h3>
              <p>Thank you for getting in touch. We will review your enquiry and contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="full-col">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} />
              </div>
              <div className="full-col">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn dark">Send Enquiry</button>
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
