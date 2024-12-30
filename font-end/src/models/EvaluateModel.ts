class EvaluateModel {
    evaluateId: number;
    comment: string;
    ratingPoints: number;
    // bookId: number;
    userId: number;

    constructor (
        evaluateId: number,
        comment: string,
        ratingPoints: number,
        // bookId: number,
        userId: number
    ) {
        this.evaluateId = evaluateId;
        this.comment = comment;
        this.ratingPoints = ratingPoints;
        // this.bookId = bookId;
        this.userId = userId;
    }
    
}

export default EvaluateModel;