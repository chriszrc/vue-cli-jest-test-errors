module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    //Added based on this github issue - https://github.com/vuejs/vue-cli/issues/1584
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    //Added based on this github issue - https://github.com/vuejs/vue-cli/issues/1584#issuecomment-452696654
    '\\.(css)$': 'identity-obj-proxy',
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  //Added based on this github issue - https://github.com/vuejs/vue-cli/issues/1584
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!bootstrap-vue)'],
}
