import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   // Turbopack (dev)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'convertColors',
                    params: { currentColor: true },
                  },
                ],
              },
              svgProps: {
                fill: 'currentColor',
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
   // Webpack (production build)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
