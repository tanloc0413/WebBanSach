import BookImageModel from '../models/BookImageModel';
import { myRequest } from './Request';


export async function getAllImageOfTheBooks(bookId: number):Promise<BookImageModel[]> {
    const result:BookImageModel[] = [];

    // Xác định endpoint
    const path:string = `http://localhost:8080/sach/${bookId}/listImage`;

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseData = response._embedded.images;

    for(const key in responseData) {
        result.push ({
            imageId: responseData[key].imageId,
            imageName: responseData[key].imageName,
            checkIcon: responseData[key].checkIcon,
            pathImage: responseData[key].pathImage,
            dataImage: responseData[key].dataImage
        });
    }

    return result;
}

