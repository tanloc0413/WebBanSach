package com.cdweb.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.dto.CreateCommentDTO;
import com.cdweb.springboot.entities.Comment;
import com.cdweb.springboot.projection.CommentProjection;
import com.cdweb.springboot.response.ResponseApi;
import com.cdweb.springboot.service.CommentService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

//    @GetMapping
//    public List<Comment> getAllComments() {
//        return commentService.getAllComments();
//    }

    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable Long id) {
        return commentService.getCommentById(id);
    }
    @GetMapping("/product/{productId}")
    public List<Comment> getCommentByProductId(@PathVariable Long productId) {
        return commentService.getCommentsByProductId(productId);
    }
    @PostMapping("/{parentId}/replies")
    public ResponseApi replyToComment(@PathVariable Long parentId, @RequestBody CreateCommentDTO CreateCommentDTO) {
        return commentService.replyToComment(parentId, CreateCommentDTO);
    }
    @PostMapping
    public ResponseApi createComment(@RequestBody CreateCommentDTO createCommentDTO) {
        return commentService.createComment(createCommentDTO);
    }
    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
    }
}
