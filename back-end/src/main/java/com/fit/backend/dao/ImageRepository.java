package com.fit.backend.dao;

import com.fit.backend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "hinh-anh")
public interface ImageRepository extends JpaRepository<Image, Integer> {
}
