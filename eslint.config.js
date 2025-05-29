// eslint.config.js
import globals from 'globals';
import tsEslint from 'typescript-eslint';
// Importar los plugins y configs que necesitas
import pluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';

export default tsEslint.config(
  {
    ignores: [
      'dist/',
      'node_modules/',
      '**/*.test.ts',
      '**/*.spec.ts',
      '.drizzle/',
      // Si tienes otros archivos/carpetas a ignorar globalmente
      '.eslintrc.cjs',
      '.prettierrc.cjs',
      'commitlint.config.cjs',
      'eslint.config.js',
      'vite.config.ts',
    ],
  },

  {
    files: [
      '*.js',
      '*.cjs',
      '*.mjs',
      '*.ts', // O especificar individualmente si solo son algunos: "vite.config.ts", etc.
    ],
    languageOptions: {
      parser: tsEslint.parser,
      globals: {
        ...globals.node, // Los archivos de configuración son de Node.js
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin, // Aún necesitamos el plugin para reglas específicas de TS
      prettier: prettierPlugin,
    },
    extends: [
      tsEslint.configs.disableTypeChecked, // Deshabilita todas las reglas de comprobación de tipos
    ],
    rules: {
      'prettier/prettier': 'error', // Forzar formato
      '@typescript-eslint/no-var-requires': 'off', // Común en configs de CommonJS
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },

  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      import: pluginImport,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      globals: {
        ...globals.node,
        ...globals.browser, // Para React
      },
    },
    extends: [
      tsEslint.configs.recommended, // Reglas de @typescript-eslint recomendadas
      prettierConfig, // Integración con Prettier
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'func-names': 'off',
      'no-process-exit': 'off',
      'object-shorthand': 'off',
      'class-methods-use-this': 'off',
      'arrow-body-style': 'off',
      'import/prefer-default-export': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
            ],
            ['^@?\\w'],
            ['^\\u0000'],
            ['^(#src)(/.*|$)', '^(#env)(/.*|$)'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      'import/no-unresolved': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        alias: {
          map: [
            ['#src', './src'],
            ['#env', './config'],
          ],
          extensions: ['.ts', '.json'],
        },
      },
    },
  },
);
