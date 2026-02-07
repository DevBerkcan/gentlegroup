/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    unoptimized: true, // This is CRUCIAL for static exports and local images
    domains: [
      'upload.wikimedia.org',
      'modelviewer.dev',
      'cdn.readyplayer.me',
      'models.readyplayer.me',
      'images.unsplash.com',
      // Add any other domains you need for images
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'modelviewer.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.readyplayer.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'models.readyplayer.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig