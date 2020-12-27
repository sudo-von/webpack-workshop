# Resumen - 3ra Sesión

  - Descripción general:
    - Cuando necesitas crear diferentes bundles por separado como es en el caso de las Multi Page Application necesitarás configurar tus puntos de entrada de una forma diferente tal como se muestra a continuación:
    ```javsacript
    module.exports = {
      entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
      }
    };
    ```
    - En una multi-page application el servidor va a consumir un nuevo documento HTML para ti. La página se recargará y este nuevo documento y sus respectivos archivos serán descargadas de nuevo.
- Tarea: [TAREA.md](TAREA.md)