import AuthorModel from '../models/AuthorModel';
import { myRequest } from './Request';

async function getAuthor(path:string):Promise<AuthorModel[]> {
    const result:AuthorModel[] = [];

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseData = response._embedded.authors;

    for(const key in responseData) {
        result.push ({
            authorId: responseData[key].authorId,
            authorName: responseData[key].authorName
        });
    }

    return result;
}

// Lấy tất cả ảnh của sách
export async function getAuthorName(bookId: number):Promise<AuthorModel[]> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach/${bookId}/listAuthor`;
    
    return getAuthor(path);
}
