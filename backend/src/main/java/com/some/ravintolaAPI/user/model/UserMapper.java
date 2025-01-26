package com.some.ravintolaAPI.user.model;

import com.some.ravintolaAPI.user.model.User;
import com.some.ravintolaAPI.user.model.UserDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public User dtoToEntity(UserDto dto) {
        if (dto.getPassword() == null || dto.getPassword().isEmpty()) {
            throw new RuntimeException("Password cannot be null or empty");
        }

        return User.builder()
                .id(dto.getId())
                .username(dto.getUsername())
                .password(passwordEncoder.encode(dto.getPassword()))
                .role(dto.getRole())
                .build();
    }

    public UserDto entityToDto(User entity) {
        return UserDto.builder()
                .id(entity.getId())
                .username(entity.getUsername())
                .role(entity.getRole())
                .build();
    }
}
