package com.cdweb.springboot.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.ProductRepository;
import com.cdweb.springboot.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{

	private ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	@Override
	public Product getProductById(Long id) {
		// TODO Auto-generated method stub
		Optional<Product> opt = productRepository.findById(id);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
//		System.out.print("Product not found with id: "+id);
	}
	
	@PostAuthorize("hasRole('SCOPE_ADMIN')")
	@Override
	public Page<Product> getListProductAdminByCategory(String category,Integer minPrice, Integer maxPrice,String sort, Integer page, Integer limit){
		// TODO Auto-generated method stub
		System.out.println("pagenumber truoc: ROLE_ADMIN");
		page = page>0 ? page-1:page;
//		System.out.println("pagenumber sau:"+pageNumber);
		
		Pageable pageable = PageRequest.of(page, limit);
		
		List<Product> products = productRepository.filterProductsByCategory(category, minPrice, maxPrice, sort);
		
		int startIndex = (int)pageable.getOffset();
		int endIndex = Math.min(startIndex+ pageable.getPageSize(), products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable,products.size());
		
		return filteredProducts;
	}
//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Override
    public Page<Product> getListProductByCategory(String category, Integer minPrice, Integer maxPrice, String sort, Integer page, Integer limit) {
        page = page > 0 ? page - 1 : page;
        Pageable pageable = PageRequest.of(page, limit);
        List<Product> products = productRepository.filterProductsByCategory(category, minPrice, maxPrice, sort);
        int startIndex = (int) pageable.getOffset();
        int endIndex = Math.min(startIndex + pageable.getPageSize(), products.size());
        List<Product> pageContent = products.subList(startIndex, endIndex);
        return new PageImpl<>(pageContent, pageable, products.size());
    }
	@Override
	public List<String> getProductNameSuggest(String suggest) {
		// TODO Auto-generated method stub
		return productRepository.getProductNameSuggest(suggest);
	}

	@Override
	public Page<Product> getListProductByProductName(String productName,Integer minPrice, Integer maxPrice,String sort, Integer page, Integer limit) {
		// TODO Auto-generated method stub
//		System.out.println("pagenumber truoc:"+pageNumber);
		page = page>0 ? page-1:page;
//		System.out.println("pagenumber sau:"+pageNumber);
		
		Pageable pageable = PageRequest.of(page, limit);
		
		List<Product> products = productRepository.filterProductsByProductName(productName, minPrice, maxPrice, sort);
		
		int startIndex = (int)pageable.getOffset();
		int endIndex = Math.min(startIndex+ pageable.getPageSize(), products.size());
		
		List<Product> pageContent = products.subList(startIndex, endIndex);
		
		Page<Product> filteredProducts = new PageImpl<>(pageContent, pageable,products.size());
		
		return filteredProducts;
	}
}
