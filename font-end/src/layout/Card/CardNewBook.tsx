import { formatCurrency, formatNumberCurrency } from '../../models/FormatMoney';

import '../../css/cardNewBook.css';
import BookModel from '../../models/BookModel';
import { useEffect, useState } from 'react';
// import { getTheLastestBook } from '../../api/BookAPI';
import BookImageModel from '../../models/BookImageModel';
import AvtImage from '../../imgs/avatar books.jpg';
import { getAllImageOfTheBooks, getFirstImgBook } from '../../api/ImageBookAPI';

interface BookProps {
  books: BookModel;
}

const CardNewBook: React.FC<BookProps> = (props) => {

  const bookId:number = props.books.bookId;
  const[listImgBook, setListImgBook] = useState<BookImageModel[]>([]);
  const[loadingDataImg, setLoadingDataImg] = useState(true);
  const[errorImg, setErrorImg] = useState(null);

  // Lấy danh sách ảnh
  useEffect(() => {
    // getAllImageOfTheBooks(bookId)
    getFirstImgBook(bookId)
    .then(imageData => {
      setListImgBook(imageData);
      setLoadingDataImg(false);
    })
    .catch(errorImg => {
      // console.error("Lỗi khi lấy ảnh:", errorImg);
      setLoadingDataImg(false);
      setErrorImg(errorImg.message);
    })
  }, [bookId])

  if(loadingDataImg) {
    return (
      <div id='loadingDataNew'>
        <p id='loadingDataImgNew-text'>
          Đang tải dữ 
        </p>
        <p id='loadingDataImgNew-text'>
          liệu của sách!
        </p>
      </div>
    )
  }

  if(errorImg) {
    <div id='errorImgNew'>
      <p id='errorImgNew-text'>
        Gặp lỗi: <b>{errorImg}</b>
      </p>
    </div>
  }

  // lấy ảnh đại diện
  let dataImage:string = listImgBook[0]?.dataImage || AvtImage;

  // tính số % giảm
  const price = props.books.price ?? 0;
  const listPrice = props.books.listPrice ?? 0;
  let discountPercentage = 0;
  
  if (listPrice > 0 && price < listPrice) {
    discountPercentage = ((listPrice - price) / listPrice) * 100;
  }

  const discountText = `-${Math.round(discountPercentage)}%`;

  return (
    <div id='cardNewBook'>
      <div id='cardNewBook_blk1'>
        <a href="#" id='cardNewBook_blk1-link'>
          <div className='cardNewBook_blk1-imgs'>
            {!loadingDataImg && !errorImg && (
              <img
                src={dataImage}
                alt='Ảnh sách'
                className='cardNewBook_blk1-image'
              />
            )}
            
            {/* <div id='numberEp'>
              <p>Tập 10</p>
            </div> */}
          </div>
        </a>
      </div>
      <div id='cardNewBook_blk2'>
        <a href="#" id='cardNewBook_blk2-link'>
          <p className='cardNewBook_blk2-title'>
            {props.books.bookName}
          </p>
        </a>
        <div id='cardNewBook_blk2-bookshelf'>
          <div id='blk2_bookshelf'>
            <div id='blk2_bookshelf-price'>
              <p id='bookshelf_price'>{formatCurrency(props.books.price ?? 0)}</p>
              <div id='bookshelf_percents'>
                <p id='bookshelf_percents-text'>{discountText}</p>
              </div>
            </div>
            <p id='blk2_bookshelf-listPrice'>
              {formatNumberCurrency(props.books.listPrice ?? 0)}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CardNewBook;

