var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' }
    ]
  },
  externals: {
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true
  }
});

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
      { pattern: 'index.js', load: false },
      { pattern: 'utils/*.js', load: false },
      { pattern: 'app/**/*.js', load: false },
      { pattern: 'app/**/__tests__/**/*.spec.js', ignore: true }
    ],

    tests: [
      { pattern: 'app/**/__tests__/**/*.spec.js', load: false }
    ],

    testFramework: 'mocha',

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    env: {
      kind: 'electron'
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function bootstrap() {
      window.__moduleBundler.loadTests();
    }
  };
};
