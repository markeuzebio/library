const allBooks = [];

function Book(title, author, number_of_pages) {
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
}

function addBookToLibrary() {
    title = prompt("Input the title of the book");
    author = prompt("Input the author of the book");
    number_of_pages = prompt("Input the number of the pages of the book");

    const book = new Book(title, author, number_of_pages);

    allBooks.push(book);
}

function showAllBooks() {
    allBooks.forEach(function(e) {
        console.log("----------------------------------------")
        console.log(`Title: ${e.title}`);
        console.log(`Author: ${e.author}`);
        console.log(`Number of pages: ${e.number_of_pages}`);
        console.log("----------------------------------------\n");
    });
}

addBookToLibrary();

showAllBooks();