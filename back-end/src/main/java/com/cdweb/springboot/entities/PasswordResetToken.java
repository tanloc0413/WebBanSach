package com.cdweb.springboot.entities;

import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "password_reset_tokens")
public class PasswordResetToken {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(unique = true, nullable = false)
	private String token;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "user_id")
	private User user;

	private Date expiryDate;
	@CreatedDate
	private LocalDateTime createAt;

	public PasswordResetToken() {
	}

	public PasswordResetToken(String token, User user) {
		this.token = token;
		this.user = user;
		this.expiryDate = calculateExpiryDate(24 * 60); // 24 hours
	}

	private Date calculateExpiryDate(int expiryTimeInMinutes) {
		Date now = new Date();
		return new Date(now.getTime() + expiryTimeInMinutes * 60 * 1000);
	}

	public LocalDateTime getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	// Getters and setters

}
