import { useEffect, useState } from 'react'

const NAV = [
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process',  label: 'How it works' },
  { href: '#fees',     label: 'Fees' },
  { href: '#contact',  label: 'Contact' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header>
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Primary navigation">
          <div className="nav-inner">
            <a href="#hero" className="nav-logo" id="navbar-logo" aria-label="Evergate — home">
              <img src="/logo.svg" alt="Evergate Logo" className="nav-logo-image" id="navbar-logo-image" style={{ opacity: 0, transition: 'opacity 0.3s ease' }} />
            </a>

            <div className="nav-links" role="list">
              {NAV.map(l => (
                <a key={l.href} href={l.href} id={`nav-${l.href.slice(1)}`} role="listitem">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="btn" id="nav-book-cta">Book a Consultation</a>
            </div>

            <button
              className="mobile-toggle-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(o => !o)}
            >
              {open ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile */}
      <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={close} aria-hidden="true" />
      <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#contact" className="btn" onClick={close} style={{ textAlign: 'center' }}>
          Book a Consultation
        </a>
      </nav>
    </>
  )
}
