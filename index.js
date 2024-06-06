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

const list = document.querySelector('.book-list');

const ul = document.createElement('ul');
ul.setAttribute('class', 'list');

function updateList () {
  myLibrary.forEach((item) => {
    const book = document.createElement('li');
    book.setAttribute('class', 'book');

    const name = document.createElement('p');
    name.innerText = `${item.title}`;

    book.append(name);

    ul.append(book);
    list.append(ul);
  });
};

updateList();

const newBook = document.querySelector('.add-book');
newBook.addEventListener('click', () => {
  console.log('create')
});