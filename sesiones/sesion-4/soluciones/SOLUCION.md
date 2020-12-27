# Guía de Solución

1. Instalar las siguientes dependencias: <code>npm install --save-dev css-loader ts-loader typescript</code> además de crear el archivo tsconfig.json siguiendo la siguiente guía: [ts-loader]([TAREA.md](https://github.com/TypeStrong/ts-loader))
2. npm run build:laboratorio-4:dev
3. npm run build:laboratorio-4:prod
4. ```javascript
    "scripts": {
        "build:laboratorio-4:dev": "webpack --config ./laboratorios/laboratorio-4/webpack.dev.js",
        "build:laboratorio-4:prod": "webpack --config ./laboratorios/laboratorio-4/webpack.prod.js"
    }
  ```
5. Mientras que el archivo .ts utilizó const (de EcmaScript) y :string (de TypeScript) el archivo generado por el loader utilizó var y utilizó sólo código vanilla de Javascript.