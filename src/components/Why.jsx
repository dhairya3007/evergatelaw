const BENEFITS = [
  {
    icon: '⚖️',
    title: 'Clear, Honest Advice',
    desc: 'We give you straightforward guidance on your immigration options — no jargon, no false promises.',
  },
  {
    icon: '🤝',
    title: 'Personal Service',
    desc: 'Every client receives dedicated, attentive support throughout their immigration journey.',
  },
  {
    icon: '🏛️',
    title: 'London-Based Team',
    desc: 'Our advisers work from our London office and understand the UK immigration system in depth.',
  },
]

export default function Why() {
  return (
    <section className="why-section" id="why" aria-labelledby="why-heading">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">Why Evergate</span>
          <h2 className="section-title reveal" id="why-heading"
              style={{ margin: '0 auto .5rem', textAlign: 'center' }}>
            Why Choose Evergate
          </h2>
          <p className="section-intro reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
            Professional UK immigration advice built on clarity, integrity and genuine care for our clients.
          </p>
        </div>

        <div className="why-grid">
          {BENEFITS.map((b, i) => (
            <div className="why-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="why-icon" aria-hidden="true">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
