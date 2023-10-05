/* eslint-disable no-undef */
module.exports = {
  ignorePatterns: ['./node_modules', './.angular', './.nginx', './src/zone-flags.ts', '**/*.spec.ts', './src/client/src/test.ts'],
  env: {
      browser: true,
      es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
      {
          files: ['./src/**/*.ts'],
          rules: {
              quotes: ['error', 'single', { avoidEscape: true }],
              semi: ['error', 'always'],
              'object-property-newline': 'off',
              'no-async-promise-executor': 'off',
              'prefer-arrow-callback': 'off',
              'no-empty': 0,
              'no-empty-function': 0,
              '@typescript-eslint/no-empty-function': [2, { allow: ['arrowFunctions', 'constructors'] }],
              '@typescript-eslint/no-namespace': 'off',
              '@typescript-eslint/no-explicit-any': 'off',
              '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'none', ignoreRestSiblings: false }],
              '@typescript-eslint/no-var-requires': 'off',
              '@angular-eslint/component-class-suffix': [
                  'error',
                  {
                      suffixes: ['Page', 'Component'],
                  },
              ],
              '@angular-eslint/component-selector': [
                  'error',
                  {
                      type: 'element',
                      prefix: 'app',
                      style: 'kebab-case',
                  },
              ],
              '@angular-eslint/directive-selector': [
                  'off',
                  {
                      type: 'attribute',
                      prefix: 'app',
                      style: 'camelCase',
                  },
              ],
          },
      },
      {
          files: ['*.html'],
          extends: ['plugin:@angular-eslint/template/recommended'],
          rules: {},
      },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
      ecmaVersion: 'latest',
      sourceType: 'module',
      createDefaultProgram: true,
  },
  plugins: ['@typescript-eslint', '@angular-eslint', 'prettier', 'prefer-arrow-functions'],
  rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'prefer-arrow-functions/prefer-arrow-functions': [
          'warn',
          {
              classPropertiesAllowed: false,
              disallowPrototype: false,
              returnStyle: 'unchanged',
              singleReturnOnly: false,
          },
      ],
  },
};
