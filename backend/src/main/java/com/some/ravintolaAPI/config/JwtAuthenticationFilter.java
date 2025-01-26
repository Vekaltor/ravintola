package com.some.ravintolaAPI.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private static final String SECRET_KEY = "17d3c3dd384c25ad3326655187884c3abbc7d73e05a29fb038a40475f673c813ec2c938a1fdfcf2f35d17ac4c19a3ba54d3f5b4434cd53b4feeb807efd8324696c20c147a4c994521ac36f3aeb7ba6c3eca3e88c0266f6d354727ebcfe0e20712213abd8f0a7d7334a4d05e3b70cf71602ecc19058a29264ae0cb9f5666057ff";

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        final String token = authorizationHeader.substring(7); // Omiń "Bearer "
        String username = null;
        String role = null;

        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();

            username = claims.getSubject();
            role = claims.get("role", String.class); // Pobierz pojedynczą rolę
        } catch (Exception e) {
            filterChain.doFilter(request, response);
            return;
        }

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            List<SimpleGrantedAuthority> authorities = List.of(
                    new SimpleGrantedAuthority(role)
            );

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    username, null, authorities);
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            System.out.println("Username: " + username);
            System.out.println("Role: " + role);
            System.out.println("Authorities: " + authorities);

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }




        filterChain.doFilter(request, response);
    }
}

