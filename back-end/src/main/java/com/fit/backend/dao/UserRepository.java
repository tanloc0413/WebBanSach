package com.fit.backend.dao;

import com.fit.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "nguoi-dung")
public interface UserRepository extends JpaRepository<User, Integer> {
    public boolean existsByUsername(String username);

    public boolean existsByEmail(String email);

    public User findByUsername(String username);
}
