# Guía de Solución

1. npm run build:laboratorio-3:dev
2. npm run build:laboratorio-3:prod
3. ```javascript
    "scripts": {
        "build:laboratorio-3:dev": "webpack --config ./laboratorios/laboratorio-3/webpack.dev.js",
        "build:laboratorio-3:prod": "webpack --config ./laboratorios/laboratorio-3/webpack.prod.js"
    }
  ```