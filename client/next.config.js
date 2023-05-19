/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
        port: '',
        pathname: '/**'
      },
    ]
  }}

module.exports = nextConfig;
