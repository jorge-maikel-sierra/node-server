// routes/authorRouter.js

const { Router } = require("express");
const { getAllAuthors, getAuthorById, getBooksByAuthor } = require("../controllers/authorController");

const authorRouter = Router();

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:authorId", getAuthorById);
authorRouter.get("/:authorId/books", getBooksByAuthor);

module.exports = authorRouter;
