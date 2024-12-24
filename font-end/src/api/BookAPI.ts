import BookModel from '../models/BookModel';
import { myRequest } from './Request';

interface ResultInterface {
    result: BookModel[];
    totalPage: number;
    totalBook: number;
}

async function getBooks(path:string):Promise<ResultInterface> {
    const result:BookModel[] = [];

    // Gọi phương thức request
    const response = await myRequest(path);

    // console.log('Dữ liệu trả về từ API:', response);

    // Lấy ra json sách
    const responseData = response._embedded.books;

    // console.log(responseData);

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

// lấy danh sách sách
export async function getAllTheBooks():Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach';
    
    return getBooks(path);
}
  
// lấy danh sách sách có phân trang
export async function getAllTheBookPagination(currentPage: number):Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach?sort=bookId,asc&size=15&page=${currentPage}`;
    
    return getBooks(path);
}

export async function getTheLastestBook():Promise<ResultInterface> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach?sort=bookId,desc';

    return getBooks(path);
}