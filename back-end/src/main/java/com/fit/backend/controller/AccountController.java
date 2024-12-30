package com.fit.backend.controller;

import com.fit.backend.entity.User;
import com.fit.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tai-khoan")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/dang-ky")
    public ResponseEntity<?> registerUser(@Validated @RequestBody User user) {
        ResponseEntity<?> response = accountService.registerUser(user);

        return response;
    }

}
