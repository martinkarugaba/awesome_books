// eslint-disable-next-line import/extensions
import Storage from './localStorage.js';
// eslint-disable-next-line import/extensions
import Book from './book.js';

const form = document.querySelector('.form');
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const booksContainer = document.querySelector('[data-list]');

let booksArr = Storage.getStorage();

class UI {
  static displayData() {
    const displayData = booksArr.map((item) => {
      const { id, title, author } = item;
      return `
        <li class="book">
          <p><strong>"${title}"</strong> by ${author}</p>
          <button class="remove" data-id=${id}>remove</button>
        </li>
      `;
    });
    booksContainer.innerHTML = displayData.join(' ');
  }

  static removeBook() {
    booksContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        // remove book from ui
        e.target.parentElement.remove();
      }
      // remove from array
      const btnId = e.target.dataset.id;
      UI.removeArrayBook(btnId);
    });
  }

  static removeArrayBook(id) {
    booksArr = booksArr.filter((item) => item.id !== +id);
    Storage.addToStorage(booksArr);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  UI.displayData();
  UI.removeBook();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.random() * 1000000;
  const book = new Book(id, bookTitle.value, bookAuthor.value);
  booksArr = [...booksArr, book];
  // dispay data
  UI.displayData();
  // cear form
  form.reset();
  // remove book
  UI.removeBook();
  // add book to local storage
  Storage.addToStorage(booksArr);
});
