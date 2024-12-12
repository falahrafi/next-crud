/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/customers',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
