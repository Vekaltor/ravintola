package com.some.ravintolaAPI.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "17d3c3dd384c25ad3326655187884c3abbc7d73e05a29fb038a40475f673c813ec2c938a1fdfcf2f35d17ac4c19a3ba54d3f5b4434cd53b4feeb807efd8324696c20c147a4c994521ac36f3aeb7ba6c3eca3e88c0266f6d354727ebcfe0e20712213abd8f0a7d7334a4d05e3b70cf71602ecc19058a29264ae0cb9f5666057ff";
    private static final long VALIDITY_MS = 3600000; // 1 godzina

    public String generateToken(String username, String role) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + VALIDITY_MS);

        return Jwts.builder()
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
