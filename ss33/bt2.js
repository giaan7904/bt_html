class Contact {
    constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

var phoneBook = [
    new Contact("Alice", "123-456-7890", "alice@example.com"),
    new Contact("Bob", "987-654-3210", "bob@example.com"),
    new Contact("Charlie", "555-123-4567", "charlie@example.com")
];

console.log("Danh bạ điện thoại:");
phoneBook.forEach(contact => {
    console.log(`Tên: ${contact.name}`);
    console.log(`Số điện thoại: ${contact.phoneNumber}`);
    console.log(`Email: ${contact.email}`);
    console.log("-----------------------------");
});
