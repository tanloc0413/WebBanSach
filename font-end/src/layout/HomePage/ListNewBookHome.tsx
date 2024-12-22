
import { useEffect, useState } from 'react';

import BookModel from '../../models/BookModel';
import { getTheLastestBook } from '../../api/BookAPI';
import CardNewBook from '../Card/CardNewBook';

const ListNewBookHome: React.FC = () => {
    const[listBook, setListBook] = useState<BookModel[]>([]);
    const[loadingData, setLoadingData] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        getTheLastestBook()
        .then(newBookData => {
            console.log("Sách mới: ", newBookData)
            setListBook(newBookData)
            setLoadingData(false);
        })
        .catch(error => {
            setError(error.message);
        })
    }, []);

    // Load dữ liệu các quyển sách
    if(loadingData) {
        return (
            <div id='blk_loadingData'>
                <div id='loadingData'>
                    <p id='loadingData-text'>
                        Đang tải dữ
                    </p>
                    <p id='loadingData-text'>
                        liệu của sách!
                    </p>
                </div>
            </div>      
        )
    }
    // Báo lỗi khi lấy dữ liệu ra không được
    else if (error) {
        return (
            <div id='blk_error'>
                <div id='error'>
                    <p id='error-text'>
                        Gặp lỗi: <b>{error}</b>
                    </p>
                </div>
            </div>
        )
    }
    // Nếu trong database chưa tạo sách
    else if (listBook.length === 0) {
        return (
            <div id='blk_noBookYet'>
                <p id='noBookYet-text'>
                    Không có sách để hiển thị!
                </p>
            </div>
        );
    }

    const maxBooksToDisplay = 6;

    
    return ( 
        <>
            {!loadingData && !error && listBook.length > 0 && (
                listBook
                .slice(0, Math.min(listBook.length, maxBooksToDisplay))
                .map((books) => (
                    <CardNewBook
                        key={books.bookId}
                        books={books} 
                    />
                ))
            )}
        </>
    )
}

export default ListNewBookHome;