package com.fit.backend.dao;

import com.fit.backend.model.FavoriteBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "yeu-thich")
public interface FavoriteBookRepository extends JpaRepository<FavoriteBook, Integer> {
}
