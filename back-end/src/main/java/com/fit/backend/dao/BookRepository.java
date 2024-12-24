package com.fit.backend.dao;

import com.fit.backend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RepositoryRestResource(path = "sach")
public interface BookRepository extends JpaRepository<Book, Integer> {


}
