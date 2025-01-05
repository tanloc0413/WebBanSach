package com.cdweb.springboot.dto;

public class CreateCommentDTO {
    private String content;
    private Long productId;
    private Long parentCommentId;
    private String author;
    private Long userId;
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public Long getParentCommentId() {
		return parentCommentId;
	}
	public void setParentCommentId(Long parentCommentId) {
		this.parentCommentId = parentCommentId;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

    // getters and setters
    
}
