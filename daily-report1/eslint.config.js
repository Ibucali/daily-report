import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      "eqeqeq": "error",
      "prefer-const": "error",
      "no-extra-semi": "error"
    },
  },
  eslintConfigPrettier,
]);
