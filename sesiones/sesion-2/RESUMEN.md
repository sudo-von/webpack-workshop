# Resumen - 2da Sesión

## Configuration

  - Descripción general:
    - Hay varias formas de utilizar webpack, una es mediante el cli (command line interface) utilizando la terminal lo cuál no es una muy buena idea si lo que buscas es escalabilidad por lo complejo que sería ir agregando más y más configuraciones y que todas estén en el mismo comando. La otra es mediante un archivo de configuración, el cual es el más recomendado por webpack. Por conveniencia se recomienda llamar a este archivo de configuración como webpack.config.js aunque hay más variantes.
    - Webpack cli:
    ```javsacript
    npx webpack --entry ./index.js --output-path ./dist --output-filename dev-bundle.js --mode development
    ```
    - Webpack cli indicando un configuration file mediante el parámetro config:
    ```javsacript
    webpack --config ./webpack.config.js
    ```
    - Webpack configuration file:
    ```javsacript
    module.exports = {
      // configurations...
      watch: true
    };
    ```
## Entry points

  - Descripción general:
    - Es el objeto de entrada eb donde webpack busca para comenzar a construir el paquete. El contexto es una cadena absoluta al directorio que contiene los archivos de entrada.
    - Hay muchas formas de declarar un punto de entrada en tu configuración de Webpack.
  
  - Single Entry (Shorthand) Syntax:
    ```javsacript
    module.exports = {
      entry: './path/to/my/entry/file.js'
    };
    ```
  - Single Entry (Shorthand) Syntax but passing an array:
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