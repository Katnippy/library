const library = [];

const books = document.querySelector('.books');
function clearLibraryOnPage() {
  while (books.firstChild) {
    books.removeChild(books.lastChild);
  }
}

function addReadButtonToEntry(book, entry) {
  const readButton = document.createElement('button');
  readButton.classList.add('read');
  readButton.textContent = 'Read';
  readButton.addEventListener('click', () => {
    book.read = true;
    entry.classList.remove('not-read-book');
    entry.classList.add('read-book');
  });
  entry.appendChild(readButton);
}

function addDeleteButtonToEntry(index, entry) {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    library.splice(index, 1);
    books.removeChild(entry);
  });
  entry.appendChild(deleteButton);
}


function printLibraryToPage() {
    clearLibraryOnPage();

    for (book of library) {
      entry = document.createElement('div');
      entry.textContent = `${book.title} by ${book.author}, ${book.pages} 
      pages`;
      if (book.read === false) {
        entry.classList.add('not-read-book');
      } else {
        entry.classList.add('read-book');
      }
      addReadButtonToEntry(book, entry);
      addDeleteButtonToEntry(library.indexOf(book), entry);

      books.appendChild(entry);
    }
  }

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages) {
  let book = new Book(title, author, pages, read = false);
  library.push(book);

  printLibraryToPage();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  addBookToLibrary(title, author, pages);
});

