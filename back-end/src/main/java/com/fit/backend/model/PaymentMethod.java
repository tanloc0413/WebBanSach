package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "Payment_Method")
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "paymentMethod_ID")
    private int idPaymentMethod; // mã phương thức thanh toán

    @Column(name = "paymentMethod_name")
    private String namePaymentMethod; // tên phương thức thanh toán

    @Column(name = "description")
    private String description;

    @Column(name = "payment_cost")
    private double paymentCost; // chi phí thanh toán

    @OneToMany(mappedBy = "paymentMethod", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Order> listOrder;
}
