// ĐẦU VÀO 
    // - tạo ra biến tienUSD và cho phép user nhập số tiền vào 
// XỬ LÝ 
    // - tạo ra biến giaUSDMoiNhat và gán giá trị 23500
    // - tao ra bien tienVietSauQuyDoi và gán giá trị 0 
    // - tienVietSauQuyDoi = tienUSD * giaUSDMoiNhat
// ĐẦU RA 
    // - in tienVietSauQuyDoi (log)

    function quyDoiTien() {
        const tienUSDInput = document.getElementById("tienUSD");
        const giaUSDMoiNhatInput = document.getElementById("giaUSDMoiNhat");
        const tienVietSauQuyDoiElement = document.getElementById("tienVietSauQuyDoi");

        const tienUSD = Number(tienUSDInput.value);
        const giaUSDMoiNhat = Number(giaUSDMoiNhatInput.value);

        const tienVietSauQuyDoi = tienUSD * giaUSDMoiNhat;

        tienVietSauQuyDoiElement.textContent = "Tiền Việt Sau Quy Đổi: " + tienVietSauQuyDoi.toLocaleString('vi-VN') + " VNĐ";
    }