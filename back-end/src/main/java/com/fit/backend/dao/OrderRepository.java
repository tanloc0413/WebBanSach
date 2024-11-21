package com.fit.backend.dao;

import com.fit.backend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "don-hang")
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
