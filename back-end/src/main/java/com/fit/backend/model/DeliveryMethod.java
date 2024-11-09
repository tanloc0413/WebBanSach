package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "Delivery_Method")
public class DeliveryMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "deliveryMethod_ID")
    private int idDeliveryMethod; // mã phương thức giao hàng

    @Column(name = "deliveryMethod_name")
    private String nameDeliveryMethod; // tên phương thức giao hàng

    @Column(name = "description")
    private String description;

    @Column(name = "delivery_cost")
    private double deliveryCost;

    @OneToMany(mappedBy = "deliveryMethod", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Order> order;
}
