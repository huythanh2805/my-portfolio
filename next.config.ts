import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
}

export default nextConfig
