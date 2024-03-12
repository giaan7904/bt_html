function themVaoBang() {
    var giaTri = document.getElementById('nhapLieu2').value;
    var hangMoi = document.createElement('tr');
    for (var i = 0; i < 3; i++) {
        var oMoi = document.createElement('td');
        oMoi.textContent = giaTri + ' ' + (i + 1);
        hangMoi.appendChild(oMoi);
    }
    document.getElementById('bang').appendChild(hangMoi);
    document.getElementById('nhapLieu2').value = '';
}