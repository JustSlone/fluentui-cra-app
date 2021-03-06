module.exports = function override(config, env) {
  let newRule = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "@griffel/webpack-loader",
    },
  };

  config.module.rules = [newRule, ...config.module.rules];
  return config;
};
