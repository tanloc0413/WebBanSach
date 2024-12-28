import BookModel from '../models/BookModel';
import { myRequest } from './Request';

interface ResultInterface {
    result: BookModel[];
    totalPage: number;
    totalBook: number;
}

async function getBooks(path: string):Promise<ResultInterface> {
    const result:BookModel[] = [];

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseData = response._embedded.books;

    // console.log('Dữ liệu trả về từ API:', responseData);

    // Lấy thông tin trang
    const totalPage:number = response.page.totalPages;
    const totalBook:number = response.page.totalElements;

    for(const key in responseData) {
        result.push ({
            bookId: responseData[key].bookId,
            // ở responseData[key].bookId thì bookId gọi là của backend
            bookName: responseData[key].bookName,
            // nameAuthor: responseData[key].author,
            description: responseData[key].description,
            evaluate: responseData[key].evaluate,
            listPrice: responseData[key].listPrice,
            price: responseData[key].price,
            quantity: responseData[key].quantity
        });
    }

    return {
        result: result,
        totalBook: totalBook,
        totalPage: totalPage
    };
}

// Lấy danh sách tất cả sách
export async function getAllTheBooks():Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach';
    
    return getBooks(path);
}
  
// Lấy danh sách tất cả sách có phân trang
export async function getAllTheBookPagination(currentPage: number):Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach?sort=bookId,asc&size=15&page=${currentPage}`;
    
    return getBooks(path);
}

// Lấy quyển sách mới nhất
export async function getTheLastestBook():Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach?sort=bookId,desc';

    return getBooks(path);
}

// Lấy danh sách tất cả sách có phân trang
export async function getTheBookPagination(currentPage: number):Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach?sort=bookId,asc&size=18&page=${currentPage}`;
    
    return getBooks(path);
}

// Tìm kiếm sách
export async function findBook(
    searchKeyword: string
    // categoryName: string
):Promise<ResultInterface> {
// Xác định endpoint
let path:string = 'http://localhost:8080/sach?sort=bookId,desc&page=0';
if(searchKeyword !== '') {
    path = `http://localhost:8080/sach/search/findByBookNameContaining?sort=bookId,desc&page=0&bookName=${searchKeyword}`
}
// else if(searchKeyword === '') {
//     path = `http://localhost:8080/sach/search/findByListCategory_categoryName?sort=bookId,desc&page=0&categoryName=${categoryName}`
// }
// else if(searchKeyword === '') {
//     path = `http://localhost:8080/sach/search/findByBookNameContainingAndListCategory_categoryName?sort=bookId,desc&page=0&categoryName=${categoryName}&bookName=${searchKeyword}`
// }

return getBooks(path);
}

export async function getBookByBookId(bookId: number):Promise<BookModel | null> {
    const path = `http://localhost:8080/sach/${bookId}`;

    // let result:BookModel;

    try {
        // Gọi phương thức request
        const response = await fetch(path);

        if(!response.ok) {
            throw new Error("Gặp lỗi trong quá trình lấy dữ liệu của quyển sách!")
        }

        const bookData = await response.json();

        if(bookData) {
            return {
                bookId: bookData.bookId,
                // ở responseData[key].bookId thì bookId gọi là của backend
                bookName: bookData.bookName,
                // nameAuthor: responseData[key].author,
                description: bookData.description,
                evaluate: bookData.evaluate,
                listPrice: bookData.listPrice,
                price: bookData.price,
                quantity: bookData.quantity
            }
        } else {
            throw new Error('Sách không tồn tại!');
        }

    } catch(error) {
        console.log("Lỗi: ", error);
        return null;
    }

    
}