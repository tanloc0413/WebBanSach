import React from 'react'

import '../../css/inforBookDetail.css'

function InforBookDetail() {
    return (
        <div id='review_infor'>
            <p id='review_infor-title'>
                Thông tin chi tiết
            </p>
            <div id='review_infor-block'>
                <div id='review_cpn'>
                    <p className='review_cpn-text review_infor-text'>
                        Công ty phát hành
                    </p>
                    <p className='review_cpn-name review_infor-text'>
                        1980 Books
                    </p>
                </div>
                <div id='review_rlsDate'>
                    <p className='review_rlsDate-text review_infor-text'>
                        Ngày Phát hành
                    </p>
                    <p className='review_rlsDate-time review_infor-text'>
                        2024-07-01 00:00:00
                    </p>
                </div>
                <div id='review_size'>
                    <p className='review_size-text review_infor-text'>
                        Kích thước
                    </p>
                    <p className='review_size-number review_infor-text'>
                        13 x 20.5 cm
                    </p>
                </div>
                <div id='review_coverType'>
                    <p className='review_coverType-text review_infor-text'>
                        Loại bìa
                    </p>
                    <p className='review_coverType-name review_infor-text'>
                        Bìa mềm
                    </p>
                </div>
                <div id='review_nPage'>
                    <p className='review_nPage-text review_infor-text'>
                        Số trang
                    </p>
                    <p className='review_nPage-number review_infor-text'>
                        236
                    </p>
                </div>
                <div id='review_plgHouse'>
                    <p className='review_plgHouse-text review_infor-text'>
                        Nhà xuất bản
                    </p>
                    <p className='review_plgHouse-name review_infor-text'>
                        Nhà Xuất Bản Dân Trí
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InforBookDetail;