// .prettierrc.cjs
module.exports = {
    // Configuración general
    printWidth: 100, // Longitud máxima de la línea antes de envolver el código
    tabWidth: 2, // Número de espacios por nivel de indentación
    useTabs: false, // Usar espacios en lugar de tabulaciones para la indentación
    semi: true, // Incluir punto y coma al final de las declaraciones
    singleQuote: true, // Usar comillas simples en lugar de dobles para las cadenas
    trailingComma: 'all', // Añadir comas finales siempre que sea posible (para objetos, arrays, etc.)
  
    // Configuración específica de TypeScript (aunque muchas se aplican globalmente)
    arrowParens: 'always', // Siempre incluir paréntesis alrededor del parámetro de las funciones de flecha
    bracketSpacing: true, // Espacios dentro de los corchetes de los objetos literales
    jsxBracketSameLine: false, // Poner el ">" de las etiquetas JSX de múltiples líneas en una nueva línea
  
    // Configuración para archivos específicos (opcional)
    overrides: [
      {
        files: '.prettierrc.cjs', // Archivo de configuración de Prettier
        options: {
          parser: 'json', // Analizarlo como JSON para evitar errores de formato
        },
      },
      {
        files: '*.json', // Archivos JSON
        options: {
          printWidth: 80, // Reducir el ancho de impresión para JSON
        },
      },
      {
        files: '*.md', // Archivos Markdown
        options: {
          proseWrap: 'always', // Envolver siempre el texto en Markdown
        },
      },
    ],
  };