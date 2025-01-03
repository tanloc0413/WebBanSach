export const slugify = (text: string): string => {
    // Hàm chuyển đổi tiếng Việt có dấu sang không dấu
    const removeAccents = (str: string): string => {
        return str
            .normalize('NFD') // Tách các ký tự dấu
            .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các ký tự dấu
            .replace(/đ/g, 'd') // Thay 'đ' thành 'd'
            .replace(/Đ/g, 'D'); // Thay 'Đ' thành 'D'
    };

    return removeAccents(text) // Loại bỏ dấu tiếng Việt
        .toLowerCase() // Chuyển sang chữ thường
        .replace(/[^a-z0-9\s-]/g, '') // Loại bỏ ký tự đặc biệt (giữ lại dấu '-')
        .replace(/-+/g, '-') // Xử lý dấu '-' liền nhau thành 1 dấu '-'
        .replace(/\s*-\s*/g, '-') // Loại khoảng trắng quanh dấu '-'
        .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu '-'
        .trim(); // Loại bỏ khoảng trắng thừa ở đầu/cuối
};
