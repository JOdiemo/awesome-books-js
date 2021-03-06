class ListOfBooks {
  constructor() {
    this.books = (localStorage.myBooks != null) ? JSON.parse(localStorage.myBooks) : [];
  }

  addBook() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    if (title.value === '' || author.value === '') {
      alert('Please fill in all fields');
    } else {
      this.books.push({ title: title.value, author: author.value });
      this.updateLocalStorage();
    }
  }

  removeBook(id) {
    this.books.splice(id, 1);
    this.updateLocalStorage();
    const listTitle = document.querySelector('.list-title');
    if (this.books.length === 0) { listTitle.innerHTML = 'Books List is empty'; }
  }

  listBooks() {
    const books = document.getElementById('books');
    books.innerHTML = '';
    let id = 0;

    this.books.forEach((book) => {
      books.innerHTML
      += `<tr>
       <td class="col-sm-10">"${book.title}"  by ${book.author}</td>
      <td class="col-sm-2">
      <a href="#" class="btn btn-light btn-sm" onClick="myBooks.removeBook(${id})">Remove</a>
      </td>
      </tr>`;
      id += 1;
    });
  }

  updateLocalStorage() {
    localStorage.myBooks = JSON.stringify(this.books);
    this.listBooks();
  }
}

const myBooks = new ListOfBooks();

myBooks.listBooks();

const listTitle = document.querySelector('.list-title');

if (myBooks.books.length !== 0) { listTitle.innerHTML = ''; }