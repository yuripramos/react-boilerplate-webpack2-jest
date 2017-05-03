import localConfig from './webpack.local.config.babel.js';
import devConfig from './webpack.dev.config.babel.js';
import prodConfig from './webpack.prod.config.babel.js';

let config;

switch (process.env.npm_lifecycle_event) {
  case 'build:dev':
    config = devConfig;
    break;
  case 'build:prod':
    config = prodConfig;
    break;
  default:
    config = localConfig;
    break;
}

module.exports = config;
