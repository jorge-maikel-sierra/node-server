// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  { id: 1, title: "The Art of Node", authorId: 1 },
  { id: 2, title: "Express in Action", authorId: 1 },
  { id: 3, title: "JavaScript: The Good Parts", authorId: 2 },
  { id: 4, title: "Learning HTTP", authorId: 3 },
  { id: 5, title: "Async Patterns", authorId: 3 },
];

async function getAllAuthors() {
  return authors;
}

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

async function getAllBooks() {
  return books;
}

async function getBookById(bookId) {
  return books.find((book) => book.id === bookId);
}

async function getBooksByAuthorId(authorId) {
  return books.filter((book) => book.authorId === authorId);
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  getAllBooks,
  getBookById,
  getBooksByAuthorId,
};
