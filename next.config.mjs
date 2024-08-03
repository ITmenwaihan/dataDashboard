/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'gips3.baidu.com',
                port: '',
            },
        ]
    }
};

export default nextConfig;
