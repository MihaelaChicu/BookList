// Book Class: Represents a Book
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
      const storedBooks = [
        {
          title:"Book One",
          author:"John Doe",
          year:"3434434"
        },
        {
          title:"Book Two",
          author:"Jane Doe",
          year:"45545"
        }
      ];

      const books = storedBooks;

      //loop through all the books in the array in the local storage 
      //calling a method and passing a book to it
      books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
      //grab element
      const list = document.getElementById('book-list');
      
      //create the table row to put into the tbody
      const row = document.createElement('tr');

      row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;


      //append row/book to the list
    list.appendChild(row);
    }

    static clearFields() {
      // Grab each value and clear it
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#year').value = '';

    }
}
//Store Class: Handles Storage (local on the browser)

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;

    // Instantiate a new book from the Book class to add a book
    const book = new Book(title, author, year);
   
    // Add book to UI
    UI.addBookToList(book);

   // Clear field method
   UI.clearFields();
});
//Event: Remove a book (UI/Local Storage)