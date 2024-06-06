const myLibrary = [];

function Book(title, author, page, reading) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.reading = reading;
}

function addBookToLibrary(...book) {
  myLibrary.push(...book)
}

const book1 = new Book('Flowers for Algernon', 'Daniel Keyes', '311', 'true');
const book2 = new Book('The Silmarillion', 'John Ronald Reuel Tolkien', '365', 'true');
addBookToLibrary(book1, book2);
console.log(myLibrary);

