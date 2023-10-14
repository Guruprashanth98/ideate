module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        parser: "@babel/eslint-parser",
        sourceType: "module"
      }
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    extraFileExtensions: ['.vue'],
  },
  plugins: ["prettier", "vue"],
  parser: "vue-eslint-parser",
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
