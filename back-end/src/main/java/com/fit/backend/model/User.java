package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_ID")
    private int idUser; // mã người dùng

    @Column(name = "username")
    private String username;

    @Column(name = "password", length = 512)
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "lastName")
    private String lastName; // họ và tên đệm
//    private String middleName; // tên đệm

    @Column(name = "firstName")
    private String firstName; // tên

    @Column(name = "sex")
    private char sex;

    @Column(name = "number_phone")
    private int numberPhone;

    @Column(name = "shipping_address")
    private String shippingAddress; // địa chỉ giao hàng

    @Column(name = "purchase_address")
    private String purchaseAddress; // địa chỉ mua hàng

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Evaluate> listEvaluate; // danh sách đánh giá

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<FavoriteBook> listFavoriteBook; // danh sách yêu thích

//    private List<Cart> listCart; // danh sách giỏ hàng
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Order> listOrder; // danh sách đơn hàng

    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "role_user",
            joinColumns = @JoinColumn(name="user_ID"),
            inverseJoinColumns = @JoinColumn(name = "role_ID")
    )
    private List<Role> listRole; // danh sách quyền

}
