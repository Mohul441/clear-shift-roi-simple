import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Apply to all JS modules and cjs files
    files: ["**/*.{js,mjs,cjs}"],

    // Spread in the built-in JS + Node recommended rules
    ...js.configs.recommended,
    ...js.configs["node-recommended"],

    // Recognise Node globals like `require` & `process` and modern syntax
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.node
    },

    // Your per-project rule tweaks
    rules: {
      // e.g. disable the no-console rule in development:
      // "no-console": "off"
    }
  }
]);