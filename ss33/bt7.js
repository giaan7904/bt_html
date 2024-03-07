class Order {
    constructor(orderNumber, creationDate, totalValue) {
        this.orderNumber = orderNumber;
        this.creationDate = creationDate;
        this.totalValue = totalValue;
    }
}

const orders = [];

function addOrder() {
    const orderNumber = prompt("Nhập số hóa đơn:");
    const creationDate = prompt("Nhập ngày tạo hóa đơn:");
    const totalValue = parseFloat(prompt("Nhập tổng giá trị hóa đơn:"));
    const order = new Order(orderNumber, creationDate, totalValue);
    orders.push(order);
    console.log("Hóa đơn đã được thêm mới vào danh sách.");
}

function displayOrders() {
    console.log("Thông tin đầy đủ của các hóa đơn:");
    orders.forEach(order => {
        console.log(`Số hóa đơn: ${order.orderNumber}`);
        console.log(`Ngày tạo: ${order.creationDate}`);
        console.log(`Tổng giá trị: ${order.totalValue}`);
        console.log("--------------------------");
    });
}

function calculateTotalValue() {
    let total = 0;
    orders.forEach(order => {
        total += order.totalValue;
    });
    return total;
}

function main() {
    let choice;
    do {
        console.log("\nMENU:");
        console.log("1. Thêm mới hóa đơn");
        console.log("2. Hiển thị danh sách hóa đơn");
        console.log("3. Tính tổng giá trị của tất cả hóa đơn");
        console.log("4. Thoát chương trình");

        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                addOrder();
                break;
            case 2:
                displayOrders();
                break;
            case 3:
                const totalValue = calculateTotalValue();
                console.log(`Tổng giá trị của tất cả hóa đơn: ${totalValue}`);
                break;
            case 4:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 4);
}

main();
