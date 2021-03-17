function Book (title, author, pages, read = 'Not read') {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}

function storageMyLibrary (myLibrary) {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function reload () {
  reload = location.reload()
}

function createNewBook () {
  let myLibrary = JSON.parse(localStorage.getItem('myLibrary'))

  if (myLibrary === null) {
    myLibrary = []
  }

  let form = document.getElementById('input_book')
  let bookAuthor = form.elements[1].value
  let bookTitle = form.elements[0].value
  let bookPages = form.elements[2].value

  const book3 = new Book(bookAuthor, bookTitle, bookPages)

  myLibrary.push(book3)

  storageMyLibrary(myLibrary)
}

function clearInputField () {
  document.getElementById('author').value = ''
  document.getElementById('title').value = ''
  document.getElementById('pages').value = ''
}

function displayBook () {
  let myLibrary = JSON.parse(localStorage.getItem('myLibrary'))

  console.log(myLibrary)
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(i)
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
        id = this.id.slice(10)
        let read_status = myLibrary[id].read
        if (read_status === 'Not read') {
          alert('You have just read that book')
          myLibrary[id].read = 'read!'
        } else {
          alert('You have not read that book')
          myLibrary[id].read = 'Not read'
        }
        storageMyLibrary(myLibrary)
        reload()
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
  id = id.slice(6)
  let myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
  myLibrary.splice(id, 1)
  // console.log(myLibrary)
  storageMyLibrary(myLibrary)
  reload()
}
