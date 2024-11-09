package com.fit.backend.model;

import lombok.Data;

@Data
public class CartDetail {
    private long cartDetail; //
    private int quantity; // số lượng
    private double price; // giá bán
    private Book book;
    private Cart cart;
}
