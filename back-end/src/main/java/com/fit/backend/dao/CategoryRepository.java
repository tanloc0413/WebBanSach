package com.fit.backend.dao;

import com.fit.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "the-loai")
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
