// Book Class: Represents a Book
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const storedBooks = [
            {
                title: "Book One",
                author: "John Doe",
                year: "3434434"
            },
            {
                title: "Book Two",
                author: "Jane Doe",
                year: "45545"
            }
        ];

        const books = storedBooks;

        //loop through all the books in the array in the local storage 
        //calling a method and passing a book to it
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
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

    static deleteBook(element) {
        if (element.classList.contains('delete')) {

            //delete parent element - the whole row
            element.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
      const div = document.createElement('div');

      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));

      //to add the element to the DOM, we need to get elements before & after
      //before - container
      const container = document.querySelector('.container');

      //after - form
      const form = document.querySelector('#book-form');

      //insert the alert by taking the container(parent) and insert the div before the form
      container.insertBefore(div, form);
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

    //Make sure all fields are filled in before submitting 
    if (title === '' || author === '' || year === '') {
        alert('Please fill in all fields');
    } else {
        // Instantiate a new book from the Book class to add a book
        const book = new Book(title, author, year);

        // Add book to UI
        UI.addBookToList(book);

        // Clear field method
        UI.clearFields();
    }


});

//Event: Remove a book (UI/Local Storage)
//Event Propagation: delete the actual list
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
})
