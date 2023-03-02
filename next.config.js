/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  // entry: './public/custom.js',
  // output: {
  //   path: path.resolve(__dirname, 'public/custom.js'),
  //   publicPath: 'http://localhost:3000/tools/',
  // },
  // externals: {
  //   react: 'window.unlayer.React',
  //   'react-dom': 'window.unlayer.ReactDOM',
  //   'react-dnd': 'window.unlayer.ReactDND',
  // },
  // externals: {
  //   react: 'window.unlayer.React',
  //   'react-dom': 'window.unlayer.ReactDOM',
  //   'react-dnd': 'window.unlayer.ReactDND',
  // },
};

module.exports = nextConfig;
