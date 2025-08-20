/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    experimental: {
        // ✅ Allow LAN access during dev
        allowedDevOrigins: ["http://192.168.0.102:3000"],
    },
}

export default nextConfig