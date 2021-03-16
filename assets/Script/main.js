let myLibrary=[];

function Book(title, author, pages, read){
  this.author=author;
  this.title = title;
  this.pages = pages;
  this.read=read;
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
}


console.log(addBookToLibrary(myLibrary));