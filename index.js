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

function readStatus (item, book) {
  if (item.reading === 'true') {
    book.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19M14 16.35C14.96 16 16.12 15.83 17.5 15.83C18.54 15.83 19.38 15.91 20 16.07V14.57C19.13 14.41 18.29 14.33 17.5 14.33C16.16 14.33 15 14.5 14 14.76V16.35M14 13.69C14.96 13.34 16.12 13.16 17.5 13.16C18.54 13.16 19.38 13.24 20 13.4V11.9C19.13 11.74 18.29 11.67 17.5 11.67C16.22 11.67 15.05 11.82 14 12.12V13.69M14 11C14.96 10.67 16.12 10.5 17.5 10.5C18.41 10.5 19.26 10.59 20 10.78V9.23C19.13 9.08 18.29 9 17.5 9C16.18 9 15 9.15 14 9.46V11Z" /></svg>`
  } else {
    book.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H18M18,4H13V12L10.5,9.75L8,12V4H6V20H18V4Z" /></svg>`;
  }
}

function removeBook(book) {
  book.parentElement.parentElement.remove();
}

function updateList () {
  ul.textContent = '';
  myLibrary.forEach((item) => {
    const book = document.createElement('li');
    book.setAttribute('class', 'book');

    const name = document.createElement('p');
    name.innerText = `${item.title}`;

    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');

    const read = document.createElement('button');
    read.setAttribute('class', 'read-book');
    readStatus(item, read);

    const remove = document.createElement('button');
    remove.setAttribute('class', 'rm-book')
    remove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>`


    buttons.append(read, remove);
    book.append(name, buttons);

    ul.append(book);
    list.append(ul);
  });

  document.querySelectorAll('.rm-book').forEach((book) => {
    book.addEventListener('click', () => {
      removeBook(book);
    });
  });

  const newStatus = document.querySelectorAll('.read-book')
  for (let i = 0; i < newStatus.length; i++) {
    newStatus[i].addEventListener('click', () => {
      const trueFalse = (myLibrary[i].reading === 'true') ? 'false' : 'true';
      myLibrary[i].reading = trueFalse;
      readStatus(myLibrary[i], newStatus[i]);
    });
  };
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
  console.log(dialog)
  const newBook = {
    title: dialog.children[1].children[0].lastElementChild.value,
    author: dialog.children[1].children[1].lastElementChild.value,
    page: dialog.children[1].children[2].lastElementChild.value,
    reading: `${!reading.checked}`,
  }
  addBookToLibrary(newBook);
  dialog.close();
  updateList();
})