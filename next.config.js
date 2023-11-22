/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["sqlite3"],
  },
};

module.exports = nextConfig;
