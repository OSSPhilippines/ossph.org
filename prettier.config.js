export default {
  // Basic formatting
  semi: false, // Standard style: no semicolons
  singleQuote: true, // Standard style: single quotes
  quoteProps: 'as-needed',
  trailingComma: 'es5', // Standard style: trailing commas for ES5
  bracketSpacing: true,
  arrowParens: 'avoid', // Match ESLint rule: 'arrow-parens': 'off'

  // Indentation
  tabWidth: 2, // Standard: 2 spaces
  useTabs: false,

  // Line length
  printWidth: 100,

  // Line endings
  endOfLine: 'lf',

  // Vue-specific
  vueIndentScriptAndStyle: false,

  // Other
  bracketSameLine: false,
  singleAttributePerLine: false,
}
