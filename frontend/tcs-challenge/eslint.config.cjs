const { join } = require('path');
const { defineConfig } = require("eslint/config");

module.exports = defineConfig({
  root: true,
  ignores: ["node_modules/", "dist/", "coverage/"],

  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [join(__dirname, "tsconfig.json")],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      plugins: ["@typescript-eslint", "@angular-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      rules: {
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "no-console": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      },
    },
    {
      files: ["**/*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
    }
  ],
});
