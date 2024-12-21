import React from 'react';

import '../../css/homePage.css';
import CarouselHome from '../Carousel/CarouselHome';
import CardNewBook from '../Cards/CardNewBook';
import ListBookHome from './ListBookHome';
import listBookJson from '../../json/listBook.json';

function HomePage() {
  
  return (
    <div id='homePage'>
      <div id='carouse-home'>
        <CarouselHome/>
      </div>
      <div id='new-book'>
        {/* <ListBook/> */}
        {/* <Test/> */}
        <div id='blk_newBook'>
          <div id='newBook_title'>
            <div id='newBook_title1'>
              <p id='newBook_title1-text'>
                Sách Mới Nhất
              </p>
            </div>
            <div id='newBook_title2'>
              <a href='#' id='newBook_title2-link'>
                <p className='title2_link-text'>Xem tất cả</p>
                <i className="fa-solid fa-angle-right title2_link-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div id='newBook_block'>
          {/* <CardNewBook/> */}
          {listBookJson.slice(0, 6).map((_, index) => (
            <CardNewBook key={index} />
          ))}
        </div>
      </div>
      <div id='list-books'>
        <ListBookHome/>
      </div>
    </div>
  )
}

export default HomePage;