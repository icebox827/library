// let myLibrary = [{"author":"Gustavo","title":"My book","pages":"994","read":false},
// {"author":"Denis","title":"His book","pages":"123","read":false}]

function Book (title, author, pages, read = 'Not read') {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

function createNewBook () {
  let myLibrary = []
  const book1 = new Book('My book', 'Gustavo', 994)
  const book2 = new Book('His book', 'Denis', 123)
  myLibrary.push(book1)
  myLibrary.push(book2)
  let form = document.getElementById('input_book')
  let bookAuthor = form.elements[1].value
  let bookTitle = form.elements[0].value
  let bookPages = form.elements[2].value

  const book3 = new Book(bookAuthor, bookTitle, bookPages)

  myLibrary.push(book3)
  console.log(JSON.stringify(myLibrary))
  text = document.createElement('p')
  // text.setAttribute("id", "storage")
  // text.innerHTML = JSON.stringify(myLibrary)
  document.body.appendChild(text)
  return myLibrary
}

function clearInputField () {
  document.getElementById('author').value = ''
  document.getElementById('title').value = ''
  document.getElementById('pages').value = ''
}

function displayBook (num) {
  let myLibrary = createNewBook()
  let i = num
  console.log(i)
  for (i; i < myLibrary.length; i++) {
    if (myLibrary[i].author === '') {
    } else {
      const card = document.createElement('card')
      const author = document.createElement('div')
      const title = document.createElement('div')
      const pages = document.createElement('div')
      const read = document.createElement('button')
      const removeButton = document.createElement('button')

      read.onclick = function toggleContent () {
        const read = document.getElementById(this.id)
        console.log(this.id)
        if (read.innerHTML === 'Not read') {
          alert('You have just read that book')
          read.innerHTML = 'read!'
        } else {
          alert('You have not read that book')
          read.innerHTML = 'Not read'
        }
      }

      removeButton.onclick = function () {
        alert('You are removing a book form your library')
        remove(this.id)
        alert('Button clicked, id ' + this.id + ', text' + this.innerHTML)
      }

      card.className = 'card'
      author.className = 'card-author'
      title.className = 'card-title'
      pages.className = 'card-pages'
      read.className = 'card-read'
      read.id = `readButton${i}`
      removeButton.id = `remove${i}`

      card.setAttribute('id', `card${i} `)

      document.getElementById('card-container').appendChild(card)
      document.getElementById(`card${i} `).appendChild(author)
      document.getElementById(`card${i} `).appendChild(title)
      document.getElementById(`card${i} `).appendChild(pages)
      document.getElementById(`card${i} `).appendChild(read)
      document.getElementById(`card${i} `).appendChild(removeButton)

      author.innerHTML = myLibrary[i].author
      title.innerHTML = myLibrary[i].title
      pages.innerHTML = myLibrary[i].pages
      read.innerHTML = myLibrary[i].read

      removeButton.innerHTML = 'Remove'
    }
  }
}

function remove (id) {
  let myLibrary = createNewBook()
  id = id.slice(6)

  myLibrary.splice(id, 1)
  console.log(myLibrary)

  alert(myLibrary.length)
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].author === '') {
    } else {
      const card = document.createElement('card')
      const author = document.createElement('div')
      const title = document.createElement('div')
      const pages = document.createElement('div')
      const read = document.createElement('button')
      const removeButton = document.createElement('button')
      removeButton.onclick = function () {
        alert('You are removing a book form your library')
        remove(this.id)
        alert('Button clicked, id ' + this.id + ', text' + this.innerHTML)
      }

      card.className = 'card'
      author.className = 'card-author'
      title.className = 'card-title'
      pages.className = 'card-pages'
      read.className = 'card-read'
      removeButton.id = `remove${i}`

      card.setAttribute('id', `card${i} `)

      document.getElementById('card-container').appendChild(card)
      document.getElementById(`card${i} `).appendChild(author)
      document.getElementById(`card${i} `).appendChild(title)
      document.getElementById(`card${i} `).appendChild(pages)
      document.getElementById(`card${i} `).appendChild(read)
      document.getElementById(`card${i} `).appendChild(removeButton)

      author.innerHTML = myLibrary[i].author
      title.innerHTML = myLibrary[i].title
      pages.innerHTML = myLibrary[i].pages
      read.innerHTML = myLibrary[i].read

      removeButton.innerHTML = 'Remove'
    }
  }
}
