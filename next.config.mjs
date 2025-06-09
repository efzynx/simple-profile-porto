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
],
},
};

export default nextConfig;