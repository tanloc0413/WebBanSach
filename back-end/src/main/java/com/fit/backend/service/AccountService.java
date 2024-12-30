package com.fit.backend.service;

import com.fit.backend.dao.UserRepository;
import com.fit.backend.entity.Message;
import com.fit.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> registerUser(User user) {
        // kiểm tra tên tài khoản người dùng tồn tại hay chưa
        if(userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body(new Message("Username đã tồn tại!"));
        }

        // kiểm tra email đã tồn tại hay chưa
        if(userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(new Message("Email này đã được dùng"));
        }

        // nếu 2 điều kiện trên thỏa mãn thì lưu vào db
        User registedUser = userRepository.save(user);

        return ResponseEntity.ok("Đăng ký thành công!");
    }
}
