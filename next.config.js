/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config

    return config;
  },
  externals: {
    react: "window.unlayer.React",
    "react-dom": "window.unlayer.ReactDOM",
    "react-dnd": "window.unlayer.ReactDND",
  },
};

module.exports = nextConfig;
