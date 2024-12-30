package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "evaluate")
public class Evaluate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "evaluate_id")
    private long evaluateId;

    @Column(name = "rating_points")
    private float ratingPoints; // điểm xếp hạng

    @Column(name = "comment")
    private String comment; // nhận xét

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


}