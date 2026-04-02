import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cys-portail',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
