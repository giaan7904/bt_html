class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

const employees = [];

function addEmployee() {
    const name = prompt("Nhập tên của nhân viên:");
    const age = parseInt(prompt("Nhập tuổi của nhân viên:"));
    const salary = parseFloat(prompt("Nhập mức lương của nhân viên:"));
    const employee = new Employee(name, age, salary);
    employees.push(employee);
    console.log("Nhân viên đã được thêm mới vào danh sách.");
}

function displayEmployees() {
    console.log("Thông tin đầy đủ của các nhân viên:");
    employees.forEach(employee => {
        console.log(`Tên: ${employee.name}`);
        console.log(`Tuổi: ${employee.age}`);
        console.log(`Lương: ${employee.salary}`);
        console.log("--------------------------");
    });
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    console.log("Danh sách nhân viên sau khi được sắp xếp theo tuổi tăng dần:");
    displayEmployees();
}

function calculateTotalSalary() {
    let total = 0;
    employees.forEach(employee => {
        total += employee.salary;
    });
    return total;
}

function main() {
    let choice;
    do {
        console.log("\nMENU:");
        console.log("1. Thêm mới nhân viên");
        console.log("2. Hiển thị danh sách nhân viên");
        console.log("3. Sắp xếp danh sách nhân viên theo tuổi tăng dần");
        console.log("4. Hiển thị tổng lương của toàn bộ công ty");
        console.log("5. Thoát chương trình");

        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                addEmployee();
                break;
            case 2:
                displayEmployees();
                break;
            case 3:
                sortEmployeesByAge();
                break;
            case 4:
                const totalSalary = calculateTotalSalary();
                console.log(`Tổng lương của toàn bộ công ty: ${totalSalary}`);
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 5);
}

main();
