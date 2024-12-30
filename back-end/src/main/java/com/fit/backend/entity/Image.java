package com.fit.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "img_id")
    private int imageId;

    @Column(name = "img_name")
    private String imageName;

    @Column(name = "check_icon")
    private boolean checkIcon; // kiểm tra có phải là icon

    @Column(name = "img_path")
    private String pathImage; // đường dẫn

    @Lob
    @Column(name = "img_data", columnDefinition = "LONGTEXT")
    private String dataImage; // dữ liệu hình ảnh

    @ManyToOne(cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,

    })
    @JoinColumn(name = "book_id", nullable = false)
    private Book book;
}
