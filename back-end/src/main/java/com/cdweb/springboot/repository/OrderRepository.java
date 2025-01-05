package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.Order;
import com.cdweb.springboot.entities.User;


public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByUser(User u);
}
