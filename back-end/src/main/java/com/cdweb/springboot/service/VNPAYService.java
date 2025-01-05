package com.cdweb.springboot.service;

import java.util.List;

import com.cdweb.springboot.dto.OrderItemDTO;

import jakarta.servlet.http.HttpServletRequest;

public interface VNPAYService {
//	public String createOrder(HttpServletRequest request, Long userId, String customerName, String customerEmail,
//			String customerMobile, String shippingAddress, List<OrderItemDTO> orderItems, int orderTotal,
//			String orderInfo, String baseUrl);
	public String createOrder(HttpServletRequest request,int orderTotal,
			String orderInfo, String baseUrl);

	public int orderReturn(HttpServletRequest request);

}
