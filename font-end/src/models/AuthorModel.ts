class AuthorModel {
    authorId: number;
    authorName?: string;
    constructor (
        authorId: number,
        authorName?: string
    ) {
        this.authorId = authorId;
        this.authorName = authorName;
    }
}

export default AuthorModel;