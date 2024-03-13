Express con Typescript

.1: se ejecuta npm init -y
.2: npm i typescript -D
.3: añadir script en package:     "tsc": "tsc", => transforma ficheros de ts a js
.4: ejecutar npm run tsc -- --init
.5: los dependencias de tipo (@types) tienen que ser de desarrollo (-D)
.6: "(_req, res)"   TS tiene una excepcion que al poner el parametro con el guion bajo hace que lo ignore (_)
.7: Ejecutar npm run tsc => ejecuta el script del punto 3 y crea la carpeta builñ
.8: crear otro script en el package => "start": "node build/index.js",
    => al ejectur npm run se ven todos los script y se puede ver que que hace cada uno
.9: Ejecutar ts-node-dev como dependencia de desarrollo. Es una mezcla entre ts-node, que hace la conversion de ts, de este a js y de js a node
10. Crear otro script  "dev": "ts-node-dev src/index.js", =>  esta independencia compila y ejecuta y está a la escucha de los cambios
11. en el tsconfig agregar lo siguiente en Completeness: "resolveJsonModule": true, para que se puedan exportar los archivos json 
12. al crear el archivo types.d.ts en la carpeta SRC => se tienen todos los tipos del paquete
13. si se va a usar un extends es mejor que sea como interface pero si se va a quedar fijo es mejor usar type
14. instalar el paqueta ts-standard -D y crear otro otro script:     "lint": "ts-standard",
15. Agregar la siguiente confi debajo de "dependecies":
          "eslintConfig": {
    "parserOptions": {
      "project": "/tsconfig.json"
    },
    "extends": [
      "./node_modules/ts-standard/eslintrc.json"
    ]
  }
16.Para usar eslint y que no traiga problemas en los archivos agregar tambien al "EslintConfig": 
              "rules": {
      "@typescript-eslint/quotes": [
        "error",
        "double"
      ]
    }
      e instalar el siguiente paquete: @typescript-eslint/eslint-plugin@latest --save-dev --force
