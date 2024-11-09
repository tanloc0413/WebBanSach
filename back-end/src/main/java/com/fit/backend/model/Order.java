package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Date;
import java.util.List;

@Entity
@Data
@Table(name = "Order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_ID")
    private int idOrder; // mã đơn hàng

    @Column(name = "date_created")
    private Date dateCreated; // ngày tạo giỏ hàng

    @Column(name = "shipping_address")
    private String shippingAddress; // địa chỉ giao hàng

    @Column(name = "purchase_address")
    private String purchaseAddress; // địa chỉ mua hàng

    @Column(name = "total_product")
    private double totalProduct; // tổng tiền sản phẩm

    @Column(name = "total_shipping")
    private double totalShipping; // tổng tiền giao hàng

    @OneToMany(mappedBy = "orderDetail", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<OrderDetail> listOrderDetail;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "user_ID", nullable = false)
    private User user;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "payment_method", nullable = false)
    private PaymentMethod paymentMethod; // hình thức thanh toán

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "delivery_method", nullable = false)
    private DeliveryMethod deliveryMethod; // hình thức vận chuyển
}
