import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { FiMoreVertical } from "react-icons/fi";


import '../../css/evaluateBD.css';


function EvaluateBD() {

    return (
        <div id='evaluateBD'>   
            <div id='evaluateBD_cmt'>
                <form action='' id='evaluateBD_form'>
                    <p id='evaluateBD_cmt-title'>Đánh giá sản phẩm</p>
                    <div id='evaluateBD_cmt-start'>
                        <Rating
                            name='half-rating'
                            defaultValue={5}
                            precision={1}
                            className='evaluateBD-start'
                        />
                    </div>                
                    <div id='evaluateBD_input'>
                        <textarea
                            // type='text' 
                            id='evaluateBD_input-text'
                            placeholder='Nhập đánh giá của bạn...'
                        >
                        </textarea>
                    </div>
                    <div id='evaluateBD_btn'>
                        <button
                            id='evaluateBD_btn-submit'
                            type='submit'
                        >
                            Gửi đánh giá
                        </button>
                    </div>
                </form>
            </div>
            <div id='evaluateBD_feedback'>
                <p id='evaluateBD_feedback-title'>Đánh giá của khách hàng</p>
                <div id='evaluateBD_feedback-block'>
                    <div id='feedback_user'>
                        <Avatar
                            alt="Avt"
                            src="https://genk.mediacdn.vn/139269124445442048/2023/12/6/naruto-6-5448-1701839899156-1701839899299913130408.jpg"
                            sx={{ width: 45, height: 45 }}
                            className='feedback_user-avt'
                        />
                        <div id='feedback_user-blk'>
                            <p id='feedback_user-name'>Trần Tấn Lộc</p>
                            <Rating
                                name="half-rating-read"
                                defaultValue={5}
                                precision={0.5}
                                readOnly
                                className='feedback_user-ratting'
                            />
                        </div>
                    </div>
                    <div id='feedback_comment'>
                        <div id='feedback_comment-blk1'>
                            <p id='feedback_comment-text'>
                                Quá là ưng shop ở khâu đóng gói luôn, tinh tế bao chống sốc cho gói kẹo ko vỡ, túi zip niêm phong, hương vị ngon sẽ quay lại mua tiếp
                            </p>

                        </div>
                        <div id='feedback_comment-btn2'>
                            <FiMoreVertical
                                className='feedback_comment-button'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvaluateBD;