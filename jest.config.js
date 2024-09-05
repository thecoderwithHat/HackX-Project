// jest.config.js
module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transform JavaScript files using Babel
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios)/"  // Ignore node_modules except for axios
    ],
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",  // Mock CSS imports
    },
    testEnvironment: "jsdom",  // Use jsdom environment for browser-like testing
  };
  