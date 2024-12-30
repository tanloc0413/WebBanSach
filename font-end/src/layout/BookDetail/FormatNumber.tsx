function FormatNumber(x: number | undefined): string {
    if (x === undefined) {
        return '0';
    }
    if (isNaN(x)) {
        return '0';
    }

    // Kiểm tra xem x có phải là số nguyên không, nếu có thì thêm ".0" vào
    if (Number.isInteger(x)) {
        return x.toLocaleString('en-EN') + ".0";
    }

    // Nếu không phải số nguyên, chỉ định dạng số bình thường
    return x.toLocaleString('en-EN');
}

export default FormatNumber;