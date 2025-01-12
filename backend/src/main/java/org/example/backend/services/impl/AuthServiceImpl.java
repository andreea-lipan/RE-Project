package org.example.backend.services.impl;

import org.example.backend.model.DTOs.LoginRequest;
import org.example.backend.model.DTOs.LoginResponse;
import org.example.backend.model.Utilizator;
import org.example.backend.persistence.UserRepository;
import org.example.backend.services.AuthService;
import org.example.backend.services.exceptions.RepoException;
import org.example.backend.services.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public LoginResponse logIn(LoginRequest loginRequest) {
        Utilizator utilizator = userRepository.findUserByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RepoException("Invalid email!"));
        if (!utilizator.getPassword().equals(loginRequest.getPassword())) {
            throw new ServiceException("Invalid password!");
        }
        return new LoginResponse(utilizator.getId(), utilizator.getRole().toString());
    }
}