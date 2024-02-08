/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },      
    ],    
  },
};

// translation plugin "next-intl"
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);
