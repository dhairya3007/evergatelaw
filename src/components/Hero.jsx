export default function Hero() {
  return (
    <section id="hero" aria-label="Evergate — UK Immigration Advice">
      <div className="hero">
        <div className="hero-inner">

          {/* Left content */}
          <div>
            <p className="eyebrow reveal">UK Immigration Advice</p>

            <h1 className="reveal">
              Clear UK Immigration Advice.<br />
              <em>Professional Support.</em>
            </h1>

            <p className="hero-lead reveal">
              Evergate provides professional immigration advice for individuals, families
              and businesses, with a clear and practical approach from initial assessment
              to submission.
            </p>

            <div className="hero-actions reveal">
              <a href="#contact" className="btn" id="hero-cta-book">Book a Consultation</a>
              <a href="#services" className="btn ghost" id="hero-cta-services">Explore Services</a>
            </div>
          </div>

          {/* Right card */}
          <div className="hero-card reveal" aria-label="Evergate brand statement">
            <span className="hero-card-eyebrow">Evergate</span>
            <h2>Why Evergate</h2>
            <p>Focused advice. Clear communication.<br />Professional case preparation.</p>
          </div>

        </div>
      </div>

      {/* Trust bar */}
      <div className="trust-bar" role="list" aria-label="Why choose Evergate">
        <div className="trust-item" role="listitem">
          Clear &amp; Honest Advice
          <span>No jargon, no false promises — just straightforward immigration guidance.</span>
        </div>
        <div className="trust-item" role="listitem">
          Personal Service
          <span>Dedicated, attentive support for every client throughout their journey.</span>
        </div>
        <div className="trust-item" role="listitem">
          London-Based Team
          <span>Our advisers work from London with deep knowledge of the UK system.</span>
        </div>
      </div>
    </section>
  )
}
