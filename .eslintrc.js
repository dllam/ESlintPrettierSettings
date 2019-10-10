module.exports = {
  extends: [
    //allows prettier extension to format the files
    'plugin:prettier/recommended',
    // 'plugin:react/recommended',
    // 'eslint:recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    // strict: 0,
    // 'prettier/prettier': 'error',
    semi: ['error', 'never'],
    "quotes": ["error", "single"]
  },
}
