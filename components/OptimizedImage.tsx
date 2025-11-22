'use client'

import { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
  className?: string
  onError?: (e: any) => void
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

/**
 * OptimizedImage Component
 * @component
 *
 * Automatically uses WebP images with PNG fallback for better performance.
 * For static exports with unoptimized images.
 *
 * Usage:
 *   <OptimizedImage src="/berkcan.png" alt="Berk-Can" fill />
 *
 * Will try to load:
 *   1. /berkcan.webp (WebP version - 90% smaller)
 *   2. /berkcan.png (PNG fallback if WebP fails)
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className = '',
  onError,
  objectFit = 'cover'
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Convert PNG to WebP path
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.endsWith('.png')) {
      return originalSrc.replace('.png', '.webp')
    }
    return originalSrc
  }

  // Try WebP first
  const webpSrc = hasError ? src : getWebPSrc(src)

  const handleError = (e: any) => {
    // Fallback to original PNG if WebP fails
    if (!hasError) {
      setHasError(true)
      setImageSrc(src)
    }

    if (onError) {
      onError(e)
    }
  }

  const imageProps = {
    src: webpSrc,
    alt,
    className,
    priority,
    onError: handleError,
    ...(fill ? {
      fill: true,
      style: { objectFit }
    } : {
      width,
      height
    }),
    ...(sizes && { sizes })
  }

  return <Image {...imageProps} />
}
