import React from 'react';
import { useSelector } from 'react-redux';
import axiosClient from '../../../../api/axiosClient';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems); // Lấy giỏ hàng từ Redux
    const shippingAddress = useSelector((state) => state.user.shippingAddress); // Lấy địa chỉ từ Redux

    const handleCodPayment = async () => {
        try {
            const response = await axiosClient.post('/payment/cod-payment', {
                orderItems: cartItems,
                shippingAddress, // Địa chỉ giao hàng
            });
            console.log("COD Payment Success:", response);
            alert(`Thanh toán COD thành công. Mã đơn hàng: ${response.orderId}`);
        } catch (error) {
            console.error("COD Payment Error:", error);
            alert("Đã xảy ra lỗi khi thanh toán COD.");
        }
    };

    return (
        <div>
            <h1>Thanh toán COD</h1>
            <button onClick={handleCodPayment}>Thanh toán COD</button>
        </div>
    );
};

export default CheckoutPage;
