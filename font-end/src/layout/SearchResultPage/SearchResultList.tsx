import React, { useEffect, useState } from 'react'
import { findBook, getTheBookPagination } from '../../api/BookAPI';
import BookModel from '../../models/BookModel';

import '../../css/searchResult.css';
import { PaginationPage } from '../Utils/PaginationPage';
import CardSearch from '../Card/CardSearch';
// import { useLocation, useParams } from 'react-router-dom';
import SearchNotFound from '../../imgs/search not found.gif';

interface SearchResultProps {
    searchKeyword: string;
    // categoryName: string;
}

function SearchResultList({ searchKeyword }: SearchResultProps) {
    // Xử lý dữ liệu
    const[listBook, setListBook] = useState<BookModel[]>([]);
    const[loadingData, setLoadingData] = useState(true);
    const[error, setError] = useState(null);

    // Phân trang
    const[currentPage, setCurrentPage] = useState(1);
    const[totalPage, setTotalPage] = useState(0);
    const[totalBook, setTotalBook] = useState(0);
 
    // Lấy dữ liệu các cuốn sách
    useEffect(() => {
        if(searchKeyword === '') {
            getTheBookPagination(currentPage - 1)
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
        }
        else {
            // Tìm kiếm theo từ khóa
            findBook(searchKeyword)
            .then(rs => {
                console.log("API của sách:", rs.result);
                // Lấy ra danh sách book
                setListBook(rs.result);
                setTotalPage(rs.totalPage);
                setLoadingData(false);
            })
            .catch(error => {
                setError(error.message);
            })
        }
    }, [
        currentPage, 
        searchKeyword 
        // categoryName
    ]);


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

    // Xử lý tìm kiếm
    const searchResult = listBook.length === 0;
    if(searchResult) {
        return (
            <div id='searchResultImg'>
                <div id='searchResultImg_block1'>
                    <p id='searchResultImg-text'>
                        Từ <span id='searchResultImg-color'>"{searchKeyword}"</span> bạn tìm không có kết quả!
                    </p>
                </div>
                <div id='searchResultImg_block2'>
                    <img
                        src={SearchNotFound}
                        alt="không có kết quả tìm kiếm"
                        id='searchResultImg-img'
                    />
                </div>
            </div>
        )
    }


    return (
        <div id='searchResult'>
            {
                !searchResult && (
                    <div id='searchResult-block'>
                        <div id='searchResult-blk1'>
                            <p id='sR-title'>
                                Kết quả tìm kiếm:
                            </p>
                            <p id='sR-text'>{searchKeyword}</p>
                        </div>
                        <div id='searchResult_blk2'>
                            <div id='searchResult_blk2-list'>
                                { 
                                    listBook.map((books) => (
                                        <CardSearch
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
                )
                
            }
        </div>
    )
}

export default SearchResultList;