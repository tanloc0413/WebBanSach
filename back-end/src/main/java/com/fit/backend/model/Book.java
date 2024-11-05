package com.fit.backend.model;

import java.util.List;

public class Book {
    private int idBook; // mã sách
    private String nameBook; // tên sách
    private String nameAuthor; // tên tác giả
    private String description; // mô tả
    private double listPrice; // giá niêm yết
    private double price; // giá bán
    private int quantity; // số lượng
    private Double evaluate; // đánh giá
    List<Category> listCategory; // danh sách thể loại
    List<Image> listImage; // danh sách hình ảnh
    List<Evaluate> listEvaluate; // danh sách đánh giá
    List<OrderDetail> listOrderDetail; // danh sách chi tiết đơn hàng
    List<CartDetail> listCartDetail; // danh sách chi tiết giỏ hàng
    List<Favorite> listFavorite; // danh sách yêu thích
}
