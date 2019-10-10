module.exports = {

    // extends: `react-app`,


    // "parser": "babel-eslint",
    // "rules": {
    //   "strict": 0
    // },
    // "extends": [
    //   "eslint:recommended",
    //   "plugin:react/recommended"
    // ]
    "extends": [
      "react-app",
      "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
      "strict": 0,
    //   "prettier/prettier": "error",
      "semi": ["error","never"],
      "quotes": ["error", "single"]
    }
  }