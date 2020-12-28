# Resumen - 1er Sesión

- Prerrequisitos
  - Tener instalado Node.js
    - <https://nodejs.org/es/>
  - Tener instalado Webpack 5
    - <https://webpack.js.org/guides/installation/>
    - <code>npm install --save-dev webpack</code>
  - Tener instalado Webpack CLI
    - <code>npm install --save-dev webpack-cli</code>
  ![Introducción](webpack.png)
  ## ¿Qué es Webpack?
  - Descripción general:
    - Webpack es una herramienta Open Source utilizada por los desarrolladores para empaquetar y exportar todos los ficheros necesarios para que un proyecto funcione con todas sus dependencias, además de buscar la optimización de estos. Este gestiona todos los recursos de tu aplicación y los añade a su correspondiente bundle a través del grafo de dependencias.
  - Conceptos clave:
    - Configuration: Hay varias formas de utilizar webpack, una es mediante el cli (command line interface) utilizando la terminal lo cuál no es una muy buena idea si lo que buscas es escalabilidad por lo complejo que sería ir agregando más y más configuraciones y que todas estén en el mismo comando. La otra es mediante un archivo de configuración, el cual es el más recomendado por webpack. Por conveniencia se recomienda llamar a este archivo de configuración como webpack.config.js aunque hay más variantes.
    - Entry: Es el objeto de entrada eb donde webpack busca para comenzar a construir el paquete. El contexto es una cadena absoluta al directorio que contiene los archivos de entrada.
    - Output: Indica cómo y en donde debería salir tu paquete.
    - Loaders: Procesa archivos y recursos para convertirlos en módulos que puedan ser consumidos en tu aplicacion.
    - Plugins: Cuando los loaders no son suficiente, podemos usar plugins para modificar o añadir  capacidades a webpack.
    - Mode: Indicará la forma en que se generará el bundle. Si este estará optimizado para producción, desarrollo, etc.
    - Watch: Después del build inicial, webpack estará al tanto de los nuevos cambios en cualquiera de los archivos indicados para generar un nuevo bundle.
- Tarea: [TAREA.md](TAREA.md)