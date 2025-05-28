// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'prettier',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    // TS
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-shadow': 'error',
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // Generales
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'array-callback-return': 'error',
    // Prettier
    'prettier/prettier': 'error',
    // Import extensions solo para paquetes (alias y archivos TS los ignora)
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never'
    }],
  },
  settings: {
    react: { version: 'detect' },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      // 1️⃣ Resolver Node nativo (para .ts/.tsx/.js/.jsx)
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      // 2️⃣ Resolver TypeScript (lee paths de tsconfig.json)
      typescript: {
        project: './tsconfig.eslint.json',
        alwaysTryTypes: true
      },
      // 3️⃣ Resolver de alias @ → ./src
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [
    {
      // Desactivar import/extensions en archivos TS/TSX
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/extensions': 'off'
      }
    }
  ]
};
