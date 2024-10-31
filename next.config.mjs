/** @type {import('next').NextConfig} */
// next.config.mjs
export default {
    experimental: {
      serverActions: {
        bodySizeLimit: '20mb', // Set your desired limit here
      },
    },
  };
  


