
export function storageMyLibrary(myLibrary) {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

export function remove(id) {
  id = id.slice(6);
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary.splice(id, 1);
  storageMyLibrary(myLibrary);
}

export default function Book(title, author, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

export function reloadPage() {
  window.location.reload();
}
