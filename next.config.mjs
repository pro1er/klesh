/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/Home',
          permanent: true, // 301 Permanent Redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  