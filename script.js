/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const addBtn = document.getElementsByClassName('add-btn')[0];
const bookSection = document.getElementsByClassName('books')[0];
let books = [];

addBtn.addEventListener('click', (e) => {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  addBooks(title, author);
  display();
});

const addBooks = (Title, Author) => {
  if (Title !== '' && Author !== '') {
    const obj = {
      title: Title,
      author: Author,
    };
    books.push(obj);
    localStorage.setItem('Books', JSON.stringify(books));
  }
};

function display() {
  if (localStorage.getItem('Books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('Books'));
  }

  // eslint-disable-next-line quotes
  let display = ``;
  books.forEach((section, i) => {
    display += `
    <div>
    <p>${section.title}</p>
    <p>${section.author}</p>
    <button onclick="remove(${i})">Remove</button>
    <hr>
    </div>
    `;
  });
  bookSection.innerHTML = display;
}

window.addEventListener('DOMContentLoaded', () => {
  display();
});

const remove = (id) => {
  if (localStorage.getItem('Books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('Books'));
  }
  const BookIndex = books.findIndex((item, i) => i === id);
  books.splice(BookIndex, 1);
  localStorage.setItem('Books', JSON.stringify(books));
  display();
};