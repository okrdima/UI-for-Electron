module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint' // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['prettier'],
  rules: {
    semi: [2, 'never'],
    // 'no-console': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto'
      }
    ]
  }
}
