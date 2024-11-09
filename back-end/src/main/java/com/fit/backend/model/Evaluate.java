package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Evaluate")
public class Evaluate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "evaluate_ID")
    private long idEvaluate;

    @Column(name = "rating_points")
    private float ratingPoints; // điểm xếp hạng

    @Column(name = "comment")
    private String comment; // nhận xét

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "book_ID", nullable = false)
    private Book book;

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "user_ID", nullable = false)
    private User user;


}
