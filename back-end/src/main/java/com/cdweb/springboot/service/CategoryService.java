package com.cdweb.springboot.service;

import java.util.List;
import java.util.Map;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.CategoryRespository;
import com.cdweb.springboot.response.CategoryResponse;

public interface CategoryService {

	public List<Category> getListCategory();
	public List<CategoryResponse>  findTop10ByCategoryId();
}
