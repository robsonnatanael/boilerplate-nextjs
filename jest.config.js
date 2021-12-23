module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.ts(x)',
      'pages/**/*.ts(x)'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/.next/'
    ],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      '/node_modules/',
      '/.next/'
    ],
}
