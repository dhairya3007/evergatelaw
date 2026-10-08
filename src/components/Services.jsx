const SERVICES = [
  {
    id: 'family-visas',
    num: '01',
    title: 'Family & Partner Visas',
    desc: 'Advice and assistance with eligible, straightforward family and partner applications.',
    dark: false,
  },
  {
    id: 'work-visas',
    num: '02',
    title: 'Work Visas',
    desc: 'Support with straightforward Skilled Worker and other eligible work-route applications.',
    dark: false,
  },
  {
    id: 'business-immigration',
    num: '03',
    title: 'Business Immigration',
    desc: 'Sponsor licence applications and straightforward employer sponsorship matters.',
    dark: false,
  },
  {
    id: 'settlement',
    num: '04',
    title: 'Settlement / ILR',
    desc: 'Assistance with eligible straightforward settlement applications.',
    dark: false,
  },
  {
    id: 'citizenship',
    num: '05',
    title: 'British Citizenship',
    desc: 'Basic naturalisation and registration applications where within our authorisation.',
    dark: false,
  },
  {
    id: 'visitor-visas',
    num: '06',
    title: 'Visitor Visas',
    desc: 'Advice and document preparation for straightforward Standard Visitor applications.',
    dark: false,
  },
  {
    id: 'not-sure',
    num: '07',
    title: 'Not sure if we can help?',
    desc: 'We can assess whether your matter falls within our regulatory authorisation and explain the appropriate next step.',
    dark: true,
  }
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="services-section">
        <p className="section-eyebrow reveal">Our Services</p>
        <h2 className="reveal" id="services-heading">Our Immigration Services</h2>
        <p className="reveal" style={{ color: 'var(--muted)', maxWidth: 560, marginBottom: '2rem', lineHeight: 1.7, fontSize: 15 }}>
          We provide professional immigration advice across a wide range of UK visa categories and immigration routes.
        </p>

        <div className="services-grid">
          {SERVICES.map((s, i) => {
            return (
              <article
                key={s.id}
                id={s.id}
                className={`service-card reveal${s.dark ? ' dark' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                aria-label={s.title}
              >
                <b>{s.num}</b>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {/* Keeping hidden anchor for SEO internal linking requirements */}
                <a href={`#${s.id}`} className="sr-only">
                  {s.title} Advice
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
