import React from 'react';
import BookProperties from './BookProperties';
import Book from '../../models/Book';

const ListBook: React.FC = () => {
    const books : Book[] = [
        {
            id: 1,
            title: "Sách GK",
            authorName: "no",
            description: "Có cái nịt",
            price: 5000,
            listPrice: 6000,
            imageUrl: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg"
        },
        {
            id: 2,
            title: "Sách GK",
            authorName: "no",
            description: "Có cái nịt",
            price: 5000,
            listPrice: 6000,
            imageUrl: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/552f5ce1-f18c-452f-bab8-e4277d0ef8f9.jpg"
        }
    ]

    return (
        <div id="books">
            <div>
                {
                    books.map((books) => (
                        <BookProperties books={books}/>
                    )) 
                }
            </div>
        </div>
    );
}

export default ListBook;
