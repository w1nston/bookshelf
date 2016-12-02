module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'index.js', load: false },
      { pattern: 'utils/*.js', load: false },
      { pattern: 'app/**/*.js', load: false },
      { pattern: 'app/**/__tests__/**/*.spec.js', ignore: true }
    ],

    tests: [
      'app/**/__tests__/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony'
      }
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: 'jest'
  };
};
