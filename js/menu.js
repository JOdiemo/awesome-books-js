const link = document.querySelectorAll('.nav-link');
const list = document.getElementById('books-list');
const add = document.getElementById('add-book-container');
const contact = document.getElementById('contact');

link[0].addEventListener('click', () => {
  list.classList.remove('d-none');
  add.classList.add('d-none');
  contact.classList.add('d-none');
});


link[1].addEventListener('click', () => {
  list.classList.add('d-none');
  add.classList.remove('d-none');
  contact.classList.add('d-none');
});

link[2].addEventListener('click', () => {
  list.classList.add('d-none');
  add.classList.add('d-none');
  contact.classList.remove('d-none');
});

const p = new Date();
document.getElementById('render-date').innerHTML = p;
