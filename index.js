module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:json/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
  ],
  ignorePatterns: [".vscode", "build", "node_modules", "package-lock.json"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "json",
    "prettier",
    "react",
    "react-hooks",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc", caseInsensitive: true } }],
    "no-console": ["warn", { allow: ["error", "warn"] }],
    "react/display-name": "off",
    "react/jsx-sort-props": ["error", { ignoreCase: true }],
    "react-hooks/exhaustive-deps": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      }
    ],
    "sort-destructure-keys/sort-destructure-keys": [2, { "caseSensitive": false }],
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { "caseSensitive": false }]
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      }
    },
    react: {
      version: "detect"
    },
  },
};
