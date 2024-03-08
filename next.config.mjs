// next.config.mjs
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ai.pravatar.cc',
      
        },
      ],
    },
  };
  
  export default nextConfig;
  