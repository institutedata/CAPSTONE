const withTM = require('next-transpile-modules')(['micromatch']);

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        util: false,
      };
    }

    return config;
  },
});
