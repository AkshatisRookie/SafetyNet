/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.mapbox.com', 'mapbox.com'],
  },
  webpack: (config) => {
    // Add support for WebWorkers used by mapbox-gl
    config.module.rules.push({
      test: /mapbox-gl\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    return config;
  },
};

export default nextConfig;

