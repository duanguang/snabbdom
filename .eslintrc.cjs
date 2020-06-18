module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: [
      './src/package/tsconfig.json',
      './src/test/tsconfig.json',
    ]
  },
  plugins: [
    'markdown',
  ],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown'
    },
    {
      files: ['**/*.md/*.@(mjs|ts)'],
      rules: {
        'array-bracket-spacing': 'off',
        'import/first': 'off',
        'import/newline-after-import': 'off',
        'key-spacing': 'off',
        'max-statements-per-line': 'off',
        'no-multi-spaces': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': 'off',
        'object-property-newline': 'off',
        'quote-props': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        indent: 'off',
        quotes: 'off',
        semi: 'off',
      },
    }
  ],
  rules: {
    'import/newline-after-import': 'error',
    'max-statements-per-line': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'no-mixed-operators': 'off',
  }
}
