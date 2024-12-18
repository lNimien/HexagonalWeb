# HexagonalWeb

Este proyecto implementa el backend de una aplicación web utilizando **arquitectura hexagonal**. La arquitectura hexagonal es un modelo que promueve una clara separación de responsabilidades entre las capas del sistema, lo que facilita la escalabilidad, mantenibilidad y testeo del código.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para construir aplicaciones del lado del servidor.
- **Express.js**: Framework minimalista para la creación de API REST.
- **TypeScript**: Superset de JavaScript que añade tipado estático y funcionalidades avanzadas.
- **Arquitectura hexagonal**: Diseño basado en puertos y adaptadores, que desacopla el código del dominio del código de infraestructura.

## Estructura del proyecto

La estructura del proyecto sigue los principios de la arquitectura hexagonal:

```
HexagonalWeb/
|-- src/
    |-- application/       # Casos de uso (lógica de aplicación)
    |-- domain/            # Modelos y lógica del dominio
    |-- infrastructure/    # Adaptadores y lógica específica de la infraestructura (por ejemplo, bases de datos, API externas)
    |-- interfaces/        # Controladores, rutas y servicios de acceso externo
|-- tests/                 # Pruebas unitarias y de integración
|-- package.json           # Dependencias y scripts del proyecto
|-- tsconfig.json          # Configuración de TypeScript
```

## Instalación y configuración

### Requisitos previos

- Node.js v16 o superior
- npm o yarn

### Pasos para instalar

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lNimien/HexagonalWeb.git
   cd HexagonalWeb
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias (puedes usar `.env.example` como referencia).

4. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   # o con yarn
   yarn dev
   ```

## Scripts disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run build`: Compila el proyecto a JavaScript.
- `npm start`: Inicia el servidor en modo producción.
- `npm test`: Ejecuta las pruebas.

## Contribución

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. Realiza tus cambios y haz un commit:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

4. Sube los cambios a tu repositorio fork y abre un Pull Request hacia este repositorio.


¡Gracias por usar **HexagonalWeb**! Si tienes alguna pregunta o sugerencia, no dudes en abrir un [issue](https://github.com/lNimien/HexagonalWeb/issues).

