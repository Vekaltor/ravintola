package com.some.ravintolaAPI.user.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserDto {
    private Long id;
    private String username;
    private String password;
    private String role;
    private boolean isActive;
}
