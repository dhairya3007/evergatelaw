import { useState, useCallback } from 'react'
import Preloader   from './components/Preloader'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Services    from './components/Services'
import Process     from './components/Process'
import Trust       from './components/Trust'
import Fees        from './components/Fees'
import Cta         from './components/Cta'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import useReveal   from './hooks/useReveal'

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  // Re-observe .reveal elements after preloader finishes
  useReveal()

  const handlePreloaderDone = useCallback(() => {
    setPreloaderDone(true)
  }, [])

  return (
    <>
      <Preloader onDone={handlePreloaderDone} />

      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="sr-only"
         style={{
           position: 'absolute', top: '-100%', left: 0,
           background: 'var(--gold)', color: 'var(--white)',
           padding: '12px 24px', fontWeight: 700, zIndex: 9999,
           transition: 'top .2s',
         }}
         onFocus={e => (e.target.style.top = '0')}
         onBlur={e => (e.target.style.top = '-100%')}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Trust />
        <Process />
        <Fees />
        <Cta />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
