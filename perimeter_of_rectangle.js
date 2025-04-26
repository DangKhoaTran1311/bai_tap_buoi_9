// ĐẦU VÀO 
    // - Đặt tên biến chieuDai và cho user nhập vào chiều dài hcn 
    // - Đặt tên biến chieuRong và cho user nhập vào chiều rộng hcn
// XỬ LÝ 
    // - Chuyển kiểu string sang number cho chieuDai, chieuRong
    // - let dienTich = 0 
    // - dienTich = chieuDai * chieuRong
    // - let chuVi = 0
    // - chuVi = (chieuDai + chieuRong) * 2
// ĐẦU RA
    // - console.log("Dien Tich Hinh Chu Nhat La: " + dienTich)
    // - console.log("Chu Vi Hinh Chu Nhat La: " + chuVi)
// LƯU Ý:
    // - Chiều dài phải lớn hơn chiều rộng

function tinhDienTichChuVi() {
    const chieuDaiInput = document.getElementById("chieuDai");
    const chieuRongInput = document.getElementById("chieuRong");
    const dienTichElement = document.getElementById("dienTich");
    const chuViElement = document.getElementById("chuVi");
    const thongBaoElement = document.getElementById("thongBao");

    const chieuDai = Number(chieuDaiInput.value);
    const chieuRong = Number(chieuRongInput.value);

    if (chieuDai > chieuRong) {
        const dienTich = chieuDai * chieuRong;
        const chuVi = (chieuDai + chieuRong) * 2;

        dienTichElement.textContent = "Diện tích: " + dienTich;
        chuViElement.textContent = "Chu vi: " + chuVi;
        thongBaoElement.textContent = ""; // Xóa thông báo lỗi nếu có
    } else {
        thongBaoElement.textContent = "Chiều dài phải lớn hơn chiều rộng!";
        dienTichElement.textContent = ""; // Xóa kết quả cũ
        chuViElement.textContent = "";   // Xóa kết quả cũ
    }
}