/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**/e-medica.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
