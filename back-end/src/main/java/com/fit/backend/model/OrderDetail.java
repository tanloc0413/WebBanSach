package com.fit.backend.model;

import lombok.Data;

@Data
public class OrderDetail {
    private long orderDetail;
    private int quantity;
    private double price;
    private Book book;
    private Order order;
}
