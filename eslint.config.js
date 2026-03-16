import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // ── Variables ───────────────────────────────
      'no-unused-vars': 'warn', // declared but never used
      'no-undef': 'error', // used but never declared
      'no-use-before-define': 'error', // used before it was declared
      'no-shadow': 'warn', // inner variable hides outer one

      // ── Code Quality ────────────────────────────
      eqeqeq: 'error', // always === never ==
      'no-var': 'error', // never use var, always let/const
      'prefer-const': 'error', // use const when value never changes
      'no-duplicate-case': 'error', // duplicate case in switch
      'no-empty': 'warn', // empty block like if(x) {}
      curly: 'error', // always use {} even for one-liners

      // ── Console ─────────────────────────────────
      'no-console': 'warn', // reminder to clean up before shipping
    },
  },
];
