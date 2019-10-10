module.exports = {
  extends: [
    // "react-app",
    //allows prettier extension to format the files
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    // "quotes": ["error", "single"]
  },
}
