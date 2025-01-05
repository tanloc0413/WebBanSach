package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.Comment;
import com.cdweb.springboot.projection.CommentProjection;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	
//	@Query("SELECT c FROM Comment c WHERE (c.product.id = :productId)")
//	public List<Comment> findByProductId(@Param("productId") Long productId);

//	List<Comment> findByProductId(Long productId);

    List<Comment> findByProductIdAndParentCommentIdIsNull(Long productId);

	List<Comment> findByParentCommentId(Long parentCommentId);
}
