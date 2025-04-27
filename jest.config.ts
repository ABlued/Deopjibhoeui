import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};

export default config;
