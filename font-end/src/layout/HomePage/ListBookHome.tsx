import React, { useEffect, useState } from 'react';

import '../../css/listBookHome.css';
import BookModel from '../../models/BookModel';
import CardBookHome from '../Cards/CardBookHome';
import { getAllTheBooks } from '../../api/BookAPI';

const ListBookHome: React.FC = () => {
    const[listBook, setListBook] = useState<BookModel[]>([]);
    const[loadingData, setLoadingData] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        getAllTheBooks()
        .then(bookData => {
            console.log("Dữ liệu sách nhận được:", bookData);
            setListBook(bookData);
            setLoadingData(false);
        })
        .catch(error => {
            setError(error.message);
        })
    }, []);

    if(loadingData) {
        return (
            <div id='loadingData'>
                <p id='loadingData-text'>
                    Đang tải dữ liệu của sách!
                </p>
            </div>
        )
    }

    if(error) {
        <div id='error'>
            <p id='error-text'>
                Gặp lỗi: <b>{error}</b>
            </p>
        </div>
    }

    if (listBook.length === 0) {
        return <p>Không có sách để hiển thị.</p>;
    }
      
    return (
        <div id='blk_listBook'>
            <div id='blk_listBook-title'>
                <p id='text_listBook-title'>
                    Sách
                </p>
            </div>
            <div id='blk_listBook-card'>
                {
                    listBook
                        .slice(0, 18)
                        .map((books) => (
                        <CardBookHome
                            key={books.bookId}
                            books={books} 
                            
                        />
                    )) 
                }
            </div>
            <div id='blk_listBook-seeMore'>
                <a href='/sach' id='btn_listBook-seeMore'>
                    Xem thêm
                </a>
            </div>
        </div>
    );
}

export default ListBookHome;