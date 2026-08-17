import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
    rules: {
      "no-undef": "off",
    },
  },
];
