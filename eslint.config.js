import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      eqeqeq: 'error',
      'no-undef': 'error',
      'no-duplicate-case': 'error',
    },
  },
];
