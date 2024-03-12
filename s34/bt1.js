var danhSach = ["Mục 1", "Mục 2", "Mục 3", "Mục 4", "Mục 5"];

var ul = document.createElement('ul');

for (var i = 0; i < danhSach.length; i++) {
    var li = document.createElement('li');
    li.textContent = danhSach[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);
