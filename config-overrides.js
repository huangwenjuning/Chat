const {
  overrideDevServer,
} = require('customize-cra');
const configDevServer = (overrides) => (config) =>
  Object.assign(config, overrides);

module.exports = {
  devServer: overrideDevServer(
    configDevServer({
      proxy: {
        '/chat': {
          target: 'http://localhost:3000',
          secure: false,
          changeOrigin: true,
        },
      },
    }),
  ),
};
