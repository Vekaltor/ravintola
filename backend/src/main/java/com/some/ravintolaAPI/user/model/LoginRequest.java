package com.some.ravintolaAPI.user.model;

import lombok.Getter;
import lombok.Setter;

@Getter
public class LoginRequest {
    private String username;
    private String password;
}
