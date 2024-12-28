import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';


import '../css/bookDetail.css';
import DateVN from '../models/DateVN';
import ImgBookDetail from './BookDetail/ImgBookDetail';
import InforBookDetail from './BookDetail/InforBookDetail';
import DescriptionBD from './BookDetail/DescriptionBD';
import EvaluateBD from './BookDetail/EvaluateBD';
import OrderBD from './BookDetail/OrderBD';



function TestBook() {
    const [value, setValue] = useState<number | null>(5);

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
                        {/* <DateVN/> */}
                        <div id='bdBlock2_review'>
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

export default TestBook;