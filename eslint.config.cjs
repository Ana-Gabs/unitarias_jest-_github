const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', 
      globals: {
        ...globals.node,
        crypto: 'readonly', 
        ...globals.jest,      
        __dirname: 'readonly', 
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['off'], 
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
    },
  },
];
