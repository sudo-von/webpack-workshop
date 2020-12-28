# Resumen - 4ta Sesión

# Loaders

  - Prerrequisitos:
    - Instalar css-loader, ts-loader   y typescript.
    - <code>npm install --save-dev css-loader ts-loader typescript</code>
  - Descripción general:
    - Los Loaders son transformaciones que son aplicadas al código fuente de un módulo. Te permiten preprocesar archivos y son como tareas, además pueden transformar archivos de diferentes lenguajes (como Typescript) a JavaScript o cargar imágenes en Javascript y regresar URLs. Los Loaders incluso te permiten hacer cosas como importar archivos CSS directamente en tus módulos de Javascript.
  - En el siguiente ejemplo observarás una configuración que permitirá transformar el código de Typescript a JavaScript, esto es debido a que el navegador entiende JavaScript pero no entiende TypeScript por lo que necesitaremos transformar el código para que el navegador lo entienda.
  Ejemplo:
    ```javsacript
    module.exports = {
      module: {
        rules: [
          // test: Archivos que mediante una expresión regular serán detectados. use: Loader que será aplicado a estos archivos.
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.ts$/, use: 'ts-loader' }
        ]
      }
    };
    ```
  - Las rules aceptan un arreglo, y dentro de este abrá objetos en donde se aplicará el loader indicado en 'use' a todos los archivos encontrados mediante test usando una expresión regular, en este caso todos los archivos con extensión css se les aplicará css-loader, mientras que a los .ts se les aplicará ts-loader.
  - Notas
    - Es importante aclarar que las rules serán ejecutadas de abajo hacia arriba o de derecha a izquierda por lo que en este caso primer ejecutará el loader de typescript y luego el de css.
    - Los loaders pueden ser síncronos o asíncronos.
    - Pueden ser configurados con opciones.
    - Los plugins pueden darles más funcionalidades a los loaders.
    - Pueden generar archivos adicionales.
- Tarea: [TAREA.md](TAREA.md)