package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name="Book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_ID")
    private int idBook; // mã sách

    @Column(name = "book_title")
    private String nameBook; // tên sách

    @Column(name = "author")
    private String nameAuthor; // tên tác giả

    @Column(name = "descripstion", columnDefinition = "text")
    private String description; // mô tả

    @Column(name = "list_price")
    private double listPrice; // giá niêm yết

    @Column(name = "price")
    private double price; // giá bán

    @Column(name = "quantity")
    private int quantity; // số lượng

    @Column(name = "evaluate")
    private Double evaluate; // đánh giá

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "category_book",
            joinColumns = @JoinColumn(name="book_ID"),
            inverseJoinColumns = @JoinColumn(name = "category_ID")
    )
    List<Category> listCategory; // danh sách thể loại

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Image> listImage; // danh sách hình ảnh

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    List<Evaluate> listEvaluate; // danh sách đánh giá

    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    List<OrderDetail> listOrderDetail; // danh sách chi tiết đơn hàng

//    @OneToMany(mappedBy = "Book", fetch = FetchType.LAZY, cascade = {
//            CascadeType.PERSIST, CascadeType.MERGE,
//            CascadeType.DETACH, CascadeType.REFRESH,
//    })
//    List<CartDetail> listCartDetail; // danh sách chi tiết giỏ hàng
    @OneToMany(mappedBy = "book", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<FavoriteBook> listFavoriteBook; // danh sách yêu thích
}
