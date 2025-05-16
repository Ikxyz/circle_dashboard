// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable webpack configuration for WebAssembly
  webpack: (config, { isServer }) => {
    config.experiments = {
      asyncWebAssembly: true, // Enable WebAssembly support
      layers: true, // Enable layers
    }

    config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
    })

    return config
  },
  // Log verbose information during build
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Explicitly enable App Router (default in Next.js 13+)
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
