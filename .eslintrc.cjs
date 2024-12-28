module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-process-env': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-template-curly-in-string': 'off',
    'import/no-named-default': 'off',
    'import/no-commonjs': 'error',
    'semi': ["error", "always"]
  },
  globals: {
    context: 'readonly',
    afterEach: 'readonly',
    expect: 'readonly',
    process: 'readonly',
    describe: 'readonly',
    before: 'readonly',
    after: 'readonly',
    beforeEach: 'readonly',
    suite: 'readonly',
    test: 'readonly',
    it: 'readonly',
    beforeAll: 'readonly',
  },
}