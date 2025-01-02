package com.fit.backend.service;

import com.fit.backend.dao.RoleRepository;
import com.fit.backend.dao.UserRepository;
import com.fit.backend.entity.Role;
import com.fit.backend.entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Users findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = userRepository.findByUsername(username);
        if(users == null) {
            throw new UsernameNotFoundException("Tài khoản không tồn tại!");
        }

        User user = new User(users.getUsername(), users.getPassword(), roleToAuthorities(users.getListRole()));

        return user;
    }

//
    private Collection<? extends GrantedAuthority> roleToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role
                        .getRoleName()))
                        .collect(Collectors.toList());
    }
}
