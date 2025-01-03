package com.fit.backend.service;

import com.fit.backend.dao.UserRepository;
import com.fit.backend.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Kiểm tra xem tài khoản admin đã tồn tại chưa
//        if (userRepository.findByUsername("admin") == null) {
//            // Mã hóa mật khẩu
//            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//            String encodedPassword = encoder.encode("12345");
//
//            // Tạo tài khoản admin
//            Users admin = new Users();
//            admin.setUsername("admin");
//            admin.setPassword(encodedPassword);
//            admin.setEmail("admin@gmail.com");
//            admin.setFirstName("Admin");
//            admin.setLastName("Admin");
//            admin.setNumberPhone("0379383465");
//            admin.setActivateAcc(true);
//
//            // Lưu tài khoản admin vào cơ sở dữ liệu
//            userRepository.save(admin);
//            logger.info("Tạo tài khoản admin thành công.");
//        } else {
//            logger.info("Tài khoản admin đã tồn tại.");
//        }
    }
}
