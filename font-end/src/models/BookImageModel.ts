class BookImageModel {
    imageId: number;
    // "?" là để trường hợp có thể NULL
    imageName?: string;
    checkIcon?: boolean;
    pathImage?: string;
    dataImage?: string;

    constructor (
        imageId: number,
        imageName?: string,
        checkIcon?: boolean,
        pathImage?: string,
        dataImage?: string
    ) {
        this.imageId = imageId;
        this.imageName = imageName;
        this.checkIcon = checkIcon;
        this.pathImage = pathImage;
        this.dataImage = dataImage;
    }
    
}

export default BookImageModel;