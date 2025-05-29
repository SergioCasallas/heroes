// eslint.config.js
import globals from 'globals';
import tsEslint from 'typescript-eslint';
// Importar los plugins y configs que necesitas
import pluginImport from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier'; // Para deshabilitar reglas de ESLint que choquen con Prettier
// Si airbnb-typescript/base expone un objeto de configuración plana, impórtalo aquí.
// Ejemplo: import airbnbBase from 'eslint-config-airbnb-typescript/base';
// Si no, tendremos que aplicar sus reglas manualmente o buscar su alternativa flat config.

export default tsEslint.config(
  // === 1. Configuración de archivos IGNORED GLOBALMENTE ===
  // Esto se aplica antes de cualquier otra configuración para excluir archivos.
  // Es redundante si ya lo tienes en tsconfig.eslint.json, pero no hace daño.
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

  // === 2. Configuración para ARCHIVOS DE CONFIGURACIÓN (.js, .cjs, .ts en la raíz) ===
  // Estos archivos NO deben usar parserOptions.project
  {
    files: [
      '*.js',
      '*.cjs',
      '*.mjs',
      // Si tienes archivos de configuración TypeScript en la raíz, como vite.config.ts
      '*.ts', // O especificar individualmente si solo son algunos: "vite.config.ts", etc.
    ],
    // Asegúrate de que los archivos específicos que dan el error estén aquí.
    // Ej: ".eslintrc.cjs", ".prettierrc.cjs", "commitlint.config.cjs", "eslint.config.js", "vite.config.ts"

    // IMPORTANTE: NO uses parserOptions.project en este bloque.
    languageOptions: {
      parser: tsEslint.parser, // Usa el parser de TS para la sintaxis, pero sin comprobación de tipos
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
      // prettierConfig, // Si quieres que Prettier aplique formato a estos archivos
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
      // Puedes desactivar otras reglas aquí que no sean relevantes para archivos de config
    },
  },

  // === 3. Configuración para tus ARCHIVOS DE CÓDIGO FUENTE (.ts, .tsx, .js, .jsx en src/) ===
  // Aquí es donde aplicamos parserOptions.project
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    // Asegúrate de que estos archivos no estén en la sección 'ignores' global si quieres lintarlos
    // Y que tu tsconfig.eslint.json los incluya.
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
        // tsconfigRootDir: import.meta.dirname, // Descomentar si tu project path no se resuelve bien
      },
      globals: {
        ...globals.node,
        ...globals.browser, // Para React
      },
    },
    extends: [
      tsEslint.configs.recommended, // Reglas de @typescript-eslint recomendadas
      prettierConfig, // Integración con Prettier
      // Aquí iría tu integración de airbnb-typescript/base
      // Si tienes un objeto de configuración plana de airbnb, lo pones aquí.
      // Ejemplo: ...airbnbBase,
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
