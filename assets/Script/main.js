const myLibrary = [];

class Book {
  constructor (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }

  setAuthor(author) {
    this.author = author;
  }

  setAuthor(title) {
    this.title = title;
  }

  setAuthor(pages) {
    this.pages = pages;
  }

  setAuthor(read) {
    this.read = read;
  }
}

const addBook = (book) => {
  const author = document.getElementById('author').value
  const title = document.getElementById('title').value
  const pages = document.getElementById('pages').value
  const read = (function() {
    if (document.getElementById('read').onselect) return document.getElementById('read').value;
    return document.getElementById('read').value
  }());

  const book1 = new Book(author, title, pages, read);
  myLibrary.push(book)
  document.getElementById('form').reset();
  displayBook(book);
}

const displayBook = (book) => {
  
}