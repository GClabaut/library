const myLibrary = [];

function Book(title, author, page, reading) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.reading = reading;
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const book1 = new Book('Flowers for Algernon', 'Daniel Keyes', '311', 'true');
addBookToLibrary(book1);
console.log(myLibrary);