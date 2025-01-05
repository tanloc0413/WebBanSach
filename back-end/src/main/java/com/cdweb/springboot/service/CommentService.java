package com.cdweb.springboot.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.dto.CreateCommentDTO;
import com.cdweb.springboot.entities.Comment;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.projection.CommentProjection;
import com.cdweb.springboot.repository.CommentRepository;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.response.CommentResponse;
import com.cdweb.springboot.response.ResponseApi;

@Service
public class CommentService {
	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private UserRepository userRepository;

	public Comment getCommentById(Long id) {
		return commentRepository.findById(id).orElse(null);
	}

	public List<Comment> getCommentsByProductId(Long productId) {
//    	List<CommentResponse> commentResponses = new ArrayList<CommentResponse>();
//    	List<Comment> lst = commentRepository.findByProductId(productId);
//    	for (Comment comment : lst) {
//    		CommentResponse commentResponse = new CommentResponse();
//    		commentResponse.setAuthor(comment.getAuthor());
//    		commentResponse.setCommentId(comment.getId());
//    		commentResponse.setContent(comment.getContent());
//    		commentResponse.setCreateDate(comment.getCreateAt().toString());
//    		commentResponse.setAuthor(comment.getAuthor());
//    		List<CommentResponse> responses = new ArrayList<CommentResponse>();
//    		for (Comment comment2 : comment.getReplies()) {
//        		CommentResponse commentResponse1 = new CommentResponse();
//        		commentResponse.setAuthor(comment.getAuthor());
//        		commentResponse.setCommentId(comment.getId());
//        		commentResponse.setContent(comment.getContent());
//        		commentResponse.setCreateDate(comment.getCreateAt().toString());
//        		commentResponse.setAuthor(comment.getAuthor());
//			}
//			commentResponses.add(commentResponse );
//		}

		return commentRepository.findByProductIdAndParentCommentIdIsNull(productId);
	}

	public List<Comment> getRepliesByCommentId(Long commentId) {
		return commentRepository.findByParentCommentId(commentId);
	}

	public ResponseApi replyToComment(Long parentCommentId, CreateCommentDTO createCommentDTO) {
//		Comment parentComment = commentRepository.findById(parentCommentId)
//				.orElseThrow(() -> new RuntimeException("Parent comment not found"));
		Comment replyComment = new Comment();
		replyComment.setContent(createCommentDTO.getContent());
		replyComment.setAuthor(createCommentDTO.getAuthor());
//		replyComment.setParentComment(parentComment);
		replyComment.setParentCommentId(parentCommentId);

		if (createCommentDTO.getProductId() == null || createCommentDTO.getUserId() == null) {
			return new ResponseApi("failed", "Cannot comment");
		}
//        Product product = new Product();
//        product.setId(createCommentDTO.getProductId());
//        replyComment.setProduct(product);
		replyComment.setProductId(createCommentDTO.getProductId());

//		User user = userRepository.findById(createCommentDTO.getUserId()).orElse(null);
//        replyComment.setUser(user);
		replyComment.setUserId(createCommentDTO.getUserId());
//		replyComment.setUserName(user.getFullName());

		commentRepository.save(replyComment);

		return new ResponseApi("success", "Comment added");
	}

	public ResponseApi createComment(CreateCommentDTO createCommentDTO) {
		Comment comment = new Comment();
		comment.setContent(createCommentDTO.getContent());
		comment.setAuthor(createCommentDTO.getAuthor());

		if (createCommentDTO.getProductId() == null || createCommentDTO.getUserId() == null) {
			return new ResponseApi("failed", "Cannot comment");
		}
//        Product product = new Product();
//        product.setId(createCommentDTO.getProductId());
//        comment.setProduct(product);
		comment.setProductId(createCommentDTO.getProductId());

//		User user = userRepository.findById(createCommentDTO.getUserId()).orElse(null);
//        comment.setUser(user);
		comment.setUserId(createCommentDTO.getUserId());

		if (createCommentDTO.getParentCommentId() != null) {
			Comment parentComment = new Comment();
			parentComment.setId(createCommentDTO.getParentCommentId());
//			comment.setParentComment(parentComment);
			comment.setParentCommentId(createCommentDTO.getParentCommentId());
		}
		commentRepository.save(comment);
		return new ResponseApi("success", "Comment added");
	}

	public void deleteComment(Long id) {
		commentRepository.deleteById(id);
	}
}
