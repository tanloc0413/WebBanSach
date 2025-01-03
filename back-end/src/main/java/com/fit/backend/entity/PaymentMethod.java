package com.fit.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "payment_method")
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pm_id")
    private int paymentMethodId; // mã phương thức thanh toán

    @Column(name = "pm_name")
    private String paymentMethodName; // tên phương thức thanh toán

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
