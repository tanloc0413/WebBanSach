package com.cdweb.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}