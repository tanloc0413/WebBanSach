import React, { useEffect, useState } from 'react';
import { formatCurrency, formatNumberCurrency } from '../../models/FormatMoney';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';

import '../../css/cardBook.css';
import BookModel from '../../models/BookModel';
import BookImageModel from '../../models/BookImageModel';
import { getAllImageOfTheBooks, getFirstImgBook } from '../../api/ImageBookAPI';
import AvtImage from '../../imgs/avatar books.jpg';
import { slugify } from '../../models/Converts';

interface BookProps {
    books: BookModel;
}

const CardBook: React.FC<BookProps> = (props) => {
    const [isFollowed, setIsFollowed] = useState(false);

    const bookId:number = props.books.bookId;
    const[listImgBook, setListImgBook] = useState<BookImageModel[]>([]);
    const[loadingDataImg, setLoadingDataImg] = useState(true);
    const[errorImg, setErrorImg] = useState(null);

    // Format tiền
    const handleFollowBook = () => {
        setIsFollowed((prevFollowed) => {
            const newState = !prevFollowed;
            // Lưu trạng thái theo dõi vào localStorage (chuyển thành chuỗi)
            localStorage.setItem(`followed-${props.books.bookId}`, JSON.stringify(newState));
            return newState;
        });
    };

    // Lấy danh sách ảnh
    useEffect(() => {
        // getAllImageOfTheBooks(bookId)
        getFirstImgBook(bookId)
        .then(imageData => {
            // console.log("Ảnh đã tải lên:", imageData);
            setListImgBook(imageData);
            setLoadingDataImg(false);
        })
        .catch(errorImg => {
            // console.error("Lỗi khi lấy ảnh:", errorImg);
            setLoadingDataImg(false);
            setErrorImg(errorImg.message);
        })
    }, []);

    if(loadingDataImg) {
        return (
            <div id='loadingData'>
                <p id='loadingDataImg-text'>
                    Đang tải dữ
                </p>
                <p id='loadingDataImg-text'>
                    liệu của sách!
                </p>
            </div>
        )
    }

    if(errorImg) {
        <div id='errorImg'>
            <p id='errorImg-text'>
            Gặp lỗi: <b>{errorImg}</b>
            </p>
        </div>
    }

    // lấy ảnh đại diện
    let dataImage:string = listImgBook[0]?.dataImage || AvtImage;

    // Convert tên sách thành slug
    const bookSlug = slugify(props.books.bookName || '');

    return (
        <div id="cardBook">
            <div id="cardBook_blk1">
                <a href={`/sach/${bookId}`} id="cardBook_blk1-link">
                    <div className="cardBook_blk1-imgs">
                        {!loadingDataImg && !errorImg && (
                            <img
                                // src={`${listImgBook[0].dataImage}`}
                                src={dataImage}
                                alt="Ảnh sách"
                                className="cardBook_blk1-image"
                            />
                        )}
                    </div>
                </a>
            </div>
            <div id="cardBook_blk2">
                <a href={`/sach/${bookId}`} id="cardBook_blk2-link">
                    <p className="cardBook_blk2-title">
                        {props.books.bookName}
                    </p>
                </a>
                <div id="cardBook_blk2-bookshelf">
                    <div id="block2_bookshelf">
                        <p id="block2_bookshelf-price">
                            {formatCurrency(props.books.price ?? 0)}
                        </p>
                        <p id="block2_bookshelf-listPrice">
                            {formatNumberCurrency(props.books.listPrice ?? 0)}đ
                        </p>
                    </div>
                    <div id="cardHome_blk2-shop">
                        <button
                            id="blk2_shop-icon1"
                            className={`${isFollowed ? 'shop-active' : ''}`}
                            onClick={handleFollowBook}
                        >
                            {isFollowed ? (
                                <IoHeartDislikeOutline />
                            ) : (
                                <MdFavoriteBorder />
                            )}
                        </button>
                        <button id="blk2_shop-icon2">
                            <BsCartPlus className="btn_cart-home"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBook;