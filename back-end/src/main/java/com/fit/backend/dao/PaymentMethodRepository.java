package com.fit.backend.dao;

import com.fit.backend.entity.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "phuong-thuc-thanh-toan")
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Integer> {
}
