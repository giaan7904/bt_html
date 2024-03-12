function themVaoDanhSach() {
    var giaTri = document.getElementById('nhapLieu').value;
    var liMoi = document.createElement('li');
    liMoi.textContent = giaTri;
    document.getElementById('danhSach').appendChild(liMoi);
    document.getElementById('nhapLieu').value = '';
}
