/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["sim.tins.com.br"],
  },
};

module.exports = nextConfig;
