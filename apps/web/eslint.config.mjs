const baseConfig = require("@repo/eslint-config/next.js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...baseConfig,
  {
    // Add any app-specific rules or overrides here
    ignores: ["src/env.js"],
  },
];
