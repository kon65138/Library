const mainContent = document.querySelector(".mainContent");
const mcChildNodes = document.querySelector(".mainContent").children;
const cards = document.querySelectorAll(".card");


const myLibrary = [{
    bookName: "Harry Potter and the Golbet of Fire",
    author: "J.K Rowling",
    pages: 636,
    read: false,
    libraryNo: 0,
}, {
    bookName: "The Long Earth",
    author: "Terry Pratchett and Stephen Baxter",
    pages: 400,
    read: true,
    libraryNo: 1,
}];

function Book(name, pages, author, read, libraryNo) {
    this.bookName = name;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.libraryNo = libraryNo;
}

function addBookToLibrary() {
    
}

function display() {
    mainContent.textContent = '';
    for (let book in myLibrary) {
        const card = document.createElement("div");
        const title = document.createElement("h3");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");
        const readButton = document.createElement("button");
        const dltButton = document.createElement("button");

        card.classList.add("card");
        card.classList.add(`no${book}`);
        title.classList.add("name");
        author.classList.add("author");
        pages.classList.add("pages");
        read.classList.add("read");
        readButton.classList.add("readButton");
        dltButton.classList.add("dltButton");

        title.textContent = myLibrary[book].bookName;
        author.textContent = `author: ${myLibrary[book].author}`;
        pages.textContent = `pages: ${myLibrary[book].pages}`;
        read.textContent = `read: ${myLibrary[book].read}`;
        readButton.textContent = "read";
        dltButton.textContent = "delete";

        mainContent.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(readButton);
        card.appendChild(dltButton);

        readButton.addEventListener("click", () => {
            if (myLibrary[book].read == true) {
                myLibrary[book].read = false;
            } else if (myLibrary[book].read == false) {
                myLibrary[book].read = true;
            }
            display();
        } )

        dltButton.addEventListener("click", () => {
            myLibrary.splice(book,1);
            display();
        })
    }
}

display();
