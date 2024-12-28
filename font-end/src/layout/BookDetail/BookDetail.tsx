import React, { useEffect, useState } from 'react';
import { formatCurrency, formatNumberCurrency } from '../../models/FormatMoney';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import { BsCartPlus } from 'react-icons/bs';
import { IoCartOutline } from 'react-icons/io5';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';


import '../../css/bookDetail.css';
import BookModel from '../../models/BookModel';
import BookImageModel from '../../models/BookImageModel';
import { getAllImageOfTheBooks } from '../../api/ImageBookAPI';
import AvtImage from '../../imgs/avatar books.jpg';
import { slugify } from '../../models/Converts';
import { useParams } from 'react-router-dom';
import { getBookByBookId } from '../../api/BookAPI';
import BookAvt from '../imgs/book-test.jpg';
import EvaluateBD from './EvaluateBD';
import OrderBD from './OrderBD';
import DescriptionBD from './DescriptionBD';
import InforBookDetail from './InforBookDetail';
import ImgBookDetail from './ImgBookDetail';

const BookDetail:React.FC = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [book, setBook] = useState<BookModel | null>(null);
  const[loadingBook, setLoadingBook] = useState(true);
  const[errorBook, setErrorBook] = useState(null);

  // lấy mã sách từ url
  const {bookId} = useParams();

  let bookIdNumber = 0;
  try {
    bookIdNumber = parseInt(bookId + '');
    if(Number.isNaN(bookIdNumber))
    bookIdNumber = 0;
  } catch(error) {
    bookIdNumber = 0;
    console.log('Lỗi: ', error);
  }

  useEffect(() => {
    getBookByBookId(bookIdNumber)
    .then((book) => {
      setBook(book);
      setLoadingBook(false);

    })
    .catch((errorBook) => {
      setErrorBook(errorBook.message);
      setLoadingBook(false);
    })
  }, [bookId]);

  if(loadingBook) {
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

  if(errorBook) {
    <div id='errorImg'>
      <p id='errorImg-text'>
        Gặp lỗi: <b>{errorBook}</b>
      </p>
    </div>
  }

  if(!book) {
    return (
      <div>
        <p>Sách không tồn tại!</p>
      </div>
    )
  }

  return (
    <div id='bookDetail'>
      <div id='bookDetail_block0'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            href="/"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            className='block0_home-text block0-text'
          >
            Trang Chủ
          </Link>
          <Link
            // to={'/sach'}
            href='/sach'
            underline="hover"
            color="inherit"
            sx={{ display: 'flex', alignItems: 'center' }}
            className='block0_book-text block0-text'
          >
            Sách
          </Link>
          <Typography
            sx={{
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center'
            }}
            className='block0_bookName-text block0-text'
          >
            Tiêu đề
          </Typography>
        </Breadcrumbs>
      </div>
      <div id='bookDetail_block1'>
        <div id='bookDetail_blk-infor'>
          <div id='bdBlk1'>
            <ImgBookDetail/>
          </div>
          <div id='bdBlk2'>
              <div id='bdBlock2_review'>
              {/* <DateVN/> */}
                  <div id='review1'>
                      <p id='review_bookName'>
                          Những Trí Tuệ Vĩ Đại - Hawking: Người Đàn Ông Phi Thường, Một Thiên Tài Vĩ Đại Và Cha Đẻ Của Thuyết Vạn Vật
                      </p>
                      <p id='review_nameAuthor'>
                          Tác giả: <a href="#"><span id='nameAuthor'>Nguyễn Nhật Ánh</span></a>
                      </p>
                      <div id='review_number'>
                          <div id='review_number-evalute'>
                              <p id='averageRating'>4.5</p>
                              <Rating
                                  name="half-rating-read"
                                  defaultValue={5}
                                  precision={0.25}
                                  readOnly
                                  className='evalute-start'
                              />
                              <p id='numberReview-text'>(46)</p>
                          </div>
                          <div id='review_symbol'>
                              <p id='review_symbol-hr'>|</p>
                              {/* <hr id='review_symbol-hr'/> */}
                          </div>
                          <div id='review_sold'>
                              <p id='review_sold-text'>Đã bán: <span id='review_sold-number'>10</span></p>
                          </div>
                      </div>
                      <div id='review_price'>
                          <p id='review_price-text'>10.000đ</p>
                          <p id='review_listPrice-text'>20.000đ</p>
                          {/* <p id='review_listPrice-text'></p> */}
                          <div id='review_discount'>
                              <p id='review_discount-text'>100%</p>
                          </div>
                      </div>
                  </div>
                  <div id='review2'>
                      <InforBookDetail/>
                  </div>
                  <div id='review3'>
                      <DescriptionBD/>
                  </div>          
              </div>
              {/* <div id='bdBlock2_order'>
                  <OrderBD/>
              </div> */}
          </div>
          <div id='bdBlk3'>
              <OrderBD/>
          </div>
        </div>
        <div id='bookDetail_evaluate'>
          <EvaluateBD/>
        </div>
      </div>
    </div>
  )
}

export default BookDetail;