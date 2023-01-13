// selecting buttons
const listbtn = document.getElementById('link-list');
const addbtn = document.getElementById('link-add');
const contactbtn = document.getElementById('link-contact');
// slecting containers
const bc = document.getElementById('list');
const ac = document.getElementById('add-book');
const cc = document.getElementById('contact');

// adding event listeners
addbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'flex';
  cc.style.display = 'none';
});

listbtn.addEventListener('click', () => {
  bc.style.display = 'flex';
  ac.style.display = 'none';
  cc.style.display = 'none';
});

contactbtn.addEventListener('click', () => {
  bc.style.display = 'none';
  ac.style.display = 'none';
  cc.style.display = 'flex';
});