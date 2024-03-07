class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPublished Year: ${this.publishedYear}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayBooks() {
        let booksInfo = '';
        this.books.forEach(book => {
            booksInfo += book.displayInfo() + '\n\n';
        });
        return booksInfo;
    }
}

var library = new Library();

function addBookFromPrompt() {
    const title = prompt("Enter the title of the book:");
    const author = prompt("Enter the author of the book:");
    const publishedYear = prompt("Enter the published year of the book:");
    const book = new Book(title, author, publishedYear);
    library.addBook(book);
}

while (confirm("Do you want to add a book to the library?")) {
    addBookFromPrompt();
}

alert(library.displayBooks());
console.log(library.displayBooks())
