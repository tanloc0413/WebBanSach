import React, { useState } from 'react';

import '../../css/orderBD.css';
import { formatCurrencyBD } from '../../models/FormatMoney';

interface BookProps {
    bookId: number;
    currentQuantity: number;
    priceNumber: number;
}


const OrderBD: React.FC<BookProps> = ({ currentQuantity, priceNumber }) => {
    const [quantity, setQuantity] = useState(1);

    // tăng số lượng
    const increaseQuantity = () => {
        // const currentQuantity = (quantity&&quantity?quantity:0);
        if (quantity < currentQuantity) {
            setQuantity(quantity + 1);
        }
    };

    // giảm số lượng
    const reduceQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // thay đổi dữ liệu
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuatity = parseInt(e.target.value);
        if(!isNaN(newQuatity) && newQuatity >= 1 && newQuatity <= currentQuantity) {
            setQuantity(newQuatity);
        } 
    }

    // tạm tính
    const pvnNumber = priceNumber * quantity;

    // thêm vào giỏ hàng
    const handleAddCart = () => {

    }

    // mua ngay
    const handleBuyNow = () => {

    }

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
                    <button
                        id='order_addQuantity-btn'
                        onClick={reduceQuantity}
                    >
                        -
                    </button>
                    <input
                        type='number'
                        id='order_addQuantity-input'
                        value={quantity}
                        onChange={handleQuantityChange}
                        // onChange={handleInputChange}
                        min={1}
                    />
                    <button
                        id='order_addQuantity-btn'
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
            </div>
            <div id='order_provisional'>
                <p id='order_provisional-text'>Tạm tính</p>
                <p id='order_provisional-number'>{formatCurrencyBD(pvnNumber)}đ</p>
            </div>
            <div id='order_bdBtn'>
                <button
                    id='order_bdBtn-buyNow'
                    onClick={handleBuyNow}
                >
                    Mua ngay
                </button>
                <button
                    id='order_bdBtn-addCart'
                    onClick={handleAddCart}
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    )
}

export default OrderBD;