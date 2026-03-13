const express = require("express");
const path = require("path");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");

const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact-me", text: "Contact Me" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links });
});

app.get("/contact-me", (req, res) => {
  res.render("contact-me", { links: links });
});

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.use((req, res) => {
  res.status(404).render("404", { links: links });
});

// Middleware de manejo de errores (debe tener 4 parámetros)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
