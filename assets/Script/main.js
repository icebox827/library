import Book, {storageMyLibrary, remove, reloadPage} from './function.js'
const btn = document.getElementById('submit_btn');


btn.addEventListener('click', () => {
  addBookToLibrary()
})

function addBookToLibrary(){
  let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

  if (myLibrary === null) {
    myLibrary = [];
  }

  const form = document.getElementById('input_book');
  const bookTitle = form.elements[0].value;
  const bookAuthor = form.elements[1].value;
  const bookPages = form.elements[2].value;
  const bookRead = form.elements[3].value;
  const book3 = new Book(bookAuthor, bookTitle, bookPages, bookRead);

  myLibrary.push(book3);

  storageMyLibrary(myLibrary);
  reloadPage();
};

window.addEventListener('load', () => {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].author !== '') {
      const card = document.createElement('card');
      const author = document.createElement('div');
      const title = document.createElement('div');
      const pages = document.createElement('div');
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
});
