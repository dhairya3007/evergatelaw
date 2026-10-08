export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="section">
        <div className="split">
          <div className="reveal">
            <p className="section-eyebrow">About Evergate</p>
            <h2 id="about-heading">About Evergate</h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <p>
              Evergate is a UK immigration advisory service based in London. We work with
              individuals, families, workers and businesses to provide clear, practical
              guidance on UK visa and immigration applications.
            </p>
            <p>
              Our approach is straightforward: we listen carefully, explain your options
              honestly and help you prepare your application thoroughly. We focus on clarity
              and communication throughout the process, so you always know where you stand.
            </p>
            <p>
              Whether you are applying for a family visa, a work visa, settlement or
              British citizenship, we are here to guide you from initial enquiry to
              final submission.
            </p>
            <a href="#contact" className="btn" id="about-cta" style={{ marginTop: '8px' }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
