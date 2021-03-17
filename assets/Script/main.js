let myLibrary = [{"author":"Gustavo","title":"My book","pages":"994","read":false}, 
{"author":"Denis","title":"His book","pages":"123","read":false}]

function Book(title, author, pages, read = false) {
  this.author = author;
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
  // console.log(JSON.stringify(myLibrary))
  // text = document.createElement("p")
  // text.setAttribute("id", "storage")
  // text.innerHTML = JSON.stringify(myLibrary)
  // document.body.appendChild(text)
}

function displayBook(myLibrary) {
  document.getElementById("card-container").innerHTML = "";

	for(let i = 0; i < myLibrary.length; i++) {
    let card = document.createElement("div");
    let author = document.createElement("div");
    let title = document.createElement("div");
    let pages = document.createElement("div");
    card.className = "card"
		author.className = "author";
    title.className = "title";
    pages.className = "pages";

    card.innerHTML = myLibrary[i].Value;
		author.innerHTML = myLibrary[i].Value;
    title.innerHTML = myLibrary[i].Value;
    pages.innerHTML = myLibrary[i].Value;
		card.appendChild(author);
		card.appendChild(title);
    card.appendChild(pages);

		document.getElementById("myLibrary").appendChild(card);
	}
}

function changeStatus(book){
  myLibrary[book].read !== false ? myLibrary[book].read == true : myLibrary[book].read == false
}
