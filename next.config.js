/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 跳过 API 路由的预渲染
  skipTrailingSlashRedirect: true,
  // 或者直接忽略这些错误
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig
