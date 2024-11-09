package com.fit.backend.model;

import lombok.Data;
import java.util.List;

@Data
public class User {
    private int idUser; // mã người dùng
    private String username;
    private String password;
    private String email;
    private String lastName; // họ và tên đệm
//    private String middleName; // tên đệm
    private String firstName; // tên
    private char sex;
    private int numberPhone;
    private String shippingAddress; // địa chỉ giao hàng
    private String purchaseAddress; // địa chỉ mua hàng
    private List<FavoriteBook> listFavoriteBook; // danh sách yêu thích
    private List<Evaluate> listEvaluate; // danh sách đánh giá
    private List<Cart> listCart; // danh sách giỏ hàng
    private List<Order> listOrder; // danh sách đơn hàng
    private List<Role> listRole; // danh sách quyền

}
