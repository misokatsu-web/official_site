module.exports = {
  // 共有設定の適用
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["@typescript-eslint", "react"],
  parser: "@typescript-eslint/parser",
  env: {
    // ブラウザなどのグローバル変数が使えるようにする
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    // ES Modulesを有効にする
    sourceType: "module",
    // jsxを有効にする
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      // インストールされているバージョンで設定
      version: "detect",
    },
  },
  rules: {
    // 必要に応じてルールを追加
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
