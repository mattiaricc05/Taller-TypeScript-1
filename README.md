# Taller-TypeScript-1

Este proyecto es un taller de TypeScript diseñado para demostrar los conceptos básicos de TypeScript, incluyendo clases, módulos y manipulación del DOM. La aplicación muestra una lista de series de TV con sus detalles y calcula el promedio de temporadas.

## Estructura del Proyecto

- **`tsconfig.json`**: Archivo de configuración de TypeScript.
- **`serie.ts`**: Define la clase `Serie`.
- **`dataSeries.ts`**: Contiene datos de ejemplo de series de TV.
- **`main.ts`**: Renderiza los datos de las series en una tabla HTML y calcula el promedio de temporadas.
- **`index.html`**: El archivo HTML principal que muestra la tabla.
- **`scripts/`**: Contiene los archivos JavaScript compilados.

## Instrucciones de Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/your-username/Taller-TypeScript-1.git
   cd Taller-TypeScript-1
   ```

2. Instala TypeScript globalmente si no está instalado:
   ```bash
   npm install -g typescript
   ```

3. Compila los archivos TypeScript:
   ```bash
   tsc
   ```

4. Abre `index.html` en un navegador para ver la aplicación.

## Uso

- La aplicación muestra una tabla de series de TV con su número, nombre, canal y temporadas.
- Al final de la tabla, se calcula y muestra el promedio de temporadas.

## Ejemplo de Salida

| #   | Nombre                  | Canal   | Temporadas |
|-----|-------------------------|---------|------------|
| 1   | Breaking Bad            | AMC     | 5          |
| 2   | Orange is the New Black | Netflix | 6          |
| ... | ...                     | ...     | ...        |
|     | **Promedio de temporadas: 6.0** |         |            |

## Tecnologías Utilizadas

- TypeScript
- JavaScript
- HTML
- Bootstrap

## Autor

Este proyecto fue realizado por **Mattia Riccardi**.