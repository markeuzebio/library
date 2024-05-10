const btn_show_hide_sidebar = document.querySelector('.btn-toggle-nav-sidebar');
const nav_sidebar           = document.querySelector('nav.sidebar');
const body                  = document.querySelector('body');
const btn_register          = document.querySelector('button[name=btn_register]');
const cards_container       = document.querySelector('.cards-container');

btn_show_hide_sidebar.addEventListener('click', function () { 
    nav_sidebar.classList.toggle('invisible');
    body.classList.toggle('change-body-to-grid');

    if(nav_sidebar.classList.contains('invisible'))
        btn_show_hide_sidebar.textContent = '+';
    else
        btn_show_hide_sidebar.textContent = '-';
});

btn_register.addEventListener('click', function () {
    const book_author   = document.querySelector('#book_author').value;
    const book_title   = document.querySelector('#book_title').value;
    const book_n_pages = document.querySelector('#book_n_pages').value;
    const book_is_read = document.querySelector("input[type='radio'][name='read']:checked").value;

    const card           = document.createElement('div');
    card.classList.add('card');

    const card_author  = document.createElement('p');
    const card_title   = document.createElement('p');
    const card_n_pages = document.createElement('p');
    const card_is_read = document.createElement('p');

    card_author.textContent = book_author;
    card_title.textContent  = book_title;
    card_n_pages.textContent  = book_n_pages;
    card_is_read.textContent  = book_is_read;
    
    card.appendChild(card_author);
    card.appendChild(card_title);
    card.appendChild(card_n_pages);
    card.appendChild(card_is_read);
    
    cards_container.appendChild(card);
});

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

// addBookToLibrary();

showAllBooks();