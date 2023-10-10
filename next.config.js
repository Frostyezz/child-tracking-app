/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },
  // output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
