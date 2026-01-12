/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  //assetPrefix: '.',
  compiler: {
    emotion: true
  }
}

module.exports = nextConfig
