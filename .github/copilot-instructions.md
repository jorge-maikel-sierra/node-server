# Copilot Instructions — node-server

## Architecture Overview

This is a minimal, zero-dependency HTTP server built with **Node.js core modules only** (`http`, `fs`, `url`, `path`). There is no framework (no Express, no Fastify), no `package.json`, and no npm dependencies. Keep it that way unless explicitly told otherwise.

The single entry point is `index.js`, which:

1. Creates an `http.createServer` with manual route matching against `pathname`.
2. Maps each route to a static `.html` file in the project root via `fs.readFile`.
3. Falls back to `404.html` with a 404 status for any unrecognized route.

## Route ↔ File Mapping (pattern to follow)

| Route            | File               | Status |
|------------------|--------------------|--------|
| `/`              | `index.html`       | 200    |
| `/about`         | `about.html`       | 200    |
| `/contact-me`    | `contact-me.html`  | 200    |
| _anything else_  | `404.html`         | 404    |

When adding a new page, you must:
1. Create a new `.html` file in the project root (e.g., `services.html`).
2. Add an `else if` branch in the route chain inside `index.js` mapping the pathname to the new file.

## Running the Server

```bash
node index.js
# → Servidor corriendo en http://localhost:8080
```

The server listens on port **8080**. There are no build steps, no dev scripts, and no hot-reload.

## Key Conventions

- **Language**: Server log messages are in Spanish (`console.log` output). Keep this convention.
- **No dependencies**: Do not introduce npm packages or a `package.json` unless the user explicitly requests it.
- **HTML files are plain**: Each page is a standalone, minimal HTML document with no shared layout, CSS, or JS assets. There is no templating engine.
- **Routing is manual**: Routes are explicit `if/else if` branches, not dynamic file-serving or a router library.
- **Content-Type is always `text/html`**: The server only serves HTML. If static assets (CSS/JS/images) are added, the `Content-Type` logic in `index.js` must be extended.
- **Error handling**: A `500 Internal Server Error` plain-text response is returned if `fs.readFile` fails.

## Gotchas

- `url.parse` is used (legacy Node API). If migrating, replace with `new URL(req.url, 'http://localhost')`.
- `res.statusCode` is set before `readFile` for 404; for 200 it relies on the default, checked with `res.statusCode || 200` in `writeHead`.
