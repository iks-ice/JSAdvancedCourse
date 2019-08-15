module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "no-constant-condition": ["error", {"checkLoops": false}],
    "no-debugger": 0,
    "no-console": ["error", {allow: 0}],
  }
}
