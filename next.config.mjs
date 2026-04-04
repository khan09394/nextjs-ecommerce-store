/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    output: export,
    trailingSlash:True,
    basepath:'/nextjs-ecommerce-store',
    assetprefix:'/nextjs-ecommerce-store/',
  },
}

export default nextConfig
