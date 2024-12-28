import React from 'react';

import '../../css/orderBD.css';

function OrderBD() {
  return (
    <div id='order_block'>
        <div id='order_block-text'>
            <p id='order_block-title'>
                Đặt hàng
            </p>
        </div>
        <div id='order_block-buy'>
            <div id='order_addQuantity-text'>
                <p id='order_addQuantity-title'>Số lượng</p>
            </div>
            <div id='order_addQuantity'>
                <button id='order_addQuantity-btn'>-</button>
                <input
                    type='number'
                    id='order_addQuantity-input'
                />
                <button id='order_addQuantity-btn'>+</button>
            </div>
        </div>
        <div id='order_provisional'>
            <p id='order_provisional-text'>Tạm tính</p>
            <p id='order_provisional-number'>100.000đ</p>
        </div>
        <div id='order_bdBtn'>
            <button id='order_bdBtn-buyNow'>
                Mua ngay
            </button>
            <button id='order_bdBtn-addCart'>
                Thêm vào giỏ hàng
            </button>
        </div>
    </div>
  )
}

export default OrderBD;