// components/ModelViewer.tsx
'use client'

import { useEffect, useRef } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          alt?: string
          ar?: boolean
          'ar-modes'?: string
          'environment-image'?: string
          'auto-rotate'?: boolean
          'camera-controls'?: boolean
          'camera-orbit'?: string
          'interaction-prompt'?: string
          'shadow-intensity'?: string | number
        },
        HTMLElement
      >
    }
  }
}

interface ModelViewerProps {
  src: string
  alt?: string
  className?: string
  onClick?: () => void
}

export default function ModelViewer({ src, alt = "3D Model", className = "", onClick }: ModelViewerProps) {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (ref.current && onClick) {
      ref.current.addEventListener('click', onClick)
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('click', onClick)
        }
      }
    }
  }, [onClick])

  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        async
      />
      {/* @ts-ignore */}
      <model-viewer
        ref={ref}
        src={src}
        alt={alt}
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        camera-orbit="0deg 75deg 105%"
        interaction-prompt="none"
        shadow-intensity="1"
        className={className}
      />
    </>
  )
}