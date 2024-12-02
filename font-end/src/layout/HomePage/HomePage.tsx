import React from 'react';
import '../../css/homePage.css';
import CarouselHome from '../Carousel/CarouselHome';
// import ListBook from './Products/ListBook';
import Test from '../Test';

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
          f
        </div>
      </div>
    </div>
  )
}

export default HomePage;