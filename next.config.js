/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações do Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 