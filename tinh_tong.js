// ĐẦU VÀO 
    // - Tạo biến numberInput và cho phép người dùng nhập vào chữ số 
// XỬ LÝ 
    // - Điều kiện là có 2 chữ số tức lớn hơn 10 và bé hơn 99 
    // - Tách hàng chục (hangChuc) và hàng đơn vị (hangDonVi) của cặp số để hiểu là từng chữ số đơn lẻ theo công thức 
    // - Biến "sum" = hangChuc + hangDonVi
// ĐẦU RA 
    // - In ra kết quả sum tổng của hangChuc và hangDonVi

function calculateSum() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 10 || number > 99) {
      resultElement.textContent = "Vui lòng nhập số có 2 chữ số hợp lệ!";
      return;
    }

    const hangChuc = Math.floor(number / 10);
    const hangDonVi = number % 10;
    const sum = hangChuc + hangDonVi;

    resultElement.textContent = `Tổng của ${hangChuc} và ${hangDonVi} là: ${sum}`;
  }