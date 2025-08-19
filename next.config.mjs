/\*\* @type {import('next').NextConfig} \*/
const nextConfig = {
output: 'standalone',
images: {
remotePatterns: [
{
protocol: 'https',
hostname: 'placehold.co',
port: '',
pathname: '/\*\*',
},
{
  protocol: 'https',
  hostname: 'raw.githubusercontent.com',
},
{
  protocol: 'https',
  hostname: 'blog.nashtechglobal.com',
},
{
  protocol: 'https',
  hostname: 'i.ibb.co.com',
},
],
},
};

export default nextConfig;