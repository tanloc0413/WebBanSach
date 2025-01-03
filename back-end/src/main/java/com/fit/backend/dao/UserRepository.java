package com.fit.backend.dao;

import com.fit.backend.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "nguoi-dung")
public interface UserRepository extends JpaRepository<Users, Integer> {
    public boolean existsByUsername(String username);

    public boolean existsByEmail(String email);

    public Users findByUsername(String username);

    public Users findByEmail(String email);
}
