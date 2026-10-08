import { useEffect, useState, useRef } from 'react'

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('reveal') // 'reveal', 'move', 'done'
  const [targetStyle, setTargetStyle] = useState({})

  useEffect(() => {
    document.body.classList.add('no-scroll')
    
    // Phase 1: Reveal logo (css animation handles this, takes 2.5s)
    const t1 = setTimeout(() => {
      // Find the navbar logo to get its coordinates
      const navLogo = document.getElementById('navbar-logo-image')
      if (navLogo) {
        const rect = navLogo.getBoundingClientRect()
        setTargetStyle({
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          transform: 'none'
        })
      } else {
        // Fallback if not found
        setTargetStyle({
          top: '24px',
          left: '24px',
          width: '200px',
          height: '48px',
          transform: 'none'
        })
      }
      setPhase('move')
    }, 2500)

    // Phase 2: Move finishes, fade out preloader background
    const t2 = setTimeout(() => {
      setPhase('fade-bg')
      // Make the actual navbar logo visible
      const navLogo = document.getElementById('navbar-logo-image')
      if (navLogo) {
        navLogo.style.opacity = '1'
      }
    }, 4000) // 1500ms for move transition

    // Phase 3: Done
    const t3 = setTimeout(() => {
      setPhase('done')
      document.body.classList.remove('no-scroll')
      onDone?.()
    }, 4500) // 500ms for fade

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onDone])

  if (phase === 'done') return null

  const getLogoStyle = () => {
    if (phase === 'reveal') {
      const isMobile = window.innerWidth < 600
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? '280px' : '400px',
        height: isMobile ? '103.9px' : '148.44px',
      }
    }
    return targetStyle
  }

  return (
    <div className={`preloader ${phase === 'fade-bg' ? 'bg-transparent' : ''}`} aria-hidden="true">
      <div 
        className={`preloader-logo-wrapper ${phase === 'reveal' ? 'animating-reveal' : 'animating-move'}`}
        style={getLogoStyle()}
      >
        <img src="/logo.svg" alt="Evergate Logo" />
      </div>
    </div>
  )
}
