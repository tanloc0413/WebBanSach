package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Data
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Category ID")
    private int idCategory;

    @Column(name = "Category name", length = 150)
    private String nameCategory;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "Category book",
            joinColumns = @JoinColumn(name="Category ID"),
            inverseJoinColumns = @JoinColumn(name = "Book ID")
    )
    private List<Book> listBook;

}
