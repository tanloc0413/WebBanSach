package com.fit.backend.dao;

import com.fit.backend.model.Evaluate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EvaluateRepository extends JpaRepository<Evaluate, Integer> {
}
