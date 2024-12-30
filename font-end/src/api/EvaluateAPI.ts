import EvaluateModel from '../models/EvaluateModel';
import { myRequest } from './Request';

async function getEvaluate(path:string):Promise<EvaluateModel[]> {
    const result:EvaluateModel[] = [];

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseData = response._embedded.evaluates;

    for(const key in responseData) {
        result.push ({
            evaluateId: responseData[key].evaluateId,
            ratingPoints: responseData[key].ratingPoints,
            comment: responseData[key].comment,
            // bookId: responseData[key].bookId,
            userId: responseData[key].userId
            // bookId: 'ú',
            // userId: 'user'
        });
    }

    return result;
}

// Lấy tất cả ảnh của sách
export async function getEvaluateOfTheBook(bookId: number):Promise<EvaluateModel[]> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach/${bookId}/listEvaluate`;
    
    return getEvaluate(path);
}
