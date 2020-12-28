# Guía de Solución

1. Instalar las siguientes dependencias: <code>npm install --save-dev css-loader ts-loader typescript</code> además de tener que instanciar los plugins en los archivos de configuración.
2. npm run build:laboratorio-5:dev
3. npm run build:laboratorio-5:prod
4. ```javascript
    "scripts": {
        "build:laboratorio-5:dev": "webpack --config ./laboratorios/laboratorio-5/webpack.dev.js",
        "build:laboratorio-5:prod": "webpack --config ./laboratorios/laboratorio-5/webpack.prod.js"
    }
  ```