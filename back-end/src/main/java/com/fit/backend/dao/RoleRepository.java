package com.fit.backend.dao;

import com.fit.backend.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "phan-quyen")
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
