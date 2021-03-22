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
  for(i = 0; i < myLibrary.length; i += 1){
    const card = document.createElement('card');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const pages = document.createElement('div');
    const read = document.createElement('button');
    const removeButton = document.createElement('button');
  }
}