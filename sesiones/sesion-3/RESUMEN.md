# Resumen - 3ra Sesión

## Output

  - Descripción general:
    - El output indica cómo y en donde debería salir tu paquete.
    - Cuando necesitas crear diferentes paquetes por separado como es en el caso de las Multi Page Application necesitarás configurar tus puntos de entrada tal como se muestra a continuación:
    ```javsacript
    module.exports = {
      entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
      }
    };
    ```
    - En una Multi Page Application el servidor va a consumir un nuevo documento HTML para ti cada vez que visites una nueva página. La página se recargará y este nuevo documento y sus respectivos archivos serán descargadas de nuevo por lo que podrás necesitar generar multiples paquetes y eso se logra con la siguiente configuración:
    ```javsacript
    module.exports = {
      entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev-[name].js'
      }
    };
    ```
    - De esta forma, en lugar de generar un solo paquete para las tres entradas generarás un paquete para cada entrada utilizando '[name]' el cual tomará el nombre de entrada para generar el nombre de salida, por ejemplo pageOne será el primer name por lo que su paquete se llamará dev-pageOne.js cuando sea mapeado.
- Tarea: [TAREA.md](TAREA.md)