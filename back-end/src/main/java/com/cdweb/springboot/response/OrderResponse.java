package com.cdweb.springboot.response;

import java.util.List;

public class OrderResponse {

	private String id;
	private String Date;
    private String paymentStatus;
    private String fulfillmentStatus;
    private String total;
    private List<OrderItemResponse> orderItems;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public String getFulfillmentStatus() {
		return fulfillmentStatus;
	}
	public void setFulfillmentStatus(String fulfillmentStatus) {
		this.fulfillmentStatus = fulfillmentStatus;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public List<OrderItemResponse> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(List<OrderItemResponse> orderItems) {
		this.orderItems = orderItems;
	}
    
    
}
