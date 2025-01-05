//package com.cdweb.springboot.config;
//
//import java.util.Collections;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//@Configuration
//public class AppConfig {
//
//    @Autowired
//    private JwtValidator jwtValidator;
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity
//            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//            .and()
//            .addFilterBefore(jwtValidator, BasicAuthenticationFilter.class)
//            .authorizeHttpRequests(authorize -> authorize
////                .requestMatchers("/api/products/**").permitAll()
//                .requestMatchers("/api/admin/**").hasRole("ADMIN")
//                .anyRequest().permitAll()
//
//
//            )
//            .csrf().disable()
//            .cors().configurationSource(request -> {
//                CorsConfiguration corsConfiguration = new CorsConfiguration();
//                corsConfiguration.setAllowedOrigins(Collections.singletonList("http://localhost:3000"));
//                corsConfiguration.setAllowedMethods(Collections.singletonList("*"));
//                corsConfiguration.setAllowCredentials(true);
//                corsConfiguration.setAllowedHeaders(Collections.singletonList("*"));
//                corsConfiguration.setExposedHeaders(Collections.singletonList("Authorization"));
//                corsConfiguration.setMaxAge(3600L);
//                return corsConfiguration;
//            })
//            .and()
//            .httpBasic();
////            .and()
////            .formLogin();
//        return httpSecurity.build();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}

package com.cdweb.springboot.config;

import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
public class AppConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Thay thế http.csrf().disable()
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration corsConfiguration = new CorsConfiguration();
                    corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000"));
                    corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
                    corsConfiguration.setAllowCredentials(true);
                    corsConfiguration.setAllowedHeaders(List.of("*"));
                    corsConfiguration.setExposedHeaders(List.of("Authorization"));
                    return corsConfiguration;
                }))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        .anyRequest().permitAll()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Thay thế http.sessionManagement()
                .httpBasic(withDefaults());

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

