package com.cdweb.springboot.repository;

public class AuthResponse {

	private Long id;
	private String email;
	private String userName;
	private String fullName;
	private String mobile;
//	private String role;
	private String jwt;
	private String message;

	public AuthResponse(Long id, String email, String userName, String fullName, String mobile, String jwt,
			String message) {
		super();
		this.id = id;
		this.email = email;
		this.userName = userName;
		this.fullName = fullName;
		this.mobile = mobile;
//		this.role = role;
		this.jwt = jwt;
		this.message = message;
	}
	public AuthResponse() {
		super();
	}
	public String getJwt() {
		return jwt;
	}
	public void setJwt(String jwt) {
		this.jwt = jwt;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
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
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
//	public String getRole() {
//		return role;
//	}
//	public void setRole(String role) {
//		this.role = role;
//	}
	
	
}
