/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['import', 'unused-imports'],
  rules: {
    'max-len': ['error', { code: 120, ignoreStrings: true }],
    'newline-before-return': 'error',
    'prefer-arrow-callback': 'error',
    'func-style': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'object-shorthand': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        distinctGroup: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'next*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/app/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
      },
    ],
  },
}
