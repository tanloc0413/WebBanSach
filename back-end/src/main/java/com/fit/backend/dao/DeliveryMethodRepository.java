package com.fit.backend.dao;

import com.fit.backend.model.DeliveryMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "phuong-thuc-giao-hang")
public interface DeliveryMethodRepository extends JpaRepository<DeliveryMethod, Integer> {
}