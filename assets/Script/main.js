let myLibrary = [{"author":"Gustavo","title":"My book","pages":"994","read":false}, 
{"author":"Denis","title":"His book","pages":"123","read":false}]

function Book(title, author, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}



function createNewBook(){
  
  let myLibrary=[]
  const book1 = new Book("My book","Gustavo", 994);
  const book2 = new Book("His book","Denis", 123);
     myLibrary.push(book1);
     myLibrary.push(book2);
  let form = document.getElementById('input_book');
  let bookAuthor = form.elements[1].value;
  let bookTitle = form.elements[0].value;
  let bookPages = form.elements[2].value;

  const book3 = new Book(bookAuthor, bookTitle, bookPages)

  myLibrary.push(book3)
  console.log(JSON.stringify(myLibrary))
  text = document.createElement("p")
  // text.setAttribute("id", "storage")
  // text.innerHTML = JSON.stringify(myLibrary)
  document.body.appendChild(text)
  return myLibrary
}


function displayBook() {
  let myLibrary = createNewBook()
  console.log(myLibrary)
  for(i = 0; i < myLibrary.length; i++) {
    
    const author = document.getElementById("author");
    const title = document.getElementById("title");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    
    author.innerHTML = myLibrary[i].author;
    title.innerHTML = myLibrary[i].title;
    pages.innerHTML = myLibrary[i].pages;
    read.innerHTML = myLibrary[i].read;
    

    
    // image.src = "./assets/img/library_of_alexandria.jpeg"
    // image.setAttribute("alt", "Image from assets")
  }
}

function changeStatus(book){
  myLibrary[book].read !== false ? myLibrary[book].read == true : myLibrary[book].read == false
}
