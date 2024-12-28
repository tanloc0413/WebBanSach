import React from 'react'

import '../../css/imgBookDetail.css';
import BookAvt from '../../imgs/book-test.jpg';

function ImgBookDetail() {
    return (
        <div id='bdBlock1'>
            <div id='bdBlock1_avt-big'>
                <img
                    src={BookAvt}
                    alt='ảnh bìa sách'
                    id='bdBlock1_avt-img'
                />
            </div>
            <div id='bdBlock1_img-small'>
                <div id='bdImg_block'>
                    <div id='bdImg_block-img'>
                        <img 
                            src={BookAvt}
                            alt='ảnh sách thêm'
                            id='bdImg-img'
                        />
                    </div>
                </div>
                <div id='bdImg_block'>
                    <div id='bdImg_block-img'>
                        <img 
                            src={BookAvt}
                            alt='ảnh sách thêm'
                            id='bdImg-img'
                        />
                    </div>
                </div>
                <div id='bdImg_block'>
                    <div id='bdImg_block-img'>
                        <img 
                            src={BookAvt}
                            alt='ảnh sách thêm'
                            id='bdImg-img'
                        />
                    </div>
                </div>
                <div id='bdImg_block'>
                    <div id='bdImg_block-img'>
                        <img 
                            src={BookAvt}
                            alt='ảnh sách thêm'
                            id='bdImg-img'
                        />
                    </div>
                </div>
                <div id='bdImg_block'>
                    <div id='bdImg_block-img'>
                        <img 
                            src={BookAvt}
                            alt='ảnh sách thêm'
                            id='bdImg-img'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgBookDetail;