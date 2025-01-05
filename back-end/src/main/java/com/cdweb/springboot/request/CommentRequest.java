package com.cdweb.springboot.request;

public class CommentRequest {
    private Long id;
    private String content;
    private Long productId;
    private Long parentCommentId;
    private Long userId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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

    // getters and setters
    
}
