/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'astroship-pro.web3templates.com',
            'via.placeholder.com',
            'images.unsplash.com',
            'plus.unsplash.com',
        ],
    },
}

module.exports = nextConfig
