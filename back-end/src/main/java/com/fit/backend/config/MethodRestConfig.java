package com.fit.backend.config;

import com.fit.backend.entity.Users;
import jakarta.persistence.EntityManager;
import jakarta.persistence.metamodel.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MethodRestConfig implements RepositoryRestConfigurer {
    private String url = "http://localhost:3000";

    @Autowired
    private EntityManager entityManager;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] blockMethods = {
                HttpMethod.POST,
                HttpMethod.PUT,
                HttpMethod.PATCH,
                HttpMethod.DELETE
        };

        // expose ids
        // cho phép ids trong khi tra ve json
        config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(Type::getJavaType).toArray(Class[]::new));
        // config.exposeIdsFor(Category.class);

        // cor configuration
//        cors.addMapping("/**")
//                .allowedOrigins(url)
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
////                .allowedHeaders("*")
////                .allowCredentials(true)
//        ;
//        disableHttpMethods(User.class, config, blockMethods );
    }

//    private void disableHttpMethods(Class c,
//                              RepositoryRestConfiguration config,
//                              HttpMethod[] methods) {
//        config.getExposureConfiguration()
//                .forDomainType(c)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(methods))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(methods))
//        ;
//
//    }
}
