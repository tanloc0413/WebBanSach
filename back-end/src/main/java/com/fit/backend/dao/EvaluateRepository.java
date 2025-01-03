package com.fit.backend.dao;

import com.fit.backend.entity.Evaluate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "danh-gia")
public interface EvaluateRepository extends JpaRepository<Evaluate, Long> {
}
