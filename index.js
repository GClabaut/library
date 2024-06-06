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

const list = document.querySelector('.book-list');

const ul = document.createElement('ul');
ul.setAttribute('class', 'list');

function removeBook(book) {
  book.parentElement.remove();
}

function updateList () {
  ul.textContent = '';
  myLibrary.forEach((item) => {
    const book = document.createElement('li');
    book.setAttribute('class', 'book');

    const name = document.createElement('p');
    name.innerText = `${item.title}`;

    const remove = document.createElement('button');
    remove.setAttribute('class', 'rm-book')
    remove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>`

    book.append(name, remove);

    ul.append(book);
    list.append(ul);
  });

  document.querySelectorAll('.rm-book').forEach((book) => {
    book.addEventListener('click', () => {
      removeBook(book);
    });
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