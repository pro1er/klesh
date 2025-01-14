import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
          {
              source: '/',
              destination: '/Home',
              permanent: false, 
          },
      ];
  },
};
export default withNextIntl(nextConfig);
