import React from 'react';
// import { IoCartOutline } from "react-icons/io5";
// import { MdFavoriteBorder } from "react-icons/md";

import '../../css/cardNewBook.css';

// Định dạng tiền tệ
function formatCurrency(amount: number): JSX.Element {
  const formattedAmount = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  .format(amount)
  .replace('₫', '');

  return (
    <span>
      {formattedAmount}
      <span className="currency-symbol">đ</span>
    </span>
  );
}

function formatNumberCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  .format(amount)
  .replace(/\s?₫/g, '');
}

export default function CardNewBook() {
  const price = 50000;
  const listPrice = 45000;

  return (
    <div id='cardNewBook'>
      <div id='cardNewBook_blk1'>
        <a href="#" id='cardNewBook_blk1-link'>
          <div className='cardNewBook_blk1-imgs'>
            <img
              src='https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg'
              alt='Ảnh sách'
              className='cardNewBook_blk1-image'
            />
            <div id='numberEp'>
              <p>Tập 10</p>
            </div>
          </div>
        </a>
      </div>
      <div id='cardNewBook_blk2'>
        <a href="#" id='cardNewBook_blk2-link'>
          <p className='cardNewBook_blk2-title'>
            2030: Những Xu Hướng Lớn Sẽ Định Hình Thế Giới Tương Lai (Tái Bản 2023)
          </p>
        </a>
        <div id='cardNewBook_blk2-bookshelf'>
          <div id='blk2_bookshelf'>
            <div id='blk2_bookshelf-price'>
              <p id='bookshelf_price'>{formatCurrency(price)}</p>
              <div id='bookshelf_percents'>
                <p id='bookshelf_percents-text'>-50%</p>
              </div>
            </div>
            <p id='blk2_bookshelf-listPrice'>{formatNumberCurrency(listPrice)}</p>
          </div>
          {/* <div id='blk2_shop'>
            <MdFavoriteBorder id='blk2_shop-icon1'/>
            <IoCartOutline id='blk2_shop-icon2'/>
          </div> */}
        </div>
      </div>
    </div>
  )
}


