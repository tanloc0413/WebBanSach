package com.fit.backend.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
public class Category {
    private int idCategory;
    private String nameCategory;
    private List<Book> listBook;

}
