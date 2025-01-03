class BookModel {
    bookId: number;
    // "?" là để trường hợp có thể NULL
    bookName?: string;
    // authorName?: string;
    description?: string;
    evaluate?: number;
    listPrice?: number;
    price?: number;
    quantity?: number;

    constructor (
        bookId: number,
        bookName?: string,
        // authorName?: string,
        description?: string,
        evaluate?: number,
        listPrice?: number,
        price?: number,
        quantity?: number,
    ) {
        this.bookId = bookId;
        this.bookName = bookName;
        // this.authorName = authorName;
        this.description = description;
        this.evaluate = evaluate;
        this.listPrice = listPrice;
        this.price = price;
        this.quantity = quantity;
    }
    
}

export default BookModel;