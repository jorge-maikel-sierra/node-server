# node-server

Servidor HTTP minimalista construido únicamente con módulos core de Node.js (`http`, `fs`, `url`, `path`). Sin frameworks, sin dependencias externas.

## Rutas disponibles

| Ruta           | Archivo            | Estado |
|----------------|--------------------|--------|
| `/`            | `index.html`       | 200    |
| `/about`       | `about.html`       | 200    |
| `/contact-me`  | `contact-me.html`  | 200    |
| _cualquier otra_ | `404.html`       | 404    |

## Ejecutar el servidor

```bash
node index.js
```

El servidor se inicia en [http://localhost:8080](http://localhost:8080).

## Agregar una nueva página

1. Crear un archivo `.html` en la raíz del proyecto (por ejemplo, `services.html`).
2. Agregar una rama `else if` en `index.js` que asocie la ruta con el nuevo archivo.

## Estructura del proyecto

```
index.js          # Servidor HTTP y enrutamiento
index.html        # Página principal
about.html        # Página "About"
contact-me.html   # Página "Contact Me"
404.html          # Página de error 404
```
