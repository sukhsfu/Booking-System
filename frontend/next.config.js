// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: { ssr: true, cssProp: true },
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
