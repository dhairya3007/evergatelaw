const NAV = [
  { href: '#about',    label: 'About Evergate' },
  { href: '#services', label: 'Immigration Services' },
  { href: '#process',  label: 'Our Process' },
  { href: '#fees',     label: 'Transparent Fees' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        
        {/* Brand */}
        <div style={{ gridColumn: 'span 2' }}>
          <img src="/logo.svg" alt="Evergate Logo" className="footer-logo-img" />
          <p className="footer-desc">
            Evergate provides professional UK immigration advice for individuals, 
            families and businesses. Based in London, we offer clear, focused 
            advice and thorough case preparation.
          </p>
        </div>

        {/* Links */}
        <div className="footer-nav-col">
          <span className="footer-nav-label">Explore</span>
          <ul>
            {NAV.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-nav-col">
          <span className="footer-nav-label">Contact</span>
          <ul>
            <li><a href="mailto:info@evergatelaw.co.uk">info@evergatelaw.co.uk</a></li>
            <li><a href="tel:+442032762862">+44 20 3276 2862</a></li>
            <li style={{ marginTop: 8, fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
              124 City Road<br />London, EC1V 2NX
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {year} Evergate. All rights reserved. OISC Reg: F202100344
        </p>
        <p className="footer-legal">
          UK immigration advice provided for information and guidance purposes. 
          Evergate is regulated by the OISC. We are not a law firm and do not provide 
          regulated legal services beyond immigration advice and services.
        </p>
      </div>
    </footer>
  )
}
