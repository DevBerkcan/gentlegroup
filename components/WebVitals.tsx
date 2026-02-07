'use client'

import { useEffect } from 'react'

// Track Core Web Vitals using the web-vitals API
function reportWebVital(metric: { name: string; value: number; id: string }) {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as Record<string, unknown>).gtag as (...args: unknown[]) => void
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vital] ${metric.name}: ${metric.value}`)
  }
}

export default function WebVitals() {
  useEffect(() => {
    // Use Performance Observer API for Core Web Vitals
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    // LCP - Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        reportWebVital({
          name: 'LCP',
          value: lastEntry.startTime,
          id: `lcp-${Date.now()}`,
        })
      })
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch {}

    // FID - First Input Delay
    try {
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const firstEntry = entries[0] as PerformanceEventTiming
        reportWebVital({
          name: 'FID',
          value: firstEntry.processingStart - firstEntry.startTime,
          id: `fid-${Date.now()}`,
        })
      })
      fidObserver.observe({ type: 'first-input', buffered: true })
    } catch {}

    // CLS - Cumulative Layout Shift
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value
          }
        }
        reportWebVital({
          name: 'CLS',
          value: clsValue,
          id: `cls-${Date.now()}`,
        })
      })
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch {}

    // FCP - First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const fcpEntry = entries.find(e => e.name === 'first-contentful-paint')
        if (fcpEntry) {
          reportWebVital({
            name: 'FCP',
            value: fcpEntry.startTime,
            id: `fcp-${Date.now()}`,
          })
        }
      })
      fcpObserver.observe({ type: 'paint', buffered: true })
    } catch {}

    // TTFB - Time to First Byte
    try {
      const navEntries = performance.getEntriesByType('navigation')
      if (navEntries.length > 0) {
        const navEntry = navEntries[0] as PerformanceNavigationTiming
        reportWebVital({
          name: 'TTFB',
          value: navEntry.responseStart - navEntry.requestStart,
          id: `ttfb-${Date.now()}`,
        })
      }
    } catch {}
  }, [])

  return null
}
