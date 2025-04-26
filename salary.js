// ĐẦU VÀO
    // - Đặt tên biến soNgayLam và cho phép user nhập vào số ngày tương ứng 
// XỬ LÝ 
    // - Đặt biến luongMotNgay và gán giá trị 100000
    // - Đặt biến tongLuong có giá trị luongMotNgay * soNgayLam 
// ĐẦU RA 
    // - in ra tongLuong


function tinhTongLuong() {
    const soNgayLamInput = document.getElementById("soNgayLam");
    const luongMotNgayInput = document.getElementById("luongMotNgay");
    const tongLuongElement = document.getElementById("tongLuong");

    const soNgayLam = Number(soNgayLamInput.value);
    const luongMotNgay = Number(luongMotNgayInput.value);

    const tongLuong = soNgayLam * luongMotNgay;

    tongLuongElement.textContent = "Tổng lương: " + tongLuong.toLocaleString('vi-VN') + " VNĐ";
}