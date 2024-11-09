package com.fit.backend.model;

import lombok.Data;

import java.util.List;

@Data
public class Role {
    private int idRole; // mã quyền
    private String nameRole; // tên quyền
    private List<User> listUser; // danh sách người dùng
}
