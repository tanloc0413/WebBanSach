package com.cdweb.springboot.dto;

import java.util.List;

public class OrderDTO {
	
    private Long userId;
    private String customerName;
    private String customerEmail;
    private String customerMobile;
    private String shippingAddress;
//    private String orderInfo;
    private int totalPrice;
    private String paymentTime;
    private int transactionId;
    private int paymentStatus;
    private int orderStatus;
    private List<OrderItemDTO> orderItems;
    
    
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
//	public String getOrderInfo() {
//		return orderInfo;
//	}
//	public void setOrderInfo(String orderInfo) {
//		this.orderInfo = orderInfo;
//	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerMobile() {
		return customerMobile;
	}
	public void setCustomerMobile(String customerMobile) {
		this.customerMobile = customerMobile;
	}
	public String getPaymentTime() {
		return paymentTime;
	}
	public void setPaymentTime(String paymentTime) {
		this.paymentTime = paymentTime;
	}
	public int getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	public int getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(int totalPrice) {
		this.totalPrice = totalPrice;
	}
	public int getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(int paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public String getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(String shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	public int getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(int orderStatus) {
		this.orderStatus = orderStatus;
	}
	public List<OrderItemDTO> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(List<OrderItemDTO> orderItems) {
		this.orderItems = orderItems;
	}

    // getters and setters
}
