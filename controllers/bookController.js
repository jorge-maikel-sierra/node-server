// controllers/bookController.js

const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAllBooks(req, res) {
  const books = await db.getAllBooks();
  res.json(books);
}

async function getBookById(req, res) {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  res.json(book);
}

module.exports = { getAllBooks, getBookById };
