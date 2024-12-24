import React, { useEffect, useState } from 'react';

import '../../css/listBookHome.css';
import BookModel from '../../models/BookModel';
import CardBookHome from '../Card/CardBookHome';
import { getAllTheBooks } from '../../api/BookAPI';

const ListBookHome: React.FC = () => {
    const[listBook, setListBook] = useState<BookModel[]>([]);
    const [displayedBooks, setDisplayedBooks] = useState<BookModel[]>([]);
    const[loadingData, setLoadingData] = useState(true);
    const[error, setError] = useState(null);

    // Hàm shuffle mảng
    const shuffleArray = (array: BookModel[]) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        getAllTheBooks()
        .then(rsBookData => {
            // In danh sách các quyển sách
            console.log("Dữ liệu sách nhận được:", rsBookData.result);
            // Lấy ra danh sách book
            setListBook(rsBookData.result);
            // hiển thị random card sách
            setDisplayedBooks(
                shuffleArray([...rsBookData.result])
                .slice(0, 18)
            );
            setLoadingData(false);
        })
        .catch(error => {
            setError(error.message);
        })
    }, []);

    // set Random lại danh sách mỗi 1 giờ
    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedBooks(
                shuffleArray([...listBook])
                .slice(0, 18)
            );
        },
        // 3 giờ = 3 * 60 phút * 60 giây * 1000ms
        1 * 60 * 60 * 1000);

        // Dọn dẹp interval khi component unmount
        return () => clearInterval(interval);
    }, [listBook]);

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
      
    return (
        <div>
            {!loadingData && !error && listBook.length > 0 && (
                <div id='blk_listBook'>
                    <div id='blk_listBook-title'>
                        <p id='text_listBook-title'>
                            Sách
                        </p>
                    </div>                    
                    <div id='blk_listBook-card'>
                        {
                            displayedBooks
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
            )}
        </div>
    );
}

export default ListBookHome;