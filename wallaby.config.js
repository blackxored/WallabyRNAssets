module.exports = wallaby => ({
  files: [
    'package.json',
    'image.png',
    'App.js',
  ],
  tests: [
    '__tests__/*',
  ],
  env: {
    type: 'node',
    runner: 'node',
  },
  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },
  testFramework: 'jest',
  setup: wallaby => {
    wallaby.testFramework.configure(require('./package.json').jest);
  },
});

