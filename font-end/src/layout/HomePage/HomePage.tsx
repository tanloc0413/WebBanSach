import React from 'react';
import '../../css/homePage.css';
import CarouselHome from '../Carousel/CarouselHome';
// import ListBook from './Products/ListBook';
import CardNewBook from '../Cards/CardNewBook';
import Test from '../Test';

function HomePage() {
  const cardList = [
    {
      id: 1,
      title: "2030: Những Xu Hướng Lớn Sẽ Định Hình Thế Giới Tương Lai (Tái Bản 2023)",
      price: 50000,
      listPrice: 45000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 10"
    },
    {
      id: 2,
      title: "Đi Tìm Lẽ Sống (Tái Bản 2023)",
      price: 60000,
      listPrice: 55000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 5"
    },
    {
      id: 3,
      title: "Sức Mạnh Của Thói Quen",
      price: 40000,
      listPrice: 35000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 3"
    },
    {
      id: 1,
      title: "2030: Những Xu Hướng Lớn Sẽ Định Hình Thế Giới Tương Lai (Tái Bản 2023)",
      price: 50000,
      listPrice: 45000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 10"
    },
    {
      id: 2,
      title: "Đi Tìm Lẽ Sống (Tái Bản 2023)",
      price: 60000,
      listPrice: 55000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 5"
    },
    {
      id: 3,
      title: "Sức Mạnh Của Thói Quen",
      price: 40000,
      listPrice: 35000,
      image: "https://mangadex.org/covers/e0c6cde1-232e-45de-8e0d-b6902c1453d0/38588b37-e778-489c-b2df-dd9e411c8c39.jpg",
      episode: "Tập 3"
    },
  ];
  
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
          {cardList.slice(0, 6).map((_, index) => (
            <CardNewBook key={index} />
          ))}
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default HomePage;