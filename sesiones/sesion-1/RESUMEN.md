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
  - Descripción general:
    - Webpack es una herramienta Open Source utilizada por los desarrolladores para empaquetar y exportar todos los ficheros necesarios para que un proyecto funcione con todas sus dependencias, además de buscar la optimización de estos. Este gestiona todos los recursos de tu aplicación y los añade a su correspondiente bundle a través del grafo de dependencias.
  - Conceptos clave:
    - Entry: Es el objeto de entrada eb donde webpack busca para comenzar a construir el paquete. El contexto es una cadena absoluta al directorio que contiene los archivos de entrada.
    - Output: Indica cómo y en donde debería salir tu paquete.
    - Loaders: Procesa archivos y recursos para convertirlos en módulos que puedan ser consumidos en tu aplicacion.
    - Plugins: Cuando los loaders no son suficiente, podemos usar plugins para modificar o añadir  capacidades a webpack.
    - Mode: Indicará la forma en que se generará el bundle. Si este estará optimizado para producción, desarrollo, etc.
- Tarea: [TAREA.md](TAREA.md)