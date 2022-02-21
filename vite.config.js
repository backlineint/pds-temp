const path = require('path');

module.exports = {
  optimizeDeps: {
    include: ['@gdwc/drupal-state'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'DecoupledNodeSDK',
      fileName: format => `decoupled-node-sdk.${format}.js`,
    },
  },
};
