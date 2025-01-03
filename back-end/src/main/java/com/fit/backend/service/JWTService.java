package com.fit.backend.service;

import com.fit.backend.entity.Role;
import com.fit.backend.entity.Users;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

@Component
public class JWTService {
    public static final String SERECT = "7f3a3a2a3b3c3d1e3f2a1b1c4e3d5f2g6h1i3j4k5l6m7n8o9p0q1r2s3t4u5";

    @Autowired
    private UserService userService;

    // Tạo JWT dựa tên đăng nhập
    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        Users user = userService.findByUsername(username);

        boolean isAdmin = false;
        boolean isStaff = false;
        boolean isUser = false;

        if (user != null && user.getListRole().size() > 0) {
            List<Role> list = user.getListRole();
            for(Role role : list){
                if (role.getRoleName().equals("admin")) {
                    isAdmin = true;
                }
                if (role.getRoleName().equals("staff")) {
                    isStaff = true;
                }
                if (role.getRoleName().equals("user")) {
                    isUser = true;
                }
            }
        }
        claims.put("isAdmin", isAdmin);
        claims.put("isStaff", isStaff);
        claims.put("isUser", isUser);

        return createToken(claims, username);
    }

    // tạo jwt với các claim dã chọn
    private String createToken(Map<String, Object> claims, String username) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                // token hết hạn sau 3 ngày
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*60*24*3))
                .signWith(SignatureAlgorithm.HS256, getSignKey())
                .compact();
    }

    // Lấy Serect key
    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SERECT);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // trích xuất thông tin
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(getSignKey()).parseClaimsJws(token).getBody();
    }

    // trích xuất thông tin cho 1 claim
    public <T> T extractClaim(String token, Function<Claims, T> claimsTFunction) {
        final Claims claims = extractAllClaims(token);
        return claimsTFunction.apply(claims);
    }

    // Kiểm tra thời gian hết hạn của token
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Kiểm tra thời gian hết hạn của token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Kiểm tra token đã hết hạn
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Kiểm tra token hợp lệ
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
