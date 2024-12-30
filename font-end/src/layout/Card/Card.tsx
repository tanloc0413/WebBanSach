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

// import React, { useState } from 'react';
// import { formatCurrency, formatNumberCurrency } from '../../models/FormatMoney';
// import { MdFavoriteBorder } from 'react-icons/md';
// import { IoHeartDislikeOutline } from 'react-icons/io5';
// import { BsCartPlus } from 'react-icons/bs';

import '../../css/cardBook.css';
import { slugify } from '../../models/Converts';

interface BookProps {
  book: {
    id: number;
    title: string;
    price: number;
    listPrice: number;
    image: string;
  };
}

const Card: React.FC<BookProps> = ({ book }) => {
  const [isFollowed, setIsFollowed] = useState<boolean>(
    JSON.parse(localStorage.getItem(`followed-${book.id}`) || 'false')
  );

  const handleFollowBook = () => {
    setIsFollowed((prevFollowed: boolean) => {
      const newState = !prevFollowed; // Đảo trạng thái
      localStorage.setItem(`followed-${book.id}`, JSON.stringify(newState));
      return newState; // Trả về trạng thái mới
    });
  };
  
  // Convert tên sách thành slug
  // const bookSlug = slugify(props.books.bookName || '');

  return (
    <div id="cardBook">
      <div id="cardBook_blk1">
        <a href="#" id="cardBook_blk1-link">
          <div className="cardBook_blk1-imgs">
            <img
            //   src={book.image} // Lấy link ảnh từ JSON
              alt={book.title}
              className="cardBook_blk1-image"
            />
          </div>
        </a>
      </div>
      <div id="cardBook_blk2">
        <a href="#" id="cardBook_blk2-link">
          <p className="cardBook_blk2-title">{book.title}</p> {/* Tên sách */}
        </a>
        <div id="cardBook_blk2-bookshelf">
          <div id="CBblock2_bookshelf">
            <p id="CBblock2_bookshelf-price">{formatCurrency(book.price)}</p>
            <p id="CBblock2_bookshelf-listPrice">
              {formatNumberCurrency(book.listPrice)}đ
            </p>
          </div>
          <div id="cardBook_blk2-shop">
            <button
              id="CBblk2_shop-icon1"
              className={`${isFollowed ? 'shop-active' : ''}`}
              onClick={handleFollowBook}
            >
              {isFollowed ? (
                <IoHeartDislikeOutline />
              ) : (
                <MdFavoriteBorder />
              )}
            </button>
            <button id="CBblk2_shop-icon2">
              <BsCartPlus className="btn_cart-book" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
