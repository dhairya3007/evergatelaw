const STEPS = [
  {
    num:   'STEP 01',
    title: 'Initial Assessment',
    desc:  'We start with a detailed assessment of your circumstances to understand your goals and identify the most appropriate immigration route.',
  },
  {
    num:   'STEP 02',
    title: 'Clear Advice',
    desc:  'You receive straightforward, honest advice outlining your options, the requirements, the costs and the likely timeframes.',
  },
  {
    num:   'STEP 03',
    title: 'Case Preparation',
    desc:  'We work with you to gather the necessary evidence and prepare a strong, thoroughly documented application.',
  },
  {
    num:   'STEP 04',
    title: 'Submission',
    desc:  'We submit your application to the Home Office on your behalf and manage all communication until a decision is reached.',
  },
]

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="section">
        <p className="section-eyebrow reveal">How it works</p>
        <h2 className="reveal" id="process-heading">Our Process</h2>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <b>{s.num}</b>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
