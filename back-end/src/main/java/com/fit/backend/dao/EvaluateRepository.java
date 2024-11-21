package com.fit.backend.dao;

import com.fit.backend.model.Evaluate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "danh-gia")
public interface EvaluateRepository extends JpaRepository<Evaluate, Long> {
}
