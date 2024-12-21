
import React, { useEffect, useState } from "react";
import { formatCurrency, formatNumberCurrency } from '../../models/FormatMoney';
import { MdFavoriteBorder } from "react-icons/md";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

import '../../css/cardBookHome.css';
import BookModel from "../../models/BookModel";
import BookImageModel from "../../models/BookImageModel";
import { getAllImageOfTheBooks } from "../../api/ImageBookAPI";


interface BookProps {
  books: BookModel;
}

const CardBookHome: React.FC<BookProps> = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const bookId:number = props.books.bookId;
  const[listImgBook, setListImgBook] = useState<BookImageModel[]>([]);
  const[loadingData, setLoadingData] = useState(true);
  const[error, setError] = useState(null);

  // Format tiền
  const handleFollowBook = () => {
    setIsFollowed((prevFollowed) => {
      const newState = !prevFollowed;
      // Lưu trạng thái theo dõi vào localStorage (chuyển thành chuỗi)
      localStorage.setItem(`followed-${props.books.bookName}`, JSON.stringify(newState));
      return newState;
    });
  };

  // Lấy danh sách ảnh
  useEffect(() => {
    getAllImageOfTheBooks(bookId)
    .then(imageData => {
      console.log("Ảnh đã tải lên:", imageData);
      setListImgBook(imageData);
      setLoadingData(false);
      
    })
    .catch(error => {
      console.error("Lỗi khi lấy ảnh:", error);
      setLoadingData(false);
      setError(error.message);
    })
  }, [])

  if(loadingData) {
    return (
      <div id='loadingData'>
        <p id='loadingData-text'>
          Đang tải dữ liệu ảnh!
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
  
  // lấy ảnh đại diện
  let dataImage:string = "";
  if(listImgBook[0] && listImgBook[0].dataImage) {
    dataImage = listImgBook[0].dataImage;
  }
  

  return (
    <div id="cardHome">
      <div id="cardHome_blk1">
        <a href="#" id="cardHome_blk1-link">
          <div className="cardHome_blk1-imgs">
            {/* {listImgBook[0].dataImage && */}
            {/* {dataImage && */}
            <img
              // src={`${listImgBook[0].dataImage}`}
              src={dataImage}
              alt="Ảnh sách"
              className="cardHome_blk1-image"
            />
            {/* } */}
            {/* {episode && (
              <div id="numberEp">
                <p>{episode}</p>
              </div>
            )} */}
          </div>
        </a>
      </div>
      <div id="cardHome_blk2">
        <a href="#" id="cardHome_blk2-link">
          <p className="cardHome_blk2-title">
            {props.books.bookName}
          </p>
        </a>
        <div id="cardHome_blk2-bookshelf">
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
              {/* <IoCartOutline /> */}
              <BsCartPlus className="btn_cart-home"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBookHome;