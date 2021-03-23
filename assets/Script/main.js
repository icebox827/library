const myLibrary = [];

class Book {
  constructor (author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

const addBook = (book) => {
  const form = document.getElementById('form').value
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const read = (function() {
    if (document.getElementById('read').onselect) return document.getElementById('read').value;
    return document.getElementById('read').value
  }());

  const newBook = new Book(author, title, pages, read);
  myLibrary.push(book);
  displayBook(book);
}

const displayBook = (book) => {
  for(i = 0; i < myLibrary.length; i += 1){
    if (myLibrary[i].author !== '') {
      const card = document.createElement('card');
      const author = form.elements[0].value;
      const title = form.elements[1].value;
      const pages = form.elements[2].value;
      const read = document.createElement('button');
      const removeButton = document.createElement('button');

      read.onclick = function toggleContent() {
        const id = this.id.slice(10);
        const readStatus = myLibrary[id].read;
        if (readStatus === 'Not read') {
          myLibrary[id].read = 'read!';
        } else {
          myLibrary[id].read = 'Not read';
        }
        storageMyLibrary(myLibrary);
        reloadPage();
      };

      removeButton.onclick = function toRemove() {
        remove(this.id);
        reloadPage();
      };

      card.className = 'card';
      author.className = 'card-author';
      title.className = 'card-title';
      pages.className = 'card-pages';
      read.className = 'card-read';
      read.id = `readButton${i}`;
      removeButton.id = `remove${i}`;

      card.setAttribute('id', `card${i} `);

      document.getElementById('card-container').appendChild(card);
      document.getElementById(`card${i} `).appendChild(author);
      document.getElementById(`card${i} `).appendChild(title);
      document.getElementById(`card${i} `).appendChild(pages);
      document.getElementById(`card${i} `).appendChild(read);
      document.getElementById(`card${i} `).appendChild(removeButton);

      author.innerHTML = myLibrary[i].author;
      title.innerHTML = myLibrary[i].title;
      pages.innerHTML = myLibrary[i].pages;
      read.innerHTML = myLibrary[i].read;
      removeButton.innerHTML = 'Remove';
    }
  }
}