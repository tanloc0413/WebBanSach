package com.fit.backend.controller;

import com.fit.backend.entity.Users;
import com.fit.backend.security.JwtResponse;
import com.fit.backend.security.LoginRequest;
import com.fit.backend.service.AccountService;
import com.fit.backend.service.JWTService;
import com.fit.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Configuration
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tai-khoan")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JWTService jwtService;


    @PostMapping("/dang-ky")
    public ResponseEntity<?> registerUser(@Validated @RequestBody Users users) {
        ResponseEntity<?> response = accountService.registerUser(users);

        return response;
    }

    @GetMapping("/kich-hoat")
    public ResponseEntity<?> activateAccount(@RequestParam String email, @RequestParam String activationCode) {
        ResponseEntity<?> response = accountService.activateAccount(email, activationCode);

        return response;
    }

    @PostMapping("/dang-nhap")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );
            if (authentication.isAuthenticated()) {
                final String jwt = jwtService.generateToken(loginRequest.getUsername());
                return ResponseEntity.ok(new JwtResponse(jwt));
            }
        }
        catch (AuthenticationException e) {
            // xác thực ko thành công, trả về lỗi hoặc thông báo
            return ResponseEntity.badRequest().body("Tên đăng nhập hoặc mật khẩu ko chính xác!");
        }
        return ResponseEntity.badRequest().body("Xác thực ko thành công");
    }

}
