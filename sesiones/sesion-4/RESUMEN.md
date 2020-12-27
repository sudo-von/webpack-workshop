# Resumen - 3ra Sesión

  - Prerrequisitos:
    - Instalar el loader de css y typescript.
    - <code>npm install --save-dev css-loader ts-loader typescript</code>
  - Descripción general:
    - Los Loaders son transformaciones que son aplicadas al código fuente de un módulo. Te permiten preprocesar archivos. Los loaders son como tareas, y estas pueden transformar archivos de diferentes lenguajes (como Typescript) a JavaScript o cargar imágenes como URLs. Los Loaders incluso te permiten hacer cosas como importar archivos CSS directamente en tus módulos de Javascript.
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
    - Es importante aclarar que las rules serán ejecutadas de abajo hacia arriba o de derecha a izquierda por lo que en este caso primer ejecutará el loader de typescript y luego el de css.
    - Los loaders pueden ser síncronos o asíncronos.
    - Pueden ser configurados con opciones.
    - Los plugins pueden darles más funcionalidades.
    - Pueden generar archivos adicionales.
- Tarea: [TAREA.md](TAREA.md)