import BookImageModel from '../models/BookImageModel';
import { myRequest } from './Request';

async function getImgBook(path:string):Promise<BookImageModel[]> {
    const result:BookImageModel[] = [];

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

// Lấy tất cả ảnh của sách
export async function getAllImageOfTheBooks(bookId: number):Promise<BookImageModel[]> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach/${bookId}/listImage`;

    return getImgBook(path);
}

// Lấy ảnh đại diện của sách
export async function getFirstImgBook(bookId: number):Promise<BookImageModel[]> {
    // Xác định endpoint
    const path:string = `http://localhost:8080/sach/${bookId}/listImage?sort=imageId,asc&page=0&size=1`;

    return getImgBook(path);
}