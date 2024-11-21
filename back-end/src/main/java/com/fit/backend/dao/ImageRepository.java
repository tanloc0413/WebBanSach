package com.fit.backend.dao;

import com.fit.backend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(path = "hinh-anh")
public interface ImageRepository extends JpaRepository<Image, Integer> {
}
