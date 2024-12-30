import React, { useEffect, useRef, useState } from 'react'

import '../../css/descriptionBD.css';


interface BookProps {
    bookId: number;
    description: string;
}

const DescriptionBD: React.FC<BookProps> = ({ description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLongText, setIsLongText] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (descriptionRef.current) {
            // Kiểm tra chiều cao của đoạn mô tả
            const maxHeight = parseFloat(getComputedStyle(descriptionRef.current).lineHeight || '20') * 5; // 5 dòng
            if (descriptionRef.current.scrollHeight > maxHeight) {
                setIsLongText(true); // Nếu chiều cao thực tế > chiều cao tối đa, kích hoạt nút
            }
        }
    }, [description]);

    const descriptionText = description || '';

    return (
        <div id='review_description'>
            <p id='review_description-title'>
                Mô tả sản phẩm
            </p>
            <div id='review_description-block'>
                <p 
                    ref={descriptionRef}
                    className={!isOpen ? 'review_description-show' : 'review_description-hidden'}
                >
                    {descriptionText}
                </p>
            </div>
            {isLongText && (
                <div id='review_btn-block'>
                    <button
                        className='review_btn-seeMore'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Thu gọn' : 'Xem thêm'}
                    </button>
                </div>
            )}
        </div>  
    )
}

export default DescriptionBD;