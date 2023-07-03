# BookList
This code is a simple web application that allows users to add and remove books from a list. Let's break it down step by step:

The code defines a Book class that represents a book. It has a constructor that takes in the book's title, author, and ISBN.

Next, there is a UI class that handles UI tasks. It has static methods to display books, add a book to the list, delete a book from the list, and show an alert message.

The displayBooks method in the UI class retrieves the books from the local storage using the Store class and loops through them. It then calls the addBookToList method to add each book to the UI.

The addBookToList method creates a table row (tr) and populates it with the book's details. It appends the row to the book list in the UI.

The deleteBook method checks if the clicked element has the class "delete" (which represents the delete button). If it does, it removes the parent row from the UI.

The showAlert method dynamically creates an alert element with the specified message and class name. It inserts the alert element before the book form in the UI. After 3 seconds, the alert is removed.

The clearFields method clears the input fields by setting their values to an empty string.

The Store class handles the storage of books in the local storage. It has static methods to get books from the local storage, add a book to the local storage, and remove a book from the local storage.

The getBooks method checks if there are books in the local storage. If not, it initializes an empty array. If there are books, it retrieves them and parses them from JSON format.

The addBook method retrieves the books from the local storage, adds the new book to the array, and then stores the updated array in the local storage.

The removeBook method retrieves the books from the local storage, loops through them, and removes the book with the specified ISBN. It then stores the updated array in the local storage.

The DOMContentLoaded event listener calls the displayBooks method when the page is loaded.

The submit event listener on the book form prevents the default form submission behavior. It retrieves the values from the input fields, checks if they are all filled in, creates a new book object, adds it to the UI and the local storage, shows a success message, and clears the input fields.

The click event listener on the book list listens for clicks on the delete buttons. When a delete button is clicked, it removes the book from the UI, removes the book from the local storage using the ISBN value, and shows a success message.

Overall, this code creates a simple book list management system with the ability to add and remove books. It uses the local storage to persist the data between page refreshes.
