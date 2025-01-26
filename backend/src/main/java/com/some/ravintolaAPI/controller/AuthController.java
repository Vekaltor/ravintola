package com.some.ravintolaAPI.controller;

import com.some.ravintolaAPI.config.JwtUtil;
import com.some.ravintolaAPI.user.model.LoginRequest;
import com.some.ravintolaAPI.user.model.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://ravintola.toadres.pl","https://ravintola.toadres.pl"})
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthController(AuthenticationManager authenticationManager, JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest body) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(body.getUsername(), body.getPassword()));
            String jwtToken = jwtUtil.generateToken(body.getUsername(), "ROLE_ADMIN");
            return ResponseEntity.ok(new LoginResponse(jwtToken, "ROLE_ADMIN"));
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
