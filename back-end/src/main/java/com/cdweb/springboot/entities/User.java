package com.cdweb.springboot.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String email;
	private String userName;
	private String password;
	private String mobile;
	private String fullName;
	private String role;
//
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<Comment> comments;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<PasswordResetToken> passwordResetTokens;
//
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//	private List<Address> address = new ArrayList<>();

//	@Embedded
//	@ElementCollection
//	@CollectionTable(name = "payment_information", joinColumns = @JoinColumn(name = "user_id"))
//	private List<PaymentInformation> paymentInformation = new ArrayList<>();

//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//	@JsonIgnore
//	private List<Rating> ratings = new ArrayList<>();

	@CreatedDate
	private LocalDateTime createdAt;

	public User() {
	super();
}

	public User(Long id, String email, String userName, String password, String mobile, String fullName, String role,
		Set<PasswordResetToken> passwordResetTokens, LocalDateTime createdAt) {
	super();
	this.id = id;
	this.email = email;
	this.userName = userName;
	this.password = password;
	this.mobile = mobile;
	this.fullName = fullName;
	this.role = role;
	this.passwordResetTokens = passwordResetTokens;
	this.createdAt = createdAt;
}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Set<PasswordResetToken> getPasswordResetTokens() {
		return passwordResetTokens;
	}

	public void setPasswordResetTokens(Set<PasswordResetToken> passwordResetTokens) {
		this.passwordResetTokens = passwordResetTokens;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

}
