package com.fit.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId; // mã người dùng

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "last_name")
    private String lastName; // họ và tên đệm
//    private String middleName; // tên đệm

    @Column(name = "first_name")
    private String firstName; // tên

    @Column(name = "sex", length = 3)
    private char sex;

    @Column(name = "number_phone")
    private String numberPhone;

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
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> listRole; // danh sách quyền

}
