let myLibrary=[];

function Book(title, author, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
//   let form = document.getElementById('input_book');
//    form.addEventListener('submit', (event) => {
//   let bookName = form.elements[0];
//   let bookTitle = form.elements[1];
//   let bookPages = form.elements[2];
//   let bookRead = form.elements[3];

//  })

//   if (bookRead !== 'No'){
//     read = true
//   } 

  const newbook = new Book(author, title, pages, read)
  myLibrary.push(newbook)
}

function displayBook(book) {
  document.getElementById("bookShelves").innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let cardElement = document.createElement("div");
    let imageContainer = document.createElement("div");
    let infoContainer = document.createElement("div");
    let image = document.createElement("img");
    let author = document.createElement("h3");
		let title = document.createElement("h4");
		let pages = document.createElement("h5");
    let read = document.createElement("h5");
    let btnRead = document.createElement("button");
    let btnDelete = document.createElement("button");

		cardElement.className = "card";
    imageContainer.className = "img-card";
    infoContainer.className = "info-card";
    image.className = "image";
    author.className = "author";
		title.className = "title";
		pages.className = "pages";
    read.className = "read";
    btnRead.className = "btn"
    btnDelete.className = "btn"

    image.src = "./assets/img/library_of_alexandria.jpeg"
    image.setAttribute("alt", "Image from assets")
		 
  }
}

function changeStatus(book){
  myLibrary[book].read !== false ? myLibrary[book].read == true : myLibrary[book].read == false
}