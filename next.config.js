/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // 禁用服务端功能
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
```

**Step 2：Cloudflare Pages 构建配置改为：**
```
Framework preset: Next.js (Static HTML Export)

Build command: npm install && npm run build

Build output directory: out

Environment variables:
NODE_VERSION=18
NEXT_PUBLIC_DOUBAN_PROXY_TYPE=cmliussss-cdn-tencent
