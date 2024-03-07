class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Sách '${this.title}' đã được mượn.`);
        } else {
            console.log(`Sách '${this.title}' hiện không có sẵn.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Sách '${this.title}' đã được trả.`);
        } else {
            console.log(`Sách '${this.title}' đã được trả trước đó.`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    isBookAvailable(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            return book.isAvailable;
        } else {
            console.log(`Không tìm thấy sách '${title}' trong thư viện.`);
            return false;
        }
    }
}

const book1 = new Book("Gatsby vĩ đại", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const sach3 = new Book("Nhật ký Anne Frank", "Anne Frank", 1947);
const sach4 = new Book("Hồn đá", "Gregory David Roberts", 2003);

var library = new Library();

library.addBook(book1);
library.addBook(book2);

book1.borrow();

book1.returnBook();

book2.borrow();

console.log("Sách 'Gatsby vĩ đại' có sẵn?", library.isBookAvailable("Gatsby vĩ đại"));
console.log("Sách 'To Kill a Mockingbird' có sẵn?", library.isBookAvailable("To Kill a Mockingbird"));

book2.borrow();
