# Copilot Instructions — node-server

## Architecture Overview

Servidor HTTP construido con **Express.js** que sirve páginas HTML estáticas. El punto de entrada es `index.js`, que usa `app.get()` para cada ruta y `res.sendFile()` para enviar los archivos HTML desde la raíz del proyecto. Un middleware catch-all (`app.use`) maneja las rutas no reconocidas con `404.html`.

## Route ↔ File Mapping (pattern to follow)

| Route            | File               | Status |
|------------------|--------------------|--------|
| `/`              | `index.html`       | 200    |
| `/about`         | `about.html`       | 200    |
| `/contact-me`    | `contact-me.html`  | 200    |
| _anything else_  | `404.html`         | 404    |

When adding a new page:
1. Create a new `.html` file in the project root (e.g., `services.html`).
2. Add an `app.get()` route in `index.js` **before** the 404 catch-all middleware.

## Running the Server

```bash
npm start        # or: node index.js
# → Servidor corriendo en http://localhost:8080
```

The server listens on port **8080**.

## Deployment

The project is deployed on **Fly.io** (`node-server-jms.fly.dev`). Configuration lives in `fly.toml`. To redeploy:

```bash
fly deploy
```

The `Dockerfile` installs dependencies via `npm install --production` and runs `node index.js`.

## Key Conventions

- **Language**: Server log messages are in Spanish (`console.log` output). Keep this convention.
- **Express only**: Use `app.get()` + `res.sendFile()` for routes. Do not fall back to raw `http` or `fs.readFile` patterns.
- **HTML files are plain**: Each page is a standalone, minimal HTML document with no shared layout, CSS, or JS assets. There is no templating engine.
- **404 handling**: The catch-all `app.use()` at the bottom of `index.js` serves `404.html` with `res.status(404)`. New routes must be added **above** it.
- **Content-Type**: Express sets `Content-Type` automatically via `sendFile`. No manual header management needed.
