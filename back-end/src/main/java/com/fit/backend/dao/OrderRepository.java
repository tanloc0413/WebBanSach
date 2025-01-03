package com.fit.backend.dao;

import com.fit.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "don-hang")
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
