package com.fit.backend.dao;

import com.fit.backend.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "chi-tiet-don-hang")
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
