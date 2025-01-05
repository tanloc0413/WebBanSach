package com.cdweb.springboot.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdweb.springboot.entities.Order;
import com.cdweb.springboot.entities.OrderItem;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.OrderItemRepository;
import com.cdweb.springboot.repository.OrderRepository;
import com.cdweb.springboot.service.OrderService;


@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Transactional
    public Order saveOrder(Order order) {
//        for (OrderItem item : order.getOrderItems()) {
//            item.setOrder(order);
//        }
        return orderRepository.save(order);
    }

	@Override
	public List<Order> getOrderByUser(Long userId) {
		// TODO Auto-generated method stub
	 	User u = new User();
    	u.setId(userId);
        return orderRepository.findByUser(u);
	}
}
