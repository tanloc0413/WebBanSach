package com.fit.backend.dao;

import com.fit.backend.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(path = "sach")
public interface BookRepository extends JpaRepository<Book, Integer> {
    Page<Book> findByBookNameContaining(
            @RequestParam("bookName") String bookName, Pageable pageable
    );

    Page<Book> findByListCategory_categoryName(
            @RequestParam("categoryName") String categoryName, Pageable pageable
    );

    Page<Book> findByBookNameContainingAndListCategory_categoryName(
            @RequestParam("bookName") String bookName,
            @RequestParam("categoryName") String categoryName,
            Pageable pageable
    );
}
