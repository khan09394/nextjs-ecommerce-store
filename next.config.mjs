/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    output: export,
    basepath:'/nextjs-ecommerce-8s'
    assetprefix:'/nextjs-ecommerce-dtore/'
  },
}

export default nextConfig
