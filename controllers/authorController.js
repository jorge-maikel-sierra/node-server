// controllers/authorController.js

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAllAuthors(req, res) {
  const authors = await db.getAllAuthors();
  res.json(authors);
}

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.json(author);
}

async function getBooksByAuthor(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  const books = await db.getBooksByAuthorId(Number(authorId));
  res.json(books);
}

module.exports = { getAllAuthors, getAuthorById, getBooksByAuthor };
