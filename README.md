# Heroes App

Aplicación web moderna para gestionar héroes usando React, TypeScript y Vite.

## Características Principales

- 🚀 **Frontend Moderno**: Construido con React y TypeScript
- 📱 **Responsive Design**: Diseño adaptable usando Tailwind CSS
- 🔄 **Estado Global**: Gestión de estado con React Query
- 🛠️ **Componentes Radix UI**: Interfaz de usuario accesible y moderna
- 🧪 **Testing**: Pruebas automatizadas con Vitest (en desarrollo)
- 📦 **Herramientas de Desarrollo**: ESLint, Prettier y Husky

## Tecnologías Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **UI Components**: Radix UI
- **Estilos**: Tailwind CSS
- **Gestión de Estado**: React Query
- **HTTP Client**: Axios
- **Testing**: Vitest
- **Linter**: ESLint
- **Formatter**: Prettier
- **Git Hooks**: Husky

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

```bash
pnpm install
```

## Scripts Disponibles

- `pnpm dev`: Inicia el servidor de desarrollo
- `pnpm build`: Construye la aplicación para producción
- `pnpm preview`: Previsualiza la build de producción
- `pnpm lint`: Ejecuta el linter
- `pnpm format`: Formatea los archivos
- `pnpm test`: Ejecuta las pruebas
- `pnpm clean`: Limpia el proyecto

## Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── services/      # Servicios y APIs
├── query/         # Configuración de React Query
├── types/         # Tipos TypeScript
└── styles/        # Estilos globales
```

## API

La aplicación consume una API REST que proporciona los siguientes endpoints:

- `GET /heroes`: Lista de héroes paginada
- `GET /hero`: Detalles de un héroe específico

## Estado del Proyecto

El proyecto está en desarrollo activo y actualmente implementa las siguientes funcionalidades:

- Listado de héroes con paginación
- Detalles de héroes
- Componentes UI accesibles usando Radix UI
- Caché y gestión de estado con React Query

## Posibilidades de Mejora

1. **Funcionalidades Pendientes**

   - Implementación de CRUD completo para héroes
   - Sistema de búsqueda avanzada
   - Filtros y ordenamiento avanzado
   - Sistema de favoritos

2. **Optimización y Mejoras Técnicas**

   - Implementación de lazy loading para imágenes
   - Caching más eficiente con React Query
   - Optimización de rendimiento en listados largos
   - Implementación de dark mode

3. **Testing**

   - Implementación de pruebas unitarias
   - Pruebas de integración
   - Pruebas E2E
   - Mejor cobertura de pruebas

4. **Seguridad**

   - Implementación de autenticación
   - Validación de datos más robusta
   - Manejo de errores mejorado
   - Protección contra XSS y CSRF

5. **UX/UI**
   - Mejoras en la accesibilidad
   - Animaciones y transiciones
   - Loading states más robustos
   - Mejor feedback visual

## Contribución

1. Crea un branch para tu feature (`git checkout -b feature/amazing-feature`)
2. Commit tus cambios (`git commit -m 'Add some amazing feature'`)
3. Push al branch (`git push origin feature/amazing-feature`)
4. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT - consulta el archivo LICENSE para más detalles.
