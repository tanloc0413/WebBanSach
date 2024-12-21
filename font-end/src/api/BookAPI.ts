import BookModel from '../models/BookModel';
import { myRequest } from './Request';


export async function getAllTheBooks():Promise<BookModel[]> {
    const result:BookModel[] = [];

    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach';

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseData = response._embedded.books;

    console.log(responseData);

    for(const key in responseData) {
        result.push ({
            bookId: responseData[key].bookId,
            // ở responseData[key].bookId thì bookId gọi
            bookName: responseData[key].bookName,
            // nameAuthor: responseData[key].author,
            description: responseData[key].description,
            evaluate: responseData[key].evaluate,
            listPrice: responseData[key].listPrice,
            price: responseData[key].price,
            quantity: responseData[key].quantity
        });
    }

    return result;
}