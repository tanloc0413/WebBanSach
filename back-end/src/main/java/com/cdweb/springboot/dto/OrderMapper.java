package com.cdweb.springboot.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.cdweb.springboot.entities.Order;
import com.cdweb.springboot.entities.OrderItem;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.entities.User;

public class OrderMapper {

//	@Autowired
//	private UserRepository userRepository;

	public static Order toEntity(OrderDTO dto) {
		Order order = new Order();
        order.setCustomerName(dto.getCustomerName());
        order.setCustomerEmail(dto.getCustomerEmail());
        order.getCustomerMobile(dto.getCustomerMobile());
		order.setPaymentTime(dto.getPaymentTime());
		order.setTransactionId(dto.getTransactionId());
		order.setTotalPrice(dto.getTotalPrice());
		order.setPaymentStatus(dto.getPaymentStatus());
		order.setShippingAddress(dto.getShippingAddress());
		order.setOrderStatus(dto.getOrderStatus());
		User u = new User();
		u.setId(dto.getUserId());
		order.setUser(u);

		// Set the OrderItems
		List<OrderItem> items = dto.getOrderItems().stream().map(OrderMapper::toEntity).collect(Collectors.toList());
		order.setOrderItems(items);

		return order;
	}

	public static OrderItem toEntity(OrderItemDTO dto) {
		OrderItem item = new OrderItem();
		Product product = new Product(); // Assuming Product entity has only an ID field
		product.setId(dto.getProductId());
		item.setProduct(product);
		item.setQuantity(dto.getQuantity());

		return item;
	}

	public static OrderDTO toDto(Order entity) {
		OrderDTO dto = new OrderDTO();
		dto.setPaymentTime(entity.getPaymentTime());
		dto.setTransactionId(entity.getTransactionId());
		dto.setTotalPrice(entity.getTotalPrice());
		dto.setPaymentStatus(entity.getPaymentStatus());
		dto.setShippingAddress(entity.getShippingAddress());
		dto.setOrderStatus(entity.getOrderStatus());
		dto.setUserId(entity.getUser().getId());

		List<OrderItemDTO> items = entity.getOrderItems().stream().map(OrderMapper::toDto).collect(Collectors.toList());
		dto.setOrderItems(items);

		return dto;
	}

	public static OrderItemDTO toDto(OrderItem entity) {
		OrderItemDTO dto = new OrderItemDTO();
		dto.setProductId(entity.getProduct().getId());
		dto.setQuantity(entity.getQuantity());

		return dto;
	}
}
