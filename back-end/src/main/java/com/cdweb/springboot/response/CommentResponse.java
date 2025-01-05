package com.cdweb.springboot.response;

import java.util.List;

public class CommentResponse {

	private Long commentId;
	private String author;
	private String date;
	private String createDate;
	private String content;
	private List<CommentResponse> replies;
	
	
	public Long getCommentId() {
		return commentId;
	}
	public void setCommentId(Long commentId) {
		this.commentId = commentId;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public List<CommentResponse> getReplies() {
		return replies;
	}
	public void setReplies(List<CommentResponse> replies) {
		this.replies = replies;
	}
	
	

}
