class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    displayInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}`;
    }
}

var person = new Person("John Doe", 30, "123 Main Street");

console.log("Thông tin ban đầu:");
console.log(person.displayInfo());

person.birthDate = "1994-01-01";
delete person.age;

console.log("\nSau khi thêm ngày sinh và xóa tuổi:");
console.log(person.displayInfo());
