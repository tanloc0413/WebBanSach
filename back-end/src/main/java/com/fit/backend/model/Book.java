package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name="book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id")
    private int bookId; // mã sách

    @Column(name = "book_name")
    private String bookName; // tên sách

    @Column(name = "descripstion", columnDefinition = "text")
    private String description; // mô tả

    @Column(name = "list_price")
    private double listPrice; // giá niêm yết

    @Column(name = "price")
    private double price; // giá bán

    @Column(name = "quantity")
    private int quantity; // số lượng

    @Column(name = "average_rating")
    private Double evaluate; // điểm đánh giá

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "book_author",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    private List<Author> listAuthor; // tên tác giả

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "book_genre", // tham gia vào bảng thể loại sách
            joinColumns = @JoinColumn(name="book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
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
