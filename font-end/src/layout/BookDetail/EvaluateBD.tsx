import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { FiMoreVertical } from "react-icons/fi";


import '../../css/evaluateBD.css';
import { getEvaluateOfTheBook } from '../../api/EvaluateAPI';
import EvaluateModel from '../../models/EvaluateModel';


interface BookProps {
    bookId: number;
}

const EvaluateBD: React.FC<BookProps> = (props) => {
    const bookId:number = props.bookId;
    
    const [listEvaluate, setListEvaluate] = useState<EvaluateModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lấy danh sách
    useEffect(() => {
        getEvaluateOfTheBook(bookId)
        .then(listEvaluate => {
            setListEvaluate(listEvaluate);
            setLoading(false);
        })
        .catch(error => {
            // console.error("Lỗi khi lấy ảnh:", errorImg);
            setLoading(false);
            setError(error.message);
        })
    }, []);


    if(loading) {
        return (
          <div id='loadingData'>
            <p id='loadingDataImg-text'>
              Đang tải dữ liệu của sách!
            </p>

          </div>
        )
    }
    
    if(error) {
        <div id='errorImg'>
          <p id='errorImg-text'>
            Gặp lỗi: <b>{error}</b>
          </p>
        </div>
    }

    // đánh giá
    // const renderRating = (point: number) => {
    //     const start = [];
    //     for(let i = 1; i <= 5; i++) {
    //         if(i <= point) {
    //             start.push(
    //                 <Rating
    //                     name="half-rating-read"
    //                     defaultValue={evaluateBook.ratingPoints}
    //                     precision={0.5}
    //                     readOnly
    //                     className='feedback_user-ratting'
    //                 />
    //             )
    //         } else {
    //             start.push(
    //                 <Rating
    //                     name="half-rating-read"
    //                     defaultValue={evaluateBook.ratingPoints}
    //                     precision={0.5}
    //                     readOnly
    //                     className='feedback_user-ratting'
    //                 />
    //             )
    //         }
    //     }
    // }

    return (
        <div id='evaluateBD'>   
            <div id='evaluateBD_cmt'>
                <form action='' id='evaluateBD_form'>
                    <p id='evaluateBD_cmt-title'>Đánh giá sản phẩm</p>
                    <div id='evaluateBD_cmt-start'>
                        <Rating
                            name='half-rating'
                            defaultValue={5}
                            precision={0.5}
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
                <div id='evaluateBD_feedback-blk'>
                    {
                        listEvaluate.map((evaluateBook, index) => (
                            <div id='evaluateBD_feedback-block' key={index}>
                                <div id='feedback_user'>
                                    <Avatar
                                        alt="Avt"
                                        src="https://genk.mediacdn.vn/139269124445442048/2023/12/6/naruto-6-5448-1701839899156-1701839899299913130408.jpg"
                                        sx={{ width: 45, height: 45 }}
                                        className='feedback_user-avt'
                                    />
                                    <div id='feedback_user-blk'>
                                        <p id='feedback_user-name'>{evaluateBook.userId}</p>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={evaluateBook.ratingPoints}
                                            precision={0.5}
                                            readOnly
                                            className='feedback_user-ratting'
                                        />
                                    </div>
                                </div>
                                <div id='feedback_comment'>
                                    <div id='feedback_comment-blk1'>
                                        <p id='feedback_comment-text'>
                                            {evaluateBook.comment}
                                        </p>
                                    </div>
                                    <div id='feedback_comment-btn2'>
                                        <FiMoreVertical
                                            className='feedback_comment-button'
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EvaluateBD;