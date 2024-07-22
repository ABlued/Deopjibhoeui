const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  exclude: ['node_modules', 'babel.config.js'],
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint', 'react', 'react-hooks', 'jest'],
  rules: {
    'react/self-closing-comp': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    /* img 는 next/image Image 를 사용하여야 함
     next/image Image 는 width, height의 Prop을 강제하고 있음 */
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', 'tsx'] }
    ], //should add ".ts" if typescript project
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-non-null-assertion': 'error',

    /* 사용하지 않는 변수를 지우면 Component Prop의 Type 을 인지하지 못하는 경우가 있음 ex) src/components/Link/PasswordTextField.tsx:37:8  Anchor */
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'no-undef': 0,
    'no-constant-condition': 1,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        bracketSameLine: false
      }
    ]
  },
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    'tailwind.config.js'
  ],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
};
