// ĐẦU VÀO 
    // - tạo biến từ so1 đến so5 và cho phép người dùng nhập
// XỬ LÝ 
    // - Chuyển từ string sang number 
    // - tạo biến trungBinh 
    // - thêm bien tong = so1 + ... + so5
    // - trungBinh = tong / 5 
// ĐẦU RA 
    // - in ra trungBinhCong

    function tinhTrungBinh() {
        const so1Input = document.getElementById("so1");
        const so2Input = document.getElementById("so2");
        const so3Input = document.getElementById("so3");
        const so4Input = document.getElementById("so4");
        const so5Input = document.getElementById("so5");
        const trungBinhElement = document.getElementById("trungBinh");

        const so1 = Number(so1Input.value);
        const so2 = Number(so2Input.value);
        const so3 = Number(so3Input.value);
        const so4 = Number(so4Input.value);
        const so5 = Number(so5Input.value);

        const tong = so1 + so2 + so3 + so4 + so5;
        const trungBinhCong = tong / 5;

        trungBinhElement.textContent = "Trung bình cộng: " + trungBinhCong;
    }