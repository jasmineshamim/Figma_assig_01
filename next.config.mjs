import path from 'path';

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        aggregateTimeout: 2000,
        poll: 1000,
        ignored: [
          '**/node_modules',
          '**/pagefile.sys',
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
