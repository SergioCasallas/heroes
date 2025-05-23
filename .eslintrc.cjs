// .eslintrc.cjs
module.exports = {
    // Entorno de ejecución: Navegador y Node.js (para cosas como Webpack/Vite config)
    env: {
      browser: true,
      node: true,
      es2021: true, // Habilitar características de ECMAScript 2021
    },
    // Analizador: TypeScript
    parser: '@typescript-eslint/parser',
    // Opciones del analizador: Para TypeScript
    parserOptions: {
      ecmaVersion: 'latest', // La versión de ECMAScript más reciente
      sourceType: 'module', // Usar módulos ES
      ecmaFeatures: {
        jsx: true, // Habilitar JSX para React
      },
      // Ruta al archivo tsconfig.json de tu proyecto
      // Esto es crucial para que TypeScript ESLint pueda analizar correctamente tu código.
      project: './tsconfig.json',
    },
    // Plugins: Extensiones para ESLint
    plugins: [
      '@typescript-eslint', // Reglas específicas de TypeScript
      'react', // Reglas específicas de React
      'react-hooks', // Reglas específicas de React Hooks
      'jsx-a11y', // Reglas de accesibilidad para JSX
      'prettier', // Integración con Prettier
    ],
    // Extends: Conjuntos de reglas predefinidas
    extends: [
      'eslint:recommended', // Reglas básicas recomendadas de ESLint
      'plugin:@typescript-eslint/recommended', // Reglas recomendadas de TypeScript ESLint
      'plugin:@typescript-eslint/recommended-requiring-type-checking', // Reglas que requieren información de tipos (más estrictas)
  
      // React
      'plugin:react/recommended', // Reglas recomendadas de React
      'plugin:react-hooks/recommended', // Reglas recomendadas de React Hooks
      'plugin:jsx-a11y/recommended', // Reglas recomendadas de accesibilidad para JSX
  
      // Último: Desactiva las reglas de ESLint que entran en conflicto con Prettier
      'plugin:prettier/recommended',
    ],
    // Reglas personalizadas: Sobrescribe o añade reglas específicas
    rules: {
      // Reglas de TypeScript
      '@typescript-eslint/explicit-module-boundary-types': 'off', // No requerir tipos explícitos para funciones exportadas
      '@typescript-eslint/no-explicit-any': 'warn', // Advertir sobre el uso de 'any'
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Advertir sobre variables no usadas (ignorar las que empiezan con '_')
      '@typescript-eslint/no-shadow': 'error', // Prohibir el sombreado de variables (definir una variable con el mismo nombre que una en un scope exterior)
  
      // Reglas de React
      'react/react-in-jsx-scope': 'off', // No requerir `import React from 'react'` en cada archivo JSX (para React 17+)
      'react/prop-types': 'off', // Desactivar la verificación de propTypes (ya que usamos TypeScript)
      'react/jsx-uses-react': 'off', // Desactiva la comprobación de 'React' en JSX (para React 17+)
      'react/self-closing-comp': ['error', { component: true, html: true }], // Auto-cerrar componentes y elementos HTML vacíos
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // No usar llaves en JSX a menos que sea necesario
  
      // Reglas generales (no específicas de TS o React)
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Permitir console.warn y console.error, pero advertir sobre console.log
      'no-debugger': 'error', // Prohibir el uso de 'debugger'
      'no-unused-vars': 'off', // Desactivar esta regla de ESLint base, ya que @typescript-eslint/no-unused-vars la maneja mejor
      'prefer-const': 'error', // Requerir 'const' para variables que no se reasignan
      'array-callback-return': 'error', // Requerir que las funciones de callback de array devuelvan un valor
  
      // Reglas de Prettier: Asegúrate de que Prettier formatee el código
      'prettier/prettier': 'error',
    },
    // Configuración para archivos específicos
    settings: {
      react: {
        version: 'detect', // Detectar automáticamente la versión de React
      },
    },
  };