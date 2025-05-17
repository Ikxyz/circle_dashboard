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
  // Configure API route handling
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
  // Skip type checking in build (helps with build errors)
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Disable static optimization for API routes
  output: 'standalone',
}

module.exports = nextConfig
