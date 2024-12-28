import React, { useEffect, useRef, useState } from 'react'

import '../../css/descriptionBD.css';

function DescriptionBD() {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div id='review_description'>
            <p id='review_description-title'>
                Mô tả sản phẩm
            </p>
            <div id='review_description-block'>
                <p className={!isOpen ? 'review_description-show' : 'review_description-hidden'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas illum natus cupiditate aut delectus debitis reprehenderit quasi placeat consectetur! Mollitia iure neque inventore odio libero. Magnam quibusdam recusandae laboriosam molestias?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quos incidunt similique vitae cumque quam blanditiis unde fugiat voluptate numquam repellat harum maiores accusantium, provident cum. Qui quidem cumque et.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit qui totam cum fugit quod esse vel, animi ea perferendis quas, consequuntur ipsa, nisi eum deleniti voluptatibus quo accusantium vero.
        
                </p>

            </div>
            <div id='review_btn-block'>
                <button
                    // className={isOpen ? 'review_btn-seeMore2' : 'review_btn-seeMore1'}
                    className='review_btn-seeMore'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'Thu gọn' : 'Xem thêm'}
                </button>
                    
            </div>
        </div>  
    )
}

export default DescriptionBD;