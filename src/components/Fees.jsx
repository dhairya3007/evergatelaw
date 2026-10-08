const FEES = [
  {
    cat: 'Consultation',
    title: 'Initial Consultation',
    desc: 'A comprehensive review of your situation with an experienced adviser. We will assess your eligibility and outline your options.',
  },
  {
    cat: 'Fixed Fee',
    title: 'Application Support',
    desc: 'Complete end-to-end management of your visa or settlement application. We operate on a fixed-fee basis so you know the costs upfront.',
  },
  {
    cat: 'Business',
    title: 'Sponsor Licences',
    desc: 'Fixed fees for sponsor licence applications and ongoing compliance support for UK employers.',
  },
]

export default function Fees() {
  return (
    <section id="fees" className="fees-section" aria-labelledby="fees-heading">
      <div className="section" style={{ paddingBottom: '95px' }}>
        <p className="section-eyebrow reveal">Clear Pricing</p>
        <h2 className="reveal" id="fees-heading">Transparent Fees</h2>
        <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 640, lineHeight: 1.7, fontSize: 15 }}>
          We believe in complete transparency. Following an initial assessment, we will provide a clear, 
          fixed-fee quote for our services before any work begins. There are no hidden charges.
        </p>

        <div className="fees-grid">
          {FEES.map((f, i) => (
            <div className="fee-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <b>{f.cat}</b>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
