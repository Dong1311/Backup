function validateForm() {
    const manufactureDate = document.getElementById('manufacture_date').value;
    const expirationDate = document.getElementById('expiration_date').value;

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!datePattern.test(manufactureDate)) {
        alert("Ngày sản xuất không đúng định dạng dd/mm/yyyy");
        return false;
    }

    if (!datePattern.test(expirationDate)) {
        alert("Hạn sử dụng không đúng định dạng dd/mm/yyyy");
        return false;
    }

    return true;
}
