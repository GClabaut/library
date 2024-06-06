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
  ul.textContent = '';
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

const dialog = document.querySelector('dialog');

const newBook = document.querySelector('.add-book');
newBook.addEventListener('click', () => {
  dialog.showModal();
});

document.querySelector('.close').addEventListener('click', () => {
  dialog.close();
})

document.querySelector('.create-book').addEventListener('click', (e) => {
  e.preventDefault;
  const newBook = {
    title: dialog.children[1].lastElementChild.value,
    author: dialog.children[2].lastElementChild.value,
    page: dialog.children[3].lastElementChild.value,
    reading: `${reading.checked}`,
  }
  addBookToLibrary(newBook);
  dialog.close();
  updateList();
})