import typescriptEslint from 'typescript-eslint'

import txoConfig from './lib/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default typescriptEslint.config(
  {
    files: ['**/*.ts'],
    extends: txoConfig,
  },
  {
    ignores: [
      'coverage',
      'lib',
      'node_modules',
    ]
  }
)
