import React, { useEffect, useState } from 'react';

import '../../css/listBooks.css';
import { CiFilter } from "react-icons/ci";
import CardBook from '../Card/CardBook';
import BookModel from '../../models/BookModel';
import { getAllTheBookPagination } from '../../api/BookAPI';
import Card from '../Card/Card';
import { PaginationPage } from '../Utils/PaginationPage';

const ListBook: React.FC = () => {
  const[listBook, setListBook] = useState<BookModel[]>([]);
  const[loadingData, setLoadingData] = useState(true);
  const[error, setError] = useState(null);

  // Phân trang
  const[currentPage, setCurrentPage] = useState(1);
  const[totalPage, setTotalPage] = useState(0);
  const[totalBook, setTotalBook] = useState(0);
 
  // Lấy dữ liệu các cuốn sách
  useEffect(() => {
    getAllTheBookPagination(currentPage - 1)
    .then(rs => {
      // In danh sách các quyển sách
      console.log("API của sách:", rs.result);
      // Lấy ra danh sách book
      setListBook(rs.result);
      setTotalPage(rs.totalPage);
      setLoadingData(false);
    })
    .catch(error => {
      setError(error.message);
    })
  }, [currentPage]);

  // Load dữ liệu các quyển sách
  if(loadingData) {
    return (
      <div id='blk_loadingData'>
        <div id='loadingData'>
          <p id='loadingData-text'>
            Đang tải dữ
          </p>
          <p id='loadingData-text'>
            liệu của sách!
          </p>
        </div>
      </div>      
    )
  }
  
  // Báo lỗi khi lấy dữ liệu ra không được
  else if (error) {
    return (
      <div id='blk_error'>
        <div id='error'>
          <p id='error-text'>
            Gặp lỗi: <b>{error}</b>
          </p>
        </div>
      </div>
    )
  }

  // Phân trang
  const pgnPage = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <div id='listAllBook'>
      <div id='listAllBook_block1'>
        <div id='LABook1'>
          <div id='LABook1_block1'>
            <p id='LABook1_block1-text'>
              Sách
            </p>
          </div>
          <div id='LABook1_block2'>
            <CiFilter className='LABook1-icon'/>
          </div>
        </div>
      </div>
      <div id='listAllBook_block2'>
        <div id='LABook2'>
          <div id='LABook2_blk1'>
            vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          </div>
          <div id='LABook2_blk2'>
            <div id='LABook2_blk2-list'>
              { 
                listBook.map((books) => (
                  <CardBook
                    key={books.bookId}
                    books={books} 
                  />
                ))
              }
            </div>          
            <PaginationPage
              currentPage={currentPage}
              totalPage={totalPage}
              pgnPage={pgnPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListBook;