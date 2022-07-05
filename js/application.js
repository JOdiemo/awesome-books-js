const form = document.querySelector('.form');
const library = document.querySelector('.library');
const Author = document.querySelector('.author');
const title = document.querySelector('.title');

let list = [];
function libraryBooks(object) {
  return `<div class="${object.author}">
    <h1>${object.book}</h1>
    <p>${object.author}</p>
    <hr>
    <button class="remove">
    remove
    </button>
    </div><br>`;
}

function add() {
  if (Author.value !== '' && title.value !== '') {
    const currentBook = [];
    currentBook.push(
      {
        author: Author.value,
        book: title.value,
      },
    );

    list.push(
      {
        author: Author.value,
        book: title.value,
      },
    );
    if (list.length > 0) {
      currentBook.forEach((book) => library.insertAdjacentHTML('beforeend', libraryBooks(book)));
    }
  }
  Author.value = '';
  title.value = '';
  localStorage.setItem('books', JSON.stringify(list));
}

function remove() {
  if (list.length > 0) {
    const removebtn = document.querySelectorAll('.remove');
    removebtn.forEach((element) => element.addEventListener('click', () => {
      const parentNodeClass = element.parentNode.className;
      element.parentNode.remove();
      list = list.filter((x) => x.author !== parentNodeClass);
      localStorage.setItem('books', JSON.stringify(list));
    }));
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  add();
  remove();
});