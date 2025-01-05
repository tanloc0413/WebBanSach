package com.cdweb.springboot.request;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

public class CreateProductRequest {

	private String productName;
	
	private String imageUrl;
	
	private String description;
	
	private int price;
	
	private int discountedPrice;
	
	private int discountedPersent;
	
	private int quantity;
	
	private String brand;
	
	private String topLevelCategory;
	private String secondLevelCategory;
	private String thirdLevelCategory;
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getDiscountedPrice() {
		return discountedPrice;
	}
	public void setDiscountedPrice(int discountedPrice) {
		this.discountedPrice = discountedPrice;
	}
	public int getDiscountedPersent() {
		return discountedPersent;
	}
	public void setDiscountedPersent(int discountedPersent) {
		this.discountedPersent = discountedPersent;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getTopLevelCategory() {
		return topLevelCategory;
	}
	public void setTopLevelCategory(String topLevelCategory) {
		this.topLevelCategory = topLevelCategory;
	}
	public String getSecondLevelCategory() {
		return secondLevelCategory;
	}
	public void setSecondLevelCategory(String secondLevelCategory) {
		this.secondLevelCategory = secondLevelCategory;
	}
	public String getThirdLevelCategory() {
		return thirdLevelCategory;
	}
	public void setThirdLevelCategory(String thirdLevelCategory) {
		this.thirdLevelCategory = thirdLevelCategory;
	}
	
	
}
