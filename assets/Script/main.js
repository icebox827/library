let myLibrary=[];

function Book(title, author, pages, read =){
  this.author=author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(myLibrary){
  let bookName = prompt ("Type book name") 
  let bookTitle = prompt("Type book title")
  let bookPages = prompt ("number of pages")
  let bookRead = prompt ("its reade 1 for true")
  if (bookRead=== 1){
    read = true
  } else {
    read = false
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