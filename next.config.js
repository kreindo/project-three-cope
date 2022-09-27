/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'github.com',
      'picsum.photos',
      'githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
