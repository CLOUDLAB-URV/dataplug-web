import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  images: {
    unoptimized: true, // Requerido para exportación estática
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
