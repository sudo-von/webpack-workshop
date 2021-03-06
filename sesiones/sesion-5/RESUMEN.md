# Resumen - 5ta Sesión

# Plugins

  - Prerrequisitos:
    - Instalar html-webpack-plugin.
    - <code>npm install --save-dev html-webpack-plugin</code>
  - Descripción general:
    - Cuando los loaders no son suficiente, podemos usar plugins para modificar o añadir capacidades a webpack.
  - En el siguiente ejemplo observarás una configuración que mediante el plugin HtmlWebPackPlugin generará un nuevo archivo HTML en la ruta indicada incluyendo la ruta del archivo my-first-webpack.bundle.js usando la etiqueta <script> de html, además, el plugin ProgressPlugin puede personalizar cómo será reportado el progreso durante la compilación.
  Ejemplo:
    ```javsacript
    module.exports = {
      entry: './path/to/my/entry/file.js',
      output: {
        filename: 'my-first-webpack.bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
          }
        ]
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
    };
    ```
  - Notas
    - Debido a que los plugins pueden tomar argumentos/opciones, deberás pasar una nueva instancia del plugin en tu configuración de webpack.
    - Dependiendo en cómo usas webpack, hay muchas formas de usar plugins.
- Tarea: [TAREA.md](TAREA.md)