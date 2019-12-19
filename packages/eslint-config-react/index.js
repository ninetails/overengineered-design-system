module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "standard-react",
    "standard-with-typescript"
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "space-before-function-paren": ["error", "always"]
  }
}
