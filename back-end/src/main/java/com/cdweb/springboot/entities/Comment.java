package com.cdweb.springboot.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "comments")
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String content;
	private String author;

//	@ManyToOne
//	@JoinColumn(name = "product_id")
//	private Product product;

	private Long productId;

//	@ManyToOne
//	@JoinColumn(name = "user_id")
//	private User user;

	private Long userId;

	@JsonManagedReference
	private Long parentCommentId;

//	@JsonManagedReference
//	@ManyToOne
//	@JoinColumn(name = "parent_comment_id")
//	private Comment parentComment;

	@CreatedDate
	private LocalDateTime createAt;

	@OneToMany(mappedBy = "parentCommentId", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Comment> replies;

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

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

//
//	public Product getProduct() {
//		return product;
//	}
//
//	public void setProduct(Product product) {
//		this.product = product;
//	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

//
//	public User getUser() {
//		return user;
//	}
//
//	public void setUser(User user) {
//		this.user = user;
//	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}

//	public Comment getParentComment() {
//		return parentComment;
//	}
//
//	public void setParentComment(Comment parentComment) {
//		this.parentComment = parentComment;
//	}

	public List<Comment> getReplies() {
		return replies;
	}

	public Long getParentCommentId() {
		return parentCommentId;
	}

	public void setParentCommentId(Long parentCommentId) {
		this.parentCommentId = parentCommentId;
	}

	public void setReplies(List<Comment> replies) {
		this.replies = replies;
	}

	public LocalDateTime getCreateAt() {
		return createAt;
	}

//	public String getCreateAt() {
//	      LocalDateTime currentDateTime = LocalDateTime.now();
//	        Duration duration = Duration.between(createAt, currentDateTime);
//	        return duration.toDays()+" trước";
//	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}

}
