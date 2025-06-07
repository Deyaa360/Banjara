/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // GitHub Pages uses a subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/Banjara' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Banjara/' : '',
  
  // Image optimization is not supported with static export
  images: {
    unoptimized: true,
  },
  
  // Disable symlinks to avoid the EINVAL error
  experimental: {
    // Disable features that might be causing issues
    serverComponentsExternalPackages: [],
    optimizeCss: false,
    scrollRestoration: false,
  },
  
  // Increase the timeout for file operations
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  
  // Disable source maps in development to reduce file operations
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'eval';
    }
    return config;
  },
};

module.exports = nextConfig;