module.exports = {
  env: {
    es6: true,
    node: true,
    // avoid errors like it/describe in test
    jest: true,
    // avoid errors like window/document
    browser: true,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "react-hooks",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
      },
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/no-explicit-any": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "@typescript-eslint/camelcase": ["error", { genericType: "always" }],
    "prefer-const": ["error", { destructuring: "all" }],
    "react/display-name": "off",
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
