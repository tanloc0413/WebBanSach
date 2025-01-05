package com.cdweb.springboot.projection;

import java.time.LocalDateTime;
import java.util.List;

import com.cdweb.springboot.entities.Comment;

public interface CommentProjection {
    Long getId();
    String getContent();
    String getAuthor();
    Long getProductId();
    Long getUserId();
//    Long getParentCommentId();
    LocalDateTime getCreateAt();
    List<Comment> getReplies(); 
}

