package com.fit.backend.dao;

import com.fit.backend.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "chi-tiet-don-hang")
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
