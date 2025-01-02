package com.fit.backend.service;

import com.fit.backend.entity.Users;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    public Users findByUsername(String username);
}
