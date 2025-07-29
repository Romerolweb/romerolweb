/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-app',
  assetPrefix: '/portfolio-app/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
