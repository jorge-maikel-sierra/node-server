const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const port = 8080;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  let filePath = "";

  if (pathname === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (pathname === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (pathname === "/contact-me") {
    filePath = path.join(__dirname, "contact-me.html");
  } else {
    filePath = path.join(__dirname, "404.html");
    res.statusCode = 404;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    res.writeHead(res.statusCode || 200, {
      "Content-Type": "text/html",
    });

    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
