const mainContent = document.querySelector(".mainContent");
const mcChildNodes = document.querySelector(".mainContent").children;
const cards = document.querySelectorAll(".card");



const myLibrary = [{
    bookName: "Harry Potter and the Golbet of Fire",
    author: "J.K Rowling",
    pages: 636,
    read: "no",
    libraryNo: 0,
}, {
    bookName: "The Long Earth",
    author: "Terry Pratchett and Stephen Baxter",
    pages: 400,
    read: "yes",
    libraryNo: 1,
}];

function Book(name, pages, author, read, libraryNo) {
    this.bookName = name;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.libraryNo = libraryNo;
}

function openForm() {
    document.querySelector("#newBook").style.display = "flex";
}
  
function closeForm() {
    document.querySelector("#newBook").style.display = "none";
}

function addBookToLibrary() {
    const inptName = document.getElementById("bName").value;
    const inptAuthor = document.getElementById("bAuthor").value;
    const inptPages = document.getElementById("bPages").value;
    const inptRead = document.getElementById("bRead").value;
    const yo = new Book(inptName, inptPages, inptAuthor, inptRead);
    myLibrary.push(yo);
    display();
    document.getElementById("bName").value = '';
    document.getElementById("bAuthor").value = '';
    document.getElementById("bPages").value = '';
    document.getElementById("bRead").value = '';

    event.preventDefault();
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
