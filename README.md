# Cypress + JSON Server + Jenkins — Demo API

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Cypress](https://img.shields.io/badge/Cypress-16.2.1-green)
![JSON Server](https://img.shields.io/badge/JSON%20Server-0.17.4-blue)
![Node.js](https://img.shields.io/badge/Node.js-22%20%7C%2024%20%7C%2026-brightgreen)
![Jenkins](https://img.shields.io/badge/Jenkins-CI-red)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Proyecto de ejemplo para mostrar pruebas de API con Cypress: `cy.intercept` para mockear
respuestas y `cy.request` para operaciones GET, POST, PATCH y DELETE. La API es local con
JSON Server y Jenkins ejecuta la suite completa.

## Qué incluye

- **5 pruebas**: una de `cy.intercept` y cuatro de `cy.request`.
- **JSON Server local** con datos de ejemplo; sin APIs externas.
- **Base de datos reproducible**: `db.seed.json` se copia a `db.json` antes de cada ejecución.
- **Jenkinsfile** con etapas de instalación y pruebas.
- **Cypress 16** con configuración en `cypress.config.js`.

## Requisitos

- **Node.js 22, 24 o 26** (los que soporta Cypress 16).
- **npm**.
- **Jenkins** solo si se quiere ejecutar el pipeline.

## Cómo se ejecuta

```sh
npm ci
npm test
```

`npm test` copia `db.seed.json` a `db.json`, levanta JSON Server en el puerto 3000 y ejecuta
Cypress. Al terminar, detiene el servidor.

Para trabajar de forma interactiva:

```sh
npm run api
npm run cy:open
```

## Estructura

```text
cypress
├── e2e
│   ├── intercept.cy.js          # mock de GET /posts
│   └── request.cy.js            # GET, POST, PATCH y DELETE
├── fixtures
│   └── intercept/posts.json     # respuesta simulada
└── support

db.seed.json                     # datos iniciales de JSON Server
Jenkinsfile                      # pipeline de Jenkins
cypress.config.js                # baseUrl y configuración de Cypress
```

## Qué demuestra

| Spec | Comando | Qué valida |
|---|---|---|
| `intercept.cy.js` | `cy.intercept` | La respuesta de `/posts` se reemplaza por un fixture |
| `request.cy.js` | `cy.request` | GET, POST, PATCH y DELETE contra JSON Server |

`cy.intercept` se usa para controlar lo que recibe el navegador; `cy.request` se usa para probar
la API directamente, sin pasar por la interfaz.

## Jenkins

El `Jenkinsfile` ejecuta:

```text
npm ci
npm test
```

Usa `bat` porque el agente original era Windows. En un agente Linux, cambia `bat` por `sh`.

## Ten en cuenta

- **`db.json` se genera** desde `db.seed.json` y está ignorado por git; las mutaciones de las
  pruebas no ensucian el repositorio.
- **No hay dependencias externas**: todo corre contra JSON Server en `localhost:3000`.
- **Cypress 16 requiere Node 22 o superior.**

## Licencia

[MIT](LICENSE) © Cesar Daniel
