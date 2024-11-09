package com.fit.backend.model;

import lombok.Data;

@Data
public class FavoriteBook {
    private int idFavoriteBook; // mã sách yêu thích
    private Book book;
    private User user;

}
