package com.fit.backend.dao;

import com.fit.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "phan-quyen")
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
