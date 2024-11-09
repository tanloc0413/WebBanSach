package com.fit.backend.model;

import lombok.Data;

@Data
public class Evaluate {
    private long idEvaluate;
    private float ratingPoints; // điểm xếp hạng
    private String comment; // nhận xét
    private Book book;
    private User user;


}
