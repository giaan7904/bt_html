class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}
const books = [
    new Book("Nguyễn Nhật Ánh", "Cô gái đến từ hôm qua"),
    new Book("Nguyễn Nhật Ánh", "Kính vạn hoa"),
    new Book("Vũ Trọng Phụng", "Số Đỏ"),
    new Book("Nam Cao", "Chí Phèo"),
    new Book("Ngô Tất Tố", "Tắt Đèn"),
    new Book("Kim Lân", "Vợ Nhặt"),
    new Book("Nguyễn Du", "Truyện Kiều"),
    new Book("Vũ Trọng Phụng", "Làm Đĩ")
];
const authorName = prompt("Nhập tên tác giả:");
let found = false;
for (let i = 0; i < books.length; i++) {
    if (books[i].author === authorName) {
        console.log("Tìm thấy sách:");
        console.log(books[i]);
        found = true;
    }
}
if (!found) {
    console.log("Không tìm thấy sách");
}