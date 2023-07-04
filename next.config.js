/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.pexels.com",
      "wallpapercave.com",
      "w7.pngwing.com",
    ],
  },
};

module.exports = nextConfig;
