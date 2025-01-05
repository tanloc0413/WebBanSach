package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;

public interface CategoryRespository extends JpaRepository<Category, Long>{
	
}
