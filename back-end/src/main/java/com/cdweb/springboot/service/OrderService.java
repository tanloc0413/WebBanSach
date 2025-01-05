package com.cdweb.springboot.service;

import java.util.List;

import com.cdweb.springboot.entities.Order;

public interface OrderService {
    public Order saveOrder(Order order);
    public List<Order> getOrderByUser(Long userId);
}
