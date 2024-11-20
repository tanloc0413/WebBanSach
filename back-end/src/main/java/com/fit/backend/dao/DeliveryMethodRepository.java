package com.fit.backend.dao;

import com.fit.backend.model.DeliveryMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryMethodRepository extends JpaRepository<DeliveryMethod, Integer> {
}
