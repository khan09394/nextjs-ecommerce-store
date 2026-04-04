/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    output: export,
    trailingSlash:True,
    basepath:'/nextjs-ecommerce-8s',
    assetprefix:'/nextjs-ecommerce-store-8s/',
  },
}

export default nextConfig
