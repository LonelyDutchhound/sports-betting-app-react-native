module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:flowtype/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "flowtype"]
};
