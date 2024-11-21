package com.fit.backend.dao;

import com.fit.backend.model.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "phuong-thuc-thanh-toan")
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Integer> {
}
