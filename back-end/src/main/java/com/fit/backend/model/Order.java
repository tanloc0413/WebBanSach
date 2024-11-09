package com.fit.backend.model;

import lombok.Data;
import java.sql.Date;
import java.util.List;

@Data
public class Order {
    private int idOrder; // mã đơn hàng
    private Date dateCreated; // ngày tạo giỏ hàng
    private String shippingAddress; // địa chỉ giao hàng
    private String purchaseAddress; // địa chỉ mua hàng
    private double totalProduct; // tổng tiền sản phẩm
    private double totalShipping; // tổng tiền giao hàng
    private List<OrderDetail> listOrderDetail;
    private User user;
    private PaymentMethod paymentMethod; // hình thức thanh toán
    private DeliveryMethod deliveryMethod; // hình thức vận chuyển
}