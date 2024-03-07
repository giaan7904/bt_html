class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

let jobs = [];

function addJob() {
    let id = prompt("Nhập ID công việc:");
    let title = prompt("Nhập tiêu đề công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let completed = prompt("Công việc đã hoàn thành? (true/false):");
    completed = (completed.toLowerCase() === 'true');

    let job = new Job(id, title, description, completed);
    jobs.push(job);
    console.log("Công việc đã được thêm vào danh sách.");
}

function printJobs() {
    if (jobs.length === 0) {
        console.log("Danh sách công việc trống.");
    } else {
        console.log("Danh sách công việc:");
        jobs.forEach(job => {
            console.log(`ID: ${job.id}, Tiêu đề: ${job.title}, Mô tả: ${job.description}, Hoàn thành: ${job.completed}`);
        });
    }
}

function searchJobById() {
    let idToSearch = prompt("Nhập ID công việc cần tìm kiếm:");
    let foundJob = jobs.find(job => job.id === idToSearch);
    if (foundJob) {
        console.log("Công việc đã được tìm thấy:");
        console.log(`ID: ${foundJob.id}, Tiêu đề: ${foundJob.title}, Mô tả: ${foundJob.description}, Hoàn thành: ${foundJob.completed}`);
    } else {
        console.log("Không tìm thấy công việc.");
    }
}

function main() {
    let option;
    do {
        option = prompt(`Chọn một trong các lựa chọn sau:
        1. Thêm công việc mới
        2. In ra danh sách công việc
        3. Tìm kiếm công việc theo ID
        4. Thoát chương trình`);

        switch (option) {
            case '1':
                addJob();
                break;
            case '2':
                printJobs();
                break;
            case '3':
                searchJobById();
                break;
            case '4':
                console.log("Chương trình đã được thoát.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (option !== '4');
}

main();