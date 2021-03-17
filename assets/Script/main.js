// let myLibrary = [{"author":"Gustavo","title":"My book","pages":"994","read":false}, 
// {"author":"Denis","title":"His book","pages":"123","read":false}]

function Book(title, author, pages, read = "Unread") {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function storageMyLibrary(myLibrary){
  alert(JSON.stringify(myLibrary))
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
}

function reload() {
  reload = location.reload();
}

function createNewBook(){
  let myLibrary = JSON.parse(localStorage.getItem("myLibrary"))
  
  if (myLibrary !== null){
    myLibrary = []
  }
  
  
  
  let form = document.getElementById('input_book');
  let bookAuthor = form.elements[1].value;
  let bookTitle = form.elements[0].value;
  let bookPages = form.elements[2].value;
  // if (bookAuthor === "" ){
      
  // } else {
  const book3 = new Book(bookAuthor, bookTitle, bookPages)
  console.log(myLibrary)
  myLibrary.push(book3)
  
  storageMyLibrary(myLibrary)
  alert(storageMyLibrary(JSON.stringify(myLibrary)))
}




function displayBook() {
  
  let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) 
  
  
  console.log(myLibrary) 
  for(let i=0; i < myLibrary.length; i++) {
     console.log(i)
    if (myLibrary[i].author === "" ){
      
    } else {

    const card = document.createElement("card");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");
    const removeButton = document.createElement('button')
    removeButton.onclick = function()
    {
      alert('You are removing a book form your library');
      remove(this.id)
      alert("Button clicked, id "+this.id+", text"+this.innerHTML);
       
    };
    

    card.className = "card"
    author.className = "card-author"
    title.className = "card-title"
    pages.className = "card-pages"
    read.className = "card-read"
    removeButton.id = `remove${i}`

    

    card.setAttribute("id", `card${i} `)

    document.getElementById("card-container").appendChild(card);
    document.getElementById(`card${i} `).appendChild(author);
    document.getElementById(`card${i} `).appendChild(title);
    document.getElementById(`card${i} `).appendChild(pages);
    document.getElementById(`card${i} `).appendChild(read);
    document.getElementById(`card${i} `).appendChild(removeButton);
   

    author.innerHTML = myLibrary[i].author;
    title.innerHTML = myLibrary[i].title;
    pages.innerHTML = myLibrary[i].pages;
    read.innerHTML = myLibrary[i].read;
   
    removeButton.innerHTML = "Remove"

    
    // image.src = "./assets/img/library_of_alexandria.jpeg"
    // image.setAttribute("alt", "Image from assets")
    }
  }
  }


function remove(id){
  let myLibrary = JSON.parse(localStorage.getItem("myLibrary"))
  id = id.slice(6)
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }
    }
  


function changeStatus(book){
  myLibrary[book].read !== "Unread" ? myLibrary[book].read == "Read" : myLibrary[book].read == false
  button.addEventListener ("click", function() {
    alert("did something");
  });
}

