# Resumen - 2da Sesión

  - Descripción general:
    - Hay muchas formas de declarar un punto de entrada en tu configuración de Webpack.
  - Single Entry (Shorthand) Syntax:
    ```javsacript
    module.exports = {
      entry: './path/to/my/entry/file.js'
    };
    ```
  - Single Entry (Shorthand) syntax but passing an array:
    ```javsacript
    module.exports = {
      entry: [ 
        './src/file_1.js',
        './src/file_2.js'
      ],
      output: {
        filename: 'bundle.js'
      }
    };
    ```
  - Object Syntax:
    ```javsacript
    module.exports = {
      entry: {
        app: './src/app.js',
        adminApp: './src/adminApp.js'
      }
    };
    ```
- Tarea: [TAREA.md](TAREA.md)