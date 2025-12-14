'use client'

import { useEffect } from 'react'

const GradientCursor = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="gradient-cursor-container">
      <style jsx global>{`
        :root {
          --mouse-x: 50vw;
          --mouse-y: 50vh;
        }

        .gradient-cursor-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(1, 255, 169, 0.08),
            transparent 50%
          );
          mix-blend-mode: screen;
          transition: opacity 0.3s ease;
        }

        @media (max-width: 768px) {
          .gradient-cursor-overlay {
            display: none;
          }
        }
      `}</style>
      <div className="gradient-cursor-overlay" />
    </div>
  )
}

export default GradientCursor
