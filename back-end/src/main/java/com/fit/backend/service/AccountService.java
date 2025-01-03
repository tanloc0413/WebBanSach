package com.fit.backend.service;

import com.fit.backend.dao.UserRepository;
import com.fit.backend.entity.Message;
import com.fit.backend.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class AccountService {
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public ResponseEntity<?> registerUser(Users user) {
        // kiểm tra tên tài khoản người dùng tồn tại hay chưa
        if(userRepository.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body(new Message("Username đã tồn tại!"));
        }

        // kiểm tra email đã tồn tại hay chưa
        if(userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body(new Message("Email này đã được dùng"));
        }

        // mã hóa mật khẩu
        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        // gán và gửi thông tin kích hoạt
        user.setActivationCode(createdActiveCode());
        user.setActivateAcc(false);

        // nếu 2 điều kiện trên thỏa mãn thì lưu vào db
        Users registedUser = userRepository.save(user);

        // gửi email cho người dùng để kích hoạt
        sendEmailActivation(user.getEmail(), user.getActivationCode());

        return ResponseEntity.ok("Đăng ký thành công!");
    }

    private String createdActiveCode() {
        // tạo mã ngẫu nhiên
        return UUID.randomUUID().toString();
    }

    private void sendEmailActivation(String email, String activationCode) {
        String subject = "Kích hoạt tài khoản của bạn";
        String text = "Vui lòng nhấn vào mã sau để kích hoạt tài khoản <"+email+">: <html><body><br/><h2>"+activationCode+"<h2></html></body>";
        text += "<br/>Click vào đường link để kích hoạt tài khoản: ";
        String url = "http://localhost:3000/kich-hoat/" + email + "/" + activationCode;
//        String url = "http://localhost:3000/kich-hoat/" + activationCode;
//        String url = "http://localhost:3000/kich-hoat?email=" + email + "&activationCode=" + activationCode;

        text += ("<br/> <a href="+ url +">"+ url +"</a>");
        emailService.sendMessage("camap9888@gmail.com", email, subject, text);
    }


    public ResponseEntity<?> activateAccount(String email, String activationCode) {
        Users user = userRepository.findByEmail(email);

        if(user == null) {
            return ResponseEntity.badRequest().body(new Message("Người dùng không tồn tại!"));
        }

        if(user.isActivateAcc()) {
            return ResponseEntity.badRequest().body(new Message("Tài khoản đã được kích hoạt!"));
        }

        if (activationCode.equals(user.getActivationCode())) {
            user.setActivateAcc(true);
            Users updatedUser = userRepository.save(user);
            System.out.println("User activated: " + updatedUser);
            return ResponseEntity.ok("Kích hoạt tài khoản thành công!");
        }
        else {
            return ResponseEntity.badRequest().body(new Message("Mã kích hoạt không chính xác!"));
        }
    }

}
