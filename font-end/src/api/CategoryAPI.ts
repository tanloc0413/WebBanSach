import CategoryModel from "../models/CategoryModel";
import { myRequest } from "./Request";


interface CategoryInterface {
    cateResult: CategoryModel[];
}

async function getCategory(path: string):Promise<CategoryInterface> {
    const cateResult:CategoryModel[] = [];

    // Gọi phương thức request
    const response = await myRequest(path);

    // Lấy ra json sách
    const responseCateData = response._embedded.categories;

    // console.log('Dữ liệu Category trả về từ API:', responseCateData);

    for(const key in responseCateData) {
        cateResult.push ({
            categoryId: responseCateData[key].categoryId,
            categoryName: responseCateData[key].categoryName
        });
    }

    return {
        cateResult: cateResult
    };
}

// Lấy danh sách tất cả sách
export async function getAllCateTheBook():Promise<CategoryInterface> {
    // Xác định endpoint
    const path:string = 'http://localhost:8080/the-loai';
    
    return getCategory(path);
}