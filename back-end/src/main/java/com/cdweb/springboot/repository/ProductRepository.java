package com.cdweb.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	@Query("SELECT p FROM Product p " +
			"WHERE (p.category.name = :category OR :category = '') " +
			"AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice)) " +
			"ORDER BY "+
			"CASE WHEN :sort = 'ASC' THEN p.discountedPrice END ASC, "+
			"CASE WHEN :sort = 'DESC' THEN p.discountedPrice END DESC" )
			public List<Product> filterProductsByCategory(@Param("category")String category,
			        @Param("minPrice") Integer minPrice,
			        @Param("maxPrice") Integer maxPrice,
			        @Param("sort") String sort);

	List<Product> findTop10ByCategoryId(Long categoryId);
	
	@Query("SELECT p.productName FROM Product p " +
			"WHERE p.productName LIKE %:suggest% ")
	List<String> getProductNameSuggest(@Param("suggest") String suggest);
	
	@Query("SELECT p FROM Product p " +
			"WHERE (p.productName LIKE %:productName%) " +
			"AND ((:minPrice IS NULL AND :maxPrice IS NULL) OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice)) " +
			"ORDER BY "+
			"CASE WHEN :sort = 'ASC' THEN p.discountedPrice END ASC, "+
			"CASE WHEN :sort = 'DESC' THEN p.discountedPrice END DESC" )
	public List<Product> filterProductsByProductName(@Param("productName")String productName,
			        @Param("minPrice") Integer minPrice,
			        @Param("maxPrice") Integer maxPrice,
			        @Param("sort") String sort);
}