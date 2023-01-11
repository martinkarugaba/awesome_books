import Book from './book.js';

const book = document.getElementsByClassName('books')[0];
let dp = '';

const showBooks = () => {
   const books = display.getBooks();
  books.forEach((book, i) => {
    dp += `
        <div class="allbooks">
          <p>"${book.title}" by ${book.author}</p>
          <button class="removeBtn" onclick="display.removeBook(${i})">Remove</button>
        </div>`;
  });
}

class display {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook() {
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    if (titleInput !== '' && authorInput !== '') {
      const newBook = new Book(titleInput, authorInput);
      const books = display.getBooks();
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      this.displayBooks();
    }
  }

  static displayBooks() {
   
    showBooks();
    book.innerHTML = dp;
  }

  static removeBook(id) {
    const books = display.getBooks();
    const bookIndex = books.findIndex((item, i) => i === id);
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    this.displayBooks();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  display.displayBooks();

  //const removeBtns = document.querySelectorAll('.removeBtn');
  //console.log(removeBtns);

  //removeBtns.forEach((btn, i) => {
  //  btn.addEventListener('click', () => {
  //    display.removeBook(i);
  //  });
  //});
});

// add a book
const form = document.querySelector('.form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  display.addBook();
  form.reset();
});

// onclick="display.removeBook(${i})
// remove a book
