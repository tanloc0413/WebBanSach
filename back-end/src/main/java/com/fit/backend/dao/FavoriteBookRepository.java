package com.fit.backend.dao;

import com.fit.backend.model.FavoriteBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteBookRepository extends JpaRepository<FavoriteBook, Integer> {
}
