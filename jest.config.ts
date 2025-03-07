
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform:{
    '^.+\\.scss$': 'jest-scss-transform',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setupFilesAfterEnv.ts', '<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "svg", "scss"],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '\\.(scss|css|sass)$'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^.+\\.(less|scss)$': '<rootDir>/src/__mocks__/svgMock.ts',
  },
};
