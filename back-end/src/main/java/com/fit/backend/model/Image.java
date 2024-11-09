package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "img_ID")
    private int idImage;

    @Column(name = "img_name")
    private String nameImage;

    @Column(name = "check_icon")
    private boolean checkIcon; // kiểm tra có phải là icon

    @Column(name = "img_path")
    private String pathImage; // đường dẫn

    @Column(name = "img_data")
    @Lob
    private String dataImage; // dữ liệu hình ảnh

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "book_ID", nullable = false)
    private Book book;
}
