package com.cdweb.springboot.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.response.CategoryResponse;
import com.cdweb.springboot.service.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	public CategoryController(CategoryService categoryService) {
		this.categoryService = categoryService;
	}
	
	@GetMapping()
	public List<Category> getListCategory() {
		return categoryService.getListCategory();
	}
	
	@GetMapping("/products")
	public List<CategoryResponse> getProducts() {
		return categoryService.findTop10ByCategoryId();
	}
}

