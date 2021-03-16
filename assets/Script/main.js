let myLibrary=[];

function Book(title, author, pages, read = false){
  this.author=author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(myLibrary){
  let form = document.getElementById('input_book');
   form.addEventListener('submit', (event) => {
  let bookName = form.elements[0];
  let bookTitle = form.elements[1];
  let bookPages = form.elements[2];
  let bookRead = form.elements[3];

 })

  if (bookRead !== 'No'){
    read = true
  } 

  book = new Book(bookName, bookTitle, bookPages, read)
  myLibrary.push(book)
  return myLibrary
}

function displayBook(myLibrary) {
  for (let i = 0; i < myLibrary.length; i++) {
    // console.log(myLibrary[i])  
    card.id = bookAuthor
    card.text = bookTitle
    card.body = bookPages
    card.text = bookReads
  }
}

library = addBookToLibrary(myLibrary)
show = displayBook(myLibrary)