package com.fit.backend.model;

import lombok.Data;

@Data
public class Image {
    private int idImage;
    private String nameImage;
    private boolean checkIcon; // kiểm tra có phải là icon
    private String pathImage; // đường dẫn
    private String dataImage; // dữ liệu hình ảnh
    private Book book;
}
