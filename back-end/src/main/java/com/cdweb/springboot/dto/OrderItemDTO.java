package com.cdweb.springboot.dto;

public class OrderItemDTO {

	private Long productId;
	private int quantity;

	public Long getProductId() {
		return productId;
	}

	public OrderItemDTO() {
		super();
	}

	public OrderItemDTO(Long productId, int quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

//	public int getPrice() {
//		return price;
//	}
//
//	public void setPrice(int price) {
//		this.price = price;
//	}

}
