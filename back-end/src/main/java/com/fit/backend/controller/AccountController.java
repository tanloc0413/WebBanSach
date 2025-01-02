package com.fit.backend.controller;

import com.fit.backend.entity.Users;
import com.fit.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tai-khoan")
public class AccountController {
    @Autowired
    private AccountService accountService;


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

}
