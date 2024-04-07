/** @type {import('next').NextConfig} */

// console.log(
//   process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY,
//   process.env.NEXT_PUBLIC_API_URL,
//   process.env.NEXT_TELEMETRY_DISABLED
// )

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  publicRuntimeConfig: {
    NEXT_PUBLIC_GOOGLE_FONTS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.thecloudseminar.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default nextConfig
