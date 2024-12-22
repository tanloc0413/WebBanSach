import BookModel from '../models/BookModel';
import { myRequest } from './Request';


async function getBooks(path:string):Promise<BookModel[]> {
    const result:BookModel[] = [];


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

export async function getAllTheBooks():Promise<BookModel[]> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach';
    
    return getBooks(path);
}

export async function getTheLastestBook():Promise<BookModel[]> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/sach?sort=bookId,desc';

    return getBooks(path);
}