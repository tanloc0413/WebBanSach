package com.cdweb.springboot.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.cdweb.springboot.entities.Product;


public interface ProductService {

	public Product getProductById(Long id);
	public Page<Product> getListProductByCategory(String category,Integer minPrice, Integer maxPrice, String sort, Integer page, Integer limit);
	public List<String> getProductNameSuggest(String suggest);
	public Page<Product> getListProductByProductName(String productName,Integer minPrice, Integer maxPrice,String sort, Integer page, Integer limit);
	public Page<Product> getListProductAdminByCategory(String category,Integer minPrice, Integer maxPrice,String sort, Integer page, Integer limit);
}
