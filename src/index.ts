/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-11-11T16:26:28+01:00
 * @Copyright: Technology Studio
**/

import {
  jestConfig,
  stylisticConfig,
  typescriptConfigList,
  type TSESLint,
  typescriptEslintConfig,
} from 'eslint-config-txo-typescript'

const defaultConfigList = typescriptEslintConfig(
  {
    files: ['**/*.js', '**/*.ts'],
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
    ],
  },
)

const jestConfigList = typescriptEslintConfig(
  {
    files: ['__tests__/**/*.ts'],
    extends: [
      jestConfig,
    ],
  },
)

export const configList: TSESLint.FlatConfig.Config[] = [
  ...defaultConfigList,
  ...jestConfigList,
  {
    ignores: [
      '.releaserc.js',
      'cli.js',
      'commitlint.config.js',
      'coverage/**/*',
      'eslint-ci.config.js',
      'eslint.config.js',
      'jest.config.js',
      'lib/**/*',
      'node_modules',
      'release.config.js',
    ],
  },
]
