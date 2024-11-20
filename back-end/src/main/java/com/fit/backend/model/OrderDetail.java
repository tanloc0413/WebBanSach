package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "order_detail")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_detail_id")
    private long idOrderDetail;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "price")
    private double price;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;
}
