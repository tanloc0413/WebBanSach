import React, { useEffect, useState } from 'react';
import { formatCurrencyBD, formatNumberCurrency } from '../../models/FormatMoney';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

import '../../css/bookDetail.css';
import BookModel from '../../models/BookModel';
import { slugify } from '../../models/Converts';
import { getBookByBookId } from '../../api/BookAPI';
import EvaluateBD from './EvaluateBD';
import OrderBD from './OrderBD';
import DescriptionBD from './DescriptionBD';
import InforBookDetail from './InforBookDetail';
import ImgBookDetail from './ImgBookDetail';
import FormatNumber from './FormatNumber';
import AuthorModel from '../../models/AuthorModel';
import { getAuthorName } from '../../api/AuthorAPI';

const BookDetail:React.FC = () => {
  // danh sách về sách
  const [book, setBook] = useState<BookModel | null>(null);
  const [loadingBook, setLoadingBook] = useState(true);
  const [errorBook, setErrorBook] = useState(null);
  // danh sách về tác giả
  const [author, setAuthor] = useState<AuthorModel[]>([]);
  const [loadingAuthor, setLoadingAuthor] = useState(true);
  const [errorAuthor, setErrorAuthor] = useState<string | null>(null);
  
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

  // lấy danh sách tác giả
  useEffect(() => {
    getAuthorName(bookIdNumber)
    .then((authors) => {
      setAuthor(authors);
      setLoadingAuthor(false);
    })
    .catch((errorAuthor) => {
      setErrorAuthor(errorAuthor.message);
      setLoadingAuthor(false);
    });
  }, [bookId]);

  if(loadingBook ) {
    return (
      <div id='loadingBD'>
        <CircularProgress
          id='loadingBD-text'
        />
      </div>
    )
  }

  if(errorBook || errorAuthor) {
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

  // tính số % giảm
  const price = book.price ?? 0;
  const listPrice = book.listPrice ?? 0;
  let discountPercentage = 0;
  
  if (listPrice > 0 && price < listPrice) {
    discountPercentage = ((listPrice - price) / listPrice) * 100;
  }

  const discountText = `-${Math.round(discountPercentage)}%`;

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
            className='block0_bookName-text'
          >
            {book.bookName}
          </Typography>
        </Breadcrumbs>
      </div>
      <div id='bookDetail_block1'>
        <div id='bookDetail_blk-infor'>
          <div id='bdBlk1'>
            <ImgBookDetail bookId={bookIdNumber}/>
          </div>
          <div id='bdBlk2'>
            <div id='bdBlock2_review'>
            {/* <DateVN/> */}
              <div id='review1'>
                <p id='review_bookName'>
                  {book.bookName}
                </p>
                <p id='review_nameAuthor'>
                  Tác giả:
                  {loadingAuthor ? (
                    <p id='loadingDBAuthor'></p>
                  ) : (
                    author.map((author) => (
                      <a
                        key={author.authorId}
                        href={`/tac-gia/${author.authorId}`}
                      >
                        <span id="nameAuthor"> {author.authorName}</span>
                      </a>
                    ))
                  )}
                </p>
                <div id='review_number'>
                  <div id='review_number-evalute'>
                    <p id='averageRating'>{FormatNumber(book.evaluate ?? 0)}</p>
                    <Rating
                      name="half-rating-read"
                      defaultValue={Math.round(book.evaluate ?? 0)}
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
                    <p id='review_price-text'>
                      {formatCurrencyBD(book.price ?? 0)}<p className='bdFormat'>đ</p>
                    </p>
                    <p id='review_listPrice-text'>
                      {formatNumberCurrency(book.listPrice ?? 0)}đ
                    </p>
                    {/* <p id='review_listPrice-text'></p> */}
                    <div id='review_discount'>
                      <p id='review_discount-text'>{discountText}</p>
                    </div>
                </div>
              </div>
              <div id='review2'>
                <InforBookDetail/>
              </div>
              <div id='review3'>
                <DescriptionBD
                  bookId={bookIdNumber}
                  description={book.description || ''}
                />
              </div>          
            </div>
          </div>
          <div id='bdBlk3'>
            <OrderBD
              bookId={bookIdNumber}
              currentQuantity={book.quantity ?? 0}
              priceNumber={book.price ?? 0}
            />
          </div>
        </div>
        <div id='bookDetail_evaluate'>
          <EvaluateBD bookId={bookIdNumber}/>
        </div>
      </div>
    </div>
  )
}

export default BookDetail;