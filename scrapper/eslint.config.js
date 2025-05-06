import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  [
    {
      files: ['**/*.{js,mjs,cjs,ts}'],
      plugins: { js },
      extends: ['js/recommended'],
      rules: {
        'no-console': 'error', // disallow use of console
        'no-useless-catch': 'error', // disallow catch blocks that only rethrow
        'no-implicit-coercion': 'warn', // warn against `!!foo` and `+foo`
        'no-return-await': 'error', // async funcs shouldn’t `return await`
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // allow `_` prefixed unused args
        'object-shorthand': ['warn', 'always'], // enforce `{ a }` over `{ a: a }`
        'prefer-const': 'warn', // use `const` when variables aren't reassigned
        'no-multi-spaces': 'warn', // disallow extra spaces
        'padding-line-between-statements': [
          // space between blocks & returns
          'warn',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: ['const', 'let'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
        ],
        eqeqeq: ['error', 'always'], // enforce `===`
        'no-eval': 'error', // disallow eval()
        'no-new-func': 'error', // disallow `new Function()`
        'no-alert': 'warn', // disallow alert/confirm/prompt
        curly: ['error', 'multi-line'], // force `{}` on all control blocks
      },
    },
    tseslint.configs.strict,
  ],
  {
    ignores: [
      '**/*.{test,spec}.{js,ts,jsx,tsx}',
      'dist/',
      'node_modules/',
      'scripts/',
      '.*.js',
      'src/generated/',
    ],
  },
);
