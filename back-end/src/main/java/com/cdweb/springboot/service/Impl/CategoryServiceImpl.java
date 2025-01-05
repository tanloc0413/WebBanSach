package com.cdweb.springboot.service.Impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.CategoryRespository;
import com.cdweb.springboot.repository.ProductRepository;
import com.cdweb.springboot.response.CategoryResponse;
import com.cdweb.springboot.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRespository categoryRespository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Category> getListCategory() {
		// TODO Auto-generated method stub
		return categoryRespository.findAll();
	}

	@Override
	public List<CategoryResponse> findTop10ByCategoryId() {
		// TODO Auto-generated method stub
		
		List<CategoryResponse> categoryRespositories = new ArrayList<CategoryResponse>();
		
		List<Category> categories = categoryRespository.findAll();
		for (Category category : categories) {
			categoryRespositories.add(new CategoryResponse(category.getId(), category.getName(), productRepository.findTop10ByCategoryId(category.getId())));
		}
		return categoryRespositories;
	}

}
