export async function myRequest(path:string) {
    // Truy cấn đến đường dẫn
    const response = await fetch(path);

    // Nếu bị trả về lỗi
    if(!response.ok) {
        throw new Error(`Không thể truy cập ${path}`);
    }

    // Nếu trả về OK
    return response.json();
    
}
