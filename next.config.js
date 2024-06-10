/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nextjs-mbs',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/nextjs-mbs',
                basePath: false,
                permanent: false,
            },
        ]
    },
    reactStrictMode: true,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig
