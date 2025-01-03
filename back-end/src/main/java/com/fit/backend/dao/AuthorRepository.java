package com.fit.backend.dao;

import com.fit.backend.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "tac-gia")
public interface AuthorRepository extends JpaRepository<Author, Integer> {
}
