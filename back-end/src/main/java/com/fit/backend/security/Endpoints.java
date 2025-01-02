package com.fit.backend.security;

public class Endpoints {

    public static final String front_end_host = "http://localhost:3000";

    public static final String[] PUBLIC_GET_POINTS = {
            "/sach",
            "/sach/**",
            "/hinh-anh",
            "/hinh-anh/**",
            "/nguoi-dung/search/existsByUsername",
            "/nguoi-dung/search/existsByEmail",
            "/tai-khoan/kich-hoat"
    };

    public static final String[] PUBLIC_POST_POINTS = {
            "/tai-khoan/dang-ky"
    };

    public static final String[] ADMIN_POST_POINTS = {
            "/nguoi-dung",
            "/nguoi-dung/**"
    };
}
