
function Book(title, author, pages, read = false){
  this.author=author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}



function createNewBook(){
  
  let myLibrary = [{"author":"Gustavo","title":"My book","pages":"994","read":false}, 
  {"author":"Denis","title":"His book","pages":"123","read":false}]
  
  let form = document.getElementById('input_book');
  let bookAuthor = form.elements[0].value;
  let bookTitle = form.elements[1].value;
  let bookPages = form.elements[2].value;

  const book = new Book(bookAuthor, bookTitle, bookPages)

  myLibrary.push(book)
  console.log(JSON.stringify(myLibrary))
 text = document.getElementById("storage")
 text.innerHTML = JSON.stringify(myLibrary)
 document.body.appendChild(text)
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



