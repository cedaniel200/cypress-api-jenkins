# cypress-api-jenkins
Proyecto de Cypress básico con ejemplo de los comandos Intercep y Request. usando CI/CD con Jenkins 

# Prerequisitos 
* Instalar [Node](https://nodejs.org/en/download) v18.15.0 o superior
* Descargar el repositorio [JSON Server](https://github.com/typicode/json-server)
* En la base del proyecto JSON Server creamos un archivo **db.json**, por ejemplo:
```
{
  "posts": [
    { "id": 1, "title": "Aprendiendo Cypress - Módulo 1", "author": "Cesar" },
    { "id": 2, "title": "Aprendiendo Cypress - Módulo 2", "author": "Cesar" }
  ],
  "comments": [
    { "id": 1, "body": "Muy buen Módulo", "postId": 1 }
  ],
  "profile": { "name": "Cesar" }
}
```
* Instalamos las dependencias del proyecto JSON Server:
```
npm install
```
*  Ejecutamos el proyecto JSON Server:
```
node run start
```

Una vez el servidor este corriendo puedes acceder a JSON Server en: [http://localhost:3000/](http://localhost:3000/).

Para más información de JSON Server ver su [documentación](https://github.com/typicode/json-server#table-of-contents).

# Ejecutar proyecto Cypress

Ahora nos ubicamos en el proyecto de cypress y ejecutamos:
* Modo run
```
npx cypress run
```
* Modo open
```
npx cypress open --e2e
```