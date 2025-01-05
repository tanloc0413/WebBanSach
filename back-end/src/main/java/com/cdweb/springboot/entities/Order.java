package com.cdweb.springboot.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

//	@Column(name = "order_infor")
//	private String orderInfo;

	@Column(name = "customer_name")
	private String customerName;

	@Column(name = "customer_email")
	private String customerEmail;

	@Column(name = "customer_mobile")
	private String customerMobile;

	@Column(name = "payment_time")
	private String paymentTime;

	@Column(name = "transaction_id")
	private int transactionId;

	@Column(name = "total_price")
	private int totalPrice;

	@Column(name = "payment_status")
	private int paymentStatus;

	@Column(name = "shipping_address")
	private String shippingAddress;

	@Column(name = "order_status")
	private int orderStatus;

	@OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<OrderItem> orderItems;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	// Getters setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

//	public String getOrderInfo() {
//		return orderInfo;
//	}
//
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

	public void getCustomerMobile(String customerMobile) {
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

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
