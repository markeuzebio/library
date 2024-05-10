const btn_open_close_sidebar = document.querySelector('.btn-toggle-nav-sidebar');
const nav_sidebar           = document.querySelector('nav.sidebar');
const body                  = document.querySelector('body');
const btn_register          = document.querySelector('button[name=btn_register]');
const cards_container       = document.querySelector('.cards-container');
const form                  = document.querySelector('form');

let book_counter_id = 0;

function openOrCloseSidebar(e) {
    nav_sidebar.classList.toggle('invisible');
    body.classList.toggle('change-body-to-grid');

    if(nav_sidebar.classList.contains('invisible'))
        e.target.textContent = '+';
    else
        e.target.textContent = '-';
}

function createCardElement() {
    // If the form is not completed, a warning message is shown to user and nothing happens
    if(!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Get the content of form and put them inside variables
    const book_author  = document.querySelector('#book_author').value;
    const book_title   = document.querySelector('#book_title').value;
    const book_n_pages = document.querySelector('#book_n_pages').value;
    const book_is_read = document.querySelector("input[type='radio'][name='read']:checked").value;

    // Create the card
    const card = document.createElement('div');
    card.setAttribute('data-book-id', book_counter_id);
    card.classList.add('card');
    
    // Create DOM elements that compose a card
    const btn_remove_card     = document.createElement('button');
    const card_author         = document.createElement('p');
    const card_title          = document.createElement('p');
    const card_n_pages        = document.createElement('p');
    const card_is_read        = document.createElement('p');

    // Add the content from form to DOM elements which represents card content
    card_author.textContent   = book_author;
    card_title.textContent    = book_title;
    card_n_pages.textContent  = book_n_pages;
    card_is_read.textContent  = book_is_read;

    // Add event to 'read' status content on the card
    card_is_read.classList.add('read-status');                  // When hover, change its color
    card_is_read.addEventListener('click', function() {
        if(card_is_read.textContent == 'Not read')
            card_is_read.textContent = 'Read';
        else
            card_is_read.textContent = 'Not read';
    });

    // Add style to button which removes the card
    btn_remove_card.classList.add('btn-remove-card');
    btn_remove_card.textContent = 'X';
    // Event added to button to remove the card when it's clicked
    btn_remove_card.addEventListener('click', function() {
        removeBookFromLibrary(btn_remove_card.parentElement.getAttribute('data-book-id'));
        btn_remove_card.parentElement.remove();
    });

    card.appendChild(btn_remove_card);
    card.appendChild(card_author);
    card.appendChild(card_title);
    card.appendChild(card_n_pages);
    card.appendChild(card_is_read);

    cards_container.appendChild(card);

    // Add book registered logically on the webpage
    addBookToLibrary(book_title, book_author, book_n_pages, book_is_read, book_counter_id);
    book_counter_id++;
}

btn_open_close_sidebar.addEventListener('click', openOrCloseSidebar);
btn_register.addEventListener('click', createCardElement);

const allBooks = [];

function Book(title, author, number_of_pages, read, id) {
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(title, author, number_of_pages, read, id) {
    const book = new Book(title, author, number_of_pages, read, id);
    allBooks.push(book);
}

function removeBookFromLibrary(book_id) {
    for(let i = 0 ; i < allBooks.length ; i++)
    {
        if(allBooks[i].id == book_id)
        {
            allBooks.splice(i, 1);
            break;
        }
    }
}