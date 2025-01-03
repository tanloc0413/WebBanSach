package com.fit.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "users")
public class Users {
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

    @Column(name = "sex", length = 5)
    private String sex;

    @Column(name = "number_phone")
    private String numberPhone;

    @Column(name = "shipping_address")
    private String shippingAddress; // địa chỉ giao hàng

    @Column(name = "purchase_address")
    private String purchaseAddress; // địa chỉ mua hàng

    @Column(name = "activate_acc")
    private boolean activateAcc;

    @Column(name = "activation_code")
    private String activationCode;

    @Column(name = "avatar", columnDefinition = "LONGTEXT")
    @Lob
    private String avatar;

    @OneToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Evaluate> listEvaluate; // danh sách đánh giá

    @OneToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<FavoriteBook> listFavoriteBook; // danh sách yêu thích

//    private List<Cart> listCart; // danh sách giỏ hàng
    @OneToMany(mappedBy = "users", fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH,
    })
    private List<Order> listOrder; // danh sách đơn hàng

    @ManyToMany(fetch = FetchType.EAGER, cascade = {
            CascadeType.PERSIST, CascadeType.MERGE,
            CascadeType.DETACH, CascadeType.REFRESH
    })
    @JoinTable(
            name = "role_user",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> listRole; // danh sách quyền


    public boolean isActivateAcc() {
        return activateAcc;
    }

    public void setActivateAcc(boolean activateAcc) {
        this.activateAcc = activateAcc;
    }

    public String getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode;
    }
}
