// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: { ssr: true, cssProp: true },
  },
};

module.exports = nextConfig;
