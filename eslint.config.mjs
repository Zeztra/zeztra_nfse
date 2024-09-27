import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '*.js', '**/node_modules'],
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'src',
        },
      },
    },

    rules: {
      '@typescript-eslint/no-namespace': 'off',
      'import/no-cycle': 'off',
      'no-new': 'off',
      'no-prototype-builtins': 'off',
      'no-restricted-syntax': 'off',
      'max-classes-per-file': 'off',
      radix: 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',

      'no-param-reassign': [
        2,
        {
          props: false,
        },
      ],

      'import/prefer-default-export': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '_',
        },
      ],

      'no-useless-constructor': 'off',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],

          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
          allowArgumentsExplicitlyTypedAsAny: true,
        },
      ],

      'no-underscore-dangle': 'off',
      '@typescript-eslint/camelcase': 'off',

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
        },
      ],

      'class-methods-use-this': 'off',

      'no-shadow': 'off',
    },
  },
];
