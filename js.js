const myLibrary = [{
    bookName: "Harry Potter and the Golbet of Fire",
    author: "J.K Rowling",
    pages: 636,
    read: false,
    libraryNo: 1,
}, {
    bookName: "The Long Earth",
    author: "Terry Pratchett and Stephen Baxter",
    pages: 400,
    read: true,
    libraryNo: 2,
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