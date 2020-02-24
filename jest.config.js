module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/stories/**/*.{js,jsx,ts,tsx}",
    "!src/serviceWorker.ts"
  ],
  coverageThreshold: {
    global: {
      lines: 70,
      statements: 70
    }
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js"
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"]
};
