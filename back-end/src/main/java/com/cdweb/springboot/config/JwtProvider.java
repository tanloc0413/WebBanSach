package com.cdweb.springboot.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {

    SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

    public String generateToken(User user) {
        return Jwts.builder()
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 846000000))
                .claim("email", user.getEmail())
                .claim("scope", user.getRole())
                .signWith(key)
                .compact();
    }

    public String getEmailFromToken(String jwt) {
        jwt = jwt.substring(7);
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
        return claims.get("email", String.class);
    }

    public boolean validateToken(String jwt) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
