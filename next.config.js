/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: ".next/public",
  register: true,
  skipWaiting: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA({
  transpilePackages: ["lucide-react"],
});

module.exports = nextConfig;
